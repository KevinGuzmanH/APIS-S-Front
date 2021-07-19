import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from "../../service/apiservice/apiservice.service";

@Component({
  selector: 'app-deezer-results',
  templateUrl: './deezer-results.component.html',
  styleUrls: ['./deezer-results.component.scss']
})
export class DeezerResultsComponent implements OnInit {
  artista!: any ;
  traks!: any[];
  first: number = 2;
  pageLinkSize: number = 3;

  constructor(private apiservice: ApiserviceService) { }

  ngOnInit(): void {
    this.artista = JSON.parse(<string>window.localStorage.getItem('Artista'));
    this.getTracks()
  }

  getTracks(){
     this.apiservice.getTracks(this.artista.id).subscribe(
       data => {console.log(data.data); this.traks = data.data}
     )
  }

  paginate(event: any){
    this.first = event.page;
  }
}
