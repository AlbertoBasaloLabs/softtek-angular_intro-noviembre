import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-agencies",
  template: `
    <h2> My agencies </h2>
    <app-new-agency></app-new-agency>
    <table> </table>
  `,
  styles: [],
})
export class AgenciesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
