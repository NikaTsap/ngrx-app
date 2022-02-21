import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { countReducer, CountState } from './count/count.reducer';

export interface State {
  count: CountState;
}

export const reducers: ActionReducerMap<State> = {
  count: countReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
