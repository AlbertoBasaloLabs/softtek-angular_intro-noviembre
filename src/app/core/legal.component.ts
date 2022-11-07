import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-legal",
  template: `
    <p>
      ©️ Copyright 2022
      <a href="/about">About us</a>
    </p>
  `,
  styles: [],
})
export class LegalComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
