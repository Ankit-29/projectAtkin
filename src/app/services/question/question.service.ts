import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { map, catchError, tap } from 'rxjs/operators';
import { UtilityService } from '../helpers/utility.service';
import { IQuestion } from 'src/app/models/question.model';


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
    return this.apiService.get(`question/${qId}`);
  }


}


