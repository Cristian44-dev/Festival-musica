document.addEventListener('DOMContentLoaded', ()=>{
    crearGaleria();
})

function crearGaleria(){
    let node=document.querySelector(".galeria__imagenes");
    for(let i=1;i<=12;i++){
        let img=document.createElement("img");
        img.src=`../src/build/img/thumb/${i}.webp`;
        img.className="imagen__galeria";
        node.appendChild(document.createElement('li')).appendChild(img);
    }
    
}

let img=document.querySelectorAll('.imagen__galeria');
function mostrarImagen(){
    alert('Diste click');
}
img.addEventListener('click',mostrarImagen)




