import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { FormComponent } from './form/form.component';
import { MaterialsModule } from './materials/materials.module';
import { DataService } from './shared/data.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RemoveSpacePipe } from './shared/remove-space.pipe';

@NgModule({
  declarations: [AppComponent, FormComponent, RemoveSpacePipe],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
