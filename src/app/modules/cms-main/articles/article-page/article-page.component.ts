import { Component, OnInit, OnDestroy } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

import {ArticlesService} from '../../../../core/services/articles.service';
import {take} from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.css']
})
export class ArticlePageComponent implements OnInit, OnDestroy {

  articleForm: FormGroup;
  isEdit: boolean;
  isLoader: boolean;
  private articleId: any;

  constructor(private _articleService: ArticlesService,
              private router: Router) {
    this.isEdit = this.router.url.includes('edit');

    if (this.isEdit) {
      this.getArticleId();
    }
  }

  ngOnInit(): void {
    this.init();
  }

  ngOnDestroy(): void {
    if (this.isEdit) {
      this.removeArticleId();
    }
  }

  onCreateArticle(): void {
    this._articleService.createArticle(this.articleForm.value)
        .pipe(take(1)).subscribe(res => {
          if (res) {
            console.log(res);
          }
    }, errr => {
          console.log(errr);
    });
  }

  onEditArticle(): void {
    if (this.articleForm.invalid) {
      return;
    }
    console.log(this.articleForm.value);
    this._articleService.updateArticle(this.articleForm.value)
        .pipe(take(1)).subscribe(res => {
          if (res) {
            console.log(res);
          }
    }, erro => {
          console.log(erro);
    });
  }

  getArticleId(): void {
    this.articleId = localStorage.getItem('ArticleId');

    if (this.articleId) {
      this.getArticleData();
    }
  }

  getArticleData(): void {
    this._articleService.getArticle(this.articleId)
        .subscribe(article => {
          this.articleForm.patchValue({
            title: article['title'],
            content: article['content'],
            id: article['id']
          });
          console.log(this.articleForm.value);
        });
  }

  removeArticleId(): void {
    localStorage.removeItem('ArticleId');
  }

  private init(): void {
    this.articleForm = new FormGroup({
      'id': new FormControl(null),
      'title': new FormControl(''),
      'content': new FormControl(null)
    });
  }

}
