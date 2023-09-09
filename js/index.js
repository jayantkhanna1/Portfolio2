function showIndex() {
    // begin change animation
    current_page = getCookie('jayant_portfolio_page')
    changePageAnimation(current_page, 'index')

    // Changing stylesheet back to default
    setTimeout(function () {
        const themeStylesheet = document.getElementById('themeStylesheet');
        theme = 'css/index.css'
        themeStylesheet.setAttribute('href', theme);
        console.log('Loader CSS Replaced with index.css')

        // removing active class from all items with class header_link
        const header_links = document.getElementsByClassName('header_link');
        for (let i = 0; i < header_links.length; i++) {
            header_links[i].classList.remove('active');
        }

        // Adding active to element with id projects_link
        document.getElementById('home_link').classList.add('active')

        // set cookie to index page
        setCookie('jayant_portfolio_page', 'index', 1);
    }, 1000);

}