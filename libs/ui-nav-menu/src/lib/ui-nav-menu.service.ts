import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiNavMenuService {
  getAllMenuItems() {
    return of([
      { id: 1, label: 'Menu Item 1' },
      { id: 2, label: 'Menu Item 2' },
    ]);
  }
}
