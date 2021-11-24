import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  @Input() article: Article;
  votes: number;
  title: string;
  link: string;

  constructor() {
    this.article = new Article('Angular 2', 'https://angular.io', 10);
    this.votes = 0;
    this.title = "";
    this.link = "";
  }

  ngOnInit(): void {
  }

  voteUp(): boolean {
    this.article.voteUp();
    return false;
  }

  voteDown(): boolean {
    this.article.voteDown();
    return false;
  }

}
