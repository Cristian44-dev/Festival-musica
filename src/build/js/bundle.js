function crearGaleria(){
    let node=document.querySelector(".galeria__imagenes");
    for(let i=1;i<=12;i++){
        let img=document.createElement("img");
        img.src=`../src/build/img/thumb/${i}.webp`;
        node.appendChild(document.createElement('li')).appendChild(img);
    }
    
}

crearGaleria();