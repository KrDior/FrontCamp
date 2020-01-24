import {Component, OnInit, Input} from '@angular/core';
import {Subject} from 'rxjs';
import {debounceTime} from 'rxjs/operators';
import { ArticleService } from 'src/app/layout/services/article.service';

@Component({
  selector: 'app-alert-selfclosing',
  templateUrl: './alert-selfclosing.component.html'
})
export class AlertSelfclosingComponent implements OnInit {
  private success = new Subject<string>();

  staticAlertClosed = false;
  successMessage: string;

  constructor(
    private articleService: ArticleService,
  ) {}

  ngOnInit(): void {
    this.articleService.getChangeSuccess().subscribe((data) => data ? this.changeSuccessMessage() : null);
    setTimeout(() => this.staticAlertClosed = true, 20000);

    this.success.subscribe((message) => this.successMessage = message);
    this.success.pipe(
      debounceTime(5000)
    ).subscribe(() => this.successMessage = null);
  }

  public changeSuccessMessage() {
    this.success.next(`${new Date()} - Your changes have been successfully saved.`);
  }
}
