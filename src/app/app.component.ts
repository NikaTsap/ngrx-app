import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { CountClearAction, CountDecreaseAction, CountIncreaseAction } from './reducers/count/count.actions';
import { CountState } from './reducers/count/count.reducer';
import { selectCount, selectUpdatedAt } from './reducers/count/count.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent {
  public count$: Observable<number> = this.store$.pipe(select(selectCount));
  public updatedAt$: Observable<number> = this.store$.pipe(select(selectUpdatedAt));

  public isDecreaseDisabled$: Observable<boolean> = this.count$.pipe(map(count => count <= 0));

  constructor(private store$: Store<CountState>) {}

  increase() {
    this.store$.dispatch(new CountIncreaseAction());
  }

  decrease() {
    this.store$.dispatch(new CountDecreaseAction());
  }

  clear() {
    this.store$.dispatch(new CountClearAction());
  }
}
