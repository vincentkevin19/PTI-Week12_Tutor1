import { Component } from '@angular/core';
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-first-tutorial';
  articles: Article[];

  constructor(){
    this.articles = [
      new Article('Angular 2', 'https://angular.io', 10),
      new Article('Fullstack', 'https://fullstack.io', 2),
      new Article('Angular Homepage', 'htpps://angular.io', 1),
    ];
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean{
    console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    this.articles.push(new Article(title.value, link.value));
    title.value = '';
    link.value = '';
    return false;
  }

  sortedArticle(): Article[]{
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }
}
