import { createAction, props } from '@ngrx/store';
import { UiNavMenuEntity } from './ui-nav-menu.models';

export const init = createAction('[UiNavMenu Page] Init');

export const loadUiNavMenuSuccess = createAction(
  '[UiNavMenu/API] Load UiNavMenu Success',
  props<{ uiNavMenu: UiNavMenuEntity[] }>()
);

export const loadUiNavMenuFailure = createAction(
  '[UiNavMenu/API] Load UiNavMenu Failure',
  props<{ error: any }>()
);
