import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppleComponent} from "./component/apple/apple.component";
import {GoogleComponent} from "./component/google/google.component";
import {AmazonComponent} from "./component/amazon/amazon.component";

const routes: Routes = [
  {path: '', children: [
      {path: 'apple', component: AppleComponent},
      {path: 'google', component: GoogleComponent},
      {path: 'amazon', component: AmazonComponent},
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarketRoutingModule { }
