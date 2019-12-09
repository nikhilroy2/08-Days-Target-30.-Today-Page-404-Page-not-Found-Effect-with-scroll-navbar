// toggle button
let m_bar = document.querySelector('.m_bar');
m_bar.onclick = function() {
    let headerUl = document.querySelector('.ul_nav');
    headerUl.classList.toggle('m_show');
}
// scroll navbar

window.onscroll = function() {
    if (document.documentElement.scrollTop > 200) {
        let headerTag = document.querySelector('header');
        headerTag.setAttribute('style', 'position: fixed; background: white; width: 100%; \
        animation: headerUl .5s linear;')
    }
    else {
        let headerTag = document.querySelector('header');
        headerTag.removeAttribute('style')
 
    }
}