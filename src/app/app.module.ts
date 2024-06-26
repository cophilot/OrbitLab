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
import { SettingsComponent } from './settings/settings/settings.component';
import { HomeComponent } from './home/home.component';
import { CookieMessageComponent } from './cookie-message/cookie-message.component';
import { PlayBarComponent } from './play-bar/play-bar.component';
import { MyIconComponent } from './my-icon/my-icon.component';
import { InfoBoxComponent } from './info-box/info-box.component';

@NgModule({
  declarations: [
    AppComponent,
    ObjectComponent,
    CoordinateSystemComponent,
    ArrowComponent,
    SettingsComponent,
    HomeComponent,
    CookieMessageComponent,
    ObjectMetaDataComponent,
    InfoBoxComponent,
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }], // Add HashLocationStrategy as a provider
  bootstrap: [AppComponent],
  imports: [
    AddObjectFormComponent,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    PlayBarComponent,
    MyIconComponent,
  ],
})
export class AppModule {}
