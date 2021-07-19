import { Component, OnInit,Input } from '@angular/core';
@Component({
  selector: 'app-web-search-results',
  templateUrl: './web-search-results.component.html',
  styleUrls: ['./web-search-results.component.scss']
})
export class WebSearchResultsComponent implements OnInit {

  @Input() resultadoshijos: any[] = []

  constructor() { }

  ngOnInit(): void {
  }



  }


