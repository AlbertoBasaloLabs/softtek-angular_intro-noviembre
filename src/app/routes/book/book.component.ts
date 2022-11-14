import { Component } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-book",
  template: `
    <h3> Make a booking for trip: </h3>
    <h2>{{ tripId }}</h2>
    <form [formGroup]="form" (ngSubmit)="onSubmit()">
      <fieldset>
        <div>
          <label for="email">Customer Email:</label>
          <input
            type="email"
            name="customerEmail"
            placeholder="Your email"
            formControlName="customerEmail" />
        </div>
        <div>
          <label for="gender">Gender:</label>
          <span>
            <input
              type="radio"
              name="gender"
              value="male"
              formControlName="gender" />
            <label>👨🏼‍🦰 Masculine</label>
          </span>
          <span>
            <input
              type="radio"
              name="gender"
              value="female"
              formControlName="gender" />
            <label>👩🏼‍🦰 Feminine</label>
          </span>
        </div>
        <div>
          <label for="seats">Seats reserved:</label>
          <input
            type="number"
            name="seats"
            placeholder="How many passengers?"
            formControlName="seats" />
        </div>
        <div>
          <label for="premiumFood">Premium food:</label>
          <input
            type="checkbox"
            name="premiumFood"
            formControlName="premiumFood" />
        </div>
        <div>
          <label for="paymentMethod">Payment Method:</label>
          <select name="paymentMethod" formControlName="paymentMethod">
            <option
              *ngFor="let pmo of paymentMethodOptions"
              [value]="pmo.value">
              {{ pmo.label }}
            </option>
          </select>
        </div>
        <div>
          <label for="status">Booking Status:</label>
          <span *ngFor="let so of statusOptions">
            <input
              type="radio"
              name="status"
              [value]="so.value"
              formControlName="status" />
            <label>{{ so.label }}</label>
          </span>
        </div>
      </fieldset>
      <button type="submit">Make the booking</button>
    </form>
  `,
  styles: [],
})
export class BookComponent {
  tripId = "";
  form: FormGroup;
  paymentMethodOptions = [
    { value: "cash", label: "💵 Cash" },
    { value: "credit", label: "💳 Card" },
    { value: "transfer", label: "🏦 Bank" },
    { value: "crypto", label: "🪙 Crypto" },
  ];
  statusOptions = [
    { value: "pending", label: "🕒 Pending" },
    { value: "confirmed", label: "✅ Confirmed" },
    { value: "cancelled", label: "❌ Cancelled" },
  ];

  constructor(route: ActivatedRoute, formBuilder: FormBuilder) {
    this.tripId = route.snapshot.paramMap.get("idTrip") || "";
    this.form = formBuilder.group({
      tripId: this.tripId,
      customerEmail: "",
      gender: "",
      seats: 0,
      premiumFood: false,
      paymentMethod: "",
      date: new Date().toUTCString(),
      status: "pending",
    });
  }

  onSubmit() {
    console.log("submit", this.form.value);
  }
}
