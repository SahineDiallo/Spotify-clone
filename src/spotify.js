export const authEndPoint = "https://accounts.spotify.com/authorize";
const redirectUri = 'http://localhost:3000/';
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
]
const clientId = "2cc3d2bc44ab457fb1d0b28f86806802";

export const getUrlToken = ()=> {
    return window.location.hash
        .substring(1)
        .split("&")
        .reduce((urlParts, part)=> {
            var temp = part.split("=")
            urlParts[temp[0]] =  decodeURIComponent(temp[1]);
            return urlParts; 
        }, {})
    
}

export const loginUrl = `${authEndPoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scopes=${scopes.join("%20")}&response_type=token&show_dialog=true`;