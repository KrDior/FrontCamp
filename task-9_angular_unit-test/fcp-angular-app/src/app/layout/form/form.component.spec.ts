import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { FormComponent } from './form.component';
import { FormModule } from './form.module';
import { DebugElement } from '@angular/core';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;
  let de: DebugElement;
  let el: HTMLElement;
  let originalTimeout;

  beforeEach(
    async(() => {
      originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
      jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
      let httpClient: HttpClient;
      let httpTestingController: HttpTestingController;

      TestBed.configureTestingModule({
        imports: [
          BrowserModule,
          FormModule,
          BrowserAnimationsModule,
          RouterTestingModule,
          HttpClientTestingModule
        ],
      }).compileComponents()
      .then(() => {
        httpClient = TestBed.get(HttpClient);
        httpTestingController = TestBed.get(HttpTestingController);
        fixture = TestBed.createComponent(FormComponent);

        component = fixture.componentInstance;
        de = fixture.debugElement.query(By.css('form'));
        el = de.nativeElement;
        // fixture.detectChanges();
      });
    })
  );

  afterEach(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
  });

  it('should create', async() => {
    expect(component).toBeTruthy();
});


  it(`form should be invalid`, async(() => {
    component.newsForm.controls['title'].setValue('');
    component.newsForm.controls['description'].setValue('test');
    component.newsForm.controls['content'].setValue('');
    expect(component.newsForm.valid).toBeFalsy();
  }));

  it(`form should be valid`, async(() => {
    component.newsForm.controls['title'].setValue('Some title');
    component.newsForm.controls['description'].setValue('any text');
    component.newsForm.controls['content'].setValue('Думаю, задачи инкорпорации и так не стояло, — считает Сергей Чалый. — Впрочем, есть ощущение, что мы Москве обходимся слишком дорого. Говорить, что все стало хорошо, раз этот вариант пропал, не совсем верно. Важнее, что в России закончился очень длинный период. Как говорил Горчаков, «Россия сосредотачивается» (известная фраза главы МИД Российской империи в 1856–1882 годах Александра Горчакова: «Россию упрекают в том, что она изолируется и молчит перед лицом таких фактов, которые не гармонируют ни с правом, ни со справедливостью. Говорят, что Россия сердится. Россия не сердится, Россия сосредотачивается».) У них был период режима осажденной крепости, когда они поняли, что санкции — это не когда «нас бьют, мы крепчаем» и «не смешите искандеры». Санкции — это экономически больно, это большие риски для рубля');
    component.newsForm.controls['url'].setValue('https://news.tut.by/economics/670591.html?tg');
    expect(component.newsForm.valid).toBeTruthy();
  }));

  // it(`should call the changeSubmit method`, async(() => {
  //   component.newsForm.controls['title'].setValue('Some title');
  //   component.newsForm.controls['description'].setValue('any text');
  //   component.newsForm.controls['content'].setValue('Думаю, задачи инкорпорации и так не стояло, — считает Сергей Чалый. — Впрочем, есть ощущение, что мы Москве обходимся слишком дорого. Говорить, что все стало хорошо, раз этот вариант пропал, не совсем верно. Важнее, что в России закончился очень длинный период. Как говорил Горчаков, «Россия сосредотачивается» (известная фраза главы МИД Российской империи в 1856–1882 годах Александра Горчакова: «Россию упрекают в том, что она изолируется и молчит перед лицом таких фактов, которые не гармонируют ни с правом, ни со справедливостью. Говорят, что Россия сердится. Россия не сердится, Россия сосредотачивается».) У них был период режима осажденной крепости, когда они поняли, что санкции — это не когда «нас бьют, мы крепчаем» и «не смешите искандеры». Санкции — это экономически больно, это большие риски для рубля');
  //   component.newsForm.controls['url'].setValue('https://news.tut.by/economics/670591.html?tg');
  //   spyOn(component, 'changeSubmit');
  //   el = fixture.debugElement.query(By.css('button[type=submit]')).nativeElement;
  //   el.click();
  //   expect(component.changeSubmit).toHaveBeenCalled();
  // }));

});
