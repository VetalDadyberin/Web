import Controller from './Controller/Controller.js'
import Model from './Model/Model.js'
import View from './View/View.js'

let model = new Model();
let view = new View(model);
let controller = new Controller(model, view);

controller.add_q("smth", "dfsdi", "slgigi", " ", " ", " ");