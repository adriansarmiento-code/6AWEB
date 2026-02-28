import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { Register } from './register/register';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, Register],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'angular-forms-lab';
}