import { Injectable } from "@angular/core";
import { ApiService } from '../api.service';
import { ICodeSubmission } from 'src/app/models/code-submission.model';
import { UtilityService } from '../helpers/utility.service';
import { tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class CompilerService {
    compilerApi = 'compiler';

    constructor(
        private apiService: ApiService,
        private utilityService: UtilityService,
    ) { }

    compile(payload: ICodeSubmission) {
        this.utilityService.showPreLoader();
        return this.apiService.post(`${this.compilerApi}/compile`, payload).pipe(
            tap(() => this.utilityService.hidePreLoader())
        );
    }
}