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
        <app-author></app-author>
      </h6>
      <app-legal></app-legal>
    </footer>
  `,
  styles: [],
})
export class FooterComponent {
  @Input() title = "";
  repoUrl = "https://github.com/classroomLabs/softtek-angular_intro-noviembre";
}
