import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar-c',
  templateUrl: './sidebar-c.component.html',
  styleUrls: ['./sidebar-c.component.scss']
})
export class SidebarCComponent implements OnInit {
  display: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }


}
