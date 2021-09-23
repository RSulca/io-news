import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  categorias: { categoria: string, category: string }[];

  constructor() {
    this.categorias = [{ categoria: 'Artes', category: 'Arts' }, { categoria: 'Negocios', category: 'Business' }, { categoria: 'Tecnología', category: 'Computers' }, { categoria: 'Juegos', category: 'Games' }, { categoria: 'Salud', category: 'Health' }, { categoria: 'Hogar', category: 'Home' }, { categoria: 'Recreacion', category: 'recreation' }];
  }

  segmentChanged(event){
    console.log(event);
  }

}
