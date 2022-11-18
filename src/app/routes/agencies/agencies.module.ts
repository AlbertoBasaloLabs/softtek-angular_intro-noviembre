import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { ReactiveFormsModule } from "@angular/forms";
import { AgenciesRoutingModule } from "./agencies-routing.module";
import { AgenciesComponent } from "./agencies.component";
import { NewAgencyComponent } from "./new-agency.component";
import { AgenciesTableComponent } from './agencies-table.component';

@NgModule({
  declarations: [AgenciesComponent, NewAgencyComponent, AgenciesTableComponent],
  imports: [CommonModule, AgenciesRoutingModule, ReactiveFormsModule],
})
export class AgenciesModule {}
