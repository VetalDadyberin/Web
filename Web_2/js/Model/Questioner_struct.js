export default class Questioner_struct{
    constructor(id, question, answer_1, answer_2, answer_3, answer_4, answer_5){
        this.id = id;
        this.question = question;
        this.answer_1 = answer_1;
        this.answer_2 = answer_2;
        this.answer_3 = answer_3;
        this.answer_4 = answer_4;
        this.answer_5 = answer_5;
    }

    editor_of_quest(question, answer_1, answer_2, answer_3, answer_4, answer_5){
        this.question = question;
        this.answer_1 = answer_1;
        this.answer_2 = answer_2;
        this.answer_3 = answer_3;
        this.answer_4 = answer_4;
        this.answer_5 = answer_5;
    }

    if_zero(number){
        if(number = 1 && this.answer_1 == ' '){
            return 0;
        }
        if(number = 2 && this.answer_2 == ' '){
            return 0;
        }
        if(number = 3 && this.answer_3 == ' '){
            return 0;
        }
        if(number = 4 && this.answer_4 == ' '){
            return 0;
        }
        if(number = 5 && this.answer_5 == ' '){
            return 0;
        }

        return 1;
    }
}