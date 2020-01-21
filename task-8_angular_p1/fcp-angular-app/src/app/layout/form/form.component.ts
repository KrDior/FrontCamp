import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { routerTransition } from '../../router.animations';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { UserDataService } from 'src/app/global-service/user-data.service';
import { NewsItem } from '../interfaces';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  animations: [routerTransition()],
  providers: [],

})
export class FormComponent implements OnInit, OnDestroy {

  formTitle: string;
  userName = '';
  editedArticle: NewsItem;
  articleUrlFiled = true;

  // image loading
  fileData: File = null;
  previewUrl: any = null;
  fileUploadProgress: string = null;
  uploadedFilePath: string = null;

  newsForm: FormGroup = new FormGroup({
    heading: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    content: new FormControl(''),
    image: new FormControl(''),
    date: new FormControl({ value: new Date(), disabled: true }),
    author: new FormControl(''),
    sourceUrl: new FormControl(''),
  });

  formData = new FormData();

  constructor(
    private userService: UserDataService,
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
    const { id, isLocalNews, author, title, description, url, urlToImage, publishedAt, content } = this.editedArticle;
    this.newsForm.patchValue({
      heading: title ? title : '',
      description: description ? description : '',
      content: content ? content : '',
      image: urlToImage ? urlToImage : '',
      date: publishedAt ? publishedAt : '',
      author: author ? author : '',
      sourceUrl: url ? title.split(' ').join('-&').toLocaleLowerCase() : '',
    });
  }

  addNews() {
    // this.productService.createProduct(form.value)
    //   .subscribe(
    //     (data: Product) => { this.receivedProduct = data; this.done = true; },
    //     error => console.log(error)
    //   );
    // form.reset();
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
    };
  }

  onSubmit() {
    this.formData.append('files', this.fileData);

    this.fileUploadProgress = '0%';

    this.newsForm.patchValue({
      image: this.fileData,
    });

    this.http.post('https://us-central1-tutorial-e6ea7.cloudfunctions.net/fileUpload', this.formData, {
      reportProgress: true,
      observe: 'events'
    })
      .subscribe(events => {
        if (events.type === HttpEventType.UploadProgress) {
          this.fileUploadProgress = Math.round(events.loaded / events.total * 100) + '%';
          console.log(this.fileUploadProgress);
        } else if (events.type === HttpEventType.Response) {
          this.fileUploadProgress = '';
          console.log(events.body);
          alert('SUCCESS !!');
        }
      });
  }


  changeSubmit() {
    console.log('Form submit', this.newsForm.value);
  }

  ngOnDestroy() {
    this.newsForm.reset();
    this.articleService.clear();
  }
}
