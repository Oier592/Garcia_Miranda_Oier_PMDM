import { Component, OnInit } from '@angular/core';
import { CuestionarioService } from './../servicios/cuestionario.service';
import { IPregunta } from './../interfaces/interfaces';
import { GoiburukoaComponent } from '../Konponenteak/goiburukoa/goiburukoa.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit{
  alertController: any;
  cuestionarioService: any;

onClick() { // Aquí el label.
throw new Error('Method not implemented.');
}

  galderak: IPregunta[] = [
    {
      logotipo: 'assets/icon/volkswagen.jpg',
      respuesta: "Wolkswagen",
      respuestasIncorrectas: [],
      intentos: 0,
      acierto: false
    },
    {
      logotipo: "assets/icon/apple.jpg",
      respuesta: "Apple",
      respuestasIncorrectas: [],
      intentos: 0,
      acierto: false
    },
    {
      logotipo: "assets/icon/Shell.jpg",
      respuesta: "Shell",
      respuestasIncorrectas: [],
      intentos: 0,
      acierto: false
    },
    {
      logotipo: "assets/icon/starbucks.jpg",
      respuesta: "Starbucks",
      respuestasIncorrectas: [],
      intentos: 0,
      acierto: false
    }
  ];


  //Zerbitzua inportatu
  constructor(cuestionarioService: CuestionarioService) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  //Metodo bat sortu "Erantzun" onclick egiteko
  //IGaldera bat jasoko du eta zerbitzua deituko du beharrezkoak diren eragiketak egiteko

  //Sortu metodo bat "Gorde"ren onclick-a kudeatzeko
  //Ez du parametrorik jasotzen eta zerbitzuari deituko dio dagokion eragiketak egiteko.

  async erantzun(logotipo:string){
    const alert = await this.alertController.create({
      header: 'Erantzuna:',
      message: 'Sakatu bai aldatzeko',
      inputs: [
        {
          name:'I',
          value:logotipo,
          type:'text',
          disabled:true,
        }
      ],
      buttons: [
        {
          text: 'EZ',
          role: 'cancel',
          handler: () => {
            console.log('Alert canceled');
          },
        },
        {
          text: 'BAI',
          role: 'confirm',
          handler: () => {
            this.cuestionarioService.erantzun(logotipo, name);
          },
        },
      ]
    });


    await alert.present();
  }

}
