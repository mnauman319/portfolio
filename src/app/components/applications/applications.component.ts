import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.scss']
})
export class ApplicationsComponent implements OnInit {
  showDetails:Map<string,boolean> = new Map();
  constructor() { }

  ngOnInit(): void {
    this.showDetails.set("snapgram",false);
    this.showDetails.set("reimbursement",false);
    this.showDetails.set("bank",false);
  }

  showImgDetail(event){
    let divName:string = event.target.id + "-container";
    let div = document.getElementById(divName);
    div.style.visibility = (this.showDetails.get(event.target.name)) ?'hidden' : 'visible';
    this.showDetails.set(event.target.name,!this.showDetails.get(event.target.name));
  }

}
