import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from "../../service/apiservice/apiservice.service";
import { MessageService } from "primeng/api";

@Component({
  selector: 'app-deezer',
  templateUrl: './deezer.component.html',
  styleUrls: ['./deezer.component.scss']
})
export class DeezerComponent implements OnInit {
  artistaName: string = '';

  constructor(private apiservice: ApiserviceService, private mesageservice: MessageService) { }

  ngOnInit(): void {  }

  getArtistData(){
    if (this.artistaName.includes(" ")){
      this.artistaName = this.artistaName.replace(/ /g, "")
    }
    console.log(this.artistaName)
    this.apiservice.getArtist(this.artistaName).subscribe(
      data => {
        console.log(data)
        if (data.error === void(0)){
          window.localStorage.setItem('Artista',JSON.stringify(data));
          window.location=<Location><unknown>"http://localhost:4200/api/deezer/results";
        }else {
          this.mesageservice.add({severity:'warn', summary: 'Aviso', detail: 'No se encontraron datos, intenta con otro contante',life: 3000});
        }

      }
    )
  }
}
