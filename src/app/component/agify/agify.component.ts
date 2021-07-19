import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from "../../service/apiservice/apiservice.service";

@Component({
  selector: 'app-agify',
  templateUrl: './agify.component.html',
  styleUrls: ['./agify.component.scss'],
})
export class AgifyComponent implements OnInit {

  interbal: number = 0;
  nombre: string = '';
  constructor(private apiservice: ApiserviceService) {}

  ngOnInit(): void {
    this.generarnumero();
  }

  generarnumero(){
      this.interbal = window.setInterval(this.generarnumero, 100);
      let numeroAleatorio = Math.floor((Math.random() * (100 - 1 + 1)) + 1);
      let contador = <HTMLDivElement> document.querySelector("#ageTxt");
      contador.innerHTML = numeroAleatorio.toString() ;
  }

  stopInterbal(){
    clearInterval(this.interbal);
  }

  getOld(){
    if (this.nombre != '' && !this.nombre.includes(' ')) {
    this.apiservice.getOld(this.nombre).subscribe(
      data => {
        this.stopInterbal()
        if (data.age != null){
          let contador = <HTMLDivElement> document.querySelector("#ageTxt");
          contador.style.color = "black";
          contador.innerHTML = data.age.toString() ;
        }else {
          let contador = <HTMLDivElement> document.querySelector("#ageTxt");
          contador.innerHTML = "404 Nombre no encontrado" ;
          contador.style.color = "red";
        }
      }
    )}else {
      if (this.nombre == ''){
        alert("Campo vacío")
      }else if (this.nombre.includes(' ')){
        alert("Nombre con espacios")
      }
    }
  }
}
