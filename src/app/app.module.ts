import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { PokemonComponent } from './component/pokemon/pokemon.component';
import { SidebarCComponent } from './component/sidebar-c/sidebar-c.component';
import { BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { FormsModule} from "@angular/forms";
import { HttpClientModule} from "@angular/common/http";
import { AutocompleteLibModule} from 'angular-ng-autocomplete';
import { NationalizComponent } from './component/nationaliz/nationaliz.component';
import { WebSearchComponent } from './component/web-search/web-search.component';
import { WebSearchResultsComponent } from './component/web-search-results/web-search-results.component';
import { FutbolComponent } from './component/futbol/futbol.component';
import { AgifyComponent } from './component/agify/agify.component';
import { DeezerComponent } from './component/deezer/deezer.component';
import { DeezerResultsComponent } from './component/deezer-results/deezer-results.component';
//primeng library
import {SidebarModule} from 'primeng/sidebar';
import {ButtonModule} from 'primeng/button';
import {MenubarModule} from 'primeng/menubar';
import {CardModule} from 'primeng/card';
import {KnobModule} from 'primeng/knob';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {AvatarModule} from 'primeng/avatar';
import {DividerModule} from 'primeng/divider';
import {InputTextModule} from 'primeng/inputtext';
import {ToastModule} from 'primeng/toast';
import {MessageService} from "primeng/api";
import {TableModule} from 'primeng/table';
import {PaginatorModule} from 'primeng/paginator';
import {MarketService} from "./market/service/marketservice/market.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarCComponent,
    PokemonComponent,
    NationalizComponent,
    AgifyComponent,
    WebSearchComponent,
    WebSearchResultsComponent,
    FutbolComponent,
    DeezerComponent,
    DeezerResultsComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'serverApp'}),
    AppRoutingModule,
    SidebarModule,
    ButtonModule,
    BrowserAnimationsModule,
    MenubarModule,
    CardModule,
    KnobModule,
    PaginatorModule,
    InputTextModule,
    DividerModule,
    TableModule,
    AvatarModule,
    ToastModule,
    AutocompleteLibModule,
    ProgressSpinnerModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [MessageService,MarketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
