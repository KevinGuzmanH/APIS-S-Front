import {Component, Inject, OnInit} from '@angular/core';
import { ApiserviceService } from "../../service/apiservice/apiservice.service";
import { MessageService } from "primeng/api";
import { PLATFORM_ID} from "@angular/core";
import { isPlatformBrowser, isPlatformServer} from "@angular/common";

@Component({
  selector: 'app-deezer',
  templateUrl: './deezer.component.html',
  styleUrls: ['./deezer.component.scss']
})
export class DeezerComponent implements OnInit {
  artistaName: string = '';

  constructor(private apiservice: ApiserviceService, private mesageservice: MessageService,@Inject(PLATFORM_ID) private platformId: object) { }

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
          if (isPlatformBrowser(this.platformId)) {
            window.localStorage.setItem('Artista', JSON.stringify(data));
            window.location=<Location><unknown>"https://deployapis.herokuapp.com/api/deezer/results";
          }
        }else {
          this.mesageservice.add({severity:'warn', summary: 'Aviso', detail: 'No se encontraron datos, intenta con otro contante',life: 3000});
        }

      }
    )
  }
}
