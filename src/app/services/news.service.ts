import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Articles } from '../interfaces/article';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  URL: string;
  params: HttpParams;

  constructor(private http: HttpClient) {
    this.URL = `https://newsapi.org/v2/everything`;
    this.params = new HttpParams();
    this.params = this.params.set('apiKey', '367469995be6475cb2c610cc1b8d2617');
  }

  getNews() {
    this.params = this.params.set('q', 'Lapadula');
    this.params = this.params.set('language', 'es');
    return this.http.get<Articles>(`${this.URL}`, { params: this.params });
  }

}
