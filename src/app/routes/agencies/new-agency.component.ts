import { Component } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "app-new-agency",
  template: `
    <form [formGroup]="form" (ngSubmit)="onSubmit()">
      <fieldset>
        <label>Name:</label>
        <input placeholder="Your name" formControlName="name" />
        <label>Range:</label>
        <input formControlName="range" />
        <label>Status:</label>
        <input placeholder="status" formControlName="status" />
      </fieldset>
      <button type="submit">Save agency</button>
    </form>
  `,
})
export class NewAgencyComponent {
  form: FormGroup;
  constructor(formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      name: "",
      range: "",
      status: "Pending",
    });
  }
  onSubmit() {
    console.log("guardando", this.form.value);
  }
}
