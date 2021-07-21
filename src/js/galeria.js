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


