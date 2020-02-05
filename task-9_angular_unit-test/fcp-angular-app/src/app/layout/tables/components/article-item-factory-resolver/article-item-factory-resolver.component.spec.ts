import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleItemFactoryResolverComponent } from './article-item-factory-resolver.component';

describe('ArticleItemFactoryResolverComponent', () => {
  let component: ArticleItemFactoryResolverComponent;
  let fixture: ComponentFixture<ArticleItemFactoryResolverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleItemFactoryResolverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleItemFactoryResolverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
