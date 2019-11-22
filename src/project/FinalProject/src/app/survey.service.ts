import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class SurveyService {
    constructor() {}

    answers = [];

    addAnswer(answer) {
        this.answers.push(answer);
    }

    getAnswers() {
        return this.answers;
    }

}