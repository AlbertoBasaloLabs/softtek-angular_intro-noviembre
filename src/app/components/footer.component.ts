import { Component, Input } from "@angular/core";

@Component({
  selector: "app-footer",
  template: `
    <footer>
      <h6>
        <app-link
          [caption]="title"
          [url]="repoUrl"
          title="classroomLabs/softtek-angular_intro-noviembre"
        ></app-link>
        made by
        <app-link [caption]="author" [url]="authorUrl"></app-link>
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
