import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AuthorComponent } from "./author.component";
import { FooterComponent } from "./footer.component";
import { HeaderComponent } from "./header.component";
import { LegalComponent } from "./legal.component";
import { LinkComponent } from "./link.component";

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LinkComponent,
    LegalComponent,
    AuthorComponent,
  ],
  imports: [CommonModule, RouterModule, HttpClientModule],
  exports: [HeaderComponent, FooterComponent],
})
export class CoreModule {}
