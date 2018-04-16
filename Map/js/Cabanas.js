function initialize() {


    //Map parametrs
    var mapOptions = {
        zoom: 10,
        center: new google.maps.LatLng(13.875018, -88.628553),
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








//MARCADOR 957 
//positions 
var point957 = new google.maps.LatLng(13.888781, -88.961439); var contentString957 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">A.A.   FLORECE.</h1>'+ '<div id="bodyContent">'+ '<p><b>A.A.   FLORECE.</b> , — Julio   de   2014.   Dirección:   Calle   al  estadio Cinquera. Días y horas  de  reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow957 = new google.maps.InfoWindow({ content: contentString957 }); 
//markers 
var marker957 = new google.maps.Marker({ position: point957, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "957.A.A.   FLORECE." }); 
//information for 
function goToLink957() { infowindow957.open(map,marker957); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker957, 'click', goToLink957); google.maps.event.addDomListener(window, 'load', initialize);




//MARCADOR 958 
//positions 
var point958 = new google.maps.LatLng(13.780796, -88.565631); var contentString958 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">17 DE JULIO.</h1>'+ '<div id="bodyContent">'+ '<p><b>17 DE JULIO.</b> , — 17 de Julio de 1976. Dirección: Calle Miguel Torres, Barrio San Antonio  Ciudad Dolores. Días y horas  de  reuniones: De Lunes  a  Domingo de  6:00  a  8:00  p.m.  </p>'+ '</div>'+ '</div>'; var infowindow958 = new google.maps.InfoWindow({ content: contentString958 }); 
//markers 
var marker958 = new google.maps.Marker({ position: point958, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "958.17 DE JULIO." }); 
//information for 
function goToLink958() { infowindow958.open(map,marker958); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker958, 'click', goToLink958); google.maps.event.addDomListener(window, 'load', initialize);




//MARCADOR 959 
//positions 
var point959 = new google.maps.LatLng(13.951503, -88.638580); var contentString959 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">24  HORAS EN SOBRIEDAD.</h1>'+ '<div id="bodyContent">'+ '<p><b>24  HORAS EN SOBRIEDAD.</b> , — 24 de  Marzo  de  2010.  Dirección: Barrio El Centro salida  hacia  Santa  Marta  Victoria. Días y horas  de reuniones: De  Lunes  a  Domingo de  6:00  a  8:00  p.m.  </p>'+ '</div>'+ '</div>'; var infowindow959 = new google.maps.InfoWindow({ content: contentString959 }); 
//markers 
var marker959 = new google.maps.Marker({ position: point959, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "959.24  HORAS EN SOBRIEDAD." }); 
//information for 
function goToLink959() { infowindow959.open(map,marker959); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker959, 'click', goToLink959); google.maps.event.addDomListener(window, 'load', initialize);
//MARCADOR 960 
//positions 
var point960 = new google.maps.LatLng(13.948070, -88.636711); var contentString960 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">LAGRIMAS DE  UNA   MADRE.</h1>'+ '<div id="bodyContent">'+ '<p><b>LAGRIMAS DE  UNA   MADRE.</b> , —  28  de   Noviembre  de   1998. Dirección:  Cantón El Caracol  Victoria.  Días  y horas  de  reuniones: De  Lunes  a Domingo de  6:00  a 8:00  p.m.  Miembros asistentes: 7</p>'+ '</div>'+ '</div>'; var infowindow960 = new google.maps.InfoWindow({ content: contentString960 }); 
//markers 
var marker960 = new google.maps.Marker({ position: point960, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "960.LAGRIMAS DE  UNA   MADRE." }); 
//information for 
function goToLink960() { infowindow960.open(map,marker960); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker960, 'click', goToLink960); google.maps.event.addDomListener(window, 'load', initialize);
//MARCADOR 961 
//positions 
var point961 = new google.maps.LatLng(13.945041, -88.633156); var contentString961 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">LAS VICTORIAS.</h1>'+ '<div id="bodyContent">'+ '<p><b>LAS VICTORIAS.</b> , —  24  de  Agosto de  2014.  Dirección:  Entrada a Ciudad Victoria. Días y horas  de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow961 = new google.maps.InfoWindow({ content: contentString961 });
 //markers
  var marker961 = new google.maps.Marker({ position: point961, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "961.LAS VICTORIAS." }); 
  //information for 
  function goToLink961() { infowindow961.open(map,marker961); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker961, 'click', goToLink961); google.maps.event.addDomListener(window, 'load', initialize);
//MARCADOR 962 
//positions 
var point962 = new google.maps.LatLng(13.932194, -88.632917); var contentString962 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NUEVO  DESPERTA SANTA  MARTA.</h1>'+ '<div id="bodyContent">'+ '<p><b>NUEVO  DESPERTA SANTA  MARTA.</b> , — 20  de  Febrero de  2007. Dirección:  Colonia 10 de Octubre Cantón Santa Marta Victoria. Días y horas  de  reuniones: De  Lunes  a  Domingo de  5:00  a  7:00  p.m. </p>'+ '</div>'+ '</div>'; var infowindow962 = new google.maps.InfoWindow({ content: contentString962 }); 
//markers 
var marker962 = new google.maps.Marker({ position: point962, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "962.NUEVO  DESPERTA SANTA  MARTA." }); 
//information for 
function goToLink962() { infowindow962.open(map,marker962); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker962, 'click', goToLink962); google.maps.event.addDomListener(window, 'load', initialize);
//MARCADOR 963 
//positions 
var point963 = new google.maps.LatLng(13.952984, -88.643794); var contentString963 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">RENACER BUSCANDO A DIOS.</h1>'+ '<div id="bodyContent">'+ '<p><b>RENACER BUSCANDO A DIOS.</b> , — 01 de Junio de 2012. Dirección: Cantón Rojitas Caserío San Juan  de  Dios, Victoria. Días y horas  de reuniones: De  Lunes  a  Domingo de  6:00  a  8:00  p.m. </p>'+ '</div>'+ '</div>'; var infowindow963 = new google.maps.InfoWindow({ content: contentString963 }); 
//markers 
var marker963 = new google.maps.Marker({ position: point963, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "963.RENACER BUSCANDO A DIOS." }); 
//information for 
function goToLink963() { infowindow963.open(map,marker963); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker963, 'click', goToLink963); google.maps.event.addDomListener(window, 'load', initialize);
//MARCADOR 964 
//positions 
var point964 = new google.maps.LatLng(13.956813, -88.633234); var contentString964 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UNA LUZ EN LAS DANTAS.</h1>'+ '<div id="bodyContent">'+ '<p><b>UNA LUZ EN LAS DANTAS.</b> , — 19 de Noviembre de 2013. Dirección: San Pedro Caserío Las Dantas Municipio  de  Victoria. Días y horas de  reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow964 = new google.maps.InfoWindow({ content: contentString964 }); 
//markers 
var marker964 = new google.maps.Marker({ position: point964, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "964.UNA LUZ EN LAS DANTAS." }); 
//information for 
function goToLink964() { infowindow964.open(map,marker964); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker964, 'click', goToLink964); google.maps.event.addDomListener(window, 'load', initialize);





//MARCADOR 965 
//positions 
var point965 = new google.maps.LatLng(13.873301, -88.645393); var contentString965 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">DESPERTAR 2000.</h1>'+ '<div id="bodyContent">'+ '<p><b>DESPERTAR 2000.</b> , — 24  de  Agosto de  2000.  Dirección:  Km. 68 Desvío  San Fidel a 2 Cuadras de  La Carretera a San Salvador. Días y horas  de  reuniones: De  Lunes  a  Domingo de  6:00  a  8:00  p.m.</p>'+ '</div>'+ '</div>'; var infowindow965 = new google.maps.InfoWindow({ content: contentString965 }); 
//markers 
var marker965 = new google.maps.Marker({ position: point965, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "965.DESPERTAR 2000." }); 
//information for 
function goToLink965() { infowindow965.open(map,marker965); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker965, 'click', goToLink965); google.maps.event.addDomListener(window, 'load', initialize);





//MARCADOR 966 
//positions 
var point966 = new google.maps.LatLng(13.845819, -88.841661); var contentString966 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">02  DE  AGOSTO.</h1>'+ '<div id="bodyContent">'+ '<p><b>02  DE  AGOSTO.</b> , —  02  de  Agosto de  1975.   Dirección:   Colonia Jardínes de  Los Ángeles polígono H Casa  Nº  26  Ilobasco.  Días y horas  de  reuniones: De  Lunes  a  Domingo de  6:00  a  8:00  p.m. </p>'+ '</div>'+ '</div>'; var infowindow966 = new google.maps.InfoWindow({ content: contentString966 }); 
//markers 
var marker966 = new google.maps.Marker({ position: point966, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "966.02  DE  AGOSTO." }); 
//information 
 function goToLink966() { infowindow966.open(map,marker966); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker966, 'click', goToLink966); google.maps.event.addDomListener(window, 'load', initialize);
//MARCADOR 967 
//positions 
var point967 = new google.maps.LatLng(13.804466, -88.865392); var contentString967 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">03  DE  ABRIL EN  ACCIÓN.</h1>'+ '<div id="bodyContent">'+ '<p><b>03  DE  ABRIL EN  ACCIÓN.</b> , —  03  de  Abril  de  1982.   Dirección: Cantón Agua  Zarca  Caserío San  Antonio,   Ilobasco. Días  y horas de  reuniones: De Lunes a Domingo de  4:30 a 6:30 p.m.</p>'+ '</div>'+ '</div>'; var infowindow967 = new google.maps.InfoWindow({ content: contentString967 }); 
//markers 
var marker967 = new google.maps.Marker({ position: point967, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "967.03  DE  ABRIL EN  ACCIÓN." }); 
//information 
 function goToLink967() { infowindow967.open(map,marker967); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker967, 'click', goToLink967); google.maps.event.addDomListener(window, 'load', initialize);
//MARCADOR 968 
//positions 
var point968 = new google.maps.LatLng(13.852116, -88.879531); var contentString968 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">06 DE OCTUBRE DESPERTAR UN NUEVO DÍA.</h1>'+ '<div id="bodyContent">'+ '<p><b>06 DE OCTUBRE DESPERTAR UN NUEVO DÍA.</b> , — 06 de Octubre de  2004.  Dirección:  Cantón Oratorio Caserío El Tránsito  Ilobasco. Días y horas  de reuniones: De Lunes a Domingo de 5:00 a 7:00 p.m.</p>'+ '</div>'+ '</div>'; var infowindow968 = new google.maps.InfoWindow({ content: contentString968 }); 
//markers 
var marker968 = new google.maps.Marker({ position: point968, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "968.06 DE OCTUBRE DESPERTAR UN NUEVO DÍA." }); 
//information 
 function goToLink968() { infowindow968.open(map,marker968); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker968, 'click', goToLink968); google.maps.event.addDomListener(window, 'load', initialize);
//MARCADOR 969 
//positions 
var point969 = new google.maps.LatLng(13.847281, -88.868994); var contentString969 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">08  DE AGOSTO.</h1>'+ '<div id="bodyContent">'+ '<p><b>08  DE AGOSTO.</b> , — 08 de  Agosto de  1986.  Dirección:  Cantón Los Hoyos Caserío Nuevo  Porvenir,  Ilobasco. Días y horas  de reuniones: De  Lunes  a Sábado de  6:00  a 8:00  p.m.  </p>'+ '</div>'+ '</div>'; var infowindow969 = new google.maps.InfoWindow({ content: contentString969 }); 
//markers 
var marker969 = new google.maps.Marker({ position: point969, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "969.08  DE AGOSTO." });
 //information
 function goToLink969() { infowindow969.open(map,marker969); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker969, 'click', goToLink969); google.maps.event.addDomListener(window, 'load', initialize);
//MARCADOR 970 
//positions 
var point970 = new google.maps.LatLng(13.838171, -88.866612); var contentString970 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">12  DE OCTUBRE.</h1>'+ '<div id="bodyContent">'+ '<p><b>12  DE OCTUBRE.</b> , — 12  de  Octubre de  2003.  Dirección:  Cantón Llanitos  Centro Ilobasco. Días  y horas  de  reuniones: De  Lunes  a Domingo de 6:30 a 8:30 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow970 = new google.maps.InfoWindow({ content: contentString970 }); 
//markers 
var marker970 = new google.maps.Marker({ position: point970, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "970.12  DE OCTUBRE." }); 
//information 
function goToLink970() { infowindow970.open(map,marker970); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker970, 'click', goToLink970); google.maps.event.addDomListener(window, 'load', initialize);
//MARCADOR 971 
//positions 
var point971 = new google.maps.LatLng(13.814053, -88.858646); var contentString971 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">16   DE  MAYO.</h1>'+ '<div id="bodyContent">'+ '<p><b>16   DE  MAYO.</b> , —  16  de   Mayo  de1995.  Dirección:   Caserío  Los Duranes Cantón Maquilishuat, Ilobasco. Días y horas  de  reuniones: De  Lunes  a Domingo de  6:00  a 8:00  p.m.  </p>'+ '</div>'+ '</div>'; var infowindow971 = new google.maps.InfoWindow({ content: contentString971 }); 
//markers 
var marker971 = new google.maps.Marker({ position: point971, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "971.16   DE  MAYO." }); 
//nformation 
 function goToLink971() { infowindow971.open(map,marker971); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker971, 'click', goToLink971); google.maps.event.addDomListener(window, 'load', initialize);
//MARCADOR 972 
//positions 
var point972 = new google.maps.LatLng(13.843380, -88.853934); var contentString972 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">19  DE AGOSTO.</h1>'+ '<div id="bodyContent">'+ '<p><b>19  DE AGOSTO.</b> , — 19 de  Agosto de  1962.  Dirección:  8ª Avenida Norte  Barrio San Miguel Nº 27, Ilobasco. Días y horas  de reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow972 = new google.maps.InfoWindow({ content: contentString972 }); 
//markers 
var marker972 = new google.maps.Marker({ position: point972, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "972.19  DE AGOSTO." }); 
//information 
 function goToLink972() { infowindow972.open(map,marker972); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker972, 'click', goToLink972); google.maps.event.addDomListener(window, 'load', initialize);
//MARCADOR 973 
//positions 
var point973 = new google.maps.LatLng(13.815226, -88.871432); var contentString973 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">26 DE JULIO.</h1>'+ '<div id="bodyContent">'+ '<p><b>26 DE JULIO.</b> , — 26 de Julio de 1983.  Dirección:  Cantón Los Hoyos, Caserío Menjivar,  Ilobasco. Días y horas  de  reuniones: De Lunes  a Domingo de 5:30 a 7:30 p.m. </p>'+ '</div>'+ '</div>'; var infowindow973 = new google.maps.InfoWindow({ content: contentString973 }); 
//markers 
var marker973 = new google.maps.Marker({ position: point973, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "973.26 DE JULIO." }); 
//information for 
function goToLink973() { infowindow973.open(map,marker973); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker973, 'click', goToLink973); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 974 
//positions 
var point974 = new google.maps.LatLng(13.844845, -88.854425); var contentString974 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">AMPARADOS  A  DIOS.</h1>'+ '<div id="bodyContent">'+ '<p><b>AMPARADOS  A  DIOS.</b> , —  04  de  Diciembre de  1973.  Dirección: 8ª  Avenida   Norte, Barrio  San  Miguel  Ilobasco. Días  y  horas   de reuniones: De  Lunes  a  Domingo de  6:00  a  8:00  p.m. </p>'+ '</div>'+ '</div>'; var infowindow974 = new google.maps.InfoWindow({ content: contentString974 }); 
//markers 
var marker974 = new google.maps.Marker({ position: point974, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "974.AMPARADOS  A  DIOS." }); 
//information for 
function goToLink974() { infowindow974.open(map,marker974); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker974, 'click', goToLink974); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 975 
//positions 
var point975 = new google.maps.LatLng(13.859811, -88.841173); var contentString975 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">AMPARADOS  A  LA FE.</h1>'+ '<div id="bodyContent">'+ '<p><b>AMPARADOS  A  LA FE.</b> , —  13  de   Febrero de   1982.   Dirección: Cantón Llanitos Centro, Calle Principal  a La Ermita Nueva  Casa  de Teodoro Ilobasco. Días y horas  de  reuniones: De Lunes a Domingo de 5:00 a 7:00 p.m.</p>'+ '</div>'+ '</div>'; var infowindow975 = new google.maps.InfoWindow({ content: contentString975 }); 
//markers 
var marker975 = new google.maps.Marker({ position: point975, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "975.AMPARADOS  A  LA FE." }); 
//information for 
function goToLink975() { infowindow975.open(map,marker975); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker975, 'click', goToLink975); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 976 
//positions 
var point976 = new google.maps.LatLng(13.846199, -88.843297); var contentString976 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">DE LAS TINIEBLAS A LA LUZ.</h1>'+ '<div id="bodyContent">'+ '<p><b>DE LAS TINIEBLAS A LA LUZ.</b> , — 04 de  Julio de  2010.  Dirección: Caserío Los Reyes, Cantón Huertas Ilobasco. Días y horas  de reuniones: De  Lunes  a  Domingo de  5:00  a  7:00  p.m. </p>'+ '</div>'+ '</div>'; var infowindow976 = new google.maps.InfoWindow({ content: contentString976 }); 
//markers 
var marker976 = new google.maps.Marker({ position: point976, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "976.DE LAS TINIEBLAS A LA LUZ." }); 
//information for 
function goToLink976() { infowindow976.open(map,marker976); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker976, 'click', goToLink976); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 977 
//positions 
var point977 = new google.maps.LatLng(13.800101, -88.864072); var contentString977 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">DESPERTAR 2006.</h1>'+ '<div id="bodyContent">'+ '<p><b>DESPERTAR 2006.</b> , — 09  de   Enero   de   2006.   Dirección:   Cantón Agua  Zarca  Caserío San  Antonio  Km. 50,  Ilobasco. Días  y horas de  reuniones: De Lunes a Domingo de  5:00 a 7:00 p.m.</p>'+ '</div>'+ '</div>'; var infowindow977 = new google.maps.InfoWindow({ content: contentString977 }); 
//markers 
var marker977 = new google.maps.Marker({ position: point977, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "977.DESPERTAR 2006." }); 
//information for 
function goToLink977() { infowindow977.open(map,marker977); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker977, 'click', goToLink977); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 978 
//positions 
var point978 = new google.maps.LatLng(13.785248, -88.884464); var contentString978 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">DESPERTAR 25  DE ENERO.</h1>'+ '<div id="bodyContent">'+ '<p><b>DESPERTAR 25  DE ENERO.</b> , — 25  de  Enero  de  2010.  Dirección: Cantón Cerro Colorado El Limite, Ilobasco. Días y horas de reuniones: De Lunes a Domingo de  5:00 a 7:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow978 = new google.maps.InfoWindow({ content: contentString978 }); 
//markers 
var marker978 = new google.maps.Marker({ position: point978, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "978.DESPERTAR 25  DE ENERO." }); 
//information for 
function goToLink978() { infowindow978.open(map,marker978); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker978, 'click', goToLink978); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 979 
//positions 
var point979 = new google.maps.LatLng(13.829875, -88.859344); var contentString979 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">DESPERTAR 85.</h1>'+ '<div id="bodyContent">'+ '<p><b>DESPERTAR 85.</b> , —  02 de  Marzo de  1985.  Dirección:  Cantón Agua Zarca  Caserío Los Arteaga, Ilobasco. Días  y horas  de  reuniones: De Lunes a Domingo de  4:00 a 6:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow979 = new google.maps.InfoWindow({ content: contentString979 }); 
//markers 
var marker979 = new google.maps.Marker({ position: point979, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "979.DESPERTAR 85." }); 
//information for 
function goToLink979() { infowindow979.open(map,marker979); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker979, 'click', goToLink979); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 980 
//positions 
var point980 = new google.maps.LatLng(13.777021, -88.879451); var contentString980 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">DESPERTAR 93.</h1>'+ '<div id="bodyContent">'+ '<p><b>DESPERTAR 93.</b> , — 13 de Agosto de 1993.  Dirección:  Cantón Cerro Colorado Carretera a Ilobasco Km. 48 ½ Ilobasco. Días y horas  de reuniones: De  Lunes  a  Domingo de  5:00  a  7:00  p.m.  </p>'+ '</div>'+ '</div>'; var infowindow980 = new google.maps.InfoWindow({ content: contentString980 }); 
//markers 
var marker980 = new google.maps.Marker({ position: point980, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "980.DESPERTAR 93." }); 
//information for 
function goToLink980() { infowindow980.open(map,marker980); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker980, 'click', goToLink980); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 981 
//positions 
var point981 = new google.maps.LatLng(13.805142, -88.848761); var contentString981 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">DESPERTAR DEL HOMBRE.</h1>'+ '<div id="bodyContent">'+ '<p><b>DESPERTAR DEL HOMBRE.</b> , — 09 de  Octubre de  1990.  Dirección: Caserío Santa Lucía Cantón Maquilishuat, Carretera a Sensuntepeque Km. 64. Días y horas  de  reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow981 = new google.maps.InfoWindow({ content: contentString981 }); 
//markers 
var marker981 = new google.maps.Marker({ position: point981, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "981.DESPERTAR DEL HOMBRE." }); 
//information for 
function goToLink981() { infowindow981.open(map,marker981); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker981, 'click', goToLink981); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 982 
//positions 
var point982 = new google.maps.LatLng(13.838537, -88.849716); var contentString982 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">DIOS CAMBIO MI VIDA.</h1>'+ '<div id="bodyContent">'+ '<p><b>DIOS CAMBIO MI VIDA.</b> , — 17 de Enero  de 2014.  Dirección:  Barrio La Cruz 2 Cuadra Abajo de  La Escuela  El Barrial, frente  al talpetate. Días y horas  de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow982 = new google.maps.InfoWindow({ content: contentString982 }); 
//markers 
var marker982 = new google.maps.Marker({ position: point982, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "982.DIOS CAMBIO MI VIDA." }); 
//information for 
function goToLink982() { infowindow982.open(map,marker982); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker982, 'click', goToLink982); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 983 
//positions 
var point983 = new google.maps.LatLng(13.827286, -88.824825); var contentString983 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">DOS  DE  SEPTIEMBRE.</h1>'+ '<div id="bodyContent">'+ '<p><b>DOS  DE  SEPTIEMBRE.</b> , —  02  de  Septiembre de1991. Dirección: Cantón San Francisco  Iraheta Ilobasco. Días y horas  de  reuniones: De Lunes a Domingo de  4:00 a 6:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow983 = new google.maps.InfoWindow({ content: contentString983 }); 
//markers 
var marker983 = new google.maps.Marker({ position: point983, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "983.DOS  DE  SEPTIEMBRE." }); 
//information for 
function goToLink983() { infowindow983.open(map,marker983); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker983, 'click', goToLink983); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 984 
//positions 
var point984 = new google.maps.LatLng(13.844037, -88.843708); var contentString984 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">EL SIETE.</h1>'+ '<div id="bodyContent">'+ '<p><b>EL SIETE.</b> , —  26 de Abril de 1988.  Dirección:  Pasaje  Hernández Nº 2 Colonia El Siete final Pasaje Nº 3 Ilobasco. Días y horas de reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow984 = new google.maps.InfoWindow({ content: contentString984 }); 
//markers 
var marker984 = new google.maps.Marker({ position: point984, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "984.EL SIETE." }); 
//information for 
function goToLink984() { infowindow984.open(map,marker984); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker984, 'click', goToLink984); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 985 
//positions 
var point985 = new google.maps.LatLng(13.844011, -88.852119); var contentString985 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">MI ÚLTIMA ESPERANZA.</h1>'+ '<div id="bodyContent">'+ '<p><b>MI ÚLTIMA ESPERANZA.</b> , — 22 de  Agosto del 2000.  Dirección:  4ª Calle  Oriente Colonia  El Carmen Barrio  Los Desamparados.  Días y horas  de  reuniones: De  Lunes  a  Domingo de  6:00  a  8:00  p.m.</p>'+ '</div>'+ '</div>'; var infowindow985 = new google.maps.InfoWindow({ content: contentString985 }); 
//markers 
var marker985 = new google.maps.Marker({ position: point985, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "985.MI ÚLTIMA ESPERANZA." }); 
//information for 
function goToLink985() { infowindow985.open(map,marker985); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker985, 'click', goToLink985); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 986 
//positions
 var point986 = new google.maps.LatLng(13.844832, -88.854899); var contentString986 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NUEVA VIDA (INSTITUCIONAL).</h1>'+ '<div id="bodyContent">'+ '<p><b>NUEVA VIDA (INSTITUCIONAL).</b> , — 17 de Abril de 2013. Dirección: Centro de  Reclusión  Senderos de  Libertad, Ilobasco. Días y horas de reuniones: Martes  y Jueves de 3:00 a 4:30 p.m. y Sábado de 9:00 a 10:30 a.m. </p>'+ '</div>'+ '</div>'; var infowindow986 = new google.maps.InfoWindow({ content: contentString986 }); 
 //markers 
 var marker986 = new google.maps.Marker({ position: point986, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "986.NUEVA VIDA (INSTITUCIONAL)." }); 
 //information for 
 function goToLink986() { infowindow986.open(map,marker986); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker986, 'click', goToLink986); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 987 
//positions
 var point987 = new google.maps.LatLng(13.845249, -88.871124); var contentString987 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NUEVO  DESPERTAR EN  AZACUALPA.</h1>'+ '<div id="bodyContent">'+ '<p><b>NUEVO  DESPERTAR EN  AZACUALPA.</b> , — 21  de  Septiembre de 2013. Dirección:  Cantón Azacualpa frente  a La Ermita Ilobasco. Días y horas  de  reuniones: De  Lunes  a  Domingo de  5:30  a  7:30  p.m.</p>'+ '</div>'+ '</div>'; var infowindow987 = new google.maps.InfoWindow({ content: contentString987 }); 
 //markers 
 var marker987 = new google.maps.Marker({ position: point987, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "987.NUEVO  DESPERTAR EN  AZACUALPA." }); 
 //information for 
 function goToLink987() { infowindow987.open(map,marker987); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker987, 'click', goToLink987); google.maps.event.addDomListener(window, 'load', initialize);
//MARCADOR 988 
//positions
 var point988 = new google.maps.LatLng(13.826005, -88.844613); var contentString988 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NUEVO  RENACER DESPERTAR CAMPESINO.</h1>'+ '<div id="bodyContent">'+ '<p><b>NUEVO  RENACER DESPERTAR CAMPESINO.</b> , — 16 de  Octubre de  2006.  Dirección:  Cantón San Francisco  Iraheta Caserío Potrerío Ilobasco. Días y horas  de  reuniones: De Lunes a Sábado de  4:00 a 6:00 p.m.  y Domingo de  2:00 a 4:00 p.m.</p>'+ '</div>'+ '</div>'; var infowindow988 = new google.maps.InfoWindow({ content: contentString988 }); //markers var marker988 = new google.maps.Marker({ position: point988, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "988.NUEVO  RENACER DESPERTAR CAMPESINO." }); //information for function goToLink988() { infowindow988.open(map,marker988); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker988, 'click', goToLink988); google.maps.event.addDomListener(window, 'load', initialize);
//MARCADOR 989 
//positions
 var point989 = new google.maps.LatLng(13.820859, -88.850771); var contentString989 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">POR AMOR A MI VIDA.</h1>'+ '<div id="bodyContent">'+ '<p><b>POR AMOR A MI VIDA.</b> , — 18 de  Enero  de  2011.  Dirección:  Barrio El Calvario Calle al Cementerio de  Los Ricos, Ilobasco. Días y horas de  reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow989 = new google.maps.InfoWindow({ content: contentString989 }); 
 //markers 
 var marker989 = new google.maps.Marker({ position: point989, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "989.POR AMOR A MI VIDA." }); 
 //information for 
 function goToLink989() { infowindow989.open(map,marker989); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker989, 'click', goToLink989); google.maps.event.addDomListener(window, 'load', initialize);
//MARCADOR 990 
//positions
 var point990 = new google.maps.LatLng(13.849663, -88.859563); var contentString990 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">RAYO DE LUZ.</h1>'+ '<div id="bodyContent">'+ '<p><b>RAYO DE LUZ.</b> , — 21 de Marzo de 1996.  Dirección:  Cantón Huertas Caserío Arenera, Ilobasco. Días y horas  de  reuniones: De  Lunes  a Domingo de  5:00 a 7:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow990 = new google.maps.InfoWindow({ content: contentString990 }); 
 //markers 
 var marker990 = new google.maps.Marker({ position: point990, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "990.RAYO DE LUZ." }); 
 //information for 
 function goToLink990() { infowindow990.open(map,marker990); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker990, 'click', goToLink990); google.maps.event.addDomListener(window, 'load', initialize);
//MARCADOR 991 
//positions
 var point991 = new google.maps.LatLng(13.867369, -88.853120); var contentString991 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">RENACE UNA  LUZ EN MI CAMINO.</h1>'+ '<div id="bodyContent">'+ '<p><b>RENACE UNA  LUZ EN MI CAMINO.</b> , — 27 de  Febrero de  2012. Dirección:   Cantón  Llanitos   Caserío  Concepción   Ilobasco.  Días y horas  de  reuniones: De  Lunes  a  Domingo de  6:00  a  8:00  p.m. </p>'+ '</div>'+ '</div>'; var infowindow991 = new google.maps.InfoWindow({ content: contentString991 }); 
 //markers 
 var marker991 = new google.maps.Marker({ position: point991, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "991.RENACE UNA  LUZ EN MI CAMINO." }); 
 //information for 
 function goToLink991() { infowindow991.open(map,marker991); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker991, 'click', goToLink991); google.maps.event.addDomListener(window, 'load', initialize);
//MARCADOR 992 
//positions
 var point992 = new google.maps.LatLng(13.854998, -88.838736); var contentString992 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">RENACER 07  DE  SEPTIEMBRE.</h1>'+ '<div id="bodyContent">'+ '<p><b>RENACER 07  DE  SEPTIEMBRE.</b> , —  07  de  Septiembre de  2005. Dirección:  Cantón San  José, Ilobasco. Días y horas  de  reuniones: De  Lunes  a Domingo de  4:30  a 6:30  p.m.  </p>'+ '</div>'+ '</div>'; var infowindow992 = new google.maps.InfoWindow({ content: contentString992 }); 
 //markers 
 var marker992 = new google.maps.Marker({ position: point992, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "992.RENACER 07  DE  SEPTIEMBRE." }); 
 //information for 
 function goToLink992() { infowindow992.open(map,marker992); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker992, 'click', goToLink992); google.maps.event.addDomListener(window, 'load', initialize);
//MARCADOR 993
 //position
  var point993 = new google.maps.LatLng(13.842373, -88.830882); var contentString993 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">RENACER 27   DE  JUNIO.</h1>'+ '<div id="bodyContent">'+ '<p><b>RENACER 27   DE  JUNIO.</b> , —  27  de   Junio   de   2014.   Dirección: Cantón Anastepeque 2 Cuadras al Norte  de  La Ermita,  Ilobasco. Días y horas  de reuniones: De Lunes a Domingo de 4:00 a 6:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow993 = new google.maps.InfoWindow({ content: contentString993 }); 
  //markers 
  var   marker993 = new google.maps.Marker({ position: point993, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "993.RENACER 27   DE  JUNIO." }); 
  //information for 
  function goToLink993() { infowindow993.open(map,marker993); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker993, 'click', goToLink993); google.maps.event.addDomListener(window, 'load', initialize);
//MARCADOR 994 
//positions
 var point994 = new google.maps.LatLng(13.836989, -88.827861); var contentString994 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">SALVANDO UNA VIDA.</h1>'+ '<div id="bodyContent">'+ '<p><b>SALVANDO UNA VIDA.</b> , — 12 de Agosto de 2006. Dirección: 4ª Calle Poniente y 7ª Avenida  Norte, Ilobasco. Días y horas  de  reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow994 = new google.maps.InfoWindow({ content: contentString994 }); 
 //markers 
 var  marker994 = new google.maps.Marker({ position: point994, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "994.SALVANDO UNA VIDA." }); 
 //information for 
 function goToLink994() { infowindow994.open(map,marker994); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker994, 'click', goToLink994); google.maps.event.addDomListener(window, 'load', initialize);
//MARCADOR 995 
//positions
 var point995 = new google.maps.LatLng(13.824762, -88.823311); var contentString995 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">SOY UN MILAGRO.</h1>'+ '<div id="bodyContent">'+ '<p><b>SOY UN MILAGRO.</b> , — 15 de  Agosto de  2012.  Dirección:  Avenida Carlos   Bonilla,  frente   a  Súper   Sicle,  Ilobasco.  Días  y  horas   de reuniones: De  Lunes  a  Domingo de  6:00  a  8:00  p.m.  </p>'+ '</div>'+ '</div>'; var infowindow995 = new google.maps.InfoWindow({ content: contentString995 }); 
 //markers 
 var  marker995 = new google.maps.Marker({ position: point995, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "995.SOY UN MILAGRO." }); 
 //information for 
 function goToLink995() { infowindow995.open(map,marker995); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker995, 'click', goToLink995); google.maps.event.addDomListener(window, 'load', initialize);
//MARCADOR 996 
//positions
 var point996 = new google.maps.LatLng(13.844956, -88.843748); var contentString996 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UN MILAGRO DEL 2003.</h1>'+ '<div id="bodyContent">'+ '<p><b>UN MILAGRO DEL 2003.</b> , — 13 de Abril de 2003. Dirección: Cantón San Antonio La Labor, Ilobasco. Días y horas de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow996 = new google.maps.InfoWindow({ content: contentString996 }); 
 //markers 
 var  marker996 = new google.maps.Marker({ position: point996, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "996.UN MILAGRO DEL 2003." }); 
 //information for 
 function goToLink996() { infowindow996.open(map,marker996); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker996, 'click', goToLink996); google.maps.event.addDomListener(window, 'load', initialize);
//MARCADOR 997 
//positions
 var point997 = new google.maps.LatLng(13.839247, -88.844950); var contentString997 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UN NUEVO AMANECER EN LA HELEN.</h1>'+ '<div id="bodyContent">'+ '<p><b>UN NUEVO AMANECER EN LA HELEN.</b> , — 24 de  Mayo de  2013. Dirección: Colonia Helen Nº 2 contiguo a Las canchas Ilobasco. Días y horas  de  reuniones: De  Lunes  a  Domingo de  6:00  a  8:00  p.m. </p>'+ '</div>'+ '</div>'; var infowindow997 = new google.maps.InfoWindow({ content: contentString997 }); 
 //markers 
 var  marker997 = new google.maps.Marker({ position: point997, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "997.UN NUEVO AMANECER EN LA HELEN." }); 
 //information for 
 function goToLink997() { infowindow997.open(map,marker997); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker997, 'click', goToLink997); google.maps.event.addDomListener(window, 'load', initialize);
//MARCADOR 998 
//positions
 var point998 = new google.maps.LatLng(13.846872, -88.849327); var contentString998 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UN  NUEVO  HOMBRE 27  DE  MAYO.</h1>'+ '<div id="bodyContent">'+ '<p><b>UN  NUEVO  HOMBRE 27  DE  MAYO.</b> , —  27  de  Mayo  de  2013. Dirección:  Calle  hacia  San  Salvador  final Colonia  Tepeyac Km. 53 (Relleno) Ilobasco. Días y horas  de  reuniones: De Lunes a Domingo de 5:00 a 7:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow998 = new google.maps.InfoWindow({ content: contentString998 }); 
 //markers 
 var  marker998 = new google.maps.Marker({ position: point998, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "998.UN  NUEVO  HOMBRE 27  DE  MAYO." }); 
 //information for 
 function goToLink998() { infowindow998.open(map,marker998); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker998, 'click', goToLink998); google.maps.event.addDomListener(window, 'load', initialize);
//MARCADOR 999 
//positions
 var point999 = new google.maps.LatLng(13.845117, -88.858976); var contentString999 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UN NUEVO PORVENIR.</h1>'+ '<div id="bodyContent">'+ '<p><b>UN NUEVO PORVENIR.</b> , — 24 de  Enero  de  2009.  Dirección:  Final 10ª Avenida  Norte  y Calle Menjivar frente  al tanque de ANDA. Días y horas  de  reuniones: De  Lunes  a  Domingo de  6:00  a  8:00  p.m.</p>'+ '</div>'+ '</div>'; var infowindow999 = new google.maps.InfoWindow({ content: contentString999 }); 
 //markers 
 var  marker999 = new google.maps.Marker({ position: point999, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "999.UN NUEVO PORVENIR." }); 
 //information for 
 function goToLink999() { infowindow999.open(map,marker999); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker999, 'click', goToLink999); google.maps.event.addDomListener(window, 'load', initialize);
//MARCADOR 1000 
//positions
 var point1000 = new google.maps.LatLng(13.864188, -88.852371); var contentString1000 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">VOLUNTAD  28   DE  ABRIL.</h1>'+ '<div id="bodyContent">'+ '<p><b>VOLUNTAD  28   DE  ABRIL.</b> , — 28  de   Abril  de   1977.   Dirección: Caserío Rancho Quemado Cantón Maquilishuat Km. 60 ½ Carretera a Sensuntepeque,  Ilobasco. Días y horas  de  reuniones: De  Lunes a  Sábado de  5:00  a  7:00  p.m.  y Domingo de  9:00  a  11:00  a.m.</p>'+ '</div>'+ '</div>'; var infowindow1000 = new google.maps.InfoWindow({ content: contentString1000 }); 
 //markers 
 var  marker1000 = new google.maps.Marker({ position: point1000, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1000.VOLUNTAD  28   DE  ABRIL." }); 
 //information for 
 function goToLink1000() { infowindow1000.open(map,marker1000); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1000, 'click', goToLink1000); google.maps.event.addDomListener(window, 'load', initialize);





//MARCADOR 1001 
//positions 
var point1001 = new google.maps.LatLng(13.887400, -88.902010); var contentString1001 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NUEVA VIDA.</h1>'+ '<div id="bodyContent">'+ '<p><b>NUEVA VIDA.</b> , — 12 de Octubre de 2013. Dirección: Barrio El Centro Jutiapa. Días y horas  de  reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m.</p>'+ '</div>'+ '</div>'; var infowindow1001 = new google.maps.InfoWindow({ content: contentString1001 }); 
//markers 
var marker1001 = new google.maps.Marker({ position: point1001, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1001.NUEVA VIDA." }); 
//information for 
function goToLink1001() { infowindow1001.open(map,marker1001); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1001, 'click', goToLink1001); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1002 
//positions 
var point1002 = new google.maps.LatLng(13.894373, -88.901601); var contentString1002 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">RENACER LLANO LARGO.</h1>'+ '<div id="bodyContent">'+ '<p><b>RENACER LLANO LARGO.</b> , — 21  de  Enero  de  1992.  Dirección: Cantón Llano  Largo  Centro Jutiapa. Días  y horas   de  reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow1002 = new google.maps.InfoWindow({ content: contentString1002 }); 
//markers 
var marker1002 = new google.maps.Marker({ position: point1002, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1002.RENACER LLANO LARGO." }); 
//information for 
function goToLink1002() { infowindow1002.open(map,marker1002); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1002, 'click', goToLink1002); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1003 
//positions 
var point1003 = new google.maps.LatLng(13.888873, -88.906653); var contentString1003 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">24 HORAS DE SOBRIEDAD.</h1>'+ '<div id="bodyContent">'+ '<p><b>24 HORAS DE SOBRIEDAD.</b> , — 18 de Diciembre de 2013. Dirección: Caserío  Cerrón   Grande  Municipio   de   Jutiapa. Días  y  horas   de reuniones: De  Lunes  a  Domingo de  6:00  a  8:00  p.m.  </p>'+ '</div>'+ '</div>'; var infowindow1003 = new google.maps.InfoWindow({ content: contentString1003 }); 
//markers 
var marker1003 = new google.maps.Marker({ position: point1003, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1003.24 HORAS DE SOBRIEDAD." }); 
//information for 
function goToLink1003() { infowindow1003.open(map,marker1003); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1003, 'click', goToLink1003); google.maps.event.addDomListener(window, 'load', initialize);








//MARCADOR 1004 
//positions 
var point1004 = new google.maps.LatLng(13.832445, -88.733181); var contentString1004 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">CAMINO  HACIA LA LUZ.</h1>'+ '<div id="bodyContent">'+ '<p><b>CAMINO  HACIA LA LUZ.</b> , — 06  de   Enero   de   2010.   Dirección: Cantón El Amate  San Isidro. Días y horas  de  reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow1004 = new google.maps.InfoWindow({ content: contentString1004 }); 
//markers 
var marker1004 = new google.maps.Marker({ position: point1004, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1004.CAMINO  HACIA LA LUZ." }); 
//information for 
function goToLink1004() { infowindow1004.open(map,marker1004); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1004, 'click', goToLink1004); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1005 
//positions 
var point1005 = new google.maps.LatLng(13.814858, -88.717711); var contentString1005 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NUEVO HOMBRE.</h1>'+ '<div id="bodyContent">'+ '<p><b>NUEVO HOMBRE.</b> , — 02 de  Julio  de  2006.  Dirección:  Cantón Los Jobos Caserío Los Jobitos San  Isidro.  Días  y horas  de  reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow1005 = new google.maps.InfoWindow({ content: contentString1005 }); 
//markers 
var marker1005 = new google.maps.Marker({ position: point1005, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1005.NUEVO HOMBRE." }); 
//information for 
function goToLink1005() { infowindow1005.open(map,marker1005); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1005, 'click', goToLink1005); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1006 
//positions 
var point1006 = new google.maps.LatLng(13.830749, -88.694873); var contentString1006 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">RUEGOS DE UNA MADRE.</h1>'+ '<div id="bodyContent">'+ '<p><b>RUEGOS DE UNA MADRE.</b> , — 16 de Septiembre de 2002. Dirección: Cantón Llano La Hacienda San  Isidro.  Días  y horas  de  reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow1006 = new google.maps.InfoWindow({ content: contentString1006 }); 
//markers 
var marker1006 = new google.maps.Marker({ position: point1006, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1006.RUEGOS DE UNA MADRE." }); 
//information for 
function goToLink1006() { infowindow1006.open(map,marker1006); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1006, 'click', goToLink1006); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1007 
//positions 
var point1007 = new google.maps.LatLng(13.846718, -88.723171); var contentString1007 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">TRES LEGADOS.</h1>'+ '<div id="bodyContent">'+ '<p><b>TRES LEGADOS.</b> , —  01  de   Mayo  de   2011.   Dirección:   3ª  Calle Poniente Barrio El Calvario,  San Isidro.  Días y horas  de  reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow1007 = new google.maps.InfoWindow({ content: contentString1007 }); 
//markers 
var marker1007 = new google.maps.Marker({ position: point1007, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1007.TRES LEGADOS." }); 
//information for 
function goToLink1007() { infowindow1007.open(map,marker1007); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1007, 'click', goToLink1007); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1008 
//positions 
var point1008 = new google.maps.LatLng(13.828633, -88.709953); var contentString1008 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UNIDOS A DIOS.</h1>'+ '<div id="bodyContent">'+ '<p><b>UNIDOS A DIOS.</b> , — 17 de Julio de 1997. Dirección: 3ª Calle Poniente San Isidro. Días y horas  de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow1008 = new google.maps.InfoWindow({ content: contentString1008 }); 
//markers 
var marker1008 = new google.maps.Marker({ position: point1008, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1008.UNIDOS A DIOS." }); 
//information for 
function goToLink1008() { infowindow1008.open(map,marker1008); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1008, 'click', goToLink1008); google.maps.event.addDomListener(window, 'load', initialize);





//MARCADOR 1009 
//positions 
var point1009 = new google.maps.LatLng(13.877236, -88.627487); var contentString1009 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">21  DE ENERO (INSTITUCIONAL).</h1>'+ '<div id="bodyContent">'+ '<p><b>21  DE ENERO (INSTITUCIONAL).</b> , — 21 de  Enero  de  2004.  Dirección: Penal  de Sensuntepeque. </p>'+ '</div>'+ '</div>'; var infowindow1009 = new google.maps.InfoWindow({ content: contentString1009 }); 
//markers 
var marker1009 = new google.maps.Marker({ position: point1009, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1009.21  DE ENERO (INSTITUCIONAL)." }); 
//information for 
function goToLink1009() { infowindow1009.open(map,marker1009); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1009, 'click', goToLink1009); google.maps.event.addDomListener(window, 'load', initialize);
//MARCADOR 1010 
//positions 
var point1010 = new google.maps.LatLng(13.871005, -88.629433); var contentString1010 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">ALFA Y OMEGA.</h1>'+ '<div id="bodyContent">'+ '<p><b>ALFA Y OMEGA.</b> , — 22 de Abril de 1983.  Dirección:  8ª Avenida  Sur Nº  1 y Calle  Doroteo Basconcelos, Sensuntepeque.  Días  y horas de  reuniones: De Lunes a Domingo de  7:00 a 9:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow1010 = new google.maps.InfoWindow({ content: contentString1010 }); 
//markers 
var marker1010 = new google.maps.Marker({ position: point1010, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1010.ALFA Y OMEGA." }); 
//information for 
function goToLink1010() { infowindow1010.open(map,marker1010); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1010, 'click', goToLink1010); google.maps.event.addDomListener(window, 'load', initialize);
//MARCADOR 1011 
//positions 
var point1011 = new google.maps.LatLng(13.869744, -88.624994); var contentString1011 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">CAMINO DE FE Y ESPERANZA.</h1>'+ '<div id="bodyContent">'+ '<p><b>CAMINO DE FE Y ESPERANZA.</b> , — 16 de  Febrero de  2002. Dirección:   Cantón La Esperanza Calle  Santa   Isabel  Barrio  Santa Bárbara   Sensuntepeque. Días  y horas  de  reuniones: De  Lunes  a Domingo de  6:00 a 8:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow1011 = new google.maps.InfoWindow({ content: contentString1011 }); 
//markers 
var marker1011 = new google.maps.Marker({ position: point1011, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1011.CAMINO DE FE Y ESPERANZA." }); 
//information for 
function goToLink1011() { infowindow1011.open(map,marker1011); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1011, 'click', goToLink1011); google.maps.event.addDomListener(window, 'load', initialize);
//MARCADOR 1012 
//positions 
var point1012 = new google.maps.LatLng(13.878643, -88.627448); var contentString1012 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">DESPERTAR 12  DE JUNIO.</h1>'+ '<div id="bodyContent">'+ '<p><b>DESPERTAR 12  DE JUNIO.</b> , — 12  de  Junio  de  2OO5. Dirección: 3ª  Avenida  Norte  Barrio El Calvario  Sensuntepeque. Días y horas de  reuniones: De Lunes a Domingo de  7:00 a 9:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow1012 = new google.maps.InfoWindow({ content: contentString1012 }); 
//markers 
var marker1012 = new google.maps.Marker({ position: point1012, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1012.DESPERTAR 12  DE JUNIO." }); 
//information for 
function goToLink1012() { infowindow1012.open(map,marker1012); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1012, 'click', goToLink1012); google.maps.event.addDomListener(window, 'load', initialize);
//MARCADOR 1013 
//positions 
var point1013 = new google.maps.LatLng(13.867747, -88.623659); var contentString1013 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">FE 09  DE AGOSTO.</h1>'+ '<div id="bodyContent">'+ '<p><b>FE 09  DE AGOSTO.</b> , — 09 de  Agosto de  2010.  Dirección:  Cantón Chunte Caserío La Esperanza Días y horas  de  reuniones: De Lunes a Domingo de 7:00 a 9:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow1013 = new google.maps.InfoWindow({ content: contentString1013 }); 
//markers 
var marker1013 = new google.maps.Marker({ position: point1013, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1013.FE 09  DE AGOSTO." }); 
//information for 
function goToLink1013() { infowindow1013.open(map,marker1013); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1013, 'click', goToLink1013); google.maps.event.addDomListener(window, 'load', initialize);
//MARCADOR 1014 
//positions 
var point1014 = new google.maps.LatLng(13.872398, -88.631440); var contentString1014 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NAVIDAD 78.</h1>'+ '<div id="bodyContent">'+ '<p><b>NAVIDAD 78.</b> , —  19 de  Diciembre de  1978.  Dirección:  3ª Avenida Sur, Barrio El Calvario  Sensuntepeque. Días y horas  de  reuniones: De  Lunes  a Domingo de  7:00  a 9:00  p.m. </p>'+ '</div>'+ '</div>'; var infowindow1014 = new google.maps.InfoWindow({ content: contentString1014 }); 
//markers 
var marker1014 = new google.maps.Marker({ position: point1014, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1014.NAVIDAD 78." }); 
//information for 
function goToLink1014() { infowindow1014.open(map,marker1014); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1014, 'click', goToLink1014); google.maps.event.addDomListener(window, 'load', initialize);
//MARCADOR 1015 
//positions 
var point1015 = new google.maps.LatLng(13.869511, -88.653975); var contentString1015 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">RENACER 02  DE  ENERO.</h1>'+ '<div id="bodyContent">'+ '<p><b>RENACER 02  DE  ENERO.</b> , —  02  de  Enero   de  2012.   Dirección: Cantón Tronalagua, Sensuntepeque.  Días  y  horas   de  reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow1015 = new google.maps.InfoWindow({ content: contentString1015 }); 
//markers 
var marker1015 = new google.maps.Marker({ position: point1015, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1015.RENACER 02  DE  ENERO." }); 
//information for 
function goToLink1015() { infowindow1015.open(map,marker1015); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1015, 'click', goToLink1015); google.maps.event.addDomListener(window, 'load', initialize);
//MARCADOR 1016 
//positions 
var point1016 = new google.maps.LatLng(13.864664, -88.613626); var contentString1016 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">RENACER 02  DE FEBRERO.</h1>'+ '<div id="bodyContent">'+ '<p><b>RENACER 02  DE FEBRERO.</b> , — 15 de  Agosto de  2009.  Dirección: Cantón Rojas  Caserío La Perla  Sensuntepeque. Días  y horas   de reuniones: De  Lunes  a  Domingo de  6:00  a  8:00  p.m. </p>'+ '</div>'+ '</div>'; var infowindow1016 = new google.maps.InfoWindow({ content: contentString1016 }); 
//markers 
var marker1016 = new google.maps.Marker({ position: point1016, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1016.RENACER 02  DE FEBRERO." }); 
//information for 
function goToLink1016() { infowindow1016.open(map,marker1016); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1016, 'click', goToLink1016); google.maps.event.addDomListener(window, 'load', initialize);
//MARCADOR 1017 
//positions 
var point1017 = new google.maps.LatLng(13.873358, -88.605901); var contentString1017 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">RENACER  05   DE  DICIEMBRE.</h1>'+ '<div id="bodyContent">'+ '<p><b>RENACER  05   DE  DICIEMBRE.</b> , — 05   de   Diciembre  de   2008. Dirección:  Cantón Rio Grande Caserío San  José Km. 7 Carretera a Ciudad Dolores Sensuntepeque.  Días y horas  de  reuniones: De Lunes a Viernes de 6:00 a 8:00 p.m.</p>'+ '</div>'+ '</div>'; var infowindow1017 = new google.maps.InfoWindow({ content: contentString1017 }); 
//markers 
var marker1017 = new google.maps.Marker({ position: point1017, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1017.RENACER  05   DE  DICIEMBRE." }); 
//information for 
function goToLink1017() { infowindow1017.open(map,marker1017); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1017, 'click', goToLink1017); google.maps.event.addDomListener(window, 'load', initialize);
//MARCADOR 1018 
//positions 
var point1018 = new google.maps.LatLng(13.876191, -88.610794); var contentString1018 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UNA  LUZ EN  MI CAMINO.</h1>'+ '<div id="bodyContent">'+ '<p><b>UNA  LUZ EN  MI CAMINO.</b> , — 17  de  Junio  de  1990.  Dirección: Cantón Río Grande Puesuelo Abajo  Sensuntepeque. Días y horas de  reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m.</p>'+ '</div>'+ '</div>'; var infowindow1018 = new google.maps.InfoWindow({ content: contentString1018 }); 
//markers 
var marker1018 = new google.maps.Marker({ position: point1018, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1018.UNA  LUZ EN  MI CAMINO." }); 
//information for 
function goToLink1018() { infowindow1018.open(map,marker1018); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1018, 'click', goToLink1018); google.maps.event.addDomListener(window, 'load', initialize);
//MARCADOR 1019 
//positions 
var point1019 = new google.maps.LatLng(13.867914, -88.612081); var contentString1019 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UNA  NUEVA  VIDA.</h1>'+ '<div id="bodyContent">'+ '<p><b>UNA  NUEVA  VIDA.</b> , — 02  de  Enero  de  1983.  Dirección:  Cantón Rojas Caserío El Gavilán Sensuntepeque. Días y horas  de reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow1019 = new google.maps.InfoWindow({ content: contentString1019 }); 
//markers 
var marker1019 = new google.maps.Marker({ position: point1019, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1019.UNA  NUEVA  VIDA." }); 
//information for 
function goToLink1019() { infowindow1019.open(map,marker1019); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1019, 'click', goToLink1019); google.maps.event.addDomListener(window, 'load', initialize);




//MARCADOR 1020 
//positions 
var point1020 = new google.maps.LatLng(13.863734, -88.902023); var contentString1020 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">30 DE ENERO UN NUEVO AMANECER.</h1>'+ '<div id="bodyContent">'+ '<p><b>30 DE ENERO UN NUEVO AMANECER.</b> , — 30 de Enero  de 2002. Dirección:   Cantón  San   Francisco   Echeverría  Tejutepeque.   Días y horas  de  reuniones: De  Lunes  a  Domingo de  6:00  a  8:00  p.m. </p>'+ '</div>'+ '</div>'; var infowindow1020 = new google.maps.InfoWindow({ content: contentString1020 }); 
//markers 
var marker1020 = new google.maps.Marker({ position: point1020, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1020.30 DE ENERO UN NUEVO AMANECER." }); 
//information for 
function goToLink1020() { infowindow1020.open(map,marker1020); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1020, 'click', goToLink1020); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1021 
//positions 
var point1021 = new google.maps.LatLng(13.851180, -88.919064); var contentString1021 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">DIOS ME ILUMINÓ.</h1>'+ '<div id="bodyContent">'+ '<p><b>DIOS ME ILUMINÓ.</b> , — 14  de  Marzo  de  2011.  Dirección:  Cantón Concepción Caserío Trilladera  Tejutepeque. Días y horas  de reuniones: De  Lunes  a  Domingo de  6:00  a  8:00  p.m.  </p>'+ '</div>'+ '</div>'; var infowindow1021 = new google.maps.InfoWindow({ content: contentString1021 }); 
//markers 
var marker1021 = new google.maps.Marker({ position: point1021, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1021.DIOS ME ILUMINÓ." }); 
//information for 
function goToLink1021() { infowindow1021.open(map,marker1021); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1021, 'click', goToLink1021); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1022 
//positions 
var point1022 = new google.maps.LatLng(13.845741, -88.895373); var contentString1022 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">DIOS Y A.A.</h1>'+ '<div id="bodyContent">'+ '<p><b>DIOS Y A.A.</b> , — 07 de Enero de 2011. Dirección: Cantón Concepción Caserío Quezalapa, Carretera a Tejutepeque. Días y horas  de reuniones: De  Lunes  a  Domingo de  6:00  a  8:00  p.m.  </p>'+ '</div>'+ '</div>'; var infowindow1022 = new google.maps.InfoWindow({ content: contentString1022 }); 
//markers 
var marker1022 = new google.maps.Marker({ position: point1022, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1022.DIOS Y A.A." }); 
//information for 
function goToLink1022() { infowindow1022.open(map,marker1022); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1022, 'click', goToLink1022); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1023 
//positions 
var point1023 = new google.maps.LatLng(13.858859, -88.903652); var contentString1023 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">FE  EN   DIOS  24   DE  NOVIEMBRE.</h1>'+ '<div id="bodyContent">'+ '<p><b>FE  EN   DIOS  24   DE  NOVIEMBRE.</b> , —  24   de   Noviembre  de 2008.  Dirección:  Cantón San  Francisco  Echeverría Calle  Principal Tejutepeque. Días y horas  de  reuniones: De  Lunes  a Domingo de 6:00 a 8:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow1023 = new google.maps.InfoWindow({ content: contentString1023 }); 
//markers 
var marker1023 = new google.maps.Marker({ position: point1023, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1023.FE  EN   DIOS  24   DE  NOVIEMBRE." }); 
//information for 
function goToLink1023() { infowindow1023.open(map,marker1023); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1023, 'click', goToLink1023); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1024 
//positions 
var point1024 = new google.maps.LatLng(13.854942, -88.899131); var contentString1024 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">GRACIAS A DIOS.</h1>'+ '<div id="bodyContent">'+ '<p><b>GRACIAS A DIOS.</b> , — 09  de  Diciembre de  1975.  Dirección:  Calle Hermanos Rivas y 1ª Avenida  Norte, Barrio El Centro Tejutepeque. Días y horas  de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow1024 = new google.maps.InfoWindow({ content: contentString1024 }); 
//markers 
var marker1024 = new google.maps.Marker({ position: point1024, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1024.GRACIAS A DIOS." }); 
//information for 
function goToLink1024() { infowindow1024.open(map,marker1024); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1024, 'click', goToLink1024); google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 1025 
//positions 
var point1025 = new google.maps.LatLng(13.845323, -88.900382); var contentString1025 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NUEVO   MILENIO.</h1>'+ '<div id="bodyContent">'+ '<p><b>NUEVO   MILENIO.</b> , —  26   de   Junio   de   1999.   Dirección:   Calle Delfina  Escalante Nº 6 Barrio El Centro Tejutepeque. Días y horas de  reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow1025 = new google.maps.InfoWindow({ content: contentString1025 }); 
//markers 
var marker1025 = new google.maps.Marker({ position: point1025, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1025.NUEVO   MILENIO." }); 
//information for 
function goToLink1025() { infowindow1025.open(map,marker1025); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1025, 'click', goToLink1025); google.maps.event.addDomListener(window, 'load', initialize);


}