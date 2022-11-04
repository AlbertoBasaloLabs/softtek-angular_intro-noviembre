import { Component, Input } from "@angular/core";

@Component({
  selector: "app-footer",
  template: `
    <footer>
      <h6>
        <a [href]="repoUrl">{{ title }}</a>
        made by
        <a [href]="authorUrl">{{ author }}</a>
      </h6>
    </footer>
  `,
  styles: [],
})
export class FooterComponent {
  @Input() title = "";
  repoUrl = "https://github.com/classroomLabs/softtek-angular_intro-noviembre";
  author = "Alberto Basalo";
  authorUrl = "https://albertobasalo.dev";
}
