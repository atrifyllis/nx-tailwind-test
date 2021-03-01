import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { dataCyExtension } from './data-cy.extension';
import { LayoutModule } from '@angular/cdk/layout';
import { UiNavMenuModule } from '@nx-tailwind-test/ui-nav-menu';
import { UiHomePageModule } from '@nx-tailwind-test/ui-home-page';
import { RouterModule } from '@angular/router';
import { HomePageComponent } from '../../../../libs/ui-home-page/src/lib/home-page/home-page.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormlyModule.forRoot({
      extras: { lazyRender: true },
      extensions: [
        {
          name: 'data-cy-extension',
          extension: dataCyExtension,
        },
      ],
    }),
    FormlyMaterialModule,
    LayoutModule,
    UiNavMenuModule,
    UiHomePageModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomePageComponent,
      },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
