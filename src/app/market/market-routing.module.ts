import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PruebaComponent} from "./component/prueba/prueba.component";
import {GoogleComponent} from "./component/google/google.component";
import {AmazonComponent} from "./component/amazon/amazon.component";

const routes: Routes = [
  {path: '', children: [
      {path: 'prueba', component: PruebaComponent},
      {path: 'google', component: GoogleComponent},
      {path: 'amazon', component: AmazonComponent},
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarketRoutingModule { }
