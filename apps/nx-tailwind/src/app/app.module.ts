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
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

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
    StoreModule.forRoot(
      {},
      {
        metaReducers: !environment.production ? [] : [],
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true,
        },
      }
    ),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreRouterConnectingModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
