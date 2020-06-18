import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { map, catchError, tap } from 'rxjs/operators';
import { UtilityService } from '../helpers/utility.service';
import { IQuestion } from 'src/app/models/question.model';
import { ICategory } from 'src/app/models/category.model';


@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private apiService: ApiService, private utilityService: UtilityService) { }

  getCategories() {
    this.utilityService.showPreLoader();
    return this.apiService.get('category/').pipe(
      tap(() => this.utilityService.hidePreLoader())
    );
  }

  getCategoryById(id) {
    this.utilityService.showPreLoader();
    return this.apiService.get(`category/${id}`).pipe(
      tap(() => this.utilityService.hidePreLoader())
    );
  }

  addQuestion(questionData: IQuestion) {
    return this.apiService.post('question/', questionData);
  }

  updateQuestion(questionData: IQuestion, id: number) {
    return this.apiService.put(`question/${id}`, questionData);
  }

  getAllQuestion() {
    return this.apiService.get('question/');
  }

  getQuestionsByFilter(filters) {
    return this.apiService.get('question/filter', filters);
  }

  getQuestion(qId) {
    this.utilityService.showPreLoader();
    return this.apiService.get(`question/${qId}`).pipe(
      tap(() => this.utilityService.hidePreLoader())
    );
  }

  addCategory(categoryData: ICategory) {
    return this.apiService.post('category/', categoryData);
  }

  updateCategory(payload: { id: string, categoryData: ICategory }) {
    return this.apiService.put(`category/${payload.id}`, payload.categoryData);
  }

  getSolvedQuestions() {
    this.utilityService.showPreLoader();
    return this.apiService.get(`user/solved/`).pipe(
      tap(() => this.utilityService.hidePreLoader())
    );
  }

  updateSolvedQuestions(payload) {
    return this.apiService.put(`user/questionSolved/`, payload);
  }

}


