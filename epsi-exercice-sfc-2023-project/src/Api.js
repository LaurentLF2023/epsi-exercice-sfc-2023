const base_uri =  "https://api.deezer.com"
// const token = "access_token"
const artist_search = "/search/artist?q="
const track_search = "/search/track?q="
const album_search = "/search/album?q="
const playlist_search = "/search/playlist?q="


const getArtist = (artist) => {
    return fetch(base_uri+artist_search+artist, {
        method : "GET",
        headers : {
            "Accept" : "application/json",
            "Content-Type" : "application/json",
            "Access-Control-Allow-Origin" : "http://localhost:5173"
        }
    }).then(r => {
            console.log(r.json())
            return r.json()})
}

export{getArtist}