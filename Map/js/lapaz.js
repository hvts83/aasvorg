
function initialize() {


    //Map parametrs
    var mapOptions = {
        zoom: 10,
        center: new google.maps.LatLng(13.501489, -88.870563),
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




//MARCADOR 1026 
//positions 
var point1026 = new google.maps.LatLng(13.550582, -89.096773); var contentString1026 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">RENACIMIENTO.</h1>'+ '<div id="bodyContent">'+ '<p><b>RENACIMIENTO.</b> , — 07 de Junio de 1970. Dirección: Calle Principal, Barrio San Isidro. Cuyultitán. Días y horas  de  reuniones: De Lunes a Domingo de 7:00 a 9:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow1026 = new google.maps.InfoWindow({ content: contentString1026 }); 
//markers 
var marker1026 = new google.maps.Marker({ position: point1026, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1026.RENACIMIENTO." }); 
//information for 
function goToLink1026() { infowindow1026.open(map,marker1026); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1026, 'click', goToLink1026); google.maps.event.addDomListener(window, 'load', initialize);





//MARCADOR 1027 
//positions 
var point1027 = new google.maps.LatLng(13.507270, -89.025583); var contentString1027 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">ASUNCIÓN AMATEPEC.</h1>'+ '<div id="bodyContent">'+ '<p><b>ASUNCIÓN AMATEPEC.</b> , — 01 de Abril de 1973. Dirección: Cantón Asunción  Amatepec, Rosario  La Paz.  Días  y horas  de  reuniones: De  Lunes  a Domingo de  7:00  a 9:00  p.m.  </p>'+ '</div>'+ '</div>'; var infowindow1027 = new google.maps.InfoWindow({ content: contentString1027 }); 
//markers 
var marker1027 = new google.maps.Marker({ position: point1027, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1027.ASUNCIÓN AMATEPEC." }); 
//information for 
function goToLink1027() { infowindow1027.open(map,marker1027); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1027, 'click', goToLink1027); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1028 
//positions 
var point1028 = new google.maps.LatLng(13.496272, -89.025924); var contentString1028 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NUEVA  VIDA  26   DE  OCTUBRE.</h1>'+ '<div id="bodyContent">'+ '<p><b>NUEVA  VIDA  26   DE  OCTUBRE.</b> , — 29  de   Octubre  de   2005. Dirección:  Calle Principal, Rosario La Paz. Días y horas  de reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow1028 = new google.maps.InfoWindow({ content: contentString1028 }); 
//markers 
var marker1028 = new google.maps.Marker({ position: point1028, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1028.NUEVA  VIDA  26   DE  OCTUBRE." }); 
//information for 
function goToLink1028() { infowindow1028.open(map,marker1028); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1028, 'click', goToLink1028); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1029 
//positions 
var point1029 = new google.maps.LatLng(13.496483, -89.022928); var contentString1029 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NUEVO RENACER.</h1>'+ '<div id="bodyContent">'+ '<p><b>NUEVO RENACER.</b> , — 01 de Mayo de 2009. Dirección:  Colonia San Francisco,  El Pedregal, Rosario  La Paz. Días y horas  de  reuniones: De  Lunes  a Domingo de  6:00  a 8:00  p.m.  </p>'+ '</div>'+ '</div>'; var infowindow1029 = new google.maps.InfoWindow({ content: contentString1029 }); 
//markers 
var marker1029 = new google.maps.Marker({ position: point1029, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1029.NUEVO RENACER." }); 
//information for 
function goToLink1029() { infowindow1029.open(map,marker1029); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1029, 'click', goToLink1029); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1030 
//positions 
var point1030 = new google.maps.LatLng(13.498623, -89.028161); var contentString1030 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UN  RENACER EN  LA  ESPERANZA.</h1>'+ '<div id="bodyContent">'+ '<p><b>UN  RENACER EN  LA  ESPERANZA.</b> , —  01  de   Julio   de   2006. Dirección:   Barrio  La Esperanza, Rosario  La Paz.  Días  y horas   de reuniones: De  Lunes  a  Domingo de  7:00  a  9:00  p.m.  </p>'+ '</div>'+ '</div>'; var infowindow1030 = new google.maps.InfoWindow({ content: contentString1030 }); 
//markers 
var marker1030 = new google.maps.Marker({ position: point1030, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1030.UN  RENACER EN  LA  ESPERANZA." }); 
//information for 
function goToLink1030() { infowindow1030.open(map,marker1030); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1030, 'click', goToLink1030); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1031 
//positions 
var point1031 = new google.maps.LatLng(13.499535, -89.029749); var contentString1031 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UN  RENACER EN  LA PAZ.</h1>'+ '<div id="bodyContent">'+ '<p><b>UN  RENACER EN  LA PAZ.</b> , —  15  de  Mayo  de  1973.  Dirección: Barrio San José, Rosario La Paz. Días y horas de reuniones: De Lunes a Domingo de 7:00 a 9:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow1031 = new google.maps.InfoWindow({ content: contentString1031 }); 
//markers 
var marker1031 = new google.maps.Marker({ position: point1031, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1031.UN  RENACER EN  LA PAZ." }); 
//information for 
function goToLink1031() { infowindow1031.open(map,marker1031); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1031, 'click', goToLink1031); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1032 
//positions 
var point1032 = new google.maps.LatLng(13.490693, -89.024697); var contentString1032 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UNA  LUZ EN LA PROVIDENCIA.</h1>'+ '<div id="bodyContent">'+ '<p><b>UNA  LUZ EN LA PROVIDENCIA.</b> , — 01  de  Noviembre de  2001. Dirección:  Colonia  La Divina Providencia, Desvío  Las Isletas  Calle a La Herradura, Rosario  La Paz. Días y horas  de  reuniones: De Lunes a Domingo de 7:00 a 9:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow1032 = new google.maps.InfoWindow({ content: contentString1032 }); 
//markers 
var marker1032 = new google.maps.Marker({ position: point1032, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1032.UNA  LUZ EN LA PROVIDENCIA." }); 
//information for 
function goToLink1032() { infowindow1032.open(map,marker1032); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1032, 'click', goToLink1032); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1033 
//positions 
var point1033 = new google.maps.LatLng(13.493535, -89.035415); var contentString1033 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">21  DE OCTUBRE SANTA CRUZ EL TUNAL.</h1>'+ '<div id="bodyContent">'+ '<p><b>21  DE OCTUBRE SANTA CRUZ EL TUNAL.</b> , — 21 de  Octubre de 1977. Dirección:  Km. 40 a Rosario La Paz. Días y horas  de reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow1033 = new google.maps.InfoWindow({ content: contentString1033 }); 
//markers 
var marker1033 = new google.maps.Marker({ position: point1033, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1033.21  DE OCTUBRE SANTA CRUZ EL TUNAL." }); 
//information for 
function goToLink1033() { infowindow1033.open(map,marker1033); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1033, 'click', goToLink1033); google.maps.event.addDomListener(window, 'load', initialize);






//MARCADOR 1034 
//positions 
var point1034 = new google.maps.LatLng(13.567052, -89.108040); var contentString1034 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">BUENA ESPERANZA.</h1>'+ '<div id="bodyContent">'+ '<p><b>BUENA ESPERANZA.</b> , — 20 de Febrero de 1972. Dirección: Cantón La Esperanza, Antigua Carretera a Zacatecoluca Km. 19 ½, Olocuilta. Días y horas  de reuniones: De Lunes a Domingo de 7:00 a 9:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow1034 = new google.maps.InfoWindow({ content: contentString1034 }); 
//markers 
var marker1034 = new google.maps.Marker({ position: point1034, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1034.BUENA ESPERANZA." }); 
//information for 
function goToLink1034() { infowindow1034.open(map,marker1034); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1034, 'click', goToLink1034); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1035 
//positions 
var point1035 = new google.maps.LatLng(13.565557, -89.112616); var contentString1035 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">CENTRAL OLOCUILTENSE.</h1>'+ '<div id="bodyContent">'+ '<p><b>CENTRAL OLOCUILTENSE.</b> , —  26  de  Marzo  de  1982.  Dirección: Calle Principal, Barrio San José, Olocuilta. Días y horas de reuniones: De Lunes a Domingo de  7:00 a 9:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow1035 = new google.maps.InfoWindow({ content: contentString1035 }); 
//markers 
var marker1035 = new google.maps.Marker({ position: point1035, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1035.CENTRAL OLOCUILTENSE." }); 
//information for 
function goToLink1035() { infowindow1035.open(map,marker1035); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1035, 'click', goToLink1035); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1036 
//positions 
var point1036 = new google.maps.LatLng(13.568946, -89.115623); var contentString1036 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">MARAVILLA  DEL SIGLO XX.</h1>'+ '<div id="bodyContent">'+ '<p><b>MARAVILLA  DEL SIGLO XX.</b> , — 25  de  Junio  de  1988.  Dirección: Barrio  El  Carmen,  Calle   Vía  Tejera   Olocuilta.  Días  y  horas   de reuniones: De  Lunes  a  Domingo de  7:30  a  9:30  p.m. </p>'+ '</div>'+ '</div>'; var infowindow1036 = new google.maps.InfoWindow({ content: contentString1036 }); 
//markers 
var marker1036 = new google.maps.Marker({ position: point1036, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1036.MARAVILLA  DEL SIGLO XX." }); 
//information for 
function goToLink1036() { infowindow1036.open(map,marker1036); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1036, 'click', goToLink1036); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1037 
//positions 
var point1037 = new google.maps.LatLng(13.568783, -89.117854); var contentString1037 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NUEVO AMANECER.</h1>'+ '<div id="bodyContent">'+ '<p><b>NUEVO AMANECER.</b> , — 01 de Agosto de 2007. Dirección: Avenida Principal,   4ª  Calle  Tihuapa,  Colonia   Montelimar,  Olocuilta.  Días y horas  de  reuniones: De  Lunes  a Sábado de  7:00  a 9:00  p.m.  y Domingo de  6:00 a 8:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow1037 = new google.maps.InfoWindow({ content: contentString1037 }); 
//markers 
var marker1037 = new google.maps.Marker({ position: point1037, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1037.NUEVO AMANECER." }); 
//information for 
function goToLink1037() { infowindow1037.open(map,marker1037); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1037, 'click', goToLink1037); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1038 
//positions 
var point1038 = new google.maps.LatLng(13.567677, -89.117641); var contentString1038 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">15  DE  MAYO.</h1>'+ '<div id="bodyContent">'+ '<p><b>15  DE  MAYO.</b> , —  15  de  Mayo  de  1982.  Dirección:  Cantón Valle Nuevo, Olocuilta. Días y horas  de  reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow1038 = new google.maps.InfoWindow({ content: contentString1038 }); 
//markers 
var marker1038 = new google.maps.Marker({ position: point1038, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1038.15  DE  MAYO." }); 
//information for 
function goToLink1038() { infowindow1038.open(map,marker1038); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1038, 'click', goToLink1038); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1039 
//positions 
var point1039 = new google.maps.LatLng(13.567441, -89.118825); var contentString1039 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">RESURGIMIENTO.</h1>'+ '<div id="bodyContent">'+ '<p><b>RESURGIMIENTO.</b> , — 19  de  Junio   de  1970.  Dirección:   Barrio  El Calvario,  Calle  Principal  Olocuilta. Días  y horas  de  reuniones: De Lunes  a  Domingo de   7:00  a  9:00  p.m.   </p>'+ '</div>'+ '</div>'; var infowindow1039 = new google.maps.InfoWindow({ content: contentString1039 }); 
//markers 
var marker1039 = new google.maps.Marker({ position: point1039, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1039.RESURGIMIENTO." }); 
//information for 
function goToLink1039() { infowindow1039.open(map,marker1039); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1039, 'click', goToLink1039); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1040 
//positions 
var point1040 = new google.maps.LatLng(13.575126, -89.113894); var contentString1040 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">POR UN MILAGRO DE DIOS.</h1>'+ '<div id="bodyContent">'+ '<p><b>POR UN MILAGRO DE DIOS.</b> , — 10 de Agosto de 1983. Dirección: El Cimarrón  Cantón El Chilamate, Olocuilta. Días y horas de reuniones: De Lunes a Domingo de  6:30 a 8:30 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow1040 = new google.maps.InfoWindow({ content: contentString1040 }); 
//markers 
var marker1040 = new google.maps.Marker({ position: point1040, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1040.POR UN MILAGRO DE DIOS." }); 
//information for 
function goToLink1040() { infowindow1040.open(map,marker1040); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1040, 'click', goToLink1040); google.maps.event.addDomListener(window, 'load', initialize);







//MARCADOR 1041 
//positions 
var point1041 = new google.maps.LatLng(13.637721, -88.960969); var contentString1041 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">FE Y ESPERANZA 31 DE DICIEMBRE.</h1>'+ '<div id="bodyContent">'+ '<p><b>FE Y ESPERANZA 31 DE DICIEMBRE.</b> , — 31 de Diciembre de 1977. Dirección:  Calle Marcelino  Durán,  Barrio El Centro Nº 2, Paraíso  de Osorio.  Días y horas  de  reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow1041 = new google.maps.InfoWindow({ content: contentString1041 }); 
//markers 
var marker1041 = new google.maps.Marker({ position: point1041, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1041.FE Y ESPERANZA 31 DE DICIEMBRE." }); 
//information for 
function goToLink1041() { infowindow1041.open(map,marker1041); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1041, 'click', goToLink1041); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1042 
//positions 
var point1042 = new google.maps.LatLng(13.636761, -88.964284); var contentString1042 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UNA LUZ EN MI CALVARIO.</h1>'+ '<div id="bodyContent">'+ '<p><b>UNA LUZ EN MI CALVARIO.</b> , — 29 de Octubre de 1985.  Dirección: Paraíso  de  Osorio.  Días y horas  de  reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow1042 = new google.maps.InfoWindow({ content: contentString1042 }); 
//markers 
var marker1042 = new google.maps.Marker({ position: point1042, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1042.UNA LUZ EN MI CALVARIO." }); 
//information for 
function goToLink1042() { infowindow1042.open(map,marker1042); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1042, 'click', goToLink1042); google.maps.event.addDomListener(window, 'load', initialize);






//MARCADOR 1043 
//positions 
var point1043 = new google.maps.LatLng(13.569226, -89.036977); var contentString1043 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">28  DE AGOSTO.</h1>'+ '<div id="bodyContent">'+ '<p><b>28  DE AGOSTO.</b> , — 28 de  Agosto de  1996.  Dirección:  Colonia  El Mangal  Cantón El Socorro, San  Antonio  Masahuat. Días  y horas de  reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m.</p>'+ '</div>'+ '</div>'; var infowindow1043 = new google.maps.InfoWindow({ content: contentString1043 }); 
//markers 
var marker1043 = new google.maps.Marker({ position: point1043, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1043.28  DE AGOSTO." }); 
//information for 
function goToLink1043() { infowindow1043.open(map,marker1043); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1043, 'click', goToLink1043); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1044 
//positions 
var point1044 = new google.maps.LatLng(13.568705, -89.038278); var contentString1044 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">PRIMERA TRADICIÓN.</h1>'+ '<div id="bodyContent">'+ '<p><b>PRIMERA TRADICIÓN.</b> , — 01 de Junio  de 1980. Dirección:  Barrio El Centro, San Antonio Masahuat. Días y horas de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow1044 = new google.maps.InfoWindow({ content: contentString1044 }); 
//markers 
var marker1044 = new google.maps.Marker({ position: point1044, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1044.PRIMERA TRADICIÓN." }); 
//information for 
function goToLink1044() { infowindow1044.open(map,marker1044); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1044, 'click', goToLink1044); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1045 
//positions 
var point1045 = new google.maps.LatLng(13.565356, -89.036416); var contentString1045 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UN  RENACER EN LA INSTANCIA.</h1>'+ '<div id="bodyContent">'+ '<p><b>UN  RENACER EN LA INSTANCIA.</b> , — 01  de  Diciembre de  1999. Dirección:  Cantón San  José La Instancia, San  Antonio  Masahuat. Días y horas  de reuniones: De Lunes a Domingo de 5:00 a 7:00 p.m.</p>'+ '</div>'+ '</div>'; var infowindow1045 = new google.maps.InfoWindow({ content: contentString1045 });
 //markers
  var marker1045 = new google.maps.Marker({ position: point1045, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1045.UN  RENACER EN LA INSTANCIA." }); 
  //information for 
  function goToLink1045() { infowindow1045.open(map,marker1045); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1045, 'click', goToLink1045); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1046 
//positions 
var point1046 = new google.maps.LatLng(13.570442, -89.039223); var contentString1046 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UNA  LUZ DE  DIOS  EN  LA PALMA.</h1>'+ '<div id="bodyContent">'+ '<p><b>UNA  LUZ DE  DIOS  EN  LA PALMA.</b> , —  17  de   Abril  de   1977. Dirección:  Cantón San  Antonio  La Loma,  San  Antonio  Masahuat. Días y horas  de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow1046 = new google.maps.InfoWindow({ content: contentString1046 }); 
//markers 
var marker1046 = new google.maps.Marker({ position: point1046, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1046.UNA  LUZ DE  DIOS  EN  LA PALMA." }); 
//information for 
function goToLink1046() { infowindow1046.open(map,marker1046); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1046, 'click', goToLink1046); google.maps.event.addDomListener(window, 'load', initialize);





//MARCADOR 1047 
//positions 
var point1047 = new google.maps.LatLng(13.651353, -88.977595); var contentString1047 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">BENDICIÓN DE DIOS.</h1>'+ '<div id="bodyContent">'+ '<p><b>BENDICIÓN DE DIOS.</b> , — 01 de Febrero de 2003.  Dirección:  Barrio El Centro, San  Emigdio.   Días  y horas  de  reuniones: De  Lunes  a Domingo de 6:00 a 8:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow1047 = new google.maps.InfoWindow({ content: contentString1047 });
 //markers
  var marker1047 = new google.maps.Marker({ position: point1047, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1047.BENDICIÓN DE DIOS." }); 
  //information for 
  function goToLink1047() { infowindow1047.open(map,marker1047); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1047, 'click', goToLink1047); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1048 
//positions 
var point1048 = new google.maps.LatLng(13.648580, -88.976694); var contentString1048 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">SIGNO DE VIDA.</h1>'+ '<div id="bodyContent">'+ '<p><b>SIGNO DE VIDA.</b> , — 08 de  Febrero de  2013.  Dirección:  Calle a La Cancha, Barrio El Centro. Días  y horas  de  reuniones: De  Lunes  a Domingo de 6:00 a 8:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow1048 = new google.maps.InfoWindow({ content: contentString1048 }); 
//markers 
var marker1048 = new google.maps.Marker({ position: point1048, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1048.SIGNO DE VIDA." }); 
//information for 
function goToLink1048() { infowindow1048.open(map,marker1048); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1048, 'click', goToLink1048); google.maps.event.addDomListener(window, 'load', initialize);






//MARCADOR 1050 
//positions 
var point1050 = new google.maps.LatLng(13.608801, -89.093440); var contentString1050 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">22  DE DICIEMBRE.</h1>'+ '<div id="bodyContent">'+ '<p><b>22  DE DICIEMBRE.</b> , — 22 de  Diciembre de  2003.  Dirección:  Barrio El Rosario,  San  Francisco  Chinameca. Días  y horas  de  reuniones: De  Lunes  a Domingo de  7:00  a 9:00  p.m.  </p>'+ '</div>'+ '</div>'; var infowindow1050 = new google.maps.InfoWindow({ content: contentString1050 }); 
//markers 
var marker1050 = new google.maps.Marker({ position: point1050, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1050.22  DE DICIEMBRE." }); 
//information for 
function goToLink1050() { infowindow1050.open(map,marker1050); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1050, 'click', goToLink1050); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1051 
//positions 
var point1051 = new google.maps.LatLng(13.606309, -89.094927); var contentString1051 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">3ª TRADICIÓN.</h1>'+ '<div id="bodyContent">'+ '<p><b>3ª TRADICIÓN.</b> , — 30 de  Marzo de  1973.  Dirección:  Calle Principal. Barrio San Francisco. Días y horas de reuniones: De Lunes a Domingo de 7:00 a 9:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow1051 = new google.maps.InfoWindow({ content: contentString1051 }); 
//markers 
var marker1051 = new google.maps.Marker({ position: point1051, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1051.3ª TRADICIÓN." }); 
//information for 
function goToLink1051() { infowindow1051.open(map,marker1051); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1051, 'click', goToLink1051); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1052 
//positions 
var point1052 = new google.maps.LatLng(13.603161, -89.093640); var contentString1052 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">FE Y ESPERANZA.</h1>'+ '<div id="bodyContent">'+ '<p><b>FE Y ESPERANZA.</b> , —  14  de  Junio   de  2009.   Dirección:   Cantón Candelaria, San  Francisco  Chinameca. Días y horas  de  reuniones: De  Lunes  a Domingo de  6:00  a 8:00  p.m.  </p>'+ '</div>'+ '</div>'; var infowindow1052 = new google.maps.InfoWindow({ content: contentString1052 }); 
//markers 
var marker1052 = new google.maps.Marker({ position: point1052, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1052.FE Y ESPERANZA." }); 
//information for 
function goToLink1052() { infowindow1052.open(map,marker1052); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1052, 'click', goToLink1052); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1053 
//positions 
var point1053 = new google.maps.LatLng(13.601987, -89.093640); var contentString1053 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">LUZ Y  ESPERANZA.</h1>'+ '<div id="bodyContent">'+ '<p><b>LUZ Y  ESPERANZA.</b> , —  27  de   Septiembre de   2003.   Dirección: Cantón Los  Planes   Concepción, San  Francisco   Chinameca.  Días y horas  de  reuniones: De  Lunes  a  Domingo de  6:00  a  8:00  p.m. </p>'+ '</div>'+ '</div>'; var infowindow1053 = new google.maps.InfoWindow({ content: contentString1053 }); 
//markers 
var marker1053 = new google.maps.Marker({ position: point1053, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1053.LUZ Y  ESPERANZA." }); 
//information for 
function goToLink1053() { infowindow1053.open(map,marker1053); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1053, 'click', goToLink1053); google.maps.event.addDomListener(window, 'load', initialize);





//MARCADOR 1054 
//positions 
var point1054 = new google.maps.LatLng(13.505817, -88.896777); var contentString1054 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">03 DE ABRIL.</h1>'+ '<div id="bodyContent">'+ '<p><b>03 DE ABRIL.</b> , — 03 de Marzo de 1982.  Dirección:  Barrio El Calvario San Juan Nonualco. Días y horas de reuniones: De Lunes a Domingo de 6:30 a 8:30 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow1054 = new google.maps.InfoWindow({ content: contentString1054 }); //markers var marker1054 = new google.maps.Marker({ position: point1054, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1054.03 DE ABRIL." }); //information for function goToLink1054() { infowindow1054.open(map,marker1054); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1054, 'click', goToLink1054); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1055 
//positions 
var point1055 = new google.maps.LatLng(13.507045, -88.898624); var contentString1055 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">03  DE  SEPTIEMBRE.</h1>'+ '<div id="bodyContent">'+ '<p><b>03  DE  SEPTIEMBRE.</b> , — 03  de  Septiembre de  1981.   Dirección: Barrio Santa  Rita. San  Juan  Nonualco. Días y horas  de  reuniones: De  Lunes  a Domingo de  6:30  a 8:30  p.m.  </p>'+ '</div>'+ '</div>'; var infowindow1055 = new google.maps.InfoWindow({ content: contentString1055 }); //markers var marker1055 = new google.maps.Marker({ position: point1055, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1055.03  DE  SEPTIEMBRE." }); //information for function goToLink1055() { infowindow1055.open(map,marker1055); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1055, 'click', goToLink1055); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1056 
//positions 
var point1056 = new google.maps.LatLng(13.503613, -88.898100); var contentString1056 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">13  DE MARZO.</h1>'+ '<div id="bodyContent">'+ '<p><b>13  DE MARZO.</b> , — 13  de  Marzo  de  2004.  Dirección:  Caserío  Los Ortices, 1  Cuadra al Sur de  La Ermita,  San  Juan  Nonualco.  Días y horas  de  reuniones: De  Lunes  a  Domingo de  6:30  a  8:30  p.m. </p>'+ '</div>'+ '</div>'; var infowindow1056 = new google.maps.InfoWindow({ content: contentString1056 }); //markers var marker1056 = new google.maps.Marker({ position: point1056, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1056.13  DE MARZO." }); //information for function goToLink1056() { infowindow1056.open(map,marker1056); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1056, 'click', goToLink1056); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1057 
//positions 
var point1057 = new google.maps.LatLng(13.507250, -88.894351); var contentString1057 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">17 DE ENERO.</h1>'+ '<div id="bodyContent">'+ '<p><b>17 DE ENERO.</b> , — 17 de Enero de 2014. Dirección: Cantón Santiago de  Chile, San Juan  Nonualco. Días y horas  de  reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow1057 = new google.maps.InfoWindow({ content: contentString1057 }); //markers var marker1057 = new google.maps.Marker({ position: point1057, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1057.17 DE ENERO." }); //information for function goToLink1057() { infowindow1057.open(map,marker1057); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1057, 'click', goToLink1057); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1058 
//positions 
var point1058 = new google.maps.LatLng(13.504711, -88.902112); var contentString1058 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">DIOS  HACE MARAVILLAS.</h1>'+ '<div id="bodyContent">'+ '<p><b>DIOS  HACE MARAVILLAS.</b> , —  13  de  Mayo  de  2011.   Dirección: Cantón Tierra Colorada 3 Km. al Norte  de San Juan  Nonualco. Días y horas  de  reuniones: De  Lunes  a Sábado de  6:00  a 8:00  p.m.  y Domingo de 5:00 a 7:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow1058 = new google.maps.InfoWindow({ content: contentString1058 }); //markers var marker1058 = new google.maps.Marker({ position: point1058, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1058.DIOS  HACE MARAVILLAS." }); //information for function goToLink1058() { infowindow1058.open(map,marker1058); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1058, 'click', goToLink1058); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1059 
//positions 
var point1059 = new google.maps.LatLng(13.504737, -88.907659); var contentString1059 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">HAY UNA SOLUCIÓN.</h1>'+ '<div id="bodyContent">'+ '<p><b>HAY UNA SOLUCIÓN.</b> , — 29 de  Marzo de  2006.  Dirección:  Cantón Tehuista Abajo,  al Sur de  (C.E.), San  Juan  Nonualco. Días y horas de  reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow1059 = new google.maps.InfoWindow({ content: contentString1059 }); //markers var marker1059 = new google.maps.Marker({ position: point1059, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1059.HAY UNA SOLUCIÓN." }); //information for function goToLink1059() { infowindow1059.open(map,marker1059); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1059, 'click', goToLink1059); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1060 
//positions 
var point1060 = new google.maps.LatLng(13.499196, -88.896051); var contentString1060 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NUEVO  RENACER 20  DE  DICIEMBRE.</h1>'+ '<div id="bodyContent">'+ '<p><b>NUEVO  RENACER 20  DE  DICIEMBRE.</b> , — 20  de  Diciembre de 2008.   Dirección:   Colonia   Nuevo   San  Antonio,   La Laguneta,  San Juan  Nonualco. Días y horas  de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.</p>'+ '</div>'+ '</div>'; var infowindow1060 = new google.maps.InfoWindow({ content: contentString1060 }); //markers var marker1060 = new google.maps.Marker({ position: point1060, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1060.NUEVO  RENACER 20  DE  DICIEMBRE." }); //information for function goToLink1060() { infowindow1060.open(map,marker1060); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1060, 'click', goToLink1060); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1061 
//positions 
var point1061 = new google.maps.LatLng(13.505343, -88.897616); var contentString1061 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">SANGRE DE CRISTO.</h1>'+ '<div id="bodyContent">'+ '<p><b>SANGRE DE CRISTO.</b> , — 22 de  Enero  de  1976.  Dirección:  Barrio El Centro, San Juan  Nonualco. Días y horas  de  reuniones: De Lunes a Domingo de  6:30  a 8:30  p.m. </p>'+ '</div>'+ '</div>'; var infowindow1061 = new google.maps.InfoWindow({ content: contentString1061 }); //markers var marker1061 = new google.maps.Marker({ position: point1061, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1061.SANGRE DE CRISTO." }); //information for function goToLink1061() { infowindow1061.open(map,marker1061); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1061, 'click', goToLink1061); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1062 
//positions 
var point1062 = new google.maps.LatLng(13.510323, -88.887310); var contentString1062 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UN  DESPERTAR 07  DE  FEBRERO.</h1>'+ '<div id="bodyContent">'+ '<p><b>UN  DESPERTAR 07  DE  FEBRERO.</b> , — 07  de  Febrero de  1989. Dirección:  Cantón Las Piedronas al Sur de  La Carretera Autopista, San Juan Nonualco. Días y horas de reuniones: De Lunes a Domingo de 6:30 a 8:30 p.m. </p>'+ '</div>'+ '</div>'; var infowindow1062 = new google.maps.InfoWindow({ content: contentString1062 }); //markers var marker1062 = new google.maps.Marker({ position: point1062, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1062.UN  DESPERTAR 07  DE  FEBRERO." }); //information for function goToLink1062() { infowindow1062.open(map,marker1062); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1062, 'click', goToLink1062); google.maps.event.addDomListener(window, 'load', initialize);






//MARCADOR 1063 
//positions 
var point1063 = new google.maps.LatLng(13.497576, -89.075856); var contentString1063 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">24 HORAS DE SOBRIEDAD.</h1>'+ '<div id="bodyContent">'+ '<p><b>24 HORAS DE SOBRIEDAD.</b> , — 29 de Diciembre de 2012. Dirección: Desvío de Comalapa. Días y horas de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow1063 = new google.maps.InfoWindow({ content: contentString1063 }); 
//markers 
var marker1063 = new google.maps.Marker({ position: point1063, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1063.24 HORAS DE SOBRIEDAD." }); 
//information for 
function goToLink1063() { infowindow1063.open(map,marker1063); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1063, 'click', goToLink1063); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1064 
//positions 
var point1064 = new google.maps.LatLng(13.501541, -89.077986); var contentString1064 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">FE Y SOBRIEDAD.</h1>'+ '<div id="bodyContent">'+ '<p><b>FE Y SOBRIEDAD.</b> , — 01  de  Enero  de  1992.  Dirección:  Barrio  El Centro San  Juan   Talpa.  Días  y horas   de  reuniones: De  Lunes  a Domingo de 7:00 a 9:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow1064 = new google.maps.InfoWindow({ content: contentString1064 }); 
//markers 
var marker1064 = new google.maps.Marker({ position: point1064, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1064.FE Y SOBRIEDAD." }); 
//information for 
function goToLink1064() { infowindow1064.open(map,marker1064); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1064, 'click', goToLink1064); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1065 
//positions 
var point1065 = new google.maps.LatLng(13.504295, -89.088915); var contentString1065 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">RENACER  04   DE  JULIO.</h1>'+ '<div id="bodyContent">'+ '<p><b>RENACER  04   DE  JULIO.</b> , —  04   de   Julio   de   2014.   Dirección: Comunidad  Almendarez Cantón  Veracruz,  San  Juan   Talpa.   Días y horas  de  reuniones: De  Lunes  a  Domingo de  7:00  a  9:00  p.m. </p>'+ '</div>'+ '</div>'; var infowindow1065 = new google.maps.InfoWindow({ content: contentString1065 }); 
//markers 
var marker1065 = new google.maps.Marker({ position: point1065, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1065.RENACER  04   DE  JULIO." }); 
//information for 
function goToLink1065() { infowindow1065.open(map,marker1065); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1065, 'click', goToLink1065); google.maps.event.addDomListener(window, 'load', initialize);






//MARCADOR 1066 
//positions 
var point1066 = new google.maps.LatLng(13.613059, -89.006531); var contentString1066 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">DIVINA LUZ.</h1>'+ '<div id="bodyContent">'+ '<p><b>DIVINA LUZ.</b> , — 13  de  Diciembre  de  2007.   Dirección:   Barrio  El Centro, San Juan  Tepezontes. Días y horas  de  reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow1066 = new google.maps.InfoWindow({ content: contentString1066 }); 
//markers 
var marker1066 = new google.maps.Marker({ position: point1066, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1066.DIVINA LUZ." }); 
//information for 
function goToLink1066() { infowindow1066.open(map,marker1066); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1066, 'click', goToLink1066); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1067 
//positions 
var point1067 = new google.maps.LatLng(13.610640, -89.008892); var contentString1067 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">RENACER 99.</h1>'+ '<div id="bodyContent">'+ '<p><b>RENACER 99.</b> , —  05 de  Julio de  1999.  Dirección:  Cantón La Espe- ranza  al Sur de  San  Juan  Tepezontes.  Días  y horas  de  reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow1067 = new google.maps.InfoWindow({ content: contentString1067 }); 
//markers 
var marker1067 = new google.maps.Marker({ position: point1067, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1067.RENACER 99." }); 
//information for 
function goToLink1067() { infowindow1067.open(map,marker1067); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1067, 'click', goToLink1067); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1068 
//positions 
var point1068 = new google.maps.LatLng(13.606761, -89.006660); var contentString1068 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UN MILAGRO EN EL 82.</h1>'+ '<div id="bodyContent">'+ '<p><b>UN MILAGRO EN EL 82.</b> , — 13 de Junio de 1982. Dirección: Cantón al Sur de San Juan  Tepezontes. Días y horas  de reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow1068 = new google.maps.InfoWindow({ content: contentString1068 }); 
//markers 
var marker1068 = new google.maps.Marker({ position: point1068, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1068.UN MILAGRO EN EL 82." });
 //information for
  function goToLink1068() { infowindow1068.open(map,marker1068); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1068, 'click', goToLink1068); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1069 
//positions 
var point1069 = new google.maps.LatLng(13.615895, -89.003484); var contentString1069 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UNA  LUZ EN MI CALVARIO.</h1>'+ '<div id="bodyContent">'+ '<p><b>UNA  LUZ EN MI CALVARIO.</b> , — 02 de  Enero  de  2001.  Dirección: Barrio El Calvario San Juan  Tepezontes. Días y horas  de  reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow1069 = new google.maps.InfoWindow({ content: contentString1069 }); 
//markers 
var marker1069 = new google.maps.Marker({ position: point1069, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1069.UNA  LUZ EN MI CALVARIO." }); 
//information for 
function goToLink1069() { infowindow1069.open(map,marker1069); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1069, 'click', goToLink1069); google.maps.event.addDomListener(window, 'load', initialize);






//MARCADOR 1070 
//positions 
var point1070 = new google.maps.LatLng(13.353382, -88.954991); var contentString1070 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">AMISTAD CALVAREÑO.</h1>'+ '<div id="bodyContent">'+ '<p><b>AMISTAD CALVAREÑO.</b> , — 29 de Abril de 1992. Dirección: Barrio El Calvario, San Luis La Herradura. Días y horas de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow1070 = new google.maps.InfoWindow({ content: contentString1070 }); 
//markers 
var marker1070 = new google.maps.Marker({ position: point1070, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1070.AMISTAD CALVAREÑO." }); 
//information for 
function goToLink1070() { infowindow1070.open(map,marker1070); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1070, 'click', goToLink1070); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1071 
//positions 
var point1071 = new google.maps.LatLng(13.348720, -88.951305); var contentString1071 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">JALTEPEC  HERRADUREÑO.</h1>'+ '<div id="bodyContent">'+ '<p><b>JALTEPEC  HERRADUREÑO.</b> , — 17  de  Junio  de  1972.  Dirección: Barrio El Centro, frente  a La Fuerza  Naval,  San Luis La Herradura. Días y horas  de reuniones: De Lunes a Domingo de 5:00 a 7:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow1071 = new google.maps.InfoWindow({ content: contentString1071 }); 
//markers 
var marker1071 = new google.maps.Marker({ position: point1071, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1071.JALTEPEC  HERRADUREÑO." }); 
//information for 
function goToLink1071() { infowindow1071.open(map,marker1071); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1071, 'click', goToLink1071); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1072 
//positions 
var point1072 = new google.maps.LatLng(13.361413, -88.951137); var contentString1072 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NUEVO  AMANECER.</h1>'+ '<div id="bodyContent">'+ '<p><b>NUEVO  AMANECER.</b> , —  21  de   Diciembre  de   2011.   Dirección: Isla La Colorada San Luis La Herradura. Días y horas  de  reuniones: De  Lunes  a Domingo de  4:00  a 6:00  p.m. </p>'+ '</div>'+ '</div>'; var infowindow1072 = new google.maps.InfoWindow({ content: contentString1072 }); 
//markers 
var marker1072 = new google.maps.Marker({ position: point1072, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1072.NUEVO  AMANECER." }); 
//information for 
function goToLink1072() { infowindow1072.open(map,marker1072); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1072, 'click', goToLink1072); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1073 
//positions 
var point1073 = new google.maps.LatLng(13.354505, -88.966674); var contentString1073 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">RENACER 04  DE  ENERO.</h1>'+ '<div id="bodyContent">'+ '<p><b>RENACER 04  DE  ENERO.</b> , —  04  de  Enero   de  1988.   Dirección: Cantón El Llano, San Luis La Herradura. Días y horas  de  reuniones: De Lunes a Domingo de  5:00 a 7:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow1073 = new google.maps.InfoWindow({ content: contentString1073 }); 
//markers 
var marker1073 = new google.maps.Marker({ position: point1073, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1073.RENACER 04  DE  ENERO." }); 
//information for 
function goToLink1073() { infowindow1073.open(map,marker1073); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1073, 'click', goToLink1073); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1074 
//positions 
var point1074 = new google.maps.LatLng(13.348570, -88.958633); var contentString1074 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">RENOVACIÓN EL PACÍFICO.</h1>'+ '<div id="bodyContent">'+ '<p><b>RENOVACIÓN EL PACÍFICO.</b> , — 23 de  Enero  de  1987.  Dirección: Cantón Guadalupe La Zorra,  San  Luis La Herradura. Días  y horas de  reuniones: De Lunes a Domingo de  5:30 a 7:30 p.m. </p>'+ '</div>'+ '</div>'; var infowindow1074 = new google.maps.InfoWindow({ content: contentString1074 }); 
//markers 
var marker1074 = new google.maps.Marker({ position: point1074, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1074.RENOVACIÓN EL PACÍFICO." }); 
//information for 
function goToLink1074() { infowindow1074.open(map,marker1074); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1074, 'click', goToLink1074); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1075 
//positions 
var point1075 = new google.maps.LatLng(13.364560, -88.959138); var contentString1075 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UN  NUEVO  CAMINO.</h1>'+ '<div id="bodyContent">'+ '<p><b>UN  NUEVO  CAMINO.</b> , — 17  de  Abril de  1976.  Dirección:  Barrio El Centro, Calle a La Finca San Luis La Herradura. Días y horas  de reuniones: De  Lunes  a  Domingo de  5:00  a  7:00  p.m. </p>'+ '</div>'+ '</div>'; var infowindow1075 = new google.maps.InfoWindow({ content: contentString1075 }); 
//markers 
var marker1075 = new google.maps.Marker({ position: point1075, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1075.UN  NUEVO  CAMINO." }); 
//information for 
function goToLink1075() { infowindow1075.open(map,marker1075); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1075, 'click', goToLink1075); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1076 
//positions 
var point1076 = new google.maps.LatLng(13.345081, -88.947331); var contentString1076 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UN  NUEVO  VIVIR EN  EL CHINGO.</h1>'+ '<div id="bodyContent">'+ '<p><b>UN  NUEVO  VIVIR EN  EL CHINGO.</b> , —  03  de  Enero   de  1990. Dirección:  Cantón San Sebastián El Chingo, San Luis La Herradura. Días y horas  de reuniones: De Lunes a Domingo de 4:00 a 6:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow1076 = new google.maps.InfoWindow({ content: contentString1076 }); 
//markers 
var marker1076 = new google.maps.Marker({ position: point1076, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1076.UN  NUEVO  VIVIR EN  EL CHINGO." }); 
//information for 
function goToLink1076() { infowindow1076.open(map,marker1076); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1076, 'click', goToLink1076); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1077 
//positions 
var point1077 = new google.maps.LatLng(13.318778, -88.941078); var contentString1077 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UNA  LUZ EN EL BUEN SAMARITANO.</h1>'+ '<div id="bodyContent">'+ '<p><b>UNA  LUZ EN EL BUEN SAMARITANO.</b> , — 20  de  Abril de  2006. Dirección:  Colonia  El Buen  Samaritano, Cantón Costa  del  Sol, San Luis La Herradura. Días y horas  de  reuniones: De Lunes a Domingo de 5:00 a 7:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow1077 = new google.maps.InfoWindow({ content: contentString1077 }); 
//markers 
var marker1077 = new google.maps.Marker({ position: point1077, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1077.UNA  LUZ EN EL BUEN SAMARITANO." }); 
//information for 
function goToLink1077() { infowindow1077.open(map,marker1077); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1077, 'click', goToLink1077); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1078 
//positions 
var point1078 = new google.maps.LatLng(13.351618, -88.955150); var contentString1078 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UNA LUZ EN LOS ÁNGELES.</h1>'+ '<div id="bodyContent">'+ '<p><b>UNA LUZ EN LOS ÁNGELES.</b> , — 23 de Agosto de 2012.  Dirección: Colonia   Los  Ángeles,  San  Luis  La  Herradura.  Días  y  horas   de reuniones: De  Lunes  a  Domingo de  5:00  a  7:00  p.m. </p>'+ '</div>'+ '</div>'; var infowindow1078 = new google.maps.InfoWindow({ content: contentString1078 }); 
//markers 
var marker1078 = new google.maps.Marker({ position: point1078, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1078.UNA LUZ EN LOS ÁNGELES." }); 
//information for 
function goToLink1078() { infowindow1078.open(map,marker1078); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1078, 'click', goToLink1078); google.maps.event.addDomListener(window, 'load', initialize);






//MARCADOR 1079 
//positions 
var point1079 = new google.maps.LatLng(13.474473, -89.089309); var contentString1079 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">DIECISIETE  DE JULIO SANTA  CLARA.</h1>'+ '<div id="bodyContent">'+ '<p><b>DIECISIETE  DE JULIO SANTA  CLARA.</b> , — 17  de  Julio  de  1982. Dirección:  Cooperativa Santa  Clara,  San  Luis Talpa.  Días  y horas de  reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow1079 = new google.maps.InfoWindow({ content: contentString1079 }); 
//markers 
var marker1079 = new google.maps.Marker({ position: point1079, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1079.DIECISIETE  DE JULIO SANTA  CLARA." }); 
//information for 
function goToLink1079() { infowindow1079.open(map,marker1079); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1079, 'click', goToLink1079); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1080 
//positions 
var point1080 = new google.maps.LatLng(13.465931, -89.089349); var contentString1080 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">FE Y ACCIÓN.</h1>'+ '<div id="bodyContent">'+ '<p><b>FE Y ACCIÓN.</b> , — 15  de  Septiembre de  1989.  Dirección:  Cantón Tecualuya, San  Luis Talpa.  Días y horas  de  reuniones: De  Lunes  a Domingo de 6:30 a 8:30 p.m. </p>'+ '</div>'+ '</div>'; var infowindow1080 = new google.maps.InfoWindow({ content: contentString1080 }); 
//markers 
var marker1080 = new google.maps.Marker({ position: point1080, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1080.FE Y ACCIÓN." }); 
//information for 
function goToLink1080() { infowindow1080.open(map,marker1080); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1080, 'click', goToLink1080); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1081 
//positions 
var point1081 = new google.maps.LatLng(13.481176, -89.095381); var contentString1081 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NUEVO  RENACER EN COMALAPA.</h1>'+ '<div id="bodyContent">'+ '<p><b>NUEVO  RENACER EN COMALAPA.</b> , — 03  de  Octubre de  1994. Dirección:  Lotificación  Comalapa, San  Luis Talpa.  Días y horas  de reuniones: De  Lunes  a  Domingo de  6:30  a  8:30  p.m.  </p>'+ '</div>'+ '</div>'; var infowindow1081 = new google.maps.InfoWindow({ content: contentString1081 }); 
//markers 
var marker1081 = new google.maps.Marker({ position: point1081, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1081.NUEVO  RENACER EN COMALAPA." }); 
//information for 
function goToLink1081() { infowindow1081.open(map,marker1081); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1081, 'click', goToLink1081); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1082 
//positions 
var point1082 = new google.maps.LatLng(13.479171, -89.091106); var contentString1082 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">SAN  LUIS.</h1>'+ '<div id="bodyContent">'+ '<p><b>SAN  LUIS.</b> , — 27  de  Noviembre de  1969.  Dirección:  Colonia  Las Brisas, Calle al Puerto de  La Libertad, San Luis Talpa.  Días y horas de  reuniones: De Lunes a Domingo de  6:30 a 8:30 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow1082 = new google.maps.InfoWindow({ content: contentString1082 });  
//markers 
var marker1082 = new google.maps.Marker({ position: point1082, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1082.SAN  LUIS." }); 
//information for 
function goToLink1082() { infowindow1082.open(map,marker1082); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1082, 'click', goToLink1082); google.maps.event.addDomListener(window, 'load', initialize);






//MARCADOR 1083 
//positions 
var point1083 = new google.maps.LatLng(13.622184, -89.019978); var contentString1083 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">07  DE FEBRERO.</h1>'+ '<div id="bodyContent">'+ '<p><b>07  DE FEBRERO.</b> , — 07  de  Febrero de  1965.  Dirección:  Barrio El Rosario, San Miguel Tepezontes. Días y horas de reuniones: De Lunes a Domingo de 5:00 a 7:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow1083 = new google.maps.InfoWindow({ content: contentString1083 }); 
//markers 
var marker1083 = new google.maps.Marker({ position: point1083, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1083.07  DE FEBRERO." }); 
//information for 
function goToLink1083() { infowindow1083.open(map,marker1083); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1083, 'click', goToLink1083); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1084 
//positions 
var point1084 = new google.maps.LatLng(13.619744, -89.019013); var contentString1084 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">DESPERTAR 82.</h1>'+ '<div id="bodyContent">'+ '<p><b>DESPERTAR 82.</b> , —  08 de  Agosto de  1982.  Dirección:  San Miguel Tepezontes.  Días  y horas  de  reuniones: De  Lunes  a  Domingo de 6:00 a 8:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow1084 = new google.maps.InfoWindow({ content: contentString1084 }); 
//markers 
var marker1084 = new google.maps.Marker({ position: point1084, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1084.DESPERTAR 82." }); 
//information for 
function goToLink1084() { infowindow1084.open(map,marker1084); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1084, 'click', goToLink1084); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1085 
//positions 
var point1085 = new google.maps.LatLng(13.616324, -89.022982); var contentString1085 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">LO MEJOR DE BILL.</h1>'+ '<div id="bodyContent">'+ '<p><b>LO MEJOR DE BILL.</b> , — 15 de Septiembre de 1993. Dirección: Barrio El Carmen, San Miguel  Tepezontes. Días y horas  de  reuniones: De Lunes  a  Domingo de  6:30  a  8:30  p.m.  </p>'+ '</div>'+ '</div>'; var infowindow1085 = new google.maps.InfoWindow({ content: contentString1085 }); 
//markers 
var marker1085 = new google.maps.Marker({ position: point1085, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1085.LO MEJOR DE BILL." }); 
//information for 
function goToLink1085() { infowindow1085.open(map,marker1085); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1085, 'click', goToLink1085); google.maps.event.addDomListener(window, 'load', initialize);





//MARCADOR 1086 
//positions 
var point1086 = new google.maps.LatLng(13.548023, -89.036385); var contentString1086 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">19   DE  OCTUBRE.</h1>'+ '<div id="bodyContent">'+ '<p><b>19   DE  OCTUBRE.</b> , — 19  de   Octubre de   1998.   Dirección:   Calle Principal, contiguo al Cementerio, Cantón San José Las Isletas,  San Pedro Masahuat. Días y horas  de  reuniones: De Lunes  a Domingo de 6:00 a 8:00 p.m.</p>'+ '</div>'+ '</div>'; var infowindow1086 = new google.maps.InfoWindow({ content: contentString1086 }); 
//markers 
var marker1086 = new google.maps.Marker({ position: point1086, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1086.19   DE  OCTUBRE." }); 
//information for 
function goToLink1086() { infowindow1086.open(map,marker1086); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1086, 'click', goToLink1086); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1087 
//positions 
var point1087 = new google.maps.LatLng(13.538594, -89.040956); var contentString1087 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">24  DE AGOSTO.</h1>'+ '<div id="bodyContent">'+ '<p><b>24  DE AGOSTO.</b> , — 24 de  Agosto de  1987.  Dirección:  Lotificación Miraflores  Nº  1, San  Pedro Masahuat. Días y horas  de  reuniones: De  Lunes  a Domingo de  7:00  a 9:00  p.m.  </p>'+ '</div>'+ '</div>'; var infowindow1087 = new google.maps.InfoWindow({ content: contentString1087 }); 
//markers 
var marker1087 = new google.maps.Marker({ position: point1087, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1087.24  DE AGOSTO." }); 
//information for 
function goToLink1087() { infowindow1087.open(map,marker1087); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1087, 'click', goToLink1087); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1088 
//positions 
var point1088 = new google.maps.LatLng(13.547266, -89.032722); var contentString1088 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">27   DE  MAYO.</h1>'+ '<div id="bodyContent">'+ '<p><b>27   DE  MAYO.</b> , —  27  de   Mayo  de   2002.   Dirección:   Cantón  El Carmen, San Pedro Masahuat. Días y horas  de reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow1088 = new google.maps.InfoWindow({ content: contentString1088 }); 
//markers 
var marker1088 = new google.maps.Marker({ position: point1088, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1088.27   DE  MAYO." }); 
//information for 
function goToLink1088() { infowindow1088.open(map,marker1088); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1088, 'click', goToLink1088); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1089 
//positions 
var point1089 = new google.maps.LatLng(13.548768, -89.036263); var contentString1089 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">DULCE SOBRIEDAD.</h1>'+ '<div id="bodyContent">'+ '<p><b>DULCE SOBRIEDAD.</b> , — 20  de  Mayo  de  1995.  Dirección:  CantónDulce Nombre. Días y horas  de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.</p>'+ '</div>'+ '</div>'; var infowindow1089 = new google.maps.InfoWindow({ content: contentString1089 }); 
//markers 
var marker1089 = new google.maps.Marker({ position: point1089, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1089.DULCE SOBRIEDAD." }); 
//information for 
function goToLink1089() { infowindow1089.open(map,marker1089); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1089, 'click', goToLink1089); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1090 
//positions 
var point1090 = new google.maps.LatLng(13.540880, -89.037952); var contentString1090 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">LA BUENA FE.</h1>'+ '<div id="bodyContent">'+ '<p><b>LA BUENA FE.</b> , — 02 de  Noviembre de  1993.  Dirección:  Cantón El Carmen, San Pedro Masahuat. Días y horas  de reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow1090 = new google.maps.InfoWindow({ content: contentString1090 }); 
//markers 
var marker1090 = new google.maps.Marker({ position: point1090, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1090.LA BUENA FE." }); 
//information for 
function goToLink1090() { infowindow1090.open(map,marker1090); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1090, 'click', goToLink1090); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1091 
//positions 
var point1091 = new google.maps.LatLng(13.534316, -89.033963); var contentString1091 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">LA GRACIA DE DIOS.</h1>'+ '<div id="bodyContent">'+ '<p><b>LA GRACIA DE DIOS.</b> , —  16  de  Noviembre de  2010.  Dirección: Caserío Los Ranchos,  Cantón Las Isletas,  San Pedro Masahuat. Días y horas  de  reuniones: De  Lunes  a  Domingo de  7:00  a  9:00  p.m. </p>'+ '</div>'+ '</div>'; var infowindow1091 = new google.maps.InfoWindow({ content: contentString1091 }); 
//markers 
var marker1091 = new google.maps.Marker({ position: point1091, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1091.LA GRACIA DE DIOS." }); 
//information for 
function goToLink1091() { infowindow1091.open(map,marker1091); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1091, 'click', goToLink1091); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1092 
//positions 
var point1092 = new google.maps.LatLng(13.528842, -89.030386); var contentString1092 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">LIBERACIÓN.</h1>'+ '<div id="bodyContent">'+ '<p><b>LIBERACIÓN.</b> , — 01 de  Septiembre de  2005.  Dirección:  Cantón Las Isletas, San Pedro Masahuat. Días y horas  de reuniones: De Lunes a Domingo de 7:00 a 9:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow1092 = new google.maps.InfoWindow({ content: contentString1092 }); 
//markers 
var marker1092 = new google.maps.Marker({ position: point1092, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1092.LIBERACIÓN." }); 
//information for 
function goToLink1092() { infowindow1092.open(map,marker1092); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1092, 'click', goToLink1092); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1093 
//positions 
var point1093 = new google.maps.LatLng(13.505808, -89.045142); var contentString1093 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">LUZ DE ESPERANZA.</h1>'+ '<div id="bodyContent">'+ '<p><b>LUZ DE ESPERANZA.</b> , — 17  de  Septiembre de  1982.  Dirección: Hacienda Astorias,  Cantón Las Flores,  San  Pedro Masahuat. Días y horas  de  reuniones: De  Lunes  a  Domingo de  7:00  a  9:00  p.m.</p>'+ '</div>'+ '</div>'; var infowindow1093 = new google.maps.InfoWindow({ content: contentString1093 }); 
//markers 
var marker1093 = new google.maps.Marker({ position: point1093, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1093.LUZ DE ESPERANZA." }); 
//information for 
function goToLink1093() { infowindow1093.open(map,marker1093); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1093, 'click', goToLink1093); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1094 
//positions 
var point1094 = new google.maps.LatLng(13.522051, -89.052112); var contentString1094 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">MI SALVACIÓN.</h1>'+ '<div id="bodyContent">'+ '<p><b>MI SALVACIÓN.</b> , —  29  de   Abril  de   2006.   Dirección:   Caserío El Castaño, San Pedro Masahuat. Días y horas  de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.</p>'+ '</div>'+ '</div>'; var infowindow1094 = new google.maps.InfoWindow({ content: contentString1094 }); 
//markers 
var marker1094 = new google.maps.Marker({ position: point1094, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1094.MI SALVACIÓN." }); 
//information for 
function goToLink1094() { infowindow1094.open(map,marker1094); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1094, 'click', goToLink1094); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1095 
//positions 
var point1095 = new google.maps.LatLng(13.491783, -89.050967); var contentString1095 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NADA PODEMOS SOLOS.</h1>'+ '<div id="bodyContent">'+ '<p><b>NADA PODEMOS SOLOS.</b> , — 23 de Noviembre de 2005. Dirección: Lotificación  Miraflores,  Cantón El Carmen, San  Pedro Masahuat. Días y horas  de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow1095 = new google.maps.InfoWindow({ content: contentString1095 }); 
//markers 
var marker1095 = new google.maps.Marker({ position: point1095, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1095.NADA PODEMOS SOLOS." }); 
//information for 
function goToLink1095() { infowindow1095.open(map,marker1095); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1095, 'click', goToLink1095); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1096 
//positions 
var point1096 = new google.maps.LatLng(13.535317, -88.999976); var contentString1096 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NUEVA VIDA.</h1>'+ '<div id="bodyContent">'+ '<p><b>NUEVA VIDA.</b> , — 02 de Febrero de 1974.  Dirección:  San Marcelino, Calle  La Bocana, Rancho  Teyo,  San Pedro Masahuat. Días y horas de  reuniones: De Lunes a Domingo de  5:00 a 7:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow1096 = new google.maps.InfoWindow({ content: contentString1096 }); 
//markers 
var marker1096 = new google.maps.Marker({ position: point1096, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1096.NUEVA VIDA." }); 
//information for 
function goToLink1096() { infowindow1096.open(map,marker1096); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1096, 'click', goToLink1096); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1097 
//positions 
var point1097 = new google.maps.LatLng(13.545111, -89.010076); var contentString1097 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">SENDERO DE VIDA.</h1>'+ '<div id="bodyContent">'+ '<p><b>SENDERO DE VIDA.</b> , — 28 de  Febrero de  2012.  Dirección:  Cantón San Felipe,  Días y horas  de reuniones: De Lunes a Domingo de 7:00 a 9:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow1097 = new google.maps.InfoWindow({ content: contentString1097 }); 
//markers 
var marker1097 = new google.maps.Marker({ position: point1097, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1097.SENDERO DE VIDA." }); 
//information for 
function goToLink1097() { infowindow1097.open(map,marker1097); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1097, 'click', goToLink1097); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1098 
//positions 
var point1098 = new google.maps.LatLng(13.545212, -89.039180); var contentString1098 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UN MILAGRO EN EL ICACO.</h1>'+ '<div id="bodyContent">'+ '<p><b>UN MILAGRO EN EL ICACO.</b> , — 23 de Agosto de 2010.  Dirección: Colonia  El Icaco,  Barrio El Calvario.  Días y horas  de  reuniones: De Lunes  a  Domingo de  6:00  a  8:00  p.m.  </p>'+ '</div>'+ '</div>'; var infowindow1098 = new google.maps.InfoWindow({ content: contentString1098 }); 
//markers 
var marker1098 = new google.maps.Marker({ position: point1098, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1098.UN MILAGRO EN EL ICACO." }); 
//information for 
function goToLink1098() { infowindow1098.open(map,marker1098); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1098, 'click', goToLink1098); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1099 
//positions 
var point1099 = new google.maps.LatLng(13.544501, -89.046580); var contentString1099 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UNA LUZ EN BARAHONA.</h1>'+ '<div id="bodyContent">'+ '<p><b>UNA LUZ EN BARAHONA.</b> , — 14 de Septiembre de 1975. Dirección: Cantón Barahona, San Pedro Masahuat. Días y horas  de  reuniones: De Lunes a Domingo de  5:00 a 7:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow1099 = new google.maps.InfoWindow({ content: contentString1099 }); 
//markers 
var marker1099 = new google.maps.Marker({ position: point1099, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1099.UNA LUZ EN BARAHONA." }); 
//information for 
function goToLink1099() { infowindow1099.open(map,marker1099); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1099, 'click', goToLink1099); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1100 
//positions 
var point1100 = new google.maps.LatLng(13.544524, -89.036754); var contentString1100 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UNA LUZ EN VILLA PALESTINA.</h1>'+ '<div id="bodyContent">'+ '<p><b>UNA LUZ EN VILLA PALESTINA.</b> , — 18 de Abril de 2004. Dirección: Colonia Villa Palestina, Polígono 6, contiguo al Instituto Católico, San Pedro Masahuat. Días y horas  de  reuniones: De Lunes  a Domingo de 7:00 a 9:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow1100 = new google.maps.InfoWindow({ content: contentString1100 }); 
//markers 

var marker1100 = new google.maps.Marker({ position: point1100, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1100.UNA LUZ EN VILLA PALESTINA." }); 
//information for 
function goToLink1100() { infowindow1100.open(map,marker1100); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1100, 'click', goToLink1100); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1101 
//positions 
var point1101 = new google.maps.LatLng(13.490913, -89.053147); var contentString1101 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UNA  MIRADA AL CIELO.</h1>'+ '<div id="bodyContent">'+ '<p><b>UNA  MIRADA AL CIELO.</b> , — 17  de  Octubre de  2005.  Dirección: Cantón El Carmen, Caserío El Cabral,  San  Pedro Masahuat. Días y horas  de  reuniones: De  Lunes  a  Domingo de  6:00  a  8:00  p.m. </p>'+ '</div>'+ '</div>'; var infowindow1101 = new google.maps.InfoWindow({ content: contentString1101 }); 
//markers 
var marker1101 = new google.maps.Marker({ position: point1101, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1101.UNA  MIRADA AL CIELO." }); 
//information for 
function goToLink1101() { infowindow1101.open(map,marker1101); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1101, 'click', goToLink1101); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1102 
//positions 
var point1102 = new google.maps.LatLng(13.543865, -89.037452); var contentString1102 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UNIDOS.</h1>'+ '<div id="bodyContent">'+ '<p><b>UNIDOS.</b> , — 01 de Febrero de 1980.  Dirección:  Avenida  Darío Luna, Barrio El Centro, San Pedro Masahuat. Días y horas  de  reuniones: De Lunes a Domingo de  7:00 a 9:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow1102 = new google.maps.InfoWindow({ content: contentString1102 }); 
//markers 
var marker1102 = new google.maps.Marker({ position: point1102, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1102.UNIDOS." }); 
//information for 
function goToLink1102() { infowindow1102.open(map,marker1102); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1102, 'click', goToLink1102); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1103 
//positions 
var point1103 = new google.maps.LatLng(13.544749, -89.013869); var contentString1103 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">VIDA, FE Y ESPERANZA.</h1>'+ '<div id="bodyContent">'+ '<p><b>VIDA, FE Y ESPERANZA.</b> , — 27 de Julio de 1975. Dirección: Cantón Las Isletas, San Pedro Masahuat. Días y horas de reuniones: De Lunes a Domingo de 7:00 a 9:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow1103 = new google.maps.InfoWindow({ content: contentString1103 }); 
//markers 
var marker1103 = new google.maps.Marker({ position: point1103, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1103.VIDA, FE Y ESPERANZA." }); 
//information for 
function goToLink1103() { infowindow1103.open(map,marker1103); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1103, 'click', goToLink1103); google.maps.event.addDomListener(window, 'load', initialize);






//MARCADOR 1104 
//positions 
var point1104 = new google.maps.LatLng(13.601537, -88.929219); var contentString1104 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">EL OASIS.</h1>'+ '<div id="bodyContent">'+ '<p><b>EL OASIS.</b> , — 24 de  Agosto de  1970.  Dirección:  Barrio El Calvario. San Pedro Nonualco. Días y horas de reuniones: De Lunes a Domingo de 6:30 a 8:30 p.m. </p>'+ '</div>'+ '</div>'; var infowindow1104 = new google.maps.InfoWindow({ content: contentString1104 }); 
//markers 
var marker1104 = new google.maps.Marker({ position: point1104, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1104.EL OASIS." }); 
//information for 
function goToLink1104() { infowindow1104.open(map,marker1104); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1104, 'click', goToLink1104); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1105 
//positions 
var point1105 = new google.maps.LatLng(13.601912, -88.927191); var contentString1105 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">LA BARCA.</h1>'+ '<div id="bodyContent">'+ '<p><b>LA BARCA.</b> , — 22 de  Julio  de  2001.  Dirección:  Barrio Concepción. San Pedro Nonualco. Días y horas de reuniones: De Lunes a Domingo de 7:00 a 8:30 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow1105 = new google.maps.InfoWindow({ content: contentString1105 }); 
//markers 
var marker1105 = new google.maps.Marker({ position: point1105, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1105.LA BARCA." }); 
//information for 
function goToLink1105() { infowindow1105.open(map,marker1105); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1105, 'click', goToLink1105); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1106 
//positions 
var point1106 = new google.maps.LatLng(13.597191, -88.934377); var contentString1106 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">MENSAJE   DE   LIBERACIÓN.</h1>'+ '<div id="bodyContent">'+ '<p><b>MENSAJE   DE   LIBERACIÓN.</b> , — 09   de   Septiembre  de   2004. Dirección:  Cantón San  Ramón,  San  Pedro Nonualco. Días y horas de  reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow1106 = new google.maps.InfoWindow({ content: contentString1106 }); 
//markers 
var marker1106 = new google.maps.Marker({ position: point1106, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1106.MENSAJE   DE   LIBERACIÓN." }); 
//information for 
function goToLink1106() { infowindow1106.open(map,marker1106); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1106, 'click', goToLink1106); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1107 
//positions 
var point1107 = new google.maps.LatLng(13.601312, -88.922368); var contentString1107 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UN MILAGRO EN EL CERRO.</h1>'+ '<div id="bodyContent">'+ '<p><b>UN MILAGRO EN EL CERRO.</b> , — 27 de  Marzo de  2014.  Dirección: Cantón San Juan  Nahuistepeque, San Pedro Nonualco. Días y horas de  reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow1107 = new google.maps.InfoWindow({ content: contentString1107 }); 
//markers 
var marker1107 = new google.maps.Marker({ position: point1107, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1107.UN MILAGRO EN EL CERRO." }); 
//information for 
function goToLink1107() { infowindow1107.open(map,marker1107); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1107, 'click', goToLink1107); google.maps.event.addDomListener(window, 'load', initialize);






//MARCADOR 1108 
//positions 
var point1108 = new google.maps.LatLng(13.503216, -88.923649); var contentString1108 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">10  DE JUNIO.</h1>'+ '<div id="bodyContent">'+ '<p><b>10  DE JUNIO.</b> , — 10 de  Junio  de  2001.  Dirección:  4ª Calle Oriente Barrio Concepción, San Rafael Obrajuelo. Días y horas de reuniones: De Lunes a Domingo de  6:30 a 8:30 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow1108 = new google.maps.InfoWindow({ content: contentString1108 }); 
//markers 
var marker1108 = new google.maps.Marker({ position: point1108, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1108.10  DE JUNIO." }); 
//information for 
function goToLink1108() { infowindow1108.open(map,marker1108); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1108, 'click', goToLink1108); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1109 
//positions 
var point1109 = new google.maps.LatLng(13.500862, -88.924685); var contentString1109 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">LA PAZ.</h1>'+ '<div id="bodyContent">'+ '<p><b>LA PAZ.</b> , — 08  de  Octubre de  1974.  Dirección:  2ª  Calle  Oriente, Colonia   San   Antonio,   San   Rafael   Obrajuelo.  Días   y  horas   de reuniones: De  Lunes  a  Domingo de  6:30  a  8:30  p.m. </p>'+ '</div>'+ '</div>'; var infowindow1109 = new google.maps.InfoWindow({ content: contentString1109 }); 
//markers 
var marker1109 = new google.maps.Marker({ position: point1109, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1109.LA PAZ." }); 
//information for 
function goToLink1109() { infowindow1109.open(map,marker1109); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1109, 'click', goToLink1109); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1110 
//positions 
var point1110 = new google.maps.LatLng(13.498320, -88.923880); var contentString1110 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">SAN  RAFAEL.</h1>'+ '<div id="bodyContent">'+ '<p><b>SAN  RAFAEL.</b> , — 27  de  Noviembre de  2010.  Dirección:  Final 10ª Avenida  Sur Barrio  San  José, San  Rafael  Obrajuelo. Días  y horas de  reuniones: De Lunes a Domingo de  6:30 a 8:30 p.m. </p>'+ '</div>'+ '</div>'; var infowindow1110 = new google.maps.InfoWindow({ content: contentString1110 }); 
//markers 
var marker1110 = new google.maps.Marker({ position: point1110, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1110.SAN  RAFAEL." }); 
//information for 
function goToLink1110() { infowindow1110.open(map,marker1110); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1110, 'click', goToLink1110); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1111 
//positions 
var point1111 = new google.maps.LatLng(13.495832, -88.921507); var contentString1111 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UNA  LUZ EN  EL CAMINO.</h1>'+ '<div id="bodyContent">'+ '<p><b>UNA  LUZ EN  EL CAMINO.</b> , — 15  de  Enero  de  1998.  Dirección: Cantón San  Pedro Mártir,  al Norte  de  San  Rafael  Obrajuelo.  Días y horas  de  reuniones: De  Lunes  a  Domingo de  7:00  a  9:00  p.m.</p>'+ '</div>'+ '</div>'; var infowindow1111 = new google.maps.InfoWindow({ content: contentString1111 }); 
//markers 
var marker1111 = new google.maps.Marker({ position: point1111, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1111.UNA  LUZ EN  EL CAMINO." }); 
//information for 
function goToLink1111() { infowindow1111.open(map,marker1111); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1111, 'click', goToLink1111); google.maps.event.addDomListener(window, 'load', initialize);






//MARCADOR 1112 
//positions 
var point1112 = new google.maps.LatLng(13.619535, -88.924198); var contentString1112 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">13   DE  AGOSTO.</h1>'+ '<div id="bodyContent">'+ '<p><b>13   DE  AGOSTO.</b> , —  13  de   Agosto  de   1981.   Dirección:   Barrio Candelaria. Santa  María  Ostuma. Días  y horas  de  reuniones: De Lunes  a  Domingo de   6:00  a  8:00  p.m.   </p>'+ '</div>'+ '</div>'; var infowindow1112 = new google.maps.InfoWindow({ content: contentString1112 }); 
//markers 
var marker1112 = new google.maps.Marker({ position: point1112, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1112.13   DE  AGOSTO." }); 
//information for 
function goToLink1112() { infowindow1112.open(map,marker1112); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1112, 'click', goToLink1112); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1113 
//positions 
var point1113 = new google.maps.LatLng(13.618283, -88.932095); var contentString1113 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">MENSAJE   DE   SALVACIÓN.</h1>'+ '<div id="bodyContent">'+ '<p><b>MENSAJE   DE   SALVACIÓN.</b> , —   05   de   Septiembre  de   1999. Dirección: Santa María Ostuma. Días y horas de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow1113 = new google.maps.InfoWindow({ content: contentString1113 }); 
//markers 
var marker1113 = new google.maps.Marker({ position: point1113, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1113.MENSAJE   DE   SALVACIÓN." }); 
//information for 
function goToLink1113() { infowindow1113.open(map,marker1113); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1113, 'click', goToLink1113); google.maps.event.addDomListener(window, 'load', initialize);






//MARCADOR 1114 
//positions 
var point1114 = new google.maps.LatLng(13.515041, -88.962180); var contentString1114 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">17 DE MARZO.</h1>'+ '<div id="bodyContent">'+ '<p><b>17 DE MARZO.</b> , — 17 de Marzo de 1974.  Dirección:  Carretera hacia San Pedro Nonualco, Cantón Santa  Teresa  Santiago Nonualco. Días y horas  de  reuniones: De  Lunes  a  Domingo de  6:00  a  8:00  p.m. </p>'+ '</div>'+ '</div>'; var infowindow1114 = new google.maps.InfoWindow({ content: contentString1114 }); 
//markers 
var marker1114 = new google.maps.Marker({ position: point1114, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1114.17 DE MARZO." }); 
//information for 
function goToLink1114() { infowindow1114.open(map,marker1114); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1114, 'click', goToLink1114); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1115 
//positions 
var point1115 = new google.maps.LatLng(13.521698, -88.942629); var contentString1115 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">BENDICIÓN DE DIOS.</h1>'+ '<div id="bodyContent">'+ '<p><b>BENDICIÓN DE DIOS.</b> , — 01 de  Marzo de  2006.  Dirección:  Cantón San Antonio  Arriba Santiago Nonualco. Días y horas  de  reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow1115 = new google.maps.InfoWindow({ content: contentString1115 }); 
//markers 
var marker1115 = new google.maps.Marker({ position: point1115, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1115.BENDICIÓN DE DIOS." }); 
//information for 
function goToLink1115() { infowindow1115.open(map,marker1115); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1115, 'click', goToLink1115); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1116 
//positions 
var point1116 = new google.maps.LatLng(13.495641, -88.935386); var contentString1116 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">BENDITA LIBERACIÓN.</h1>'+ '<div id="bodyContent">'+ '<p><b>BENDITA LIBERACIÓN.</b> , — 03 de  Abril de  2002.  Dirección:  Cantón San Antonio  Abajo  Santiago Nonualco. Días y horas  de  reuniones: De  Lunes  a Domingo de  6:00  a 8:00  p.m.  </p>'+ '</div>'+ '</div>'; var infowindow1116 = new google.maps.InfoWindow({ content: contentString1116 }); 
//markers 
var marker1116 = new google.maps.Marker({ position: point1116, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1116.BENDITA LIBERACIÓN." }); 
//information for 
function goToLink1116() { infowindow1116.open(map,marker1116); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1116, 'click', goToLink1116); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1117 
//positions 
var point1117 = new google.maps.LatLng(13.507286, -88.940381); var contentString1117 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">DÁDIVA DE DIOS.</h1>'+ '<div id="bodyContent">'+ '<p><b>DÁDIVA DE DIOS.</b> , — 01 de Enero de 2007. Dirección: Calle Hermogenes Alvarado  Padre Nº  34,  Barrio  El Calvario,  Santiago Nonualco. Días y horas  de reuniones: De Lunes a Domingo de 6:30 a 8:30 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow1117 = new google.maps.InfoWindow({ content: contentString1117 }); 
//markers 
var marker1117 = new google.maps.Marker({ position: point1117, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1117.DÁDIVA DE DIOS." }); 
//information for 
function goToLink1117() { infowindow1117.open(map,marker1117); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1117, 'click', goToLink1117); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1118 
//positions 
var point1118 = new google.maps.LatLng(13.509584, -88.938992); var contentString1118 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">DESPERTAR 04 DE JULIO.</h1>'+ '<div id="bodyContent">'+ '<p><b>DESPERTAR 04 DE JULIO.</b> , — 04 de Julio de 1982.  Dirección:  Calle Anastasio Aquino,  Barrio La Palma, Santiago Nonualco. Días y horas de  reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow1118 = new google.maps.InfoWindow({ content: contentString1118 }); 
//markers 
var marker1118 = new google.maps.Marker({ position: point1118, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1118.DESPERTAR 04 DE JULIO." }); 
//information for 
function goToLink1118() { infowindow1118.open(map,marker1118); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1118, 'click', goToLink1118); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1119 
//positions 
var point1119 = new google.maps.LatLng(13.505824, -88.932583); var contentString1119 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">DESPERTAR 04  DE MARZO.</h1>'+ '<div id="bodyContent">'+ '<p><b>DESPERTAR 04  DE MARZO.</b> , — 04 de  Marzo  de  1980.  Dirección: Carretera a La Herradura, Desvío  Tres Puertas, Tihuilocoyo,  Cantón Las Guarumas. Días y horas  de  reuniones: De Lunes a Domingo de 5:00 a 7:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow1119 = new google.maps.InfoWindow({ content: contentString1119 }); 
//markers 
var marker1119 = new google.maps.Marker({ position: point1119, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1119.DESPERTAR 04  DE MARZO." }); 
//information for 
function goToLink1119() { infowindow1119.open(map,marker1119); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1119, 'click', goToLink1119); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1120 
//positions 
var point1120 = new google.maps.LatLng(13.516860, -88.934219); var contentString1120 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">EL BUEN CAMINO.</h1>'+ '<div id="bodyContent">'+ '<p><b>EL BUEN CAMINO.</b> , — 01 de  Febrero de  2009.  Dirección:  Cantón Jalponguita, Santiago Nonualco. Días y horas de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow1120 = new google.maps.InfoWindow({ content: contentString1120 }); 
//markers 
var marker1120 = new google.maps.Marker({ position: point1120, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1120.EL BUEN CAMINO." }); 
//information for 
function goToLink1120() { infowindow1120.open(map,marker1120); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1120, 'click', goToLink1120); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1121 
//positions 
var point1121 = new google.maps.LatLng(13.516790, -88.941761); var contentString1121 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">EL BUEN PASTOR.</h1>'+ '<div id="bodyContent">'+ '<p><b>EL BUEN PASTOR.</b> , — 31 de  Julio de  2014.  Dirección:  Caserío Los Cocos  Cantón San José Obrajito, Santiago Nonualco. Días y horas de  reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow1121 = new google.maps.InfoWindow({ content: contentString1121 }); 
//markers 
var marker1121 = new google.maps.Marker({ position: point1121, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1121.EL BUEN PASTOR." }); 
//information for 
function goToLink1121() { infowindow1121.open(map,marker1121); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1121, 'click', goToLink1121); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1122
 //positions
  var point1122 = new google.maps.LatLng(13.519632, -88.939957); var contentString1122 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">ESFUERZO  06   DE  OCTUBRE.</h1>'+ '<div id="bodyContent">'+ '<p><b>ESFUERZO  06   DE  OCTUBRE.</b> , — 06  de   Noviembre  de   1978. Dirección:  Cantón San José Arriba Santiago Nonualco. Días y horas de  reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow1122 = new google.maps.InfoWindow({ content: contentString1122 }); 
  //markers 
  var marker1122 = new google.maps.Marker({ position: point1122, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1122.ESFUERZO  06   DE  OCTUBRE." }); 
  //information for 
  function goToLink1122() { infowindow1122.open(map,marker1122); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1122, 'click', goToLink1122); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1123 
//positions 
var point1123 = new google.maps.LatLng(13.514299, -88.951649); var contentString1123 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">MANO  AMIGA.</h1>'+ '<div id="bodyContent">'+ '<p><b>MANO  AMIGA.</b> , —  13  de   Junio   de   2012.   Dirección:   Cantón El Carmen, San  José Orajito,   Santiago Nonualco. Días  y horas   de reuniones: De  Lunes  a  Domingo de  6:00  a  8:00  p.m.  </p>'+ '</div>'+ '</div>'; var infowindow1123 = new google.maps.InfoWindow({ content: contentString1123 }); 
//markers 
var marker1123 = new google.maps.Marker({ position: point1123, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1123.MANO  AMIGA." }); 
//information for 
function goToLink1123() { infowindow1123.open(map,marker1123); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1123, 'click', goToLink1123); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1124 
//positions 
var point1124 = new google.maps.LatLng(13.514483, -88.953705); var contentString1124 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">MENSAJE DE SOBRIEDAD.</h1>'+ '<div id="bodyContent">'+ '<p><b>MENSAJE DE SOBRIEDAD.</b> , — 05 de Abril de 1991. Dirección: Barrio El Ángel  Nº  1, contiguo a paso a La Laguna,  Santiago Nonualco. Días y horas  de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow1124 = new google.maps.InfoWindow({ content: contentString1124 }); 
//markers 
var marker1124 = new google.maps.Marker({ position: point1124, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1124.MENSAJE DE SOBRIEDAD." }); 
//information for 
function goToLink1124() { infowindow1124.open(map,marker1124); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1124, 'click', goToLink1124); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1125 
//positions 
var point1125 = new google.maps.LatLng(13.517559, -88.932474); var contentString1125 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">MI ÚLTIMA ESPERANZA.</h1>'+ '<div id="bodyContent">'+ '<p><b>MI ÚLTIMA ESPERANZA.</b> , — 14 de Noviembre de 1993.  Dirección: Concepción Jalponga, Calle hacia la Hoja de Sal, Santiago Nonualco. Días y horas  de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.</p>'+ '</div>'+ '</div>'; var infowindow1125 = new google.maps.InfoWindow({ content: contentString1125 }); 
//markers 
var marker1125 = new google.maps.Marker({ position: point1125, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1125.MI ÚLTIMA ESPERANZA." }); 
//information for 
function goToLink1125() { infowindow1125.open(map,marker1125); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1125, 'click', goToLink1125); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1126 
//positions 
var point1126 = new google.maps.LatLng(13.513398, -88.939981); var contentString1126 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">MI ÚLTIMA ESPERANZA.</h1>'+ '<div id="bodyContent">'+ '<p><b>MI ÚLTIMA ESPERANZA.</b> , — 23 de Noviembre de 2004.  Dirección: Colonia  CIDECO, Calle Principal, Polígono K, Casa Nº 15, camino  a San Luis La Herradura, Santiago Nonualco. Días y horas de reuniones: De  Lunes  a Domingo de  6:30  a 8:30  p.m.</p>'+ '</div>'+ '</div>'; var infowindow1126 = new google.maps.InfoWindow({ content: contentString1126 }); 
//markers 
var marker1126 = new google.maps.Marker({ position: point1126, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1126.MI ÚLTIMA ESPERANZA." }); 
//information for 
function goToLink1126() { infowindow1126.open(map,marker1126); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1126, 'click', goToLink1126); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1127 
//positions 
var point1127 = new google.maps.LatLng(13.505128, -88.937997); var contentString1127 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NUEVO  DESPERTAR 13  DE  ENERO.</h1>'+ '<div id="bodyContent">'+ '<p><b>NUEVO  DESPERTAR 13  DE  ENERO.</b> , —  13  de  Enero  de  2002. Dirección:  Cantón San José Abajo Santiago Nonualco. Días y horas de  reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow1127 = new google.maps.InfoWindow({ content: contentString1127 }); 
//markers 
var marker1127 = new google.maps.Marker({ position: point1127, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1127.NUEVO  DESPERTAR 13  DE  ENERO." }); 
//information for 
function goToLink1127() { infowindow1127.open(map,marker1127); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1127, 'click', goToLink1127); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1128 
//positions 
var point1128 = new google.maps.LatLng(13.511077, -88.943022); var contentString1128 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NUEVO  DESPERTAR.</h1>'+ '<div id="bodyContent">'+ '<p><b>NUEVO  DESPERTAR.</b> , — 05  de   Noviembre  de   2010.   Dirección: Caserío Ojo de Agua, Santiago Nonualco. Días y horas de reuniones: De  Lunes  a Domingo de  6:00  a 8:00  p.m.  </p>'+ '</div>'+ '</div>'; var infowindow1128 = new google.maps.InfoWindow({ content: contentString1128 }); 
//markers 
var marker1128 = new google.maps.Marker({ position: point1128, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1128.NUEVO  DESPERTAR." }); 
//information for 
function goToLink1128() { infowindow1128.open(map,marker1128); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1128, 'click', goToLink1128); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1129 
//positions 
var point1129 = new google.maps.LatLng(13.509700, -88.945124); var contentString1129 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NUNCA  ES TARDE PARA SER FELIZ.</h1>'+ '<div id="bodyContent">'+ '<p><b>NUNCA  ES TARDE PARA SER FELIZ.</b> , — 21 de  Febrero de  2014. Dirección:   Cantón  Santa   Teresa,  Caserío  La  Palmera, Santiago Nonualco. Días y horas  de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow1129 = new google.maps.InfoWindow({ content: contentString1129 }); 
//markers 
var marker1129 = new google.maps.Marker({ position: point1129, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1129.NUNCA  ES TARDE PARA SER FELIZ." }); 
//information for 
function goToLink1129() { infowindow1129.open(map,marker1129); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1129, 'click', goToLink1129); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1130 
//positions 
var point1130 = new google.maps.LatLng(13.506768, -88.935028); var contentString1130 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">PORFIADEÑO.</h1>'+ '<div id="bodyContent">'+ '<p><b>PORFIADEÑO.</b> , —  15  de  Agosto de  2006.   Dirección:   Cantón El Porfiadeño, Calle a San Luis La Herradura, Santiago Nonualco. Días y horas  de  reuniones: De  Lunes  a  Domingo de  6:00  a  8:00  p.m. </p>'+ '</div>'+ '</div>'; var infowindow1130 = new google.maps.InfoWindow({ content: contentString1130 }); 
//markers 
var marker1130 = new google.maps.Marker({ position: point1130, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1130.PORFIADEÑO." }); 
//information for 
function goToLink1130() { infowindow1130.open(map,marker1130); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1130, 'click', goToLink1130); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1131 
//positions 
var point1131 = new google.maps.LatLng(13.496909, -88.935819); var contentString1131 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">REGALO DE DIOS.</h1>'+ '<div id="bodyContent">'+ '<p><b>REGALO DE DIOS.</b> , — 27 de Septiembre de 2004. Dirección: Cantón San  Jose Obrajito Santiago Nonualco. Días y horas  de  reuniones: De  Lunes  a Domingo de  6:00  a 8:00  p.m.  </p>'+ '</div>'+ '</div>'; var infowindow1131 = new google.maps.InfoWindow({ content: contentString1131 }); //markers var marker1131 = new google.maps.Marker({ position: point1131, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1131.REGALO DE DIOS." }); //information for function goToLink1131() { infowindow1131.open(map,marker1131); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1131, 'click', goToLink1131); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1132 
//positions 
var point1132 = new google.maps.LatLng(13.499121, -88.945561); var contentString1132 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">RENACER 05 DE OCTUBRE.</h1>'+ '<div id="bodyContent">'+ '<p><b>RENACER 05 DE OCTUBRE.</b> , — 05 de Octubre de 2011.  Dirección: Cantón Amulunco, Santiago Nonualco. Días y horas  de  reuniones: De Lunes a Domingo de  6:30 a 8:30 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow1132 = new google.maps.InfoWindow({ content: contentString1132 }); 
//markers 
var marker1132 = new google.maps.Marker({ position: point1132, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1132.RENACER 05 DE OCTUBRE." }); 
//information for 
function goToLink1132() { infowindow1132.open(map,marker1132); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1132, 'click', goToLink1132); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1133 
//positions 
var point1133 = new google.maps.LatLng(13.503794, -88.950110); var contentString1133 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UN MILAGRO 04 DE MARZO.</h1>'+ '<div id="bodyContent">'+ '<p><b>UN MILAGRO 04 DE MARZO.</b> , — 04 de Marzo de 1980.  Dirección: Cantón Los Guarumos, Calle al Cantón Santa  Rita, Hacienda Tihuilocoyo Santiago Nonualco. Días y horas de reuniones: De Lunes a Domingo de 5:00 a 7:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow1133 = new google.maps.InfoWindow({ content: contentString1133 }); 
//markers 
var marker1133 = new google.maps.Marker({ position: point1133, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1133.UN MILAGRO 04 DE MARZO." }); 
//information for 
function goToLink1133() { infowindow1133.open(map,marker1133); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1133, 'click', goToLink1133); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1134 
//positions 
var point1134 = new google.maps.LatLng(13.512599, -88.948007); var contentString1134 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UN MILAGRO EN LA FLECHA.</h1>'+ '<div id="bodyContent">'+ '<p><b>UN MILAGRO EN LA FLECHA.</b> , — 10 de  Abril de  1978.  Dirección: Caserío Desvío  La Flecha,   Santiago  Nonualco. Días  y  horas   de reuniones: De  Lunes  a  Domingo de  6:30  a  8:30  p.m.  </p>'+ '</div>'+ '</div>'; var infowindow1134 = new google.maps.InfoWindow({ content: contentString1134 }); 
//markers 
var marker1134 = new google.maps.Marker({ position: point1134, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1134.UN MILAGRO EN LA FLECHA." }); 
//information 
 function goToLink1134() { infowindow1134.open(map,marker1134); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1134, 'click', goToLink1134); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1135 
//positions 
var point1135 = new google.maps.LatLng(13.510137, -88.948350); var contentString1135 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UN MILAGRO SAN FRANCISCO HACIENDA.</h1>'+ '<div id="bodyContent">'+ '<p><b>UN MILAGRO SAN FRANCISCO HACIENDA.</b> , — 30 de Agosto de 2003. Dirección: Calle Principal hacia San Pedro Nonualco, Santiago Nonualco. Días y horas  de reuniones: De Lunes a Domingo de 6:30 a 8:30 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow1135 = new google.maps.InfoWindow({ content: contentString1135 }); 
//markers 
var marker1135 = new google.maps.Marker({ position: point1135, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1135.UN MILAGRO SAN FRANCISCO HACIENDA." }); 
//information 
 function goToLink1135() { infowindow1135.open(map,marker1135); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1135, 'click', goToLink1135); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1136 
//positions 
var point1136 = new google.maps.LatLng(13.511447, -88.930180); var contentString1136 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UNA   LUZ EN  EL PORFIADO.</h1>'+ '<div id="bodyContent">'+ '<p><b>UNA   LUZ EN  EL PORFIADO.</b> , —  01  de   Septiembre  de   2008. Dirección: Desvío El Porfiado, Calle a San Luis La Herradura Santiago Nonualco. Días y horas  de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow1136 = new google.maps.InfoWindow({ content: contentString1136 });
 //markers
  var marker1136 = new google.maps.Marker({ position: point1136, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1136.UNA   LUZ EN  EL PORFIADO." }); 
  //information 
   function goToLink1136() { infowindow1136.open(map,marker1136); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1136, 'click', goToLink1136); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1137 
//positions 
var point1137 = new google.maps.LatLng(13.506147, -88.930737); var contentString1137 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UNA LUZ EN MI CALVARIO.</h1>'+ '<div id="bodyContent">'+ '<p><b>UNA LUZ EN MI CALVARIO.</b> , — 25 de Octubre de 1972.  Dirección: Colonia   Las  Mercedes.  Días  y  horas   de   reuniones: De  Lunes  a Domingo de 6:30 a 8:30 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow1137 = new google.maps.InfoWindow({ content: contentString1137 }); 
//markers 
var marker1137 = new google.maps.Marker({ position: point1137, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1137.UNA LUZ EN MI CALVARIO." }); 
//information 
 function goToLink1137() { infowindow1137.open(map,marker1137); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1137, 'click', goToLink1137); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1138 
//positions 
var point1138 = new google.maps.LatLng(13.517261, -88.940833); var contentString1138 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">VIDA NUEVA.</h1>'+ '<div id="bodyContent">'+ '<p><b>VIDA NUEVA.</b> , —  29  de   Junio   de   2003.   Dirección:   Carretera  al Litoral,  Desvío  a  San  Pedro  Nonualco,  Santiago  Nonualco.  Días y horas  de  reuniones: De  Lunes  a  Domingo de  6:30  a  8:30  p.m. </p>'+ '</div>'+ '</div>'; var infowindow1138 = new google.maps.InfoWindow({ content: contentString1138 }); 
//markers 
var marker1138 = new google.maps.Marker({ position: point1138, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1138.VIDA NUEVA." }); 
//information for 
function goToLink1138() { infowindow1138.open(map,marker1138); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1138, 'click', goToLink1138); google.maps.event.addDomListener(window, 'load', initialize);






//MARCADOR 1139 
//positions 
var point1139 = new google.maps.LatLng(13.561711, -89.078205); var contentString1139 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">ADELANTE.</h1>'+ '<div id="bodyContent">'+ '<p><b>ADELANTE.</b> , — 23 de  Abril de  1967.  Dirección:  Barrio El Centro 1 Cuadra a parque Tapalhuaca. Días y horas  de  reuniones: De Lunes a Domingo de 5:00 a 7:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow1139 = new google.maps.InfoWindow({ content: contentString1139 }); 
//markers 
var marker1139 = new google.maps.Marker({ position: point1139, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1139.ADELANTE." }); 
//information for 
function goToLink1139() { infowindow1139.open(map,marker1139); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1139, 'click', goToLink1139); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1140 
//positions 
var point1140 = new google.maps.LatLng(13.557988, -89.079031); var contentString1140 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UNA  LUZ DE  DIOS  EN  LA PALMA.</h1>'+ '<div id="bodyContent">'+ '<p><b>UNA  LUZ DE  DIOS  EN  LA PALMA.</b> , —  17  de   Abril  de   1977. Dirección:  Cantón San  Pedro La Palma.  Tapalhuaca. Días  y horas de  reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow1140 = new google.maps.InfoWindow({ content: contentString1140 }); 
//markers 
var marker1140 = new google.maps.Marker({ position: point1140, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1140.UNA  LUZ DE  DIOS  EN  LA PALMA." }); 
//information for 
function goToLink1140() { infowindow1140.open(map,marker1140); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1140, 'click', goToLink1140); google.maps.event.addDomListener(window, 'load', initialize);





//MARCADOR 1141 
//positions 
var point1141 = new google.maps.LatLng(13.509561, -88.872810); var contentString1141 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">03 DE OCTUBRE.</h1>'+ '<div id="bodyContent">'+ '<p><b>03 DE OCTUBRE.</b> , — 03 de Octubre de 1959.  Dirección:  6a  Avenida y 4a  Calle Poniente 3 Cuadras al Sur del Cuartel  Militar. Días y horas de  reuniones: De Lunes a Domingo de  7:00 a 9:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow1141 = new google.maps.InfoWindow({ content: contentString1141 }); 
//markers 
var marker1141 = new google.maps.Marker({ position: point1141, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1141.03 DE OCTUBRE." }); 
//information for 
function goToLink1141() { infowindow1141.open(map,marker1141); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1141, 'click', goToLink1141); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1142 
//positions 
var point1142 = new google.maps.LatLng(13.516806, -88.874094); var contentString1142 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">15   DE  NOVIEMBRE.</h1>'+ '<div id="bodyContent">'+ '<p><b>15   DE  NOVIEMBRE.</b> , — 15  de   Noviembre  de   1988.   Dirección: Colonia  Ana  Bella,  Calle  Principal,  Zacatecoluca. Días  y horas  de reuniones: De  Lunes  a  Domingo de  6:30  a  8:30  p.m. </p>'+ '</div>'+ '</div>'; var infowindow1142 = new google.maps.InfoWindow({ content: contentString1142 }); 
//markers 
var marker1142 = new google.maps.Marker({ position: point1142, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1142.15   DE  NOVIEMBRE." }); 
//information for 
function goToLink1142() { infowindow1142.open(map,marker1142); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1142, 'click', goToLink1142); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1143 
//positions 
var point1143 = new google.maps.LatLng(13.516806, -88.874094); var contentString1143 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">20  DE  MARZO.</h1>'+ '<div id="bodyContent">'+ '<p><b>20  DE  MARZO.</b> , — 20  de  Marzo  de  1971.  Dirección:   Barrio  Los Remedios, 3ª  Calle  Poniente, Nº  2 Zacatecoluca. Días y horas  de reuniones: De  Lunes  a  Domingo de  6:30  a  8:30  p.m.  </p>'+ '</div>'+ '</div>'; var infowindow1143 = new google.maps.InfoWindow({ content: contentString1143 }); 
//markers 
var marker1143 = new google.maps.Marker({ position: point1143, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1143.20  DE  MARZO." }); 
//information for 
function goToLink1143() { infowindow1143.open(map,marker1143); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1143, 'click', goToLink1143); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1144 
//positions 
var point1144 = new google.maps.LatLng(13.515667, -88.871660); var contentString1144 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">21  DE JULIO.</h1>'+ '<div id="bodyContent">'+ '<p><b>21  DE JULIO.</b> , — 21 de  Julio de  2003.  Dirección:  7ª Avenida  Norte y Calle  Litoral, Zacatecoluca. Días y horas  de  reuniones: De Lunes a Domingo de 6:30 a 8:30 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow1144 = new google.maps.InfoWindow({ content: contentString1144 }); 
//markers 
var marker1144 = new google.maps.Marker({ position: point1144, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1144.21  DE JULIO." }); 
//information for 
function goToLink1144() { infowindow1144.open(map,marker1144); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1144, 'click', goToLink1144); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1145 
//positions 
var point1145 = new google.maps.LatLng(13.500385, -88.871141); var contentString1145 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">28  DE  AGOSTO.</h1>'+ '<div id="bodyContent">'+ '<p><b>28  DE  AGOSTO.</b> , —  28  de  Agosto de  2003.   Dirección:   Colonia San  Carlos,  Zacatecoluca. Días  y horas  de  reuniones: De  Lunes  a Domingo de  6:30 a 8:30 p.m. </p>'+ '</div>'+ '</div>'; var infowindow1145 = new google.maps.InfoWindow({ content: contentString1145 }); 
//markers 
var marker1145 = new google.maps.Marker({ position: point1145, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1145.28  DE  AGOSTO." }); 
//information for 
function goToLink1145() { infowindow1145.open(map,marker1145); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1145, 'click', goToLink1145); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1146 
//positions 
var point1146 = new google.maps.LatLng(13.499952, -88.867430); var contentString1146 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">DOS DE JUNIO.</h1>'+ '<div id="bodyContent">'+ '<p><b>DOS DE JUNIO.</b> , — 02 de  Junio  de  1971.  Dirección:  Barrio Analco, Pasaje  Angúlo  Nº  3, Zacatecoluca. Días y horas  de  reuniones: De Lunes  a  Domingo de  6:30  a  8:30  p.m.  </p>'+ '</div>'+ '</div>'; var infowindow1146 = new google.maps.InfoWindow({ content: contentString1146 }); 
//markers 
var marker1146 = new google.maps.Marker({ position: point1146, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1146.DOS DE JUNIO." }); 
//information for 
function goToLink1146() { infowindow1146.open(map,marker1146); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1146, 'click', goToLink1146); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1147 
//positions 
var point1147 = new google.maps.LatLng(13.510321, -88.877640); var contentString1147 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">MI   ÚLTIMA    ESPERANZA.</h1>'+ '<div id="bodyContent">'+ '<p><b>MI   ÚLTIMA    ESPERANZA.</b> , —   02    de    Septiembre   de    1983. Dirección:  Colonia  La Esperanza Calle Principal, Rafael Osorio  final, Zacatecoluca. Días y horas  de  reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow1147 = new google.maps.InfoWindow({ content: contentString1147 }); 
//markers 
var marker1147 = new google.maps.Marker({ position: point1147, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1147.MI   ÚLTIMA    ESPERANZA." }); 
//information for 
function goToLink1147() { infowindow1147.open(map,marker1147); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1147, 'click', goToLink1147); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1148 
//positions 
var point1148 = new google.maps.LatLng(13.501849, -88.879663); var contentString1148 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NUEVO DESPERTAR EN BRISAS DE LA PAZ.</h1>'+ '<div id="bodyContent">'+ '<p><b>NUEVO DESPERTAR EN BRISAS DE LA PAZ.</b> , — 05 de  Marzo de 2008. Dirección:  Urbanización Brisas de La Paz, Calle Principal, Casa Nº 2, Carretera autopista Zacatecoluca. Días y horas  de  reuniones: De  Lunes  a Domingo de  6:30  a 8:30  p.m.</p>'+ '</div>'+ '</div>'; var infowindow1148 = new google.maps.InfoWindow({ content: contentString1148 }); 
//markers 
var marker1148 = new google.maps.Marker({ position: point1148, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1148.NUEVO DESPERTAR EN BRISAS DE LA PAZ." }); 
//information for 
function goToLink1148() { infowindow1148.open(map,marker1148); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1148, 'click', goToLink1148); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1149 
//positions 
var point1149 = new google.maps.LatLng(13.509439, -88.867304); var contentString1149 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">PRIMERA TRADICIÓN.</h1>'+ '<div id="bodyContent">'+ '<p><b>PRIMERA TRADICIÓN.</b> , — 21 de Enero de 1987.  Dirección:  6ª Calle Oriente, No   14,  Barrio Santa  Lucía. Zacatecoluca. Días y horas  de reuniones: De  Lunes  a  Domingo de  6:30  a  8:30  p.m.  </p>'+ '</div>'+ '</div>'; var infowindow1149 = new google.maps.InfoWindow({ content: contentString1149 }); 
//markers 
var marker1149 = new google.maps.Marker({ position: point1149, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1149.PRIMERA TRADICIÓN." }); 
//information for 
function goToLink1149() { infowindow1149.open(map,marker1149); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1149, 'click', goToLink1149); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1150 
//positions 
var point1150 = new google.maps.LatLng(13.510254, -88.881287); var contentString1150 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">RESCATANDO VIDAS.</h1>'+ '<div id="bodyContent">'+ '<p><b>RESCATANDO VIDAS.</b> , — 09  de  Noviembre de  2010.  Dirección: Carretera al litoral,  Km 56 ½ frente  al Biggest, Zacatecoluca. Días y horas  de  reuniones: De  Lunes  a  Domingo de  6:30  a  8:30  p.m. </p>'+ '</div>'+ '</div>'; var infowindow1150 = new google.maps.InfoWindow({ content: contentString1150 }); 
//markers 
var marker1150 = new google.maps.Marker({ position: point1150, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1150.RESCATANDO VIDAS." }); 
//information for 
function goToLink1150() { infowindow1150.open(map,marker1150); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1150, 'click', goToLink1150); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1151 
//positions 
var point1151 = new google.maps.LatLng(13.503881, -88.869850); var contentString1151 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">SANTA LUCÍA.</h1>'+ '<div id="bodyContent">'+ '<p><b>SANTA LUCÍA.</b> , — 22 de Junio de 1977. Dirección: 10ª Avenida Norte y 1ª  Calle  Oriente, Barrio  Santa  Lucía Zacatecoluca. Días  y horas de  reuniones: De Lunes a Domingo de  6:30 a 8:30 p.m. </p>'+ '</div>'+ '</div>'; var infowindow1151 = new google.maps.InfoWindow({ content: contentString1151 }); 
//markers 
var marker1151 = new google.maps.Marker({ position: point1151, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1151.SANTA LUCÍA." }); 
//information for 
function goToLink1151() { infowindow1151.open(map,marker1151); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1151, 'click', goToLink1151); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1152 
//positions 
var point1152 = new google.maps.LatLng(13.512636, -88.871893); var contentString1152 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UN  MILAGRO DE DIOS.</h1>'+ '<div id="bodyContent">'+ '<p><b>UN  MILAGRO DE DIOS.</b> , — 06  de  Mayo  de  1972.  Dirección:  12 Calle Poniente, Nº 9. Barrio El Calvario,  Zacatecoluca. Días y horas de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.  y Domingo de 10:00 a.m. a 12:00 m.d.</p>'+ '</div>'+ '</div>'; var infowindow1152 = new google.maps.InfoWindow({ content: contentString1152 }); 
//markers 
var marker1152 = new google.maps.Marker({ position: point1152, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1152.UN  MILAGRO DE DIOS." }); 
//information for 
function goToLink1152() { infowindow1152.open(map,marker1152); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1152, 'click', goToLink1152); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1153 
//positions 
var point1153 = new google.maps.LatLng(13.524247, -88.867222); var contentString1153 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UN MILAGRO EN SANTA ROSA.</h1>'+ '<div id="bodyContent">'+ '<p><b>UN MILAGRO EN SANTA ROSA.</b> , — 09 de Enero de 1986. Dirección: Cantón Santa  Rosa, Calle Principal 4 Cuadras abajo de La Carretera al  litoral,  Zacatecoluca. Días  y  horas   de  reuniones: De  Lunes  a Domingo de 6:00 a 8:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow1153 = new google.maps.InfoWindow({ content: contentString1153 }); 
//markers 
var marker1153 = new google.maps.Marker({ position: point1153, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1153.UN MILAGRO EN SANTA ROSA." }); 
//information for 
function goToLink1153() { infowindow1153.open(map,marker1153); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1153, 'click', goToLink1153); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1154 
//positions 
var point1154 = new google.maps.LatLng(13.510740, -88.874223); var contentString1154 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UN  OASIS  EN  ANALCO.</h1>'+ '<div id="bodyContent">'+ '<p><b>UN  OASIS  EN  ANALCO.</b> , —  04  de  Febrero de  2002.  Dirección: 6ª  Calle  Poniente, Barrio  Analco,  Zacatecoluca. Días  y horas   de reuniones: De  Lunes  a  Domingo de  7:00  a  9:00  p.m.</p>'+ '</div>'+ '</div>'; var infowindow1154 = new google.maps.InfoWindow({ content: contentString1154 }); 
//markers 
var marker1154 = new google.maps.Marker({ position: point1154, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1154.UN  OASIS  EN  ANALCO." }); 
//information for 
function goToLink1154() { infowindow1154.open(map,marker1154); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1154, 'click', goToLink1154); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1155 
//positions 
var point1155 = new google.maps.LatLng(13.491980, -88.871416); var contentString1155 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UNA LUZ EN EL SOCORRO.</h1>'+ '<div id="bodyContent">'+ '<p><b>UNA LUZ EN EL SOCORRO.</b> , — 21 de Octubre de 1977.  Dirección: Cantón El Socorro, Carretera  Litoral,  Zacatecoluca. Días  y horas de  reuniones: De Lunes a Domingo de  6:30 a 8:30 p.m.  Miembros asistentes: 17 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1155 = new google.maps.InfoWindow({ content: contentString1155 });
 //markers
  var marker1155 = new google.maps.Marker({ position: point1155, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1155.UNA LUZ EN EL SOCORRO." }); 
  //information for 
  function goToLink1155() { infowindow1155.open(map,marker1155); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1155, 'click', goToLink1155); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1156 
//positions 
var point1156 = new google.maps.LatLng(13.472283, -88.868412); var contentString1156 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UNA  LUZ EN  LA LUCHA.</h1>'+ '<div id="bodyContent">'+ '<p><b>UNA  LUZ EN  LA LUCHA.</b> , — 10  de  Agosto de  2003.  Dirección: Cantón La Lucha, Caserío El Chaparral, Calle Principal,  Carretera al litoral, Zacatecoluca. Días y horas de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow1156 = new google.maps.InfoWindow({ content: contentString1156 }); 
//markers 
var marker1156 = new google.maps.Marker({ position: point1156, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1156.UNA  LUZ EN  LA LUCHA." }); 
//information for 
function goToLink1156() { infowindow1156.open(map,marker1156); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1156, 'click', goToLink1156); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1157 
//positions 
var point1157 = new google.maps.LatLng(13.522530, -88.868200); var contentString1157 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UNA LUZ EN MI CALVARIO.</h1>'+ '<div id="bodyContent">'+ '<p><b>UNA LUZ EN MI CALVARIO.</b> , — 22 de Febrero de 1999.  Dirección: Avenida  Juan  Manuel  Rodríguez, Barrio El Calvario,  Zacatecoluca. Días y horas  de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m. Miembros asistentes: 20 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1157 = new google.maps.InfoWindow({ content: contentString1157 }); 
//markers 
var marker1157 = new google.maps.Marker({ position: point1157, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1157.UNA LUZ EN MI CALVARIO." }); 
//information for 
function goToLink1157() { infowindow1157.open(map,marker1157); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1157, 'click', goToLink1157); google.maps.event.addDomListener(window, 'load', initialize);

}