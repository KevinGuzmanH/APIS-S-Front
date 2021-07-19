import { Component, OnInit } from '@angular/core';
import {ApiserviceService} from "../../service/apiservice/apiservice.service";
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-nationaliz',
  templateUrl: './nationaliz.component.html',
  styleUrls: ['./nationaliz.component.scss'],
})
export class NationalizComponent implements OnInit {
  cargando: boolean =  false;
  nombre: string = '';
  paises: any[] = [];
  error: boolean = false;
  mostrarResultado: boolean = false;

  constructor(private apiService: ApiserviceService, private messageService: MessageService) { }

  ngOnInit(): void {
  }

  getCountries() {
    if (this.nombre != '' && !this.nombre.includes(' ')) {
      this.error = false;
      this.cargando = true;
      this.apiService.getCountries(this.nombre).subscribe(
        data => {
          this.paises = [];
          if (data.country.length == 0){
            this.error = true;
          }
          data.country.forEach((respuesta:{country_id:string,probability:number})=>{
            respuesta.probability = Number(respuesta.probability.toFixed(3));
            this.paises.push(respuesta);
          });
          this.cargando = false;
          this.mostrarResultado = true;
        }
      )
    }else {
      if (this.nombre == ''){
        this.messageService.add({severity:'warn', summary: 'Aviso', detail: 'Escriba un Nombre',life: 4000});
      }else if (this.nombre.includes(' ')){
        this.messageService.add({severity:'warn', summary: 'Aviso', detail: 'Solo puede poner un nombre y sin espacios, ejemplo: Maria',life: 4000});
      }
    }

  }
}
