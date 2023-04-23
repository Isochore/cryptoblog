
export const FETCH_ARTICLE_LIST = "FETCH_ARTICLE_LIST";

export type ArticleListState = {
    payload: string;
}

function articleListReducer(state = {
    payload: '',
}, action:any) {
    switch(action.type) {
        case FETCH_ARTICLE_LIST:
                state.payload = action
            return state
        default:
            return state
    }
}

export default articleListReducer;