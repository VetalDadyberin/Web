export default class Questioner_view{
    constructor(questioner_struct) {
        this.questioner_struct = questioner_struct;
    }

    toHtml() {
        return `
        <tr>
            <th>${this.questioner_struct.question}</th>
        
        <tr>
        <tr>
            <td>1. ${this.questioner_struct.answer_1} </td>
            <td>2. ${this.questioner_struct.answer_2} </td>
            <td>3. ${this.questioner_struct.answer_3} </td>
            <td>4. ${this.questioner_struct.answer_4} </td>
            <td>5. ${this.questioner_struct.answer_5} </td>
            <td><button data-id="${this.questioner_struct.id}" class="delete_questioner">Delete this questioner</button></td>
            <td><button data-id="${this.questioner_struct.id}" class="edit_questioner">Edit this questioner</button></td>
        </tr>`;
    }

}