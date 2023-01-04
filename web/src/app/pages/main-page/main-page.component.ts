import { Component, OnInit } from '@angular/core';

class IAnimal{
  public name?:string;
  public size:number = 0;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  pet:IAnimal={name:'Dog', size:10} as IAnimal;
  petsList:string[] = ['Monkey'];
  messageAutoDetruitAffiche:boolean = true;

  ngOnInit(): void {
    const autoDestructionPromise = new Promise<boolean>((resolve) => {
      setTimeout(() => resolve(false), 5000);
    });

    autoDestructionPromise.then((afficher) => {
      this.messageAutoDetruitAffiche = afficher;
    });
  }

  changePet(){
    this.pet = {...this.pet, name:'Cat'} as IAnimal;
    this.petsList= [...this.petsList, 'Bird']
  }
}
