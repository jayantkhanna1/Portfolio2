function showWork() {


    // add animation class to this
    current_page = getCookie('jayant_portfolio_page')
    changePageAnimation(current_page, 'work')

    // change css
    setTimeout(function () {
        const themeStylesheet = document.getElementById('themeStylesheet');
        theme = 'css/work.css'
        themeStylesheet.setAttribute('href', theme);

        console.log('Project CSS loaded')


        // removing active class from all items with class header_link
        const header_links = document.getElementsByClassName('header_link');
        for (let i = 0; i < header_links.length; i++) {
            header_links[i].classList.remove('active');
        }

        // Adding active to element with id projects_link
        document.getElementById('work_link').classList.add('active')

        // set cookie for project page
        setCookie('jayant_portfolio_page', 'work', 1);
    }, 1000);
}