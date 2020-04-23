import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import {MatDialogModule} from '@angular/material/dialog';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ExamplesModule } from './examples/examples.module';
import { AdminDashboardModule } from './admin/admin-dashboard/admin-dashboard.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule } from '@angular/common/http'
import { CommonModule, DecimalPipe } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule,    
    ExamplesModule,
    AppRoutingModule,
    AdminDashboardModule,
    MatDialogModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
    ToastrModule.forRoot(),
  ],
  providers: [DecimalPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
