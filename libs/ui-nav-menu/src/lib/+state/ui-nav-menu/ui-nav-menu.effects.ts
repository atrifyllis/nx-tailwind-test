import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';
import * as UiNavMenuActions from './ui-nav-menu.actions';
import { UiNavMenuService } from '../../ui-nav-menu.service';
import { map } from 'rxjs/operators';

@Injectable()
export class UiNavMenuEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UiNavMenuActions.init),
      fetch({
        run: () => {
          // Your custom service 'load' logic goes here. For now just return a success action...
          return this.uiNavMenuService
            .getAllMenuItems()
            .pipe(
              map((uiNavMenu) =>
                UiNavMenuActions.loadUiNavMenuSuccess({ uiNavMenu })
              )
            );
        },

        onError: (action, error) => {
          console.error('Error', error);
          return UiNavMenuActions.loadUiNavMenuFailure({ error });
        },
      })
    )
  );

  constructor(
    private actions$: Actions,
    private uiNavMenuService: UiNavMenuService
  ) {}
}
