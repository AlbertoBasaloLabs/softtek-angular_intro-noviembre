import { Component } from "@angular/core";
import { Trip } from "src/app/models/trip.interface";
import { ApiService } from "src/app/services/api.service";

@Component({
  selector: "app-trips",
  template: `
    <h3>Offering {{ trips.length }} trips</h3>
    <ul>
      <ng-container *ngFor="let trip of trips">
        <li [class]="trip.status | lowercase">
          <span>🔭 {{ trip.destination }}</span>
          <span>🧑🏼‍🚀 {{ trip.places | number: "0.0" }}</span>
          <span>⤴️ {{ trip.startDate | date: "dd-MMM-yyyy" }}</span>
          <span>💸 {{ trip.flightPrice | currency }}</span>
          <span role="button" [routerLink]="['book', trip.id]">
            ✍🏼 Make a booking</span
          >
        </li>
      </ng-container>
    </ul>
  `,
  styles: [
    `
      .confirmed {
        color: green;
      }
      .waiting {
        color: orange;
      }
    `,
  ],
})
export class TripsComponent {
  trips: Trip[] = [];

  constructor(private api: ApiService) {
    this.loadTrips();
  }

  loadTrips() {
    this.api.getTrips$().subscribe((trips) => (this.trips = trips));
  }
}
