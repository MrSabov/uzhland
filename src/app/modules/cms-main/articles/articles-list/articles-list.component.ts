import { Component, OnInit } from '@angular/core';
import {ArticlesService} from '../../../../core/services/articles.service';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.css']
})
export class ArticlesListComponent implements OnInit {

  articles: any[];
  isLoader: boolean;

  constructor(private _articlesService: ArticlesService) { }

  ngOnInit() {
    this.getAllArticles();
  }

  getAllArticles() {
    this.isLoader = true;
    return this._articlesService.getAllArticles()
        .subscribe(articles => {
          if (articles) {
            this.articles = articles;
            this.isLoader = false;
          }
        });
  }

  getArticleIdForEdit(id: number): void {
    localStorage.setItem('ArticleId', JSON.stringify(+id));
  }

  onDeleteArticle(id: number) {
    this._articlesService.deleteArticle(id.toString())
        .subscribe(() => {
          this.getAllArticles();
        }, error => {
          console.log(error);
        });
  }

}
