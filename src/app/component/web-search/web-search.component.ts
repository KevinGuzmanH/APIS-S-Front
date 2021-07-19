import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from "../../service/apiservice/apiservice.service";
import {log} from "firebase-functions/lib/logger";

@Component({
  selector: 'app-web-search',
  templateUrl: './web-search.component.html',
  styleUrls: ['./web-search.component.scss']
})
export class WebSearchComponent implements OnInit {
  inputText: string = '';
  showResults: boolean = false;
  resultados: any[] = [];
  pressme: boolean = false;

  constructor(private apiservice: ApiserviceService) { }

  ngOnInit(): void {
  }
  pressmefalse(){
    this.pressme = false;
  }
  search(){
   let palabras = this.inputText.split(" ");
    console.log(palabras)
    this.apiservice.getSearch(palabras).subscribe(
      data =>{console.log(data);
                   this.showResults = true;
                   this.pressme = true;
                   this.resultados = [];
                    for (let i = 0; i < data.value.length; i++) {
                      this.resultados.push(data.value[i]);
                    }
        console.log(this.resultados)
                  }
    );
  }
}
