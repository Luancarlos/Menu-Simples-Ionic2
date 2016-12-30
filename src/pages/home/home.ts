import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  // variavel para armazenar os dados do menu
  produtos : Array<{nome:string,icone:string,cor:any,ani:boolean}>;
  ctrlRodar = false;

  constructor(public navCtrl: NavController) {
    // todos os produtos
    // icone é o nome da imagem adicionada em assets/imagens
      this.produtos = [
        {nome:"Pizzas",icone:"icone-pizza",cor:"#c3422f",ani:false},
        {nome:"Hamburguers",icone:"icone-burg",cor:"#43a047",ani:false},
        {nome:"Lanches",icone:"icone-lanches",cor:"#bf6529",ani:false},
        {nome:"Refrigerantes",icone:"icone-refri",cor:"#0eabca",ani:false} ,
        {nome:"Sucos",icone:"icone-suco",cor:"#ffca28",ani:false},
        {nome:"Vinhos",icone:"icone-vinho",cor:"#ab47bc",ani:false}
    ]
  }

  // evento click 
  // para animar a imagem, tornando ani true ou false e habilitando a class .rodar
  clicou(d){
    let aux = d.ani;
    d.ani = !aux;
  }

}
