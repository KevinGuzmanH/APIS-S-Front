import { Component, OnInit } from '@angular/core';
import { ApiserviceService} from "../../service/apiservice/apiservice.service";
import {log} from "firebase-functions/lib/logger";

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {
  value: number = 60;
  min: number = 0;
  nombre: string = "pikachu";
  option: number = 0;
  pokemonList: string[] = [];
  pokemon!: string;
  pokemonIMG!: string;
  pokemonAb: string[] = [];
  pokemonDG: number = 30;
  pokemonHP: number = 30;
  pokemonname: string = '';
  keyword = "name";
  data1:  any = [];

  constructor(private Apiservice: ApiserviceService) { }

  ngOnInit(): void {
  }

  getPokemons(){
    this.Apiservice.getPokemons().subscribe(
      (data) => {
        for (let i = 0; i < data.results.length; i++) {
          this.data1.push({"id": i,"name": data.results[i].name})
        }
        this.option = 1;
      }
    )
  }

  selectEvent(item: any) {
    this.option = 2;
    console.log(item.name)
    this.Apiservice.getPokemon(item.name).subscribe(data=> {
      this.pokemonIMG = data.sprites.other.dream_world.front_default; this.option = 4;
      for (let i = 0; i < data.abilities.length; i++) {
        this.pokemonAb.push(data.abilities[i].ability.name);
      }
      this.pokemonname = item.name;
      this.pokemonHP = data.stats[0].base_stat;
      this.pokemonDG = data.stats[1].base_stat;
    })
  }
}
