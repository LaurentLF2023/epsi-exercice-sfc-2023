const base_uri =  "https://api.deezer.com"
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
        }
    }).then(r => r.json()
    ).then(data => JSON.stringify(data.data))
}

async function getTrack(track) {
    return fetch(base_uri+track_search+track, {
        method : "GET",
        headers : {
            "Accept" : "application/json",
            "Content-Type" : "application/json",
        }
    }).then(r => r.json()
    ).then(data => JSON.stringify(data.data))
}

async function getAlbum(album) {
    return fetch(base_uri+album_search+album, {
        method : "GET",
        headers : {
            "Accept" : "application/json",
            "Content-Type" : "application/json",
        }
    }).then(r => r.json()
    ).then(data => JSON.stringify(data.data))
}

async function getPlaylist(playlist) {
    return fetch(base_uri+playlist_search+playlist, {
        method : "GET",
        headers : {
            "Accept" : "application/json",
            "Content-Type" : "application/json",
        }
    }).then(r => r.json()
    ).then(data => JSON.stringify(data.data))
}

export{getArtist}
export{getTrack}
export{getAlbum}
export{getPlaylist}