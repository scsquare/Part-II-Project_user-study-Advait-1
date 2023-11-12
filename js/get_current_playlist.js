//list of src s are currently hardcoded. TODO: get some authorisation token for the entire html page so it can go fetch itself?
var list_of_playlists=[
    //bpm first 9: ABCDEFGHI
    "https://open.spotify.com/embed/playlist/3nrLcBSUBQRCurezOeUXMR?utm_source=generator",
    "https://open.spotify.com/embed/playlist/66PFZZgCjRd15bwDUCeLfz?utm_source=generator",
    "https://open.spotify.com/embed/playlist/7cWabPr5APCiD6i76rEuUT?utm_source=generator",
    "https://open.spotify.com/embed/playlist/2beRX52UCxbLYFt4xfMV21?utm_source=generator",
    "https://open.spotify.com/embed/playlist/13FUetirO89ANV8EC3KM8W?utm_source=generator",
    "https://open.spotify.com/embed/playlist/6LcIrpmqQRjSxQs4eYoQel?utm_source=generator",
    "https://open.spotify.com/embed/playlist/6ScnpxJV5IGBOmypbj7Qfp?utm_source=generator",
    "https://open.spotify.com/embed/playlist/0FrQ5i0nIKPnf8s4YkO8aF?utm_source=generator",
    "https://open.spotify.com/embed/playlist/3R0vHKihn0730H6cJyv4Xh?utm_source=generator",
    //loudness next 9: JKLMNOPQR
    "https://open.spotify.com/embed/playlist/2Ds79NKg4WOPOyW8ElVaRE?utm_source=generator",
    "https://open.spotify.com/embed/playlist/1131ReFbiZwuXJbsTeMoJq?utm_source=generator",
    "https://open.spotify.com/embed/playlist/1hcn6rVoXyb9EgbTZxa94C?utm_source=generator",
    "https://open.spotify.com/embed/playlist/15VgGZgdQcxTMdvj2bVzQF?utm_source=generator",
    "https://open.spotify.com/embed/playlist/5Ltx4wflGlFZKlM9zhYzq8?utm_source=generator",
    "https://open.spotify.com/embed/playlist/6S0KzLdvbcGlwORdMBbmfX?utm_source=generator",
    "https://open.spotify.com/embed/playlist/3zWbcFjXo3xRuMayBhkGhE?utm_source=generator",
    "https://open.spotify.com/embed/playlist/08aZyY4qybyXFmRsa93WOJ?utm_source=generator",
    "https://open.spotify.com/embed/playlist/0qbgGBjQxKCEePViLPlNDA?utm_source=generator"
]
//note how we are using alphabet to represent sets. just convert it to corresponding index

//this function is shared between loudness and tempo tasks
//Input: letter representing current set
//Output: spotify embed link

function get_current_playlist(){
    var spotifyPlaylist=document.getElementById("spotify-playlist");
    var current_page_code=localStorage.getItem("current_page_code");
    //sanity checks
    try{
        if (current_page_code===null) throw "ran out of page codes";
        if ((current_page_code==2)||(current_page_code==3)) throw "arrived at wrong page (not-intro)" //this one is for debugging only?
        if ((current_page_code<"A") || (current_page_code>"R")) throw "page code out of range";
    }
    catch(err){
        alert("ERROR get_current_playlist.js:"+err+". Please check if you entered the correct code: "+localStorage.getItem("init_code")+". If you're sure you got it right please send me a screenshot of this error message.");
    }
    var src=list_of_playlists[current_page_code.charCodeAt(0)-65];
    spotifyPlaylist.src=src;
}

get_current_playlist();


