import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
})
export class ChatComponent {
  userInput: string = '';
  moodResult: string = '';

  constructor(private readonly apiService: ApiService) {}

  analyzeMood() {
    this.apiService.analyzeMood(this.userInput).subscribe((res: any) => {
      this.moodResult = res.moodAnalysis;
    });
  }
}
