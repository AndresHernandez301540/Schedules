import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panels',
  templateUrl: './panels.component.html',
  styleUrls: ['./panels.component.css']
})
export class PanelsComponent implements OnInit {
  public teams=[
    {firstName:"Kansas City", secondName:"Chiefs",logo:"../assets/kc.gif",firstColor:"chiefs",secondColor:"kc",scale:"kcimg"},
    {firstName:"Oakland", secondName:"Raiders",logo:"../assets/oak3.gif",firstColor:"raiders",secondColor:"oak",scale:"oakimg"},
    {firstName:"Denver", secondName:"Broncos",logo:"../assets/den.png",firstColor:"broncos",secondColor:"den",scale:"denimg"},
    {firstName:"Los Angeles", secondName:"Chargers",logo:"../assets/lac.gif",firstColor:"chargers",secondColor:"lac",scale:"lacimg"}
  ]
  constructor() { }

  ngOnInit() {
  }

}
