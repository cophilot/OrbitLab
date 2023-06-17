import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ObjectComponent } from './object/object.component';
import { CoordinateSystemComponent } from './coordinate-system/coordinate-system.component';
import { AddObjectFormComponent } from './add-object-form/add-object-form.component';
import { FormsModule } from '@angular/forms';
import { ObjectMetaDataComponent } from './object-meta-data/object-meta-data.component';
import { ArrowComponent } from './arrow/arrow.component';

@NgModule({
  declarations: [
    AppComponent,
    ObjectComponent,
    CoordinateSystemComponent,
    AddObjectFormComponent,
    ObjectMetaDataComponent,
    ArrowComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
