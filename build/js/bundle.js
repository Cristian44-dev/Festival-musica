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
document.addEventListener('DOMContentLoaded', ()=>{
    crearGaleria();
})


function crearGaleria(){
    for(let i=1; i<=12;i++){
        //Creamos
        let etiquetaImg=document.createElement('img');
        let etiquetaLi=document.createElement('li');
        etiquetaImg.src=`build/img/thumb/${i}.webp`;
        etiquetaImg.dataset.id=i;
        //Insertamos
        etiquetaLi.appendChild(etiquetaImg);
        document.body.querySelector('.galeria__imagenes')
        .appendChild(etiquetaLi);
        //eventos
        etiquetaImg.addEventListener('click',mostrarImagen);
    }
}



function mostrarImagen(event){
    if(event.target.classList.contains('mostrarImagen')){
        document.body.classList.toggle('body-fijo');
        this.classList.toggle('mostrarImagen');
        this.remove();
        return;
    }
    
    //Creamos
    let etiquetaDiv=document.createElement('div');
    let etiquetaImg=document.createElement('img');
    etiquetaImg.src=`build/img/grande/${this.dataset.id}.webp`
    etiquetaDiv.classList.toggle('mostrarImagen');
    document.body.classList.toggle('body-fijo');
    //insertamos
    etiquetaDiv.appendChild(etiquetaImg);
    document.body.appendChild(etiquetaDiv);
    //eventos
    etiquetaImg.addEventListener('click',(e)=>e.stopPropagation());
    etiquetaDiv.addEventListener('click',mostrarImagen);
}



//# sourceMappingURL=bundle.js.map
