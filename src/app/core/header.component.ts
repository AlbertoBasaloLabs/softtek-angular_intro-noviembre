import { Component, Input } from "@angular/core";

@Component({
  selector: "app-header",
  template: `
    <header>
      <a href="/">{{ title }}</a>
    </header>
  `,
  styles: [],
})
export class HeaderComponent {
  @Input() title = "";
}
