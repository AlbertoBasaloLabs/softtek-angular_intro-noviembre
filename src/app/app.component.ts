import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <app-header [title]="title"></app-header>
    <main>
      <app-agencies></app-agencies>
      <app-trips></app-trips>
      <router-outlet></router-outlet>
    </main>
    <footer>
      <h6>
        <a [href]="repoUrl">{{ title }}</a>
        made by
        <a [href]="authorUrl">{{ author }}</a>
      </h6>
    </footer>
  `,
})
export class AppComponent {
  title = "🚀 Astro Bookings";
  repoUrl = "https://github.com/classroomLabs/softtek-angular_intro-noviembre";
  author = "Alberto Basalo";
  authorUrl = "https://albertobasalo.dev";
}
