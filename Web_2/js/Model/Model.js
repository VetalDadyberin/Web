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
    }

    edit_questioner(id, question, first, seconnd, third, fourth , fifth){
        this.delete_questioner(id);
        this.add_questioner(question, first, seconnd, third, fourth , fifth);
    }

    delete_questioner(id){
        const iter = this.questioner_arr.findIndex( (item) => item.id === id); 
        this.questioner_arr.splice(iter, 1);
    }

    set_right(id, right){
        const iter = this.questioner_arr.findIndex( (item) => item.id === id);
        this.questioner_arr[iter].set_right(right)
    }
    
    choose(id, chosen){
        const iter = this.questioner_arr.findIndex( (item) => item.id === id);
        console.log('inside = ' + this.questioner_arr[iter].right);
        console.log('input = ' + chosen);
        if(this.questioner_arr[iter].right == chosen){
            
            return true;
        }
        return false;
    }
}
