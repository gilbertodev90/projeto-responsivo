function mudouTamanho() {
    if (window.innerWidth >= 768) {
        itensmenu.style.display = 'block'
    } else {
        itensmenu.style.display = 'none'
    }
}

function clickMenu() {
    if (itensmenu.style.display == 'block') {
        itensmenu.style.display = 'none'
    } else {
        itensmenu.style.display ='block'
    }
}
