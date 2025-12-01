import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directives',
  imports: [FormsModule],
  templateUrl: './directives.html',
  styleUrl: './directives.css',
})
export class Directives {
  isStaticNoteVisible: boolean = false;
  isNoteVisible: boolean = true;
  isParagraphVisible: boolean = true;

  showNote() {
  this.isNoteVisible = true;
}
hideNote() {
  this.isNoteVisible = false;
}
toggleNote() {
  this.isParagraphVisible = !this.isParagraphVisible;
}

monthNameStatic: string = 'Mar';
monthNameDynamic: string = 'Mar';

citylist: string[] = ["Angeles", "San Fernando", "Mabalacat", "Tarlac", "Bataan"];
studentList: any[] = [
  {name: 'D Esquivel', course: 'Web Development', isActive:false},
  {name: 'J Dizon', course: 'Network Administration', isActive:false},
  {name: 'F Alejandro', course: 'Systems Development', isActive:false},
  {name: 'J David', course: 'CyberSecurity', isActive:false},
  {name: 'C Quintana', course: 'Web Development', isActive:true},
]
}