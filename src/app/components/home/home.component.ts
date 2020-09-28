import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }
  visibiltyMap:Map<string,boolean> = new Map;
  ngOnInit(): void {

    this.visibiltyMap.set("github",true);
    this.visibiltyMap.set("linkedin",false);
    this.visibiltyMap.set("resume",false);
    this.visibiltyMap.set("codewars",false);
    this.visibiltyMap.set("applications",false);
  }

}
