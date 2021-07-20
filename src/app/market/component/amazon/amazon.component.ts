import {Component, Inject, OnInit} from '@angular/core';
import { MarketService} from "../../service/marketservice/market.service";
import { MessageService } from "primeng/api";
import { InfoResponse } from "../../../model/marketInfoResponse";
import { PLATFORM_ID} from "@angular/core";
import { isPlatformBrowser, isPlatformServer} from "@angular/common";
import {Chart, registerables} from "chart.js";

@Component({
  selector: 'app-amazon',
  templateUrl: './amazon.component.html',
  styleUrls: ['./amazon.component.scss']
})

export class AmazonComponent implements OnInit{

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
      Description: "Loading Information...",
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
          labels: ['1980', '1990', '2000', '2005', '2010', '2012', '2016', '2018', '2020', '2021'],
          datasets: [{
            label: 'Amazon en Bolsa',
            data: [0.10, 0.35, 0.90, 1.20, 9.79, 22, 28, 47, 124, 146],
            borderWidth: 1,
            borderColor: '#6E33FF',
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

    this.marketService.getAmazonInfo().subscribe(
      Info => this.conmpanyInfo = Info
    )
    this.marketService.getAmazonNews().subscribe(
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

