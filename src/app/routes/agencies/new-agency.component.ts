import { Component } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";

@Component({
  selector: "app-new-agency",
  template: `
    <form [formGroup]="form" (ngSubmit)="onSubmit()">
      <fieldset>
        <div>
          <label>Name:</label>
          <!-- <em>
            <small>
              Name Valid: <code>{{ form.get("name")?.valid }}</code>
            </small>
            <small>
              Pristine: <code>{{ form.get("name")?.pristine }}</code>
            </small>
            <small>
              Touched: <code>{{ form.get("name")?.touched }}</code>
            </small>
            <small>
              Dirty: <code>{{ form.get("name")?.dirty }}</code>
            </small>
          </em> -->
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
          <!-- <em>
            <small>
              Range Valid: <code>{{ form.get("range")?.valid }}</code>
            </small>
            <small>
              Range Errors: <code>{{ form.get("range")?.errors | json }}</code>
            </small>
          </em> -->
          <div *ngIf="mustShowError('range')">
            {{ form.get("range")?.errors | json }}
          </div>
          <input
            formControlName="range"
            [attr.aria-invalid]="form.get('range')?.invalid" />
        </div>
        <div>
          <label>Status:</label>
          <!-- <em>
            <small>
              Status Valid: <code>{{ form.get("status")?.valid }}</code>
            </small>
            <small>
              Status Errors:
              <code>{{ form.get("status")?.errors | json }}</code>
            </small>
          </em> -->
          <div *ngIf="mustShowError('status')">
            {{ form.get("status")?.errors | json }}
          </div>
          <input
            placeholder="status"
            formControlName="status"
            [attr.aria-invalid]="form.get('status')?.invalid" />
        </div>
      </fieldset>
      <!-- <small>
        Form Valid: <code>{{ form.valid }}</code>
      </small> -->
      <button type="submit" [disabled]="form.invalid">Save agency</button>
    </form>
  `,
})
export class NewAgencyComponent {
  form: FormGroup;

  constructor(formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      name: ["", Validators.required],
      range: ["", [Validators.maxLength(10)]],
      status: new FormControl("Pending", [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(10),
      ]),
    });
  }

  mustShowError(formControlName: string) {
    const control = this.form.get(formControlName);
    if (!control) return false;
    return control.invalid && (control.dirty || control.touched);
  }

  onSubmit() {
    console.log("guardando", this.form.value);
  }
}
