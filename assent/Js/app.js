//Scroll Efects

function getScrollEfect () {
    let distEspMenor = '32px'
    let distEspMaior = '250px'
    window.sr = ScrollReveal({reset: false})
    
    sr.reveal('h2', { duration: 1000, distance: '0', reset:true })
    sr.reveal('.logo-text, .footer-contact', { duration: 1200, delay: 500, distance: '0' })
    sr.reveal('.barra-menu, .box-img', { duration: 1200, delay: 100, origin:'bottom', distance:distEspMenor})
    sr.reveal('p, form', { duration: 2000, origin:'rigth', distance:distEspMenor})
    sr.reveal('.foto, .container-contato', { duration: 2000 , origin:'left', distance: distEspMaior})
}
  getScrollEfect()
