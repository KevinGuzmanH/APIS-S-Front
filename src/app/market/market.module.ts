import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarketRoutingModule } from './market-routing.module';
import { AppleComponent } from './component/apple/apple.component';
import {DividerModule} from 'primeng/divider';
import {CardModule} from 'primeng/card';
import { MarketNavbarComponent } from './component/market-navbar/market-navbar.component';
import { AmazonComponent } from './component/amazon/amazon.component';
import { GoogleComponent } from './component/google/google.component';

@NgModule({
  declarations: [
    AppleComponent,
    MarketNavbarComponent,
    AmazonComponent,
    GoogleComponent,
  ],
  imports: [
    CommonModule,
    DividerModule,
    CardModule,
    MarketRoutingModule
  ]
})
export class MarketModule { }
