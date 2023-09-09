function changePageAnimation(from_page, to_page) {
    if (from_page == to_page || from_page == null || to_page == null) {
        return;
    }

    // Getting elements
    const from = document.getElementById(from_page);
    const to = document.getElementById(to_page);

    // Remove fadedown from all elements
    const fadedown = document.getElementsByClassName('fadedown');
    for (let i = 0; i < fadedown.length; i++) {
        fadedown[i].classList.remove('fadedown');
    }
    // remove fadeup from all elements
    const fadeup = document.getElementsByClassName('fadeup');
    for (let i = 0; i < fadeup.length; i++) {
        fadeup[i].classList.remove('fadeup');
    }

    // Adding fadeup and fadedown classes approproately 
    from.classList.add('fadedown')
    to.classList.add('fadeup')

}
