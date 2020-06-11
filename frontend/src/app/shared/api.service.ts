import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = 'http://localhost:8080/api/movies/';
  categorySubject = new BehaviorSubject<string>("all");
  category = this.categorySubject.asObservable();

  constructor(private http: HttpClient) { }

  public findAll() {
    return this.http.get(this.url + 'all');
  }
  public findById(id: string) {
    return this.http.get(this.url + 'id/' + id);
  }
  public findByCategory(category: string) {
    return this.http.get(this.url + 'category/' + category);
  }

  public changeCategory (category: string) {
    this.categorySubject.next(category)
  }

}
