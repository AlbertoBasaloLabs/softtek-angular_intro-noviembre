import { Component, EventEmitter, Output } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Agency } from "src/app/models/agency.interface";
import { FormsService } from "src/app/services/forms.service";

@Component({
  selector: "app-new-agency",
  template: `
    <form [formGroup]="form" (ngSubmit)="onSubmit()">
      <fieldset>
        <div>
          <label>Name:</label>
          <div *ngIf="mustShowError('name')">
            {{ form.get("name")?.errors | json }}
          </div>
          <input
            placeholder="Your name"
            formControlName="name"
            [attr.aria-invalid]="form.get('name')?.invalid" />
        </div>
        <div>
          <label>Range:</label>
          <div *ngIf="mustShowError('range')">
            {{ form.get("range")?.errors | json }}
          </div>
          <input
            formControlName="range"
            [attr.aria-invalid]="form.get('range')?.invalid" />
        </div>
        <div>
          <label>Status:</label>
          <div *ngIf="mustShowError('status')">
            {{ form.get("status")?.errors | json }}
          </div>
          <input
            placeholder="status"
            formControlName="status"
            [attr.aria-invalid]="form.get('status')?.invalid" />
        </div>
      </fieldset>
      <button type="submit" [disabled]="form.invalid">Save agency</button>
    </form>
  `,
})
export class NewAgencyComponent {
  @Output() saveAgency = new EventEmitter<Agency>();
  form: FormGroup;

  constructor(formBuilder: FormBuilder, private forms: FormsService) {
    // construir el formulario
    this.form = formBuilder.group({
      name: ["", Validators.required], // validación simple
      range: ["", [Validators.required, Validators.maxLength(10)]], // validación múltiple
      status: new FormControl("Pending", [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(10),
      ]), // usar FormControl
    });
  }

  mustShowError(formControlName: string) {
    return this.forms.mustShowError(this.form, formControlName);
  }

  onSubmit() {
    if (this.form.valid) {
      this.saveAgency.emit(this.form.value);
      this.form.reset();
    }
  }
}
