import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { Agency } from "src/app/models/agency.interface";
@Component({
  selector: "app-agencies",
  template: `
    <h3>We work with {{ activeAgenciesCounter }} agencies</h3>
    <ul>
      <ng-container *ngFor="let agency of agencies">
        <li *ngIf="agency.status === 'Active'">
          <span>{{ agency.name | uppercase }}</span>
          <span *ngIf="agency.range === 'Interplanetary'">🪐</span>
          <span *ngIf="agency.range === 'Orbital'">🌍</span>
        </li>
      </ng-container>
    </ul>
  `,
  styles: [],
})
export class AgenciesComponent {
  agencies: Agency[] = [];
  activeAgenciesCounter = 0;

  constructor(private http: HttpClient) {
    this.loadAgencies();
  }

  loadAgencies() {
    this.http
      .get<Agency[]>("http://localhost:3000/agencies")
      .subscribe((agencies) => {
        this.agencies = agencies;
        console.log("agencies: " + this.agencies.length);
        this.activeAgenciesCounter = this.getActiveAgenciesCounter();
      });
    console.log("agencies: " + this.agencies.length);
  }

  getActiveAgenciesCounter() {
    return this.agencies.filter((agency) => agency.status === "Active").length;
  }
}
