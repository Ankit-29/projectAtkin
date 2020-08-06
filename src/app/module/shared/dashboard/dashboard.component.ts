import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from 'src/app/services/question/question.service';
import { IQuestion } from 'src/app/models/question.model';




@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  isAdmin = false;
  totalQuestion = null;
  solvedQuestion = null;
  totalCategories = null;

  constructor(
    private routes: Router,
    private questionService: QuestionService
  ) { }

  ngOnInit() {
    this.isAdmin = this.routes.url === '/admin';
    this.getTotalQuestions();
    this.getSolvedQuestion();
    this.getTotalCategories();
  }

  getTotalQuestions() {
    this.questionService.getAllQuestion().subscribe((data: { count: number }) => {
      this.totalQuestion = data.count;
    });
  }

  getSolvedQuestion() {
    this.questionService.getSolvedQuestions().subscribe(response => {
      this.solvedQuestion = response.solvedQuestions.length;
    });
  }

  getTotalCategories() {
    this.questionService.getCategories().subscribe(res => {
      this.totalCategories = res.count;
    });
  }

}
