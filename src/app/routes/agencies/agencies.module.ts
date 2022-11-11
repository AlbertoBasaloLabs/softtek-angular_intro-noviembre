import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { ReactiveFormsModule } from "@angular/forms";
import { AgenciesRoutingModule } from "./agencies-routing.module";
import { AgenciesComponent } from "./agencies.component";
import { NewAgencyComponent } from "./new-agency.component";

@NgModule({
  declarations: [AgenciesComponent, NewAgencyComponent],
  imports: [CommonModule, AgenciesRoutingModule, ReactiveFormsModule],
})
export class AgenciesModule {}
