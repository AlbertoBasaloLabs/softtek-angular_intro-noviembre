import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-new-agency",
  template: `
    <form>
      <label>Name:</label>
      <input type="text" placeholder="name" />
      <label>Range:</label>
      <input type="text" placeholder="range" />
      <label>Status:</label>
      <input type="text" placeholder="status" />
    </form>
  `,
  styles: [],
})
export class NewAgencyComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
