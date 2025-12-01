import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-data-binding',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {
  message = "Data Binding Demonstration"; //text interpolation
  imageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfB9_xSVVrkFpSQt981-BFN9GNzbkJ8XsqcQ&s";
  w = 200;
  h = 200;
  textColor='blue';
  yourName='';

  count = 0;
  increment() {
    this.count++;
  }
  decrement(){
    this.count--;
  }
  // Interpolation
  studentName = "Adrian Sarmiento";
  score = 95;

  // Property binding
  image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXqiPT62NOZE11tomB6ybNZla2C2Ij2RFFkg&s";
  isDisabled = true;

  // Attribute binding
  colSpanValue = 3;

  // Class binding
  isPassing = true;

  // Style binding
  boxColor = "purple";
  boxSize = "150px";
}
