import { Component, OnInit } from '@angular/core';
import { ApiserviceService} from "../../service/apiservice/apiservice.service";
import { TimelineMax } from "gsap"
import { gsap } from "gsap/all";
import { MessageService } from "primeng/api";

@Component({
  selector: 'app-futbol',
  templateUrl: './futbol.component.html',
  styleUrls: ['./futbol.component.scss']
})
export class FutbolComponent implements OnInit {

  parametros: string[] = [];
  season: string = '';

  paises = [{"id": 239,"name": "Colombia"},
            {"id": 61,"name": "Francia"},
            {"id": 78,"name": "Alemania"},
            {"id": 250, "name": "Paraguay"},
            {"id": 253, "name": "Estados Unidos"},
            {"id": 71, "name": "Brasil"},
            {"id": 262, "name": "México"},
            {"id": 222, "name": "Austria"},
            {"id": 299, "name": "Venezuela"},
            {"id": 387, "name": "Jordan"}];

  keyword = "name";
  respuesta: any[] = [];
  bandera: string = '';
  nombreLiga: string = '';
  loading: boolean = false;

  constructor(private apiservice: ApiserviceService, private messageService: MessageService) { }

  ngOnInit(): void {

  }

  selectEvent(item: any){
    this.parametros[1] = (item.id);
  }
  moverForm(){
    this.loading = true;

    this.parametros[0] = (this.season);
    this.apiservice.getliga(this.parametros).subscribe(
      data => {
        if (data.errors.length == 0)
        {
          gsap.timeline().to(("#form"),{translateY: -248}).to(("#section2"),{translateY: -248})
          let contador = <HTMLDivElement> document.getElementById("section2");
          let background = <HTMLDivElement> document.getElementById("background");
          background.className = "state2";
          contador.style.display = "block"
          this.bandera = data.response[0].league.flag
          this.nombreLiga = data.response[0].league.name
          this.respuesta = data.response[0].league.standings[0];
        }else {
          this.messageService.add({severity:'warn', summary: 'Aviso', detail: 'Ha ocurrido un error',life: 4000});
        }
        this.loading = false;
      }, error => {
        this.messageService.add({severity:'warn', summary: 'Aviso', detail: 'Asegúrese de completar los campos',life: 4000});
        this.loading = false;
      }
    );
  }
}
