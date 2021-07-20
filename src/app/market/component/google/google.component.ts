import {Component, Inject, OnInit} from '@angular/core';
import { MarketService} from "../../service/marketservice/market.service";
import { MessageService } from "primeng/api";
import { InfoResponse } from "../../../model/marketInfoResponse";
import { PLATFORM_ID} from "@angular/core";
import { isPlatformBrowser, isPlatformServer} from "@angular/common";
import {Chart, registerables} from "chart.js";

@Component({
  selector: 'app-google',
  templateUrl: './google.component.html',
  styleUrls: ['./google.component.scss']
})

export class GoogleComponent implements OnInit{

  news: any[]= [];
  news2: any[] = [];
  conmpanyInfo: InfoResponse = {
    date: new Date("2021-07-20"),
    status: "success",
    company_profile: {
      Sector: "Communication Services",
      Industry: "Internet Content & Information",
      Country: "United States",
      State: "CA",
      City: "Mountain View",
      Website: "http://www.abc.xyz",
      Description: "Alphabet Inc.untain View, California.",
      "Full Time Employees": 139995,
      "Company Name": "Alphabet Inc.",
  "Short Company Name": "Alphabet Inc.",
  Exchange: "NasdaqGS"
}
};

  constructor(private marketService: MarketService,private messageService: MessageService,@Inject(PLATFORM_ID,) private platformId: object) {
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)){
      Chart.register(...registerables);
      var myChart = new Chart("myChart", {
        type: 'line',
        data: {
          labels: ['2004', '2006', '2010', '2013', '2015', '2017', '2018', '2020', '2021'],
          datasets: [{
            label: 'Alphabet en Bolsa',
            data: [54.16, 227.90, 292, 400, 750, 840, 1200, 1516,2535],
            borderWidth: 1,
            borderColor: '#6E33FF'
          }]
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
            title: {
              display: true,
              text: 'Historico de Precios'
            }
          }}
      });
    }

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

      }, error => {
        this.messageService.add({severity:'warn', summary: 'Aviso', detail: 'Error en API al traer News',life: 4000});
      }
    )
  }

}

