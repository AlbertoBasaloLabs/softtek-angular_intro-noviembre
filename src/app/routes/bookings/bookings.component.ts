import { Component, OnInit } from "@angular/core";
import { Booking } from "src/app/models/booking.interface";
import { ApiService } from "src/app/services/api.service";

@Component({
  selector: "app-bookings",
  template: `
    <h3>Bookings list</h3>
    <ul>
      <li *ngFor="let booking of bookings">
        {{ booking.customerEmail }} - {{ booking.tripId }}
        <button (click)="onDeleteClick(booking.id)">🗑️</button>
      </li>
    </ul>
    <pre>{{ errorMessage }}</pre>
  `,
  styles: [],
})
export class BookingsComponent implements OnInit {
  bookings: Booking[] = [];
  errorMessage = "";
  constructor(private api: ApiService) {}

  ngOnInit(): void {
    // this.api.getBookings$().subscribe(
    //   (bookings) => {
    //     this.bookings = bookings;
    //   },
    //   (error) => {
    //     this.errorMessage = error.message;
    //   }
    // );

    // this.api.getBookings$().subscribe(
    //   (bookings) => (this.bookings = bookings),
    //   (error) => (this.errorMessage = error.message)
    // );

    this.api.getBookings$().subscribe({
      next: (bookings) => (this.bookings = bookings),
      error: (error) => (this.errorMessage = error.message),
    });
  }

  onDeleteClick(bookingId: string) {
    console.log("Deleting booking for trip: ", bookingId);
    this.api.deleteBooking$(bookingId).subscribe({
      next: () =>
        (this.bookings = this.bookings.filter((b) => b.id !== bookingId)),
      error: (error) => (this.errorMessage = error.message),
    });
  }
}
// this.api.deleteBooking$(bookingId).subscribe({
//   next: () => (this.bookings = this.bookings.filter((b) => b.id !== bookingId)),
//   error: (error) => (this.errorMessage = error.message),
// });
