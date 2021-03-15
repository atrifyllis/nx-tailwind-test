import { TestBed } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { DataPersistence, NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { UiNavMenuEffects } from './ui-nav-menu.effects';
import * as UiNavMenuActions from './ui-nav-menu.actions';

describe('UiNavMenuEffects', () => {
  let actions: Observable<any>;
  let effects: UiNavMenuEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        UiNavMenuEffects,
        DataPersistence,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(UiNavMenuEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: UiNavMenuActions.init() });

      const expected = hot('-a-|', {
        a: UiNavMenuActions.loadUiNavMenuSuccess({ uiNavMenu: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
