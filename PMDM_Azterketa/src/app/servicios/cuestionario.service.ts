import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';
import { IPregunta } from './../interfaces/interfaces';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CuestionarioService {

  // import jsonData from 'src/assets/data.json';
// 
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

  // Array bat gordetzeko json-ean dauden galdera guztiak. Gogoratu array-a abiarazten arazoak ekiditzeko
  // Gehitu beharrezkoak diren konponenteak eta zerbitzuak
  constructor() {
    //Datuak kargatu

  }
  getGalderak(){
    return this.galderak;
  }

  erantzun(logo:string, erantzuna:string){
    let erabtzuba = this.galderak.find(galderak => galderak.logotipo == logo);
    if (erabtzuba){
      if (erabtzuba.respuesta == erantzuna){
        erabtzuba.acierto = true;
      } else {
        erabtzuba.intentos++;
    }
  }
  }
  // IPregunta array-a bueltatuko duen metodoa, hau da, galdetegiko galdera guztiak array batean


  // Fitxategia irakurtzeko metodoa
  // Gogoratu asinkronoa dela.


  // Fitxategitik irakurtzen ditu datuak eta arrayan gordetzen ditu


  // Ireki alerta bat galderaren enuntziatuarekin eta konprobatu erantzuna
  // 1 - Erantzun zuzena ala okerra denaren arabera eguneratzen du egoera
  // 2 - Ez ba du asmatzen:
  // 2.1 Saiakera kopuruari kendu bat
  // 2.2 Gordeko du erantzuna erantzunen array-an




  galdera_Erantzun(logotipo:string, respuesta:string){
    let galderaTopatuta = this.galderak.find(galdera => galdera.logotipo == logotipo);
    if (galderaTopatuta){
      console.log(galderaTopatuta);
      let posizioa = this.galderak.indexOf(galderaTopatuta);
      if (this.galderak[posizioa].respuesta== respuesta){
        this.galderak[posizioa].acierto = true;
      } else {
        this.galderak[posizioa].intentos++;
      }
    }
  }







}