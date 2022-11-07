import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FooterComponent } from "./footer.component";
import { HeaderComponent } from "./header.component";
import { LegalComponent } from "./legal.component";
import { LinkComponent } from "./link.component";
import { AuthorComponent } from './author.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LinkComponent,
    LegalComponent,
    AuthorComponent,
  ],
  imports: [CommonModule],
  exports: [HeaderComponent, FooterComponent],
})
export class CoreModule {}
