import {Component, Inject, OnInit} from '@angular/core';
import { MarketService} from "../../../service/marketservice/market.service";
import { MessageService } from "primeng/api";
import { InfoResponse } from "../../../model/marketInfoResponse";
import { multi } from "./data"

@Component({
  selector: 'app-google',
  templateUrl: './google.component.html',
  styleUrls: ['./google.component.scss']
})

export class GoogleComponent implements OnInit{

  news: any[]= [];
  news2: any[] = [];
  conmpanyInfo!: InfoResponse;

  constructor(private marketService: MarketService,private messageService: MessageService) {
    Object.assign(this,{ multi })
  }

  ngOnInit() {
    this.marketService.getGoogleInfo().subscribe(
      Info => this.conmpanyInfo = Info
    )
    this.marketService.getGoogleNews().subscribe(
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

