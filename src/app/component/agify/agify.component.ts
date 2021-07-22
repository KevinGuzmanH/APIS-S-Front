import {Component, Inject, OnInit} from '@angular/core';
import { ApiserviceService } from "../../service/apiservice/apiservice.service";
import { PLATFORM_ID} from "@angular/core";
import { isPlatformBrowser, isPlatformServer} from "@angular/common";
import { TimelineMax } from 'gsap'
import { gsap } from 'gsap/all'
import {repeat} from "rxjs/operators";

@Component({
  selector: 'app-agify',
  templateUrl: './agify.component.html',
  styleUrls: ['./agify.component.scss'],
})
export class AgifyComponent implements OnInit {

  interbal!: number;
  nombre: string = '';
  constructor(@Inject(PLATFORM_ID) private platformId: object,private apiservice: ApiserviceService) {
    this.interbal = 0
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.generarnumero();
    }
  }
  generarnumero1(){
    let numeroAleatorio = Math.floor((Math.random() * (100 - 1 + 1)) + 1);
    let contador = <HTMLDivElement>document.querySelector("#ageTxt");
    contador.innerHTML = numeroAleatorio.toString();
  }
  generarnumero(){
    if (isPlatformBrowser(this.platformId)) {
      this.interbal = window.setInterval(this.generarnumero1, 100);
      let numeroAleatorio = Math.floor((Math.random() * (100 - 1 + 1)) + 1);
    }
  }

  stopInterbal(){
    if (isPlatformBrowser(this.platformId)) {
      window.clearInterval(this.interbal);
    }
  }

  getOld() {
    if (isPlatformBrowser(this.platformId)) {
    if (this.nombre != '' && !this.nombre.includes(' ')) {
      this.apiservice.getOld(this.nombre).subscribe(
        data => {
          this.stopInterbal()
          if (data.age != null) {
            let contador = <HTMLDivElement>document.querySelector("#ageTxt");
            contador.style.color = "black";
            contador.innerHTML = data.age.toString();
          } else {
            let contador = <HTMLDivElement>document.querySelector("#ageTxt");
            contador.innerHTML = "404 Nombre no encontrado";
            contador.style.color = "red";
          }
        }
      )
    } else {
      if (this.nombre == '') {
        alert("Campo vacío")
      } else if (this.nombre.includes(' ')) {
        alert("Nombre con espacios")
      }
    }
  }
  }
}
