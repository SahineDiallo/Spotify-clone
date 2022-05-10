export const initialState = {
    user: null,
    current_playlist: null,
    playlists: [],
    playlist_id: null,
    playing: false,
    item: null,
}

const reducer =(state, action) => {
    switch(action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user,
            };

        case "SET_PLAYLISTS":
            return {
                ...state,
                playlists: action.playlists,
            }
        
        case "SET_PLAYLIST_ID":
            return {
                ...state,
                playlist_id: action.playlist_id,
            }
        case "SET_CURRENT_PLAYLIST":
            return {
                ...state,
                current_playlist: action.current_playlist,
            }

        default:
            return state;
    }
}

export default reducer;