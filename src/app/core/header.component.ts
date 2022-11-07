import { Component, Input } from "@angular/core";

@Component({
  selector: "app-header",
  template: `
    <header>
      <strong routerLink="/">{{ title }}</strong>
    </header>
  `,
  styles: [],
})
export class HeaderComponent {
  @Input() title = "";
}
