export default class Questioner_struct{
    constructor(id, question, answer_1, answer_2, answer_3, answer_4, answer_5){
        this.id = id;
        this.editor_of_quest(question, answer_1, answer_2, answer_3, answer_4, answer_5);
        this.right = 0;
    }

    editor_of_quest(question, answer_1, answer_2, answer_3, answer_4, answer_5){
        this.question = question;
        this.answer_1 = answer_1;
        this.answer_2 = answer_2;
        this.answer_3 = answer_3;
        this.answer_4 = answer_4;
        this.answer_5 = answer_5;
    }

    set_right(right){
        this.right = right;
    }

}