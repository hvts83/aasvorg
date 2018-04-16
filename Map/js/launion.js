
function initialize() {


    //Map parametrs
    var mapOptions = {
        zoom: 10,
        center: new google.maps.LatLng(13.611072, -87.900372),
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












//MARCADOR 1521 
//positions 
var point1521 = new google.maps.LatLng(13.739994, -87.866675); var contentString1521 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">FE Y ESPERANZA.</h1>'+ '<div id="bodyContent">'+ '<p><b>FE Y ESPERANZA.</b> , — 12  de  Febrero de  2009.  Dirección:  Cantón Mojones. Días y horas  de reuniones: De Lunes a Domingo de 6:00 a8:00 p.m.</p>'+ '</div>'+ '</div>'; var infowindow1521 = new google.maps.InfoWindow({ content: contentString1521 }); 
//markers 
var marker1521 = new google.maps.Marker({ position: point1521, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1521.FE Y ESPERANZA." }); 
//information for 
function goToLink1521() { infowindow1521.open(map,marker1521); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1521, 'click', goToLink1521); google.maps.event.addDomListener(window, 'load', initialize);
//MARCADOR 1522 
//positions 
var point1522 = new google.maps.LatLng(13.742118, -87.875809); var contentString1522 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">HORIZONTES DE REDENCIÓN.</h1>'+ '<div id="bodyContent">'+ '<p><b>HORIZONTES DE REDENCIÓN.</b> , — 15 de Septiembre de 1966.  Di- rección:  Barrio El Centro salida a Lislique. Días y horas de reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow1522 = new google.maps.InfoWindow({ content: contentString1522 }); 
//markers 
var marker1522 = new google.maps.Marker({ position: point1522, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1522.HORIZONTES DE REDENCIÓN." }); 
//information for 
function goToLink1522() { infowindow1522.open(map,marker1522); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1522, 'click', goToLink1522); google.maps.event.addDomListener(window, 'load', initialize);
//MARCADOR 1523 
//positions 
var point1523 = new google.maps.LatLng(13.738450, -87.875595); var contentString1523 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">MI ÚLTIMA COPA.</h1>'+ '<div id="bodyContent">'+ '<p><b>MI ÚLTIMA COPA.</b> , — 04 de  Julio de  1976.  Dirección:  Caserío Invi- tas,  Cantón Huertas Viejas. Días y horas  de  reuniones: De Lunes a Domingo de 4:00 a 6:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow1523 = new google.maps.InfoWindow({ content: contentString1523 }); 
//markers 
var marker1523 = new google.maps.Marker({ position: point1523, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1523.MI ÚLTIMA COPA." }); 
//information for 
function goToLink1523() { infowindow1523.open(map,marker1523); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1523, 'click', goToLink1523); google.maps.event.addDomListener(window, 'load', initialize);
//MARCADOR 1524 
//positions 
var point1524 = new google.maps.LatLng(13.738033, -87.872805); var contentString1524 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NUEVO AMANECER.</h1>'+ '<div id="bodyContent">'+ '<p><b>NUEVO AMANECER.</b> , — 12 de  Mayo de  1996.  Dirección:  Colonia Nueva.  Días y horas  de  reuniones: De Lunes a Domingo de  6:30 a 8:30 p.m. </p>'+ '</div>'+ '</div>'; var infowindow1524 = new google.maps.InfoWindow({ content: contentString1524 }); 
//markers 
var marker1524 = new google.maps.Marker({ position: point1524, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1524.NUEVO AMANECER." }); 
//information for 
function goToLink1524() { infowindow1524.open(map,marker1524); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1524, 'click', goToLink1524); google.maps.event.addDomListener(window, 'load', initialize);
//MARCADOR 1525 
//positions 
var point1525 = new google.maps.LatLng(13.742243, -87.873320); var contentString1525 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">FELIZ AMANECER 04  DE MAYO.</h1>'+ '<div id="bodyContent">'+ '<p><b>FELIZ AMANECER 04  DE MAYO.</b> , — 04 de  Mayo de  2013.  Direc- ción:  Cantón Agua  Blanca,  Caserío Los Romero. Días  y horas  de reuniones: Lunes, Martes, Jueves, Viernes y Domingo de 5:00 a 7:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow1525 = new google.maps.InfoWindow({ content: contentString1525 }); 
//markers 
var marker1525 = new google.maps.Marker({ position: point1525, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1525.FELIZ AMANECER 04  DE MAYO." }); 
//information for 
function goToLink1525() { infowindow1525.open(map,marker1525); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1525, 'click', goToLink1525); google.maps.event.addDomListener(window, 'load', initialize);





//MARCADOR 1526 
//positions 
var point1526 = new google.maps.LatLng(13.575164, -87.953576); var contentString1526 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">QUERER ES PODER.</h1>'+ '<div id="bodyContent">'+ '<p><b>QUERER ES PODER.</b> , — 07 de Abril de 1964. Dirección:  Barrio Concepción. Días y horas  de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow1526 = new google.maps.InfoWindow({ content: contentString1526 }); 
//markers 
var marker1526 = new google.maps.Marker({ position: point1526, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1526.QUERER ES PODER." }); 
//information for 
function goToLink1526() { infowindow1526.open(map,marker1526); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1526, 'click', goToLink1526); google.maps.event.addDomListener(window, 'load', initialize);





//MARCADOR 1527 
//positions 
var point1527 = new google.maps.LatLng(13.309141, -87.800127); var contentString1527 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">06 DE AGOSTO.</h1>'+ '<div id="bodyContent">'+ '<p><b>06 DE AGOSTO.</b> , — 06 de  Agosto de  1981.  Dirección:  Playa El Ma- culiz. Días y horas de reuniones: De Lunes a Domingo de 4:00 a 6:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow1527 = new google.maps.InfoWindow({ content: contentString1527 }); 
//markers 
var marker1527 = new google.maps.Marker({ position: point1527, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1527.06 DE AGOSTO." }); 
//information for 
function goToLink1527() { infowindow1527.open(map,marker1527); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1527, 'click', goToLink1527); google.maps.event.addDomListener(window, 'load', initialize);
//MARCADOR 1528 
//positions 
var point1528 = new google.maps.LatLng(13.306050, -87.798683); var contentString1528 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">24 HORAS FUENTE DE VIDA.</h1>'+ '<div id="bodyContent">'+ '<p><b>24 HORAS FUENTE DE VIDA.</b> , — 14 de Septiembre de 2011. Direc- ción: Playa El Flor, Cantón Playas Negras. Días y horas de reuniones: De Lunes a Domingo de  4:00 a 6:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow1528 = new google.maps.InfoWindow({ content: contentString1528 }); 
//markers 
var marker1528 = new google.maps.Marker({ position: point1528, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1528.24 HORAS FUENTE DE VIDA." }); 
//information for 
function goToLink1528() { infowindow1528.open(map,marker1528); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1528, 'click', goToLink1528); google.maps.event.addDomListener(window, 'load', initialize);
//MARCADOR 1529 
//positions 
var point1529 = new google.maps.LatLng(13.313987, -87.806045); var contentString1529 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">ESCUELA DE LA VIDA.</h1>'+ '<div id="bodyContent">'+ '<p><b>ESCUELA DE LA VIDA.</b> , — 11 de  Abril de  2005.  Dirección:  Colonia Nattuz,  Playas Negras. Días y horas  de  reuniones: De Lunes a Do- mingo  de 4:00 a 6:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow1529 = new google.maps.InfoWindow({ content: contentString1529 }); 
//markers 
var marker1529 = new google.maps.Marker({ position: point1529, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1529.ESCUELA DE LA VIDA." }); 
//information for 
function goToLink1529() { infowindow1529.open(map,marker1529); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1529, 'click', goToLink1529); google.maps.event.addDomListener(window, 'load', initialize);
//MARCADOR 1530 
//positions 
var point1530 = new google.maps.LatLng(13.317329, -87.814118); var contentString1530 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">FUENTE DE VIDA.</h1>'+ '<div id="bodyContent">'+ '<p><b>FUENTE DE VIDA.</b> , — 05 de Mayo de 2005.  Dirección:  Playa Torola. Días y horas  de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.</p>'+ '</div>'+ '</div>'; var infowindow1530 = new google.maps.InfoWindow({ content: contentString1530 }); 
//markers 
var marker1530 = new google.maps.Marker({ position: point1530, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1530.FUENTE DE VIDA." }); 
//information for 
function goToLink1530() { infowindow1530.open(map,marker1530); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1530, 'click', goToLink1530); google.maps.event.addDomListener(window, 'load', initialize);
//MARCADOR 1531 
//positions 
var point1531 = new google.maps.LatLng(13.316186, -87.812025); var contentString1531 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UN MILAGRO EN LAS TUNAS.</h1>'+ '<div id="bodyContent">'+ '<p><b>UN MILAGRO EN LAS TUNAS.</b> , — 04 de Mayo de 1977.  Dirección: Playa Las Tunas. Días y horas  de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow1531 = new google.maps.InfoWindow({ content: contentString1531 }); 
//markers 
var marker1531 = new google.maps.Marker({ position: point1531, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1531.UN MILAGRO EN LAS TUNAS." }); 
//information for 
function goToLink1531() { infowindow1531.open(map,marker1531); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1531, 'click', goToLink1531); google.maps.event.addDomListener(window, 'load', initialize);
//MARCADOR 1532 
//positions 
var point1532 = new google.maps.LatLng(13.312807, -87.866556); var contentString1532 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UNA ESPERANZA EN LAS TUNAS.</h1>'+ '<div id="bodyContent">'+ '<p><b>UNA ESPERANZA EN LAS TUNAS.</b> , — 18 de Septiembre de 2013. Dirección:  Playa Las Tunas, 1 Cuadra después de pista de baile (Bri- sas  del  mar). Días y horas  de  reuniones: De  Lunes  a Domingo de 6:00 a 8:00 p.m.</p>'+ '</div>'+ '</div>'; var infowindow1532 = new google.maps.InfoWindow({ content: contentString1532 }); 
//markers 
var marker1532 = new google.maps.Marker({ position: point1532, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1532.UNA ESPERANZA EN LAS TUNAS." }); 
//information for 
function goToLink1532() { infowindow1532.open(map,marker1532); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1532, 'click', goToLink1532); google.maps.event.addDomListener(window, 'load', initialize);
//MARCADOR 1533 
//positions 
var point1533 = new google.maps.LatLng(13.313694, -87.803734); var contentString1533 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UNA LUZ EN EL CANTADO.</h1>'+ '<div id="bodyContent">'+ '<p><b>UNA LUZ EN EL CANTADO.</b> , — 13 de  Agosto de  1976.  Dirección: Cantón Llanos Los Patos.  Días y horas  de reuniones: De Lunes a Do- mingo  de 6:00 a 8:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow1533 = new google.maps.InfoWindow({ content: contentString1533 }); 
//markers 
var marker1533 = new google.maps.Marker({ position: point1533, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1533.UNA LUZ EN EL CANTADO." }); 
//information for 
function goToLink1533() { infowindow1533.open(map,marker1533); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1533, 'click', goToLink1533); google.maps.event.addDomListener(window, 'load', initialize);
//MARCADOR 1534 
//positions 
var point1534 = new google.maps.LatLng(13.318672, -87.813236); var contentString1534 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UNA LUZ EN TU CAMINO.</h1>'+ '<div id="bodyContent">'+ '<p><b>UNA LUZ EN TU CAMINO.</b> , — 01 de Abril de 2008. Dirección: Playa El Tamarindo. Días y horas  de  reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.</p>'+ '</div>'+ '</div>'; var infowindow1534 = new google.maps.InfoWindow({ content: contentString1534 }); 
//markers 
var marker1534 = new google.maps.Marker({ position: point1534, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1534.UNA LUZ EN TU CAMINO." }); 
//information for 
function goToLink1534() { infowindow1534.open(map,marker1534); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1534, 'click', goToLink1534); google.maps.event.addDomListener(window, 'load', initialize);
//MARCADOR 1535 
//positions 
var point1535 = new google.maps.LatLng(13.301657, -87.871286); var contentString1535 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UNIDOS DE CORAZÓN.</h1>'+ '<div id="bodyContent">'+ '<p><b>UNIDOS DE CORAZÓN.</b> , — 16 de Abril de 1974.  Dirección:  Cantón El Juaguey. Días y horas  de reuniones: De Lunes a Domingo de 4:00 a 6:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow1535 = new google.maps.InfoWindow({ content: contentString1535 }); 
//markers 
var marker1535 = new google.maps.Marker({ position: point1535, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1535.UNIDOS DE CORAZÓN." }); 
//information for 
function goToLink1535() { infowindow1535.open(map,marker1535); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1535, 'click', goToLink1535); google.maps.event.addDomListener(window, 'load', initialize);
//MARCADOR 1536 
//positions 
var point1536 = new google.maps.LatLng(13.301210, -87.863681); var contentString1536 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">VIVIR EN SOBRIEDAD.</h1>'+ '<div id="bodyContent">'+ '<p><b>VIVIR EN SOBRIEDAD.</b> , — 22 de  Junio  de  2004.  Dirección:  Cantón Loma  Larga.  Días y horas  de  reuniones: De  Lunes  a Domingo de 5:00 a 7:00 p.m.</p>'+ '</div>'+ '</div>'; var infowindow1536 = new google.maps.InfoWindow({ content: contentString1536 }); 
//markers 
var marker1536 = new google.maps.Marker({ position: point1536, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1536.VIVIR EN SOBRIEDAD." }); 
//information for 
function goToLink1536() { infowindow1536.open(map,marker1536); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1536, 'click', goToLink1536); google.maps.event.addDomListener(window, 'load', initialize);





//MARCADOR 1537 
//positions 
var point1537 = new google.maps.LatLng(13.352739, -87.992715); var contentString1537 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">12 DE ABRIL.</h1>'+ '<div id="bodyContent">'+ '<p><b>12 DE ABRIL.</b> , — 12 de Abril de 2006.  Dirección:  Carretera Paname- ricana  1 Cuadra antes de  llegar  al puente de  San Antonio  Silva, El Caulotillo, El Carmen. Días y horas de reuniones: De Lunes a Domin- go de 6:00 a 8:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow1537 = new google.maps.InfoWindow({ content: contentString1537 }); 
//markers 
var marker1537 = new google.maps.Marker({ position: point1537, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1537.12 DE ABRIL." }); 
//information for 
function goToLink1537() { infowindow1537.open(map,marker1537); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1537, 'click', goToLink1537); google.maps.event.addDomListener(window, 'load', initialize);
//MARCADOR 1538 
//positions 
var point1538 = new google.maps.LatLng(13.355041, -87.997182); var contentString1538 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">POR AMOR A DIOS.</h1>'+ '<div id="bodyContent">'+ '<p><b>POR AMOR A DIOS.</b> , — 07  de  Diciembre de  1975.  Dirección:  3ª Calle Poniente contiguo a estación Fenadesal Barrio El Centro Olo- mega. Días y horas  de  reuniones: De Lunes  a Domingo de  5:00  a 7:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow1538 = new google.maps.InfoWindow({ content: contentString1538 }); 
//markers 
var marker1538 = new google.maps.Marker({ position: point1538, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1538.POR AMOR A DIOS." }); 
//information for 
function goToLink1538() { infowindow1538.open(map,marker1538); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1538, 'click', goToLink1538); google.maps.event.addDomListener(window, 'load', initialize);
//MARCADOR 1539 
//positions 
var point1539 = new google.maps.LatLng(13.356189, -88.003749); var contentString1539 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">RECUPERACIÓN DE VIDA.</h1>'+ '<div id="bodyContent">'+ '<p><b>RECUPERACIÓN DE VIDA.</b> , — 26 de  Julio de  2007.  Dirección:  Ba- rrio El Centro entrada al Barrio Nuevo, El Carmen. Días y horas  de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow1539 = new google.maps.InfoWindow({ content: contentString1539 }); 
//markers 
var marker1539 = new google.maps.Marker({ position: point1539, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1539.RECUPERACIÓN DE VIDA." }); 
//information for 
function goToLink1539() { infowindow1539.open(map,marker1539); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1539, 'click', goToLink1539); google.maps.event.addDomListener(window, 'load', initialize);
//MARCADOR 1540 
//positions 
var point1540 = new google.maps.LatLng(13.359947, -88.001860); var contentString1540 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UN  MENSAJE DE A.A EL GUAYABITO.</h1>'+ '<div id="bodyContent">'+ '<p><b>UN  MENSAJE DE A.A EL GUAYABITO.</b> , — 01  de  Noviembre de 2009.  Dirección:  Calle al Cementerio, Caserío El Guayabito. Días y horas de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow1540 = new google.maps.InfoWindow({ content: contentString1540 }); 
//markers 
var marker1540 = new google.maps.Marker({ position: point1540, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1540.UN  MENSAJE DE A.A EL GUAYABITO." }); 
//information for 
function goToLink1540() { infowindow1540.open(map,marker1540); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1540, 'click', goToLink1540); google.maps.event.addDomListener(window, 'load', initialize);






//MARCADOR 1541 
//positions 
var point1541 = new google.maps.LatLng(13.195681, -88.055381); var contentString1541 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">30  DE NOVIEMBRE.</h1>'+ '<div id="bodyContent">'+ '<p><b>30  DE NOVIEMBRE.</b> , — 30 de  Noviembre de  1975.  Dirección:  Mu- nicipio de Intipucá.  Días y horas  de reuniones: De Lunes a Domingo de 5:00 a 7:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow1541 = new google.maps.InfoWindow({ content: contentString1541 }); 
//markers 
var marker1541 = new google.maps.Marker({ position: point1541, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1541.30  DE NOVIEMBRE." }); 
//information for 
function goToLink1541() { infowindow1541.open(map,marker1541); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1541, 'click', goToLink1541); google.maps.event.addDomListener(window, 'load', initialize);
//MARCADOR 1542 
//positions 
var point1542 = new google.maps.LatLng(13.198465, -88.055321); var contentString1542 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NUEVO DESPERTAR.</h1>'+ '<div id="bodyContent">'+ '<p><b>NUEVO DESPERTAR.</b> , — 13 de Septiembre de 2010. Dirección: Mu- nicipio de Intipucá.  Días y horas  de reuniones: De Lunes a Domingo de 4:00 a 6:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow1542 = new google.maps.InfoWindow({ content: contentString1542 }); 
//markers 
var marker1542 = new google.maps.Marker({ position: point1542, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1542.NUEVO DESPERTAR." }); 
//information for 
function goToLink1542() { infowindow1542.open(map,marker1542); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1542, 'click', goToLink1542); google.maps.event.addDomListener(window, 'load', initialize);





//MARCADOR 1543 
//positions 
var point1543 = new google.maps.LatLng(13.346295, -87.872971); var contentString1543 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">21  DE JULIO.</h1>'+ '<div id="bodyContent">'+ '<p><b>21  DE JULIO.</b> , — 21  de  Julio  de  2010.  Dirección:  Cantón El Pilón Conchagua. Días  y horas  de  reuniones: De  Lunes  a  Domingo de 6:00 a 8:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow1543 = new google.maps.InfoWindow({ content: contentString1543 }); 
//markers 
var marker1543 = new google.maps.Marker({ position: point1543, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1543.21  DE JULIO." }); 
//information for 
function goToLink1543() { infowindow1543.open(map,marker1543); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1543, 'click', goToLink1543); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1544 
//positions 
var point1544 = new google.maps.LatLng(13.338665, -87.858753); var contentString1544 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">ÁRBOL DE LA ESPERANZA (INSTITUCIONAL).</h1>'+ '<div id="bodyContent">'+ '<p><b>ÁRBOL DE LA ESPERANZA (INSTITUCIONAL).</b> , — 28 de  Julio de 1990.  Dirección:  Centro Penal  La Unión.  Días  y horas  de  reuniones: Jueves y Viernes de 1:30 a 3:30 p.m. </p>'+ '</div>'+ '</div>'; var infowindow1544 = new google.maps.InfoWindow({ content: contentString1544 }); 
//markers 
var marker1544 = new google.maps.Marker({ position: point1544, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1544.ÁRBOL DE LA ESPERANZA (INSTITUCIONAL)." }); 
//information for 
function goToLink1544() { infowindow1544.open(map,marker1544); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1544, 'click', goToLink1544); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1545 
//positions 
var point1545 = new google.maps.LatLng(13.335701, -87.834290); var contentString1545 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">BASE Y FORTALEZA.</h1>'+ '<div id="bodyContent">'+ '<p><b>BASE Y FORTALEZA.</b> , — 25 de  Mayo de  2012.  Dirección:  Base Naval de  La Unión.  Días y horas  de  reuniones: Lunes  y Miércoles  de 6:00  a 8:00  p.m.  Charlas:  Lunes  y Miércoles  de  9:00  a 10:00  a.m.</p>'+ '</div>'+ '</div>'; var infowindow1545 = new google.maps.InfoWindow({ content: contentString1545 }); 
//markers 
var marker1545 = new google.maps.Marker({ position: point1545, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1545.BASE Y FORTALEZA." }); 
//information for 
function goToLink1545() { infowindow1545.open(map,marker1545); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1545, 'click', goToLink1545); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1546 
//positions 
var point1546 = new google.maps.LatLng(13.337200, -87.845777); var contentString1546 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">ESTACIÓN LA ESPERANZA.</h1>'+ '<div id="bodyContent">'+ '<p><b>ESTACIÓN LA ESPERANZA.</b> , — 04 de  Abril de  2011.  Dirección:  2 Cuadras Arriba  de  La Terminal  de  buses, Barrio Honduras. Días y horas de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.</p>'+ '</div>'+ '</div>'; var infowindow1546 = new google.maps.InfoWindow({ content: contentString1546 }); 
//markers 
var marker1546 = new google.maps.Marker({ position: point1546, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1546.ESTACIÓN LA ESPERANZA." }); 
//information for 
function goToLink1546() { infowindow1546.open(map,marker1546); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1546, 'click', goToLink1546); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1547 
//positions 
var point1547 = new google.maps.LatLng(13.316105, -87.883843); var contentString1547 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">JÓVENES EN ACCIÓN.</h1>'+ '<div id="bodyContent">'+ '<p><b>JÓVENES EN ACCIÓN.</b> , — 25 de Junio  de 2014.  Dirección:  Cantón Pavana  La Unión. Días y horas  de  reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow1547 = new google.maps.InfoWindow({ content: contentString1547 }); 
//markers 
var marker1547 = new google.maps.Marker({ position: point1547, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1547.JÓVENES EN ACCIÓN." }); 
//information for 
function goToLink1547() { infowindow1547.open(map,marker1547); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1547, 'click', goToLink1547); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1548 
//positions 
var point1548 = new google.maps.LatLng(13.330606, -87.859637); var contentString1548 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">LA NUEVA ARCA, LA UNIÓN.</h1>'+ '<div id="bodyContent">'+ '<p><b>LA NUEVA ARCA, LA UNIÓN.</b> , —  10 de  Febrero de  2001.  Direc- ción: Barrio Concepción, Circunvalación. Días y horas  de reuniones: De Lunes a Domingo de  7:00 a 9:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow1548 = new google.maps.InfoWindow({ content: contentString1548 }); 
//markers 
var marker1548 = new google.maps.Marker({ position: point1548, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1548.LA NUEVA ARCA, LA UNIÓN." }); 
//information for 
function goToLink1548() { infowindow1548.open(map,marker1548); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1548, 'click', goToLink1548); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1549 
//positions 
var point1549 = new google.maps.LatLng(13.338332, -87.847311); var contentString1549 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">LA NUEVA  DIMENSIÓN.</h1>'+ '<div id="bodyContent">'+ '<p><b>LA NUEVA  DIMENSIÓN.</b> , — 06  de  Enero  de  1995.  Dirección:  8ª Avenida  Norte  Barrio San Carlos.  Días y horas  de reuniones: De Lu- nes  a Domingo de  7:00 a 9:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow1549 = new google.maps.InfoWindow({ content: contentString1549 });
 //markers
  var marker1549 = new google.maps.Marker({ position: point1549, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1549.LA NUEVA  DIMENSIÓN." }); 
  //information for 
  function goToLink1549() { infowindow1549.open(map,marker1549); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1549, 'click', goToLink1549); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1550 
//positions 
var point1550 = new google.maps.LatLng(13.332521, -87.839945); var contentString1550 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">LA UNIÓN HACE LA FUERZA.</h1>'+ '<div id="bodyContent">'+ '<p><b>LA UNIÓN HACE LA FUERZA.</b> , — 28 de Enero  de 1962.  Dirección: Meléndez 9ª Avenida Sur final Calle Villalta, Barrio San Carlos. Días y horas de reuniones: De Lunes a Domingo de 7:00 a 9:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow1550 = new google.maps.InfoWindow({ content: contentString1550 }); 
//markers 
var marker1550 = new google.maps.Marker({ position: point1550, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1550.LA UNIÓN HACE LA FUERZA." }); 
//information for 
function goToLink1550() { infowindow1550.open(map,marker1550); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1550, 'click', goToLink1550); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1551 
//positions 
var point1551 = new google.maps.LatLng(13.324290, -87.827870); var contentString1551 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">MI FORTALEZA.</h1>'+ '<div id="bodyContent">'+ '<p><b>MI FORTALEZA.</b> , — 15 de Febrero de 1991.  Dirección:  Caserío Pun- ta El Jocote, Cantón Güisquil.  Días y horas  de  reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow1551 = new google.maps.InfoWindow({ content: contentString1551 }); 
//markers 
var marker1551 = new google.maps.Marker({ position: point1551, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1551.MI FORTALEZA." }); 
//information for
 function goToLink1551() { infowindow1551.open(map,marker1551); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1551, 'click', goToLink1551); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1552 
//positions 
var point1552 = new google.maps.LatLng(13.329180, -87.840068); var contentString1552 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">MI ÚNICO CAMINO.</h1>'+ '<div id="bodyContent">'+ '<p><b>MI ÚNICO CAMINO.</b> , — 12 de  Septiembre de  1983.  Dirección:  Ca- lle Villalta Barrio San Carlos.  Días y horas  de  reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow1552 = new google.maps.InfoWindow({ content: contentString1552 }); 
//markers 
var marker1552 = new google.maps.Marker({ position: point1552, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1552.MI ÚNICO CAMINO." }); 
//information for
 function goToLink1552() { infowindow1552.open(map,marker1552); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1552, 'click', goToLink1552); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1553 
//positions 
var point1553 = new google.maps.LatLng(13.331416, -87.847574); var contentString1553 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NUEVO SENDERO EN LA BELÉN.</h1>'+ '<div id="bodyContent">'+ '<p><b>NUEVO SENDERO EN LA BELÉN.</b> , — 24 de  Agosto de  1998.  Di- rección:  Calle  Principal  Colonia  Belén.  Días y horas  de  reuniones: De  Lunes  a Domingo de  6:00  a 8:00  p.m.</p>'+ '</div>'+ '</div>'; var infowindow1553 = new google.maps.InfoWindow({ content: contentString1553 }); 
//markers 
var marker1553 = new google.maps.Marker({ position: point1553, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1553.NUEVO SENDERO EN LA BELÉN." }); 
//information for 
function goToLink1553() { infowindow1553.open(map,marker1553); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1553, 'click', goToLink1553); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1554 
//positions 
var point1554 = new google.maps.LatLng(13.306765, -87.838971); var contentString1554 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">REGRESO DE UN ABÍSMO.</h1>'+ '<div id="bodyContent">'+ '<p><b>REGRESO DE UN ABÍSMO.</b> , — 25 de  Febrero de  1979.  Dirección: Calle  Principal  Cantón Conchagüita. Días  y horas   de  reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow1554 = new google.maps.InfoWindow({ content: contentString1554 });
 //markers
var marker1554 = new google.maps.Marker({ position: point1554, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1554.REGRESO DE UN ABÍSMO." }); 
//information for 
function goToLink1554() { infowindow1554.open(map,marker1554); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1554, 'click', goToLink1554); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1555 
//positions 
var point1555 = new google.maps.LatLng(13.307308, -87.862792); var contentString1555 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">SALVADOR DEL MUNDO.</h1>'+ '<div id="bodyContent">'+ '<p><b>SALVADOR DEL MUNDO.</b> , —  15 de  Abril de  1967.  Dirección:  Ciu- dad  de  Conchagua, Barrio Guadalupe. Días y horas  de  reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow1555 = new google.maps.InfoWindow({ content: contentString1555 }); 
//markers 
var marker1555 = new google.maps.Marker({ position: point1555, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1555.SALVADOR DEL MUNDO." }); 
//information for 
function goToLink1555() { infowindow1555.open(map,marker1555); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1555, 'click', goToLink1555); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1556 
//positions 
var point1556 = new google.maps.LatLng(13.320046, -87.882522); var contentString1556 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">TREINTA DE MARZO.</h1>'+ '<div id="bodyContent">'+ '<p><b>TREINTA DE MARZO.</b> , — 30 de  Marzo de  1969.  Dirección:  Cantón Güisquil,  Calle  Principal  al Norte  de  Escuela  Profesor  Raúl Flores Moreno. Días y horas  de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow1556 = new google.maps.InfoWindow({ content: contentString1556 }); 
//markers 
var marker1556 = new google.maps.Marker({ position: point1556, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1556.TREINTA DE MARZO." }); 
//information for 
function goToLink1556() { infowindow1556.open(map,marker1556); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1556, 'click', goToLink1556); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1557 
//positions 
var point1557 = new google.maps.LatLng(13.335899, -87.840988); var contentString1557 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">TRIUNFO DE MI HOGAR.</h1>'+ '<div id="bodyContent">'+ '<p><b>TRIUNFO DE MI HOGAR.</b> , — 13 de Septiembre de 1973. Dirección: 7ª Avenida  Sur Barrio Concepción. Días y horas  de  reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow1557 = new google.maps.InfoWindow({ content: contentString1557 }); 
//markers 
var marker1557 = new google.maps.Marker({ position: point1557, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1557.TRIUNFO DE MI HOGAR." }); 
//information for 
function goToLink1557() { infowindow1557.open(map,marker1557); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1557, 'click', goToLink1557); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1558 
//positions 
var point1558 = new google.maps.LatLng(13.332138, -87.845854); var contentString1558 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UN REGALO DE DIOS.</h1>'+ '<div id="bodyContent">'+ '<p><b>UN REGALO DE DIOS.</b> , — 06 de  Junio  de  1994.  Dirección:  2ª Ave- nida Sur Pasaje  San Pedro Barrio Las Flores. Días y horas  de reunio- nes:  De Lunes a Sábado de  7:00 a 9:00 p.m.  y Domingo de  5:00 a 7:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow1558 = new google.maps.InfoWindow({ content: contentString1558 }); 
//markers 
var marker1558 = new google.maps.Marker({ position: point1558, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1558.UN REGALO DE DIOS." }); 
//information for 
function goToLink1558() { infowindow1558.open(map,marker1558); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1558, 'click', goToLink1558); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1559 
//positions 
var point1559 = new google.maps.LatLng(13.338902, -87.846728); var contentString1559 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UNA LUZ EN EL GOLFO.</h1>'+ '<div id="bodyContent">'+ '<p><b>UNA LUZ EN EL GOLFO.</b> , — 08 de Agosto de 1967.  Dirección:  Ca- lle San Carlos, 8ª Avenida  Norte  San Carlos. Días y horas  de reunio- nes: De Lunes a Domingo de 6:00 a 8:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow1559 = new google.maps.InfoWindow({ content: contentString1559 }); 
//markers 
var marker1559 = new google.maps.Marker({ position: point1559, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1559.UNA LUZ EN EL GOLFO." }); 
//information for 
function goToLink1559() { infowindow1559.open(map,marker1559); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1559, 'click', goToLink1559); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1560 
//positions 
var point1560 = new google.maps.LatLng(13.337597, -87.843509); var contentString1560 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UNA  LUZ EN LA ALCALDÍA.</h1>'+ '<div id="bodyContent">'+ '<p><b>UNA  LUZ EN LA ALCALDÍA.</b> , — 16 de  Enero  de  2013.  Dirección: Alcaldía de La Unión. Días y horas  de reuniones: Lunes, Miércoles  y Viernes de 1:00 a 3:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow1560 = new google.maps.InfoWindow({ content: contentString1560 }); 
//markers 
var marker1560 = new google.maps.Marker({ position: point1560, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1560.UNA  LUZ EN LA ALCALDÍA." }); 
//information for 
function goToLink1560() { infowindow1560.open(map,marker1560); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1560, 'click', goToLink1560); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1561 
//positions 
var point1561 = new google.maps.LatLng(13.325609, -87.862425); var contentString1561 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UNA LUZ EN LA CAÑADA.</h1>'+ '<div id="bodyContent">'+ '<p><b>UNA LUZ EN LA CAÑADA.</b> , — 01 de  Mayo de  1992.  Dirección:  La Cañada Cantón Piedras  Blancas.  Días y horas  de  reuniones: De Lu- nes  a Domingo de  6:00 a 8:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow1561 = new google.maps.InfoWindow({ content: contentString1561 }); 
//markers 
var marker1561 = new google.maps.Marker({ position: point1561, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1561.UNA LUZ EN LA CAÑADA." }); 
//information for 
function goToLink1561() { infowindow1561.open(map,marker1561); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1561, 'click', goToLink1561); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1562 
//positions 
var point1562 = new google.maps.LatLng(13.347855, -87.871527); var contentString1562 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UNA LUZ EN LA FUENTE.</h1>'+ '<div id="bodyContent">'+ '<p><b>UNA LUZ EN LA FUENTE.</b> , — 25 de Octubre de 2002.  Dirección:  El Cacao, La Unión. Días y horas  de  reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow1562 = new google.maps.InfoWindow({ content: contentString1562 }); 
//markers 
var marker1562 = new google.maps.Marker({ position: point1562, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1562.UNA LUZ EN LA FUENTE." }); 
//information for 
function goToLink1562() { infowindow1562.open(map,marker1562); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1562, 'click', goToLink1562); google.maps.event.addDomListener(window, 'load', initialize);







//MARCADOR 1563 
//positions 
var point1563 = new google.maps.LatLng(13.802887, -87.895679); var contentString1563 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NUEVO DESPERTAR.</h1>'+ '<div id="bodyContent">'+ '<p><b>NUEVO DESPERTAR.</b> , — 26 de  Septiembre de  2007.  Dirección:  El Portillo  Blanco,  Cantón Derrumbado. Días  y horas  de  reuniones: De Lunes a Domingo de  5:30 a 7:30 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow1563 = new google.maps.InfoWindow({ content: contentString1563 }); 
//markers 
var marker1563 = new google.maps.Marker({ position: point1563, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1563.NUEVO DESPERTAR." }); 
//information for 
function goToLink1563() { infowindow1563.open(map,marker1563); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1563, 'click', goToLink1563); google.maps.event.addDomListener(window, 'load', initialize);
//MARCADOR 1564 
//positions 
var point1564 = new google.maps.LatLng(13.806597, -87.898598); var contentString1564 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UNA LUZ EN MI CAMINO LISLIQUE.</h1>'+ '<div id="bodyContent">'+ '<p><b>UNA LUZ EN MI CAMINO LISLIQUE.</b> , — 13 de  Octubre de  1972. Dirección:  Salida a Anamorós. Días y horas  de  reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow1564 = new google.maps.InfoWindow({ content: contentString1564 }); 
//markers 
var marker1564 = new google.maps.Marker({ position: point1564, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1564.UNA LUZ EN MI CAMINO LISLIQUE." }); 
//information for 
function goToLink1564() { infowindow1564.open(map,marker1564); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1564, 'click', goToLink1564); google.maps.event.addDomListener(window, 'load', initialize);





//MARCADOR 1565 
//positions 
var point1565 = new google.maps.LatLng(13.784299, -87.835162); var contentString1565 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">SENDERO DE NUEVA VIDA.</h1>'+ '<div id="bodyContent">'+ '<p><b>SENDERO DE NUEVA VIDA.</b> , — 20 de  Mayo  de  1966.  Dirección: Barrio El Centro Nueva Esparta. Días y horas de reuniones: De Lunes a Domingo de 6:30 a 8:30 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow1565 = new google.maps.InfoWindow({ content: contentString1565 }); 
//markers 
var marker1565 = new google.maps.Marker({ position: point1565, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1565.SENDERO DE NUEVA VIDA." }); 
//information for 
function goToLink1565() { infowindow1565.open(map,marker1565); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1565, 'click', goToLink1565); google.maps.event.addDomListener(window, 'load', initialize);
//MARCADOR 1566 
//positions 
var point1566 = new google.maps.LatLng(13.785862, -87.836922); var contentString1566 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UNA LUZ EN MONTECA.</h1>'+ '<div id="bodyContent">'+ '<p><b>UNA LUZ EN MONTECA.</b> , — 06 de Marzo de 1998. Dirección: Mon- teca.  Días y horas de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow1566 = new google.maps.InfoWindow({ content: contentString1566 }); 
//markers 
var marker1566 = new google.maps.Marker({ position: point1566, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1566.UNA LUZ EN MONTECA." }); 
//information for 
function goToLink1566() { infowindow1566.open(map,marker1566); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1566, 'click', goToLink1566); google.maps.event.addDomListener(window, 'load', initialize);





//MARCADOR 1567 
//positions 
var point1567 = new google.maps.LatLng(13.583007, -87.838571); var contentString1567 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">PRIMERO DE JULIO.</h1>'+ '<div id="bodyContent">'+ '<p><b>PRIMERO DE JULIO.</b> , — 01 de  Julio  de  1987.  Dirección:  Barrio El Calvario Plaza Nueva.  Días y horas de reuniones: De Lunes a Domin- go de 5:00 a 7:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow1567 = new google.maps.InfoWindow({ content: contentString1567 }); 
//markers 
var marker1567 = new google.maps.Marker({ position: point1567, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1567.PRIMERO DE JULIO." }); 
//information for 
function goToLink1567() { infowindow1567.open(map,marker1567); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1567, 'click', goToLink1567); google.maps.event.addDomListener(window, 'load', initialize);
//MARCADOR 1568 
//positions 
var point1568 = new google.maps.LatLng(13.580385, -87.838991); var contentString1568 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">SUEÑOS DE MI VIDA.</h1>'+ '<div id="bodyContent">'+ '<p><b>SUEÑOS DE MI VIDA.</b> , — 07 de  Febrero de  1990.  Dirección:  Caserío Santa Clarita. Días y horas de reuniones: De Lunes a Domingo de 5:00 a 7:00 p.m.</p>'+ '</div>'+ '</div>'; var infowindow1568 = new google.maps.InfoWindow({ content: contentString1568 }); 
//markers 
var marker1568 = new google.maps.Marker({ position: point1568, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1568.SUEÑOS DE MI VIDA." }); 
//information for 
function goToLink1568() { infowindow1568.open(map,marker1568); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1568, 'click', goToLink1568); google.maps.event.addDomListener(window, 'load', initialize);
//MARCADOR 1569 
//positions 
var point1569 = new google.maps.LatLng(13.584056, -87.841926); var contentString1569 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UN  MILAGRO DE DIOS.</h1>'+ '<div id="bodyContent">'+ '<p><b>UN  MILAGRO DE DIOS.</b> , — 15 de  Diciembre de  1992.  Dirección: Cantón Santa  Clara. Días y horas  de  reuniones: De Lunes a Domin- go de 5:00 a 7:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow1569 = new google.maps.InfoWindow({ content: contentString1569 }); 
//markers 
var marker1569 = new google.maps.Marker({ position: point1569, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1569.UN  MILAGRO DE DIOS." }); 
//information for 
function goToLink1569() { infowindow1569.open(map,marker1569); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1569, 'click', goToLink1569); google.maps.event.addDomListener(window, 'load', initialize);
//MARCADOR 1570 
//positions 
var point1570 = new google.maps.LatLng(13.588223, -87.842334); var contentString1570 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UN DESPERTAR EN SAN CARLOS.</h1>'+ '<div id="bodyContent">'+ '<p><b>UN DESPERTAR EN SAN CARLOS.</b> , — 09 de  Noviembre de  2008. Dirección:  Caserío San  Carlos,  Pasaquina. Días y horas  de  reunio- nes: De Lunes a Domingo de 6:00 a 8:00 p.m.</p>'+ '</div>'+ '</div>'; var infowindow1570 = new google.maps.InfoWindow({ content: contentString1570 }); 
//markers 
var marker1570 = new google.maps.Marker({ position: point1570, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1570.UN DESPERTAR EN SAN CARLOS." }); 
//information for 
function goToLink1570() { infowindow1570.open(map,marker1570); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1570, 'click', goToLink1570); google.maps.event.addDomListener(window, 'load', initialize);






//MARCADOR 1571 
//positions 
var point1571 = new google.maps.LatLng(13.432779, -87.958032); var contentString1571 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">1º  DE JULIO.</h1>'+ '<div id="bodyContent">'+ '<p><b>1º  DE JULIO.</b> , — 01 de  Julio  de  2001.  Dirección:  Barrio El Gaspar. Días y horas  de reuniones: De Lunes a Domingo de 7:00 a 9:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow1571 = new google.maps.InfoWindow({ content: contentString1571 }); 
//markers 
var marker1571 = new google.maps.Marker({ position: point1571, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1571.1º  DE JULIO." }); 
//information for 
function goToLink1571() { infowindow1571.open(map,marker1571); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1571, 'click', goToLink1571); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1572 
//positions 
var point1572 = new google.maps.LatLng(13.429341, -87.957577); var contentString1572 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">10  DE JULIO.</h1>'+ '<div id="bodyContent">'+ '<p><b>10  DE JULIO.</b> , — 10 de  Julio de  2000.  Dirección:  Agua  Fría, Barrio La Cruz. Días y horas  de  reuniones: De Lunes a Domingo de  5:30 a 7:30 p.m. </p>'+ '</div>'+ '</div>'; var infowindow1572 = new google.maps.InfoWindow({ content: contentString1572 }); 
//markers 
var marker1572 = new google.maps.Marker({ position: point1572, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1572.10  DE JULIO." }); 
//information for 
function goToLink1572() { infowindow1572.open(map,marker1572); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1572, 'click', goToLink1572); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1573 
//positions 
var point1573 = new google.maps.LatLng(13.411250, -87.964504); var contentString1573 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">18 DE SEPTIEMBRE.</h1>'+ '<div id="bodyContent">'+ '<p><b>18 DE SEPTIEMBRE.</b> , — 18 de Septiembre de 1984. Dirección:  Cantón  Trinchera.  Días y horas  de  reuniones: De Lunes a Domingo de 4:00 a 6:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow1573 = new google.maps.InfoWindow({ content: contentString1573 }); 
//markers 
var marker1573 = new google.maps.Marker({ position: point1573, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1573.18 DE SEPTIEMBRE." }); 
//information for 
function goToLink1573() { infowindow1573.open(map,marker1573); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1573, 'click', goToLink1573); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1574 
//positions 
var point1574 = new google.maps.LatLng(13.414991, -87.958925); var contentString1574 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">AMOR Y COMPRENSIÓN.</h1>'+ '<div id="bodyContent">'+ '<p><b>AMOR Y COMPRENSIÓN.</b> , — 22 de  Abril de  1972.  Cantón El Tizatillo San Alejo. Días y horas  de  reuniones: De Lunes a Domingo de 5:00 a 7:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow1574 = new google.maps.InfoWindow({ content: contentString1574 }); 
//markers 
var marker1574 = new google.maps.Marker({ position: point1574, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1574.AMOR Y COMPRENSIÓN." }); 
//information for 
function goToLink1574() { infowindow1574.open(map,marker1574); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1574, 'click', goToLink1574); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1575 
//positions 
var point1575 = new google.maps.LatLng(13.435293, -87.960419); var contentString1575 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">DIOS NOS SALVARÁ.</h1>'+ '<div id="bodyContent">'+ '<p><b>DIOS NOS SALVARÁ.</b> , — 02 de Septiembre de 1978.  Dirección:  Ba- rrio Gaspar. Días y horas de reuniones: De Lunes a Domingo de 7:00 a 9:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow1575 = new google.maps.InfoWindow({ content: contentString1575 }); 
//markers 
var marker1575 = new google.maps.Marker({ position: point1575, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1575.DIOS NOS SALVARÁ." }); 
//information for 
function goToLink1575() { infowindow1575.open(map,marker1575); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1575, 'click', goToLink1575); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1576 
//positions 
var point1576 = new google.maps.LatLng(13.427645, -87.956312); var contentString1576 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NADA  PODEMOS  SOLOS.</h1>'+ '<div id="bodyContent">'+ '<p><b>NADA  PODEMOS  SOLOS.</b> , — 14  de  Septiembre de  2007.  Direc- ción: Caserío Santa  Crucita.  Días y horas  de  reuniones: De Lunes a Domingo de  6:00  a 8:00  p.m.  </p>'+ '</div>'+ '</div>'; var infowindow1576 = new google.maps.InfoWindow({ content: contentString1576 }); 
//markers 
var marker1576 = new google.maps.Marker({ position: point1576, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1576.NADA  PODEMOS  SOLOS." }); 
//information for 
function goToLink1576() { infowindow1576.open(map,marker1576); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1576, 'click', goToLink1576); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1577 
//positions 
var point1577 = new google.maps.LatLng(13.404499, -87.939702); var contentString1577 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UN  MILAGRO EN EL CALVARIO.</h1>'+ '<div id="bodyContent">'+ '<p><b>UN  MILAGRO EN EL CALVARIO.</b> , — 28 de  Septiembre de  1979. Dirección:  Barrio El Calvario Cantón Agua Fría. Días y horas  de reuniones: De Lunes a Domingo de 5:30 a 7:30 p.m. </p>'+ '</div>'+ '</div>'; var infowindow1577 = new google.maps.InfoWindow({ content: contentString1577 }); 
//markers 
var marker1577 = new google.maps.Marker({ position: point1577, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1577.UN  MILAGRO EN EL CALVARIO." }); 
//information for 
function goToLink1577() { infowindow1577.open(map,marker1577); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1577, 'click', goToLink1577); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1578 
//positions 
var point1578 = new google.maps.LatLng(13.434826, -87.965811); var contentString1578 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UN OASIS EN EL DESIERTO.</h1>'+ '<div id="bodyContent">'+ '<p><b>UN OASIS EN EL DESIERTO.</b> , —  02 de Febrero de 1975.  Dirección: Cantón Las Huertas. Días y horas  de  reuniones: De Lunes a Domin- go de 5:00 a 7:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow1578 = new google.maps.InfoWindow({ content: contentString1578 }); 
//markers 
var marker1578 = new google.maps.Marker({ position: point1578, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1578.UN OASIS EN EL DESIERTO." }); 
//information for 
function goToLink1578() { infowindow1578.open(map,marker1578); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1578, 'click', goToLink1578); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1579 
//positions 
var point1579 = new google.maps.LatLng(13.430989, -87.956434); var contentString1579 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UNIDAD Y COMPRENSIÓN.</h1>'+ '<div id="bodyContent">'+ '<p><b>UNIDAD Y COMPRENSIÓN.</b> , — 14 de Abril de 1978. Dirección:  Barrio El Calvario. Días y horas  de reuniones: De Lunes a Domingo de 7:00 a 9:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow1579 = new google.maps.InfoWindow({ content: contentString1579 }); 
//markers 
var marker1579 = new google.maps.Marker({ position: point1579, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1579.UNIDAD Y COMPRENSIÓN." }); 
//information for 
function goToLink1579() { infowindow1579.open(map,marker1579); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1579, 'click', goToLink1579); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1580 
//positions 
var point1580 = new google.maps.LatLng(13.424820, -87.956768); var contentString1580 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UNIDOS VENCEREMOS.</h1>'+ '<div id="bodyContent">'+ '<p><b>UNIDOS VENCEREMOS.</b> , — 13 de Octubre de 1973. Dirección: Ca- serío  El Crusillal,  Cantón Copalio. Días  y horas  de  reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow1580 = new google.maps.InfoWindow({ content: contentString1580 }); 
//markers 
var marker1580 = new google.maps.Marker({ position: point1580, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1580.UNIDOS VENCEREMOS." }); 
//information for 
function goToLink1580() { infowindow1580.open(map,marker1580); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1580, 'click', goToLink1580); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1581 
//positions 
var point1581 = new google.maps.LatLng(13.428627, -87.958346); var contentString1581 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">VUELTA A LA VIDA.</h1>'+ '<div id="bodyContent">'+ '<p><b>VUELTA A LA VIDA.</b> , — 19 de  Abril de  1975.  Dirección:  Barrio La Cruz. Días y horas de reuniones: De Lunes a Domingo de 7:00 a 9:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow1581 = new google.maps.InfoWindow({ content: contentString1581 }); 
//markers 
var marker1581 = new google.maps.Marker({ position: point1581, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1581.VUELTA A LA VIDA." }); 
//information for 
function goToLink1581() { infowindow1581.open(map,marker1581); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1581, 'click', goToLink1581); google.maps.event.addDomListener(window, 'load', initialize);





//MARCADOR 1582 
//positions 
var point1582 = new google.maps.LatLng(13.630179, -87.889555); var contentString1582 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">20  DE ENERO.</h1>'+ '<div id="bodyContent">'+ '<p><b>20  DE ENERO.</b> , — 07 de  Febrero de  1988.  Dirección:  Cantón San Sebastián. Días y horas  de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow1582 = new google.maps.InfoWindow({ content: contentString1582 }); 
//markers 
var marker1582 = new google.maps.Marker({ position: point1582, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1582.20  DE ENERO." }); 
//information for 
function goToLink1582() { infowindow1582.open(map,marker1582); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1582, 'click', goToLink1582); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1583 
//positions 
var point1583 = new google.maps.LatLng(13.632479, -87.889373); var contentString1583 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">23 DE ENERO.</h1>'+ '<div id="bodyContent">'+ '<p><b>23 DE ENERO.</b> , — 23 de Enero  de 1987.  Dirección:  Colonia  Ventura Perla.  Días y horas  de  reuniones: De  Lunes  a Domingo de  6:00  a 8:00 p.m.</p>'+ '</div>'+ '</div>'; var infowindow1583 = new google.maps.InfoWindow({ content: contentString1583 }); 
//markers 
var marker1583 = new google.maps.Marker({ position: point1583, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1583.23 DE ENERO." }); 
//information for 
function goToLink1583() { infowindow1583.open(map,marker1583); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1583, 'click', goToLink1583); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1584 
//positions 
var point1584 = new google.maps.LatLng(13.627879, -87.890222); var contentString1584 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">30  DE AGOSTO.</h1>'+ '<div id="bodyContent">'+ '<p><b>30  DE AGOSTO.</b> , — 28 de  Octubre de  1970.  Dirección:  Calle Ruta militar, Boulevard Enmanuel Barrio El Calvario. Días y horas  de  reu- niones: De Lunes a Domingo de 6:30 a 8:30 p.m. </p>'+ '</div>'+ '</div>'; var infowindow1584 = new google.maps.InfoWindow({ content: contentString1584 }); 
//markers 
var marker1584 = new google.maps.Marker({ position: point1584, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1584.30  DE AGOSTO." }); 
//information for 
function goToLink1584() { infowindow1584.open(map,marker1584); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1584, 'click', goToLink1584); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1585 
//positions 
var point1585 = new google.maps.LatLng(13.625991, -87.892043); var contentString1585 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">AMOR Y PAZ.</h1>'+ '<div id="bodyContent">'+ '<p><b>AMOR Y PAZ.</b> , — 01 de Mazo de 1972. Dirección: Barrio Las Delicias ½ Cuadra al Norte  de  gasolinera puma. Días y horas  de  reuniones: De Lunes a Domingo de  6:30 a 8:30 p.m. </p>'+ '</div>'+ '</div>'; var infowindow1585 = new google.maps.InfoWindow({ content: contentString1585 }); 
//markers 
var marker1585 = new google.maps.Marker({ position: point1585, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1585.AMOR Y PAZ." }); 
//information for 
function goToLink1585() { infowindow1585.open(map,marker1585); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1585, 'click', goToLink1585); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1586 
//positions 
var point1586 = new google.maps.LatLng(13.621804, -87.882454); var contentString1586 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">FUENTE DE VIDA.</h1>'+ '<div id="bodyContent">'+ '<p><b>FUENTE DE VIDA.</b> , — 04 de Diciembre de 2010.  Dirección:  Cantón El Algodón. Días  y horas  de  reuniones: De  Lunes  a Domingo de 6:00 a 8:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow1586 = new google.maps.InfoWindow({ content: contentString1586 }); 
//markers 
var marker1586 = new google.maps.Marker({ position: point1586, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1586.FUENTE DE VIDA." }); 
//information for 
function goToLink1586() { infowindow1586.open(map,marker1586); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1586, 'click', goToLink1586); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1587 
//positions 
var point1587 = new google.maps.LatLng(13.630002, -87.893682); var contentString1587 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NUEVA ESPERANZA.</h1>'+ '<div id="bodyContent">'+ '<p><b>NUEVA ESPERANZA.</b> , — 05 de Noviembre de 2014.  Dirección:  Ba- rrio La Esperanza. Días y horas  de  reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow1587 = new google.maps.InfoWindow({ content: contentString1587 }); 
//markers 
var marker1587 = new google.maps.Marker({ position: point1587, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1587.NUEVA ESPERANZA." }); 
//information for 
function goToLink1587() { infowindow1587.open(map,marker1587); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1587, 'click', goToLink1587); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1588 
//positions 
var point1588 = new google.maps.LatLng(13.624340, -87.892165); var contentString1588 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NUEVA ESPERANZA EL SAUCE.</h1>'+ '<div id="bodyContent">'+ '<p><b>NUEVA ESPERANZA EL SAUCE.</b> , — 20 de  Agosto de  2009.  Direc- ción: Barrio El Centro El Sauce.  Días y horas  de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow1588 = new google.maps.InfoWindow({ content: contentString1588 }); 
//markers 
var marker1588 = new google.maps.Marker({ position: point1588, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1588.NUEVA ESPERANZA EL SAUCE." }); 
//information for 
function goToLink1588() { infowindow1588.open(map,marker1588); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1588, 'click', goToLink1588); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1589 
//positions 
var point1589 = new google.maps.LatLng(13.632693, -87.886821); var contentString1589 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NUEVO MUNDO.</h1>'+ '<div id="bodyContent">'+ '<p><b>NUEVO MUNDO.</b> , —  21 de Septiembre de 1974.  Dirección:  Final 4a Avenida  Sur, Barrio El Convento. Días y horas  de  reuniones: De Lu- nes  a Domingo de  6:00 a 8:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow1589 = new google.maps.InfoWindow({ content: contentString1589 }); 
//markers 
var marker1589 = new google.maps.Marker({ position: point1589, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1589.NUEVO MUNDO." }); 
//information for 
function goToLink1589() { infowindow1589.open(map,marker1589); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1589, 'click', goToLink1589); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1590 
//positions 
var point1590 = new google.maps.LatLng(13.624732, -87.899208); var contentString1590 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UN MILAGRO EN LAS DELÍCIAS.</h1>'+ '<div id="bodyContent">'+ '<p><b>UN MILAGRO EN LAS DELÍCIAS.</b> , — 17 de  Junio  de  1998.  Direc- ción: Barrio Las Delicias. Días y horas  de reuniones: De Lunes a Do- mingo  de 6:00 a 8:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow1590 = new google.maps.InfoWindow({ content: contentString1590 }); 
//markers 
var marker1590 = new google.maps.Marker({ position: point1590, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1590.UN MILAGRO EN LAS DELÍCIAS." }); 
//information for 
function goToLink1590() { infowindow1590.open(map,marker1590); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1590, 'click', goToLink1590); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1591 
//positions 
var point1591 = new google.maps.LatLng(13.621000, -87.900369); var contentString1591 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UNA  ESPERANZA EN LA UMAÑA.</h1>'+ '<div id="bodyContent">'+ '<p><b>UNA  ESPERANZA EN LA UMAÑA.</b> , —  25 de  Mayo  de  2014.  Di- rección:  Calle Principal  Colonia  Umaña.  Días y horas  de  reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow1591 = new google.maps.InfoWindow({ content: contentString1591 }); 
//markers 
var marker1591 = new google.maps.Marker({ position: point1591, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1591.UNA  ESPERANZA EN LA UMAÑA." }); 
//information for 
function goToLink1591() { infowindow1591.open(map,marker1591); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1591, 'click', goToLink1591); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1592 
//positions 
var point1592 = new google.maps.LatLng(13.615326, -87.900465); var contentString1592 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UNA  LUZ EN ORIENTE.</h1>'+ '<div id="bodyContent">'+ '<p><b>UNA  LUZ EN ORIENTE.</b> , — 30 de  Mayo de  2002.  Dirección:  Con- cepción de  Oriente. Días y horas  de  reuniones: De Lunes a Domin- go de 7:00 a 9:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow1592 = new google.maps.InfoWindow({ content: contentString1592 }); 
//markers 
var marker1592 = new google.maps.Marker({ position: point1592, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1592.UNA  LUZ EN ORIENTE." }); 
//information for 
function goToLink1592() { infowindow1592.open(map,marker1592); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1592, 'click', goToLink1592); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1593 
//positions 
var point1593 = new google.maps.LatLng(13.614325, -87.908790); var contentString1593 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UNA LUZ EN EL RODEO.</h1>'+ '<div id="bodyContent">'+ '<p><b>UNA LUZ EN EL RODEO.</b> , — 02 de  Diciembre de  2008.  Dirección: Cantón Pasaquinita, Caserío El Rodeo. Días y horas  de  reuniones: De  Lunes  a Domingo de  6:00  a 8:00  p.m. </p>'+ '</div>'+ '</div>'; var infowindow1593 = new google.maps.InfoWindow({ content: contentString1593 }); 
//markers 
var marker1593 = new google.maps.Marker({ position: point1593, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1593.UNA LUZ EN EL RODEO." }); 
//information for 
function goToLink1593() { infowindow1593.open(map,marker1593); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1593, 'click', goToLink1593); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1594 
//positions 
var point1594 = new google.maps.LatLng(13.607322, -87.913774); var contentString1594 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UNA LUZ EN LA SABÁNA.</h1>'+ '<div id="bodyContent">'+ '<p><b>UNA LUZ EN LA SABÁNA.</b> , — 02 de Diciembre de 2001. Dirección: Calle Salida a Pasaquina. Días y horas  de reuniones: De Lunes a Do- mingo  de 6:00 a 8:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow1594 = new google.maps.InfoWindow({ content: contentString1594 }); 
//markers 
var marker1594 = new google.maps.Marker({ position: point1594, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1594.UNA LUZ EN LA SABÁNA." }); 
//information for 
function goToLink1594() { infowindow1594.open(map,marker1594); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1594, 'click', goToLink1594); google.maps.event.addDomListener(window, 'load', initialize);




//MARCADOR 1595 
//positions 
var point1595 = new google.maps.LatLng(13.447760, -88.022558); var contentString1595 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">VIDA NUEVA YAYANTÍQUE.</h1>'+ '<div id="bodyContent">'+ '<p><b>VIDA NUEVA YAYANTÍQUE.</b> , — 28 de  Agosto de  2014.  Dirección: Barrio San Jacinto, 2 Cuadras Abajo  de  La Iglesia  Católica. Días y horas de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow1595 = new google.maps.InfoWindow({ content: contentString1595 }); 
//markers 
var marker1595 = new google.maps.Marker({ position: point1595, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1595.VIDA NUEVA YAYANTÍQUE." }); 
//information for 
function goToLink1595() { infowindow1595.open(map,marker1595); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1595, 'click', goToLink1595); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1596 
//positions 
var point1596 = new google.maps.LatLng(13.448782, -88.020552); var contentString1596 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">FE Y VOLUNTAD.</h1>'+ '<div id="bodyContent">'+ '<p><b>FE Y VOLUNTAD.</b> , — 06 de  Septiembre de  2014.  Dirección:  Barrio, El Calvario Yayantíque, una Cuadra Arriba del Juzgado de Paz. Días y horas  de  reuniones: De  Lunes  a  Domingo de  6:00  a  8:00  p.m.</p>'+ '</div>'+ '</div>'; var infowindow1596 = new google.maps.InfoWindow({ content: contentString1596 }); 
//markers 
var marker1596 = new google.maps.Marker({ position: point1596, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1596.FE Y VOLUNTAD." }); 
//information for 
function goToLink1596() { infowindow1596.open(map,marker1596); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1596, 'click', goToLink1596); google.maps.event.addDomListener(window, 'load', initialize);






//MARCADOR 1597 
//positions 
var point1597 = new google.maps.LatLng(13.560323, -88.001708); var contentString1597 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">CAMINO POR LA PAZ.</h1>'+ '<div id="bodyContent">'+ '<p><b>CAMINO POR LA PAZ.</b> , — 09 de Marzo de 1992. Dirección:  Caserío Palo Galán. Días y horas de reuniones: De Lunes a Domingo de 4:00 a 6:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow1597 = new google.maps.InfoWindow({ content: contentString1597 }); 
//markers 
var marker1597 = new google.maps.Marker({ position: point1597, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1597.CAMINO POR LA PAZ." }); 
//information for 
function goToLink1597() { infowindow1597.open(map,marker1597); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1597, 'click', goToLink1597); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1598 
//positions 
var point1598 = new google.maps.LatLng(13.548109, -88.001877); var contentString1598 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">DIOS ES LIBERTAD.</h1>'+ '<div id="bodyContent">'+ '<p><b>DIOS ES LIBERTAD.</b> , — 18 de  Junio  de  1988.  Dirección:  Yucuaquín. Días y horas  de reuniones: De Lunes a Domingo de 4:00 a 6:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow1598 = new google.maps.InfoWindow({ content: contentString1598 }); 
//markers 
var marker1598 = new google.maps.Marker({ position: point1598, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1598.DIOS ES LIBERTAD." }); 
//information for 
function goToLink1598() { infowindow1598.open(map,marker1598); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1598, 'click', goToLink1598); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1599 
//positions 
var point1599 = new google.maps.LatLng(13.547734, -88.000417); var contentString1599 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">MILAGRO DE SAN FRANCISCO YUCUAIQUÍN.</h1>'+ '<div id="bodyContent">'+ '<p><b>MILAGRO DE SAN FRANCISCO YUCUAIQUÍN.</b> , — 28 de  Febrero de  1965.  Dirección:  San Francisco  Yucuaiquín. Días y horas  de  reu- niones: De Lunes a Domingo de 5:00 a 7:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow1599 = new google.maps.InfoWindow({ content: contentString1599 }); 
//markers 
var marker1599 = new google.maps.Marker({ position: point1599, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1599.MILAGRO DE SAN FRANCISCO YUCUAIQUÍN." }); 
//information for 
function goToLink1599() { infowindow1599.open(map,marker1599); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1599, 'click', goToLink1599); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1600 
//positions 
var point1600 = new google.maps.LatLng(13.542393, -88.015095); var contentString1600 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NADA PODEMOS SOLOS.</h1>'+ '<div id="bodyContent">'+ '<p><b>NADA PODEMOS SOLOS.</b> , — 01 de Mayo de 2012. Dirección: Can- tón  Las Cabañas. Días y horas  de  reuniones: De Lunes a Domingo de 5:00 a 7:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow1600 = new google.maps.InfoWindow({ content: contentString1600 }); 
//markers 
var marker1600 = new google.maps.Marker({ position: point1600, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1600.NADA PODEMOS SOLOS." }); 
//information for 
function goToLink1600() { infowindow1600.open(map,marker1600); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1600, 'click', goToLink1600); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1601 
//positions 
var point1601 = new google.maps.LatLng(13.550821, -87.990976); var contentString1601 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NUEVO DESPERTAR.</h1>'+ '<div id="bodyContent">'+ '<p><b>NUEVO DESPERTAR.</b> , — 07 de  Diciembre de  1989.  Dirección:  Ca- serío  El Zapotal Las Cruces  Yucuaiquín. Días y horas  de  reuniones: De  Lunes  a Domingo de  5:00  a 7:00  p.m.  </p>'+ '</div>'+ '</div>'; var infowindow1601 = new google.maps.InfoWindow({ content: contentString1601 }); 
//markers 
var marker1601 = new google.maps.Marker({ position: point1601, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1601.NUEVO DESPERTAR." }); 
//information for 
function goToLink1601() { infowindow1601.open(map,marker1601); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1601, 'click', goToLink1601); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1602 
//positions 
var point1602 = new google.maps.LatLng(13.551287, -88.002747); var contentString1602 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NUEVO RENACER.</h1>'+ '<div id="bodyContent">'+ '<p><b>NUEVO RENACER.</b> , — 16 de  Diciembre de  2005.  Dirección:  Barrio El Centro Yucuaiquín. Días y horas  de reuniones: De Lunes a Domin- go de 5:30 a 7:30 p.m. </p>'+ '</div>'+ '</div>'; var infowindow1602 = new google.maps.InfoWindow({ content: contentString1602 }); 
//markers 
var marker1602 = new google.maps.Marker({ position: point1602, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1602.NUEVO RENACER." }); 
//information for 
function goToLink1602() { infowindow1602.open(map,marker1602); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1602, 'click', goToLink1602); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1603 
//positions 
var point1603 = new google.maps.LatLng(13.548278, -88.004386); var contentString1603 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">QUINCE DE AGOSTO.</h1>'+ '<div id="bodyContent">'+ '<p><b>QUINCE DE AGOSTO.</b> , — 15 de Agosto de 1992. Dirección: Cantón Las Cruces. Días y horas  de reuniones: De Lunes a Domingo de 5:00 a 7:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow1603 = new google.maps.InfoWindow({ content: contentString1603 }); 
//markers 
var marker1603 = new google.maps.Marker({ position: point1603, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1603.QUINCE DE AGOSTO." }); 
//information for 
function goToLink1603() { infowindow1603.open(map,marker1603); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1603, 'click', goToLink1603); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1604 
//positions 
var point1604 = new google.maps.LatLng(13.550992, -88.004993); var contentString1604 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">VALE LA PENA VIVIR.</h1>'+ '<div id="bodyContent">'+ '<p><b>VALE LA PENA VIVIR.</b> , — 13 de Agosto de 1971. Dirección:  Cantón Las Hojas, Calle Principal que  conduce de San Miguel a Yucuaiquín. Días y horas de reuniones: Lunes, Miércoles  y Sábado de 4:30 a 6:30 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow1604 = new google.maps.InfoWindow({ content: contentString1604 }); 
//markers 
var marker1604 = new google.maps.Marker({ position: point1604, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1604.VALE LA PENA VIVIR." }); 
//information for 
function goToLink1604() { infowindow1604.open(map,marker1604); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1604, 'click', goToLink1604); google.maps.event.addDomListener(window, 'load', initialize);



}

