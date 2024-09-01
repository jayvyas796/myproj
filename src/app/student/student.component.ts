import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentDetailComponent } from "../student-detail/student-detail.component";

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [CommonModule, StudentDetailComponent],
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {

}
