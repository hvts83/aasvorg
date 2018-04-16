

function initialize() {


    //Map parametrs
    var mapOptions = {
        zoom: 14,
        center: new google.maps.LatLng(13.987673, -89.559448),
        mapTypeId: google.maps.MapTypeId.ROADMAP,

        mapTypeControl: false,
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
            position: google.maps.ControlPosition.BOTTOM_CENTER
        },
        panControl: false,
        panControlOptions: {
            position: google.maps.ControlPosition.TOP_RIGHT
        },
        zoomControl: true,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.LARGE,
            position: google.maps.ControlPosition.TOP_RIGHT
        },
        scaleControl: false,
        scaleControlOptions: {
            position: google.maps.ControlPosition.TOP_LEFT
        },
        streetViewControl: true,
        streetViewControlOptions: {
            position: google.maps.ControlPosition.LEFT_TOP
        }
    }

    //map
    var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);

    //category
    var cook = 'img/icon/01.png';

    //MARCADOR 245 
    //positions 
    var point245 = new google.maps.LatLng(14.115101, -89.651828); var contentString245 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">CANDELARIA</h1>'+ '<div id="bodyContent">'+ '<p><b>CANDELARIA</b> , .— 18 de  Agosto de  1971.  Dirección:  Avenida  José Domingo Peñate Barrio San  Antonio  ½ Cuadra al Sur de  Alcaldía Municipal. Días y horas  de reuniones: De Lunes a Domingo de 7:00 a 9:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow245 = new google.maps.InfoWindow({ content: contentString245 }); 
    //markers 
    var marker245 = new google.maps.Marker({ position: point245, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "245.CANDELARIA" }); 
    //information for 
    function goToLink245() { infowindow245.open(map,marker245); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker245, 'click', goToLink245); google.maps.event.addDomListener(window, 'load', initialize);
    
    //MARCADOR 246 
    //positions 
    var point246 = new google.maps.LatLng(14.058995, -89.627348); var contentString246 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">FE EN DIOS</h1>'+ '<div id="bodyContent">'+ '<p><b>FE EN DIOS</b> , .— 24 de  Enero  de  1973.  Dirección:  Cantón La Parada a 20 metros de La Escuela  Bartolomé Bolaños  Calle Principal. Días y horas de reuniones: De Lunes a Domingo de 7:00 a 9:00 p.m.</p>'+ '</div>'+ '</div>'; var infowindow246 = new google.maps.InfoWindow({ content: contentString246 }); 
    //markers 
    var marker246 = new google.maps.Marker({ position: point246, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "246.FE EN DIOS" }); 
    //information for 
    function goToLink246() { infowindow246.open(map,marker246); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker246, 'click', goToLink246); google.maps.event.addDomListener(window, 'load', initialize);
    
    //MARCADOR 247 
    //positions 
    var point247 = new google.maps.LatLng(14.113956, -89.648019); var contentString247 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">MI ÚNICO CAMINO</h1>'+ '<div id="bodyContent">'+ '<p><b>MI ÚNICO CAMINO</b> , .— 04  de  Abril de  1981.  Dirección:  1ª  Calle Oriente, Candelaria de  La Frontera. Días y horas  de  reuniones: De Lunes a Domingo de 7:00 a 9:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow247 = new google.maps.InfoWindow({ content: contentString247 }); 
    //markers 
    var marker247 = new google.maps.Marker({ position: point247, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "247.MI ÚNICO CAMINO" }); 
    //information for 
    function goToLink247() { infowindow247.open(map,marker247); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker247, 'click', goToLink247); google.maps.event.addDomListener(window, 'load', initialize);
    
    //MARCADOR 248 
    //positions 
    var point248 = new google.maps.LatLng(14.114965, -89.650891); var contentString248 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NUEVA VIDA</h1>'+ '<div id="bodyContent">'+ '<p><b>NUEVA VIDA</b> , .— 15 de Agosto de 1985. Dirección:  2ª Avenida Nor- te y Calle 2 de Febrero Barrio Las Ánimas, Candelaria de La Fronte- ra. Días y horas  de  reuniones: De Lunes a Domingo de  6:30 a 8:30 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow248 = new google.maps.InfoWindow({ content: contentString248 }); 
    //markers 
    var marker248 = new google.maps.Marker({ position: point248, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "248.NUEVA VIDA" });
     //information for 
    function goToLink248() { infowindow248.open(map,marker248); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker248, 'click', goToLink248); google.maps.event.addDomListener(window, 'load', initialize);
    
    //MARCADOR 249 
    //positions 
    var point249 = new google.maps.LatLng(14.108749, -89.649200); var contentString249 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NUEVO RENACER 20 DE ABRIL.</h1>'+ '<div id="bodyContent">'+ '<p><b>NUEVO RENACER 20 DE ABRIL.</b> , — 20 de Abril de 2008. Dirección: Cantón Tierra Blanca  Colonia  Las Ánimas.  Días y horas  de  reuniones: De Lunes a Domingo de 7:00 a 9:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow249 = new google.maps.InfoWindow({ content: contentString249 }); 
    //markers 
    var marker249 = new google.maps.Marker({ position: point249, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "249.NUEVO RENACER 20 DE ABRIL." }); 
    //information for 
    function goToLink249() { infowindow249.open(map,marker249); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker249, 'click', goToLink249); google.maps.event.addDomListener(window, 'load', initialize);
    
    //MARCADOR 250 
    //positions 
    var point250 = new google.maps.LatLng(14.116757, -89.649454); var contentString250 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">VIDA NUEVA.</h1>'+ '<div id="bodyContent">'+ '<p><b>VIDA NUEVA.</b> , —  15 de  Octubre de  2001.  Dirección:  Una Cuadra Abajo del Templo Aposento Alto, Cantón Monte Verde. Días y horas de  reuniones: De Lunes a Domingo de  7:00 a 9:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow250 = new google.maps.InfoWindow({ content: contentString250 }); 
    //markers 
    var marker250 = new google.maps.Marker({ position: point250, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "250.VIDA NUEVA." }); 
    //information for 
    function goToLink250() { infowindow250.open(map,marker250); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker250, 'click', goToLink250); google.maps.event.addDomListener(window, 'load', initialize);
    
    //MARCADOR 251 
    //positions 
    var point251 = new google.maps.LatLng(14.119762, -89.654743); var contentString251 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">VOLVER A NACER.</h1>'+ '<div id="bodyContent">'+ '<p><b>VOLVER A NACER.</b> , — 17 de  Febrero de  2008.  Dirección:  San Cris- tóbal  La Frontera. Días y horas  de  reuniones: De Lunes a Domingo de 7:00 a 9:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow251 = new google.maps.InfoWindow({ content: contentString251 }); 
    //markers 
    var marker251 = new google.maps.Marker({ position: point251, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "251.VOLVER A NACER." }); 
    //information for 
    function goToLink251() { infowindow251.open(map,marker251); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker251, 'click', goToLink251); google.maps.event.addDomListener(window, 'load', initialize);





    //MARCADOR 252 
    //positions 
    var point252 = new google.maps.LatLng(13.926598, -89.500988); var contentString252 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">07  DE ABRIL.</h1>'+ '<div id="bodyContent">'+ '<p><b>07  DE ABRIL.</b> , — 07  de  Abril de  1974.  Dirección:  Una  Cuadra  al Oriente de  La Iglesia  Católica   Cantón San  Jacinto, Coatepeque. Días y horas  de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow252 = new google.maps.InfoWindow({ content: contentString252 }); 
    //markers
     var marker252 = new google.maps.Marker({ position: point252, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "252.07  DE ABRIL." }); 
     //information for 
     function goToLink252() { infowindow252.open(map,marker252); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker252, 'click', goToLink252); google.maps.event.addDomListener(window, 'load', initialize);
    
    //MARCADOR 253 
    //positions 
    var point253 = new google.maps.LatLng(13.969715, -89.471679); var contentString253 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">CAMINO A LA FELICIDAD.</h1>'+ '<div id="bodyContent">'+ '<p><b>CAMINO A LA FELICIDAD.</b> , — 15  de  Enero  de  1984.  Dirección: Salida  a San  Miguelito, frente  a La Iglesia  Evangélica Cantón San Jacinto. Días y horas  de  reuniones: De Lunes a Domingo de  6:00 a</p>'+ '</div>'+ '</div>'; var infowindow253 = new google.maps.InfoWindow({ content: contentString253 }); 
    //markers
     var marker253 = new google.maps.Marker({ position: point253, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "253.CAMINO A LA FELICIDAD." }); 
     //information for 
     function goToLink253() { infowindow253.open(map,marker253); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker253, 'click', goToLink253); google.maps.event.addDomListener(window, 'load', initialize);
    
    //MARCADOR 254 
    //positions 
    var point254 = new google.maps.LatLng(13.924017, -89.504065); var contentString254 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">MILAGROSO.</h1>'+ '<div id="bodyContent">'+ '<p><b>MILAGROSO.</b> , — 07 de  Junio  de  1972.  Dirección:  Avenida  Gerardo Barrios 1-6 Coatepeque Santa  Ana. Días y horas  de  reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow254 = new google.maps.InfoWindow({ content: contentString254 }); 
    //markers
     var marker254 = new google.maps.Marker({ position: point254, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "254.MILAGROSO." }); 
     //information for 
     function goToLink254() { infowindow254.open(map,marker254); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker254, 'click', goToLink254); google.maps.event.addDomListener(window, 'load', initialize);
    
    //MARCADOR 255 
    //positions 
    var point255 = new google.maps.LatLng(13.924562, -89.503379); var contentString255 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NO ESTAMOS SOLOS.</h1>'+ '<div id="bodyContent">'+ '<p><b>NO ESTAMOS SOLOS.</b> , — 23 de  Diciembre de  1996.  Dirección:  2ª Avenida  Sur y 6ª Calle Oriente Nº 41, Coatepeque. Días y horas  de reuniones: De Lunes a Domingo de 6:30 a 8:30 p.m. </p>'+ '</div>'+ '</div>'; var infowindow255 = new google.maps.InfoWindow({ content: contentString255 }); 
    //markers
     var marker255 = new google.maps.Marker({ position: point255, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "255.NO ESTAMOS SOLOS." }); 
     //information for 
     function goToLink255() { infowindow255.open(map,marker255); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker255, 'click', goToLink255); google.maps.event.addDomListener(window, 'load', initialize);
    
    //MARCADOR 256 
    //positions 
    var point256 = new google.maps.LatLng(13.922164, -89.504398); var contentString256 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NUEVA LUZ.</h1>'+ '<div id="bodyContent">'+ '<p><b>NUEVA LUZ.</b> , — 24 de  Febrero de  1995.  Dirección:  Cantón 7 Prín- cipes,  Calle a Lago de  Coatepeque. Días y horas  de  reuniones: De Lunes a Domingo de 7:00 a 9:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow256 = new google.maps.InfoWindow({ content: contentString256 }); 
    //markers
     var marker256 = new google.maps.Marker({ position: point256, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "256.NUEVA LUZ." }); 
     //information for 
     function goToLink256() { infowindow256.open(map,marker256); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker256, 'click', goToLink256); google.maps.event.addDomListener(window, 'load', initialize);
    
    //MARCADOR 257 
    //positions 
    var point257 = new google.maps.LatLng(13.999493, -89.516961); var contentString257 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NUEVA VIDA.</h1>'+ '<div id="bodyContent">'+ '<p><b>NUEVA VIDA.</b> , — 12 de  Abril de  1988.  Dirección:  Cantón El Resba- ladero Caserío Planta Vieja Carretera de Santa Ana a Tacachico, una Cuadra al Oriente del Centro Educativo, Coatepeque. Días y horas de  reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow257 = new google.maps.InfoWindow({ content: contentString257 }); 
    //markers
     var marker257 = new google.maps.Marker({ position: point257, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "257.NUEVA VIDA." }); 
     //information for 
     function goToLink257() { infowindow257.open(map,marker257); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker257, 'click', goToLink257); google.maps.event.addDomListener(window, 'load', initialize);
    
    //MARCADOR 258 
    //positions
    var point258 = new google.maps.LatLng(13.991791, -89.481357); var contentString258 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NUEVO DESPERTAR.</h1>'+ '<div id="bodyContent">'+ '<p><b>NUEVO DESPERTAR.</b> , — 31 de  Julio de  2005.  Dirección:  Cantón El Resbaladero frente  a Iglesia  Católica  Carretera de  Santa  Ana a Ta- cachico. Días y horas  de  reuniones: De Lunes a Domingo de  6:30 a</p>'+ '</div>'+ '</div>'; var infowindow258 = new google.maps.InfoWindow({ content: contentString258 }); 
    //markers
     var marker258 = new google.maps.Marker({ position: point258, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "258.NUEVO DESPERTAR." }); 
     //information for 
     function goToLink258() { infowindow258.open(map,marker258); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker258, 'click', goToLink258); google.maps.event.addDomListener(window, 'load', initialize);
    
    //MARCADOR 259 
    //positions 
    var point259 = new google.maps.LatLng(13.928270, -89.500240); var contentString259 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NUEVO MILAGRO 24 DE MARZO.</h1>'+ '<div id="bodyContent">'+ '<p><b>NUEVO MILAGRO 24 DE MARZO.</b> , — 24 de Marzo de 1995. Direc- ción: Calle Roosevelt Oriente frente  a pasarela, Coatepeque. Días y horas de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow259 = new google.maps.InfoWindow({ content: contentString259 }); 
    //markers
     var marker259 = new google.maps.Marker({ position: point259, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "259.NUEVO MILAGRO 24 DE MARZO." }); 
     //information for 
     function goToLink259() { infowindow259.open(map,marker259); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker259, 'click', goToLink259); google.maps.event.addDomListener(window, 'load', initialize);
    
    //MARCADOR 260 
    //positions 
    var point260 = new google.maps.LatLng(13.971445, -89.471498); var contentString260 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NUEVO RENACER 13  DE OCTUBRE.</h1>'+ '<div id="bodyContent">'+ '<p><b>NUEVO RENACER 13  DE OCTUBRE.</b> , — 13 de  Octubre de  2012. Dirección:  Cantón San Jacinto Caserío Las Lomas.  Días y horas  de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow260 = new google.maps.InfoWindow({ content: contentString260 }); 
    //markers
     var marker260 = new google.maps.Marker({ position: point260, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "260.NUEVO RENACER 13  DE OCTUBRE." }); 
     //information for 
     function goToLink260() { infowindow260.open(map,marker260); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker260, 'click', goToLink260); google.maps.event.addDomListener(window, 'load', initialize);
    
    //MARCADOR 261 
    //positions 
    var point261 = new google.maps.LatLng(13.940886, -89.439880); var contentString261 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NUEVO  RENACER.</h1>'+ '<div id="bodyContent">'+ '<p><b>NUEVO  RENACER.</b> , — 06  de  Agosto de  2008.  Dirección:  Cantón Las Piletas  Caserío Los Planes  ½ Cuadra al Sur de  Centro Escolar Coatepeque. Días y horas  de  reuniones: De  Lunes  a Domingo de 6:00 a 8:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow261 = new google.maps.InfoWindow({ content: contentString261 }); 
    //markers 
    var marker261 = new google.maps.Marker({ position: point261, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "261.NUEVO  RENACER." }); 
    //information for 
    function goToLink261() { infowindow261.open(map,marker261); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker261, 'click', goToLink261); google.maps.event.addDomListener(window, 'load', initialize);
    
    //MARCADOR 262 
    //positions 
    var point262 = new google.maps.LatLng(13.932945, -89.490072); var contentString262 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UNA MANO AMIGA.</h1>'+ '<div id="bodyContent">'+ '<p><b>UNA MANO AMIGA.</b> , — 16 de Noviembre de 2007. Dirección: Can- tón El Cerro  entrada al Caserío Luisiana a La par de La Iglesia Cató- lica, Coatepeque. Días y horas  de  reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.</p>'+ '</div>'+ '</div>'; var infowindow262 = new google.maps.InfoWindow({ content: contentString262 }); 
    //markers 
    var marker262 = new google.maps.Marker({ position: point262, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "262.UNA MANO AMIGA." }); 
    //information for 
    function goToLink262() { infowindow262.open(map,marker262); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker262, 'click', goToLink262); google.maps.event.addDomListener(window, 'load', initialize);





    //MARCADOR 263 
    //positions 
    var point263 = new google.maps.LatLng(13.983536, -89.677508); var contentString263 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">BRISAS DE LA LAGUNA.</h1>'+ '<div id="bodyContent">'+ '<p><b>BRISAS DE LA LAGUNA.</b> , — 20  de  Mayo  de  1985.  Dirección:  1ª Calle Barrio Apaneca, Final Calle Oriente callejón  a La Joya  Nº 39.Días y horas  de reuniones: De Lunes a Domingo de 7:00 a 9:00 p.m.</p>'+ '</div>'+ '</div>'; var infowindow263 = new google.maps.InfoWindow({ content: contentString263 }); 
    //markers 
    var marker263 = new google.maps.Marker({ position: point263, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "263.BRISAS DE LA LAGUNA." }); 
    //information for 
    function goToLink263() { infowindow263.open(map,marker263); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker263, 'click', goToLink263); google.maps.event.addDomListener(window, 'load', initialize);
    
    //MARCADOR 264 
    //positions 
    var point264 = new google.maps.LatLng(13.982536, -89.676653); var contentString264 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">LA HUMILDAD.</h1>'+ '<div id="bodyContent">'+ '<p><b>LA HUMILDAD.</b> , — 08 de  Agosto de  2009.  Dirección:  Calle Ramón Flores  Nº 5, entre 5ª y 7ª Avenida  Sur Barrio Las Ánimas, 2ª Planta. Días y horas  de reuniones: De Lunes a Domingo de 7:30 a 9:00 p.m.</p>'+ '</div>'+ '</div>'; var infowindow264 = new google.maps.InfoWindow({ content: contentString264 }); 
    //markers 
    var marker264 = new google.maps.Marker({ position: point264, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "264.LA HUMILDAD." }); 
    //information for 
    function goToLink264() { infowindow264.open(map,marker264); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker264, 'click', goToLink264); google.maps.event.addDomListener(window, 'load', initialize);
    
    //MARCADOR 265 
    //positions 
    var point265 = new google.maps.LatLng(13.981880, -89.682666); var contentString265 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">MENSAJEROS DE BILL.</h1>'+ '<div id="bodyContent">'+ '<p><b>MENSAJEROS DE BILL.</b> , — 01 de  Agosto de  2001.  Dirección:  10ª Avenida  Sur y 7ª Calle Poniente. Días y horas  de  reuniones: De Lu- nes  a Domingo de  6:30 a 8:30 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow265 = new google.maps.InfoWindow({ content: contentString265 }); 
    //markers 
    var marker265 = new google.maps.Marker({ position: point265, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "265.MENSAJEROS DE BILL." }); 
    //information for 
    function goToLink265() { infowindow265.open(map,marker265); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker265, 'click', goToLink265); google.maps.event.addDomListener(window, 'load', initialize);
    
    //MARCADOR 266 
    //positions 
    var point266 = new google.maps.LatLng(13.996001, -89.695127); var contentString266 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">MI ESPERANZA.</h1>'+ '<div id="bodyContent">'+ '<p><b>MI ESPERANZA.</b> , — 03 de  Septiembre de  1978.  Dirección:  Cantón El Arado.  Días y horas  de reuniones: De Lunes a Domingo de 6:30 a 8:30 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow266 = new google.maps.InfoWindow({ content: contentString266 }); 
    //markers 
    var marker266 = new google.maps.Marker({ position: point266, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "266.MI ESPERANZA." }); 
    //information for 
    function goToLink266() { infowindow266.open(map,marker266); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker266, 'click', goToLink266); google.maps.event.addDomListener(window, 'load', initialize);
    
    //MARCADOR 267 
    //positions 
    var point267 = new google.maps.LatLng(14.011472, -89.691196); var contentString267 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NUEVO RENACIMIENTO BUENOS AIRES.</h1>'+ '<div id="bodyContent">'+ '<p><b>NUEVO RENACIMIENTO BUENOS AIRES.</b> , — 08 de Diciembre de 2006.  Dirección:  Cantón Buenos  Aires ½ Cuadra Abajo  de  La Casa Comunal. Días y horas  de  reuniones: De Lunes a Domingo de  6:30 a 8:30 p.m. </p>'+ '</div>'+ '</div>'; var infowindow267 = new google.maps.InfoWindow({ content: contentString267 }); 
    //markers 
    var marker267 = new google.maps.Marker({ position: point267, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "267.NUEVO RENACIMIENTO BUENOS AIRES." }); 
    //information for 
    function goToLink267() { infowindow267.open(map,marker267); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker267, 'click', goToLink267); google.maps.event.addDomListener(window, 'load', initialize);
    
    //MARCADOR 268 
    //positions 
    var point268 = new google.maps.LatLng(13.987465, -89.680871); var contentString268 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">SANTA CRUZ.</h1>'+ '<div id="bodyContent">'+ '<p><b>SANTA CRUZ.</b> , — 10 de Noviembre de 1971.  Dirección:  6ª Calle Po- niente Barrio  Santa  Cruz.  Días  y horas  de  reuniones: De  Lunes  a Domingo de 7:00 a 9:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow268 = new google.maps.InfoWindow({ content: contentString268 }); 
    //markers 
    var marker268 = new google.maps.Marker({ position: point268, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "268.SANTA CRUZ." }); 
    //information for 
    function goToLink268() { infowindow268.open(map,marker268); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker268, 'click', goToLink268); google.maps.event.addDomListener(window, 'load', initialize);
    
    //MARCADOR 269 
    //positions 
    var point269 = new google.maps.LatLng(13.981256, -89.678738); var contentString269 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">SOMOS FELICES.</h1>'+ '<div id="bodyContent">'+ '<p><b>SOMOS FELICES.</b> , — 08 de Febrero de 1973.  Dirección:  1ª Avenida Sur entre 5ª  y 7ª  Calle  Oriente Nº  9 Chalchuapa. Días y horas  de reuniones: De Lunes a Domingo de 7:00 a 9:00 p.m.</p>'+ '</div>'+ '</div>'; var infowindow269 = new google.maps.InfoWindow({ content: contentString269 }); 
    //markers 
    var marker269 = new google.maps.Marker({ position: point269, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "269.SOMOS FELICES." }); 
    //information for 
    function goToLink269() { infowindow269.open(map,marker269); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker269, 'click', goToLink269); google.maps.event.addDomListener(window, 'load', initialize);
    

    //MARCADOR 270 
    //positions 
    var point270 = new google.maps.LatLng(13.983412, -89.680726); var contentString270 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">TAZUMAL.</h1>'+ '<div id="bodyContent">'+ '<p><b>TAZUMAL.</b> , — 24  de  Febrero de  1960.  Dirección:  6ª  Avenida  Sur entre 3ª y 5ª Calle Poniente. Días y horas  de  reuniones: De Lunes a Domingo de 7:00 a 9:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow270 = new google.maps.InfoWindow({ content: contentString270 }); 
    //markers 
    var marker270 = new google.maps.Marker({ position: point270, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "270.TAZUMAL." }); 
    //information for 
    function goToLink270() { infowindow270.open(map,marker270); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker270, 'click', goToLink270); google.maps.event.addDomListener(window, 'load', initialize);





    //MARCADOR 271 
    //positions 
    var point271 = new google.maps.LatLng(13.903513, -89.496945); var contentString271 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">24 HORAS FE EN DIOS.</h1>'+ '<div id="bodyContent">'+ '<p><b>24 HORAS FE EN DIOS.</b> , — 20 de Agosto de 2002.  Dirección:  Ave- nida  San  Carlos  Nº  28  Colonia  Esmeralda Barrio  San  Antonio,  El Congo. Días y horas  de  reuniones: De Lunes a Domingo de  7:00 a 9:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow271 = new google.maps.InfoWindow({ content: contentString271 }); 
    //markers 
    var marker271 = new google.maps.Marker({ position: point271, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "271.24 HORAS FE EN DIOS." }); 
    //information for 
    function goToLink271() { infowindow271.open(map,marker271); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker271, 'click', goToLink271); google.maps.event.addDomListener(window, 'load', initialize);
    
    //MARCADOR 272 
    //positions 
    var point272 = new google.maps.LatLng(13.908523, -89.492043); var contentString272 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">AMANECER EN SOBRIEDAD.</h1>'+ '<div id="bodyContent">'+ '<p><b>AMANECER EN SOBRIEDAD.</b> , — 25 de Abril 2007.  Dirección:  Ex— Casa pastoral Pasaje  Nº 1 Comunidad San José Cantón El Guineo El Congo, Santa  Ana. Días y horas  de reuniones: De Lunes a Domingo de 7:00 a 9:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow272 = new google.maps.InfoWindow({ content: contentString272 }); 
    //markers 
    var marker272 = new google.maps.Marker({ position: point272, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "272.AMANECER EN SOBRIEDAD." }); 
    //information for 
    function goToLink272() { infowindow272.open(map,marker272); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker272, 'click', goToLink272); google.maps.event.addDomListener(window, 'load', initialize);
   
   //MARCADOR 273 
    //positions 
    var point273 = new google.maps.LatLng(13.900014, -89.503431); var contentString273 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">DESPERTAR ESPIRITUAL.</h1>'+ '<div id="bodyContent">'+ '<p><b>DESPERTAR ESPIRITUAL.</b> , —  18  de  Octubre de  1980.  Dirección: Barrio San Antonio  y Calle 5 de Noviembre. Días y horas  de reunio- nes: De Lunes a Domingo de 7:00 a 9:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow273 = new google.maps.InfoWindow({ content: contentString273 }); 
    //markers 
    var marker273 = new google.maps.Marker({ position: point273, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "273.DESPERTAR ESPIRITUAL." }); 
    //information for 
    function goToLink273() { infowindow273.open(map,marker273); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker273, 'click', goToLink273); google.maps.event.addDomListener(window, 'load', initialize);
    
    //MARCADOR 274 
    //positions 
    var point274 = new google.maps.LatLng(13.897772, -89.508718); var contentString274 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">JÓVENES Y VETERANOS EN ACCIÓN.</h1>'+ '<div id="bodyContent">'+ '<p><b>JÓVENES Y VETERANOS EN ACCIÓN.</b> , — 27 de Julio de 2011. Di- rección:  Colonia  Las Brisas Avenida  Los Pinos Calle La Floresta Polí- gono Nº 8 Casa Nº 1 El Congo. Días y horas de reuniones: De Lunes a Domingo de 7:00 a 9:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow274 = new google.maps.InfoWindow({ content: contentString274 }); 
    //markers 
    var marker274 = new google.maps.Marker({ position: point274, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "274.JÓVENES Y VETERANOS EN ACCIÓN." }); 
    //information for 
    function goToLink274() { infowindow274.open(map,marker274); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker274, 'click', goToLink274); google.maps.event.addDomListener(window, 'load', initialize);
    
    //MARCADOR 275 
    //positions 
    var point275 = new google.maps.LatLng(13.903552, -89.506841); var contentString275 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NUEVA VIDA 07  DE FEBRERO.</h1>'+ '<div id="bodyContent">'+ '<p><b>NUEVA VIDA 07  DE FEBRERO.</b> , — 07 de  Febrero de  1981.  Direc- ción: Cantón San José Las Flores, El Congo. Días y horas  de reunio- nes: De Lunes a Domingo de 7:00 a 9:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow275 = new google.maps.InfoWindow({ content: contentString275 }); 
    //markers 
    var marker275 = new google.maps.Marker({ position: point275, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "275.NUEVA VIDA 07  DE FEBRERO." }); 
    //information for 
    function goToLink275() { infowindow275.open(map,marker275); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker275, 'click', goToLink275); google.maps.event.addDomListener(window, 'load', initialize);
   
   //MARCADOR 276 
    //positions 
    var point276 = new google.maps.LatLng(13.905216, -89.497386); var contentString276 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NUEVO AMANECER.</h1>'+ '<div id="bodyContent">'+ '<p><b>NUEVO AMANECER.</b> , — 29 de  Enero  de  1992.  Dirección:  Calle 12 de  Octubre frente  a Casa  Comunal. Días y horas  de  reuniones: De Lunes a Domingo de 7:00 a 9:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow276 = new google.maps.InfoWindow({ content: contentString276 }); 
    //markers 
    var marker276 = new google.maps.Marker({ position: point276, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "276.NUEVO AMANECER." }); 
    //information for 
    function goToLink276() { infowindow276.open(map,marker276); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker276, 'click', goToLink276); google.maps.event.addDomListener(window, 'load', initialize);
    
    //MARCADOR 277 
    //positions 
    var point277 = new google.maps.LatLng(13.905969, -89.496448); var contentString277 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">RENACER 20  DE NOVIEMBRE.</h1>'+ '<div id="bodyContent">'+ '<p><b>RENACER 20  DE NOVIEMBRE.</b> , — 20 de  Noviembre de  1997.  Di- rección:  Calle Principal a La Bendición, Lago de Coatepeque, frente a Quinta  Macaran. Días y horas  de  reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow277 = new google.maps.InfoWindow({ content: contentString277 }); 
    //markers 
    var marker277 = new google.maps.Marker({ position: point277, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "277.RENACER 20  DE NOVIEMBRE." }); 
    //information for 
    function goToLink277() { infowindow277.open(map,marker277); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker277, 'click', goToLink277); google.maps.event.addDomListener(window, 'load', initialize);






    //MARCADOR 278 
    //positions 
    var point278 = new google.maps.LatLng(14.190448, -89.428738); var contentString278 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UN REGALO DE DIOS EN SAN NICOLÁS.</h1>'+ '<div id="bodyContent">'+ '<p><b>UN REGALO DE DIOS EN SAN NICOLÁS.</b> , — 03 de Mayo de 2000. Dirección: Cantón San Nicolás 3er Pasaje  al fondo contiguo a Iglesia Evangélica Rio Guajollo.  Días y horas  de reuniones: De Lunes a Domingo  de 6:30 a 8:30 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow278 = new google.maps.InfoWindow({ content: contentString278 }); 
    //markers 
    var marker278 = new google.maps.Marker({ position: point278, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "278.UN REGALO DE DIOS EN SAN NICOLÁS." }); 
    //information for 
    function goToLink278() { infowindow278.open(map,marker278); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker278, 'click', goToLink278); google.maps.event.addDomListener(window, 'load', initialize);





    //MARCADOR 279 
    //positions 
    var point279 = new google.maps.LatLng(4.322360, -89.459207); var contentString279 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">AMOR Y FE.</h1>'+ '<div id="bodyContent">'+ '<p><b>AMOR Y FE.</b> , — 29 de Julio 2008.  Dirección:  Cantón La Isla, Caserío El Ahogado. Días y horas  de  reuniones: De  Lunes  a Domingo de 6:00 a 8:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow279 = new google.maps.InfoWindow({ content: contentString279 }); 
    //markers 
    var marker279 = new google.maps.Marker({ position: point279, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "279.AMOR Y FE." }); 
    //information for 
    function goToLink279() { infowindow279.open(map,marker279); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker279, 'click', goToLink279); google.maps.event.addDomListener(window, 'load', initialize);
    
    //MARCADOR 280 
    //positions 
    var point280 = new google.maps.LatLng(14.330370, -89.442534); var contentString280 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">AMOR Y PAZ EN SANTA RITA.</h1>'+ '<div id="bodyContent">'+ '<p><b>AMOR Y PAZ EN SANTA RITA.</b> , — 21 de  Septiembre de  2014.  Di- rección:  Calle Principal ½ Cuadra al Sur de  La Escuela.  Días y horas de  reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow280 = new google.maps.InfoWindow({ content: contentString280 }); 
    //markers 
    var marker280 = new google.maps.Marker({ position: point280, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "280.AMOR Y PAZ EN SANTA RITA." }); 
    //information for 
    function goToLink280() { infowindow280.open(map,marker280); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker280, 'click', goToLink280); google.maps.event.addDomListener(window, 'load', initialize);
    
    //MARCADOR 281 
    //positions 
    var point281 = new google.maps.LatLng(14.341314, -89.456182); var contentString281 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">BIENESTAR EN  LA FAMILIA.</h1>'+ '<div id="bodyContent">'+ '<p><b>BIENESTAR EN  LA FAMILIA.</b> , — 24  de  Julio  de  2011.  Dirección: Cantón San Antonio  La Junta, Caserío La Bolsa ubicado atrás  de La Iglesia Católica. Días y horas  de reuniones: De Lunes a Domingo de 5:30 a 7:30 p.m. </p>'+ '</div>'+ '</div>'; var infowindow281 = new google.maps.InfoWindow({ content: contentString281 }); 
    //markers 
    var marker281 = new google.maps.Marker({ position: point281, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "281.BIENESTAR EN  LA FAMILIA." }); 
    //information for 
    function goToLink281() { infowindow281.open(map,marker281); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker281, 'click', goToLink281); google.maps.event.addDomListener(window, 'load', initialize);
    //MARCADOR 282 
    //positions 
    var point282 = new google.maps.LatLng(14.330270, -89.447733); var contentString282 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">BRISAS DE GUADALUPE.</h1>'+ '<div id="bodyContent">'+ '<p><b>BRISAS DE GUADALUPE.</b> , — 30  de  Mayo  de  1975.  Dirección:  1ª Calle Oriente y 2ª Avenida.  Días y horas  de  reuniones: De Lunes a Domingo de 6:30 a 8:30 p.m. </p>'+ '</div>'+ '</div>'; var infowindow282 = new google.maps.InfoWindow({ content: contentString282 }); 
    //markers 
    var marker282 = new google.maps.Marker({ position: point282, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "282.BRISAS DE GUADALUPE." }); 
    //information for
     function goToLink282() { infowindow282.open(map,marker282); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker282, 'click', goToLink282); google.maps.event.addDomListener(window, 'load', initialize);
    //MARCADOR 283 
    //positions 
    var point283 = new google.maps.LatLng(14.333062, -89.454028); var contentString283 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">DESPERTAR 18  DE NOVIEMBRE.</h1>'+ '<div id="bodyContent">'+ '<p><b>DESPERTAR 18  DE NOVIEMBRE.</b> , — 18  de  Noviembre de  1996. Dirección:  Calle El Rosario Colonia  Capulín.  Días y horas  de  reunio- nes: De Lunes a Domingo de 6:30 a 8:30 p.m. </p>'+ '</div>'+ '</div>'; var infowindow283 = new google.maps.InfoWindow({ content: contentString283 }); 
    //markers 
    var marker283 = new google.maps.Marker({ position: point283, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "283.DESPERTAR 18  DE NOVIEMBRE." }); 
    //information for
     function goToLink283() { infowindow283.open(map,marker283); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker283, 'click', goToLink283); google.maps.event.addDomListener(window, 'load', initialize);
    //MARCADOR 284 
    //positions 
    var point284 = new google.maps.LatLng(14.338037, -89.437017); var contentString284 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">DESPERTAR FELIZ.</h1>'+ '<div id="bodyContent">'+ '<p><b>DESPERTAR FELIZ.</b> , — 30 de  Octubre de  2004.  Dirección:  Cantón La Ceibita, Caserío Las Flores.  Días y horas  de reuniones: Miércoles y Sábado de 5:00 a 7:00 p.m.</p>'+ '</div>'+ '</div>'; var infowindow284 = new google.maps.InfoWindow({ content: contentString284 }); 
    //markers 
    var marker284 = new google.maps.Marker({ position: point284, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "284.DESPERTAR FELIZ." });
    //information for 
    function goToLink284() { infowindow284.open(map,marker284); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker284, 'click', goToLink284); google.maps.event.addDomListener(window, 'load', initialize);
    //MARCADOR 285 
    //positions 
    var point285 = new google.maps.LatLng(14.325296, -89.445756); var contentString285 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">LOS HÉROES.</h1>'+ '<div id="bodyContent">'+ '<p><b>LOS HÉROES.</b> , — 05 de  Agosto de  1982.  Dirección:  Puente Pacheco,  Metapán. Días y horas  de  reuniones: De Lunes  a Domingo de 6:30 a 8:30 p.m. </p>'+ '</div>'+ '</div>'; var infowindow285 = new google.maps.InfoWindow({ content: contentString285 }); 
    //markers 
    var marker285 = new google.maps.Marker({ position: point285, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "285.LOS HÉROES." }); 
    //information for 
    function goToLink285() { infowindow285.open(map,marker285); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker285, 'click', goToLink285); google.maps.event.addDomListener(window, 'load', initialize);
    //MARCADOR 286 
    //positions 
    var point286 = new google.maps.LatLng(14.330341, -89.450534); var contentString286 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">LUZ Y ESPERANZA.</h1>'+ '<div id="bodyContent">'+ '<p><b>LUZ Y ESPERANZA.</b> , — 13  de  Marzo  de  2012.  Dirección:  Cantón Belén  Güijat,  una  Cuadra Arriba de  CEL Guajoyo, Carretera inter- nacional sobre Calle  a Lago  de  Güija.  Días y horas  de  reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow286 = new google.maps.InfoWindow({ content: contentString286 }); 
    //markers 
    var marker286 = new google.maps.Marker({ position: point286, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "286.LUZ Y ESPERANZA." }); 
    //information for 
    function goToLink286() { infowindow286.open(map,marker286); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker286, 'click', goToLink286); google.maps.event.addDomListener(window, 'load', initialize);
    //MARCADOR 287 
    //positions 
    var point287 = new google.maps.LatLng(14.331844, -89.448310); var contentString287 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">MIRAMUNDO.</h1>'+ '<div id="bodyContent">'+ '<p><b>MIRAMUNDO.</b> , — 18 de Febrero de 1964. Dirección: 15 metros cos- tado Norte  del  parque Central  Calle  al Calvario,  Metapán. Días y horas de reuniones: De Lunes a Domingo de 7:00 a 9:00 p.m.</p>'+ '</div>'+ '</div>'; var infowindow287 = new google.maps.InfoWindow({ content: contentString287 }); 
    //markers 
    var marker287 = new google.maps.Marker({ position: point287, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "287.MIRAMUNDO." }); 
    //information for 
    function goToLink287() { infowindow287.open(map,marker287); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker287, 'click', goToLink287); google.maps.event.addDomListener(window, 'load', initialize);
    //MARCADOR 288 
    //positions 
    var point288 = new google.maps.LatLng(14.331152, -89.444169); var contentString288 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NUEVA  VIDA (INSTITUCIONAL).</h1>'+ '<div id="bodyContent">'+ '<p><b>NUEVA  VIDA (INSTITUCIONAL).</b> , — 14  de  Julio  de  2000.  Direc- ción: Centro penal de  Metapán. Días y horas  de  reuniones de  1:00 a 3:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow288 = new google.maps.InfoWindow({ content: contentString288 }); 
    //markers 
    var marker288 = new google.maps.Marker({ position: point288, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "288.NUEVA  VIDA (INSTITUCIONAL)." }); 
    //information for 
    function goToLink288() { infowindow288.open(map,marker288); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker288, 'click', goToLink288); google.maps.event.addDomListener(window, 'load', initialize);
    //MARCADOR 289 
    //positions 
    var point289 = new google.maps.LatLng(14.322551, -89.437343); var contentString289 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NUEVA VIDA 13  DE MAYO.</h1>'+ '<div id="bodyContent">'+ '<p><b>NUEVA VIDA 13  DE MAYO.</b> , — 13  de  Mayo  de  2012.  Dirección: Cantón Tecomapa Caserío Agua Fría Metapán. Días y horas  de reu- niones: De Lunes a Domingo de 6:30 a 8:30 p.m. </p>'+ '</div>'+ '</div>'; var infowindow289 = new google.maps.InfoWindow({ content: contentString289 }); 
    //markers 
    var marker289 = new google.maps.Marker({ position: point289, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "289.NUEVA VIDA 13  DE MAYO." }); 
    //information for 
    function goToLink289() { infowindow289.open(map,marker289); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker289, 'click', goToLink289); google.maps.event.addDomListener(window, 'load', initialize);
    //MARCADOR 290 
    //positions 
    var point290 = new google.maps.LatLng(14.324132, -89.440089); var contentString290 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NUEVO AMANECER EN SAN JOSÉ INGENIO.</h1>'+ '<div id="bodyContent">'+ '<p><b>NUEVO AMANECER EN SAN JOSÉ INGENIO.</b> , — 27 de  Junio  de 2014.  Dirección:  Cantón San  José Ingenio Metapán. Días y horas de  reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow290 = new google.maps.InfoWindow({ content: contentString290 }); 
    //markers 
    var marker290 = new google.maps.Marker({ position: point290, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "290.NUEVO AMANECER EN SAN JOSÉ INGENIO." }); 
    //information for
     function goToLink290() { infowindow290.open(map,marker290); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker290, 'click', goToLink290); google.maps.event.addDomListener(window, 'load', initialize);
    //MARCADOR 291 
    //positions 
    var point291 = new google.maps.LatLng(14.327306, -89.400174); var contentString291 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NUEVO AMANECER SANTA RITA.</h1>'+ '<div id="bodyContent">'+ '<p><b>NUEVO AMANECER SANTA RITA.</b> , — 26 de Marzo de 1996. Direc- ción: Cantón Santa  Rita, Caserío El Tablón.  Días y horas  de  reunio- nes: De Lunes a Domingo de 6:00 a 8:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow291 = new google.maps.InfoWindow({ content: contentString291 }); 
    //markers 
    var marker291 = new google.maps.Marker({ position: point291, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "291.NUEVO AMANECER SANTA RITA." }); 
    //information for 
    function goToLink291() { infowindow291.open(map,marker291); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker291, 'click', goToLink291); google.maps.event.addDomListener(window, 'load', initialize);
    //MARCADOR 292 
    //positions 
    var point292 = new google.maps.LatLng(14.221595, -89.455777); var contentString292 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NUEVO  DESPERTAR CONCHAGUA.</h1>'+ '<div id="bodyContent">'+ '<p><b>NUEVO  DESPERTAR CONCHAGUA.</b> , —  31  de  Agosto de  1974. Dirección:  Caserío Conchagua frente  a Iglesia  Católica, Metapán. Días y horas  de reuniones: De Lunes a Domingo de 5:00 a 7:00 p.m.</p>'+ '</div>'+ '</div>'; var infowindow292 = new google.maps.InfoWindow({ content: contentString292 }); 
    //markers 
    var marker292 = new google.maps.Marker({ position: point292, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "292.NUEVO  DESPERTAR CONCHAGUA." }); 
    //information for 
    function goToLink292() { infowindow292.open(map,marker292); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker292, 'click', goToLink292); google.maps.event.addDomListener(window, 'load', initialize);
    //MARCADOR 293 
    //positions 
    var point293 = new google.maps.LatLng(14.331919, -89.446631); var contentString293 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">RENACER 26 DE SEPTIEMBRE.</h1>'+ '<div id="bodyContent">'+ '<p><b>RENACER 26 DE SEPTIEMBRE.</b> , — 26 de  Septiembre de  2002.  Di- rección:  5ª Calle Oriente, Barrio Nuevo. Días y horas  de  reuniones: De Lunes a Domingo de  6:30 a 8:30 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow293 = new google.maps.InfoWindow({ content: contentString293 }); 
    //markers 
    var marker293 = new google.maps.Marker({ position: point293, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "293.RENACER 26 DE SEPTIEMBRE." }); 
    //information for 
    function goToLink293() { infowindow293.open(map,marker293); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker293, 'click', goToLink293); google.maps.event.addDomListener(window, 'load', initialize);
    //MARCADOR 294 
    //positions 
    var point294 = new google.maps.LatLng(14.214275, -89.466785); var contentString294 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UN MILAGRO EN EL DESAGÜE.</h1>'+ '<div id="bodyContent">'+ '<p><b>UN MILAGRO EN EL DESAGÜE.</b> , — 25 de  Enero  de  1995.  Direc- ción: Cantón Belén  Güijat,  Caserío El Desagüe, entre estación del tren y La Parroquia El desagüé. Días y horas  de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow294 = new google.maps.InfoWindow({ content: contentString294 }); 
    //markers 
    var marker294 = new google.maps.Marker({ position: point294, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "294.UN MILAGRO EN EL DESAGÜE." }); 
    //information for 
    function goToLink294() { infowindow294.open(map,marker294); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker294, 'click', goToLink294); google.maps.event.addDomListener(window, 'load', initialize);
    //MARCADOR 295 
    //positions 
    var point295 = new google.maps.LatLng(14.242276, -89.480154); var contentString295 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UN  MILAGRO EN HACIENDA SAN  FRANCISCO.</h1>'+ '<div id="bodyContent">'+ '<p><b>UN  MILAGRO EN HACIENDA SAN  FRANCISCO.</b> , — 10 de  Julio de  2014.  Dirección:  Cantón Belén Güijat, Metapán. Días y horas  de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow295 = new google.maps.InfoWindow({ content: contentString295 }); 
    //markers 
    var marker295 = new google.maps.Marker({ position: point295, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "295.UN  MILAGRO EN HACIENDA SAN  FRANCISCO." }); 
    //information for 
    function goToLink295() { infowindow295.open(map,marker295); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker295, 'click', goToLink295); google.maps.event.addDomListener(window, 'load', initialize);
    //MARCADOR 296 
    //positions 
    var point296 = new google.maps.LatLng(14.315782, -89.432926); var contentString296 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UN MILAGRO EN HACIENDA VIEJA.</h1>'+ '<div id="bodyContent">'+ '<p><b>UN MILAGRO EN HACIENDA VIEJA.</b> , — 03 de  Octubre de  1982. Dirección:  Cantón Capulín  Caserío Hacienda Vieja, Carretera Me- tapán-Citalá. Días y horas  de  reuniones: Martes  y Jueves de  5:00 a 6:30  p.m.  y Domingo de  3:00  a 5:00  p.m. </p>'+ '</div>'+ '</div>'; var infowindow296 = new google.maps.InfoWindow({ content: contentString296 }); 
    //markers 
    var marker296 = new google.maps.Marker({ position: point296, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "296.UN MILAGRO EN HACIENDA VIEJA." }); 
    //information for 
    function goToLink296() { infowindow296.open(map,marker296); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker296, 'click', goToLink296); google.maps.event.addDomListener(window, 'load', initialize);
    //MARCADOR 297 
    //positions 
    var point297 = new google.maps.LatLng(14.330680, -89.449381); var contentString297 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UN  REGALO DE DIOS.</h1>'+ '<div id="bodyContent">'+ '<p><b>UN  REGALO DE DIOS.</b> , — 12 de  Septiembre de  1998.  Dirección: Urbanización Las Américas  Nº 1 polígono G No 9-A Pasaje  México. Días y horas  de reuniones: De Lunes a Domingo de 6:30 a 8:30 p.m. </p>'+ '</div>'+ '</div>'; var infowindow297 = new google.maps.InfoWindow({ content: contentString297 }); 
    //markers 
    var marker297 = new google.maps.Marker({ position: point297, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "297.UN  REGALO DE DIOS." }); 
    //information for 
    function goToLink297() { infowindow297.open(map,marker297); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker297, 'click', goToLink297); google.maps.event.addDomListener(window, 'load', initialize);
    //MARCADOR 298 
    //positions 
    var point298 = new google.maps.LatLng(14.333435, -89.441830); var contentString298 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UNA LUZ EN EL SITIO.</h1>'+ '<div id="bodyContent">'+ '<p><b>UNA LUZ EN EL SITIO.</b> , —  10 de  Junio  de  1994.  Dirección:  Cantón Las Piedras  Caserío El Sitio, Carretera internacional a Metapán. Días y horas  de  reuniones: De  Lunes  a  Domingo de  4:00  a  6:00  p.m. </p>'+ '</div>'+ '</div>'; var infowindow298 = new google.maps.InfoWindow({ content: contentString298 }); 
    //markers 
    var marker298 = new google.maps.Marker({ position: point298, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "298.UNA LUZ EN EL SITIO." }); 
    //information for 
    function goToLink298() { infowindow298.open(map,marker298); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker298, 'click', goToLink298); google.maps.event.addDomListener(window, 'load', initialize);
    //MARCADOR 299 
    //positions 
    var point299 = new google.maps.LatLng(14.338492, -89.447047); var contentString299 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UNA LUZ EN LA ISLA.</h1>'+ '<div id="bodyContent">'+ '<p><b>UNA LUZ EN LA ISLA.</b> , — 21 de Julio de 1984. Dirección: Cantón La Isla, Metapán. Días y horas  de  reuniones: De Lunes a Domingo de 4:00 a 6:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow299 = new google.maps.InfoWindow({ content: contentString299 }); 
    //markers 
    var marker299 = new google.maps.Marker({ position: point299, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "299.UNA LUZ EN LA ISLA." }); 
    //information for 
    function goToLink299() { infowindow299.open(map,marker299); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker299, 'click', goToLink299); google.maps.event.addDomListener(window, 'load', initialize);




    //MARCADOR 300 
    //positions 
    var point300 = new google.maps.LatLng(14.197005, -89.581254); var contentString300 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">PAJONALEÑO.</h1>'+ '<div id="bodyContent">'+ '<p><b>PAJONALEÑO.</b> , — 29 de Julio de 1971.  Dirección:  Barrio El Centro, San Antonio  Pajonal.  Días y horas  de reuniones: De Lunes a Domingo de 7:00 a 9:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow300 = new google.maps.InfoWindow({ content: contentString300 }); 
    //markers 
    var marker300 = new google.maps.Marker({ position: point300, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "300.PAJONALEÑO." }); 
    //information for 
    function goToLink300() { infowindow300.open(map,marker300); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker300, 'click', goToLink300); google.maps.event.addDomListener(window, 'load', initialize);





    //MARCADOR 301 
    //positions 
    var point301 = new google.maps.LatLng(13.997784, -89.553575); var contentString301 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">07 DE MARZO.</h1>'+ '<div id="bodyContent">'+ '<p><b>07 DE MARZO.</b> , — 07 de Marzo de 1963. Dirección: 7ª Avenida Nor- te entre 10ª y 12ª Calle Oriente. Días y horas  de  reuniones: Martes, Jueves y Domingo de 7:00 a 9:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow301 = new google.maps.InfoWindow({ content: contentString301 }); 
    //markers 
    var marker301 = new google.maps.Marker({ position: point301, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "301.07 DE MARZO." }); 
    //information for 
    function goToLink301() { infowindow301.open(map,marker301); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker301, 'click', goToLink301); google.maps.event.addDomListener(window, 'load', initialize);
    //MARCADOR 302 
    //positions 
    var point302 = new google.maps.LatLng(13.991101, -89.564431); var contentString302 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">27  DE FEBRERO.</h1>'+ '<div id="bodyContent">'+ '<p><b>27  DE FEBRERO.</b> , — 27  de  Febrero de  1966.  Dirección:  Avenida Moraga 13 Calle y Avenida  Fray Felipe  de Jesús Moraga Sur, frente a Súper  Selectos Colón.  Días y horas  de  reuniones: De Lunes a Domingo  de 7:00 a 9:00 p.m.</p>'+ '</div>'+ '</div>'; var infowindow302 = new google.maps.InfoWindow({ content: contentString302 }); 
    //markers 
    var marker302 = new google.maps.Marker({ position: point302, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "302.27  DE FEBRERO." }); 
    //information for 
    function goToLink302() { infowindow302.open(map,marker302); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker302, 'click', goToLink302); google.maps.event.addDomListener(window, 'load', initialize);
    //MARCADOR 303 
    //positions 
    var point303 = new google.maps.LatLng(13.997185, -89.559803); var contentString303 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">A.A. LLEGA A SU MAYOR EDAD.</h1>'+ '<div id="bodyContent">'+ '<p><b>A.A. LLEGA A SU MAYOR EDAD.</b> , — 26 de  Octubre de  1978.  Di- rección:  8ª Avenida  Norte  6/8  Calle Poniente Nº 2, Santa  Ana. Días y horas  de  reuniones: De  Lunes  a Sábado de  6:30  a 8:00  p.m.  y Domingo de 10:00 a 11:30 a.m.</p>'+ '</div>'+ '</div>'; var infowindow303 = new google.maps.InfoWindow({ content: contentString303 }); 
    //markers 
    var marker303 = new google.maps.Marker({ position: point303, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "303.A.A. LLEGA A SU MAYOR EDAD." }); 
    //information for 
    function goToLink303() { infowindow303.open(map,marker303); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker303, 'click', goToLink303); google.maps.event.addDomListener(window, 'load', initialize);
    //MARCADOR 304 
    //positions 
    var point304 = new google.maps.LatLng(13.921700, -89.554542); var contentString304 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">EL MILAGRO  DE DIOS.</h1>'+ '<div id="bodyContent">'+ '<p><b>EL MILAGRO  DE DIOS.</b> , — 22 de  Febrero de  1996.  Dirección:  Cantón San Juan  Buena  Vista Colonia  Las Colinas  Polígono 18 Casa  Nº 6. Días y horas  de  reuniones: De Lunes a Domingo de  6:30 a 8:30 p.m. </p>'+ '</div>'+ '</div>'; var infowindow304 = new google.maps.InfoWindow({ content: contentString304 }); 
    //markers 
    var marker304 = new google.maps.Marker({ position: point304, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "304.EL MILAGRO  DE DIOS." }); 
    //information for 
    function goToLink304() { infowindow304.open(map,marker304); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker304, 'click', goToLink304); google.maps.event.addDomListener(window, 'load', initialize);
    //MARCADOR 305 
    //positions 
    var point305 = new google.maps.LatLng(14.010577, -89.560728); var contentString305 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">EL MORA 17 DE OCTUBRE.</h1>'+ '<div id="bodyContent">'+ '<p><b>EL MORA 17 DE OCTUBRE.</b> , — 17 de  Octubre de  1976.  Dirección: Avenida  Molino de  arroz Colonia  Mora.  Días y horas  de  reuniones: De  Lunes  a Domingo de  6:30  a 8:30  p.m.  </p>'+ '</div>'+ '</div>'; var infowindow305 = new google.maps.InfoWindow({ content: contentString305 }); 
    //markers 
    var marker305 = new google.maps.Marker({ position: point305, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "305.EL MORA 17 DE OCTUBRE." }); 
    //information for 
    function goToLink305() { infowindow305.open(map,marker305); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker305, 'click', goToLink305); google.maps.event.addDomListener(window, 'load', initialize);
    //MARCADOR 306 
    //positions 
    var point306 = new google.maps.LatLng(13.989764, -89.566316); var contentString306 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">EL PODER DE LA 5ª  TRADICIÓN.</h1>'+ '<div id="bodyContent">'+ '<p><b>EL PODER DE LA 5ª  TRADICIÓN.</b> , — 28 de  Julio  de  1991.  Direc- ción: 15 Calle Poniente entre 18 y 20 Avenida  Sur Nº 6 Colonia  Ma- gaña Santa Ana. Días y horas  de reuniones: De Lunes a Domingo de 6:30 a 8:30 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow306 = new google.maps.InfoWindow({ content: contentString306 }); 
    //markers 
    var marker306 = new google.maps.Marker({ position: point306, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "306.EL PODER DE LA 5ª  TRADICIÓN." }); 
    //information for 
    function goToLink306() { infowindow306.open(map,marker306); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker306, 'click', goToLink306); google.maps.event.addDomListener(window, 'load', initialize);
    //MARCADOR 307 
    //positions 
    var point307 = new google.maps.LatLng(13.966867, -89.577494); var contentString307 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">ESPAÑA  24  DE MAYO.</h1>'+ '<div id="bodyContent">'+ '<p><b>ESPAÑA  24  DE MAYO.</b> , — 24 de  Mayo  de  1987.  Dirección:  Final 30 Avenida  Sur entre 47 y 49 Calle Poniente Colonia  España. Días y horas de reuniones: De Lunes a Domingo de 7:00 a 9:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow307 = new google.maps.InfoWindow({ content: contentString307 }); 
    //markers 
    var marker307 = new google.maps.Marker({ position: point307, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "307.ESPAÑA  24  DE MAYO." }); 
    //information for
     function goToLink307() { infowindow307.open(map,marker307); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker307, 'click', goToLink307); google.maps.event.addDomListener(window, 'load', initialize);
    //MARCADOR 308 
    //positions 
    var point308 = new google.maps.LatLng(14.001508, -89.547903); var contentString308 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">ESPERANZA 23  DE JUNIO (INSTITUCIONAL).</h1>'+ '<div id="bodyContent">'+ '<p><b>ESPERANZA 23  DE JUNIO (INSTITUCIONAL).</b> , — 23 de  Junio  de 2012. Dirección: Centro Penal de Apanteos Recinto No 11. Carretera salida a Metapán. Reuniones de 1:30 a 3:30 p.m. </p>'+ '</div>'+ '</div>'; var infowindow308 = new google.maps.InfoWindow({ content: contentString308 }); 
    //markers 
    var marker308 = new google.maps.Marker({ position: point308, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "308.ESPERANZA 23  DE JUNIO (INSTITUCIONAL)." }); 
    //information for 
    function goToLink308() { infowindow308.open(map,marker308); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker308, 'click', goToLink308); google.maps.event.addDomListener(window, 'load', initialize);
    //MARCADOR 309 
    //positions 
    var point309 = new google.maps.LatLng(13.995561, -89.478657); var contentString309 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">LA NUEVA ESPERANZA LOS RIVAS.</h1>'+ '<div id="bodyContent">'+ '<p><b>LA NUEVA ESPERANZA LOS RIVAS.</b> , — 17 de  Febrero de  1974. Dirección:  Cantón Nancintepeque  Caserío Los Rivas. Días y horas de  reuniones: Martes, Jueves y Sábado de  3:00 a 5:00 p.m.,</p>'+ '</div>'+ '</div>'; var infowindow309 = new google.maps.InfoWindow({ content: contentString309 }); 
    //markers 
    var marker309 = new google.maps.Marker({ position: point309, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "309.LA NUEVA ESPERANZA LOS RIVAS." }); 
    //information for 
    function goToLink309() { infowindow309.open(map,marker309); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker309, 'click', goToLink309); google.maps.event.addDomListener(window, 'load', initialize);
    //MARCADOR 310 
    //positions 
    var point310 = new google.maps.LatLng(13.989180, -89.557046); var contentString310 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">LA SALIDA.</h1>'+ '<div id="bodyContent">'+ '<p><b>LA SALIDA.</b> , — 09  de  Abril de  2011.  Dirección:  11  Calle  Oriente entre Avenida  Independencia y 3ª Avenida  Sur. Días y horas  de reu- niones: De Lunes a Sábado de 6:00 a 8:00 p.m.  y Domingo de 4:00 a 6:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow310 = new google.maps.InfoWindow({ content: contentString310 }); 
    //markers 
    var marker310 = new google.maps.Marker({ position: point310, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "310.LA SALIDA." }); 
    //information for
     function goToLink310() { infowindow310.open(map,marker310); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker310, 'click', goToLink310); google.maps.event.addDomListener(window, 'load', initialize);
    //MARCADOR 311 
    //positions 
    var point311 = new google.maps.LatLng(14.002142, -89.558536); var contentString311 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">LIBERACIÓN 2012.</h1>'+ '<div id="bodyContent">'+ '<p><b>LIBERACIÓN 2012.</b> , — 14 de  Febrero de  2012.  Dirección:  6ª Avenida Norte  y 16 Calle Poniente Casa Nº 2-A, Reparto IVU Los 44 frente a Iglesia Virgen de Guadalupe. Días y horas  de reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow311 = new google.maps.InfoWindow({ content: contentString311 }); 
    //markers 
    var marker311 = new google.maps.Marker({ position: point311, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "311.LIBERACIÓN 2012." }); 
    //information for 
    function goToLink311() { infowindow311.open(map,marker311); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker311, 'click', goToLink311); google.maps.event.addDomListener(window, 'load', initialize);
    //MARCADOR 312 
    //positions 
    var point312 = new google.maps.LatLng(14.003700, -89.559726); var contentString312 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">LOS AMIGOS.</h1>'+ '<div id="bodyContent">'+ '<p><b>LOS AMIGOS.</b> , — 10 de  Agosto de  1982.  Dirección:  Sector  La Flo- resta  Colonia  IVU Santa  Ana. Días y horas  de  reuniones: Martes  y Viernes de 8:00 a 10:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow312 = new google.maps.InfoWindow({ content: contentString312 }); 
    //markers 
    var marker312 = new google.maps.Marker({ position: point312, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "312.LOS AMIGOS." }); 
    //information for 
    function goToLink312() { infowindow312.open(map,marker312); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker312, 'click', goToLink312); google.maps.event.addDomListener(window, 'load', initialize);
    //MARCADOR 313 
    //positions 
    var point313 = new google.maps.LatLng(13.999901, -89.558563); var contentString313 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">LUIS MARIO.</h1>'+ '<div id="bodyContent">'+ '<p><b>LUIS MARIO.</b> , — 11 de  Abril de  1965.  Dirección:  6ª Avenida  Norte Nº 71 y Pasaje  5 Poniente Colonia  IVU Santa  Ana. Días y horas  de reuniones: Lunes, Miércoles  y Viernes de 7:00 a 9:00 p.m.</p>'+ '</div>'+ '</div>'; var infowindow313 = new google.maps.InfoWindow({ content: contentString313 }); 
    //markers 
    var marker313 = new google.maps.Marker({ position: point313, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "313.LUIS MARIO." }); 
    //information for
     function goToLink313() { infowindow313.open(map,marker313); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker313, 'click', goToLink313); google.maps.event.addDomListener(window, 'load', initialize);
    //MARCADOR 314 
    //positions 
    var point314 = new google.maps.LatLng(13.999063, -89.549635); var contentString314 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NACIMIENTO 27 DE MARZO.</h1>'+ '<div id="bodyContent">'+ '<p><b>NACIMIENTO 27 DE MARZO.</b> , — 27 de Marzo de 1983.  Dirección: Avenida  Brasil Poniente No 99 entre Calle Bolivia y Calle Colombia, Colonia  Los Pinos. Días y horas  de  reuniones: De Lunes a Domingo de 6:30 a 8:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow314 = new google.maps.InfoWindow({ content: contentString314 }); 
    //markers 
    var marker314 = new google.maps.Marker({ position: point314, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "314.NACIMIENTO 27 DE MARZO." }); 
    //information for 
    function goToLink314() { infowindow314.open(map,marker314); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker314, 'click', goToLink314); google.maps.event.addDomListener(window, 'load', initialize);
    //MARCADOR 315 
    //positions 
    var point315 = new google.maps.LatLng(13.954958, -89.534839); var contentString315 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NUEVA VIDA 15  DE AGOSTO.</h1>'+ '<div id="bodyContent">'+ '<p><b>NUEVA VIDA 15  DE AGOSTO.</b> , — 15 de  Agosto de  1984.  Direc- ción: A 2 Km. de Ceiba  Preñada, 3 Cuadras Abajo de Escuela Rafael Paz Fuentes Cantón Primavera, Caserío Primavera. Días y horas  de reuniones: Martes  y Jueves de  7:00 a 8:30 p.m. </p>'+ '</div>'+ '</div>'; var infowindow315 = new google.maps.InfoWindow({ content: contentString315 }); 
    //markers 
    var marker315 = new google.maps.Marker({ position: point315, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "315.NUEVA VIDA 15  DE AGOSTO." }); 
    //information for 
    function goToLink315() { infowindow315.open(map,marker315); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker315, 'click', goToLink315); google.maps.event.addDomListener(window, 'load', initialize);
    //MARCADOR 316 
    //positions 
    var point316 = new google.maps.LatLng(14.001915, -89.520987); var contentString316 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NUEVA VIDA 25 DE JULIO.</h1>'+ '<div id="bodyContent">'+ '<p><b>NUEVA VIDA 25 DE JULIO.</b> , — 25 de Julio de 1979. Dirección: Can- tón  El Portezuelo, Colonia  Panades Nº 12. Días y horas  de  reunio- nes: De Lunes a Domingo de 6:30 a 8:30 p.m. </p>'+ '</div>'+ '</div>'; var infowindow316 = new google.maps.InfoWindow({ content: contentString316 }); 
    //markers
     var marker316 = new google.maps.Marker({ position: point316, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "316.NUEVA VIDA 25 DE JULIO." }); 
     //information for 
     function goToLink316() { infowindow316.open(map,marker316); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker316, 'click', goToLink316); google.maps.event.addDomListener(window, 'load', initialize);
    //MARCADOR 317 
    //positions 
    var point317 = new google.maps.LatLng(14.003290, -89.517554); var contentString317 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NUEVO COPINOLITO 11  DE SEPTIEMBRE.</h1>'+ '<div id="bodyContent">'+ '<p><b>NUEVO COPINOLITO 11  DE SEPTIEMBRE.</b> , — 11 de  Septiembre de  1989.  Dirección:  Calle Principal, Caserío Copinolito, Cantón Pri- mavera, Colonia  Los Olivos contiguo a Iglesia Católica. Días y horas de  reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m.</p>'+ '</div>'+ '</div>'; var infowindow317 = new google.maps.InfoWindow({ content: contentString317 }); 
    //markers 
    var marker317 = new google.maps.Marker({ position: point317, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "317.NUEVO COPINOLITO 11  DE SEPTIEMBRE." }); 
    //information for 
    function goToLink317() { infowindow317.open(map,marker317); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker317, 'click', goToLink317); google.maps.event.addDomListener(window, 'load', initialize);
    //MARCADOR 318 
    //positions 
    var point318 = new google.maps.LatLng(14.012144, -89.563425); var contentString318 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NUEVO  RENACER 22  DE  DICIEMBRE.</h1>'+ '<div id="bodyContent">'+ '<p><b>NUEVO  RENACER 22  DE  DICIEMBRE.</b> , —  22  de  Diciembre de 1978.  Dirección:  Carretera Antigua  a San Salvador  Km. 62 ½ a 950 metros de  ASAPROSAR. Colonia  El Mora Cantón Primavera. Días y horas de reuniones: De Lunes a Domingo de 6:30 a 8:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow318 = new google.maps.InfoWindow({ content: contentString318 }); 
    //markers 
    var marker318 = new google.maps.Marker({ position: point318, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "318.NUEVO  RENACER 22  DE  DICIEMBRE." }); 
    //information for 
    function goToLink318() { infowindow318.open(map,marker318); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker318, 'click', goToLink318); google.maps.event.addDomListener(window, 'load', initialize);
    //MARCADOR 319 
    //positions 
    var point319 = new google.maps.LatLng(13.950604, -89.533250); var contentString319 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NUEVO RENACER 04 DE JULIO.</h1>'+ '<div id="bodyContent">'+ '<p><b>NUEVO RENACER 04 DE JULIO.</b> , — 04 de Julio de 1999. Dirección: Colonia  Santo  Tomás,  Cantón Primavera. Días y horas  de reuniones: De Lunes a Domingo de  6:30 a 8:30 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow319 = new google.maps.InfoWindow({ content: contentString319 }); 
    //markers 
    var marker319 = new google.maps.Marker({ position: point319, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "319.NUEVO RENACER 04 DE JULIO." });
     //information for
      function goToLink319() { infowindow319.open(map,marker319); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker319, 'click', goToLink319); google.maps.event.addDomListener(window, 'load', initialize);
    //MARCADOR 320 
    //positions 
    var point320 = new google.maps.LatLng(13.955364, -89.534122); var contentString320 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">PERSEVERANCIA 10  DE JUNIO.</h1>'+ '<div id="bodyContent">'+ '<p><b>PERSEVERANCIA 10  DE JUNIO.</b> , — 10 de  Junio  de  1986.  Direc- ción:  Colonia  Lomas  del  Tecana, Block H Nº  4 atrás  de  Terminal de  buses Ruta Nº 6 Cantón Natividad. Días y horas  de  reuniones: De Lunes a Domingo de  6:30 a 8:30 p.m.</p>'+ '</div>'+ '</div>'; var infowindow320 = new google.maps.InfoWindow({ content: contentString320 }); 
    //markers 
    var marker320 = new google.maps.Marker({ position: point320, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "320.PERSEVERANCIA 10  DE JUNIO." }); 
    //information for 
    function goToLink320() { infowindow320.open(map,marker320); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker320, 'click', goToLink320); google.maps.event.addDomListener(window, 'load', initialize);
    //MARCADOR 321 
    //positions 
    var point321 = new google.maps.LatLng(13.969192, -89.543797); var contentString321 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">REDENCIÓN  Y ESPERANZA (INSTITUCIONAL).</h1>'+ '<div id="bodyContent">'+ '<p><b>REDENCIÓN  Y ESPERANZA (INSTITUCIONAL).</b> , — 03  de  Sep- tiembre de 1968.  Dirección:  Centro Penal de Occidente. Reuniones Sábado de 4:00 a 5:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow321 = new google.maps.InfoWindow({ content: contentString321 }); 
    //markers 
    var marker321 = new google.maps.Marker({ position: point321, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "321.REDENCIÓN  Y ESPERANZA (INSTITUCIONAL)." }); 
    //information for 
    function goToLink321() { infowindow321.open(map,marker321); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker321, 'click', goToLink321); google.maps.event.addDomListener(window, 'load', initialize);
    //MARCADOR 322 
    //positions 
    var point322 = new google.maps.LatLng(13.969017, -89.542570); var contentString322 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">RENACER 2000.</h1>'+ '<div id="bodyContent">'+ '<p><b>RENACER 2000.</b> , — 11 de Marzo de 2000. Dirección:  Cantón Prima- vera Caserío Primaverita  Nº 2 Sector  Nº 6. Días y horas  de  reunio- nes: De Lunes a Domingo de 6:00 a 8:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow322 = new google.maps.InfoWindow({ content: contentString322 }); 
    //markers 
    var marker322 = new google.maps.Marker({ position: point322, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "322.RENACER 2000." }); 
    //information for 
    function goToLink322() { infowindow322.open(map,marker322); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker322, 'click', goToLink322); google.maps.event.addDomListener(window, 'load', initialize);
    //MARCADOR 323 
    //positions 
    var point323 = new google.maps.LatLng(14.029606, -89.537447); var contentString323 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">RÍO ZARCO 28  DE MAYO.</h1>'+ '<div id="bodyContent">'+ '<p><b>RÍO ZARCO 28  DE MAYO.</b> , — 28 de  Mayo de  1985.  Dirección:  1a Etapa  grupo 16, acceso Nº 1, Rio Zarco. Días y horas  de  reuniones: De  Lunes  a Domingo de  7:00  a 9:00  p.m.  </p>'+ '</div>'+ '</div>'; var infowindow323 = new google.maps.InfoWindow({ content: contentString323 }); 
    //markers 
    var marker323 = new google.maps.Marker({ position: point323, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "323.RÍO ZARCO 28  DE MAYO." }); 
    //information for 
    function goToLink323() { infowindow323.open(map,marker323); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker323, 'click', goToLink323); google.maps.event.addDomListener(window, 'load', initialize);
    //MARCADOR 324 
    //positions 
    var point324 = new google.maps.LatLng(14.001976, -89.469277); var contentString324 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">SALVACIÓN  12  DE  MAYO.</h1>'+ '<div id="bodyContent">'+ '<p><b>SALVACIÓN  12  DE  MAYO.</b> , —  12  de  Mayo  de  1979.  Dirección: Cantón Nancintepeque Caserío Los Ayala. Días y horas  de  reunio- nes: De Lunes a Domingo de 6:00 a 8:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow324 = new google.maps.InfoWindow({ content: contentString324 }); 
    //markers 
    var marker324 = new google.maps.Marker({ position: point324, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "324.SALVACIÓN  12  DE  MAYO." }); 
    //information for 
    function goToLink324() { infowindow324.open(map,marker324); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker324, 'click', goToLink324); google.maps.event.addDomListener(window, 'load', initialize);
    //MARCADOR 325 
    //positions 
    var point325 = new google.maps.LatLng(13.987918, -89.548637); var contentString325 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">SAN  RAFAEL.</h1>'+ '<div id="bodyContent">'+ '<p><b>SAN  RAFAEL.</b> , — 17  de  Septiembre de  1965.  Dirección:  9ª  Calle Oriente entre 21  y 23  Avenida  Sur Barrio  San  Rafael,  Santa  Ana. Días y horas  de reuniones: De Lunes a Domingo de 7:00 a 9:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow325 = new google.maps.InfoWindow({ content: contentString325 }); 
    //markers 
    var marker325 = new google.maps.Marker({ position: point325, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "325.SAN  RAFAEL." }); 
    //information for 
    function goToLink325() { infowindow325.open(map,marker325); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker325, 'click', goToLink325); google.maps.event.addDomListener(window, 'load', initialize);
    //MARCADOR 326 
    //positions 
    var point326 = new google.maps.LatLng(13.996420, -89.550118); var contentString326 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">SANTANECO.</h1>'+ '<div id="bodyContent">'+ '<p><b>SANTANECO.</b> , — 02 de Junio  de 1959.  Dirección:  10ª Calle Oriente entre Avenida  Independencia y 1ª Avenida  Norte, mesón pinalito, Barrio San Lorenzo. Días y horas  de reuniones: De Lunes a Domingo de 7:00 a 9:00 p.m. y Domingo de 10:00 a:m a 1:00 p.m.</p>'+ '</div>'+ '</div>'; var infowindow326 = new google.maps.InfoWindow({ content: contentString326 }); 
    //markers 
    var marker326 = new google.maps.Marker({ position: point326, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "326.SANTANECO." }); 
    //information for 
    function goToLink326() { infowindow326.open(map,marker326); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker326, 'click', goToLink326); google.maps.event.addDomListener(window, 'load', initialize);
    //MARCADOR 327 
    //positions 
    var point327 = new google.maps.LatLng(14.001728, -89.547943); var contentString327 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">SOLO POR HOY (INSTITUCIONAL).</h1>'+ '<div id="bodyContent">'+ '<p><b>SOLO POR HOY (INSTITUCIONAL).</b> , — 17 de  Agosto de  2011.  Di- rección:  Centro Penal  de  Apanteos Recinto  Nº 9, Carretera salida  a Metapán. Días y horas  de reuniones: De 1:30 a 3:30 p.m.</p>'+ '</div>'+ '</div>'; var infowindow327 = new google.maps.InfoWindow({ content: contentString327 }); 
    //markers 
    var marker327 = new google.maps.Marker({ position: point327, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "327.SOLO POR HOY (INSTITUCIONAL)." }); 
    //information for 
    function goToLink327() { infowindow327.open(map,marker327); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker327, 'click', goToLink327); google.maps.event.addDomListener(window, 'load', initialize);
    //MARCADOR 328 
    //positions 
    var point328 = new google.maps.LatLng(13.996043, -89.556901); var contentString328 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UNIVERSAL CENTRAL.</h1>'+ '<div id="bodyContent">'+ '<p><b>UNIVERSAL CENTRAL.</b> , — 21  de  Diciembre de  2013.  Dirección: Avenida  Independencia 2 Cuadras al Norte  de  La Alcaldía.  Días y horas  de  reuniones: De  Lunes  a Domingo de  10:00  a 12:00  p.m. </p>'+ '</div>'+ '</div>'; var infowindow328 = new google.maps.InfoWindow({ content: contentString328 }); 
    //markers 
    var marker328 = new google.maps.Marker({ position: point328, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "328.UNIVERSAL CENTRAL." }); 
    //information for 
    function goToLink328() { infowindow328.open(map,marker328); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker328, 'click', goToLink328); google.maps.event.addDomListener(window, 'load', initialize);





    //MARCADOR 329 
    //positions 
    var point329 = new google.maps.LatLng(14.205945, -89.350967); var contentString329 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">EL MILAGRO.</h1>'+ '<div id="bodyContent">'+ '<p><b>EL MILAGRO.</b> , —  17 de  Mayo de  1975.  Dirección:  Barrio El Centro, Santa  Rosa Guachipilín.  Días y horas  de  reuniones: De Lunes a Do- mingo  de 5:00 a 7:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow329 = new google.maps.InfoWindow({ content: contentString329 }); 
    //markers 
    var marker329 = new google.maps.Marker({ position: point329, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "329.EL MILAGRO." }); 
    //information for 
    function goToLink329() { infowindow329.open(map,marker329); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker329, 'click', goToLink329); google.maps.event.addDomListener(window, 'load', initialize);
    //MARCADOR 330 
    //positions 
    var point330 = new google.maps.LatLng(14.201984, -89.367454); var contentString330 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">LA NUEVA ESPERANZA.</h1>'+ '<div id="bodyContent">'+ '<p><b>LA NUEVA ESPERANZA.</b> , — 17 de  Mayo de  1975.  Dirección:  Can- tón El Despoblado, Santa  Rosa Guachipilín.  Días y horas  de  reunio- nes: De Lunes a Domingo de 5:00 a 7:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow330 = new google.maps.InfoWindow({ content: contentString330 }); 
    //markers 
    var marker330 = new google.maps.Marker({ position: point330, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "330.LA NUEVA ESPERANZA." }); 
    //information for 
    function goToLink330() { infowindow330.open(map,marker330); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker330, 'click', goToLink330); google.maps.event.addDomListener(window, 'load', initialize);







    //MARCADOR 331 
    //positions 
    var point331 = new google.maps.LatLng(14.182623, -89.607925); var contentString331 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">DIOS PRIMERO.</h1>'+ '<div id="bodyContent">'+ '<p><b>DIOS PRIMERO.</b> , — 19 de  Noviembre de  1973.  Dirección:  Barrio El Centro Costado Norte  de  Iglesia  Católica. Días y horas  de  reunio- nes: De Lunes a Domingo de 7:00 a 9:00 p.m.</p>'+ '</div>'+ '</div>'; var infowindow331 = new google.maps.InfoWindow({ content: contentString331 }); 
    //markers 
    var marker331 = new google.maps.Marker({ position: point331, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "331.DIOS PRIMERO." }); 
    //information for 
    function goToLink331() { infowindow331.open(map,marker331); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker331, 'click', goToLink331); google.maps.event.addDomListener(window, 'load', initialize);
    //MARCADOR 332 
    //positions 
    var point332 = new google.maps.LatLng(14.183403, -89.605823); var contentString332 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">MISTERIO DE DIOS.</h1>'+ '<div id="bodyContent">'+ '<p><b>MISTERIO DE DIOS.</b> , — 01 de  Enero  de  1990.  Dirección:  Santiago de  La Frontera, ½ Cuadra de  La Caja  de  crédito. Días y horas  de reuniones: De Lunes a Domingo de 6:30 a 8:30 p.m. </p>'+ '</div>'+ '</div>'; var infowindow332 = new google.maps.InfoWindow({ content: contentString332 }); 
    //markers 
    var marker332 = new google.maps.Marker({ position: point332, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "332.MISTERIO DE DIOS." }); 
    //information for 
    function goToLink332() { infowindow332.open(map,marker332); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker332, 'click', goToLink332); google.maps.event.addDomListener(window, 'load', initialize);




    //MARCADOR 333 
    //positions 
    var point333 = new google.maps.LatLng(14.123426, -89.496618); var contentString333 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">26 DE FEBRERO.</h1>'+ '<div id="bodyContent">'+ '<p><b>26 DE FEBRERO.</b> , — 26 de Febrero de 2005. Dirección: Avenida Be- lén Sur Calle Principal de  Texistepeque. Días y horas  de  reuniones: De  Lunes  a Domingo de  6:00  a 8:00  p.m.  </p>'+ '</div>'+ '</div>'; var infowindow333 = new google.maps.InfoWindow({ content: contentString333 }); 
    //markers 
    var marker333 = new google.maps.Marker({ position: point333, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "333.26 DE FEBRERO." }); 
    //information for 
    function goToLink333() { infowindow333.open(map,marker333); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker333, 'click', goToLink333); google.maps.event.addDomListener(window, 'load', initialize);
    //MARCADOR 334 
    //positions 
    var point334 = new google.maps.LatLng(14.126581, -89.494028); var contentString334 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">LA BUENA NUEVA.</h1>'+ '<div id="bodyContent">'+ '<p><b>LA BUENA NUEVA.</b> , — 24 de  Julio de  1971.  Dirección:  Calle Prin- cipal  Texistepeque,  Cantón El Paraíso.  Días y horas  de  reuniones: De  Lunes  a Domingo de  5:00  a 7:00  p.m.  </p>'+ '</div>'+ '</div>'; var infowindow334 = new google.maps.InfoWindow({ content: contentString334 }); 
    //markers 
    var marker334 = new google.maps.Marker({ position: point334, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "334.LA BUENA NUEVA." }); 
    //information for 
    function goToLink334() { infowindow334.open(map,marker334); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker334, 'click', goToLink334); google.maps.event.addDomListener(window, 'load', initialize);
    //MARCADOR 335 
    //positions 
    var point335 = new google.maps.LatLng(14.128796, -89.496094); var contentString335 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">LOS CERRITOS.</h1>'+ '<div id="bodyContent">'+ '<p><b>LOS CERRITOS.</b> , — 21 de  Septiembre de  2013.  Dirección:  Cantón Costa  Rica Caserío Los Cerritos, Texistepeque, Días y horas  de  reu- niones: De Lunes a Domingo de 5:00 a 7:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow335 = new google.maps.InfoWindow({ content: contentString335 }); 
    //markers
     var marker335 = new google.maps.Marker({ position: point335, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "335.LOS CERRITOS." }); 
     //information for 
     function goToLink335() { infowindow335.open(map,marker335); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker335, 'click', goToLink335); google.maps.event.addDomListener(window, 'load', initialize);
    //MARCADOR 336 
    //positions 
    var point336 = new google.maps.LatLng(14.131465, -89.494344); var contentString336 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">RESURRECCIÓN 10  DE ABRIL.</h1>'+ '<div id="bodyContent">'+ '<p><b>RESURRECCIÓN 10  DE ABRIL.</b> , — 10 de  Abril de  1977.  Dirección: Calle Libertad Poniente ½ Cuadra al Poniente de La Alcaldía, Texis- tepeque. Días y horas  de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow336 = new google.maps.InfoWindow({ content: contentString336 }); 
    //markers 
    var marker336 = new google.maps.Marker({ position: point336, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "336.RESURRECCIÓN 10  DE ABRIL." }); 
    //information for 
    function goToLink336() { infowindow336.open(map,marker336); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker336, 'click', goToLink336); google.maps.event.addDomListener(window, 'load', initialize);
}