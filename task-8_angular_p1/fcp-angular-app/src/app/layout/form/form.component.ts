import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { routerTransition } from '../../router.animations';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { UserDataService } from 'src/app/global-service/user-data.service';
import { NewsItem } from '../interfaces';
import { ArticleService } from '../services/article.service';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  animations: [routerTransition()],
})
export class FormComponent implements OnInit, OnDestroy {

  formTitle: string;
  userName = '';
  editedArticle: NewsItem;
  articleUrlFiled = true;
  changeSuccess = false;

  // image loading
  fileData: File = null;
  previewUrl: any = null;
  fileUploadProgress: string = null;
  uploadedFilePath: string = null;

  newsForm: FormGroup = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    content: new FormControl(''),
    urlToImage: new FormControl(''),
    date: new FormControl({ value: new Date(), disabled: true }),
    author: new FormControl(''),
    url: new FormControl(''),
    pictureFile:  new FormControl(null),
  });

  formData = new FormData();

  constructor(
    private userService: UserDataService,
    private newsService: NewsService,
    private articleService: ArticleService,
    private http: HttpClient,
  ) { }

  ngOnInit() {
    this.articleService.getNewsEdit().subscribe(article => this.editedArticle = article);

    this.formTitle = this.editedArticle ? 'Edit your choosen article' : 'Add new article to localbase';

    if (this.editedArticle) {
      this.setFormValue();
    } else {
      this.userName = localStorage.getItem('userName');
      this.newsForm.patchValue({
        author: this.userName,
      });
    }
  }

  setFormValue() {
    const { _id, isLocalNews, author, title, description, url, urlToImage, publishedAt, content } = this.editedArticle;
    this.newsForm.patchValue({
      title: title ? title : '',
      description: description ? description : '',
      content: content ? content : '',
      urlToImage: urlToImage ? urlToImage : '',
      date: publishedAt ? publishedAt : '',
      author: author ? author : '',
      url: url ? url : title.split(' ').join('-&').toLocaleLowerCase(),
      pictureFile: '',
    });
  }

  imagyTypeChange(value) {
    this.articleUrlFiled = value;
  }

  fileProgress(fileInput: any) {
    this.fileData = fileInput.target.files[0] as File;
    this.preview();
  }

  preview() {
    // Show preview
    const mimeType = this.fileData.type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(this.fileData);
    reader.onload = ($event) => {
      this.previewUrl = reader.result;
      this.newsForm.patchValue({
        pictureFile: reader.result,
      });
    };
  }

  onSubmit() {
    this.formData.append('files', this.fileData);

    this.fileUploadProgress = '0%';

    this.newsForm.patchValue({
      pictureFile: this.fileData,
    });

    // this.http.post('https://us-central1-tutorial-e6ea7.cloudfunctions.net/fileUpload', this.formData, {
    //   reportProgress: true,
    //   observe: 'events'
    // })
    //   .subscribe(events => {
    //     if (events.type === HttpEventType.UploadProgress) {
    //       this.fileUploadProgress = Math.round(events.loaded / events.total * 100) + '%';
    //       console.log(this.fileUploadProgress);
    //     } else if (events.type === HttpEventType.Response) {
    //       this.fileUploadProgress = '';
    //       console.log(events.body);
    //       alert('SUCCESS !!');
    //     }
    //   });
  }

  toFormData<T>( formValue: T ) {
    const formData = new FormData();

    for ( const key of Object.keys(formValue) ) {
      const value = formValue[key];
      formData.append(key, value);
    }

    return formData;
  }

  changeSubmit() {
    const formData = this.toFormData(this.newsForm.value);
    console.log('Form submit', this.newsForm.value);
    this.editedArticle ?
    this.newsService.onEditArticle(this.editedArticle._id, formData) : this.newsService.onPostArticle(formData);
    this.newsForm.reset();
    this.articleService.setChangeSuccess(true);
  }

  ngOnDestroy() {
    this.newsForm.reset();
    this.articleService.clear();
  }
}
