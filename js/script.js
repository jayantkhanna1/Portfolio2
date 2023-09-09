/* This script calls all functions needed for the portfolio page.*/

// Starts Loader
addLoaderToBody();
addLoaderCSS();

// Gets current page that needs to be displayed
page_to_be_set = 'index';
const page = getCookie('jayant_portfolio_page');
if (page) {
    page_to_be_set = page
    console.log("Page to be set: "  + page_to_be_set)
} 

// Removes Loader
setTimeout(removeLoader, 3000);
// Sets page
setTimeout(setPage, 3000);

function setPage() {
    // Sets page
    if(page_to_be_set == 'index'){
        showIndex();
    }
    if(page_to_be_set == 'projects'){
        // Changing stylesheet back to default
        showProjects();
    }
    if(page_to_be_set == 'work'){
        // Changing stylesheet back to default
        showWork();
    }
    if(page_to_be_set == 'about'){
        // Changing stylesheet back to default
        showAbout();
    } 
    if(page_to_be_set == 'certification'){
        // Changing stylesheet back to default
        showCert();
    } 

}
// Plays music
window.onload = function () {
    var x = document.getElementById("music").play();
    if (!document.getElementById("music").paused) {
        console.log("Music is playing");
        document.getElementById('inner_music_control').style.display = 'flex';
        document.getElementById('music_play_controls').style.display = 'none';
    }
}