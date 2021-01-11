var home = {
    init: function () {
        var button = document.getElementById('navButton')
        button.addEventListener('click', home.toggleMenu)
        var closeButton = document.getElementById('navCloseButton')
        closeButton.addEventListener('click', home.toggleMenu)
    },
    toggleMenu: function () {
        var nav = document.getElementById('pageNavigation')
        nav.classList.toggle('hide')
    }
}


