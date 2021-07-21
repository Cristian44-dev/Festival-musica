document.addEventListener('DOMContentLoaded',()=>{
    scrollNav();
    navegacionFija();
});

function navegacionFija(){

    let barra=document.querySelector('.header')

    //Registrar el Intersection Observer
    let observer = new IntersectionObserver(function(entries){
        if(entries[0].isIntersecting){
            barra.classList.remove('fijo');
        }
        else{
            barra.classList.add('fijo');
        }
    });

    //Elemento a observar

    observer.observe(document.querySelector('.sobre-festival'));
}


function scrollNav(){
    let etiquetaEnlaces=document.querySelectorAll('.navegacionPrincipal a');

    Array.from(etiquetaEnlaces).forEach(element => {
        element.addEventListener('click',function(e){
            e.preventDefault();
            let seccion=document.querySelector(e.target.hash);
            seccion.scrollIntoView({
                behavior:'smooth',
            });
        })
    });
}