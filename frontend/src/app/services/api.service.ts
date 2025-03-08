import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly BASE_URL = "http://localhost:5000";

  constructor(private readonly http: HttpClient) {}

  analyzeMood(userInput: string) {
    return this.http.post(`${this.BASE_URL}/analyze-mood`, { userInput });
  }
}
