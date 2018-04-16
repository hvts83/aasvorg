

function initialize() {


    //Map parametrs
    var mapOptions = {
        zoom: 10,
        center: new google.maps.LatLng(13.425908,-88.4671056),
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

    
    
    //MARCADOR 1211  
    //positions 
    var point1211 = new google.maps.LatLng(13.508111, -88.491341); var contentString1211 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">03  DE MAYO.</h1>'+ '<div id="bodyContent">'+ '<p><b>03  DE MAYO.</b> , — 03 de  Mayo de  1999.  Dirección:  Costado Sur de La Cancha de  fútbol,  Cantón Montañita. Días y horas  de  reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m.  Miembros asistentes: 20 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1211 = new google.maps.InfoWindow({ content: contentString1211 });   
    //markers  
    var marker1211 = new google.maps.Marker({ position: point1211, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1211.03  DE MAYO." }); 
    //information for  
    function goToLink1211() { infowindow1211.open(map,marker1211);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1211, 'click', goToLink1211); google.maps.event.addDomListener(window, 'load', initialize);
    
    //MARCADOR 1212  
    //positions 
    var point1212 = new google.maps.LatLng(13.509028, -88.487939); var contentString1212 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">14  DE JULIO.</h1>'+ '<div id="bodyContent">'+ '<p><b>14  DE JULIO.</b> , — 14  de  Julio  de  1973.  Dirección:  Calle  Principal Alberto  Masferrer.  Días y horas  de  reuniones: De Lunes a Domingo de 7:00 a 9:00 p.m.  Miembros asistentes: 15 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1212 = new google.maps.InfoWindow({ content: contentString1212 });   
    //markers  
    var marker1212 = new google.maps.Marker({ position: point1212, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1212.14  DE JULIO." }); 
    //information for  
    function goToLink1212() { infowindow1212.open(map,marker1212);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1212, 'click', goToLink1212); google.maps.event.addDomListener(window, 'load', initialize);
    
    //MARCADOR 1213  
    //positions 
    var point1213 = new google.maps.LatLng(13.511349, -88.491118); var contentString1213 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">15  DE  AGOSTO.</h1>'+ '<div id="bodyContent">'+ '<p><b>15  DE  AGOSTO.</b> , —  15  de  Agosto de  1971.  Dirección:  Costado Oriente del  Centro Escolar  Cantón Las Casitas.   Días  y horas  de reuniones: De  Lunes  a  Sábado de   5:00  a  7:00  p.m.   Miembros asistentes: 20 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1213 = new google.maps.InfoWindow({ content: contentString1213 });   
    //markers  
    var marker1213 = new google.maps.Marker({ position: point1213, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1213.15  DE  AGOSTO." }); 
    //information for  
    function goToLink1213() { infowindow1213.open(map,marker1213);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1213, 'click', goToLink1213); google.maps.event.addDomListener(window, 'load', initialize);
    
    //MARCADOR 1214  
    //positions 
    var point1214 = new google.maps.LatLng(13.602407, -88.581090); var contentString1214 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NUEVO  RENACER.</h1>'+ '<div id="bodyContent">'+ '<p><b>NUEVO  RENACER.</b> , — 13  de  Abril  de  1991.   Dirección:   Caserío Potrerillo Cantón El Quebracho. Días y horas de reuniones: De Lunes a Sábado de 6:00 a 8:00 p.m.  Miembros asistentes: 6 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1214 = new google.maps.InfoWindow({ content: contentString1214 });  
     //markers  
    var marker1214 = new google.maps.Marker({ position: point1214, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1214.NUEVO  RENACER." }); 
    //information for  
    function goToLink1214() { infowindow1214.open(map,marker1214);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1214, 'click', goToLink1214); google.maps.event.addDomListener(window, 'load', initialize);
    
    //MARCADOR 1215  
    //positions 
    var point1215 = new google.maps.LatLng(13.502899, -88.486183); var contentString1215 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">SAGRADA FAMILIA.</h1>'+ '<div id="bodyContent">'+ '<p><b>SAGRADA FAMILIA.</b> , — 13 de  Febrero de  2002.  Dirección:  Caserío Santo  Tomás,  Cantón La Peña.  Días y horas  de  reuniones: Lunes, Miércoles, Jueves y Sábado de  6:00 a 8:00 p.m.  Miembros asisten- tes: 17 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1215 = new google.maps.InfoWindow({ content: contentString1215 });   
    //markers  
    var marker1215 = new google.maps.Marker({ position: point1215, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1215.SAGRADA FAMILIA." }); 
    //information for  
    function goToLink1215() { infowindow1215.open(map,marker1215);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1215, 'click', goToLink1215); google.maps.event.addDomListener(window, 'load', initialize);
    
    //MARCADOR 1216  
    //positions 
    var point1216 = new google.maps.LatLng(13.514954, -88.484450); var contentString1216 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">SANTISIMA TRINIDAD.</h1>'+ '<div id="bodyContent">'+ '<p><b>SANTISIMA TRINIDAD.</b> , — 10  de  Febrero de  1976.  Dirección:  En El Centro del Cantón Yomo. Días y horas  de  reuniones: De Lunes a Domingo de  6:00  a 8:00  p.m.  Miembros asistentes: 38 Hombres y 2 Mujeres.</p>'+ '</div>'+ '</div>'; var infowindow1216 = new google.maps.InfoWindow({ content: contentString1216 });   
    //markers  
    var marker1216 = new google.maps.Marker({ position: point1216, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1216.SANTISIMA TRINIDAD." }); 
    //information for  
    function goToLink1216() { infowindow1216.open(map,marker1216);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1216, 'click', goToLink1216); google.maps.event.addDomListener(window, 'load', initialize);
    
    //MARCADOR 1217  
    //positions 
    var point1217 = new google.maps.LatLng(13.495891, -88.530017); var contentString1217 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">DESPERTAD.</h1>'+ '<div id="bodyContent">'+ '<p><b>DESPERTAD.</b> , — 10  de  Abril de  1965.  Dirección:  2a    Avenida  Sur Barrio San José. Días y horas  de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.  Miembros asistentes: 20 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1217 = new google.maps.InfoWindow({ content: contentString1217 });   
    //markers  
    var marker1217 = new google.maps.Marker({ position: point1217, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1217.DESPERTAD." }); 
    //information for 
     function goToLink1217() { infowindow1217.open(map,marker1217);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1217, 'click', goToLink1217); google.maps.event.addDomListener(window, 'load', initialize);
    
    //MARCADOR 1218  
    //positions 
    var point1218 = new google.maps.LatLng(13.498455, -88.529865); var contentString1218 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">EL VICTORIOSO.</h1>'+ '<div id="bodyContent">'+ '<p><b>EL VICTORIOSO.</b> , — 01  de  Abril  de  2002.   Dirección:   Cantón El Recreo, costado Sur de La Iglesia Católica. Días y horas de reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m.  Miembros asistentes: 17 Hombres y 1 Mujer.</p>'+ '</div>'+ '</div>'; var infowindow1218 = new google.maps.InfoWindow({ content: contentString1218 });   
    //markers  
    var marker1218 = new google.maps.Marker({ position: point1218, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1218.EL VICTORIOSO." }); 
    //information for  
    function goToLink1218() { infowindow1218.open(map,marker1218);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1218, 'click', goToLink1218); google.maps.event.addDomListener(window, 'load', initialize);
   
    //MARCADOR 1219  
    //positions 
    var point1219 = new google.maps.LatLng(13.496636, -88.532514); var contentString1219 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">LA MANO DE DIOS.</h1>'+ '<div id="bodyContent">'+ '<p><b>LA MANO DE DIOS.</b> , — 24 de Agosto de 1983. Dirección: 3a Avenida Norte  y 4a   Calle  Poniente, N°  2,  Barrio  El Calvario.  Días  y horas de  reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m.  Miembros asistentes: 27 Hombres y 1 Mujer.</p>'+ '</div>'+ '</div>'; var infowindow1219 = new google.maps.InfoWindow({ content: contentString1219 });  
    //markers  
    var marker1219 = new google.maps.Marker({ position: point1219, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1219.LA MANO DE DIOS." }); 
    //information for  
    function goToLink1219() { infowindow1219.open(map,marker1219);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1219, 'click', goToLink1219); google.maps.event.addDomListener(window, 'load', initialize);
    
    //MARCADOR 1220  
    //positions 
    var point1220 = new google.maps.LatLng(13.501216, -88.530840); var contentString1220 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NUEVO CAMINO.</h1>'+ '<div id="bodyContent">'+ '<p><b>NUEVO CAMINO.</b> , — 27 de  Enero  de  2001.  Dirección:  Cantón San Juan,  Loma Alta. Días y horas de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.  Miembros asistentes: 6 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1220 = new google.maps.InfoWindow({ content: contentString1220 });   
    //markers  
    var marker1220 = new google.maps.Marker({ position: point1220, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1220.NUEVO CAMINO." }); 
    //information for  
    function goToLink1220() { infowindow1220.open(map,marker1220);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1220, 'click', goToLink1220); google.maps.event.addDomListener(window, 'load', initialize);
    
    //MARCADOR 1221  
    //positions 
    var point1221 = new google.maps.LatLng(13.494388, -88.532028); var contentString1221 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">SAN JOSÉ</h1>'+ '<div id="bodyContent">'+ '<p><b>SAN JOSÉ</b> , .— 23 de  Agosto de  1962.  Dirección:  6a   Calle  Oriente, 3ª  Avenida  José Simón.  Días  y horas  de  reuniones: De  Lunes  a Domingo de  6:00  a 8:00  p.m.  Miembros asistentes: 20 Hombres y 1 Mujer.</p>'+ '</div>'+ '</div>'; var infowindow1221 = new google.maps.InfoWindow({ content: contentString1221 });   
    //markers  
    var marker1221 = new google.maps.Marker({ position: point1221, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1221.SAN JOSÉ" }); 
    //information for  
    function goToLink1221() { infowindow1221.open(map,marker1221);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1221, 'click', goToLink1221); google.maps.event.addDomListener(window, 'load', initialize);
    
    //MARCADOR 1222 
    //positions 
    var point1222 = new google.maps.LatLng(13.557847, -88.426040); var contentString1222 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">GRUPO A.A.  MILAGRO DE SAN  ANTONIO.</h1>'+ '<div id="bodyContent">'+ '<p><b>GRUPO A.A.  MILAGRO DE SAN  ANTONIO.</b> , —  21  de  Junio  de 1971.  Dirección:  1° calle  oriente salida  a Sesori,  barrio  el calvario. Horario de sesiones: Lunes a Domingo: 6:00 a 8:00 P.M., Número de miembros:  26 Hombres 1 Mujer Total 27.</p>'+ '</div>'+ '</div>'; var infowindow1222 = new google.maps.InfoWindow({ content: contentString1222 });   
    //markers  
    var marker1222 = new google.maps.Marker({ position: point1222, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1222.GRUPO A.A.  MILAGRO DE SAN  ANTONIO." }); 
    //information for  
    function goToLink1222() { infowindow1222.open(map,marker1222);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1222, 'click', goToLink1222); google.maps.event.addDomListener(window, 'load', initialize);
    
    //MARCADOR 1223  
    //positions 
    var point1223 = new google.maps.LatLng(13.563513, -88.422453); var contentString1223 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">GRUPO A.A. DESPERTAR SAN FRANCISCO.</h1>'+ '<div id="bodyContent">'+ '<p><b>GRUPO A.A. DESPERTAR SAN FRANCISCO.</b> , — 2 de  Noviembre de  1982.   Dirección:   Calle  al  cementerio, barrion   San  Francisco. Horario  de  sesiones: Lunes  a Domingo: 6:00  a 8:00  P.M., Número de miembros:  10 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1223 = new google.maps.InfoWindow({ content: contentString1223 });   
    //markers  
    var marker1223 = new google.maps.Marker({ position: point1223, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1223.GRUPO A.A. DESPERTAR SAN FRANCISCO." }); 
    //information for  
    function goToLink1223() { infowindow1223.open(map,marker1223);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1223, 'click', goToLink1223); google.maps.event.addDomListener(window, 'load', initialize);
    
    //MARCADOR 1224  
    //positions 
    var point1224 = new google.maps.LatLng(13.562925, -88.435332); var contentString1224 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">GRUPO A.A.  7 DE ABRIL.</h1>'+ '<div id="bodyContent">'+ '<p><b>GRUPO A.A.  7 DE ABRIL.</b> , — 7 de  Abril de  1984.  Dirección:  Final 6°  Av. norte, barrio  san  francisco.   Horario  de  sesiones: Lunes  a Domingo: 6:00 a 8:00 P.M., Número de miembros:  13 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1224 = new google.maps.InfoWindow({ content: contentString1224 });  
     //markers  
    var marker1224 = new google.maps.Marker({ position: point1224, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1224.GRUPO A.A.  7 DE ABRIL." }); 
    //information for  
    function goToLink1224() { infowindow1224.open(map,marker1224);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1224, 'click', goToLink1224); google.maps.event.addDomListener(window, 'load', initialize);
    
    //MARCADOR 1225  
    //positions 
    var point1225 = new google.maps.LatLng(13.558482, -88.433744); var contentString1225 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">GRUPO A.A. RECUPERACION 6 DE OCTUBRE.</h1>'+ '<div id="bodyContent">'+ '<p><b>GRUPO A.A. RECUPERACION 6 DE OCTUBRE.</b> , — 6 de  Octubre de  1989.  Dirección:  Calle  al palón  colonia  el carmen. Horario  de sesiones: Lunes a Domingo: 6:00 a 8:00 P.M., Número de miembros: 14 Hombres, 1 Mujer, Total 15.</p>'+ '</div>'+ '</div>'; var infowindow1225 = new google.maps.InfoWindow({ content: contentString1225 });   
    //markers  
    var marker1225 = new google.maps.Marker({ position: point1225, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1225.GRUPO A.A. RECUPERACION 6 DE OCTUBRE." }); 
    //information for  
    function goToLink1225() { infowindow1225.open(map,marker1225);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1225, 'click', goToLink1225); google.maps.event.addDomListener(window, 'load', initialize);
    
    //MARCADOR 1226  
    //positions 
    var point1226 = new google.maps.LatLng(13.559832, -88.430518); var contentString1226 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">GRUPO A.A.  EL TRIUNFO.</h1>'+ '<div id="bodyContent">'+ '<p><b>GRUPO A.A.  EL TRIUNFO.</b> , — 5 de  Enero  de  2002.  Dirección:  1 cuadra al  Ote. de  la  Iglesia  católica, salida  a  Sesori.  Horario  de sesiones: Lunes a Domingo: 6:00 a 8:00 P.M., Número de miembros: 15 Hombres 1 Mujer Total 16.</p>'+ '</div>'+ '</div>'; var infowindow1226 = new google.maps.InfoWindow({ content: contentString1226 });   
    //markers  
    var marker1226 = new google.maps.Marker({ position: point1226, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1226.GRUPO A.A.  EL TRIUNFO." }); 
    //information for  
    function goToLink1226() { infowindow1226.open(map,marker1226);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1226, 'click', goToLink1226); google.maps.event.addDomListener(window, 'load', initialize);
    
    //MARCADOR 1227  
    //positions 
    var point1227 = new google.maps.LatLng(13.558976, -88.422203); var contentString1227 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">GRUPO  A.A.  22  DE  JULIO.</h1>'+ '<div id="bodyContent">'+ '<p><b>GRUPO  A.A.  22  DE  JULIO.</b> , — 22  de  Julio  de  1985.  Dirección: Cantón los novillos.  Horario  de  sesiones: Lunes  a Domingo: 4:00 a 6:00 P.M., Número de miembros: 18 Hombres, 1 Mujer, Total 19.</p>'+ '</div>'+ '</div>'; var infowindow1227 = new google.maps.InfoWindow({ content: contentString1227 });   
    //markers  
    var marker1227 = new google.maps.Marker({ position: point1227, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1227.GRUPO  A.A.  22  DE  JULIO." }); 
    //information for  
    function goToLink1227() { infowindow1227.open(map,marker1227);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1227, 'click', goToLink1227); google.maps.event.addDomListener(window, 'load', initialize);
    
    //MARCADOR 1228  
    //positions 
    var point1228 = new google.maps.LatLng(13.564434, -88.432436); var contentString1228 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">GRUPO A.A. NUEVA AMANECER 8 DE MAYO.</h1>'+ '<div id="bodyContent">'+ '<p><b>GRUPO A.A. NUEVA AMANECER 8 DE MAYO.</b> , — 8 de  Mayo de 2000. Dirección: Calle el cementerio, cantón san Antonio. Horario de sesiones: Lunes a Sabado: 6:00 a 8:00 P.M., Número de  miembros: 16 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1228 = new google.maps.InfoWindow({ content: contentString1228 });   
    //markers  
    var marker1228 = new google.maps.Marker({ position: point1228, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1228.GRUPO A.A. NUEVA AMANECER 8 DE MAYO." }); 
    //information for  
    function goToLink1228() { infowindow1228.open(map,marker1228);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1228, 'click', goToLink1228); google.maps.event.addDomListener(window, 'load', initialize);
    
    //MARCADOR 1229  
    //positions 
    var point1229 = new google.maps.LatLng(13.561136, -88.430411); var contentString1229 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">GRUPO  A.A.  23   SEPTIEMBRE.</h1>'+ '<div id="bodyContent">'+ '<p><b>GRUPO  A.A.  23   SEPTIEMBRE.</b> , — 23  de   Septiembre de   2010. Dirección:   Al  oriente  de   la  hermita  católica,  cantón  el  Jicaro. Horario  de  sesiones: Lunes a Sabado: 4:00 a 6:00 P.M., Número de miembros:  6 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1229 = new google.maps.InfoWindow({ content: contentString1229 });   
    //markers 
     var marker1229 = new google.maps.Marker({ position: point1229, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1229.GRUPO  A.A.  23   SEPTIEMBRE." }); 
     //information for  
     function goToLink1229() { infowindow1229.open(map,marker1229);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1229, 'click', goToLink1229); google.maps.event.addDomListener(window, 'load', initialize);
    
    //MARCADOR 1230  
    //positions 
    var point1230 = new google.maps.LatLng(13.343397, -88.370416); var contentString1230 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">RUEGOS DE UNA MADRE.</h1>'+ '<div id="bodyContent">'+ '<p><b>RUEGOS DE UNA MADRE.</b> , — 27 de  Febrero de  2011.  Dirección: Colonia   Nuevo   Amanecer, Cantón  San  Felipe.   Días  y  horas   de reuniones: De  Lunes  a  Domingo de  5:00  a  7:00  p.m.  Miembros asistentes: 5 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1230 = new google.maps.InfoWindow({ content: contentString1230 });   
    //markers  
    var marker1230 = new google.maps.Marker({ position: point1230, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1230.RUEGOS DE UNA MADRE." }); 
    //information for  
    function goToLink1230() { infowindow1230.open(map,marker1230);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1230, 'click', goToLink1230); google.maps.event.addDomListener(window, 'load', initialize);
    
    //MARCADOR 1231  
    //positions 
    var point1231 = new google.maps.LatLng(13.339585, -88.369570); var contentString1231 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UN  MILAGRO EN  SAN  FELIPE.</h1>'+ '<div id="bodyContent">'+ '<p><b>UN  MILAGRO EN  SAN  FELIPE.</b> , — 04  de   Diciembre  de   2006. Dirección:  Cantón San Felipe.  Días y horas  de  reuniones: De Lunes a Domingo de 5:00 a 7:00 p.m.  Miembros asistentes: 15 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1231 = new google.maps.InfoWindow({ content: contentString1231 });   
    //markers  
    var marker1231 = new google.maps.Marker({ position: point1231, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1231.UN  MILAGRO EN  SAN  FELIPE." }); 
    //information for  
    function goToLink1231() { infowindow1231.open(map,marker1231);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1231, 'click', goToLink1231); google.maps.event.addDomListener(window, 'load', initialize);
    
    //MARCADOR 1232  
    //positions 
    var point1232 = new google.maps.LatLng(13.344041, -88.390449); var contentString1232 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UN CAMBIO DE VIDA.</h1>'+ '<div id="bodyContent">'+ '<p><b>UN CAMBIO DE VIDA.</b> , — 19 de  Marzo de  1969.  Dirección:  Calle Principal  Colonia  El Centro. Días y horas  de  reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.  Miembros asistentes: 13 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1232 = new google.maps.InfoWindow({ content: contentString1232 });   
    //markers  
    var marker1232 = new google.maps.Marker({ position: point1232, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1232.UN CAMBIO DE VIDA." }); 
    //information for  
    function goToLink1232() { infowindow1232.open(map,marker1232);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1232, 'click', goToLink1232); google.maps.event.addDomListener(window, 'load', initialize);
    
    //MARCADOR 1233  
    //positions 
    var point1233 = new google.maps.LatLng(13.645181, -88.494087); var contentString1233 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">AMOR Y PAZ.</h1>'+ '<div id="bodyContent">'+ '<p><b>AMOR Y PAZ.</b> , — 14 de Septiembre de 1979. Dirección:  1 Cuadra al Poniente del  parque, Barrio San Pablo.  Días y horas  de  reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m.  Miembros asistentes: 18 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1233 = new google.maps.InfoWindow({ content: contentString1233 });   
    //markers  
    var marker1233 = new google.maps.Marker({ position: point1233, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1233.AMOR Y PAZ." }); 
    //information for  
    function goToLink1233() { infowindow1233.open(map,marker1233);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1233, 'click', goToLink1233); google.maps.event.addDomListener(window, 'load', initialize);
    
    //MARCADOR 1234  
    //positions 
    var point1234 = new google.maps.LatLng(13.641314, -88.491782); var contentString1234 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">SAN  ANTONIO.</h1>'+ '<div id="bodyContent">'+ '<p><b>SAN  ANTONIO.</b> , —  12 de  Abril de  1968.  Dirección:  Avenida  Prin- cipal 3a  Calle Oriente, Barrio Las Flores.  Días y horas  de  reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m.  Miembros asistentes: 26 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1234 = new google.maps.InfoWindow({ content: contentString1234 });   
    //markers  
    var marker1234 = new google.maps.Marker({ position: point1234, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1234.SAN  ANTONIO." }); 
    //information for  
    function goToLink1234() { infowindow1234.open(map,marker1234);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1234, 'click', goToLink1234); google.maps.event.addDomListener(window, 'load', initialize);
    
    //MARCADOR 1235  
    //positions 
    var point1235 = new google.maps.LatLng(13.314042, -88.572771); var contentString1235 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">03 DE ENERO.</h1>'+ '<div id="bodyContent">'+ '<p><b>03 DE ENERO.</b> , — 03 de  Enero  de  2014.  Dirección:  Barrio San José Jiquilísco.  Días y horas  de  reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m.  Miembros asistentes: 5 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1235 = new google.maps.InfoWindow({ content: contentString1235 });   
    //markers  
    var marker1235 = new google.maps.Marker({ position: point1235, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1235.03 DE ENERO." }); 
    //information for  
    function goToLink1235() { infowindow1235.open(map,marker1235);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1235, 'click', goToLink1235); google.maps.event.addDomListener(window, 'load', initialize);
    
    //MARCADOR 1236  
    //positions 
    var point1236 = new google.maps.LatLng(13.328648, -88.573125); var contentString1236 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">AL FIN FELICES.</h1>'+ '<div id="bodyContent">'+ '<p><b>AL FIN FELICES.</b> , — 06 de  Diciembre de  1962.  Dirección:  3a   Calle Poniente Nº 9, Barrio San José. Días y horas  de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.  Miembros asistentes: 20 Hombres. </p>'+ '</div>'+ '</div>'; var infowindow1236 = new google.maps.InfoWindow({ content: contentString1236 });   
    //markers  
    var marker1236 = new google.maps.Marker({ position: point1236, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1236.AL FIN FELICES." }); 
    //information for  
    function goToLink1236() { infowindow1236.open(map,marker1236);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1236, 'click', goToLink1236); google.maps.event.addDomListener(window, 'load', initialize);
    
    //MARCADOR 1237  
    //positions 
    var point1237 = new google.maps.LatLng(13.332961, -88.567389); var contentString1237 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">DESPERTAR 04   DE  JULIO.</h1>'+ '<div id="bodyContent">'+ '<p><b>DESPERTAR 04   DE  JULIO.</b> , — 04  de   Julio  de   2001.   Dirección: Cantón Tierra Blanca ½ Cuadra al Oriente de  La PNC. Días y horas de  reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m.  Miembros asistentes: 10 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1237 = new google.maps.InfoWindow({ content: contentString1237 });   
    //markers  
    var marker1237 = new google.maps.Marker({ position: point1237, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1237.DESPERTAR 04   DE  JULIO." }); 
    //information for  
    function goToLink1237() { infowindow1237.open(map,marker1237);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1237, 'click', goToLink1237); google.maps.event.addDomListener(window, 'load', initialize);
    
    //MARCADOR 1238  
    //positions 
    var point1238 = new google.maps.LatLng(13.333365, -88.572073); var contentString1238 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">LUCES DE DICIEMBRE.</h1>'+ '<div id="bodyContent">'+ '<p><b>LUCES DE DICIEMBRE.</b> , —  08  de  Diciembre de  2005.  Dirección: Cantón El Carrizal. Días y horas  de reuniones: De Lunes a Domingo de 5:00 a 7:00 p.m.  Miembros asistentes: 10 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1238 = new google.maps.InfoWindow({ content: contentString1238 });   
    //markers 
     var marker1238 = new google.maps.Marker({ position: point1238, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1238.LUCES DE DICIEMBRE." }); 
     //information for  
     function goToLink1238() { infowindow1238.open(map,marker1238);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1238, 'click', goToLink1238); google.maps.event.addDomListener(window, 'load', initialize);
    
    //MARCADOR 1239 
     //positions 
    var point1239 = new google.maps.LatLng(13.296805, -88.584180); var contentString1239 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">MI ÚLTIMA  COPA.</h1>'+ '<div id="bodyContent">'+ '<p><b>MI ÚLTIMA  COPA.</b> , —  08  de   Mayo  de   2006.   Dirección:   Puerto Avalos. Días y horas  de  reuniones: De Lunes a Domingo de  5:00 a 7:00 p.m.  Miembros asistentes: 8 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1239 = new google.maps.InfoWindow({ content: contentString1239 });   
    //markers  
    var marker1239 = new google.maps.Marker({ position: point1239, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1239.MI ÚLTIMA  COPA." }); 
    //information for  
    function goToLink1239() { infowindow1239.open(map,marker1239);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1239, 'click', goToLink1239); google.maps.event.addDomListener(window, 'load', initialize);
   
    //MARCADOR 1240  
    //positions 
    var point1240 = new google.maps.LatLng(13.336337, -88.564044); var contentString1240 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NUEVA ESPERANZA.</h1>'+ '<div id="bodyContent">'+ '<p><b>NUEVA ESPERANZA.</b> , — 28 de  Julio de  2011.  Dirección:  Carretera Litoral frente  a La Texaco,  Calle  vieja a Jiquilísco.  Días y horas  de reuniones: De  Lunes  a  Domingo de  4:00  a  6:00  p.m.  Miembros asistentes: 18 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1240 = new google.maps.InfoWindow({ content: contentString1240 });   
    //markers  
    var marker1240 = new google.maps.Marker({ position: point1240, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1240.NUEVA ESPERANZA." }); 
    //information for  
    function goToLink1240() { infowindow1240.open(map,marker1240);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1240, 'click', goToLink1240); google.maps.event.addDomListener(window, 'load', initialize);
    
    //MARCADOR 1241  
    //positions 
    var point1241 = new google.maps.LatLng(13.302847, -88.582189); var contentString1241 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NUEVO  RENACER.</h1>'+ '<div id="bodyContent">'+ '<p><b>NUEVO  RENACER.</b> , — 12  de  Diciembre de  1962.  Dirección:  Co- lonia  El Roquinte Pasaje  Nº 2, Calle  a Puerto Avalos. Días y horas de  reuniones: De Lunes a Domingo de  5:30 a 7:30 p.m.  Miembros asistentes: 8 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1241 = new google.maps.InfoWindow({ content: contentString1241 });   
    //markers  
    var marker1241 = new google.maps.Marker({ position: point1241, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1241.NUEVO  RENACER." }); 
    //information for  
    function goToLink1241() { infowindow1241.open(map,marker1241);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1241, 'click', goToLink1241); google.maps.event.addDomListener(window, 'load', initialize);
    
    //MARCADOR 1242  
    //positions 
    var point1242 = new google.maps.LatLng(13.301761, -88.560217); var contentString1242 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NUEVO RENACER.</h1>'+ '<div id="bodyContent">'+ '<p><b>NUEVO RENACER.</b> , — 12 de Noviembre de 2001. Dirección: Cantón La Noria. Días y horas  de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.  Miembros asistentes: 15 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1242 = new google.maps.InfoWindow({ content: contentString1242 });   
    //markers  
    var marker1242 = new google.maps.Marker({ position: point1242, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1242.NUEVO RENACER." }); 
    //information for  
    function goToLink1242() { infowindow1242.open(map,marker1242);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1242, 'click', goToLink1242); google.maps.event.addDomListener(window, 'load', initialize);
    
    //MARCADOR 1243  
    //positions 
    var point1243 = new google.maps.LatLng(13.328393, -88.553807); var contentString1243 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UNA  LUZ EN EL CAMINO.</h1>'+ '<div id="bodyContent">'+ '<p><b>UNA  LUZ EN EL CAMINO.</b> , — 14 de  Septiembre de  1996.  Direc- ción:  Comunidad San  Hilario, Cantón Tierra  Blanca.  Días  y horas de  reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m.  Miembros asistentes: 15 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1243 = new google.maps.InfoWindow({ content: contentString1243 });   
    //markers  
    var marker1243 = new google.maps.Marker({ position: point1243, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1243.UNA  LUZ EN EL CAMINO." }); 
    //information for  
    function goToLink1243() { infowindow1243.open(map,marker1243);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1243, 'click', goToLink1243); google.maps.event.addDomListener(window, 'load', initialize);
    
    //MARCADOR 1244  
    //positions 
    var point1244 = new google.maps.LatLng(13.319624, -88.579728); var contentString1244 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">VIDA NUEVA.</h1>'+ '<div id="bodyContent">'+ '<p><b>VIDA NUEVA.</b> , —  16  de  Febrero de  1992.  Dirección:  Comunidad Nueva  Esperanza, Cantón Zamorano. Días  y horas  de  reuniones: De  Lunes  a Domingo de  6:00  a 8:00  p.m.  Miembros asistentes: 7 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1244 = new google.maps.InfoWindow({ content: contentString1244 });   
    //markers  
    var marker1244 = new google.maps.Marker({ position: point1244, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1244.VIDA NUEVA." }); 
    //information for  
    function goToLink1244() { infowindow1244.open(map,marker1244);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1244, 'click', goToLink1244); google.maps.event.addDomListener(window, 'load', initialize);
    
    //MARCADOR 1245 
     //positions 
    var point1245 = new google.maps.LatLng(13.511370, -88.386281); var contentString1245 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">AMANECER FELIZ.</h1>'+ '<div id="bodyContent">'+ '<p><b>AMANECER FELIZ.</b> , — 08 de  Julio de  2008.  Dirección:  Pasaje  Nº 3 Colonia  La gloria,  Cantón Llano Grande. Días y horas  de reuniones: De Lunes a Domingo de  4:00 a 6:00 p.m.  Miembros asistentes: 12 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1245 = new google.maps.InfoWindow({ content: contentString1245 });   
    //markers  
    var marker1245 = new google.maps.Marker({ position: point1245, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1245.AMANECER FELIZ." }); 
    //information for  
    function goToLink1245() { infowindow1245.open(map,marker1245);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1245, 'click', goToLink1245); google.maps.event.addDomListener(window, 'load', initialize);
    
    //MARCADOR 1246  
    //positions 
    var point1246 = new google.maps.LatLng(13.517947, -88.374643); var contentString1246 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">EN LIBERACIÓN.</h1>'+ '<div id="bodyContent">'+ '<p><b>EN LIBERACIÓN.</b> , — 07  de  Marzo  de  2011.  Dirección:  Caserío El Paraisal.  Días y horas  de  reuniones: Lunes,  Miércoles  y Viernes  de 6:00 a 8:00 p.m.  Miembros asistentes: 10 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1246 = new google.maps.InfoWindow({ content: contentString1246 });   
    //markers  
    var marker1246 = new google.maps.Marker({ position: point1246, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1246.EN LIBERACIÓN." }); 
    //information for  
    function goToLink1246() { infowindow1246.open(map,marker1246);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1246, 'click', goToLink1246); google.maps.event.addDomListener(window, 'load', initialize);
    
    //MARCADOR 1247 
     //positions 
    var point1247 = new google.maps.LatLng(13.515072, -88.390919); var contentString1247 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">LUIS A.</h1>'+ '<div id="bodyContent">'+ '<p><b>LUIS A.</b> , —  17  de  Noviembre de  1981.  Dirección:  Calle  al  rastro Municipal, polígono H, Barrio San Simón. Días y horas de reuniones: De Lunes a Domingo de  6:30 a 8:30 p.m.  Miembros asistentes: 15 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1247 = new google.maps.InfoWindow({ content: contentString1247 });   
    //markers  
    var marker1247 = new google.maps.Marker({ position: point1247, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1247.LUIS A." }); 
    //information for  
    function goToLink1247() { infowindow1247.open(map,marker1247);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1247, 'click', goToLink1247); google.maps.event.addDomListener(window, 'load', initialize);
    
    //MARCADOR 1248  
    //positions 
    var point1248 = new google.maps.LatLng(13.520780, -88.387578); var contentString1248 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NUESTRA VIDA CAMBIÓ.</h1>'+ '<div id="bodyContent">'+ '<p><b>NUESTRA VIDA CAMBIÓ.</b> , — 23 de Noviembre de 1974. Dirección: Calle  Cerrito,   Cantón  Loma  de   La  Santacruz.  Días  y  horas   de reuniones: Lunes, Miércoles  y Viernes de 6:00 a 8:00 p.m. Miembros asistentes: 10 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1248 = new google.maps.InfoWindow({ content: contentString1248 });   
    //markers  
    var marker1248 = new google.maps.Marker({ position: point1248, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1248.NUESTRA VIDA CAMBIÓ." }); 
    //information for  
    function goToLink1248() { infowindow1248.open(map,marker1248);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1248, 'click', goToLink1248); google.maps.event.addDomListener(window, 'load', initialize);
    
    //MARCADOR 1249  
    //positions 
    var point1249 = new google.maps.LatLng(13.518807, -88.382908); var contentString1249 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NUEVA ESPERANZA.</h1>'+ '<div id="bodyContent">'+ '<p><b>NUEVA ESPERANZA.</b> , — 14 de  Abril de  2012.  Dirección:  100 Mts. antes de  La Cancha de  fútbol,  Cantón El Níspero. Días y horas  de reuniones: De  Lunes  a  Domingo de  4:00  a  6:00  p.m.  Miembros asistentes: 5 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1249 = new google.maps.InfoWindow({ content: contentString1249 });   
    //markers  
    var marker1249 = new google.maps.Marker({ position: point1249, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1249.NUEVA ESPERANZA." }); 
    //information for  
    function goToLink1249() { infowindow1249.open(map,marker1249);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1249, 'click', goToLink1249); google.maps.event.addDomListener(window, 'load', initialize);
    
    //MARCADOR 1250  
    //positions 
    var point1250 = new google.maps.LatLng(13.509200, -88.385199); var contentString1250 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NUEVO  RENACER 02  DE  MAYO  (INSTITUCIONAL).</h1>'+ '<div id="bodyContent">'+ '<p><b>NUEVO  RENACER 02  DE  MAYO  (INSTITUCIONAL).</b> , — 02  de Mayo  de  2007.  Dirección:  Centro penal de  Jucuapa. Días y horas de reuniones: Miércoles  de 9:00 a 11:00 a.m., Miembros asistentes: 60 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1250 = new google.maps.InfoWindow({ content: contentString1250 });   
    //markers 
     var marker1250 = new google.maps.Marker({ position: point1250, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1250.NUEVO  RENACER 02  DE  MAYO  (INSTITUCIONAL)." }); 
     //information for  
     function goToLink1250() { infowindow1250.open(map,marker1250);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1250, 'click', goToLink1250); google.maps.event.addDomListener(window, 'load', initialize);
    
    //MARCADOR 1251  
    //positions 
    var point1251 = new google.maps.LatLng(13.521034, -88.382646); var contentString1251 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">RENACER 15  DE  SEPTIEMBRE.</h1>'+ '<div id="bodyContent">'+ '<p><b>RENACER 15  DE  SEPTIEMBRE.</b> , —  15  de  Septiembre de  2006. Dirección:  Calle a Santa  Elena, costado Sur de La Cancha de fútbol. Días y horas  de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m. Miembros asistentes: 15 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1251 = new google.maps.InfoWindow({ content: contentString1251 });   
    //markers 
     var marker1251 = new google.maps.Marker({ position: point1251, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1251.RENACER 15  DE  SEPTIEMBRE." }); 
     //information for  
     function goToLink1251() { infowindow1251.open(map,marker1251);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1251, 'click', goToLink1251); google.maps.event.addDomListener(window, 'load', initialize);
    
    //MARCADOR 1252  
    //positions 
    var point1252 = new google.maps.LatLng(13.525312, -88.385377); var contentString1252 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">SAN SIMÓN.</h1>'+ '<div id="bodyContent">'+ '<p><b>SAN SIMÓN.</b> , — 01 de  Septiembre de  1962.  Dirección:  Final Calle Delgado, salida  a Colonia  Linares Barrio Concepción. Días y horas de  reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m.  Miembros asistentes: 24 Hombres y 1Mujer.</p>'+ '</div>'+ '</div>'; var infowindow1252 = new google.maps.InfoWindow({ content: contentString1252 });   
    //markers  
    var marker1252 = new google.maps.Marker({ position: point1252, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1252.SAN SIMÓN." }); 
    //information for  
    function goToLink1252() { infowindow1252.open(map,marker1252);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1252, 'click', goToLink1252); google.maps.event.addDomListener(window, 'load', initialize);
    
    //MARCADOR 1253  
    //positions 
    var point1253 = new google.maps.LatLng(13.517058, -88.375768); var contentString1253 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UNA  LUZ EN LA SOMBRA.</h1>'+ '<div id="bodyContent">'+ '<p><b>UNA  LUZ EN LA SOMBRA.</b> , — 10 de  Agosto de  1968.  Dirección: Caserío Rancho  Alegre,  Cantón Chilamate Arriba. Días y horas  de reuniones: Lunes, Miércoles  y Viernes de 6:00 a 8:00 p.m. Miembros asistentes: 15 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1253 = new google.maps.InfoWindow({ content: contentString1253 });   
    //markers  
    var marker1253 = new google.maps.Marker({ position: point1253, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1253.UNA  LUZ EN LA SOMBRA." }); 
    //information for  
    function goToLink1253() { infowindow1253.open(map,marker1253);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1253, 'click', goToLink1253); google.maps.event.addDomListener(window, 'load', initialize);
    
    //MARCADOR 1254  
    //positions 
    var point1254 = new google.maps.LatLng(13.516949, -88.387599); var contentString1254 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NUEVA GENERACIÓN.</h1>'+ '<div id="bodyContent">'+ '<p><b>NUEVA GENERACIÓN.</b> , — 16 de Enero de 2014. Dirección: Colonia El Cocalito. Días y horas de reuniones: De Lunes a Domingo de 4:00 a 6:00 p.m.  Miembros asistentes: 25 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1254 = new google.maps.InfoWindow({ content: contentString1254 });   
    //markers  
    var marker1254 = new google.maps.Marker({ position: point1254, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1254.NUEVA GENERACIÓN." }); 
    //information for  
    function goToLink1254() { infowindow1254.open(map,marker1254);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1254, 'click', goToLink1254); google.maps.event.addDomListener(window, 'load', initialize);
    
    //MARCADOR 1255  
    //positions 
    var point1255 = new google.maps.LatLng(13.254137, -88.247932); var contentString1255 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">21 DE NOVIEMBRE.</h1>'+ '<div id="bodyContent">'+ '<p><b>21 DE NOVIEMBRE.</b> , — 21 de Noviembre de 2008.  Dirección:  Calle Principal,  Barrio El Centro. Días y horas  de  reuniones: De Lunes  a Domingo de 4:00 a 6:00 p.m.  Miembros asistentes: 35 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1255 = new google.maps.InfoWindow({ content: contentString1255 });   
    //markers  
    var marker1255 = new google.maps.Marker({ position: point1255, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1255.21 DE NOVIEMBRE." }); 
    //information for  
    function goToLink1255() { infowindow1255.open(map,marker1255);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1255, 'click', goToLink1255); google.maps.event.addDomListener(window, 'load', initialize);
    
    //MARCADOR 1256  
    //positions 
    var point1256 = new google.maps.LatLng(13.255985, -88.250732); var contentString1256 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">DIOS NOS  CONCEDA PAZ.</h1>'+ '<div id="bodyContent">'+ '<p><b>DIOS NOS  CONCEDA PAZ.</b> , — 22  de  Marzo  de  1967.  Dirección: Cantón El Almendro. Días y horas de reuniones: De Lunes a Domingo de 5:00 a 7:00 p.m.  Miembros asistentes: 12 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1256 = new google.maps.InfoWindow({ content: contentString1256 });   
    //markers  
    var marker1256 = new google.maps.Marker({ position: point1256, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1256.DIOS NOS  CONCEDA PAZ." }); 
    //information for  
    function goToLink1256() { infowindow1256.open(map,marker1256);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1256, 'click', goToLink1256); google.maps.event.addDomListener(window, 'load', initialize);
    
    //MARCADOR 1257  
    //positions 
    var point1257 = new google.maps.LatLng(13.253641, -88.243957); var contentString1257 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">FE Y ESPERANZA.</h1>'+ '<div id="bodyContent">'+ '<p><b>FE Y ESPERANZA.</b> , — 08  de  Julio  de  1965.  Dirección:  Barrio  La Parroquia. Días y horas  de  reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m.  Miembros asistentes: 12 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1257 = new google.maps.InfoWindow({ content: contentString1257 });   
    //markers  
    var marker1257 = new google.maps.Marker({ position: point1257, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1257.FE Y ESPERANZA." }); 
    //information for  
    function goToLink1257() { infowindow1257.open(map,marker1257);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1257, 'click', goToLink1257); google.maps.event.addDomListener(window, 'load', initialize);
    
    //MARCADOR 1258  
    //positions 
    var point1258 = new google.maps.LatLng(13.257861, -88.248128); var contentString1258 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">SENDEROS DE LUZ Y PAZ.</h1>'+ '<div id="bodyContent">'+ '<p><b>SENDEROS DE LUZ Y PAZ.</b> , — 22 de  Febrero de  1986.  Dirección: Cantón Samuria. Días y horas de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.  Miembros asistentes: 23 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1258 = new google.maps.InfoWindow({ content: contentString1258 });   
    //markers  
    var marker1258 = new google.maps.Marker({ position: point1258, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1258.SENDEROS DE LUZ Y PAZ." }); 
    //information for  
    function goToLink1258() { infowindow1258.open(map,marker1258);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1258, 'click', goToLink1258); google.maps.event.addDomListener(window, 'load', initialize);
    
    //MARCADOR 1259  
    //positions 
    var point1259 = new google.maps.LatLng(13.255605, -88.253219); var contentString1259 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UNA LUZ Y UN NUEVO AMANECER.</h1>'+ '<div id="bodyContent">'+ '<p><b>UNA LUZ Y UN NUEVO AMANECER.</b> , — Mayo de 2010. Dirección: Cantón El progreso. Días y horas de reuniones: De Lunes a Domingo de 5:00 a 7:00 p.m.  Miembros asistentes: 12 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1259 = new google.maps.InfoWindow({ content: contentString1259 });   
    //markers  
    var marker1259 = new google.maps.Marker({ position: point1259, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1259.UNA LUZ Y UN NUEVO AMANECER." }); 
    //information for  
    function goToLink1259() { infowindow1259.open(map,marker1259);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1259, 'click', goToLink1259); google.maps.event.addDomListener(window, 'load', initialize);
    
    //MARCADOR 1260  
    //positions 
    var point1260 = new google.maps.LatLng(13.553183, -88.487742); var contentString1260 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UN MENSAJE A LA CONCIENCIA.</h1>'+ '<div id="bodyContent">'+ '<p><b>UN MENSAJE A LA CONCIENCIA.</b> , — 25 de  Mayo de  1997. Dirección: Hacienda La Cabaña. Días y horas de reuniones: De Lunes a Domingo de 4:00 a 6:00 p.m.  Miembros asistentes: 10 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1260 = new google.maps.InfoWindow({ content: contentString1260 });   
    //markers  
    var marker1260 = new google.maps.Marker({ position: point1260, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1260.UN MENSAJE A LA CONCIENCIA." }); 
    //information for  
    function goToLink1260() { infowindow1260.open(map,marker1260);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1260, 'click', goToLink1260); google.maps.event.addDomListener(window, 'load', initialize);
    
    //MARCADOR 1261  
    //positions 
    var point1261 = new google.maps.LatLng(13.562924, -88.492924); var contentString1261 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">08  DE DICIEMBRE.</h1>'+ '<div id="bodyContent">'+ '<p><b>08  DE DICIEMBRE.</b> , — 08 de  Diciembre de  1973.  Dirección:  Calle Principal  salida  a  Berlín.  Días  y horas  de  reuniones: De  Lunes  a Domingo de  6:00  a 8:00  p.m.  Miembros asistentes: 20 Hombres y 3 Mujeres.</p>'+ '</div>'+ '</div>'; var infowindow1261 = new google.maps.InfoWindow({ content: contentString1261 });   
    //markers  
    var marker1261 = new google.maps.Marker({ position: point1261, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1261.08  DE DICIEMBRE." }); 
    //information for  
    function goToLink1261() { infowindow1261.open(map,marker1261);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1261, 'click', goToLink1261); google.maps.event.addDomListener(window, 'load', initialize);
    
    //MARCADOR 1262  
    //positions 
    var point1262 = new google.maps.LatLng(13.563216, -88.489673); var contentString1262 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">24 DE DICIEMBRE.</h1>'+ '<div id="bodyContent">'+ '<p><b>24 DE DICIEMBRE.</b> , — 24 de Diciembre de 2007. Dirección: Avenida Roosvelt    y Calle  Gerardo Barrios.  Días y horas  de  reuniones: De Lunes  a  Domingo de  6:00  a  8:00  p.m.  Miembros asistentes:  15 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1262 = new google.maps.InfoWindow({ content: contentString1262 });   
    //markers  
    var marker1262 = new google.maps.Marker({ position: point1262, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1262.24 DE DICIEMBRE." }); 
    //information for  
    function goToLink1262() { infowindow1262.open(map,marker1262);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1262, 'click', goToLink1262); google.maps.event.addDomListener(window, 'load', initialize);
    
    //MARCADOR 1263  
    //positions 
    var point1263 = new google.maps.LatLng(13.569110, -88.509171); var contentString1263 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">BENDICIÓN DE DIOS.</h1>'+ '<div id="bodyContent">'+ '<p><b>BENDICIÓN DE DIOS.</b> , — 07 de  Marzo de  2013.  Dirección:  Barrio El Calvario, Mercedes Umaña.  Días y horas  de  reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.  Miembros asistentes: 15 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1263 = new google.maps.InfoWindow({ content: contentString1263 });   
    //markers  
    var marker1263 = new google.maps.Marker({ position: point1263, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1263.BENDICIÓN DE DIOS." }); 
    //information for  
    function goToLink1263() { infowindow1263.open(map,marker1263);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1263, 'click', goToLink1263); google.maps.event.addDomListener(window, 'load', initialize);
    
    //MARCADOR 1264  
    //positions 
    var point1264 = new google.maps.LatLng(13.561332, -88.493072); var contentString1264 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">EL CALVARIO.</h1>'+ '<div id="bodyContent">'+ '<p><b>EL CALVARIO.</b> , —  25 de Junio de 1993. Dirección: Barrio El Calvario. Días y horas  de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m. Miembros asistentes: 8 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1264 = new google.maps.InfoWindow({ content: contentString1264 });   
    //markers  
    var marker1264 = new google.maps.Marker({ position: point1264, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1264.EL CALVARIO." }); 
    //information for  
    function goToLink1264() { infowindow1264.open(map,marker1264);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1264, 'click', goToLink1264); google.maps.event.addDomListener(window, 'load', initialize);
    
    //MARCADOR 1265  
    //positions 
    var point1265 = new google.maps.LatLng(13.567543, -88.510599); var contentString1265 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NUEVA  VIDA.</h1>'+ '<div id="bodyContent">'+ '<p><b>NUEVA  VIDA.</b> , — 06  de  Enero   de  2011.   Dirección:   Colonia   Las Flores,  Cantón Santa  Anita. Días y horas  de  reuniones: De Lunes a Domingo de  6:00  a 8:00  p.m.  Miembros asistentes: 13 Hombres y 2 Mujeres.</p>'+ '</div>'+ '</div>'; var infowindow1265 = new google.maps.InfoWindow({ content: contentString1265 });   
    //markers  
    var marker1265 = new google.maps.Marker({ position: point1265, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1265.NUEVA  VIDA." }); 
    //information for  
    function goToLink1265() { infowindow1265.open(map,marker1265);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1265, 'click', goToLink1265); google.maps.event.addDomListener(window, 'load', initialize);
    
    //MARCADOR 1266  
    //positions 
    var point1266 = new google.maps.LatLng(13.560753, -88.487883); var contentString1266 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">SENDERO DE VIDA.</h1>'+ '<div id="bodyContent">'+ '<p><b>SENDERO DE VIDA.</b> , — 24  de  Mayo  de  2014.  Dirección:  Colonia Calderón, Mercedes Umaña.  Días y horas  de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.  Miembros asistentes: 7 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1266 = new google.maps.InfoWindow({ content: contentString1266 });   
    //markers  
    var marker1266 = new google.maps.Marker({ position: point1266, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1266.SENDERO DE VIDA." }); 
    //information for  
    function goToLink1266() { infowindow1266.open(map,marker1266);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1266, 'click', goToLink1266); google.maps.event.addDomListener(window, 'load', initialize);
    
    //MARCADOR 1267  
    //positions 
    var point1267 = new google.maps.LatLng(13.598857, -88.442570); var contentString1267 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">FE Y ESPERANZA.</h1>'+ '<div id="bodyContent">'+ '<p><b>FE Y ESPERANZA.</b> , — 09 de  Febrero de  2006.  Dirección:  Costado Sur  de  La Iglesia  Católica, Barrio  San  Antonio.   Días  y horas   de reuniones: De  Lunes  a  Domingo de  6:00  a  8:00  p.m.  Miembros asistentes: 12 Hombres y 1 Mujer.</p>'+ '</div>'+ '</div>'; var infowindow1267 = new google.maps.InfoWindow({ content: contentString1267 });   
    //markers  
    var marker1267 = new google.maps.Marker({ position: point1267, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1267.FE Y ESPERANZA." }); 
    //information for  
    function goToLink1267() { infowindow1267.open(map,marker1267);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1267, 'click', goToLink1267); google.maps.event.addDomListener(window, 'load', initialize);
    
    //MARCADOR 1268  
    //positions 
    var point1268 = new google.maps.LatLng(13.597188, -88.448192); var contentString1268 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NUEVO  RENACER 04   DE  NOVIEMBRE.</h1>'+ '<div id="bodyContent">'+ '<p><b>NUEVO  RENACER 04   DE  NOVIEMBRE.</b> , — 04  de   Noviembre de  2005.  Dirección:  Costado Sur de  La Cancha de  fútbol,  Nuevo Gualcho. Días y horas  de reuniones: De Lunes a Domingo de 4:00 a 6:00 p.m.  Miembros asistentes: 13 Hombres y 1 Mujer.</p>'+ '</div>'+ '</div>'; var infowindow1268 = new google.maps.InfoWindow({ content: contentString1268 });   
    //markers  
    var marker1268 = new google.maps.Marker({ position: point1268, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1268.NUEVO  RENACER 04   DE  NOVIEMBRE." }); 
    //information for  
    function goToLink1268() { infowindow1268.open(map,marker1268);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1268, 'click', goToLink1268); google.maps.event.addDomListener(window, 'load', initialize);
    
    //MARCADOR 1269  
    //positions 
    var point1269 = new google.maps.LatLng(13.385732, -88.501310); var contentString1269 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">12  DE AGOSTO.</h1>'+ '<div id="bodyContent">'+ '<p><b>12  DE AGOSTO.</b> , — 12 de  Agosto de  2013.  Dirección:  Cantón Las Trancas   Norte,  Ozatlán. Días  y horas   de  reuniones: De  Lunes  a Domingo de 4:00 a 6:00 p.m.  Miembros asistentes: 10 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1269 = new google.maps.InfoWindow({ content: contentString1269 });   
    //markers  
    var marker1269 = new google.maps.Marker({ position: point1269, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1269.12  DE AGOSTO." }); 
    //information for  
    function goToLink1269() { infowindow1269.open(map,marker1269);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1269, 'click', goToLink1269); google.maps.event.addDomListener(window, 'load', initialize);
    
    //MARCADOR 1270  
    //positions 
    var point1270 = new google.maps.LatLng(13.383468, -88.507018); var contentString1270 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">LUZ Y ESPERANZA.</h1>'+ '<div id="bodyContent">'+ '<p><b>LUZ Y ESPERANZA.</b> , — 01 de  Abril de  2014.  Dirección:  Cantón Las Trancas Sur. Días y horas de reuniones: De Lunes a Domingo de 5:00 a 7:00 p.m.  Miembros asistentes: 11 Hombres y 1 Mujer.</p>'+ '</div>'+ '</div>'; var infowindow1270 = new google.maps.InfoWindow({ content: contentString1270 });   
    //markers  
    var marker1270 = new google.maps.Marker({ position: point1270, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1270.LUZ Y ESPERANZA." }); 
    //information for  
    function goToLink1270() { infowindow1270.open(map,marker1270);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1270, 'click', goToLink1270); google.maps.event.addDomListener(window, 'load', initialize);
    
    //MARCADOR 1271  
    //positions 
    var point1271 = new google.maps.LatLng(13.382821, -88.502197); var contentString1271 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">MARAVILLAS DEL SIGLO XX.</h1>'+ '<div id="bodyContent">'+ '<p><b>MARAVILLAS DEL SIGLO XX.</b> , — 09 de  Mayo de  2014.  Dirección: 1ª Avenida  Norte, Casa  Nº 5. Días y horas  de  reuniones: De Lunes a Domingo de  5:00 a 7:00 p.m.  Miembros asistentes: 12 Hombres y 1 Mujer.</p>'+ '</div>'+ '</div>'; var infowindow1271 = new google.maps.InfoWindow({ content: contentString1271 });   
    //markers  
    var marker1271 = new google.maps.Marker({ position: point1271, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1271.MARAVILLAS DEL SIGLO XX." }); 
    //information for 
     function goToLink1271() { infowindow1271.open(map,marker1271);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1271, 'click', goToLink1271); google.maps.event.addDomListener(window, 'load', initialize);
    
    //MARCADOR 1272  
    //positions 
    var point1272 = new google.maps.LatLng(13.396026, -88.504698); var contentString1272 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NUEVO  MILENIO.</h1>'+ '<div id="bodyContent">'+ '<p><b>NUEVO  MILENIO.</b> , — 11  de  Octubre de  2014.  Dirección:  Caserío Los Martínez.  Días y horas  de  reuniones: De Lunes  a Domingo de 5:00 a 7:00 p.m.  Miembros asistentes: 4 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1272 = new google.maps.InfoWindow({ content: contentString1272 });   
    //markers  
    var marker1272 = new google.maps.Marker({ position: point1272, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1272.NUEVO  MILENIO." }); 
    //information for  
    function goToLink1272() { infowindow1272.open(map,marker1272);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1272, 'click', goToLink1272); google.maps.event.addDomListener(window, 'load', initialize);
    
    //MARCADOR 1273  
    //positions 
    var point1273 = new google.maps.LatLng(13.279252, -88.548367); var contentString1273 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">DIOS NOS  AYUDÓ.</h1>'+ '<div id="bodyContent">'+ '<p><b>DIOS NOS  AYUDÓ.</b> , — 29 de  Mayo  de  1977.  Dirección:  Polígono 1 Casa  Nº 7 Colonia  El Pibe.  Días y horas  de  reuniones: De Lunes a  Viernes  de  6:00  a  8:00  p.m.  Sábado de  10:00  a  12:00  m.d.  y Domingo de  3:00  a 5:00  p.m.  Miembros asistentes: 18 Hombres y 1 Mujer.</p>'+ '</div>'+ '</div>'; var infowindow1273 = new google.maps.InfoWindow({ content: contentString1273 });   
    //markers  
    var marker1273 = new google.maps.Marker({ position: point1273, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1273.DIOS NOS  AYUDÓ." }); 
    //information for  
    function goToLink1273() { infowindow1273.open(map,marker1273);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1273, 'click', goToLink1273); google.maps.event.addDomListener(window, 'load', initialize);
    
    //MARCADOR 1274  
    //positions 
    var point1274 = new google.maps.LatLng(13.274391, -88.546621); var contentString1274 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">EL TRIUNFO.</h1>'+ '<div id="bodyContent">'+ '<p><b>EL TRIUNFO.</b> , — 10  de  Mayo  de  1965.  Dirección:  2a   Avenida  Sur ½ Cuadra al Sur del  Centro Escolar.  Días y horas  de  reuniones: De Lunes  a  Domingo de  5:00  a  7:00  p.m.  Miembros asistentes:  15 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1274 = new google.maps.InfoWindow({ content: contentString1274 });   
    //markers  
    var marker1274 = new google.maps.Marker({ position: point1274, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1274.EL TRIUNFO." }); 
    //information for  
    function goToLink1274() { infowindow1274.open(map,marker1274);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1274, 'click', goToLink1274); google.maps.event.addDomListener(window, 'load', initialize);
    
    //MARCADOR 1275  
    //positions 
    var point1275 = new google.maps.LatLng(13.272236, -88.546456); var contentString1275 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">SENDERO DE LA BAHÍA.</h1>'+ '<div id="bodyContent">'+ '<p><b>SENDERO DE LA BAHÍA.</b> , — 05 de  Julio de  2003.  Dirección:  Final 4ª Avenida  Sur Calle La Granja. Días y horas  de reuniones: De Lunes a Domingo de 5:30 a 7:30 p.m.  Miembros asistentes: 8 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1275 = new google.maps.InfoWindow({ content: contentString1275 });   
    //markers  
    var marker1275 = new google.maps.Marker({ position: point1275, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1275.SENDERO DE LA BAHÍA." }); 
    //information for  
    function goToLink1275() { infowindow1275.open(map,marker1275);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1275, 'click', goToLink1275); google.maps.event.addDomListener(window, 'load', initialize);
    
    //MARCADOR 1276  
    //positions 
    var point1276 = new google.maps.LatLng(13.274495, -88.549622); var contentString1276 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">SOBRIEDAD 2000.</h1>'+ '<div id="bodyContent">'+ '<p><b>SOBRIEDAD 2000.</b> , — 06 de Enero de 2000. Dirección: Calle Alberto Masferrer  Barrio El Centro. Días y horas  de  reuniones: De Lunes  a Domingo de 6:00 a 8:00 p.m.  Miembros asistentes: 14 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1276 = new google.maps.InfoWindow({ content: contentString1276 });   
    //markers  
    var marker1276 = new google.maps.Marker({ position: point1276, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1276.SOBRIEDAD 2000." }); 
    //information for  
    function goToLink1276() { infowindow1276.open(map,marker1276);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1276, 'click', goToLink1276); google.maps.event.addDomListener(window, 'load', initialize);
    
    //MARCADOR 1277  
    //positions 
    var point1277 = new google.maps.LatLng(13.280730, -88.547758); var contentString1277 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UNA  LUZ EN EL CAMINO.</h1>'+ '<div id="bodyContent">'+ '<p><b>UNA  LUZ EN EL CAMINO.</b> , — 16 de  Agosto de  2014.  Dirección: Cantón El Sitio. Días y horas  de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.  Miembros asistentes: 7 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1277 = new google.maps.InfoWindow({ content: contentString1277 });   
    //markers  
    var marker1277 = new google.maps.Marker({ position: point1277, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1277.UNA  LUZ EN EL CAMINO." }); 
    //information for  
    function goToLink1277() { infowindow1277.open(map,marker1277);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1277, 'click', goToLink1277); google.maps.event.addDomListener(window, 'load', initialize);
    
    //MARCADOR 1278  
    //positions 
    var point1278 = new google.maps.LatLng(13.433540, -88.593009); var contentString1278 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">26 DE MARZO.</h1>'+ '<div id="bodyContent">'+ '<p><b>26 DE MARZO.</b> , — 26 de Marzo de 2005.  Dirección:  Barrio El Calva- rio. Días y horas  de  reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m.  Miembros asistentes: 40 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1278 = new google.maps.InfoWindow({ content: contentString1278 });   
    //markers  
    var marker1278 = new google.maps.Marker({ position: point1278, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1278.26 DE MARZO." }); 
    //information for 
    function goToLink1278() { infowindow1278.open(map,marker1278);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1278, 'click', goToLink1278); google.maps.event.addDomListener(window, 'load', initialize);
    
    //MARCADOR 1279  
    //positions 
    var point1279 = new google.maps.LatLng(13.425483, -88.595112); var contentString1279 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UNA LUZ EN VILLA ESPAÑA.</h1>'+ '<div id="bodyContent">'+ '<p><b>UNA LUZ EN VILLA ESPAÑA.</b> , — 05 de Agosto de 2013. Dirección: Colonia  Villa España. Días y horas  de reuniones: De Lunes a Domin- go de 6:00 a 8:00 p.m.  Miembros asistentes: 20 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1279 = new google.maps.InfoWindow({ content: contentString1279 });   
    //markers  v
    var marker1279 = new google.maps.Marker({ position: point1279, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1279.UNA LUZ EN VILLA ESPAÑA." }); 
    //information for  
    function goToLink1279() { infowindow1279.open(map,marker1279);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1279, 'click', goToLink1279); google.maps.event.addDomListener(window, 'load', initialize);
    
    //MARCADOR 1280  
    //positions 
    var point1280 = new google.maps.LatLng(13.541016, -88.382639); var contentString1280 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UN FUTURO DE ALEGRÍA.</h1>'+ '<div id="bodyContent">'+ '<p><b>UN FUTURO DE ALEGRÍA.</b> , — 03 de Septiembre de 2003. Dirección: Cantón La Caridad. Días y horas  de  reuniones: De Lunes a Sábado de 6:00 a 8:00 p.m.  Miembros asistentes: 4 Hombres y 1 Mujer.</p>'+ '</div>'+ '</div>'; var infowindow1280 = new google.maps.InfoWindow({ content: contentString1280 });   
    //markers  
    var marker1280 = new google.maps.Marker({ position: point1280, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1280.UN FUTURO DE ALEGRÍA." }); 
    //information for  
    function goToLink1280() { infowindow1280.open(map,marker1280);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1280, 'click', goToLink1280); google.maps.event.addDomListener(window, 'load', initialize);
    
    //MARCADOR 1281  
    //positions 
    var point1281 = new google.maps.LatLng(13.284322, -88.456201); var contentString1281 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">PAZ Y SOBRIEDAD.</h1>'+ '<div id="bodyContent">'+ '<p><b>PAZ Y SOBRIEDAD.</b> , — 14 de  Octubre de  2007.  Dirección:  Colonia Altos de La Ceiba, Pasaje  Nº 2. Días y horas  de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.  Miembros asistentes: 16 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1281 = new google.maps.InfoWindow({ content: contentString1281 });   
    //markers  
    var marker1281 = new google.maps.Marker({ position: point1281, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1281.PAZ Y SOBRIEDAD." }); 
    //information for  
    function goToLink1281() { infowindow1281.open(map,marker1281);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1281, 'click', goToLink1281); google.maps.event.addDomListener(window, 'load', initialize);

    //MARCADOR 1282  
    //positions 
    var point1282 = new google.maps.LatLng(13.279268, -88.462853); var contentString1282 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">RENACER 27  DE AGOSTO.</h1>'+ '<div id="bodyContent">'+ '<p><b>RENACER 27  DE AGOSTO.</b> , — 23  de  Marzo  de  2011.  Dirección: Colonia   27  de  Agosto. Días  y  horas   de  reuniones: De  Lunes  a Domingo de 6:00 a 8:00 p.m.  Miembros asistentes: 5 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1282 = new google.maps.InfoWindow({ content: contentString1282 });   
    //markers  
    var marker1282 = new google.maps.Marker({ position: point1282, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1282.RENACER 27  DE AGOSTO." }); 
    //information for  
    function goToLink1282() { infowindow1282.open(map,marker1282);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1282, 'click', goToLink1282); google.maps.event.addDomListener(window, 'load', initialize);

    //MARCADOR 1283  
    //positions 
    var point1283 = new google.maps.LatLng(13.416486, -88.570492); var contentString1283 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">10 DE ENERO.</h1>'+ '<div id="bodyContent">'+ '<p><b>10 DE ENERO.</b> , — 10 de Enero de 2000. Dirección: Cantón El Tablón. Días y horas  de  reuniones: De Lunes a Viernes de  5:00 a 7:00 p.m. Miembros asistentes: 8 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1283 = new google.maps.InfoWindow({ content: contentString1283 });   
    //markers  
    var marker1283 = new google.maps.Marker({ position: point1283, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1283.10 DE ENERO." }); 
    //information for  
    function goToLink1283() { infowindow1283.open(map,marker1283);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1283, 'click', goToLink1283); google.maps.event.addDomListener(window, 'load', initialize);
    
    //MARCADOR 1284  
    //positions 
    var point1284 = new google.maps.LatLng(13.420467, -88.571795); var contentString1284 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">DIOS  NOS  GUÍA.</h1>'+ '<div id="bodyContent">'+ '<p><b>DIOS  NOS  GUÍA.</b> , — 19  de  Junio  de  1996.  Dirección:  Barrio  La Parroquia, costado Norte  de  La Iglesia  Católica. Días  y horas  de reuniones: De  Lunes  a  Domingo de  6:00  a  8:00  p.m.  Miembros asistentes: 24 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1284 = new google.maps.InfoWindow({ content: contentString1284 });   
    //markers  
    var marker1284 = new google.maps.Marker({ position: point1284, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1284.DIOS  NOS  GUÍA." }); 
    //information for  
    function goToLink1284() { infowindow1284.open(map,marker1284);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1284, 'click', goToLink1284); google.maps.event.addDomListener(window, 'load', initialize);
    
    //MARCADOR 1285  
    //positions 
    var point1285 = new google.maps.LatLng(13.418839, -88.570519); var contentString1285 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">DIOS, PAZ Y VOLUNTAD.</h1>'+ '<div id="bodyContent">'+ '<p><b>DIOS, PAZ Y VOLUNTAD.</b> , — 10 de Septiembre de 2010. Dirección: Cantón Los Hornos,  Colonia  Santa  Fe.  Días y horas  de  reuniones: De  Lunes  a Viernes  de  6:00  a 8:00  p.m.  Miembros asistentes: 12 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1285 = new google.maps.InfoWindow({ content: contentString1285 });   
    //markers  
    var marker1285 = new google.maps.Marker({ position: point1285, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1285.DIOS, PAZ Y VOLUNTAD." }); 
    //information for  
    function goToLink1285() { infowindow1285.open(map,marker1285);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1285, 'click', goToLink1285); google.maps.event.addDomListener(window, 'load', initialize);
    
    //MARCADOR 1286  
    //positions 
    var point1286 = new google.maps.LatLng(13.421542, -88.568984); var contentString1286 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">PERSEVERANDO POR  UNA  NUEVA  VIDA.</h1>'+ '<div id="bodyContent">'+ '<p><b>PERSEVERANDO POR  UNA  NUEVA  VIDA.</b> , — 21  de  Enero  de 2013.  Dirección:  Cantón Jobal Hornos.  Días y horas  de  reuniones: De  Lunes  a Domingo de  5:00  a 7:00  p.m.  Miembros asistentes: 3 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1286 = new google.maps.InfoWindow({ content: contentString1286 });   
    //markers  
    var marker1286 = new google.maps.Marker({ position: point1286, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1286.PERSEVERANDO POR  UNA  NUEVA  VIDA." }); 
    //information for  
    function goToLink1286() { infowindow1286.open(map,marker1286);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1286, 'click', goToLink1286); google.maps.event.addDomListener(window, 'load', initialize);

    //MARCADOR 1287  
    //positions 
    var point1287 = new google.maps.LatLng(13.418975, -88.572900); var contentString1287 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">SAN  FRANCISCO.</h1>'+ '<div id="bodyContent">'+ '<p><b>SAN  FRANCISCO.</b> , — 03  de  Agosto de  2011.  Dirección:  Barrio El Calvario al Norte  de  Telecom. Días y horas  de  reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.  Miembros asistentes: 10 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1287 = new google.maps.InfoWindow({ content: contentString1287 });   
    //markers  
    var marker1287 = new google.maps.Marker({ position: point1287, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1287.SAN  FRANCISCO." }); 
    //information for  
    function goToLink1287() { infowindow1287.open(map,marker1287);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1287, 'click', goToLink1287); google.maps.event.addDomListener(window, 'load', initialize);
    
    //MARCADOR 1288  
    //positions 
    var point1288 = new google.maps.LatLng(13.379138, -88.410720); var contentString1288 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">31  DE DICIEMBRE.</h1>'+ '<div id="bodyContent">'+ '<p><b>31  DE DICIEMBRE.</b> , — 31 de  Diciembre de  1985.  Dirección:  Barrio Analco 7a  Calle Oriente y 2a  Avenida  Norte. Casa Nº 7. Días y horas de  reuniones: De Lunes a Domingo de  6:30 a 8:00 p.m.  Miembros asistentes: 13 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1288 = new google.maps.InfoWindow({ content: contentString1288 });   
    //markers  
    var marker1288 = new google.maps.Marker({ position: point1288, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1288.31  DE DICIEMBRE." }); 
    //information for  
    function goToLink1288() { infowindow1288.open(map,marker1288);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1288, 'click', goToLink1288); google.maps.event.addDomListener(window, 'load', initialize);
    
    //MARCADOR 1289  
    //positions 
    var point1289 = new google.maps.LatLng(13.373888, -88.410527); var contentString1289 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">AL FÍN SOMOS FELICES.</h1>'+ '<div id="bodyContent">'+ '<p><b>AL FÍN SOMOS FELICES.</b> , — 14 de  Noviembre de  1998.  Dirección: Cantón Joya  Abajo.  Días y horas  de  reuniones: Lunes,  Miércoles  y Viernes de 3:30 a 5:00 p.m.  Miembros asistentes: 18 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1289 = new google.maps.InfoWindow({ content: contentString1289 });   
    //markers  
    var marker1289 = new google.maps.Marker({ position: point1289, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1289.AL FÍN SOMOS FELICES." }); 
    //information for  
    function goToLink1289() { infowindow1289.open(map,marker1289);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1289, 'click', goToLink1289); google.maps.event.addDomListener(window, 'load', initialize);
    
    //MARCADOR 1290  
    //positions 
    var point1290 = new google.maps.LatLng(13.380829, -88.414242); var contentString1290 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">CENTRAL ELENICO.</h1>'+ '<div id="bodyContent">'+ '<p><b>CENTRAL ELENICO.</b> , — 03  de  Julio  de  1982.  Dirección:  1a   Calle Poniente Nº 8, Barrio El Centro. Días y horas de reuniones: De Lunes a Domingo de 6:30 a 8:30 p.m.  Miembros asistentes: 17 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1290 = new google.maps.InfoWindow({ content: contentString1290 });   
    //markers  
    var marker1290 = new google.maps.Marker({ position: point1290, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1290.CENTRAL ELENICO." }); 
    //information for  
    function goToLink1290() { infowindow1290.open(map,marker1290);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1290, 'click', goToLink1290); google.maps.event.addDomListener(window, 'load', initialize);
    
    //MARCADOR 1291  
    //positions 
    var point1291 = new google.maps.LatLng(13.383491, -88.414253); var contentString1291 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">ILUMINADOS POR DIOS.</h1>'+ '<div id="bodyContent">'+ '<p><b>ILUMINADOS POR DIOS.</b> , — 24  de  Junio  de  2011.  Dirección:  7ª Avenida  Sur Casa  Nº  40.  Días  y horas  de  reuniones: De  Lunes  a Domingo de 6:00 a 8:00 p.m.  Miembros asistentes: 7 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1291 = new google.maps.InfoWindow({ content: contentString1291 });   
    //markers  
    var marker1291 = new google.maps.Marker({ position: point1291, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1291.ILUMINADOS POR DIOS." }); 
    //information for  
    function goToLink1291() { infowindow1291.open(map,marker1291);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1291, 'click', goToLink1291); google.maps.event.addDomListener(window, 'load', initialize);
    
    //MARCADOR 1292  
    //positions 
    var point1292 = new google.maps.LatLng(13.380652, -88.408051); var contentString1292 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">LA MANO  DE DIOS.</h1>'+ '<div id="bodyContent">'+ '<p><b>LA MANO  DE DIOS.</b> , — 12 de  Marzo de  2010.  Dirección:  1a   Calle Oriente, Santa  Elena  Colonia  Guevara. Días y horas  de  reuniones: De  Lunes  a Domingo de  6:00  a 8:00  p.m.  Miembros asistentes: 9 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1292 = new google.maps.InfoWindow({ content: contentString1292 });   
    //markers  
    var marker1292 = new google.maps.Marker({ position: point1292, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1292.LA MANO  DE DIOS." }); 
    //information for  
    function goToLink1292() { infowindow1292.open(map,marker1292);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1292, 'click', goToLink1292); google.maps.event.addDomListener(window, 'load', initialize);
    
    //MARCADOR 1293  
    //positions 
    var point1293 = new google.maps.LatLng(13.380652, -88.408051); var contentString1293 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NUEVO AMANECER.</h1>'+ '<div id="bodyContent">'+ '<p><b>NUEVO AMANECER.</b> , — 16 de Agosto de 1962.  Dirección:  6a  Calle Poniente Nº  4,  Barrio  El Calvario.  Días  y horas  de  reuniones: De Lunes  a  Domingo de  6:30  a  8:30  p.m.  Miembros asistentes:  15 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1293 = new google.maps.InfoWindow({ content: contentString1293 });  
     //markers  
    var marker1293 = new google.maps.Marker({ position: point1293, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1293.NUEVO AMANECER." }); 
    //information for  
    function goToLink1293() { infowindow1293.open(map,marker1293);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1293, 'click', goToLink1293); google.maps.event.addDomListener(window, 'load', initialize);
    
    //MARCADOR 1294  
    //positions 
    var point1294 = new google.maps.LatLng(13.385495, -88.413308); var contentString1294 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UN  MILAGRO EN  EL CASERÍO CHAVEZ QUINTANILLA.</h1>'+ '<div id="bodyContent">'+ '<p><b>UN  MILAGRO EN  EL CASERÍO CHAVEZ QUINTANILLA.</b> , — 21 de  Julio  de  2014.  Dirección:  Cantón Amate  Norte. Días  y horas de  reuniones: Miércoles  , Jueves y Sábado de  4:00  a  6:00  p.m. Miembros asistentes: 11 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1294 = new google.maps.InfoWindow({ content: contentString1294 });   
    //markers  
    var marker1294 = new google.maps.Marker({ position: point1294, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1294.UN  MILAGRO EN  EL CASERÍO CHAVEZ QUINTANILLA." }); 
    //information for  
    function goToLink1294() { infowindow1294.open(map,marker1294);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1294, 'click', goToLink1294); google.maps.event.addDomListener(window, 'load', initialize);
    
    //MARCADOR 1295  
    //positions 
    var point1295 = new google.maps.LatLng(13.334561, -88.419685); var contentString1295 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">ALEGRÍA DE VIVIR.</h1>'+ '<div id="bodyContent">'+ '<p><b>ALEGRÍA DE VIVIR.</b> , — 06 de  Febrero de  2008.  Dirección:  Colonia San Carlos, 1o Pasaje. Días y horas de reuniones: De Lunes a Domingo de 4:00 a 6:00 p.m.  Miembros asistentes: 10 Hombres y 1 Mujer.</p>'+ '</div>'+ '</div>'; var infowindow1295 = new google.maps.InfoWindow({ content: contentString1295 });   
    //markers  
    var marker1295 = new google.maps.Marker({ position: point1295, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1295.ALEGRÍA DE VIVIR." }); 
    //information for  
    function goToLink1295() { infowindow1295.open(map,marker1295);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1295, 'click', goToLink1295); google.maps.event.addDomListener(window, 'load', initialize);
    
    //MARCADOR 1296  
    //positions 
    var point1296 = new google.maps.LatLng(13.345194, -88.416853); var contentString1296 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">LA AMISTAD.</h1>'+ '<div id="bodyContent">'+ '<p><b>LA AMISTAD.</b> , — 31 de Marzo de 1986. Dirección: Barrio La Parroquia 1ª Avenida  Norte. Días y horas  de  reuniones: De Lunes a Domingo de 5:00 a 6:30 p.m.  Miembros asistentes: 8 Hombres y 1 Mujer.</p>'+ '</div>'+ '</div>'; var infowindow1296 = new google.maps.InfoWindow({ content: contentString1296 });   
    //markers  
    var marker1296 = new google.maps.Marker({ position: point1296, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1296.LA AMISTAD." }); 
    //information for  
    function goToLink1296() { infowindow1296.open(map,marker1296);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1296, 'click', goToLink1296); google.maps.event.addDomListener(window, 'load', initialize);
    
    //MARCADOR 1297  
    //positions 
    var point1297 = new google.maps.LatLng(13.344192, -88.407304); var contentString1297 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">SANTA MARÍA.</h1>'+ '<div id="bodyContent">'+ '<p><b>SANTA MARÍA.</b> , — 07 de  Diciembre de  1964.  Dirección:  Barrio El Calvario,  Calle  Principal.  Días  y horas  de  reuniones: De  Lunes  a Domingo de  5:00  a 6:30  p.m.  Miembros asistentes: 20 Hombres y 1 Mujer.</p>'+ '</div>'+ '</div>'; var infowindow1297 = new google.maps.InfoWindow({ content: contentString1297 });   
    //markers  
    var marker1297 = new google.maps.Marker({ position: point1297, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1297.SANTA MARÍA." }); 
    //information for  
    function goToLink1297() { infowindow1297.open(map,marker1297);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1297, 'click', goToLink1297); google.maps.event.addDomListener(window, 'load', initialize);
    
    //MARCADOR 1298  
    //positions 
    var point1298 = new google.maps.LatLng(13.487156, -88.474531); var contentString1298 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">01  DE AGOSTO.</h1>'+ '<div id="bodyContent">'+ '<p><b>01  DE AGOSTO.</b> , — 01 de  Agosto de  1981.  Dirección:  Colonia  El Cerrito.  Días y horas  de  reuniones: De Lunes a Domingo de  7:00 a 9:00 p.m.  Miembros asistentes: 4 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1298 = new google.maps.InfoWindow({ content: contentString1298 });   
    //markers  
    var marker1298 = new google.maps.Marker({ position: point1298, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1298.01  DE AGOSTO." }); 
    //information for 
     function goToLink1298() { infowindow1298.open(map,marker1298);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1298, 'click', goToLink1298); google.maps.event.addDomListener(window, 'load', initialize);
    
    //MARCADOR 1299  
    //positions 
    var point1299 = new google.maps.LatLng(13.489489, -88.468990); var contentString1299 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">11  DE JULIO.</h1>'+ '<div id="bodyContent">'+ '<p><b>11  DE JULIO.</b> , — 11 de  Julio de  1982.  Dirección:  Calle Principal  El Guarumal Colonia  Wanyin.  Días y horas  de  reuniones: De Lunes  a Domingo de 6:00 a 8:00 p.m.  Miembros asistentes: 14 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1299 = new google.maps.InfoWindow({ content: contentString1299 });   
    //markers  
    var marker1299 = new google.maps.Marker({ position: point1299, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1299.11  DE JULIO." }); 
    //information for  
    function goToLink1299() { infowindow1299.open(map,marker1299);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1299, 'click', goToLink1299); google.maps.event.addDomListener(window, 'load', initialize);
    
    //MARCADOR 1300  
    //positions 
    var point1300 = new google.maps.LatLng(13.486401, -88.464022); var contentString1300 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">EL CALVARIO.</h1>'+ '<div id="bodyContent">'+ '<p><b>EL CALVARIO.</b> , —  04 de Julio de 1968.  Dirección:  Barrio El Calvario, al Norte  de La Iglesia Católica. Días y horas  de reuniones: De Lunes a Domingo de 7:00 a 9:00 p.m.  Miembros asistentes: 20 Hombres. </p>'+ '</div>'+ '</div>'; var infowindow1300 = new google.maps.InfoWindow({ content: contentString1300 });   
    //markers  
    var marker1300 = new google.maps.Marker({ position: point1300, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1300.EL CALVARIO." }); 
    //information for  
    function goToLink1300() { infowindow1300.open(map,marker1300);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1300, 'click', goToLink1300); google.maps.event.addDomListener(window, 'load', initialize);
    
    //MARCADOR 1301  
    //positions 
    var point1301 = new google.maps.LatLng(13.492508, -88.456399); var contentString1301 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">GRACIAS A DIOS.</h1>'+ '<div id="bodyContent">'+ '<p><b>GRACIAS A DIOS.</b> , — 14  de  Marzo  de  1971.  Dirección:  Costado Oriente de  La Casa  Comunal del  Marquesado. Días  y horas   de reuniones: Martes, Jueves, Sábado y Domingo de  7:00 a 9:00 p.m. Miembros asistentes: 20 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1301 = new google.maps.InfoWindow({ content: contentString1301 });   
    //markers  
    var marker1301 = new google.maps.Marker({ position: point1301, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1301.GRACIAS A DIOS." }); 
    //information for  
    function goToLink1301() { infowindow1301.open(map,marker1301);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1301, 'click', goToLink1301); google.maps.event.addDomListener(window, 'load', initialize);
    
    //MARCADOR 1302 
     //positions 
    var point1302 = new google.maps.LatLng(13.484433, -88.470250); var contentString1302 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NUEVO  RENACER OROMONTIQUE.</h1>'+ '<div id="bodyContent">'+ '<p><b>NUEVO  RENACER OROMONTIQUE.</b> , —  07  de  Agosto de  2009. Dirección:  1 Cuadra antes de  Oromontique salida a Usulután  frente a La Escuela  El metropolitano, entrada a Santiago de  Maria. Días y horas  de  reuniones: Lunes, Miércoles  y Sábado de  7:00 a 9:00 p.m. Miembros asistentes: 19 Hombres y 1 Mujer.</p>'+ '</div>'+ '</div>'; var infowindow1302 = new google.maps.InfoWindow({ content: contentString1302 });   
    //markers 
     var marker1302 = new google.maps.Marker({ position: point1302, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1302.NUEVO  RENACER OROMONTIQUE." }); 
     //information for  
     function goToLink1302() { infowindow1302.open(map,marker1302);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1302, 'click', goToLink1302); google.maps.event.addDomListener(window, 'load', initialize);
    
    //MARCADOR 1303 
     //positions 
    var point1303 = new google.maps.LatLng(13.480490, -88.464826); var contentString1303 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NUEVO RENACER.</h1>'+ '<div id="bodyContent">'+ '<p><b>NUEVO RENACER.</b> , — 15 de  Febrero de  2005.  Dirección:  Caserío Joya  del Tigre. Días y horas  de  reuniones: De Lunes a Domingo de 7:00 a 9:00 p.m.  Miembros asistentes: 12 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1303 = new google.maps.InfoWindow({ content: contentString1303 });   
    //markers  
    var marker1303 = new google.maps.Marker({ position: point1303, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1303.NUEVO RENACER." }); 
    //information for  
    function goToLink1303() { infowindow1303.open(map,marker1303);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1303, 'click', goToLink1303); google.maps.event.addDomListener(window, 'load', initialize);
    
    //MARCADOR 1304 
     //positions 
    var point1304 = new google.maps.LatLng(13.482462, -88.462144); var contentString1304 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UNA LUZ EN LA OSCURIDAD.</h1>'+ '<div id="bodyContent">'+ '<p><b>UNA LUZ EN LA OSCURIDAD.</b> , — 24 de Marzo de 1991. Dirección: Calle  Principal,  Colonia  El Estadio. Días y horas  de  reuniones: De Lunes  a  Domingo de   7:00  a  9:00  p.m.   Miembros asistentes:  8 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1304 = new google.maps.InfoWindow({ content: contentString1304 });   
    //markers  
    var marker1304 = new google.maps.Marker({ position: point1304, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1304.UNA LUZ EN LA OSCURIDAD." }); 
    //information for  
    function goToLink1304() { infowindow1304.open(map,marker1304);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1304, 'click', goToLink1304); google.maps.event.addDomListener(window, 'load', initialize);
    
    //MARCADOR 1305  
    //positions 
    var point1305 = new google.maps.LatLng(13.456262, -88.491408); var contentString1305 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">FE Y ESPERANZA.</h1>'+ '<div id="bodyContent">'+ '<p><b>FE Y ESPERANZA.</b> , — 22  de  Enero  de  2013.  Dirección:  Barrio El Calvario. Días y horas  de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.  Miembros asistentes: 8 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1305 = new google.maps.InfoWindow({ content: contentString1305 });   
    //markers  
    var marker1305 = new google.maps.Marker({ position: point1305, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1305.FE Y ESPERANZA." }); 
    //information for  
    function goToLink1305() { infowindow1305.open(map,marker1305);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1305, 'click', goToLink1305); google.maps.event.addDomListener(window, 'load', initialize);
    
    //MARCADOR 1306  
    //positions 
    var point1306 = new google.maps.LatLng(13.453215, -88.489848); var contentString1306 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">RENACER 05  DE  NOVIEMBRE.</h1>'+ '<div id="bodyContent">'+ '<p><b>RENACER 05  DE  NOVIEMBRE.</b> , — 05  de  Noviembre de  1995. Dirección:  Cantón El Paso  de  Gualache. Días y horas  de  reuniones: De  Lunes  a Domingo de  6:00  a 8:00  p.m.  Miembros asistentes: 8 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1306 = new google.maps.InfoWindow({ content: contentString1306 });   
    //markers  
    var marker1306 = new google.maps.Marker({ position: point1306, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1306.RENACER 05  DE  NOVIEMBRE." }); 
    //information for  
    function goToLink1306() { infowindow1306.open(map,marker1306);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1306, 'click', goToLink1306); google.maps.event.addDomListener(window, 'load', initialize);
    
    //MARCADOR 1307  
    //positions 
    var point1307 = new google.maps.LatLng(13.353635, -88.431171); var contentString1307 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">06 DE ENERO.</h1>'+ '<div id="bodyContent">'+ '<p><b>06 DE ENERO.</b> , — 06 de  Enero  de  1979.  Dirección:  Pasaje  Nº 3 por El redondel, Colonia Las Flores. Días y horas de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.  Miembros asistentes: 8 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1307 = new google.maps.InfoWindow({ content: contentString1307 });   
    //markers  
    var marker1307 = new google.maps.Marker({ position: point1307, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1307.06 DE ENERO." }); 
    //information for  
    function goToLink1307() { infowindow1307.open(map,marker1307);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1307, 'click', goToLink1307); google.maps.event.addDomListener(window, 'load', initialize);
    
    //MARCADOR 1308  
    //positions 
    var point1308 = new google.maps.LatLng(13.346932, -88.441339); var contentString1308 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">23  DE SEPTIEMBRE.</h1>'+ '<div id="bodyContent">'+ '<p><b>23  DE SEPTIEMBRE.</b> , — 23 de  Septiembre de  1961.  Dirección:  6ª Calle Poniente y 4ª Avenida  Norte  Casa  Nº 4. Días y horas  de  reu- niones: De Lunes a Sábado de  6:00 a 8:00 p.m.  Miembros asisten- tes: 25 Hombres y 1 Mujer.</p>'+ '</div>'+ '</div>'; var infowindow1308 = new google.maps.InfoWindow({ content: contentString1308 });   
    //markers  
    var marker1308 = new google.maps.Marker({ position: point1308, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1308.23  DE SEPTIEMBRE." }); 
    //information for  
    function goToLink1308() { infowindow1308.open(map,marker1308);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1308, 'click', goToLink1308); google.maps.event.addDomListener(window, 'load', initialize);
    
    //MARCADOR 1309  
    //positions 
    var point1309 = new google.maps.LatLng(13.352851, -88.446768); var contentString1309 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">24  EN 24.</h1>'+ '<div id="bodyContent">'+ '<p><b>24  EN 24.</b> , —  05 de  Julio  de  2002.  Dirección:  Colonia  Jardínes de Candelaria 2, Calle Principal  Nº 27. Días y horas  de  reuniones: De Lunes  a  Domingo de  6:00  a  8:00  p.m.  Miembros asistentes:  12 Hombres y 3 Mujeres.</p>'+ '</div>'+ '</div>'; var infowindow1309 = new google.maps.InfoWindow({ content: contentString1309 });   
    //markers  
    var marker1309 = new google.maps.Marker({ position: point1309, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1309.24  EN 24." }); 
    //information for  
    function goToLink1309() { infowindow1309.open(map,marker1309);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1309, 'click', goToLink1309); google.maps.event.addDomListener(window, 'load', initialize);
    
    //MARCADOR 1310  
    //positions 
    var point1310 = new google.maps.LatLng(13.348326, -88.442860); var contentString1310 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">AMANECER FELICES.</h1>'+ '<div id="bodyContent">'+ '<p><b>AMANECER FELICES.</b> , — 11 de  Noviembre de  1963.  Dirección:  7ª Avenida  Norte  Nº 20 Barrio La Merced. Días y horas  de  reuniones: De  Lunes  a Viernes  de  6:00  a 8:00  p.m.  Miembros asistentes: 18 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1310 = new google.maps.InfoWindow({ content: contentString1310 });   
    //markers  
    var marker1310 = new google.maps.Marker({ position: point1310, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1310.AMANECER FELICES." }); 
    //information for  
    function goToLink1310() { infowindow1310.open(map,marker1310);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1310, 'click', goToLink1310); google.maps.event.addDomListener(window, 'load', initialize);
    
    //MARCADOR 1311  
    //positions 
    var point1311 = new google.maps.LatLng(13.341470, -88.440261); var contentString1311 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">EL CALVARIO.</h1>'+ '<div id="bodyContent">'+ '<p><b>EL CALVARIO.</b> , —  02  de   Octubre  de   1962.   Dirección:   Avenida Gregorio Melara  Nº  37.  Días  y horas  de  reuniones: De  Lunes  a Domingo de  6:00  a 8:00  p.m.  Miembros asistentes: 35 Hombres y 5 Mujeres.</p>'+ '</div>'+ '</div>'; var infowindow1311 = new google.maps.InfoWindow({ content: contentString1311 });   
    //markers  
    var marker1311 = new google.maps.Marker({ position: point1311, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1311.EL CALVARIO." }); 
    //information for  
    function goToLink1311() { infowindow1311.open(map,marker1311);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1311, 'click', goToLink1311); google.maps.event.addDomListener(window, 'load', initialize);
    
    //MARCADOR 1312  
    //positions 
    var point1312 = new google.maps.LatLng(13.339241, -88.436366); var contentString1312 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">FE Y ACCIÓN.</h1>'+ '<div id="bodyContent">'+ '<p><b>FE Y ACCIÓN.</b> , — 12 de  Diciembre de  1967.  Dirección:  8ª Avenida Sur Nº 28, Barrio El Calvario. Días y horas  de reuniones: De Lunes a Domingo de  6:00  a 8:00  p.m.  Miembros asistentes: 25 Hombres y 1 Mujer.</p>'+ '</div>'+ '</div>'; var infowindow1312 = new google.maps.InfoWindow({ content: contentString1312 });   
    //markers  
    var marker1312 = new google.maps.Marker({ position: point1312, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1312.FE Y ACCIÓN." }); 
    //information for  
    function goToLink1312() { infowindow1312.open(map,marker1312);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1312, 'click', goToLink1312); google.maps.event.addDomListener(window, 'load', initialize);
    
    //MARCADOR 1313  
    //positions 
    var point1313 = new google.maps.LatLng(13.348944, -88.441982); var contentString1313 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">HAGAMOSLO SENCILLO.</h1>'+ '<div id="bodyContent">'+ '<p><b>HAGAMOSLO SENCILLO.</b> , — 10  de  Julio  de  2010.  Dirección:  5ª Avenida,  Barrio La Merced. Días y horas  de  reuniones: De Lunes a Domingo de 7:00 a 9:00 p.m.  Miembros asistentes: 20 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1313 = new google.maps.InfoWindow({ content: contentString1313 });   
    //markers  
    var marker1313 = new google.maps.Marker({ position: point1313, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1313.HAGAMOSLO SENCILLO." }); 
    //information for  
    function goToLink1313() { infowindow1313.open(map,marker1313);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1313, 'click', goToLink1313); google.maps.event.addDomListener(window, 'load', initialize);
    
    //MARCADOR 1314  
    //positions 
    var point1314 = new google.maps.LatLng(13.356773, -88.435794); var contentString1314 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">HEREDADOS DE DIOS.</h1>'+ '<div id="bodyContent">'+ '<p><b>HEREDADOS DE DIOS.</b> , — 07 de  Septiembre de  1976.  Dirección: Colonia  Peralta. Días y horas  de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.  Miembros asistentes: 5 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1314 = new google.maps.InfoWindow({ content: contentString1314 });   
    //markers 
     var marker1314 = new google.maps.Marker({ position: point1314, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1314.HEREDADOS DE DIOS." }); 
     //information for  
     function goToLink1314() { infowindow1314.open(map,marker1314);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1314, 'click', goToLink1314); google.maps.event.addDomListener(window, 'load', initialize);
    
    //MARCADOR 1315  
    //positions 
    var point1315 = new google.maps.LatLng(13.331264, -88.438612); var contentString1315 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NARANJO.</h1>'+ '<div id="bodyContent">'+ '<p><b>NARANJO.</b> , —  06  de  Noviembre de  1980.  Dirección:  Pasaje  Nº  4 Colonia El Naranjo. Días y horas  de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.  Miembros asistentes: 10 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1315 = new google.maps.InfoWindow({ content: contentString1315 });   
    //markers  
    var marker1315 = new google.maps.Marker({ position: point1315, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1315.NARANJO." }); 
    //information for  
    function goToLink1315() { infowindow1315.open(map,marker1315);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1315, 'click', goToLink1315); google.maps.event.addDomListener(window, 'load', initialize);
    
    //MARCADOR 1316  
    //positions 
    var point1316 = new google.maps.LatLng(13.382992, -88.453878); var contentString1316 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NUEVA  FUENTE DE VIDA Y SALVACIÓN.</h1>'+ '<div id="bodyContent">'+ '<p><b>NUEVA  FUENTE DE VIDA Y SALVACIÓN.</b> , —  05  de  Noviembre de  2012.  Dirección:  Cantón El Cerrito,  Usulután.  Días  y horas  de reuniones: De  Lunes  a  Domingo de  6:00  a  8:00  p.m.  Miembros asistentes: 14 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1316 = new google.maps.InfoWindow({ content: contentString1316 });   
    //markers  
    var marker1316 = new google.maps.Marker({ position: point1316, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1316.NUEVA  FUENTE DE VIDA Y SALVACIÓN." }); 
    //information for  
    function goToLink1316() { infowindow1316.open(map,marker1316);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1316, 'click', goToLink1316); google.maps.event.addDomListener(window, 'load', initialize);
    
    //MARCADOR 1317  
    //positions 
    var point1317 = new google.maps.LatLng(13.354610, -88.447108); var contentString1317 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">RENACER 27 DE AGOSTO.</h1>'+ '<div id="bodyContent">'+ '<p><b>RENACER 27 DE AGOSTO.</b> , — 25 de Marzo de 2011. Dirección: Calle a Puerto Parada Colonia  27 de  Agosto. Días y horas  de  reuniones: Viernes de 6:00 a 8:00 p.m.  Miembros asistentes: 4 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1317 = new google.maps.InfoWindow({ content: contentString1317 });   
    //markers  
    var marker1317 = new google.maps.Marker({ position: point1317, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1317.RENACER 27 DE AGOSTO." }); 
    //information for  
    function goToLink1317() { infowindow1317.open(map,marker1317);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1317, 'click', goToLink1317); google.maps.event.addDomListener(window, 'load', initialize);
    
    //MARCADOR 1318  
    //positions 
    var point1318 = new google.maps.LatLng(13.337866, -88.451872); var contentString1318 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">SALVACIÓN EN A.A.</h1>'+ '<div id="bodyContent">'+ '<p><b>SALVACIÓN EN A.A.</b> , — 21 de Octubre de 2008. Dirección: Colonia Altamira Avenida  Principal  Pasaje  Nº 2. Días y horas  de  reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m.  Miembros asistentes: 15 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1318 = new google.maps.InfoWindow({ content: contentString1318 });   
    //markers  
    var marker1318 = new google.maps.Marker({ position: point1318, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1318.SALVACIÓN EN A.A." }); 
    //information for  
    function goToLink1318() { infowindow1318.open(map,marker1318);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1318, 'click', goToLink1318); google.maps.event.addDomListener(window, 'load', initialize);
    
    //MARCADOR 1319  
    //positions 
    var point1319 = new google.maps.LatLng(13.350422, -88.432179); var contentString1319 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">SENDEROS DE VIDA.</h1>'+ '<div id="bodyContent">'+ '<p><b>SENDEROS DE VIDA.</b> , — 01 de Abril de 2002.  Dirección:  Pasaje  Nº 1, Colonia Leiva. Días y horas de reuniones: De Lunes a Domingo de 6:30 a 8:30 p.m.  Miembros asistentes: 17 Hombres y 1 Mujer.</p>'+ '</div>'+ '</div>'; var infowindow1319 = new google.maps.InfoWindow({ content: contentString1319 });   
    //markers  
    var marker1319 = new google.maps.Marker({ position: point1319, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1319.SENDEROS DE VIDA." }); //information for  function goToLink1319() { infowindow1319.open(map,marker1319);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1319, 'click', goToLink1319); google.maps.event.addDomListener(window, 'load', initialize);
    
    //MARCADOR 1320  
    //positions 
    var point1320 = new google.maps.LatLng(13.355195, -88.435521); var contentString1320 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UN DÍA FELIZ EN A.A.</h1>'+ '<div id="bodyContent">'+ '<p><b>UN DÍA FELIZ EN A.A.</b> , — 28 de Febrero de 1968. Dirección: Cantón Palo Galán. Días y horas de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.  Miembros asistentes: 30 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1320 = new google.maps.InfoWindow({ content: contentString1320 });   
    //markers  
    var marker1320 = new google.maps.Marker({ position: point1320, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1320.UN DÍA FELIZ EN A.A." }); 
    //information for  
    function goToLink1320() { infowindow1320.open(map,marker1320);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1320, 'click', goToLink1320); google.maps.event.addDomListener(window, 'load', initialize);
    
    //MARCADOR 1321  
    //positions 
    var point1321 = new google.maps.LatLng(13.331311, -88.429615); var contentString1321 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UNA  LUZ EN  EL LIMÓN.</h1>'+ '<div id="bodyContent">'+ '<p><b>UNA  LUZ EN  EL LIMÓN.</b> , — 11  Diciembre de  2011.  Dirección: Caserío El Limón Puerto Parada, Cantón Salinas.  Días  y horas  de reuniones: De  Lunes  a  Domingo de  5:00  a  6:30  p.m.  Miembros asistentes: 1 Hombre y 1 Mujer.</p>'+ '</div>'+ '</div>'; var infowindow1321 = new google.maps.InfoWindow({ content: contentString1321 });   
    //markers  
    var marker1321 = new google.maps.Marker({ position: point1321, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1321.UNA  LUZ EN  EL LIMÓN." }); 
    //information for  
    function goToLink1321() { infowindow1321.open(map,marker1321);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1321, 'click', goToLink1321); google.maps.event.addDomListener(window, 'load', initialize);
    
    //MARCADOR 1322  
    //positions 
    var point1322 = new google.maps.LatLng(13.3516095,-88.4385735); var contentString1322 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UNA  LUZ EN  EL PENAL  (INSTITUCIONAL).</h1>'+ '<div id="bodyContent">'+ '<p><b>UNA  LUZ EN  EL PENAL  (INSTITUCIONAL).</b> , — 04  de  Febrero de  2002.   Dirección:   Centro Penal  de  Usulután.   Días  y horas   de reuniones: Viernes  de  1:30  a 3:30  p.m.  Miembros asistentes: 100 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1322 = new google.maps.InfoWindow({ content: contentString1322 });   
    //markers  
    var marker1322 = new google.maps.Marker({ position: point1322, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1322.UNA  LUZ EN  EL PENAL  (INSTITUCIONAL)." }); 
    //information for  
    function goToLink1322() { infowindow1322.open(map,marker1322);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1322, 'click', goToLink1322); google.maps.event.addDomListener(window, 'load', initialize);
    
    //MARCADOR 1323  
    //positions 
    var point1323 = new google.maps.LatLng(13.351367, -88.434137); var contentString1323 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UNA LUZ EN LA CRUZ.</h1>'+ '<div id="bodyContent">'+ '<p><b>UNA LUZ EN LA CRUZ.</b> , — 21 de Octubre de 1978. Dirección:  Calle Principal  Colonia  La Cruz. Días y horas  de  reuniones: De  Lunes  a Domingo de 6:00 a 8:00 p.m.  Miembros asistentes: 10 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1323 = new google.maps.InfoWindow({ content: contentString1323 });   
    //markers  
    var marker1323 = new google.maps.Marker({ position: point1323, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1323.UNA LUZ EN LA CRUZ." }); 
    //information for  
    function goToLink1323() { infowindow1323.open(map,marker1323);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1323, 'click', goToLink1323); google.maps.event.addDomListener(window, 'load', initialize);
    
    //MARCADOR 1324  
    //positions 
    var point1324 = new google.maps.LatLng(13.332396, -88.444963); var contentString1324 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UNA LUZ EN LA FLORIDA.</h1>'+ '<div id="bodyContent">'+ '<p><b>UNA LUZ EN LA FLORIDA.</b> , — 27 de Julio de 1998. Dirección: Calle Principal,  Colonia  Florida.  Días y horas  de  reuniones: De  Lunes  a Domingo de 7:00 a 9:00 p.m.  Miembros asistentes: 10 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1324 = new google.maps.InfoWindow({ content: contentString1324 });   
    //markers  
    var marker1324 = new google.maps.Marker({ position: point1324, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1324.UNA LUZ EN LA FLORIDA." }); 
    //information for  
    function goToLink1324() { infowindow1324.open(map,marker1324);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1324, 'click', goToLink1324); google.maps.event.addDomListener(window, 'load', initialize);
    
    //MARCADOR 1325  
    //positions 
    var point1325 = new google.maps.LatLng(13.327259, -88.444619); var contentString1325 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UNA  LUZ EN  LA POZA.</h1>'+ '<div id="bodyContent">'+ '<p><b>UNA  LUZ EN  LA POZA.</b> , —  11  de   Marzo  de   2011.   Dirección: Lotificación Valle Nuevo  Cantón La Poza. Días y horas  de reuniones: De  Lunes  a Domingo de  6:00  a 8:00  p.m.  Miembros asistentes: 9 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1325 = new google.maps.InfoWindow({ content: contentString1325 });   
    //markers  
    var marker1325 = new google.maps.Marker({ position: point1325, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1325.UNA  LUZ EN  LA POZA." }); 
    //information for  
    function goToLink1325() { infowindow1325.open(map,marker1325);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1325, 'click', goToLink1325); google.maps.event.addDomListener(window, 'load', initialize);





    

}

