import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gg-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
public brands: string = 'Assassin';
  constructor() { }

  ngOnInit(): void {
  }

}
