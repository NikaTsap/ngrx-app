export interface CountState {
    count: number;
    updatedAt: number;
}

const initialState: CountState = {
    count: 0,
    updatedAt: Date.now()
};
export const countReducer = (state = initialState) => {
    return state;
};