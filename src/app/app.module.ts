import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HashLocationStrategy, LocationStrategy } from '@angular/common'; // Import HashLocationStrategy and LocationStrategy

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ObjectComponent } from './object/object.component';
import { CoordinateSystemComponent } from './coordinate-system/coordinate-system.component';
import { AddObjectFormComponent } from './add-object-form/add-object-form.component';
import { FormsModule } from '@angular/forms';
import { ObjectMetaDataComponent } from './object-meta-data/object-meta-data.component';
import { ArrowComponent } from './arrow/arrow.component';
import { PlayBarComponent } from './play-bar/play-bar.component';
import { SettingsComponent } from './settings/settings/settings.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ObjectComponent,
    CoordinateSystemComponent,
    AddObjectFormComponent,
    ObjectMetaDataComponent,
    ArrowComponent,
    PlayBarComponent,
    SettingsComponent,
    HomeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }], // Add HashLocationStrategy as a provider
  bootstrap: [AppComponent],
})
export class AppModule {}
