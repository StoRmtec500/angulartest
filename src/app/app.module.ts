import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SettingsComponent } from './admin/settings/settings.component';
import { FinanzeComponent } from './finanzen/finanze/finanze.component';
import { DashboardComponent } from './finanzen/dashboard/dashboard.component';
import { FinanzeService } from './finanzen/finanze/finanze.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SettingsComponent,
    FinanzeComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
  ],
  providers: [FinanzeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
