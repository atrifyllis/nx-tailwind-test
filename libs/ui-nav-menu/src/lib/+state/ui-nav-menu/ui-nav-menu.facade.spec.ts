import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { readFirst } from '@nrwl/angular/testing';

import { EffectsModule } from '@ngrx/effects';
import { Store, StoreModule } from '@ngrx/store';

import { NxModule } from '@nrwl/angular';

import { UiNavMenuEntity } from './ui-nav-menu.models';
import { UiNavMenuEffects } from './ui-nav-menu.effects';
import { UiNavMenuFacade } from './ui-nav-menu.facade';
import * as UiNavMenuActions from './ui-nav-menu.actions';
import { reducer, State, UI_NAV_MENU_FEATURE_KEY } from './ui-nav-menu.reducer';

interface TestSchema {
  uiNavMenu: State;
}

describe('UiNavMenuFacade', () => {
  let facade: UiNavMenuFacade;
  let store: Store<TestSchema>;
  const createUiNavMenuEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as UiNavMenuEntity);

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(UI_NAV_MENU_FEATURE_KEY, reducer),
          EffectsModule.forFeature([UiNavMenuEffects]),
        ],
        providers: [UiNavMenuFacade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [
          NxModule.forRoot(),
          StoreModule.forRoot({}),
          EffectsModule.forRoot([]),
          CustomFeatureModule,
        ],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.inject(Store);
      facade = TestBed.inject(UiNavMenuFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async (done) => {
      try {
        let list = await readFirst(facade.allUiNavMenu$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.init();

        list = await readFirst(facade.allUiNavMenu$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });

    /**
     * Use `loadUiNavMenuSuccess` to manually update list
     */
    it('allUiNavMenu$ should return the loaded list; and loaded flag == true', async (done) => {
      try {
        let list = await readFirst(facade.allUiNavMenu$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        store.dispatch(
          UiNavMenuActions.loadUiNavMenuSuccess({
            uiNavMenu: [
              createUiNavMenuEntity('AAA'),
              createUiNavMenuEntity('BBB'),
            ],
          })
        );

        list = await readFirst(facade.allUiNavMenu$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(2);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
