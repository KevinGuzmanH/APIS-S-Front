import {Component, Inject, OnInit} from '@angular/core';
import { MarketService} from "../../../service/marketservice/market.service";
import { MessageService } from "primeng/api";
import { InfoResponse } from "../../../model/marketInfoResponse";


@Component({
  selector: 'app-prueba',
  templateUrl: './apple.component.html',
  styleUrls: ['./apple.component.scss']
})

export class AppleComponent implements OnInit{

  news: any[]= [];
  news2: any[] = [];
  conmpanyInfo!: InfoResponse;

  constructor(private marketService: MarketService,private messageService: MessageService) {

  }

  ngOnInit() {
    this.marketService.getAppleInfo().subscribe(
      Info => this.conmpanyInfo = Info
    )
    this.marketService.getAppleNews().subscribe(
      (data) => {

        if (data.status == "success"){
          for (let i = 0; i < 10; i++) {
            if (i<5){
              this.news.push(data.news[i])
            }else {
              this.news2.push(data.news[i])
            }
          }
        }else {
          this.messageService.add({severity:'warn', summary: 'Aviso', detail: 'Error en el servidor :(',life: 4000}
          )
        }

      }
    )
  }



}
