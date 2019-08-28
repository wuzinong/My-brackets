import { IAction } from '../../types/action';

export default class ActionReducer<TState> {
    private readonly actions: { [key: string]: (state: TState, action: IAction) => TState };

    constructor(actions: { [key: string]: (state: TState, action: IAction) => TState }) {
        this.actions = actions;
    }

    reduce(state: TState, action: IAction): TState {
        if (this.actions[action.type])
            return this.actions[action.type](state, action);
        return state;
    }
}