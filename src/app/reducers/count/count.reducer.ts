import { Action } from "@ngrx/store";
import { CountActions, countActionsType } from "./count.actions";

export const countNode = "count";

export interface CountState {
    count: number;
    updatedAt: number;
}

const initialState: CountState = {
    count: 0,
    updatedAt: Date.now()
};
export const countReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case countActionsType.increase:
            return {
                ...state,
                // Not ++ because ++ changes the old state, which should not hapen in pure functions.
                count: state.count + 1,
            };
        case countActionsType.decrease:
            return {
                ...state,
                // Not -- because -- changes the old state, which should not hapen in pure functions.
                count: state.count - 1,
            };
        case countActionsType.clear:
            return {
                ...state,
                count: 0,
            };
        default:
            return state;
    }
};