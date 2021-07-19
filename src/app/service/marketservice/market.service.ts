import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable} from "rxjs";
import {NewsResponse} from "../../model/marketNewsResponse";
import {InfoResponse} from "../../model/marketInfoResponse";



@Injectable({
  providedIn: 'root'
})
export class MarketService {
  URL = 'https://back-apis.herokuapp.com/apiprovider';

  constructor(private http: HttpClient) { }

  getAppleNews() {
    return this.http.get<NewsResponse>(this.URL + '/marketnews/apple');
  }
  getAppleInfo() {
    return this.http.get<InfoResponse>(this.URL + '/marketinfo/apple');
  }
  getAmazonNews() {
    return this.http.get<NewsResponse>(this.URL + '/marketnews/amazon');
  }
  getAmazonInfo() {
    return this.http.get<InfoResponse>(this.URL + '/marketinfo/amazon');
  }
  getGoogleNews() {
    return this.http.get<NewsResponse>(this.URL + '/marketnews/google');
  }
  getGoogleInfo() {
    return this.http.get<InfoResponse>(this.URL + '/marketinfo/google');
  }
}
