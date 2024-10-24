import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-taker-poc',
  template: './taker-poc.component.html',
  
})
export class TakerPocComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log("hello")
  }

}
