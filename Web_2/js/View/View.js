import Questioner_view from "./Questioner_view.js";

export default class View {
    constructor(Model){
        this.Model = Model;
    }

    toHtml() {
        const itemsHtml = this.Model.questioner_arr.map( (item) => {
            const itemView = new Questioner_view(item);
            return itemView.toHtml();
        }).join("");
        return `<table border="1">${itemsHtml}</table>`;
    }


   

}
