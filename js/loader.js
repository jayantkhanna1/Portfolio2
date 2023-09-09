function addLoaderToBody() {
    const loaderHTML = `
        <div class="loader-container">
        <p id="loader-text">Press at the bottom right for better experience</p>
        <div id="outer_line"></div>
        <div class="loader-line"></div>
        </div>
    `;
    console.log("Loader Html added")
    document.body.innerHTML += loaderHTML;
}
function addLoaderCSS() {
    const themeStylesheet = document.getElementById('themeStylesheet');
    theme = '../css/loader.css'
    themeStylesheet.setAttribute('href', theme);
    console.log('Loader CSS added')
}
function removeLoader(){
    // removing loader html
    const loader = document.querySelector('.loader-container');
    loader.remove();
    console.log('Loader Html removed')

}