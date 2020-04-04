

import Model from '../Model/Model.js'
import View from '../View/View.js'

export default class Controller{
  constructor(questioner_arr, arr_view){
    this.questioner_arr = questioner_arr;
    this.arr_view = arr_view;
    document.querySelector('#for_click').addEventListener('click', (e) => this.onClick(e)); 
    if (window.Worker) {
      this.worker = new Worker("js/Controller/Worker.js");
      this.worker.onmessage = function (e) {
        document.querySelector('#web_worker_field').innerHTML = `<table border="1">Here is ${e.data} answers</table>`;
      }
    }
  }

  onClick(e) {
    if (e.target.id === "add-questioner") {
      this.add_q();
        return;
    }
    if (e.target.className === "edit_questioner") {
      this.edit_q(e.target.dataset.id);
        return;
    }
    if (e.target.className === "delete_questioner") {
      this.delete_q(e.target.dataset.id);
      return;
    }

    if (e.target.className === "choose") {
      this.choose(e.target.dataset.id);
      return;
    }
    
    if (e.target.className === "set_right") {
      this.set_right_variant(e.target.dataset.id);
      return;
    }
  }

  
   
  add_q(){
    const question = prompt('Enter question:', '');
    const answer_1 = prompt('Enter answer 1:', '');
    const answer_2 = prompt('Enter answer 2:', '');
    const answer_3 = prompt('Enter answer 3:', '');
    const answer_4 = prompt('Enter answer 4:', '');
    const answer_5 = prompt('Enter answer 5:', '');
    this.questioner_arr.add_questioner(question, answer_1, answer_2, answer_3, answer_4 , answer_5);
    document.querySelector('#field').innerHTML = this.arr_view.toHtml();
    this.worker.postMessage([answer_1, answer_2, answer_3, answer_4, answer_5]);
  }

  edit_q(id){
    const question = prompt('Enter question:', '');
    const answer_1 = prompt('Enter answer 1:', '');
    const answer_2 = prompt('Enter answer 2:', '');
    const answer_3 = prompt('Enter answer 3:', '');
    const answer_4 = prompt('Enter answer 4:', '');
    const answer_5 = prompt('Enter answer 5:', '');
    this.questioner_arr.edit_questioner(id, question, answer_1, answer_2, answer_3, answer_4 , answer_5);
    document.querySelector('#field').innerHTML = this.arr_view.toHtml();
    this.worker.postMessage([answer_1, answer_2, answer_3, answer_4, answer_5]);
  }

  delete_q(id){
    this.questioner_arr.delete_questioner(id);
    document.querySelector('#field').innerHTML = this.arr_view.toHtml();
  }
  
  set_right_variant(id){
    const right = prompt('Set right variant : ', '');
    if(this.for_check(right)){
      this.questioner_arr.set_right(id, right);
    }
    else{
      document.querySelector('#choose_field').innerHTML = `Cannot set cause has no variant like that`;
    }
    
  }

  choose(id){
    const chosen = prompt('Choose answer that you think is right : ', '');
    if(this.for_check(chosen)){
      document.querySelector('#choose_field').innerHTML = `<table border="1">Your answer is ` + this.questioner_arr.choose(id, chosen); +`</table>`;
    }
    else{
      document.querySelector('#choose_field').innerHTML = `Cannot choose cause has no variant like that`;
    }
  }
  
  for_check(checking){
    if(checking != '1' && checking != '2' && checking != '3' && checking != '4' && checking != '5'){
      return false;
    }
    return true;
  }
}

