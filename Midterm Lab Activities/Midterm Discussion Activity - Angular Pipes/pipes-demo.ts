import { AsyncPipe, CurrencyPipe, DatePipe, DecimalPipe, KeyValuePipe, LowerCasePipe, PercentPipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-pipes-demo',
  imports: [DatePipe, UpperCasePipe, LowerCasePipe, CurrencyPipe, SlicePipe, DecimalPipe, AsyncPipe, PercentPipe, TitleCasePipe, KeyValuePipe],
  templateUrl: './pipes-demo.html',
  styleUrl: './pipes-demo.css',
})
export class PipesDemo {
   presentDate = new Date();
   price = 20000;
   Fruits = ["Apple", "Orange", "Grapes", "Mango", "Kiwi", "Pomegranate"];
   decimalNum1: number = 8.7589623;
   decimalNum2: number = 5.43;
   time$ = interval(1000)
    .pipe(map(val => new Date()));

  // new pipes
   percentValue: number = 0.85;
   titleText: string = "hello world from angular pipes";
   userObject = {
     name: 'Adrian Sarmiento',
     age: 20,
     city: 'Angeles City',
     country: 'Philippines'
   };
}
