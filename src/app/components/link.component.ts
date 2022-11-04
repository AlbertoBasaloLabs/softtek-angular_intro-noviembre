import { Component, Input } from "@angular/core";

@Component({
  selector: "app-link",
  template: `
    <a [href]="url" target="_blank">{{ caption }}</a>
  `,
  styles: [],
})
export class LinkComponent {
  @Input() url = "";
  @Input() caption = "";
}
