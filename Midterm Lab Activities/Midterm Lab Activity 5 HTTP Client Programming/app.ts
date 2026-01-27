import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Httpclient } from './httpclient';
import { User } from './user.model';
import { QuotesService } from './quotes';
import { Quote } from './quote.model';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal("http-client-demo");
  httpusers: User[] = [];
  quotes: Quote[] = [];

  constructor(
    private httpClient: Httpclient,
    private quotesService: QuotesService
  ) {}

  ngOnInit() {
    this.httpClient.getUsersRemotely().subscribe((data) => {
      this.httpusers = data;
    });

    this.quotesService.getQuotesRemotely().subscribe((data) => {
      this.quotes = data;
    });
  }
}
