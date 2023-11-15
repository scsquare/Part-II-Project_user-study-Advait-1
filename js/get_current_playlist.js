//list of src s are currently hardcoded. TODO: get some authorisation token for the entire html page so it can go fetch itself?
const list_of_playlists=[
    //TEST FINAL FANTASY SONG

    //"https://open.spotify.com/embed/playlist/6cJCoMotYeL5wnC8tLwHhk?utm_source=generator",
    "https://open.spotify.com/embed/playlist/3nrLcBSUBQRCurezOeUXMR?utm_source=generator" ,
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

//this is currently hardcoded because js cannot read local files.
const list_of_list_of_song_names=[
    //bpm
    ["Don't Let Me Go", 'All Alone', 'Chikyuu Saigo No Kokuhaku Wo', "i'm not perfect", 'メビウス', 'The Devils Reunion', "Can't Love Myself", 'Outer Science'], ['Sonata K. 208, L. 238 A Major - Adagio E Cantabile', 'Suite in E Minor: V. Les rappel des Oiseaux', "Liebesleid (Love's Sorrow)", 'sick of love', 'Find You', "Don't Let Me Go", 'Chikyuu Saigo No Kokuhaku Wo', 'メビウス'], ['No. 7', 'Spiegel im spiegel', 'Music for 18 Musicians: Pulses', 'Summer Luv', 'CQCQ', 'Sonata K. 208, L. 238 A Major - Adagio E Cantabile', "Liebesleid (Love's Sorrow)", 'Find You'], ['The Hours: An Unwelcome Friend (From "The Hours")', 'Violin Concerto No. 1 in G Minor, Op. 26: III. Finale. Allegro energico', 'Sonata For 2 Pianos And Percussion, Sz. 110: 1. Assai lento', 'Bizet: Carmen, Act 1: Habanera. "L\'amour est un oiseau rebelle" (Carmen, Chœur)', '君に届け', 'No. 7', 'Music for 18 Musicians: Pulses', 'CQCQ'], ["i won't fall", 'Cassadó: Toccata (in the Style of Frescobaldi)', 'Up All Night', 'soul ties', "I Love You, That's the Problem", 'The Hours: An Unwelcome Friend (From "The Hours")', 'Sonata For 2 Pianos And Percussion, Sz. 110: 1. Assai lento', '君に届け'], ['Poulenc: Cello Sonata, FP 143: II. Cavatine', 'Goya No Machiawase', '閃光', 'go to h<3ll', '絆ノ奇跡', "i won't fall", 'Up All Night', "I Love You, That's the Problem"], ['Piano Concerto No. 2 in F Major, Op. 102: II. Andante', 'Sonata in D Minor, K. 9', 'Ghost Rule', 'Lose A Friend', '残響散歌', 'Poulenc: Cello Sonata, FP 143: II. Cavatine', '閃光', '絆ノ奇跡'], ["The Firebird (L'oiseau De Feu) - Suite (1919): Finale", '砂の惑星 feat.初音ミク', 'Letter from a Crow', 'About Me', 'IGNITE', 'Piano Concerto No. 2 in F Major, Op. 102: II. Andante', 'Ghost Rule', '残響散歌'], ["Missa l'homme armé super voces musicales: V. Agnus Dei", "i've got you if you've got me (stripped version)", 'Gimme×Gimme feat. 初音ミク・鏡音リン', 'ワタリドリ', 'オレンジ', "The Firebird (L'oiseau De Feu) - Suite (1919): Finale", 'Letter from a Crow', 'IGNITE'],
    
    //loudness
    ['Piano Concerto No. 2 in F Major, Op. 102: II. Andante', "Missa l'homme armé super voces musicales: V. Agnus Dei", 'Up All Night', 'All Alone', '君に届け', 'CQCQ', 'IGNITE', 'Chikyuu Saigo No Kokuhaku Wo'], ['The Hours: An Unwelcome Friend (From "The Hours")', 'Violin Concerto No. 1 in G Minor, Op. 26: III. Finale. Allegro energico', "i've got you if you've got me (stripped version)", "i won't fall", 'Ghost Rule', 'Piano Concerto No. 2 in F Major, Op. 102: II. Andante', 'Up All Night', '君に届け'], ['No. 7', 'Sonata For 2 Pianos And Percussion, Sz. 110: 1. Assai lento', 'Bizet: Carmen, Act 1: Habanera. "L\'amour est un oiseau rebelle" (Carmen, Chœur)', 'Lose A Friend', '残響散歌', 'The Hours: An Unwelcome Friend (From "The Hours")', "i've got you if you've got me (stripped version)", 'Ghost Rule'], ['Suite in E Minor: V. Les rappel des Oiseaux', "Liebesleid (Love's Sorrow)", 'Letter from a Crow', 'go to h<3ll', 'ワタリドリ', 'No. 7', 'Bizet: Carmen, Act 1: Habanera. "L\'amour est un oiseau rebelle" (Carmen, Chœur)', '残響散歌'], ['Sonata in D Minor, K. 9', 'sick of love', 'soul ties', 'The Devils Reunion', 'Outer Science', 'Suite in E Minor: V. Les rappel des Oiseaux', 'Letter from a Crow', 'ワタリドリ'], ['Spiegel im spiegel', 'Summer Luv', "Can't Love Myself", 'Gimme×Gimme feat. 初音ミク・鏡音リン', 'メビウス', 'Sonata in D Minor, K. 9', 'soul ties', 'Outer Science'], ['Poulenc: Cello Sonata, FP 143: II. Cavatine', 'Music for 18 Musicians: Pulses', "i'm not perfect", 'About Me', '閃光', 'Spiegel im spiegel', "Can't Love Myself", 'メビウス'], ['Sonata K. 208, L. 238 A Major - Adagio E Cantabile', "Don't Let Me Go", 'Find You', 'オレンジ', 'Goya No Machiawase', 'Poulenc: Cello Sonata, FP 143: II. Cavatine', "i'm not perfect", '閃光'], ['Cassadó: Toccata (in the Style of Frescobaldi)', "The Firebird (L'oiseau De Feu) - Suite (1919): Finale", "I Love You, That's the Problem", '絆ノ奇跡', '砂の惑星 feat.初音ミク', 'Sonata K. 208, L. 238 A Major - Adagio E Cantabile', 'Find You', 'Goya No Machiawase']
]


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

function get_current_song_names(){
    //assume sanity checks are done by the previous function
    var index=(localStorage.getItem("current_page_code")).charCodeAt(0)-65;
    var list_of_song_names=list_of_list_of_song_names[index];

    var song_names=document.getElementsByClassName("song-name");
    for (var i=0;i<song_names.length;i++){
        song_names[i].innerHTML=(song_names[i].innerHTML).concat(list_of_song_names[i]);
    }
}

get_current_playlist();
get_current_song_names();


