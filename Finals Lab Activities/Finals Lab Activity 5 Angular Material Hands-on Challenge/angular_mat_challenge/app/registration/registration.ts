import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatTooltipModule } from '@angular/material/tooltip';

// Password: alphanumeric only, min 8 chars, must start with a letter
function passwordValidator(control: AbstractControl): ValidationErrors | null {
  const value: string = control.value || '';
  if (!value) return null;
  if (!/^[a-zA-Z]/.test(value)) return { startsWithLetter: true };
  if (!/^[a-zA-Z0-9]+$/.test(value)) return { alphanumericOnly: true };
  if (value.length < 8) return { minLength: true };
  return null;
}

// Birth date: only 2006 and below
function birthDateValidator(control: AbstractControl): ValidationErrors | null {
  const value = control.value;
  if (!value) return null;
  const year = new Date(value).getFullYear();
  if (year > 2006) return { tooYoung: true };
  return null;
}

@Component({
  selector: 'app-registration',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSliderModule,
    MatRadioModule,
    MatDatepickerModule,
    MatSelectModule,
    MatTooltipModule,
    MatSlideToggleModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  templateUrl: './registration.html',
  styleUrl: './registration.css',
})
export class Registration {
  darkMode = signal(true);
  submitted = false;
  showPassword = false;

  // Submitted values
  callSign: string = '';
  email: string = '';
  password: string = '';
  gender: string = '';
  birthDate!: Date;
  nationality: string = '';
  division: string = '';
  experienceLevel: number = 5;

  maxDate = new Date(2006, 11, 31);
  minSkill = 1;
  maxSkill = 10;

  nationalities = [
    'Philippines', 'United States', 'Japan', 'United Kingdom',
    'Australia', 'Canada', 'South Korea', 'Brazil', 'Germany', 'India'
  ];

  divisions = [
    'Astrophysics', 'Engineering', 'Medical', 'Navigation',
    'Communications', 'Security', 'Science Officer'
  ];

  formdata: FormGroup = new FormGroup({
    callSign: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, passwordValidator]),
    gender: new FormControl('', [Validators.required]),
    birthDate: new FormControl(null, [Validators.required, birthDateValidator]),
    nationality: new FormControl('', [Validators.required]),
    division: new FormControl('', [Validators.required]),
    experienceLevel: new FormControl(5),
  });

  toggleDarkMode() {
    this.darkMode.set(!this.darkMode());
  }

  getPasswordError(): string {
    const ctrl = this.formdata.controls['password'];
    if (ctrl.hasError('required')) return 'Password is required.';
    if (ctrl.hasError('startsWithLetter')) return 'Password must start with a letter.';
    if (ctrl.hasError('alphanumericOnly')) return 'Only letters and numbers allowed.';
    if (ctrl.hasError('minLength')) return 'Must be at least 8 characters.';
    return '';
  }

  onSubmit() {
    if (this.formdata.valid) {
      const data = this.formdata.value;
      this.submitted = true;
      this.callSign = data.callSign;
      this.email = data.email;
      this.password = data.password;
      this.gender = data.gender;
      this.birthDate = data.birthDate;
      this.nationality = data.nationality;
      this.division = data.division;
      this.experienceLevel = data.experienceLevel;
      console.log('Form Submitted!', this.formdata.value);
    } else {
      this.formdata.markAllAsTouched();
      console.log('Form is not valid!');
    }
  }
}