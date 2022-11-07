import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <app-header [title]="title"></app-header>
    <main>
      <router-outlet></router-outlet>
    </main>
    <app-footer [title]="title"></app-footer>
  `,
})
export class AppComponent {
  title = "🚀 Astro Bookings";
}
