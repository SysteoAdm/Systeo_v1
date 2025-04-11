import { Component } from '@angular/core';
import { QUESTIONS, Question } from 'src/app/mocks/mock-questions';

@Component({
  selector: 'app-av-adolescentes',
  templateUrl: './av-adolescentes.component.html',
  styleUrls: ['./av-adolescentes.component.css']
})
export class AVAdolescentesComponent {
  questions: Question[] = QUESTIONS;

  getLetter(index: number): string {
    return String.fromCharCode(97 + index); // 97 = 'a'
  }

}
