import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, FormlyModule, MatButtonModule],
  declarations: [HomePageComponent],
  exports: [HomePageComponent],
})
export class UiHomePageModule {}
