import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./component/home/home.component";
import {PokemonComponent} from "./component/pokemon/pokemon.component";
import {NationalizComponent} from "./component/nationaliz/nationaliz.component";
import {AgifyComponent} from "./component/agify/agify.component";
import {WebSearchComponent} from "./component/web-search/web-search.component";
import {WebSearchResultsComponent} from "./component/web-search-results/web-search-results.component";
import {FutbolComponent} from "./component/futbol/futbol.component";
import {DeezerComponent} from "./component/deezer/deezer.component";
import {DeezerResultsComponent} from "./component/deezer-results/deezer-results.component";


const routes: Routes = [
  {path: 'inicio', component: HomeComponent},
  {path: 'api/pokemon', component: PokemonComponent},
  {path: 'api/nationaliz', component: NationalizComponent},
  {path: 'api/agify', component: AgifyComponent},
  {path: 'api/websearch', component: WebSearchComponent},
  {path: 'api/futbol', component: FutbolComponent},
  {path: 'api/deezer', component: DeezerComponent},
  {path: 'api/market', loadChildren: () => import('./market/market.module').then(m => m.MarketModule)},
  {path: 'api/deezer/results', component: DeezerResultsComponent},
  {path: '**',redirectTo: 'inicio', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
