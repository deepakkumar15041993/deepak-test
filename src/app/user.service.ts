import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  url = 'https://jsonplaceholder.typicode.com/users';
  private users: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  users$ = this.users.asObservable();

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get(this.url);
  }
}
