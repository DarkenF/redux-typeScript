export interface TodoState {
    todos: any[]
    loading: boolean,
    error: null | string;
    page: number;
    limit: number
}

export enum TodosActionTypes {
    FETCH_TODOS = 'FETCH_TODOS',
    FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS',
    FETCH_TODOS_ERROR = 'FETCH_TODOS_ERROR',
    SET_TODOS_PAGE = 'SET_TODOS_PAGE',
}

interface FetchTodoAction {
    type: TodosActionTypes.FETCH_TODOS
}
interface FetchTodoSuccessAction {
    type: TodosActionTypes.FETCH_TODOS_SUCCESS
    payload: any[]
}
interface FetchTodoErrorAction {
    type: TodosActionTypes.FETCH_TODOS_ERROR
    payload: string
}
interface SetTodoAction {
    type: TodosActionTypes.SET_TODOS_PAGE
    payload: number
}

export type TodoAction = FetchTodoAction | FetchTodoSuccessAction | FetchTodoErrorAction | SetTodoAction;