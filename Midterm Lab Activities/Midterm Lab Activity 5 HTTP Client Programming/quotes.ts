import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { Quote, QuotesResponse } from './quote.model';

@Injectable({
  providedIn: 'root',
})
export class QuotesService {
  private quotesUrl = 'https://dummyjson.com/quotes';

  constructor(private http: HttpClient) {}

  getQuotesRemotely(): Observable<Quote[]> {
    const cachedQuotes = localStorage.getItem('quotes');

    if (cachedQuotes) {
      return of(JSON.parse(cachedQuotes));
    }

    return this.http.get<QuotesResponse>(this.quotesUrl).pipe(
      map(response => response.quotes.slice(0, 5)), // Limit to 5 quotes
      tap(quotes => localStorage.setItem('quotes', JSON.stringify(quotes)))
    );
  }
}
