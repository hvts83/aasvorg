function initialize() {


    //Map parametrs
    var mapOptions = {
        zoom: 14,
        center: new google.maps.LatLng(13.663230, -89.250938),
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




//MARCADOR 337 
//positions 
var point337 = new google.maps.LatLng(13.678135, -89.266873); var contentString337 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">ACCIÓN 84.</h1>'+ '<div id="bodyContent">'+ '<p><b>ACCIÓN 84.</b> , — 01 de Febrero de 1984. Dirección: Pasaje 2 Polígono “A” Nº 34 Urbanización Jardínes de  La Hacienda. Días y horas  de reuniones: De  Lunes  a  Domingo de  7:30  a  9:30  p.m.  </p>'+ '</div>'+ '</div>'; var infowindow337 = new google.maps.InfoWindow({ content: contentString337 }); 
//markers
 var marker337 = new google.maps.Marker({ position: point337, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "337.ACCIÓN 84." }); 
 //information for 
 function goToLink337() { infowindow337.open(map,marker337); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker337, 'click', goToLink337); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 338 
//positions 
var point338 = new google.maps.LatLng(13.672148, -89.241362); var contentString338 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">BUSCANDO  FE.</h1>'+ '<div id="bodyContent">'+ '<p><b>BUSCANDO  FE.</b> , — 14 de  Noviembre de  1983.  Dirección:  2ª Calle Poniente Pasaje   27  de  Septiembre, comunidad ADESCO  Lupita. Días y horas  de reuniones: De Lunes a Domingo de 7:00 a 9:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow338 = new google.maps.InfoWindow({ content: contentString338 }); 
//markers
 var marker338 = new google.maps.Marker({ position: point338, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "338.BUSCANDO  FE." }); 
 //information for 
 function goToLink338() { infowindow338.open(map,marker338); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker338, 'click', goToLink338); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 339 
//positions 
var point339 = new google.maps.LatLng(13.679831, -89.241066); var contentString339 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">PASO  A PASO.</h1>'+ '<div id="bodyContent">'+ '<p><b>PASO  A PASO.</b> , —  16  de  Abril de  1982.  Dirección:  Residencial La Sultana,  Senda “A” Calle Mediterráneo. Días y horas  de  reuniones: De Lunes a Domingo de  7:00 a 9:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow339 = new google.maps.InfoWindow({ content: contentString339 }); 
//markers
 var marker339 = new google.maps.Marker({ position: point339, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "339.PASO  A PASO." }); 
 //information for 
 function goToLink339() { infowindow339.open(map,marker339); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker339, 'click', goToLink339); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 340 
//positions 
var point340 = new google.maps.LatLng(13.667609, -89.255520); var contentString340 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">SANTA  ELENA.</h1>'+ '<div id="bodyContent">'+ '<p><b>SANTA  ELENA.</b> , — 05  de  Junio  de  2004.  Dirección:  Plaza  Santa Elena Local No 107, Boulevard Santa  Elena,  Antiguo  Cuscatlán Días y horas  de  reuniones: De  Lunes  a  Domingo de  6:00  a  7:30  p.m.</p>'+ '</div>'+ '</div>'; var infowindow340 = new google.maps.InfoWindow({ content: contentString340 }); 
//markers
 var marker340 = new google.maps.Marker({ position: point340, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "340.SANTA  ELENA." }); 
 //information for 
 function goToLink340() { infowindow340.open(map,marker340); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker340, 'click', goToLink340); google.maps.event.addDomListener(window, 'load', initialize);





//MARCADOR 341 
//positions 

var point341 = new google.maps.LatLng(13.594940, -89.480036); var contentString341 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">CIELO, MAR Y ESPERANZA.</h1>'+ '<div id="bodyContent">'+ '<p><b>CIELO, MAR Y ESPERANZA.</b> , — 06  de  Noviembre de  1986. Dirección:  Carretera Litoral, entrada a  La Hacienda Taquillo.  Días y horas  de  reuniones: De  Lunes  a  Domingo de  6:30  a  8:30  p.m. </p>'+ '</div>'+ '</div>'; var infowindow341 = new google.maps.InfoWindow({ content: contentString341 }); 
//markers 
var marker341 = new google.maps.Marker({ position: point341, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "341.CIELO, MAR Y ESPERANZA." }); 
//information for 
function goToLink341() { infowindow341.open(map,marker341); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker341, 'click', goToLink341); google.maps.event.addDomListener(window, 'load', initialize);
//MARCADOR 342 
//positions 

var point342 = new google.maps.LatLng(13.592187, -89.468148); var contentString342 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UNA  LUZ CERCA DEL MAR.</h1>'+ '<div id="bodyContent">'+ '<p><b>UNA  LUZ CERCA DEL MAR.</b> , — 24 de  Junio  de  1973.  Dirección: Calle Central  B, Santo  Domingo, Chiltiupán  frente  a EX — ANTEL. Días y horas  de reuniones: De Lunes a Domingo de 7:00 a 9:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow342 = new google.maps.InfoWindow({ content: contentString342 }); 
//markers 
var marker342 = new google.maps.Marker({ position: point342, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "342.UNA  LUZ CERCA DEL MAR." }); 
//information for 
function goToLink342() { infowindow342.open(map,marker342); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker342, 'click', goToLink342); google.maps.event.addDomListener(window, 'load', initialize);





//MARCADOR 343 
//positions 
var point343 = new google.maps.LatLng(13.845297, -89.424052); var contentString343 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">04  DE  FEBRERO.</h1>'+ '<div id="bodyContent">'+ '<p><b>04  DE  FEBRERO.</b> , — 04  de  Febrero de  1973.  Dirección:  Cantón Santa  Rosa,  1ª  Zona  costado Oriente de  La Iglesia  Católica. Días y horas  de  reuniones: De  Lunes  a  Domingo de  6:00  a  8:00  p.m. Miembros asistentes: 28 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow343 = new google.maps.InfoWindow({ content: contentString343 }); 
//markers 
var marker343 = new google.maps.Marker({ position: point343, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "343.04  DE  FEBRERO." }); 
//information for
 function goToLink343() { infowindow343.open(map,marker343); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker343, 'click', goToLink343); google.maps.event.addDomListener(window, 'load', initialize);
//MARCADOR 344 
//positions 
var point344 = new google.maps.LatLng(13.793212, -89.451628); var contentString344 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">07  DE MAYO.</h1>'+ '<div id="bodyContent">'+ '<p><b>07  DE MAYO.</b> , — 07  de  Mayo  de  1998.  Dirección:  Calle  Principal Hacienda Zapotitán, Colonia  Joyas  de  Zapotitán lote  Nº  5.  Días y horas  de  reuniones: De  Lunes  a  Domingo de  6:00  a  8:00  p.m. Miembros asistentes: 9 Hombres y 1 Mujer.</p>'+ '</div>'+ '</div>'; var infowindow344 = new google.maps.InfoWindow({ content: contentString344 }); 
//markers 
var marker344 = new google.maps.Marker({ position: point344, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "344.07  DE MAYO." }); 
//information for
 function goToLink344() { infowindow344.open(map,marker344); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker344, 'click', goToLink344); google.maps.event.addDomListener(window, 'load', initialize);
//MARCADOR 345 
//positions 
var point345 = new google.maps.LatLng(13.765965, -89.420894); var contentString345 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">09 DE ABRIL.</h1>'+ '<div id="bodyContent">'+ '<p><b>09 DE ABRIL.</b> , — 09 de Abril de 2001. Dirección: Cantón Flor Amarilla 2ª Zona. Días y horas  de  reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow345 = new google.maps.InfoWindow({ content: contentString345 }); 
//markers 
var marker345 = new google.maps.Marker({ position: point345, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "345.09 DE ABRIL." }); 
//information for
 function goToLink345() { infowindow345.open(map,marker345); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker345, 'click', goToLink345); google.maps.event.addDomListener(window, 'load', initialize);
//MARCADOR 346 
//positions 
var point346 = new google.maps.LatLng(13.837270, -89.445792); var contentString346 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">AMA TU PRÓJIMO.</h1>'+ '<div id="bodyContent">'+ '<p><b>AMA TU PRÓJIMO.</b> , — 20 de Agosto de 2014. Dirección:  ½ Cuadra del  punto de  Ruta  100.  Días  y horas  de  reuniones: De  Lunes  a Sábado de 6:00 a 8:00 p.m.  Miembros asistentes: 10 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow346 = new google.maps.InfoWindow({ content: contentString346 }); 
//markers 
var marker346 = new google.maps.Marker({ position: point346, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "346.AMA TU PRÓJIMO." }); 
//information for
 function goToLink346() { infowindow346.open(map,marker346); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker346, 'click', goToLink346); google.maps.event.addDomListener(window, 'load', initialize);
//MARCADOR 347 
//positions 
var point347 = new google.maps.LatLng(13.811342, -89.434148); var contentString347 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">AQUÍ ME QUEDO.</h1>'+ '<div id="bodyContent">'+ '<p><b>AQUÍ ME QUEDO.</b> , — 05 de Septiembre de 2013. Dirección: Colonia Ciudad Obrera 26 de Enero Pasaje  5 Polígono “B” Casa Nº 33. Días y horas  de  reuniones: De  Lunes  a Sábado de  6:30  a 8:30  p.m.  y Domingo de  4:00 a 6:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow347 = new google.maps.InfoWindow({ content: contentString347 }); 
//markers 
var marker347 = new google.maps.Marker({ position: point347, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "347.AQUÍ ME QUEDO." }); 
//information for
 function goToLink347() { infowindow347.open(map,marker347); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker347, 'click', goToLink347); google.maps.event.addDomListener(window, 'load', initialize);
//MARCADOR 348 
//positions 
var point348 = new google.maps.LatLng(13.823443, -89.458089); var contentString348 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">EL TRIUNFO.</h1>'+ '<div id="bodyContent">'+ '<p><b>EL TRIUNFO.</b> , — 29 de Marzo de 1989.  Dirección:  Colonia  San Luis, al Costado Sur de  Avícola Salvadoreña. Cantón San Antonio  Abad. Días y horas  de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m. Miembros asistentes: 17 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow348 = new google.maps.InfoWindow({ content: contentString348 }); 
//markers 
var marker348 = new google.maps.Marker({ position: point348, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "348.EL TRIUNFO." }); 
//information for 
function goToLink348() { infowindow348.open(map,marker348); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker348, 'click', goToLink348); google.maps.event.addDomListener(window, 'load', initialize);
//MARCADOR 349 
//positions 
var point349 = new google.maps.LatLng(13.838978, -89.443561); var contentString349 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">FELICIDAD EN  MI BARRIO.</h1>'+ '<div id="bodyContent">'+ '<p><b>FELICIDAD EN  MI BARRIO.</b> , — 09  de  Enero  de  1989.  Dirección: Pasaje  25 de Junio, Barrio El Centro Nº 3. Días y horas de reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow349 = new google.maps.InfoWindow({ content: contentString349 }); 
//markers 
var marker349 = new google.maps.Marker({ position: point349, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "349.FELICIDAD EN  MI BARRIO." }); 
//information for 
function goToLink349() { infowindow349.open(map,marker349); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker349, 'click', goToLink349); google.maps.event.addDomListener(window, 'load', initialize);
//MARCADOR 350 
//positions 
var point350 = new google.maps.LatLng(13.844306, -89.422363); var contentString350 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">MÁS FE EN MI CAMINO.</h1>'+ '<div id="bodyContent">'+ '<p><b>MÁS FE EN MI CAMINO.</b> , — 02 de Noviembre de 1979.  Dirección: Cantón Santa  Rosa Zona  1. Días y horas  de  reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow350 = new google.maps.InfoWindow({ content: contentString350 }); 
//markers 
var marker350 = new google.maps.Marker({ position: point350, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "350.MÁS FE EN MI CAMINO." }); 
//information for 
function goToLink350() { infowindow350.open(map,marker350); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker350, 'click', goToLink350); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 351 
//positions 
var point351 = new google.maps.LatLng(13.832466, -89.402809); var contentString351 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NACER DE NUEVO.</h1>'+ '<div id="bodyContent">'+ '<p><b>NACER DE NUEVO.</b> , — 27 de Diciembre de 2008. Dirección: Cantón El Conacaste Calle  Principal.  Días y horas  de  reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow351 = new google.maps.InfoWindow({ content: contentString351 }); 
//markers 
var marker351 = new google.maps.Marker({ position: point351, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "351.NACER DE NUEVO." }); 
//information for 
function goToLink351() { infowindow351.open(map,marker351); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker351, 'click', goToLink351); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 352 
//positions 
var point352 = new google.maps.LatLng(13.841462, -89.445844); var contentString352 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NUESTRA RECUPERACIÓN.</h1>'+ '<div id="bodyContent">'+ '<p><b>NUESTRA RECUPERACIÓN.</b> , — 22 de Junio  de 1965.  Dirección:  2ª Avenida  Sur Barrio El Rosario.  Días y horas  de  reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow352 = new google.maps.InfoWindow({ content: contentString352 }); 
//markers 
var marker352 = new google.maps.Marker({ position: point352, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "352.NUESTRA RECUPERACIÓN." }); 
//information for 
function goToLink352() { infowindow352.open(map,marker352); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker352, 'click', goToLink352); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 353 
//positions 
var point353 = new google.maps.LatLng(13.821032, -89.406939); var contentString353 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NUESTRO  RENACER.</h1>'+ '<div id="bodyContent">'+ '<p><b>NUESTRO  RENACER.</b> , — 04  de   Diciembre  de   1977.   Dirección: Cantón y Hacienda San Andrés.  Días y horas de reuniones: De Lunes a Domingo de  6:30 a 8:30 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow353 = new google.maps.InfoWindow({ content: contentString353 }); 
//markers 
var marker353 = new google.maps.Marker({ position: point353, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "353.NUESTRO  RENACER." }); 
//information for 
function goToLink353() { infowindow353.open(map,marker353); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker353, 'click', goToLink353); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 354 
//positions 
var point354 = new google.maps.LatLng(13.842962, -89.422577); var contentString354 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">PAZ Y ESPERANZA.</h1>'+ '<div id="bodyContent">'+ '<p><b>PAZ Y ESPERANZA.</b> , — 01  de  Julio  de  1985.  Dirección:  Cantón Santa  Rosa  Zona  1, Jurisdicción de  Ciudad Arce.  Días y horas  de reuniones: De  Lunes  a  Domingo de  6:00  a  8:00  p.m.  </p>'+ '</div>'+ '</div>'; var infowindow354 = new google.maps.InfoWindow({ content: contentString354 }); 
//markers 
var marker354 = new google.maps.Marker({ position: point354, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "354.PAZ Y ESPERANZA." }); 
//information for 
function goToLink354() { infowindow354.open(map,marker354); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker354, 'click', goToLink354); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 355 
//positions 
var point355 = new google.maps.LatLng(13.848016, -89.423220); var contentString355 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">SOBRIEDAD  SIN  FRONTERAS.</h1>'+ '<div id="bodyContent">'+ '<p><b>SOBRIEDAD  SIN  FRONTERAS.</b> , — 03  de   Septiembre de   1998. Dirección:  Cantón Santa  Rosa  Zona  1 Costado Sur Oriente de  La Cancha de  fútbol.  Días y horas  de  reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow355 = new google.maps.InfoWindow({ content: contentString355 }); 
//markers 
var marker355 = new google.maps.Marker({ position: point355, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "355.SOBRIEDAD  SIN  FRONTERAS." }); 
//information for 
function goToLink355() { infowindow355.open(map,marker355); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker355, 'click', goToLink355); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 356 
//positions 
var point356 = new google.maps.LatLng(13.845786, -89.418219); var contentString356 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UN  MILAGRO DE  DIOS.</h1>'+ '<div id="bodyContent">'+ '<p><b>UN  MILAGRO DE  DIOS.</b> , —  17  de   Marzo  de   2007.   Dirección: Cantón Santa  Rosa Zona 2, El Cafetalito. Días y horas  de reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow356 = new google.maps.InfoWindow({ content: contentString356 }); 
//markers 
var marker356 = new google.maps.Marker({ position: point356, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "356.UN  MILAGRO DE  DIOS." }); 
//information for 
function goToLink356() { infowindow356.open(map,marker356); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker356, 'click', goToLink356); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 357 
//positions 
var point357 = new google.maps.LatLng(13.837664, -89.433527); var contentString357 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UNA  FE QUE  OBRA.</h1>'+ '<div id="bodyContent">'+ '<p><b>UNA  FE QUE  OBRA.</b> , — 22  de  Septiembre de  2005.  Dirección: Cantón Santa  Rosa,  Colonia  San  Francisco  Zona  3.  Días  y horas de  reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m.</p>'+ '</div>'+ '</div>'; var infowindow357 = new google.maps.InfoWindow({ content: contentString357 }); 
//markers 
var marker357 = new google.maps.Marker({ position: point357, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "357.UNA  FE QUE  OBRA." }); 
//information for 
function goToLink357() { infowindow357.open(map,marker357); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker357, 'click', goToLink357); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 358 
//positions 
var point358 = new google.maps.LatLng(13.807051, -89.447746); var contentString358 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UNA  LUZ EN  LA SOMBRA.</h1>'+ '<div id="bodyContent">'+ '<p><b>UNA  LUZ EN  LA SOMBRA.</b> , — 20  de  Junio  de  1976.  Dirección: Cantón Santa   Lucía,  Lotificación  La Esperanza 1ª  Zona  frente   a Cancha de  fútbol.  Días y horas  de  reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow358 = new google.maps.InfoWindow({ content: contentString358 }); 
//markers 
var marker358 = new google.maps.Marker({ position: point358, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "358.UNA  LUZ EN  LA SOMBRA." }); 
//information for 
function goToLink358() { infowindow358.open(map,marker358); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker358, 'click', goToLink358); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 359 
//positions 
var point359 = new google.maps.LatLng(13.827976, -89.440409); var contentString359 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UNA  LUZ EN  MI VALLE.</h1>'+ '<div id="bodyContent">'+ '<p><b>UNA  LUZ EN  MI VALLE.</b> , — 18  de  Agosto de  1976.  Dirección: Cantón San Antonio  Abad,  Calle Zapotitán Entrada a La Liona. Días y horas  de  reuniones: De  Lunes  a  Domingo de  6:00  a  8:00  p.m. </p>'+ '</div>'+ '</div>'; var infowindow359 = new google.maps.InfoWindow({ content: contentString359 }); 
//markers 
var marker359 = new google.maps.Marker({ position: point359, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "359.UNA  LUZ EN  MI VALLE." }); 
//information for 
function goToLink359() { infowindow359.open(map,marker359); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker359, 'click', goToLink359); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 360 
//positions 
var point360 = new google.maps.LatLng(13.827976, -89.440409); var contentString360 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UNA  SORPRESA MÁS.</h1>'+ '<div id="bodyContent">'+ '<p><b>UNA  SORPRESA MÁS.</b> , —  01  de  Diciembre de  1984.  Dirección: Cantón Santa Lucía 3ª Zona Parada Las rejas Calle adoquinada. Días y horas  de  reuniones: De  Lunes  a  Domingo de  6:00  a  8:00  p.m.</p>'+ '</div>'+ '</div>'; var infowindow360 = new google.maps.InfoWindow({ content: contentString360 }); 
//markers 
var marker360 = new google.maps.Marker({ position: point360, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "360.UNA  SORPRESA MÁS." }); //information for function goToLink360() { infowindow360.open(map,marker360); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker360, 'click', goToLink360); google.maps.event.addDomListener(window, 'load', initialize);
//MARCADOR 361 
//positions 
var point361 = new google.maps.LatLng(13.768554, -89.416569); var contentString361 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UNIDAD 20 DE MAYO.</h1>'+ '<div id="bodyContent">'+ '<p><b>UNIDAD 20 DE MAYO.</b> , — 20 de Mayo de 2008.  Dirección:  Cantón Las Cruces, frente  a La Iglesia  Católica. Días y horas  de  reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow361 = new google.maps.InfoWindow({ content: contentString361 }); 
//markers 
var marker361 = new google.maps.Marker({ position: point361, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "361.UNIDAD 20 DE MAYO." }); //information for function goToLink361() { infowindow361.open(map,marker361); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker361, 'click', goToLink361); google.maps.event.addDomListener(window, 'load', initialize);
//MARCADOR 362 
//positions 
var point362 = new google.maps.LatLng(13.839558, -89.444178); var contentString362 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UNIDAD  97.</h1>'+ '<div id="bodyContent">'+ '<p><b>UNIDAD  97.</b> , —  03  de  Julio  de  1997.  Dirección:  Barrio El Centro, Calle Gustavo Guerrero Nº 22. Días y horas  de reuniones: De Lunes a Domingo de  6:30 a 8:30 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow362 = new google.maps.InfoWindow({ content: contentString362 }); 
//markers 
var marker362 = new google.maps.Marker({ position: point362, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "362.UNIDAD  97." }); //information for function goToLink362() { infowindow362.open(map,marker362); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker362, 'click', goToLink362); google.maps.event.addDomListener(window, 'load', initialize);
//MARCADOR 363 
//positions 
var point363 = new google.maps.LatLng(13.838533, -89.443519); var contentString363 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">VIVIENDO EN SOBRIEDAD.</h1>'+ '<div id="bodyContent">'+ '<p><b>VIVIENDO EN SOBRIEDAD.</b> , — 20 de Octubre de 2007.  Dirección: Colonia   San  Francisco   Calle  Principal   frente   a  Iglesia   Católica, Cantón Zapotitán. Días y horas  de  reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow363 = new google.maps.InfoWindow({ content: contentString363 }); 
//markers 
var marker363 = new google.maps.Marker({ position: point363, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "363.VIVIENDO EN SOBRIEDAD." }); //information for function goToLink363() { infowindow363.open(map,marker363); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker363, 'click', goToLink363); google.maps.event.addDomListener(window, 'load', initialize);





//MARCADOR 364 
//positions 
var point364 = new google.maps.LatLng(13.707196, -89.345540); var contentString364 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">27  DE JUNIO.</h1>'+ '<div id="bodyContent">'+ '<p><b>27  DE JUNIO.</b> , —  27  de  Junio  de  1976.  Dirección:  Calle  Principal Colón, atrás de Gasolinera Shell (UNO) salida de Colón. Días y horas de  reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m.  Miembros asistentes: 14 Hombres y 1 Mujer.</p>'+ '</div>'+ '</div>'; var infowindow364 = new google.maps.InfoWindow({ content: contentString364 }); 
//markers 
var marker364 = new google.maps.Marker({ position: point364, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "364.27  DE JUNIO." }); 
//information for 
function goToLink364() { infowindow364.open(map,marker364); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker364, 'click', goToLink364); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 365 
//positions 
var point365 = new google.maps.LatLng(13.705139, -89.340143); var contentString365 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">CRISTÓBAL COLÓN.</h1>'+ '<div id="bodyContent">'+ '<p><b>CRISTÓBAL COLÓN.</b> , —  03  de   Septiembre de   1968.   Dirección: Calle Principal Barrio El Centro. Días y horas de reuniones: De Lunes a Domingo de 7:00 a 9:00 p.m.  Miembros asistentes: 13 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow365 = new google.maps.InfoWindow({ content: contentString365 }); 
//markers 
var marker365 = new google.maps.Marker({ position: point365, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "365.CRISTÓBAL COLÓN." }); 
//information for 
function goToLink365() { infowindow365.open(map,marker365); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker365, 'click', goToLink365); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 366 
//positions 
var point366 = new google.maps.LatLng(13.706390, -89.352140); var contentString366 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">DE LAS TINIEBLAS HACIA LA LUZ.</h1>'+ '<div id="bodyContent">'+ '<p><b>DE LAS TINIEBLAS HACIA LA LUZ.</b> , — 02  Septiembre de  2011. Dirección,  2a   Avenida  Norte  y 13  Calle  Poniente, Lourdes  Colón. Días  y horas  de  reuniones: De  Lunes  a  Domingo de  6:30  a  8:30 p.m.Miembros asistentes: 6 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow366 = new google.maps.InfoWindow({ content: contentString366 }); 
//markers 
var marker366 = new google.maps.Marker({ position: point366, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "366.DE LAS TINIEBLAS HACIA LA LUZ." }); 
//information for 
function goToLink366() { infowindow366.open(map,marker366); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker366, 'click', goToLink366); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 367 
//positions 
var point367 = new google.maps.LatLng(13.705114, -89.351549); var contentString367 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">DESPERTAR FELIZ.</h1>'+ '<div id="bodyContent">'+ '<p><b>DESPERTAR FELIZ.</b> , — 10 de Febrero de 1965. Dirección: 1ª Avenida Sur, Nº 14. Días y horas  de reuniones: De Lunes a Domingo de 7:00 a 9:00 p.m.  Miembros asistentes: 26 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow367 = new google.maps.InfoWindow({ content: contentString367 }); 
//markers 
var marker367 = new google.maps.Marker({ position: point367, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "367.DESPERTAR FELIZ." }); 
//information for 
function goToLink367() { infowindow367.open(map,marker367); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker367, 'click', goToLink367); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 368 
//positions 
var point368 = new google.maps.LatLng(13.705254, -89.340464); var contentString368 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">DICHA DE SOBRIEDAD.</h1>'+ '<div id="bodyContent">'+ '<p><b>DICHA DE SOBRIEDAD.</b> , — 08 de  Noviembre de  1969.  Dirección: Avenida  José Simeón  Cañas  Nº  1-2.  Días  y horas  de  reuniones: De  Lunes  a Domingo de  6:30  a 8:30  p.m.  Miembros asistentes: 8</p>'+ '</div>'+ '</div>'; var infowindow368 = new google.maps.InfoWindow({ content: contentString368 }); 
//markers 
var marker368 = new google.maps.Marker({ position: point368, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "368.DICHA DE SOBRIEDAD." }); 
//information for 
function goToLink368() { infowindow368.open(map,marker368); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker368, 'click', goToLink368); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 369 
//positions 
var point369 = new google.maps.LatLng(13.704057, -89.348995); var contentString369 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">FUENTE DE LUZ.</h1>'+ '<div id="bodyContent">'+ '<p><b>FUENTE DE LUZ.</b> , — 01 de Noviembre de 1982.  Dirección:  Colonia Nueva Esperanza, Calle a La Estación Cantón entre Ríos. Días y horas de  reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m.  Miembros asistentes: 23 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow369 = new google.maps.InfoWindow({ content: contentString369 }); 
//markers 
var marker369 = new google.maps.Marker({ position: point369, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "369.FUENTE DE LUZ." }); 
//information for 
function goToLink369() { infowindow369.open(map,marker369); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker369, 'click', goToLink369); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 370 
//positions 
var point370 = new google.maps.LatLng(13.709352, -89.346324); var contentString370 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">LAS MORAS 1º  DE NOVIEMBRE.</h1>'+ '<div id="bodyContent">'+ '<p><b>LAS MORAS 1º  DE NOVIEMBRE.</b> , — 01  de  Noviembre de  2008. Dirección:  Cantón Las Moritas  Pasaje  Los Reyes.  Días  y horas  de reuniones: De  Lunes  a  Domingo de  6:30  a  8:30  p.m. </p>'+ '</div>'+ '</div>'; var infowindow370 = new google.maps.InfoWindow({ content: contentString370 }); 
//markers 
var marker370 = new google.maps.Marker({ position: point370, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "370.LAS MORAS 1º  DE NOVIEMBRE." }); 
//information for 
function goToLink370() { infowindow370.open(map,marker370); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker370, 'click', goToLink370); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 371 
//positions 
var point371 = new google.maps.LatLng(13.713385, -89.349055); var contentString371 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">LLEGA A SU MAYOR EDAD.</h1>'+ '<div id="bodyContent">'+ '<p><b>LLEGA A SU MAYOR EDAD.</b> , — 21 de Diciembre de 1993. Dirección: Colonia  Santa  Lucía Calle  Las Arboledas Nº  19.  Días  y horas  de reuniones: De  Lunes  a  Domingo de  6:30  a  8:30  p.m.  </p>'+ '</div>'+ '</div>'; var infowindow371 = new google.maps.InfoWindow({ content: contentString371 }); 
//markers 
var marker371 = new google.maps.Marker({ position: point371, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "371.LLEGA A SU MAYOR EDAD." }); 
//information for 
function goToLink371() { infowindow371.open(map,marker371); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker371, 'click', goToLink371); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 372 
//positions 
var point372 = new google.maps.LatLng(13.706879, -89.349752); var contentString372 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NUETRA FE.</h1>'+ '<div id="bodyContent">'+ '<p><b>NUETRA FE.</b> , — 30 de  Mayo de  1982.  Dirección:  2ª Avenida  Norte Nº  50  C Calle  17  de  Marzo  lotificación  Las Moritas.  Días  y horas de  reuniones: De Lunes a Domingo de  7:00 a 9:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow372 = new google.maps.InfoWindow({ content: contentString372 }); 
//markers 
var marker372 = new google.maps.Marker({ position: point372, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "372.NUETRA FE." }); 
//information for 
function goToLink372() { infowindow372.open(map,marker372); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker372, 'click', goToLink372); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 373 
//positions 
var point373 = new google.maps.LatLng(13.711512, -89.352845); var contentString373 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NUEVO LOURDES</h1>'+ '<div id="bodyContent">'+ '<p><b>NUEVO LOURDES</b> , .— 29 de Septiembre de 2006. Dirección: Senda 15 Block 68 Nº 35. Días y horas  de reuniones: De Lunes a Domingo de 7:00 a 9:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow373 = new google.maps.InfoWindow({ content: contentString373 }); 
//markers 
var marker373 = new google.maps.Marker({ position: point373, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "373.NUEVO LOURDES" }); 
//information for 
function goToLink373() { infowindow373.open(map,marker373); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker373, 'click', goToLink373); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 374 
//positions 
var point374 = new google.maps.LatLng(13.710880, -89.356559); var contentString374 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">SALVANDO VIDAS 05 DE MAYO.</h1>'+ '<div id="bodyContent">'+ '<p><b>SALVANDO VIDAS 05 DE MAYO.</b> , — 05 de Mayo de 2010. Dirección: Polígono 17  Casa  No  1 Pasaje  “A”,  Residencial Los Chorros. Días y horas  de  reuniones: De  Lunes  a  Domingo de  7:00  a  9:00  p.m. </p>'+ '</div>'+ '</div>'; var infowindow374 = new google.maps.InfoWindow({ content: contentString374 }); 
//markers 
var marker374 = new google.maps.Marker({ position: point374, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "374.SALVANDO VIDAS 05 DE MAYO." }); 
//information for 
function goToLink374() { infowindow374.open(map,marker374); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker374, 'click', goToLink374); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 375 
//positions 
var point375 = new google.maps.LatLng(13.717805, -89.364523); var contentString375 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">SENDERO  DE  VIDA.</h1>'+ '<div id="bodyContent">'+ '<p><b>SENDERO  DE  VIDA.</b> , —  15  de  Septiembre de  2009.   Dirección: Campos Verdes  1 Senda 9 Oriente polígono 37 Casa Nº 12, Colón. Días y horas  de reuniones: De Lunes a Domingo de 6:30 a 8:30 p.m. </p>'+ '</div>'+ '</div>'; var infowindow375 = new google.maps.InfoWindow({ content: contentString375 }); 
//markers 
var marker375 = new google.maps.Marker({ position: point375, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "375.SENDERO  DE  VIDA." }); 
//information for 
function goToLink375() { infowindow375.open(map,marker375); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker375, 'click', goToLink375); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 376 
//positions 
var point376 = new google.maps.LatLng(13.724350, -89.358894); var contentString376 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UNA  LUZ EN MIRAMONTE.</h1>'+ '<div id="bodyContent">'+ '<p><b>UNA  LUZ EN MIRAMONTE.</b> , — 09 de  Marzo  de  1996.  Dirección: Pasaje  5 Sur, Casa  16 polígono 3 Urbanización Miramonte, Lourdes Colón.  Días y horas  de  reuniones: De Lunes a Domingo de  6:30  a 8:30 p.m. </p>'+ '</div>'+ '</div>'; var infowindow376 = new google.maps.InfoWindow({ content: contentString376 }); 
//markers 
var marker376 = new google.maps.Marker({ position: point376, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "376.UNA  LUZ EN MIRAMONTE." }); 
//information for 
function goToLink376() { infowindow376.open(map,marker376); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker376, 'click', goToLink376); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 377 
//positions 
var point377 = new google.maps.LatLng(13.721050, -89.373066); var contentString377 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">VILLA LOURDES.</h1>'+ '<div id="bodyContent">'+ '<p><b>VILLA LOURDES.</b> , — 01  de   Marzo  de   2007.   Dirección:   Colonia Villa Lourdes, polígono “O”  Pasaje  1 Casa  Nº 49. Días y horas  de reuniones: De  Lunes  a  Domingo de  7:00  a  9:00  p.m.  </p>'+ '</div>'+ '</div>'; var infowindow377 = new google.maps.InfoWindow({ content: contentString377 }); 
//markers 
var marker377 = new google.maps.Marker({ position: point377, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "377.VILLA LOURDES." }); 
//information for 
function goToLink377() { infowindow377.open(map,marker377); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker377, 'click', goToLink377); google.maps.event.addDomListener(window, 'load', initialize);






//MARCADOR 378 
//positions 
var point378 = new google.maps.LatLng(13.637052, -89.375440); var contentString378 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">DISTINTO AMANECER.</h1>'+ '<div id="bodyContent">'+ '<p><b>DISTINTO AMANECER.</b> , — 22 de  Junio  de  1968.  Dirección:  frente a  Antena Telefónica, contiguo a  Casa  de  la Cultura,  Comasagua. Días y horas  de reuniones: De Lunes a Domingo de 7:00 a 9:00 p.m. Miembros asistentes: 16 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow378 = new google.maps.InfoWindow({ content: contentString378 }); 
//markers 
var marker378 = new google.maps.Marker({ position: point378, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "378.DISTINTO AMANECER." }); 
//information for 
function goToLink378() { infowindow378.open(map,marker378); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker378, 'click', goToLink378); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 379 
//positions 
var point379 = new google.maps.LatLng(13.629150, -89.376147); var contentString379 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">FE Y ESPERANZA.</h1>'+ '<div id="bodyContent">'+ '<p><b>FE Y ESPERANZA.</b> , — 28 de  Octubre de  1986.  Dirección:  Calle  El Pito Poniente Nuevo  Asentamiento Block 15 Casa  Nº 6, Cantón El Rosario. Días y horas  de  reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m.</p>'+ '</div>'+ '</div>'; var infowindow379 = new google.maps.InfoWindow({ content: contentString379 }); 
//markers 
var marker379 = new google.maps.Marker({ position: point379, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "379.FE Y ESPERANZA." }); 
//information for 
function goToLink379() { infowindow379.open(map,marker379); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker379, 'click', goToLink379); google.maps.event.addDomListener(window, 'load', initialize);




//MARCADOR 380 
//positions 
var point380 = new google.maps.LatLng(13.592150, -89.236713); var contentString380 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">04  DE DICIEMBRE.</h1>'+ '<div id="bodyContent">'+ '<p><b>04  DE DICIEMBRE.</b> , — 04 de  Diciembre de  1991.  Dirección:  Barrio El Centro, Calle  Principal.  Días y horas  de  reuniones: De  Lunes  a Domingo de 7:00 a 9:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow380 = new google.maps.InfoWindow({ content: contentString380 }); 
//markers 
var marker380 = new google.maps.Marker({ position: point380, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "380.04  DE DICIEMBRE." }); 
//information for 
function goToLink380() { infowindow380.open(map,marker380); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker380, 'click', goToLink380); google.maps.event.addDomListener(window, 'load', initialize);
//MARCADOR 381 
//positions 
var point381 = new google.maps.LatLng(13.588817, -89.237912); var contentString381 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NUEVO  AMANECER EN  HUIZÚCAR.</h1>'+ '<div id="bodyContent">'+ '<p><b>NUEVO  AMANECER EN  HUIZÚCAR.</b> , — 09  de  Enero  de  1971. Dirección: Barrio El Centro Calle La Ronda. Días y horas de reuniones: De Lunes a Domingo de  7:00 a 9:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow381 = new google.maps.InfoWindow({ content: contentString381 }); 
//markers 
var marker381 = new google.maps.Marker({ position: point381, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "381.NUEVO  AMANECER EN  HUIZÚCAR." }); 
//information for 
function goToLink381() { infowindow381.open(map,marker381); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker381, 'click', goToLink381); google.maps.event.addDomListener(window, 'load', initialize);
//MARCADOR 382 
//positions 
var point382 = new google.maps.LatLng(13.579930, -89.232937); var contentString382 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">SOBRIEDAD 2007.</h1>'+ '<div id="bodyContent">'+ '<p><b>SOBRIEDAD 2007.</b> , — 20 de Febrero de 2007.  Dirección:  Caserío El Almendro, Calle Principal  ½ Cuadra de  la Cruz Calle.  Días y horas de  reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow382 = new google.maps.InfoWindow({ content: contentString382 }); 
//markers 
var marker382 = new google.maps.Marker({ position: point382, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "382.SOBRIEDAD 2007." }); 
//information for 
function goToLink382() { infowindow382.open(map,marker382); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker382, 'click', goToLink382); google.maps.event.addDomListener(window, 'load', initialize);




//MARCADOR 383 
//positions 
var point383 = new google.maps.LatLng(13.673846, -89.436400); var contentString383 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">ENERO.</h1>'+ '<div id="bodyContent">'+ '<p><b>ENERO.</b> , — 22  de  Enero  de  1963.  Dirección:  Barrio El Calvario  4ª Calle Oriente. Días y horas  de  reuniones: De Lunes a Domingo de 7:00 a 9:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow383 = new google.maps.InfoWindow({ content: contentString383 }); 
//markers 
var marker383 = new google.maps.Marker({ position: point383, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "383.ENERO." }); 
//information for 
function goToLink383() { infowindow383.open(map,marker383); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker383, 'click', goToLink383); google.maps.event.addDomListener(window, 'load', initialize);
//MARCADOR 384 
//positions 
var point384 = new google.maps.LatLng(13.679737, -89.437627); var contentString384 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">PASO  A PASO.</h1>'+ '<div id="bodyContent">'+ '<p><b>PASO  A PASO.</b> , —  27  de  Septiembre de  1968.  Dirección:  Caserío Curazao  Carretera Principal  a Jayaque. Días y horas  de  reuniones: De  Lunes  a Domingo de  6:00  a 8:00  p.m. </p>'+ '</div>'+ '</div>'; var infowindow384 = new google.maps.InfoWindow({ content: contentString384 }); 
//markers 
var marker384 = new google.maps.Marker({ position: point384, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "384.PASO  A PASO." }); 
//information for 
function goToLink384() { infowindow384.open(map,marker384); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker384, 'click', goToLink384); google.maps.event.addDomListener(window, 'load', initialize);
//MARCADOR 385 
//positions 
var point385 = new google.maps.LatLng(13.670515, -89.436147); var contentString385 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">VERDADES  AMARGAS.</h1>'+ '<div id="bodyContent">'+ '<p><b>VERDADES  AMARGAS.</b> , —  20  de  Enero   de  2012.   Dirección:   ½ Cuadra al Sur del Sello de Oro Colonia Llano Verde Nº 1. Días y horas de  reuniones: De Lunes a Domingo de  6:30 a 8:30 p.m.  Miembros asistentes: 4 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow385 = new google.maps.InfoWindow({ content: contentString385 }); 
//markers 
var marker385 = new google.maps.Marker({ position: point385, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "385.VERDADES  AMARGAS." }); 
//information for 
function goToLink385() { infowindow385.open(map,marker385); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker385, 'click', goToLink385); google.maps.event.addDomListener(window, 'load', initialize);





//MARCADOR 386 
//positions 
var point386 = new google.maps.LatLng(13.570663, -89.507112); var contentString386 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NUEVO AMANECER.</h1>'+ '<div id="bodyContent">'+ '<p><b>NUEVO AMANECER.</b> , — 07 de  Mayo de  2014.  Dirección:  Colonia San Francisco  Calle a Jicalapa. Días y horas  de reuniones: De Lunes a Domingo de 7:00 a 9:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow386 = new google.maps.InfoWindow({ content: contentString386 }); 
//markers 
var marker386 = new google.maps.Marker({ position: point386, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "386.NUEVO AMANECER." }); 
//information for 
function goToLink386() { infowindow386.open(map,marker386); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker386, 'click', goToLink386); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 387 
//positions 
var point387 = new google.maps.LatLng(13.570788, -89.499251); var contentString387 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">VERDADES AMARGAS (LA PEDRERA).</h1>'+ '<div id="bodyContent">'+ '<p><b>VERDADES AMARGAS (LA PEDRERA).</b> , — 25 de Febrero de 1988. Dirección:   Carretera a  Teotepeque,  Cantón La Perla  Caserío La Pedrera. Días y horas  de  reuniones: De Lunes a Domingo de  6:30 a 8:30 p.m. </p>'+ '</div>'+ '</div>'; var infowindow387 = new google.maps.InfoWindow({ content: contentString387 }); 
//markers 
var marker387 = new google.maps.Marker({ position: point387, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "387.VERDADES AMARGAS (LA PEDRERA)." }); 
//information for 
function goToLink387() { infowindow387.open(map,marker387); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker387, 'click', goToLink387); google.maps.event.addDomListener(window, 'load', initialize);





//MARCADOR 388 
//positions 
var point388 = new google.maps.LatLng(13.470989, -89.237875); var contentString388 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">FARO DE SAN  DIEGO.</h1>'+ '<div id="bodyContent">'+ '<p><b>FARO DE SAN  DIEGO.</b> , — 26  de  Diciembre de  2011.  Dirección: Final Bocana  Playa San Diego. Días y horas  de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow388 = new google.maps.InfoWindow({ content: contentString388 }); 
//markers 
var marker388 = new google.maps.Marker({ position: point388, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "388.FARO DE SAN  DIEGO." }); 
//information for 
function goToLink388() { infowindow388.open(map,marker388); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker388, 'click', goToLink388); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 389 
//positions 
var point389 = new google.maps.LatLng(13.486269, -89.324459); var contentString389 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">LA LIBERTAD.</h1>'+ '<div id="bodyContent">'+ '<p><b>LA LIBERTAD.</b> , — 09 de  Marzo de  1962.  Dirección:  7ª Avenida  Sur y 2ª Calle  Poniente mesón Hernández Puerto de  La Libertad. Días y horas  de  reuniones: De  Lunes  a  Domingo de  6:00  a  8:00  p.m. </p>'+ '</div>'+ '</div>'; var infowindow389 = new google.maps.InfoWindow({ content: contentString389 }); 
//markers var mark
er389 = new google.maps.Marker({ position: point389, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "389.LA LIBERTAD." }); //information for function goToLink389() { infowindow389.open(map,marker389); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker389, 'click', goToLink389); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 390 
//positions 
var point390 = new google.maps.LatLng(13.487351, -89.320801); var contentString390 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">LAS OLAS.</h1>'+ '<div id="bodyContent">'+ '<p><b>LAS OLAS.</b> , — 19  de  Mayo  de  1968.  Dirección:  1ª  Calle  Poniente Nº  20-3  Barrio El Centro. Días  y horas  de  reuniones: De  Lunes  a Domingo de 6:00 a 8:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow390 = new google.maps.InfoWindow({ content: contentString390 }); 
//markers 
var marker390 = new google.maps.Marker({ position: point390, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "390.LAS OLAS." }); 
//information for 
function goToLink390() { infowindow390.open(map,marker390); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker390, 'click', goToLink390); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 391 
//positions 
var point391 = new google.maps.LatLng(13.491762, -89.366298); var contentString391 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UNA LUZ EN EL MAJAHUAL.</h1>'+ '<div id="bodyContent">'+ '<p><b>UNA LUZ EN EL MAJAHUAL.</b> , — 04 de Octubre de 1977. Dirección: Entrada a La playa Majahual,  contiguo al Centro Escolar El Majahual. Días y horas  de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow391 = new google.maps.InfoWindow({ content: contentString391 }); 
//markers 
var marker391 = new google.maps.Marker({ position: point391, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "391.UNA LUZ EN EL MAJAHUAL." }); 
//information for 
function goToLink391() { infowindow391.open(map,marker391); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker391, 'click', goToLink391); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 392 
//positions 
var point392 = new google.maps.LatLng(13.492764, -89.361060); var contentString392 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NUEVA  VIDA EN EL CHARCÓN.</h1>'+ '<div id="bodyContent">'+ '<p><b>NUEVA  VIDA EN EL CHARCÓN.</b> , — 16  de  Septiembre de  2013. Dirección: Cantón El Charcón Caserío San Rafael, Contiguo a Iglesia Católica, entrada antes del  puente El majahual. Días  y horas  de reuniones: De  Lunes  a  Domingo de  6:00  a  8:00  p.m. </p>'+ '</div>'+ '</div>'; var infowindow392 = new google.maps.InfoWindow({ content: contentString392 }); 
//markers 
var marker392 = new google.maps.Marker({ position: point392, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "392.NUEVA  VIDA EN EL CHARCÓN." }); 
//information for 
function goToLink392() { infowindow392.open(map,marker392); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker392, 'click', goToLink392); google.maps.event.addDomListener(window, 'load', initialize);





//MARCADOR 393 
//positions 
var point393 = new google.maps.LatLng(13.644219, -89.260973); var contentString393 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">BENDICIÓN.</h1>'+ '<div id="bodyContent">'+ '<p><b>BENDICIÓN.</b> , —  24   de   Enero   de   1965.   Dirección:   Colonia   La Esperanza 1 Nº 4. Días y horas  de  reuniones: De Lunes a Domingo de 7:00 a 9:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow393 = new google.maps.InfoWindow({ content: contentString393 }); 
//markers 
var marker393 = new google.maps.Marker({ position: point393, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "393.BENDICIÓN." }); 
//information for 
function goToLink393() { infowindow393.open(map,marker393); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker393, 'click', goToLink393); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 394 
//positions 
var point394 = new google.maps.LatLng(13.641847, -89.268671); var contentString394 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">BRISAS DE PRIMAVERA.</h1>'+ '<div id="bodyContent">'+ '<p><b>BRISAS DE PRIMAVERA.</b> , — 11 de Abril de 1964. Dirección: Cantón Nazareth Nuevo  Cuscatlán. Días y horas  de  reuniones: De Lunes a Domingo de 7:00 a 8:30 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow394 = new google.maps.InfoWindow({ content: contentString394 }); 
//markers 
var marker394 = new google.maps.Marker({ position: point394, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "394.BRISAS DE PRIMAVERA." }); 
//information for 
function goToLink394() { infowindow394.open(map,marker394); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker394, 'click', goToLink394); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 395 
//positions 
var point395 = new google.maps.LatLng(13.655772, -89.263281); var contentString395 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">TRABAJANDO CON OTROS.</h1>'+ '<div id="bodyContent">'+ '<p><b>TRABAJANDO CON OTROS.</b> , — 01 de Agosto de 2000.  Dirección: Colonia  Altos de  Nuevo  Cuscatlán Calle  Santiago Morales  Nº  11. Días y horas  de reuniones: De Lunes a Domingo de 7:00 a 9:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow395 = new google.maps.InfoWindow({ content: contentString395 }); 
//markers 
var marker395 = new google.maps.Marker({ position: point395, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "395.TRABAJANDO CON OTROS." }); 
//information for 
function goToLink395() { infowindow395.open(map,marker395); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker395, 'click', goToLink395); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 396 
//positions 
var point396 = new google.maps.LatLng(13.653010, -89.281730); var contentString396 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">VILLA DEL MAR.</h1>'+ '<div id="bodyContent">'+ '<p><b>VILLA DEL MAR.</b> , — 01 de Diciembre de 2008.  Dirección:  Urbaniza- ción Villa del  Mar, Centro Comercial Las Palmas  2ª Planta  local 29. Días y horas  de  reuniones: De Lunes a Viernes de  7:00 a 8:30 p.m. Sábado y Domingo de  6:00  a 7:30  p.m.  </p>'+ '</div>'+ '</div>'; var infowindow396 = new google.maps.InfoWindow({ content: contentString396 }); 
//markers 
var marker396 = new google.maps.Marker({ position: point396, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "396.VILLA DEL MAR." }); 
//information for 
function goToLink396() { infowindow396.open(map,marker396); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker396, 'click', goToLink396); google.maps.event.addDomListener(window, 'load', initialize);








//MARCADOR 397 
//positions 
var point397 = new google.maps.LatLng(13.836043, -89.264097); var contentString397 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">1º DE ENERO.</h1>'+ '<div id="bodyContent">'+ '<p><b>1º DE ENERO.</b> , — 01 de  Enero  de  2001.  Dirección:  Avenida  Nueva Nº  4  Quezaltepeque a  ½  Cuadra de  Las Oficinas  DELSUR. Días y horas  de  reuniones: De  Lunes  a  Domingo de  6:00  a  8:00  p.m.</p>'+ '</div>'+ '</div>'; var infowindow397 = new google.maps.InfoWindow({ content: contentString397 }); 
//markers 
var marker397 = new google.maps.Marker({ position: point397, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "397.1º DE ENERO." }); 
//information for 
function goToLink397() { infowindow397.open(map,marker397); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker397, 'click', goToLink397); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 398 
//positions 
var point398 = new google.maps.LatLng(13.848552, -89.263783); var contentString398 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">29   DE  MARZO.</h1>'+ '<div id="bodyContent">'+ '<p><b>29   DE  MARZO.</b> , —  29   de   Marzo   de   1990.   Dirección:   Cantón Platanillo.  Días y horas  de  reuniones: De Lunes a Domingo de  5:00 a 7:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow398 = new google.maps.InfoWindow({ content: contentString398 }); 
//markers 
var marker398 = new google.maps.Marker({ position: point398, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "398.29   DE  MARZO." }); 
//information for 
function goToLink398() { infowindow398.open(map,marker398); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker398, 'click', goToLink398); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 399 
//positions 
var point399 = new google.maps.LatLng(13.832698, -89.270610); var contentString399 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">ANÓNIMO.</h1>'+ '<div id="bodyContent">'+ '<p><b>ANÓNIMO.</b> , —  16  de  Noviembre de  1977.  Dirección:  1ª  Avenida Sur Nº  33  Barrio  El Calvario  frente  a  FOSALUD. Días  y horas  de reuniones: De  Lunes  a  Domingo de  6:00  a  8:00  p.m.  </p>'+ '</div>'+ '</div>'; var infowindow399 = new google.maps.InfoWindow({ content: contentString399 }); 
//markers 
var marker399 = new google.maps.Marker({ position: point399, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "399.ANÓNIMO." }); 
//information for 
function goToLink399() { infowindow399.open(map,marker399); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker399, 'click', goToLink399); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 400 
//positions 
var point400 = new google.maps.LatLng(13.851703, -89.264965); var contentString400 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">COLOMBIA.</h1>'+ '<div id="bodyContent">'+ '<p><b>COLOMBIA.</b> , — 14 de Agosto de 1975. Dirección: Cantón Primavera, cooperativa  Colombia. Días  y  horas   de   reuniones:  De  Lunes  a Domingo de 4:30 a 6:30 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow400 = new google.maps.InfoWindow({ content: contentString400 });
 //markers 
 var marker400 = new google.maps.Marker({ position: point400, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "400.COLOMBIA." }); 
 //information for 
 function goToLink400() { infowindow400.open(map,marker400); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker400, 'click', goToLink400); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 401 
//positions 
var point401 = new google.maps.LatLng(13.857302, -89.264353); var contentString401 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">DESPERTAR EN  GIRÓN.</h1>'+ '<div id="bodyContent">'+ '<p><b>DESPERTAR EN  GIRÓN.</b> , —  10  de   Agosto de   1977.   Dirección: Cantón Girón.  Días y horas  de  reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow401 = new google.maps.InfoWindow({ content: contentString401 });
 //markers 
 var marker401 = new google.maps.Marker({ position: point401, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "401.DESPERTAR EN  GIRÓN." }); 
 //information for 
 function goToLink401() { infowindow401.open(map,marker401); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker401, 'click', goToLink401); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 402 
//positions 
var point402 = new google.maps.LatLng(13.820761, -89.267713); var contentString402 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">MARAVILLAS DEL SIGLO XX.</h1>'+ '<div id="bodyContent">'+ '<p><b>MARAVILLAS DEL SIGLO XX.</b> , — 23 de Mayo de 1972. Dirección: 2ª Calle Oriente, Barrio Concepción Nº 23. Días y horas  de  reuniones: De Lunes a Domingo de  6:30 a 8:30 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow402 = new google.maps.InfoWindow({ content: contentString402 }); 
//markers 
var marker402 = new google.maps.Marker({ position: point402, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "402.MARAVILLAS DEL SIGLO XX." }); 
//information for 
function goToLink402() { infowindow402.open(map,marker402); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker402, 'click', goToLink402); google.maps.event.addDomListener(window, 'load', initialize);
//MARCADOR 403 
//positions 
var point403 = new google.maps.LatLng(13.827061, -89.289770); var contentString403 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">PRIMAVERA.</h1>'+ '<div id="bodyContent">'+ '<p><b>PRIMAVERA.</b> , — 21 de Mayo de 2011.  Dirección:  Cantón Primavera Abajo  Calle  Contiguo a  La Cancha de   fútbol.   Días  y  horas   de reuniones: De  Lunes  a  Domingo de  6:00  a  8:00  p.m.  </p>'+ '</div>'+ '</div>'; var infowindow403 = new google.maps.InfoWindow({ content: contentString403 }); 
//markers 
var marker403 = new google.maps.Marker({ position: point403, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "403.PRIMAVERA." }); 
//information for 
function goToLink403() { infowindow403.open(map,marker403); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker403, 'click', goToLink403); google.maps.event.addDomListener(window, 'load', initialize);
//MARCADOR 404 
//positions 
var point404 = new google.maps.LatLng(13.836972, -89.258216); var contentString404 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">RAYO DE LUZ.</h1>'+ '<div id="bodyContent">'+ '<p><b>RAYO DE LUZ.</b> , — 04 de Abril de 1981. Dirección: Colonia Las Brisas, 14 Avenida  Norte  Block 1-0. Días y horas  de  reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow404 = new google.maps.InfoWindow({ content: contentString404 }); 
//markers 
var marker404 = new google.maps.Marker({ position: point404, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "404.RAYO DE LUZ." }); 
//information for 
function goToLink404() { infowindow404.open(map,marker404); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker404, 'click', goToLink404); google.maps.event.addDomListener(window, 'load', initialize);
//MARCADOR 405 
//positions 
var point405 = new google.maps.LatLng(13.834969, -89.272846); var contentString405 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">SALVEMOS  UNA  VIDA.</h1>'+ '<div id="bodyContent">'+ '<p><b>SALVEMOS  UNA  VIDA.</b> , — 21  de  Enero  de  1984.  Dirección:   4a Avenida  Sur Barrio El Guayabal Nº 38.  Días y horas  de  reuniones: De Lunes a Domingo de  6:30 a 8:30 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow405 = new google.maps.InfoWindow({ content: contentString405 }); 
//markers 
var marker405 = new google.maps.Marker({ position: point405, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "405.SALVEMOS  UNA  VIDA." }); 
//information for 
function goToLink405() { infowindow405.open(map,marker405); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker405, 'click', goToLink405); google.maps.event.addDomListener(window, 'load', initialize);
//MARCADOR 406 
//positions 
var point406 = new google.maps.LatLng(13.840564, -89.292131); var contentString406 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UNA  LUZ EN LOS CAMPOS.</h1>'+ '<div id="bodyContent">'+ '<p><b>UNA  LUZ EN LOS CAMPOS.</b> , — 28 de  Enero  de  1977.  Dirección: Hacienda Tacachico. Días y horas de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow406 = new google.maps.InfoWindow({ content: contentString406 }); 
//markers 
var marker406 = new google.maps.Marker({ position: point406, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "406.UNA  LUZ EN LOS CAMPOS." }); 
//information for 
function goToLink406() { infowindow406.open(map,marker406); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker406, 'click', goToLink406); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 407 
//positions 
var point407 = new google.maps.LatLng(13.829625, -89.274679); var contentString407 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UNIDOS.</h1>'+ '<div id="bodyContent">'+ '<p><b>UNIDOS.</b> , — 01 de Marzo de 1963. Dirección: 1ª Calle Poniente entre 4a  y 6a  Avenida  Sur. Días y horas  de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow407 = new google.maps.InfoWindow({ content: contentString407 }); 
//markers 
var marker407 = new google.maps.Marker({ position: point407, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "407.UNIDOS." }); 
//information for 
function goToLink407() { infowindow407.open(map,marker407); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker407, 'click', goToLink407); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 408 
//positions 
var point408 = new google.maps.LatLng(13.819051, -89.273300); var contentString408 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UNIÓN.</h1>'+ '<div id="bodyContent">'+ '<p><b>UNIÓN.</b> , —  19 de  Abril de  1976.  Dirección:  Colonia  Santa  Cristina Cantón El Puente. Días y horas  de  reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow408 = new google.maps.InfoWindow({ content: contentString408 }); 
//markers 
var marker408 = new google.maps.Marker({ position: point408, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "408.UNIÓN." }); 
//information for 
function goToLink408() { infowindow408.open(map,marker408); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker408, 'click', goToLink408); google.maps.event.addDomListener(window, 'load', initialize);






//MARCADOR 409 
//positions 
var point409 = new google.maps.LatLng(13.735491, -89.469610); var contentString409 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">AMANECER  FELIZ.</h1>'+ '<div id="bodyContent">'+ '<p><b>AMANECER  FELIZ.</b> , — 13   de   Septiembre  de   1975.   Dirección: Avenida  Principal  San Simón.  Días y horas  de  reuniones: De Lunes a Domingo de 6:30 a 8:30 p.m.  Miembros asistentes: 10 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow409 = new google.maps.InfoWindow({ content: contentString409 }); 
//markers 
var marker409 = new google.maps.Marker({ position: point409, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "409.AMANECER  FELIZ." }); 
//information for 
function goToLink409() { infowindow409.open(map,marker409); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker409, 'click', goToLink409); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 410 
//positions 
var point410 = new google.maps.LatLng(13.741534, -89.470611); var contentString410 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">RENACER 10  DE  ENERO.</h1>'+ '<div id="bodyContent">'+ '<p><b>RENACER 10  DE  ENERO.</b> , —  10  de  Enero   de  2005.   Dirección: Caserío El Tigre. Días y horas de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow410 = new google.maps.InfoWindow({ content: contentString410 }); 
//markers 
var marker410 = new google.maps.Marker({ position: point410, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "410.RENACER 10  DE  ENERO." }); 
//information for 
function goToLink410() { infowindow410.open(map,marker410); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker410, 'click', goToLink410); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 411 
//positions 
var point411 = new google.maps.LatLng(13.734182, -89.461756); var contentString411 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">RENACER 20 DE ABRIL.</h1>'+ '<div id="bodyContent">'+ '<p><b>RENACER 20 DE ABRIL.</b> , — 20 de Abril de 2009. Dirección:  Colonia Escalante, Calle Principal, Cantón Ateos.  Días y horas  de reuniones: De Lunes a Domingo de  6:30 a 8:30 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow411 = new google.maps.InfoWindow({ content: contentString411 }); 
//markers 
var marker411 = new google.maps.Marker({ position: point411, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "411.RENACER 20 DE ABRIL." }); 
//information for 
function goToLink411() { infowindow411.open(map,marker411); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker411, 'click', goToLink411); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 412 
//positions 
var point412 = new google.maps.LatLng(13.734634, -89.465366); var contentString412 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">RENACER FELIZ.</h1>'+ '<div id="bodyContent">'+ '<p><b>RENACER FELIZ.</b> , — 22 de Mayo de 1977. Dirección:  Cantón Ateos, Colonia  El Milagro  frente  a ex – Beneficio  Daglio.  Días y horas  de reuniones: De  Lunes  a  Domingo de  6:30  a  8:30  p.m.  </p>'+ '</div>'+ '</div>'; var infowindow412 = new google.maps.InfoWindow({ content: contentString412 }); 
//markers 
var marker412 = new google.maps.Marker({ position: point412, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "412.RENACER FELIZ." }); 
//information for 
function goToLink412() { infowindow412.open(map,marker412); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker412, 'click', goToLink412); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 413 
//positions 
var point413 = new google.maps.LatLng(13.730146, -89.472431); var contentString413 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UN MILAGRO EN MI VIDA.</h1>'+ '<div id="bodyContent">'+ '<p><b>UN MILAGRO EN MI VIDA.</b> , — 30 de  Agosto de  2004.  Dirección: Villa Tzuchi, Los Arquitectos Casa L Nº 21. Días y horas de reuniones: De  Lunes  a Domingo de  6:00  a 8:00  p.m.  </p>'+ '</div>'+ '</div>'; var infowindow413 = new google.maps.InfoWindow({ content: contentString413 }); 
//markers 
var marker413 = new google.maps.Marker({ position: point413, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "413.UN MILAGRO EN MI VIDA." }); 
//information for 
function goToLink413() { infowindow413.open(map,marker413); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker413, 'click', goToLink413); google.maps.event.addDomListener(window, 'load', initialize);







//MARCADOR 414 
//positions 
var point414 = new google.maps.LatLng(13.585979, -89.273974); var contentString414 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">RENOVACIÓN ESPIRITUAL.</h1>'+ '<div id="bodyContent">'+ '<p><b>RENOVACIÓN ESPIRITUAL.</b> , — 01 de Enero  de 2006.  Dirección:  6a Calle Poniente, Calle La Ronda.  Días y horas de reuniones: De Lunes a Domingo de 6:30 a 8:30 p.m. </p>'+ '</div>'+ '</div>'; var infowindow414 = new google.maps.InfoWindow({ content: contentString414 }); 
//markers 
var marker414 = new google.maps.Marker({ position: point414, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "414.RENOVACIÓN ESPIRITUAL." }); 
//information for 
function goToLink414() { infowindow414.open(map,marker414); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker414, 'click', goToLink414); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 415 
//positions 
var point415 = new google.maps.LatLng(13.584160, -89.270360); var contentString415 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UNA  LUZ EN  VILLANUEVA.</h1>'+ '<div id="bodyContent">'+ '<p><b>UNA  LUZ EN  VILLANUEVA.</b> , — 17  de  Abril de  1973.  Dirección: Barrio El Centro 4ª Calle  Poniente. Días y horas  de  reuniones: De Lunes a Viernes de 7:00 a 9:00, Sábado y Domingo 6:00 a 8:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow415 = new google.maps.InfoWindow({ content: contentString415 }); 
//markers 
var marker415 = new google.maps.Marker({ position: point415, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "415.UNA  LUZ EN  VILLANUEVA." }); 
//information for 
function goToLink415() { infowindow415.open(map,marker415); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker415, 'click', goToLink415); google.maps.event.addDomListener(window, 'load', initialize);




//MARCADOR 416 
//positions 
var point416 = new google.maps.LatLng(13.878732, -89.363288); var contentString416 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">02  DE MARZO.</h1>'+ '<div id="bodyContent">'+ '<p><b>02  DE MARZO.</b> , — 02  de  Marzo  de  1971.  Dirección:  Cantón  Los Amates frente  a La Casa  Comunal. Días y horas  de  reuniones: De Lunes  a  Domingo de  6:30  a  8:30  p.m.  </p>'+ '</div>'+ '</div>'; var infowindow416 = new google.maps.InfoWindow({ content: contentString416 }); 
//markers 
var marker416 = new google.maps.Marker({ position: point416, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "416.02  DE MARZO." }); 
//information for 
function goToLink416() { infowindow416.open(map,marker416); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker416, 'click', goToLink416); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 417 
//positions 
var point417 = new google.maps.LatLng(13.884696, -89.355616); var contentString417 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading"> 10 DE NOVIEMBRE.</h1>'+ '<div id="bodyContent">'+ '<p><b> 10 DE NOVIEMBRE.</b> , — 10 de Noviembre de 1995.  Dirección:  Final 2ª Calle Principal Barrio La Cruz Colonia  Santa  Bárbara. Días y horas de  reuniones: De Lunes a Domingo de  6:30 a 8:30 p.m. </p>'+ '</div>'+ '</div>'; var infowindow417 = new google.maps.InfoWindow({ content: contentString417 }); 
//markers 
var marker417 = new google.maps.Marker({ position: point417, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "417. 10 DE NOVIEMBRE." }); 
//information for 
function goToLink417() { infowindow417.open(map,marker417); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker417, 'click', goToLink417); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 418 
//positions 
var point418 = new google.maps.LatLng(13.888849, -89.362383); var contentString418 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">24  DE  DICIEMBRE.</h1>'+ '<div id="bodyContent">'+ '<p><b>24  DE  DICIEMBRE.</b> , — 21  de  Abril  de  1971.   Dirección:   Cantón Joya  de  Cerén Calle “B” frente  a PNC. Días y horas  de  reuniones: De  Lunes  a Domingo de  5:00  a 7:00  p.m. </p>'+ '</div>'+ '</div>'; var infowindow418 = new google.maps.InfoWindow({ content: contentString418 }); 
//markers 
var marker418 = new google.maps.Marker({ position: point418, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "418.24  DE  DICIEMBRE." }); 
//information for 
function goToLink418() { infowindow418.open(map,marker418); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker418, 'click', goToLink418); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 419 
//positions 
var point419 = new google.maps.LatLng(13.874748, -89.350479); var contentString419 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">28  DE JUNIO.</h1>'+ '<div id="bodyContent">'+ '<p><b>28  DE JUNIO.</b> , — 28 de  Junio  de  1989.  Dirección:  Km 27 Carretera a  Santa   Ana,  Entrada  Principal  a  La  Fabrica   de   Tubos   Colonia Esmeralda. Días y horas  de reuniones: De Lunes a Domingo de 6:30 a 8:30 p.m. </p>'+ '</div>'+ '</div>'; var infowindow419 = new google.maps.InfoWindow({ content: contentString419 }); 
//markers 
var marker419 = new google.maps.Marker({ position: point419, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "419.28  DE JUNIO." }); 
//information for 
function goToLink419() { infowindow419.open(map,marker419); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker419, 'click', goToLink419); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 420 
//positions 
var point420 = new google.maps.LatLng(13.866082, -89.348120); var contentString420 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">AMOR Y ESPERANZA.</h1>'+ '<div id="bodyContent">'+ '<p><b>AMOR Y ESPERANZA.</b> , — 05 de Agosto de 1978. Dirección: Caserío Loma del Frío, Cantón San Antonio.  Días y horas  de  reuniones: De Lunes  a  Domingo de  6:00  a  8:00  p.m.  </p>'+ '</div>'+ '</div>'; var infowindow420 = new google.maps.InfoWindow({ content: contentString420 }); 
//markers 
var marker420 = new google.maps.Marker({ position: point420, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "420.AMOR Y ESPERANZA." }); 
//information for 
function goToLink420() { infowindow420.open(map,marker420); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker420, 'click', goToLink420); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 421 
//positions 
var point421 = new google.maps.LatLng(13.860335, -89.358677); var contentString421 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">BUEN VIVIR.</h1>'+ '<div id="bodyContent">'+ '<p><b>BUEN VIVIR.</b> , — 18 de Julio de 1979. Dirección:  Lomas de Santiago, San Juan  Opico. Días y horas de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.</p>'+ '</div>'+ '</div>'; var infowindow421 = new google.maps.InfoWindow({ content: contentString421 });
 //markers
  var marker421 = new google.maps.Marker({ position: point421, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "421.BUEN VIVIR." }); 
  //information for 
  function goToLink421() { infowindow421.open(map,marker421); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker421, 'click', goToLink421); google.maps.event.addDomListener(window, 'load', initialize);
//MARCADOR 422 
//positions 
var point422 = new google.maps.LatLng(13.878711, -89.362192); var contentString422 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">EL SOCORRO.</h1>'+ '<div id="bodyContent">'+ '<p><b>EL SOCORRO.</b> , — 22 de Mayo de 1962. Dirección:  1ª Calle Poniente frente  a Boulevard El Calvario frente  a Cancha de  Basquetbol. Días y horas  de  reuniones: De  Lunes  a  Domingo de  6:00  a  8:00  p.m</p>'+ '</div>'+ '</div>'; var infowindow422 = new google.maps.InfoWindow({ content: contentString422 }); 
//markers 
var marker422 = new google.maps.Marker({ position: point422, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "422.EL SOCORRO." }); 
//information for 
function goToLink422() { infowindow422.open(map,marker422); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker422, 'click', goToLink422); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 423 
//positions 
var point423 = new google.maps.LatLng(13.882140, -89.370617); var contentString423 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">ESPÍRITU FUERTE.</h1>'+ '<div id="bodyContent">'+ '<p><b>ESPÍRITU FUERTE.</b> , — 06  de  Enero   de  1997.   Dirección:   Cantón El Jabalinón frente  a La Cancha Vieja. Días y horas  de  reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow423 = new google.maps.InfoWindow({ content: contentString423 }); 
//markers 
var marker423 = new google.maps.Marker({ position: point423, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "423.ESPÍRITU FUERTE." }); 
//information for 
function goToLink423() { infowindow423.open(map,marker423); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker423, 'click', goToLink423); google.maps.event.addDomListener(window, 'load', initialize);
//MARCADOR 424 
//positions 
var point424 = new google.maps.LatLng(13.884861, -89.373799); var contentString424 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">FE CON BILL.</h1>'+ '<div id="bodyContent">'+ '<p><b>FE CON BILL.</b> , — 11 de Junio  de 1998.  Dirección:  Cantón Tehuicho, Calle  Principal  contiguo  a  La  Iglesia   Católica.  Días  y  horas   de reuniones: De  Lunes  a  Domingo de  7:00  a  9:00  p.m.  Miembros asistentes: 17 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow424 = new google.maps.InfoWindow({ content: contentString424 }); 
//markers 
var marker424 = new google.maps.Marker({ position: point424, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "424.FE CON BILL." }); 
//information for 
function goToLink424() { infowindow424.open(map,marker424); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker424, 'click', goToLink424); google.maps.event.addDomListener(window, 'load', initialize);
//MARCADOR 425 
//positions 
var point425 = new google.maps.LatLng(13.872321, -89.372340); var contentString425 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">FE EN DIOS.</h1>'+ '<div id="bodyContent">'+ '<p><b>FE EN DIOS.</b> , — 28 de  Diciembre de  1975.  Dirección:  Cantón San Nicolás  La Encarnación. Días  y horas   de  reuniones: De  Lunes  a Domingo de 6:00 a 8:00 p.m.  Miembros asistentes: 30 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow425 = new google.maps.InfoWindow({ content: contentString425 }); 
//markers 
var marker425 = new google.maps.Marker({ position: point425, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "425.FE EN DIOS." }); 
//information for 
function goToLink425() { infowindow425.open(map,marker425); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker425, 'click', goToLink425); google.maps.event.addDomListener(window, 'load', initialize);
//MARCADOR 426 
//positions 
var point426 = new google.maps.LatLng(13.869437, -89.360744); var contentString426 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">FUENTE DE ESPERANZA.</h1>'+ '<div id="bodyContent">'+ '<p><b>FUENTE DE ESPERANZA.</b> , — 17 de Noviembre de 1973. Dirección: Cantón Talcualuya  Caserío La Ceiba. Días  y horas  de  reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m.  Miembros asistentes: 18</p>'+ '</div>'+ '</div>'; var infowindow426 = new google.maps.InfoWindow({ content: contentString426 }); 
//markers 
var marker426 = new google.maps.Marker({ position: point426, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "426.FUENTE DE ESPERANZA." }); 
//information for 
function goToLink426() { infowindow426.open(map,marker426); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker426, 'click', goToLink426); google.maps.event.addDomListener(window, 'load', initialize);
//MARCADOR 427 
//positions 
var point427 = new google.maps.LatLng(13.861005, -89.362176); var contentString427 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">MI ÚLTIMO CARTUCHO (CIFA).</h1>'+ '<div id="bodyContent">'+ '<p><b>MI ÚLTIMO CARTUCHO (CIFA).</b> , — 14 de Agosto de 2001. Dirección: Comando de  Ingenieros de  La Fuerza  Armada  Km 29 Carretera a Santa  Ana, Sitio del  Niño.  Días y horas  de  reuniones: De  Lunes  a Domingo de 1:00 a 2:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow427 = new google.maps.InfoWindow({ content: contentString427 }); 
//markers 
var marker427 = new google.maps.Marker({ position: point427, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "427.MI ÚLTIMO CARTUCHO (CIFA)." }); 
//information 
 function goToLink427() { infowindow427.open(map,marker427); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker427, 'click', goToLink427); google.maps.event.addDomListener(window, 'load', initialize);
//MARCADOR 428 
//positions 
var point428 = new google.maps.LatLng(13.853490, -89.358685); var contentString428 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">MILAGRO DE DIOS.</h1>'+ '<div id="bodyContent">'+ '<p><b>MILAGRO DE DIOS.</b> , — 17 de Octubre de 2007. Dirección: Cantón El Matazano Arriba de Cantón Sitio Grande. Días y horas de reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow428 = new google.maps.InfoWindow({ content: contentString428 }); 
//markers 
var marker428 = new google.maps.Marker({ position: point428, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "428.MILAGRO DE DIOS." });
 //information
  function goToLink428() { infowindow428.open(map,marker428); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker428, 'click', goToLink428); google.maps.event.addDomListener(window, 'load', initialize);
//MARCADOR 429 
//positions 
var point429 = new google.maps.LatLng(13.873671, -89.348461); var contentString429 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NUEVA  GENERACIÓN.</h1>'+ '<div id="bodyContent">'+ '<p><b>NUEVA  GENERACIÓN.</b> , — 03  de  Noviembre de  1975.  Dirección: Cantón Sitio Grande por Casa Comunal. Días y horas  de reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow429 = new google.maps.InfoWindow({ content: contentString429 }); 
//markers 
var marker429 = new google.maps.Marker({ position: point429, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "429.NUEVA  GENERACIÓN." }); 
//information 
 function goToLink429() { infowindow429.open(map,marker429); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker429, 'click', goToLink429); google.maps.event.addDomListener(window, 'load', initialize);
//MARCADOR 430 
//positions 
var point430 = new google.maps.LatLng(13.864795, -89.346695); var contentString430 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NUEVO  RENACER 26   DE  ENERO.</h1>'+ '<div id="bodyContent">'+ '<p><b>NUEVO  RENACER 26   DE  ENERO.</b> , —  26  de   Enero   de   1990. Dirección:   Cantón  San   Nicolás   La  Encarnación.  Colonia   Santa Cristina. Días y horas  de  reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow430 = new google.maps.InfoWindow({ content: contentString430 }); 
//markers 
var marker430 = new google.maps.Marker({ position: point430, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "430.NUEVO  RENACER 26   DE  ENERO." }); 
//information 
 function goToLink430() { infowindow430.open(map,marker430); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker430, 'click', goToLink430); google.maps.event.addDomListener(window, 'load', initialize);
//MARCADOR 431 
//positions 
var point431 = new google.maps.LatLng(13.867370, -89.364078); var contentString431 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NUEVO   RENACER  SAN   PEDRO.</h1>'+ '<div id="bodyContent">'+ '<p><b>NUEVO   RENACER  SAN   PEDRO.</b> , —   06   de   Enero   de   2014. Dirección:  Cantón San Pedro Mártir, San Juan  Opico. Días y horas de  reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow431 = new google.maps.InfoWindow({ content: contentString431 }); 
//markers 
var marker431 = new google.maps.Marker({ position: point431, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "431.NUEVO   RENACER  SAN   PEDRO." }); 
//information 
 function goToLink431() { infowindow431.open(map,marker431); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker431, 'click', goToLink431); google.maps.event.addDomListener(window, 'load', initialize);
//MARCADOR 432 
//positions 
var point432 = new google.maps.LatLng(13.863723, -89.356588); var contentString432 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">RENACER 11  DE  ENERO.</h1>'+ '<div id="bodyContent">'+ '<p><b>RENACER 11  DE  ENERO.</b> , —  11  de  Enero   de  1997.   Dirección: Urbanización Nueva San Juan,  Pasaje  Nº 12 Casa Nº 34. Días y horas de  reuniones: De Lunes a Domingo de  6:30 a 8:30 p.m. </p>'+ '</div>'+ '</div>'; var infowindow432 = new google.maps.InfoWindow({ content: contentString432 }); 
//markers 
var marker432 = new google.maps.Marker({ position: point432, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "432.RENACER 11  DE  ENERO." }); 
//information 
 function goToLink432() { infowindow432.open(map,marker432); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker432, 'click', goToLink432); google.maps.event.addDomListener(window, 'load', initialize);
//MARCADOR 433 
//positions 
var point433 = new google.maps.LatLng(13.860662, -89.358555); var contentString433 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">RENACER 16  DE  MARZO.</h1>'+ '<div id="bodyContent">'+ '<p><b>RENACER 16  DE  MARZO.</b> , — 16  de  Marzo  de  2012.  Dirección: Caserío Veracruz 1 Cantón Buena Vista San Juan Opico. Días y horas de  reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m.</p>'+ '</div>'+ '</div>'; var infowindow433 = new google.maps.InfoWindow({ content: contentString433 }); 
//markers 
var marker433 = new google.maps.Marker({ position: point433, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "433.RENACER 16  DE  MARZO." }); 
//information 
function goToLink433() { infowindow433.open(map,marker433); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker433, 'click', goToLink433); google.maps.event.addDomListener(window, 'load', initialize);
//MARCADOR 434 
//positions 
var point434 = new google.maps.LatLng(13.795608, -89.346401); var contentString434 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">SIEMPRE LEALES 16  DE FEBRERO.</h1>'+ '<div id="bodyContent">'+ '<p><b>SIEMPRE LEALES 16  DE FEBRERO.</b> , — 16  de  Febrero de  2004. Dirección:  Regimiento de  Caballería, Colonia  Sitio del Niño Km. 37 ½ Carretera a Santa  Ana.  Días y horas  de  reuniones: De  Lunes  a Domingo de 12:30 a 2:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow434 = new google.maps.InfoWindow({ content: contentString434 }); 
//markers 
var marker434 = new google.maps.Marker({ position: point434, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "434.SIEMPRE LEALES 16  DE FEBRERO." }); 
//information for 
function goToLink434() { infowindow434.open(map,marker434); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker434, 'click', goToLink434); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 435 
//positions 
var point435 = new google.maps.LatLng(13.809004, -89.365896); var contentString435 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UN  MILAGRO DE DIOS EN  MI VIDA.</h1>'+ '<div id="bodyContent">'+ '<p><b>UN  MILAGRO DE DIOS EN  MI VIDA.</b> , — 10  de  Julio  de  2014. Dirección:  Calle  a Loma  del  Frío, Caserío El Espino.  Días  y horas de  reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow435 = new google.maps.InfoWindow({ content: contentString435 }); 
//markers 
var marker435 = new google.maps.Marker({ position: point435, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "435.UN  MILAGRO DE DIOS EN  MI VIDA." }); 
//information for 
function goToLink435() { infowindow435.open(map,marker435); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker435, 'click', goToLink435); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 436 
//positions 
var point436 = new google.maps.LatLng(13.806976, -89.355775); var contentString436 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UNA   ESPERANZA  EN  EL  ALTO.</h1>'+ '<div id="bodyContent">'+ '<p><b>UNA   ESPERANZA  EN  EL  ALTO.</b> , —  12   de   Agosto  de   1981. Dirección:  Barrio La Cruz, 2ª Calle  Oriente 3 Cuadras después del parque Nº 24. Días y horas  de  reuniones: De Lunes a Domingo de 6:30 a 8:30 p.m. </p>'+ '</div>'+ '</div>'; var infowindow436 = new google.maps.InfoWindow({ content: contentString436 }); 
//markers 
var marker436 = new google.maps.Marker({ position: point436, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "436.UNA   ESPERANZA  EN  EL  ALTO." }); 
//information for 
function goToLink436() { infowindow436.open(map,marker436); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker436, 'click', goToLink436); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 437 
//positions 
var point437 = new google.maps.LatLng(13.793265, -89.357831); var contentString437 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UNA   ESPERANZA  EN  VERSALLES.</h1>'+ '<div id="bodyContent">'+ '<p><b>UNA   ESPERANZA  EN  VERSALLES.</b> , — 30  de   Enero   de   2011. Dirección:  Ciudad Versalles, primer  portón de Villa Burdeos frente  a Locales Comerciales Casa No  2. Días y horas de reuniones: De Lunes a Domingo de  7:00 a 9:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow437 = new google.maps.InfoWindow({ content: contentString437 }); 
//markers 
var marker437 = new google.maps.Marker({ position: point437, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "437.UNA   ESPERANZA  EN  VERSALLES." }); 
//information for 
function goToLink437() { infowindow437.open(map,marker437); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker437, 'click', goToLink437); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 438 
//positions 
var point438 = new google.maps.LatLng(13.801227, -89.356642); var contentString438 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UNA   SOLUCIÓN  EN  PITICHORRO.</h1>'+ '<div id="bodyContent">'+ '<p><b>UNA   SOLUCIÓN  EN  PITICHORRO.</b> , — 28  de   Junio   de   2005. Dirección:  Caserío El Chorro,  Cantón Pitichorro.   Días  y horas  de reuniones: De  Lunes  a  Domingo de  6:00  a  8:00  p.m.  </p>'+ '</div>'+ '</div>'; var infowindow438 = new google.maps.InfoWindow({ content: contentString438 }); 
//markers 
var marker438 = new google.maps.Marker({ position: point438, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "438.UNA   SOLUCIÓN  EN  PITICHORRO." }); 
//information for 
function goToLink438() { infowindow438.open(map,marker438); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker438, 'click', goToLink438); google.maps.event.addDomListener(window, 'load', initialize);






//MARCADOR 439 
//positions 
var point439 = new google.maps.LatLng(13.886625, -89.317060); var contentString439 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">LOS REMEDIOS.</h1>'+ '<div id="bodyContent">'+ '<p><b>LOS REMEDIOS.</b> , — 27  de  Mayo  de  1967.  Dirección:   Cantón El Jocote Calle  Principal  hacia  Las Flores.  Días y horas  de  reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow439 = new google.maps.InfoWindow({ content: contentString439 }); 
//markers 
var marker439 = new google.maps.Marker({ position: point439, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "439.LOS REMEDIOS." }); 
//information for 
function goToLink439() { infowindow439.open(map,marker439); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker439, 'click', goToLink439); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 440 
//positions 
var point440 = new google.maps.LatLng(13.885625, -89.316009); var contentString440 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NAVIDAD.</h1>'+ '<div id="bodyContent">'+ '<p><b>NAVIDAD.</b> , — 22 de Diciembre de 1972. Dirección: 4ª Avenida Norte Nº 16. Días y horas  de  reuniones: De Lunes  a Domingo de  6:30  a 8:30 p.m.</p>'+ '</div>'+ '</div>'; var infowindow440 = new google.maps.InfoWindow({ content: contentString440 }); 
//markers 
var marker440 = new google.maps.Marker({ position: point440, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "440.NAVIDAD." }); 
//information for 
function goToLink440() { infowindow440.open(map,marker440); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker440, 'click', goToLink440); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 441 
//positions 
var point441 = new google.maps.LatLng(13.884001, -89.318863); var contentString441 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">RECUPERADOS LAS FLORES.</h1>'+ '<div id="bodyContent">'+ '<p><b>RECUPERADOS LAS FLORES.</b> , — 01 de  Enero  de  1976.  Dirección: Cantón San Pedro Las Flores.  Días y horas  de  reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow441 = new google.maps.InfoWindow({ content: contentString441 }); 
//markers 
var marker441 = new google.maps.Marker({ position: point441, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "441.RECUPERADOS LAS FLORES." }); 
//information for 
function goToLink441() { infowindow441.open(map,marker441); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker441, 'click', goToLink441); google.maps.event.addDomListener(window, 'load', initialize);





//MARCADOR 442 
//positions 
var point442 = new google.maps.LatLng(13.968306, -89.333656); var contentString442 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">10 DE ENERO.</h1>'+ '<div id="bodyContent">'+ '<p><b>10 DE ENERO.</b> , — 10 de Enero de 1979. Dirección: Cantón San Isidro Lempa, Estación  del Ferrocarril. Días y horas de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.  Miembros asistentes: 25 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow442 = new google.maps.InfoWindow({ content: contentString442 }); 
//markers 
var marker442 = new google.maps.Marker({ position: point442, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "442.10 DE ENERO." }); 
//information for 
function goToLink442() { infowindow442.open(map,marker442); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker442, 'click', goToLink442); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 443 
//positions 
var point443 = new google.maps.LatLng(13.970933, -89.340349); var contentString443 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">AQUÍ ME QUEDO.</h1>'+ '<div id="bodyContent">'+ '<p><b>AQUÍ ME QUEDO.</b> , — 13 de Noviembre de 2010. Dirección: Colonia Los Mangos Nº 1, Pasaje  a La izquierda. Días y horas  de  reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow443 = new google.maps.InfoWindow({ content: contentString443 }); 
//markers 
var marker443 = new google.maps.Marker({ position: point443, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "443.AQUÍ ME QUEDO." }); 
//information for 
function goToLink443() { infowindow443.open(map,marker443); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker443, 'click', goToLink443); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 444 
//positions 
var point444 = new google.maps.LatLng(13.977573, -89.336374); var contentString444 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">FELICIDAD DE UN  HOGAR.</h1>'+ '<div id="bodyContent">'+ '<p><b>FELICIDAD DE UN  HOGAR.</b> , — 20  de  Junio  de  1999.  Dirección: Colonia Las Delicias Cantón Los Mogotes. Días y horas de reuniones: De  Lunes  a Domingo de  6:00  a 8:00  p.m.  </p>'+ '</div>'+ '</div>'; var infowindow444 = new google.maps.InfoWindow({ content: contentString444 }); 
//markers 
var marker444 = new google.maps.Marker({ position: point444, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "444.FELICIDAD DE UN  HOGAR." });
 //information for
  function goToLink444() { infowindow444.open(map,marker444); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker444, 'click', goToLink444); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 445 
//positions 
var point445 = new google.maps.LatLng(13.975365, -89.337117); var contentString445 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NUEVO  RENACER 16   DE  ENERO.</h1>'+ '<div id="bodyContent">'+ '<p><b>NUEVO  RENACER 16   DE  ENERO.</b> , —  16  de   Enero   de   2012. Dirección:  Cantón Guadalupe Mogotes. Días y horas  de  reuniones: De  Lunes  a Domingo de  6:00  a 8:00  p.m.  </p>'+ '</div>'+ '</div>'; var infowindow445 = new google.maps.InfoWindow({ content: contentString445 }); 
//markers 
var marker445 = new google.maps.Marker({ position: point445, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "445.NUEVO  RENACER 16   DE  ENERO." }); 
//information for 
function goToLink445() { infowindow445.open(map,marker445); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker445, 'click', goToLink445); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 446 
//positions 
var point446 = new google.maps.LatLng(13.972891, -89.339257); var contentString446 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">PAZ POR 24 HORAS.</h1>'+ '<div id="bodyContent">'+ '<p><b>PAZ POR 24 HORAS.</b> , — 13 de Diciembre de 1971.  Dirección:  Calle Principal  Oriente y 2ª  Avenida  Norte   Casa  No  2,  atrás  de  Iglesia Católica  Contiguo al Parque. Días y horas  de  reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow446 = new google.maps.InfoWindow({ content: contentString446 }); 
//markers 
var marker446 = new google.maps.Marker({ position: point446, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "446.PAZ POR 24 HORAS." }); 
//information for 
function goToLink446() { infowindow446.open(map,marker446); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker446, 'click', goToLink446); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 447 
//positions 
var point447 = new google.maps.LatLng(13.977485, -89.341244); var contentString447 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UN  DESPERTAR FELIZ (07  DE OCTUBRE).</h1>'+ '<div id="bodyContent">'+ '<p><b>UN  DESPERTAR FELIZ (07  DE OCTUBRE).</b> , — 07  de  Octubre de 1989.  Dirección:  Colonia  Las Delicias  Cantón Los Mogotes.  Días y horas  de  reuniones: De  Lunes  a  Domingo de  6:00  a  8:00  p.m. </p>'+ '</div>'+ '</div>'; var infowindow447 = new google.maps.InfoWindow({ content: contentString447 }); 
//markers 
var marker447 = new google.maps.Marker({ position: point447, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "447.UN  DESPERTAR FELIZ (07  DE OCTUBRE)." }); 
//information for 
function goToLink447() { infowindow447.open(map,marker447); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker447, 'click', goToLink447); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 448 
//positions 
var point448 = new google.maps.LatLng(13.975659, -89.339970	); var contentString448 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">BUSCANDO  MI SOBRIEDAD.</h1>'+ '<div id="bodyContent">'+ '<p><b>BUSCANDO  MI SOBRIEDAD.</b> , — 10 de  Mayo de  2014.  Dirección: Calle  a San  Isidro  Lempa  a ½  Cuadra del  mercado. Días  y horas de  reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow448 = new google.maps.InfoWindow({ content: contentString448 }); 
//markers 
var marker448 = new google.maps.Marker({ position: point448, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "448.BUSCANDO  MI SOBRIEDAD." }); 
//information for 
function goToLink448() { infowindow448.open(map,marker448); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker448, 'click', goToLink448); google.maps.event.addDomListener(window, 'load', initialize);






//MARCADOR 449 
//positions 
var point449 = new google.maps.LatLng(13.681614, -89.265661); var contentString449 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">02   DE  JULIO.</h1>'+ '<div id="bodyContent">'+ '<p><b>02   DE  JULIO.</b> , — 02  de   Julio  de   1983.   Dirección:   Urbanización Jardínes del Volcán 2ª Etapa  Avenida Las Victorias Pasaje  23 Oriente Polígono “C-9”   Nº  10.  Días  y  horas   de  reuniones: De  Lunes  a Domingo de 7:00 a 9:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow449 = new google.maps.InfoWindow({ content: contentString449 }); 
//markers 
var marker449 = new google.maps.Marker({ position: point449, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "449.02   DE  JULIO." }); 
//information for 
function goToLink449() { infowindow449.open(map,marker449); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker449, 'click', goToLink449); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 450 
//positions 
var point450 = new google.maps.LatLng(13.674443, -89.290432); var contentString450 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">CENTRAL TECLEÑO.</h1>'+ '<div id="bodyContent">'+ '<p><b>CENTRAL TECLEÑO.</b> , — 23  de   Diciembre  de   1985.   Dirección: 4ª  Avenida  Sur Edificio  Arco  Centro Local Nº  1.  Días  y horas  de reuniones: De  Lunes  a  Domingo de  7:00  a  9:00  p.m.  </p>'+ '</div>'+ '</div>'; var infowindow450 = new google.maps.InfoWindow({ content: contentString450 }); 
//markers 
var marker450 = new google.maps.Marker({ position: point450, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "450.CENTRAL TECLEÑO." }); 
//information for 
function goToLink450() { infowindow450.open(map,marker450); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker450, 'click', goToLink450); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 451 
//positions 
var point451 = new google.maps.LatLng(13.675748, -89.290114 ); var contentString451 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">CONCEPCIÓN.</h1>'+ '<div id="bodyContent">'+ '<p><b>CONCEPCIÓN.</b> , — 10 de Julio de 1997. Dirección: 4ª Avenida Norte anexo a Iglesia Concepción Santa  Tecla. Días y horas  de  reuniones: De Lunes a Domingo de  7:00 a 8:30 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow451 = new google.maps.InfoWindow({ content: contentString451 }); 
//markers 
var marker451 = new google.maps.Marker({ position: point451, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "451.CONCEPCIÓN." }); 
//information for 
function goToLink451() { infowindow451.open(map,marker451); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker451, 'click', goToLink451); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 452
 //positions
  var point452 = new google.maps.LatLng(13.679684, -89.289680); var contentString452 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">DOBLE “A”.</h1>'+ '<div id="bodyContent">'+ '<p><b>DOBLE “A”.</b> , —  17  de   Septiembre  de   1978.   Dirección:   9  Calle Poniente Nº  2-7  “A”,  Santa  Tecla.  Días y horas  de  reuniones: De Lunes  a  Domingo de  7:00  a  9:00  p.m.  </p>'+ '</div>'+ '</div>'; var infowindow452 = new google.maps.InfoWindow({ content: contentString452 }); 
  //markers 
  var marker452 = new google.maps.Marker({ position: point452, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "452.DOBLE “A”." }); 
  //information for 
  function goToLink452() { infowindow452.open(map,marker452); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker452, 'click', goToLink452); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 453 
//positions 
var point453 = new google.maps.LatLng(13.690490, -89.282297); var contentString453 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">EL PROGRESO.</h1>'+ '<div id="bodyContent">'+ '<p><b>EL PROGRESO.</b> , — 24 de  Septiembre de  1968.  Dirección:  Cantón El Progreso Calle El Boquerón ½ Cuadra Arriba de  La Flecha.  Días y horas  de  reuniones: De  Lunes  a  Domingo de  6:00  a  8:00  p.m. </p>'+ '</div>'+ '</div>'; var infowindow453 = new google.maps.InfoWindow({ content: contentString453 }); 
//markers 
var marker453 = new google.maps.Marker({ position: point453, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "453.EL PROGRESO." }); 
//information for 
function goToLink453() { infowindow453.open(map,marker453); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker453, 'click', goToLink453); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 454 
//positions 
var point454 = new google.maps.LatLng(13.681913, -89.306213); var contentString454 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">FÉNIX.</h1>'+ '<div id="bodyContent">'+ '<p><b>FÉNIX.</b> , — 20 de Septiembre de 2003. Dirección: Residenciales Alpes Suizos Calle Austria Polígono B-5 Nº 25. Días y horas  de  reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow454 = new google.maps.InfoWindow({ content: contentString454 }); 
//markers 
var marker454 = new google.maps.Marker({ position: point454, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "454.FÉNIX." }); 
//information for 
function goToLink454() { infowindow454.open(map,marker454); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker454, 'click', goToLink454); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 455 
//positions 
var point455 = new google.maps.LatLng(13.670977, -89.283481); var contentString455 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">LAS COLINAS.</h1>'+ '<div id="bodyContent">'+ '<p><b>LAS COLINAS.</b> , — 14 de  Abril de  1958.  Dirección:  7ª Avenida  Sur y 6ª Calle Oriente Nº 3-11 local 4. Días y horas de reuniones: De Lunes a Domingo de  6:30 a 8:30 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow455 = new google.maps.InfoWindow({ content: contentString455 }); 
//markers 
var marker455 = new google.maps.Marker({ position: point455, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "455.LAS COLINAS." }); 
//information for 
function goToLink455() { infowindow455.open(map,marker455); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker455, 'click', goToLink455); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 456 
//positions 
var point456 = new google.maps.LatLng(13.678617, -89.266887); var contentString456 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">MERLIOT, LA ALEGRÍA DE VIVIR.</h1>'+ '<div id="bodyContent">'+ '<p><b>MERLIOT, LA ALEGRÍA DE VIVIR.</b> , — 25 de Junio de 1990. Dirección: Calle  Chiltiupán  y Avenida  San  Isidro.  Días y horas  de  reuniones: De Lunes a Domingo de  7:00 a 9:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow456 = new google.maps.InfoWindow({ content: contentString456 }); 
//markers 
var marker456 = new google.maps.Marker({ position: point456, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "456.MERLIOT, LA ALEGRÍA DE VIVIR." }); 
//information for 
function goToLink456() { infowindow456.open(map,marker456); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker456, 'click', goToLink456); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 457 
//positions 
var point457 = new google.maps.LatLng(13.672046, -89.291142); var contentString457 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NUESTRO GRUPO.</h1>'+ '<div id="bodyContent">'+ '<p><b>NUESTRO GRUPO.</b> , —  08  de  Junio  de  1963.  Dirección:  4ª  Calle Poniente 6-12  frente   a  Casa  Zelada.   Días  y horas  de  reuniones: De Lunes a Domingo de  7:00 a 9:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow457 = new google.maps.InfoWindow({ content: contentString457 }); 
//markers 
var marker457 = new google.maps.Marker({ position: point457, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "457.NUESTRO GRUPO." }); 
//information for 
function goToLink457() { infowindow457.open(map,marker457); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker457, 'click', goToLink457); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 458 
//positions 
var point458 = new google.maps.LatLng(13.672228, -89.301598); var contentString458 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NUEVA  SAN  SALVADOR.</h1>'+ '<div id="bodyContent">'+ '<p><b>NUEVA  SAN  SALVADOR.</b> , — 02  de  Octubre de  1994.  Dirección: Local 21-B Centro Comercial Novo  Centro 6ª Calle  Poniente. Días y horas  de  reuniones: De  Lunes  a  Domingo de  7:00  a  8:30  p.m. </p>'+ '</div>'+ '</div>'; var infowindow458 = new google.maps.InfoWindow({ content: contentString458 }); 
//markers 
var marker458 = new google.maps.Marker({ position: point458, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "458.NUEVA  SAN  SALVADOR." }); 
//information for 
function goToLink458() { infowindow458.open(map,marker458); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker458, 'click', goToLink458); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 459 
//positions 
var point459 = new google.maps.LatLng(13.683168, -89.304241); var contentString459 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">RENACER 83.</h1>'+ '<div id="bodyContent">'+ '<p><b>RENACER 83.</b> , —  29 de  Enero  de  1983.  Dirección:  Avenida  Padre Segundo  Montes Pasaje   4  Nº  26  Colonia   Quezaltepeque.  Días y horas  de  reuniones: De  Lunes  a  Domingo de  7:30  a  9:30  p.m. </p>'+ '</div>'+ '</div>'; var infowindow459 = new google.maps.InfoWindow({ content: contentString459 }); 
//markers 
var marker459 = new google.maps.Marker({ position: point459, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "459.RENACER 83." }); 
//information for 
function goToLink459() { infowindow459.open(map,marker459); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker459, 'click', goToLink459); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 460 
//positions 
var point460 = new google.maps.LatLng(13.671302, -89.278265); var contentString460 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">SAN   RAFAEL 01   DE  FEBRERO (INSTITUCIONAL).</h1>'+ '<div id="bodyContent">'+ '<p><b>SAN   RAFAEL 01   DE  FEBRERO (INSTITUCIONAL).</b> , — 01   de Febrero de  2011.  Dirección:  Hospital  San Rafael, Unidad  de  Salud Mental.  Días y horas  de  reuniones: De Lunes a Domingo de  2:00 a 3:30 p.m. </p>'+ '</div>'+ '</div>'; var infowindow460 = new google.maps.InfoWindow({ content: contentString460 }); 
//markers 
var marker460 = new google.maps.Marker({ position: point460, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "460.SAN   RAFAEL 01   DE  FEBRERO (INSTITUCIONAL)." }); 
//information for 
function goToLink460() { infowindow460.open(map,marker460); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker460, 'click', goToLink460); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 461 
//positions 
var point461 = new google.maps.LatLng(13.665396, -89.277758); var contentString461 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">SERENIDAD.</h1>'+ '<div id="bodyContent">'+ '<p><b>SERENIDAD.</b> , — 11 de  Junio  de  1975.  Dirección:  Colonia  San José Pino Zona  “B” polígono “C”  Nº 1. Días y horas  de  reuniones: De Lunes  a  Domingo de  7:00  a  9:00  p.m.  </p>'+ '</div>'+ '</div>'; var infowindow461 = new google.maps.InfoWindow({ content: contentString461 }); 
//markers 
var marker461 = new google.maps.Marker({ position: point461, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "461.SERENIDAD." }); 
//information for 
function goToLink461() { infowindow461.open(map,marker461); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker461, 'click', goToLink461); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 462 
//positions 
var point462 = new google.maps.LatLng(13.676331, -89.286194); var contentString462 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UNA VISIÓN PARA TÍ.</h1>'+ '<div id="bodyContent">'+ '<p><b>UNA VISIÓN PARA TÍ.</b> , — 23 de Marzo de 2005.  Dirección:  3ª Calle Oriente Nº 3-1. Días y horas  de reuniones: De Lunes a Domingo de 5:30 a 7:30 p.m.</p>'+ '</div>'+ '</div>'; var infowindow462 = new google.maps.InfoWindow({ content: contentString462 }); 
//markers 
var marker462 = new google.maps.Marker({ position: point462, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "462.UNA VISIÓN PARA TÍ." }); 
//information for 
function goToLink462() { infowindow462.open(map,marker462); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker462, 'click', goToLink462); google.maps.event.addDomListener(window, 'load', initialize);






//MARCADOR 463 
//positions 
var point463 = new google.maps.LatLng(13.669406, -89.408758); var contentString463 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">CUMBRES DE  SOBRIEDAD.</h1>'+ '<div id="bodyContent">'+ '<p><b>CUMBRES DE  SOBRIEDAD.</b> , — 16  de  Julio  de  1969.  Dirección: Cantón San José Los Sitios, Calle Principal. Días y horas de reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow463 = new google.maps.InfoWindow({ content: contentString463 }); 
//markers 
var marker463 = new google.maps.Marker({ position: point463, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "463.CUMBRES DE  SOBRIEDAD." }); 
//information for 
function goToLink463() { infowindow463.open(map,marker463); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker463, 'click', goToLink463); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 464 
//positions 
var point464 = new google.maps.LatLng(13.664777, -89.409487); var contentString464 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NUEVA VIDA SAN CARLOS.</h1>'+ '<div id="bodyContent">'+ '<p><b>NUEVA VIDA SAN CARLOS.</b> , — 01 de  Agosto de  1975.  Dirección: Caserío San Carlos. Días y horas  de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow464 = new google.maps.InfoWindow({ content: contentString464 }); 
//markers 
var marker464 = new google.maps.Marker({ position: point464, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "464.NUEVA VIDA SAN CARLOS." }); 
//information for 
function goToLink464() { infowindow464.open(map,marker464); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker464, 'click', goToLink464); google.maps.event.addDomListener(window, 'load', initialize);






//MARCADOR 465 
//positions 
var point465 = new google.maps.LatLng(13.595346, -89.417867); var contentString465 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">RENACER 13 DE ABRIL.</h1>'+ '<div id="bodyContent">'+ '<p><b>RENACER 13 DE ABRIL.</b> , — 13 de Abril de 2003. Dirección: Carretera Litoral Km 45 ½ Cantón El Zunzal. Días y horas  de  reuniones: De Lunes  a  Domingo de  5:00  a  7:00  p.m.  </p>'+ '</div>'+ '</div>'; var infowindow465 = new google.maps.InfoWindow({ content: contentString465 }); 
//markers 
var marker465 = new google.maps.Marker({ position: point465, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "465.RENACER 13 DE ABRIL." }); 
//information for 
function goToLink465() { infowindow465.open(map,marker465); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker465, 'click', goToLink465); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 466 
//positions 
var point466 = new google.maps.LatLng(13.598852, -89.418518); var contentString466 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UN DESPERTAR 22 DE JUNIO.</h1>'+ '<div id="bodyContent">'+ '<p><b>UN DESPERTAR 22 DE JUNIO.</b> , — 22 de Junio  de 2009.  Dirección: Carretera Litoral Km 42  ½  Lotificación  San  Alfonso.  Días  y horas de  reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow466 = new google.maps.InfoWindow({ content: contentString466 }); 
//markers 
var marker466 = new google.maps.Marker({ position: point466, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "466.UN DESPERTAR 22 DE JUNIO." }); 
//information for 
function goToLink466() { infowindow466.open(map,marker466); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker466, 'click', goToLink466); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 467 
//positions 
var point467 = new google.maps.LatLng(13.600103, -89.422810); var contentString467 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UN DESPERTAR EN EL PROGRESO.</h1>'+ '<div id="bodyContent">'+ '<p><b>UN DESPERTAR EN EL PROGRESO.</b> , — 20 de Septiembre de 2004. Dirección:  Colonia  El Progreso, San Alfonso  frente  a ramada. Días y horas  de  reuniones: De  Lunes  a  Domingo de  6:00  a  8:00  p.m.</p>'+ '</div>'+ '</div>'; var infowindow467 = new google.maps.InfoWindow({ content: contentString467 }); 
//markers 
var marker467 = new google.maps.Marker({ position: point467, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "467.UN DESPERTAR EN EL PROGRESO." }); 
//information for 
function goToLink467() { infowindow467.open(map,marker467); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker467, 'click', goToLink467); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 468 
//positions 
var point468 = new google.maps.LatLng(13.597100, -89.417445); var contentString468 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UN MILAGRO DE DIOS.</h1>'+ '<div id="bodyContent">'+ '<p><b>UN MILAGRO DE DIOS.</b> , — 05 de  Abril de  2013.  Dirección:  Calle La Lima una Cuadra al Norte  de Iglesia Católica  Cantón Palmarcito. Días y horas  de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow468 = new google.maps.InfoWindow({ content: contentString468 }); 
//markers 
var marker468 = new google.maps.Marker({ position: point468, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "468.UN MILAGRO DE DIOS." }); 
//information for 
function goToLink468() { infowindow468.open(map,marker468); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker468, 'click', goToLink468); google.maps.event.addDomListener(window, 'load', initialize);


//MARCADOR 469 
//positions 
var point469 = new google.maps.LatLng(13.705994, -89.454575); var contentString469 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">04  DE DICIEMBRE</h1>'+ '<div id="bodyContent">'+ '<p><b>04  DE DICIEMBRE</b> , .— 04 de  Diciembre de  1972.  Dirección:  Calle La Ronda  San  Sebastián. Días  y horas  de  reuniones: De  Lunes  a Domingo de 7:00 a 9:00 p.m.  Miembros asistentes: 10 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow469 = new google.maps.InfoWindow({ content: contentString469 }); 
//markers 
var marker469 = new google.maps.Marker({ position: point469, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "469.04  DE DICIEMBRE" }); 
//information for 
function goToLink469() { infowindow469.open(map,marker469); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker469, 'click', goToLink469); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 470 
//positions 
var point470 = new google.maps.LatLng(13.711374, -89.456853); var contentString470 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">LUZ Y ESPERANZA.</h1>'+ '<div id="bodyContent">'+ '<p><b>LUZ Y ESPERANZA.</b> , — 16 de  Febrero de  1999.  Dirección:  Cantón San Antonio.  Días y horas  de  reuniones: De  Lunes  a Domingo de 6:00 a 8:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow470 = new google.maps.InfoWindow({ content: contentString470 }); 
//markers 
var marker470 = new google.maps.Marker({ position: point470, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "470.LUZ Y ESPERANZA." }); 
//information for 
function goToLink470() { infowindow470.open(map,marker470); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker470, 'click', goToLink470); google.maps.event.addDomListener(window, 'load', initialize);




//MARCADOR 471 
//positions 
var point471 = new google.maps.LatLng(13.584804, -89.516523); var contentString471 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">COSTA DEL BALSAMO.</h1>'+ '<div id="bodyContent">'+ '<p><b>COSTA DEL BALSAMO.</b> , — 01 de  Noviembre de  1975.  Dirección: Calle   Principal   Teotepeque  100   metros  Antes   de   La  Alcaldía Municipal. Días y horas  de reuniones: De Lunes a Domingo de 7:00 a 9:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow471 = new google.maps.InfoWindow({ content: contentString471 }); 
//markers 
var marker471 = new google.maps.Marker({ position: point471, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "471.COSTA DEL BALSAMO." }); 
//information for 
function goToLink471() { infowindow471.open(map,marker471); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker471, 'click', goToLink471); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 472 
//positions 
var point472 = new google.maps.LatLng(13.584265, -89.519649); var contentString472 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UNA LUZ NOS ALUMBRÓ EL CAMINO.</h1>'+ '<div id="bodyContent">'+ '<p><b>UNA LUZ NOS ALUMBRÓ EL CAMINO.</b> , — 07 de  Enero  de  1978. Dirección:  Cantón Mizata Km 87 Carretera Litoral. Días y horas  de reuniones: De  Lunes  a  Domingo de  7:00  a  9:00  p.m. </p>'+ '</div>'+ '</div>'; var infowindow472 = new google.maps.InfoWindow({ content: contentString472 });
 //markers
  var marker472 = new google.maps.Marker({ position: point472, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "472.UNA LUZ NOS ALUMBRÓ EL CAMINO." }); 
  //information for 
  function goToLink472() { infowindow472.open(map,marker472); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker472, 'click', goToLink472); google.maps.event.addDomListener(window, 'load', initialize);



//MARCADOR 473 
//positions 
var point473 = new google.maps.LatLng(13.591899, -89.291422); var contentString473 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">15  DE JUNIO.</h1>'+ '<div id="bodyContent">'+ '<p><b>15  DE JUNIO.</b> , —  15  de  Junio  de  1998.  Dirección:  Final Avenida España y 3a   Calle  Oriente Barrio  El Calvario  Nº  15.  Días  y horas de  reuniones: De Lunes a Domingo de  6:30 a 8:30 p.m.</p>'+ '</div>'+ '</div>'; var infowindow473 = new google.maps.InfoWindow({ content: contentString473 }); 
//markers 
var marker473 = new google.maps.Marker({ position: point473, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "473.15  DE JUNIO." }); 
//information for 
function goToLink473() { infowindow473.open(map,marker473); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker473, 'click', goToLink473); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 474 
//positions 
var point474 = new google.maps.LatLng(13.587265, -89.286726); var contentString474 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NUEVO  ZARAGOZA.</h1>'+ '<div id="bodyContent">'+ '<p><b>NUEVO  ZARAGOZA.</b> , — 05  de  Marzo  de  1978.  Dirección:  Calle Principal  Monseñor Romero   Nº  7-B.  Días  y horas   de  reuniones: De Lunes a Domingo de  7:00 a 9:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow474 = new google.maps.InfoWindow({ content: contentString474 }); 
//markers 
var marker474 = new google.maps.Marker({ position: point474, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "474.NUEVO  ZARAGOZA." }); 
//information for 
function goToLink474() { infowindow474.open(map,marker474); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker474, 'click', goToLink474); google.maps.event.addDomListener(window, 'load', initialize);




}