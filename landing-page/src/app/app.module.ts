import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ResultsComponent } from './pages/results/results.component';
import { ProjectComponent } from './pages/project/project.component';

// Fontawesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// AOS
import AOS from 'aos';
import { ParallaxDirective } from './directives/parallax.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ResultsComponent,
    ProjectComponent,
    ParallaxDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    AOS.init(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
