
var panorama, viewer , container, infospot;

container = document.querySelector('#container_principal');

panorama = new PANOLENS.ImagePanorama('imagenes/cine360.jpg');



// Puerta de salida
var infospot1 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
// establece las coordenadas x, y, z posición tradicional del infospot dentro de la panorámica. Por ejemplo, x=0, y=0 y z= -500
infospot1.position.set(7 ,28 , -500);
// -60 segundos indica que el texto permanecerá hasta que el usuario lo cierre manualmente.
infospot1.addHoverText('Puerta de salida para apenas terminada la tanda procedan salir por ese lado izquierdo del cine.' -60);
// permite agregar la apariencia visual del cuadro
infospot1.element.innerHTML = '<div style="background-color: rgba(0,0,0,0.8); color:#fff; border-radius: 5px; padding: 10px, font-size: 14px; width: 200px;"> Puerta de salida para apenas terminada la tanda procedan salir por ese lado izquierdo del cine.</div>';
panorama.add(infospot1);


// Cuarto de reproducción de película
var infospot2 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
infospot2.position.set(-500 ,157 , 1);
infospot2.addHoverText('Cuarto desde donde se proyecta la película hacia la pantalla.' -60);
infospot2.element.innerHTML = '<div style="background-color: rgba(0,0,255,0.8); color:#fff; border-radius: 5px; padding: 10px, font-size: 14px; width: 200px;"> Cuarto desde donde se proyecta la película hacia la pantalla.</div>';
panorama.add(infospot2);


// Parlantes y efectos de sonido
var infospot3 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
infospot3.position.set(-240 ,323 , 500);
infospot3.addHoverText('Parlantes con la última tecnología de audio, pulse el video para una prueba del sonido Dolby Surround 7.1' -60);
infospot3.element.innerHTML = '<div class="" style=""> Parlantes con la última tecnología de audio, pulse el video para una prueba del sonido Dolby Surround 7.1 <iframe width="560" height="315" src="https://www.youtube.com/embed/t4G9wSjNyjk?si=njIx0Lc20NIcsyIu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> </div>';
panorama.add(infospot3);


// Pantalla de cine y efectos
var infospot4 = new PANOLENS.Infospot(250, 'imagenes/info.png');
infospot4.position.set(500 ,285 , -46);
infospot4.addHoverText('' -60);
infospot4.element.innerHTML = '<div class="" style=""> La mejor pantalla de cine que verás. Aquí puedes ver un video corto del tipo de efectos que verás. <iframe width="560" height="315" src="https://www.youtube.com/embed/z4Er52WJSYs?si=nrMGY1oZ1TrhVvK0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> </div>';
panorama.add(infospot4);


// Asientos VIP
var infospot5 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
infospot5.position.set(-500 ,76 , 4);
infospot5.addHoverText('Un audio MP3 multimedial...', -60);
infospot5.element.innerHTML = '<div style="background-color: rgba(0,0,0,0.8); color:#fff; border-radius: 5px; padding: 10px, font-size: 14px; width: 200px;"> Asientos VIP para mejor vista y calidad de servicio personalizado.</div>';
panorama.add(infospot5);

// PDF
var infospot6 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
infospot6.position.set(-500 ,-47 , 359);
// agregar texto al hover y poner una posición diferente al texto
infospot6.addHoverText('Entrar al PDF', 100);
infospot6.element.innerHTML = '<div style="color:#000; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;">Haz click en el circulo blanco para verificar nuestro PDF que detalla nuestra experiencia en cine.</div>';
// Agregar un evento de clic para abrir el PDF
infospot6.addEventListener('click', function() {
    // Abrir el PDF en una nueva pestaña
    window.open("PDF/CINÉFOTEC.pdf", "_blank");
});
panorama.add(infospot6);





viewer = new PANOLENS.Viewer({
    container: container,
    output: 'Fullcreen',
    autoHideInFospot: false
})
viewer.add(panorama);