import Questioner_struct from "./Questioner_struct.js";

export default class Model {
    constructor(){
        this.questioner_arr = []
    }

    add_questioner(question, first, seconnd, third, fourth , fifth){
        let number = 1;
        if(this.questioner_arr.length != 0){
            number = parseInt(this.questioner_arr[this.questioner_arr.length - 1].id) + 1;
        }
        const questioner = new Questioner_struct(number.toString(10), question, first, seconnd, third, fourth , fifth);
        this.questioner_arr.push(questioner);

        return questioner;
    }

    edit_questioner(id, question, first, seconnd, third, fourth , fifth){
        console.log(id);
        const iter = this.questioner_arr.findIndex((item) => item.id === id);
        let number = parseInt(id);
        /*const quest = new Questioner_struct(id, question, first, seconnd, third, fourth , fifth);
        this.questioner_arr[iter] = quest;*/
        //this.questioner_arr[iter].editor_of_quest(question, first, seconnd, third, fourth , fifth);
        this.questioner_arr.splice(iter, 1);
        const questioner = new Questioner_struct(number.toString(10), question, first, seconnd, third, fourth , fifth);
        this.questioner_arr.push(questioner);
    }

    delete_questioner(id){
        const iter = this.questioner_arr.findIndex( (item) => item.id === id); 
        this.questioner_arr.splice(iter, 1);
    }


    
}
