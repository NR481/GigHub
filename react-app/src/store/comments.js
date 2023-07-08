const GET_COMMENTS = "comments/GET_COMMENTS";
const ADD_COMMENT = "comments/ADD_COMMENT";
const EDIT_COMMENT = "comments/EDIT_COMMENT";
const DELETE_COMMENT = "comments/DELETE_COMMENT";

const getProfileComments = (comments) => ({
    type: GET_COMMENTS,
    comments,
});

const addComment = (comment) => ({
    type: ADD_COMMENT,
    comment,
});

const editComment = (comment) => ({
    type: EDIT_COMMENT,
    comment,
});

const deleteComment = (id) => ({
    type: DELETE_COMMENT,
    id,
});

export const profileComments = (id) => async (dispatch) => {
    const response = await fetch(`/api/profiles/${id}/comments/`);
    const data = await response.json();
    dispatch(getProfileComments(data));
    return data;
};

export const makeComment = (comment) => async (dispatch) => {
    const response = await fetch("/api/comments/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(comment),
    });
    const data = await response.json();
    dispatch(addComment(data));
    return data;
};

export const updateComment = (comment, id) => async (dispatch) => {
    const response = await fetch(`/api/comments/${id}/`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(comment),
    });
    const data = await response.json();
    dispatch(editComment(data));
    return data;
};

export const removeComment = (id) => async (dispatch) => {
    const response = await fetch(`/api/comments/${id}/`, {
        method: "DELETE",
    });
    if (response.ok) dispatch(deleteComment(id));
    return;
};

const commentsReducer = (state = {}, action) => {
    let newState;
    switch (action.type) {
        case GET_COMMENTS:
            newState = {};
            action.comments.comments.forEach((comment) => {
                newState[comment.id] = comment;
            });
            return newState;
        case ADD_COMMENT:
            newState = { ...state, [action.comment.id]: action.comment };
            return newState;
        case EDIT_COMMENT:
            newState = { ...state };
            newState[action.comment.id] = action.comment;
            return newState;
        case DELETE_COMMENT:
            newState = { ...state };
            delete newState[action.id];
            return newState;
        default:
            return state;
    }
};

export default commentsReducer;
