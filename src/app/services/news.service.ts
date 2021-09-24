import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Articles } from '../interfaces/article';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  URL: string;
  pageNews: number;
  pageNewsbyCategory: number;
  category: string;

  constructor(private http: HttpClient) {
    this.URL = `https://newsapi.org/v2/everything`;
    this.pageNews = 0;
    this.pageNewsbyCategory = 0;
    this.category = '';
  }

  getNews() {
    this.pageNews++;
    let params = new HttpParams();
    params = params.set('apiKey', '367469995be6475cb2c610cc1b8d2617');
    params = params.set('q', 'Pedro Castillo');
    params = params.set('page', this.pageNews);
    params = params.set('pageSize', 20);
    return this.http.get<Articles>(`${this.URL}`, { params });
  }

  getNewsbyCategory(categoria: string) {
    if (this.category === categoria) {
      this.pageNewsbyCategory++;
    } else {
      this.pageNewsbyCategory = 1;
      this.category = categoria;
    }
    let params = new HttpParams();
    params = params.set('apiKey', '367469995be6475cb2c610cc1b8d2617');
    params = params.set('category', categoria);
    params = params.set('country', 'us');
    params = params.set('page', this.pageNewsbyCategory);
    params = params.set('pageSize', 20);
    return this.http.get<Articles>(`https://newsapi.org/v2/top-headlines`, { params });
  }
}
