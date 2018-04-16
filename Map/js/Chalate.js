function initialize() {


    //Map parametrs
    var mapOptions = {
        zoom: 14,
        center: new google.maps.LatLng(14.039355, -88.935319),
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


    //MARCADOR 856 
    //positions 
    var point856 = new google.maps.LatLng(14.094054, -88.749659); 
    var contentString856 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">DESPERTAR DE NUEVO  EN  ARCATAO.</h1>'+ '<div id="bodyContent">'+ '<p><b>DESPERTAR DE NUEVO  EN  ARCATAO.</b> , — 21  de  Febrero.  Días y horas  de  reuniones: De  Lunes  a  Domingo de  6:00  a  8:00  p.m. </p>'+ '</div>'+ '</div>'; var infowindow856 = new google.maps.InfoWindow({ content: contentString856 }); 
    //markers 
    var marker856 = new google.maps.Marker({ position: point856, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "856.DESPERTAR DE NUEVO  EN  ARCATAO." }); 
    //information 
    function goToLink856() { infowindow856.open(map,marker856); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker856, 'click', goToLink856); google.maps.event.addDomListener(window, 'load', initialize);

    //MARCADOR 857 
    //positions 
    var point857 = new google.maps.LatLng(14.093362, -88.748983); 
    var contentString857 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">LA ALEGRÍA DE VIVIR EN ARCATAO.</h1>'+ '<div id="bodyContent">'+ '<p><b>LA ALEGRÍA DE VIVIR EN ARCATAO.</b> , — 07 Septiembre de  2013. Días y horas  de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow857 = new google.maps.InfoWindow({ content: contentString857 }); 
    //markers 
    var marker857 = new google.maps.Marker({ position: point857, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "857.LA ALEGRÍA DE VIVIR EN ARCATAO." }); 
    //information 
     function goToLink857() { infowindow857.open(map,marker857); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker857, 'click', goToLink857); google.maps.event.addDomListener(window, 'load', initialize);

    //MARCADOR 858 
    //positions 
    var point858 = new google.maps.LatLng(13.989145, -88.983284); 
    var contentString858 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UNA LUZ EN MI CAMINO.</h1>'+ '<div id="bodyContent">'+ '<p><b>UNA LUZ EN MI CAMINO.</b> , — 05 de Julio de 2004. Dirección: Barrio El Centro. Días y horas  de  reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow858 = new google.maps.InfoWindow({ content: contentString858 });
    //markers 
    var marker858 = new google.maps.Marker({ position: point858, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "858.UNA LUZ EN MI CAMINO." }); 
    //information 
     function goToLink858() { infowindow858.open(map,marker858); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker858, 'click', goToLink858); google.maps.event.addDomListener(window, 'load', initialize);

    //MARCADOR 859 
    //positions 
    var point859 = new google.maps.LatLng(13.975125, -88.851336); 
    var contentString859 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">CONCEPCIÓN   NUEVA   VIDA.</h1>'+ '<div id="bodyContent">'+ '<p><b>CONCEPCIÓN   NUEVA   VIDA.</b> , —  18   de   Diciembre  de   2004. Dirección:  Caserío Concepción Cantón Guillenes. Días y horas  de reuniones: De  Lunes  a  Domingo de  6:00  a  8:00  p.m.  </p>'+ '</div>'+ '</div>'; var infowindow859 = new google.maps.InfoWindow({ content: contentString859 }); 
    //markers 
    var marker859 = new google.maps.Marker({ position: point859, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "859.CONCEPCIÓN   NUEVA   VIDA." }); 
    //information 
     function goToLink859() { infowindow859.open(map,marker859); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker859, 'click', goToLink859); google.maps.event.addDomListener(window, 'load', initialize);

    //MARCADOR 860 
    //positions 
    var point860 = new google.maps.LatLng(14.375795, -89.214307); 
    var contentString860 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NUEVO  AMANECER.</h1>'+ '<div id="bodyContent">'+ '<p><b>NUEVO  AMANECER.</b> , — 10  de  Abril de  2006.  Dirección:   Barrio Concepción. Días y horas  de  reuniones: De  Lunes  a Domingo de 6:00 a 8:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow860 = new google.maps.InfoWindow({ content: contentString860 }); 
    //markers 
    var marker860 = new google.maps.Marker({ position: point860, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "860.NUEVO  AMANECER." }); 
    //information 
     function goToLink860() { infowindow860.open(map,marker860); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker860, 'click', goToLink860); google.maps.event.addDomListener(window, 'load', initialize);

    //MARCADOR 861 
    //positions 
    var point861 = new google.maps.LatLng(14.374112, -89.214007); 
    var contentString861 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">SOBRIEDAD EN LA FRONTERA.</h1>'+ '<div id="bodyContent">'+ '<p><b>SOBRIEDAD EN LA FRONTERA.</b> , — 05 de Mayo de 1982. Dirección: Barrio San Francisco. Días y horas de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.  Miembros asistentes: 15 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow861 = new google.maps.InfoWindow({ content: contentString861 }); 
    //markers 
    var marker861 = new google.maps.Marker({ position: point861, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "861.SOBRIEDAD EN LA FRONTERA." }); 
    //information 
     function goToLink861() { infowindow861.open(map,marker861); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker861, 'click', goToLink861); google.maps.event.addDomListener(window, 'load', initialize);

    //MARCADOR 862 
    //positions 
    var point862 = new google.maps.LatLng(14.372412, -89.209563); 
    var contentString862 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UN MILAGRO DE DIOS.</h1>'+ '<div id="bodyContent">'+ '<p><b>UN MILAGRO DE DIOS.</b> , — 17 de Junio de 2003. Dirección: Frontera El Poy. Días y horas  de  reuniones: De Lunes a Domingo de  6:00  a 8:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow862 = new google.maps.InfoWindow({ content: contentString862 }); 
    //markers 
    var marker862 = new google.maps.Marker({ position: point862, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "862.UN MILAGRO DE DIOS." }); 
    //information 
     function goToLink862() { infowindow862.open(map,marker862); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker862, 'click', goToLink862); google.maps.event.addDomListener(window, 'load', initialize);

    //MARCADOR 863 
    //positions 
    var point863 = new google.maps.LatLng(14.140524, -88.956599); 
    var contentString863 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">03  DE  SEPTIEMBRE.</h1>'+ '<div id="bodyContent">'+ '<p><b>03  DE  SEPTIEMBRE.</b> , — 03  de  Septiembre de  2000.   Dirección: Cantón Guachipilín.  Días y horas de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow863 = new google.maps.InfoWindow({ content: contentString863 }); 
    //markers 
    var marker863 = new google.maps.Marker({ position: point863, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "863.03  DE  SEPTIEMBRE." }); 
    //information 
     function goToLink863() { infowindow863.open(map,marker863); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker863, 'click', goToLink863); google.maps.event.addDomListener(window, 'load', initialize);

    //MARCADOR 864 
    //positions 
    var point864 = new google.maps.LatLng(14.136883, -88.959678); 
    var contentString864 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">DEL PANTANO  UNA  FLOR.</h1>'+ '<div id="bodyContent">'+ '<p><b>DEL PANTANO  UNA  FLOR.</b> , — 23  de  Abril de  1974.  Dirección: Barrio El Centro. Días y horas  de  reuniones: De Lunes  a Domingo de 6:00 a 8:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow864 = new google.maps.InfoWindow({ content: contentString864 }); 
    //markers 
    var marker864 = new google.maps.Marker({ position: point864, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "864.DEL PANTANO  UNA  FLOR." });
     //information
       function goToLink864() { infowindow864.open(map,marker864); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker864, 'click', goToLink864); google.maps.event.addDomListener(window, 'load', initialize);

    //MARCADOR 865 
    //positions 
    var point865 = new google.maps.LatLng(14.144717, -88.954550); 
    var contentString865 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">HISTORIA DE MI VIDA.</h1>'+ '<div id="bodyContent">'+ '<p><b>HISTORIA DE MI VIDA.</b> , — 03 de Mayo de 1975.  Dirección:  Cantón El Morro. Días y horas  de reuniones: De Lunes a Domingo de 5:00 a 7:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow865 = new google.maps.InfoWindow({ content: contentString865 }); 
    //markers 
    var marker865 = new google.maps.Marker({ position: point865, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "865.HISTORIA DE MI VIDA." }); 
    //information 
     function goToLink865() { infowindow865.open(map,marker865); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker865, 'click', goToLink865); google.maps.event.addDomListener(window, 'load', initialize);

    //MARCADOR 866 
    //positions 
    var point866 = new google.maps.LatLng(14.137249, -88.954476); 
    var contentString866 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">LIBERTAD.</h1>'+ '<div id="bodyContent">'+ '<p><b>LIBERTAD.</b> , — 08   de   Septiembre  de   2013.   Dirección:   Cantón Candelaria. Días y horas de reuniones: De Lunes a Domingo de 5:00 a 7:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow866 = new google.maps.InfoWindow({ content: contentString866 }); 
    //markers 
    var marker866 = new google.maps.Marker({ position: point866, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "866.LIBERTAD." }); 
    //information 
     function goToLink866() { infowindow866.open(map,marker866); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker866, 'click', goToLink866); google.maps.event.addDomListener(window, 'load', initialize);

    //MARCADOR 867 
    //positions 
    var point867 = new google.maps.LatLng(14.140748, -88.958879); 
    var contentString867 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">LLAVE DE  LA BUENA  VOLUNTAD.</h1>'+ '<div id="bodyContent">'+ '<p><b>LLAVE DE  LA BUENA  VOLUNTAD.</b> , —  18  de   Enero   de   1976. Dirección:   La  Cuchilla.  Días  y  horas   de   reuniones:  De  Lunes  a Domingo de 5:00 a 7:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow867 = new google.maps.InfoWindow({ content: contentString867 }); 
    //markers 
    var marker867 = new google.maps.Marker({ position: point867, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "867.LLAVE DE  LA BUENA  VOLUNTAD." }); 
    //information 
     function goToLink867() { infowindow867.open(map,marker867); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker867, 'click', goToLink867); google.maps.event.addDomListener(window, 'load', initialize);

    //MARCADOR 868 
    //positions 
    var point868 = new google.maps.LatLng(14.138368, -88.960250); 
    var contentString868 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UNA  FE EN DIOS.</h1>'+ '<div id="bodyContent">'+ '<p><b>UNA  FE EN DIOS.</b> , — 01 de  Enero  de  2011.  Dirección:  Cantón El Morro.  Días y horas  de  reuniones: De Lunes a Domingo de  5:00  a 7:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow868 = new google.maps.InfoWindow({ content: contentString868 }); 
    //markers 
    var marker868 = new google.maps.Marker({ position: point868, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "868.UNA  FE EN DIOS." }); 
    //information 
     function goToLink868() { infowindow868.open(map,marker868); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker868, 'click', goToLink868); google.maps.event.addDomListener(window, 'load', initialize);

    //MARCADOR 869 
    //positions 
    var point869 = new google.maps.LatLng(14.139558, -88.958157); 
    var contentString869 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UNA LUZ EN LA FRONTERA.</h1>'+ '<div id="bodyContent">'+ '<p><b>UNA LUZ EN LA FRONTERA.</b> , — 25 de Febrero de 1975. Dirección: Cantón Guachipilín.  Días y horas de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow869 = new google.maps.InfoWindow({ content: contentString869 }); 
    //markers 
    var marker869 = new google.maps.Marker({ position: point869, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "869.UNA LUZ EN LA FRONTERA." }); 
    //information 
     function goToLink869() { infowindow869.open(map,marker869); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker869, 'click', goToLink869); google.maps.event.addDomListener(window, 'load', initialize);

    //MARCADOR 870 
    //positions 
    var point870 = new google.maps.LatLng(14.087809, -88.956895); 
    var contentString870 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">06 DE MAYO.</h1>'+ '<div id="bodyContent">'+ '<p><b>06 DE MAYO.</b> , — 06 de Mayo de 1985. Dirección: Barrio San Antonio. Días y horas  de reuniones: De Lunes a Domingo de 5:00 a 7:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow870 = new google.maps.InfoWindow({ content: contentString870 }); 
    //markers 
    var marker870 = new google.maps.Marker({ position: point870, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "870.06 DE MAYO." }); 
    //information 
     function goToLink870() { infowindow870.open(map,marker870); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker870, 'click', goToLink870); google.maps.event.addDomListener(window, 'load', initialize);


    //MARCADOR 871 
    //positions 
    var point871 = new google.maps.LatLng(14.085720, -88.952296); 
    var contentString871 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">ESTRELLITA  DEL NORTE.</h1>'+ '<div id="bodyContent">'+ '<p><b>ESTRELLITA  DEL NORTE.</b> , —  05  de   Enero   de   2014.   Dirección: Cantón El Llano  Grande. Días  y horas  de  reuniones: De  Lunes  a Domingo de 4:00 a 6:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow871 = new google.maps.InfoWindow({ content: contentString871 }); 
    //markers 
    var marker871 = new google.maps.Marker({ position: point871, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "871.ESTRELLITA  DEL NORTE." }); 
    //information 
     function goToLink871() { infowindow871.open(map,marker871); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker871, 'click', goToLink871); google.maps.event.addDomListener(window, 'load', initialize);

    //MARCADOR 872 
    //positions 
    var point872 = new google.maps.LatLng(14.073105, -88.981450); 
    var contentString872 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">INMACULADA CONCEPCIÓN.</h1>'+ '<div id="bodyContent">'+ '<p><b>INMACULADA CONCEPCIÓN.</b> , — 08 de Diciembre de 1970. Dirección:  Barrio El Centro. Días y horas  de  reuniones: De Lunes a Domingo de  4:00  a 6:00  p.m.  </p>'+ '</div>'+ '</div>'; var infowindow872 = new google.maps.InfoWindow({ content: contentString872 }); 
    //markers 
    var marker872 = new google.maps.Marker({ position: point872, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "872.INMACULADA CONCEPCIÓN." }); 
    //information 
     function goToLink872() { infowindow872.open(map,marker872); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker872, 'click', goToLink872); google.maps.event.addDomListener(window, 'load', initialize);

    //MARCADOR 873 
    //positions 
    var point873 = new google.maps.LatLng(14.082301, -88.990477); 
    var contentString873 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">PUNTO  SIN  RETORNO.</h1>'+ '<div id="bodyContent">'+ '<p><b>PUNTO  SIN  RETORNO.</b> , —  06  de   Agosto  de   1972.   Dirección: Cantón Monte Redondo. Días  y horas  de  reuniones: De  Lunes  a Domingo de 4:00 a 6:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow873 = new google.maps.InfoWindow({ content: contentString873 }); 
    //markers 
    var marker873 = new google.maps.Marker({ position: point873, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "873.PUNTO  SIN  RETORNO." }); 
    //information 
     function goToLink873() { infowindow873.open(map,marker873); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker873, 'click', goToLink873); google.maps.event.addDomListener(window, 'load', initialize);

    //MARCADOR 874 
    //positions 
    var point874 = new google.maps.LatLng(14.081911, -88.943423); 
    var contentString874 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">RENACER  26   DE  DICIEMBRE.</h1>'+ '<div id="bodyContent">'+ '<p><b>RENACER  26   DE  DICIEMBRE.</b> , — 04   de   Diciembre  de   2004. Dirección:  Cantón El Pepeto. Días y horas  de  reuniones: De Lunes a Domingo de 5:00 a 7:00 p.m.  Miembros asistentes: 5 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow874 = new google.maps.InfoWindow({ content: contentString874 }); 
    //markers 
    var marker874 = new google.maps.Marker({ position: point874, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "874.RENACER  26   DE  DICIEMBRE." }); 
    //information f
     function goToLink874() { infowindow874.open(map,marker874); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker874, 'click', goToLink874); google.maps.event.addDomListener(window, 'load', initialize);

    //MARCADOR 875 
    //positions 
    var point875 = new google.maps.LatLng(14.068665, -88.956289); 
    var contentString875 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">TRES LEGADOS.</h1>'+ '<div id="bodyContent">'+ '<p><b>TRES LEGADOS.</b> , —  08  de   Mayo  de   1995.   Dirección:   Barrio  El Centro. Días y horas  de  reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow875 = new google.maps.InfoWindow({ content: contentString875 }); 
    //markers 
    var marker875 = new google.maps.Marker({ position: point875, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "875.TRES LEGADOS." }); 
    //information 
     function goToLink875() { infowindow875.open(map,marker875); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker875, 'click', goToLink875); google.maps.event.addDomListener(window, 'load', initialize);

    //MARCADOR 876 
    //positions 
    var point876 = new google.maps.LatLng(14.014184, -88.909993); 
    var contentString876 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">2000</h1>'+ '<div id="bodyContent">'+ '<p><b>2000</b> , — 08  de  Abril de  2000.  Dirección:  Cantón El Chuptal. Días y horas  de  reuniones: De  Lunes  a  Domingo de  6:00  a  8:00  p.m.</p>'+ '</div>'+ '</div>'; var infowindow876 = new google.maps.InfoWindow({ content: contentString876 }); 
    //markers 
    var marker876 = new google.maps.Marker({ position: point876, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "876.2000" }); 
    //information 
     function goToLink876() { infowindow876.open(map,marker876); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker876, 'click', goToLink876); google.maps.event.addDomListener(window, 'load', initialize);

    //MARCADOR 877 
    //positions 
    var point877 = new google.maps.LatLng(14.045282, -88.942707); 
    var contentString877 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">CRECER, CONFIAR Y OBEDECER.</h1>'+ '<div id="bodyContent">'+ '<p><b>CRECER, CONFIAR Y OBEDECER.</b> , — 11 de  Noviembre de  1975. Dirección:  Barrio La Sierpe. Días y horas  de  reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow877 = new google.maps.InfoWindow({ content: contentString877 }); 
    //markers 
    var marker877 = new google.maps.Marker({ position: point877, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "877.CRECER, CONFIAR Y OBEDECER." }); 
    //information 
     function goToLink877() { infowindow877.open(map,marker877); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker877, 'click', goToLink877); google.maps.event.addDomListener(window, 'load', initialize);

    //MARCADOR 878 
    //positions 
    var point878 = new google.maps.LatLng(14.039107, -88.933755); 
    var contentString878 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">CHALATECO.</h1>'+ '<div id="bodyContent">'+ '<p><b>CHALATECO.</b> , — 14  de  Noviembre de  1975.  Dirección:  Barrio  El Calvario. Días y horas  de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow878 = new google.maps.InfoWindow({ content: contentString878 }); 
    //markers 
    var marker878 = new google.maps.Marker({ position: point878, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "878.CHALATECO." }); 
    //information 
     function goToLink878() { infowindow878.open(map,marker878); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker878, 'click', goToLink878); google.maps.event.addDomListener(window, 'load', initialize);

    //MARCADOR 879 
    //positions 
    var point879 = new google.maps.LatLng(14.042484, -88.938529); 
    var contentString879 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">LUZ Y VIDA.</h1>'+ '<div id="bodyContent">'+ '<p><b>LUZ Y VIDA.</b> , — 20 de Junio  de 2010. Dirección:  Barrio San Antonio. Días y horas  de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.</p>'+ '</div>'+ '</div>'; var infowindow879 = new google.maps.InfoWindow({ content: contentString879 }); 
    //markers 
    var marker879 = new google.maps.Marker({ position: point879, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "879.LUZ Y VIDA." }); 
    //information 
     function goToLink879() { infowindow879.open(map,marker879); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker879, 'click', goToLink879); google.maps.event.addDomListener(window, 'load', initialize);

    //MARCADOR 880 
    //positions 
    var point880 = new google.maps.LatLng(14.037820, -88.933644); 
    var contentString880 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">MORIR PARA VIVIR.</h1>'+ '<div id="bodyContent">'+ '<p><b>MORIR PARA VIVIR.</b> , — 01 de Diciembre de 1961.  Dirección:  Barrio San José Avenida  Fajardo. Días y horas  de  reuniones: De Lunes  a Domingo de  6:00  a 8:00  p.m.  </p>'+ '</div>'+ '</div>'; var infowindow880 = new google.maps.InfoWindow({ content: contentString880 });
     //markers
      var marker880 = new google.maps.Marker({ position: point880, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "880.MORIR PARA VIVIR." }); 
      //information 
       function goToLink880() { infowindow880.open(map,marker880); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker880, 'click', goToLink880); google.maps.event.addDomListener(window, 'load', initialize);

    //MARCADOR 881 
    //positions 
    var point881 = new google.maps.LatLng(14.008377, -88.963855); 
    var contentString881 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NUEVO  FE Y DECISIÓN.</h1>'+ '<div id="bodyContent">'+ '<p><b>NUEVO  FE Y DECISIÓN.</b> , — 31  de  Octubre de  1999.  Dirección: Barrio San Antonio.  Días y horas  de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow881 = new google.maps.InfoWindow({ content: contentString881 }); 
    //markers 
    var marker881 = new google.maps.Marker({ position: point881, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "881.NUEVO  FE Y DECISIÓN." }); 
    //information 

     function goToLink881() { infowindow881.open(map,marker881); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker881, 'click', goToLink881); google.maps.event.addDomListener(window, 'load', initialize);

    //MARCADOR 882 
    //positions 
    var point882 = new google.maps.LatLng(14.016732, -88.925094); 
    var contentString882 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">RENACER 01 DE ABRIL.</h1>'+ '<div id="bodyContent">'+ '<p><b>RENACER 01 DE ABRIL.</b> , — 01 de Abril de 2004.  Dirección:  Cantón San José. Días y horas  de  reuniones: De Lunes a Domingo de  5:00 a 7:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow882 = new google.maps.InfoWindow({ content: contentString882 }); 
    //markers 
    var marker882 = new google.maps.Marker({ position: point882, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "882.RENACER 01 DE ABRIL." }); 
    //information 

     function goToLink882() { infowindow882.open(map,marker882); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker882, 'click', goToLink882); google.maps.event.addDomListener(window, 'load', initialize);

    //MARCADOR 883 
    //positions 
    var point883 = new google.maps.LatLng(14.034978, -88.932857); 
    var contentString883 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">RENACER EN TEPEYAC.</h1>'+ '<div id="bodyContent">'+ '<p><b>RENACER EN TEPEYAC.</b> , — 14 de Abril de 2002. Dirección: Caserío Las Delicias.  Días y horas  de  reuniones: De  Lunes  a Domingo de 6:00 a 8:00 p.m.</p>'+ '</div>'+ '</div>'; var infowindow883 = new google.maps.InfoWindow({ content: contentString883 }); 
    //markers 
    var marker883 = new google.maps.Marker({ position: point883, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "883.RENACER EN TEPEYAC." });
     //information

       function goToLink883() { infowindow883.open(map,marker883); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker883, 'click', goToLink883); google.maps.event.addDomListener(window, 'load', initialize);

    //MARCADOR 884 
    //positions 
    var point884 = new google.maps.LatLng(14.042895, -88.945200); 
    var contentString884 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">RENACER EN VERACRUZ.</h1>'+ '<div id="bodyContent">'+ '<p><b>RENACER EN VERACRUZ.</b> , — 08  de  Agosto de  1995.  Dirección: Colonia  Veracruz.  Días y horas  de  reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.  Miembros asistentes: 18 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow884 = new google.maps.InfoWindow({ content: contentString884 }); 
    //markers 
    var marker884 = new google.maps.Marker({ position: point884, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "884.RENACER EN VERACRUZ." }); 
    //information 

     function goToLink884() { infowindow884.open(map,marker884); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker884, 'click', goToLink884); google.maps.event.addDomListener(window, 'load', initialize);

    //MARCADOR 885 
    //positions 
    var point885 = new google.maps.LatLng(14.044139, -88.933212); 
    var contentString885 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UNA LUZ EN EL CALVARIO.</h1>'+ '<div id="bodyContent">'+ '<p><b>UNA LUZ EN EL CALVARIO.</b> , — 01 de Diciembre de 2013. Dirección: Barrio El Calvario. Días y horas  de  reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.  Miembros asistentes: 14 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow885 = new google.maps.InfoWindow({ content: contentString885 }); 
    //markers 
    var marker885 = new google.maps.Marker({ position: point885, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "885.UNA LUZ EN EL CALVARIO." }); 
    //information 

     function goToLink885() { infowindow885.open(map,marker885); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker885, 'click', goToLink885); google.maps.event.addDomListener(window, 'load', initialize);

    //MARCADOR 886 
    //positions 
    var point886 = new google.maps.LatLng(14.022143, -88.882628); 
    var contentString886 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UNA LUZ EN GUARGILA.</h1>'+ '<div id="bodyContent">'+ '<p><b>UNA LUZ EN GUARGILA.</b> , — 14 de Abril de 2012. Dirección: Cantón Guargila. Días y horas  de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow886 = new google.maps.InfoWindow({ content: contentString886 }); 
    //markers 
    var marker886 = new google.maps.Marker({ position: point886, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "886.UNA LUZ EN GUARGILA." }); 
    //information 

     function goToLink886() { infowindow886.open(map,marker886); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker886, 'click', goToLink886); google.maps.event.addDomListener(window, 'load', initialize);

    //MARCADOR 887 
    //positions 
    var point887 = new google.maps.LatLng(14.153141, -89.006600); 
    var contentString887 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">AMANECER  FELIZ.</h1>'+ '<div id="bodyContent">'+ '<p><b>AMANECER  FELIZ.</b> , — 26 de Noviembre de 2004. Dirección: Cantón Gutiérrez. Días y horas de reuniones: De Lunes a Domingo de 5:00 a 7:00 p.m.</p>'+ '</div>'+ '</div>'; var infowindow887 = new google.maps.InfoWindow({ content: contentString887 }); 
    //markers 
    var marker887 = new google.maps.Marker({ position: point887, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "887.AMANECER  FELIZ." });
     //information 
      function goToLink887() { infowindow887.open(map,marker887); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker887, 'click', goToLink887); google.maps.event.addDomListener(window, 'load', initialize);

    //MARCADOR 888 
    //positions 
    var point888 = new google.maps.LatLng(14.155294, -89.015072); 
    var contentString888 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">BIENVENIDOS.</h1>'+ '<div id="bodyContent">'+ '<p><b>BIENVENIDOS.</b> , —  06  de  Marzo  de  1983.   Dirección:   Caserío La Cumbre. Días y horas  de reuniones: De Lunes a Domingo de 5:00 a 7:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow888 = new google.maps.InfoWindow({ content: contentString888 }); 
    //markers 
    var marker888 = new google.maps.Marker({ position: point888, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "888.BIENVENIDOS." });
     //information
       function goToLink888() { infowindow888.open(map,marker888); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker888, 'click', goToLink888); google.maps.event.addDomListener(window, 'load', initialize);

    //MARCADOR 889 
    //positions 
    var point889 = new google.maps.LatLng(14.162395, -89.009815); 
    var contentString889 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">BUSCANDO LIBERACIÓN.</h1>'+ '<div id="bodyContent">'+ '<p><b>BUSCANDO LIBERACIÓN.</b> , — 01 de Julio de 2004. Dirección: Barrio El Centro. Días y horas  de  reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m.  Miembros asistentes: 20 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow889 = new google.maps.InfoWindow({ content: contentString889 }); 
    //markers 
    var marker889 = new google.maps.Marker({ position: point889, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "889.BUSCANDO LIBERACIÓN." }); 
    //information 
     function goToLink889() { infowindow889.open(map,marker889); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker889, 'click', goToLink889); google.maps.event.addDomListener(window, 'load', initialize);

    //MARCADOR 890 
    //positions 
    var point890 = new google.maps.LatLng(14.159525, -89.016960); 
    var contentString890 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">EL DULCE  NOMBRE</h1>'+ '<div id="bodyContent">'+ '<p><b>EL DULCE  NOMBRE</b> , .— 20 de  Marzo de  1964.  Dirección:  Barrio El Centro. Días y horas  de  reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow890 = new google.maps.InfoWindow({ content: contentString890 }); 
    //markers 
    var marker890 = new google.maps.Marker({ position: point890, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "890.EL DULCE  NOMBRE" }); 
    //information 
     function goToLink890() { infowindow890.open(map,marker890); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker890, 'click', goToLink890); google.maps.event.addDomListener(window, 'load', initialize);

    //MARCADOR 891 
    //positions 
    var point891 = new google.maps.LatLng(14.144521, -89.003471); 
    var contentString891 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">RECUPERACIÓN Y VIDA.</h1>'+ '<div id="bodyContent">'+ '<p><b>RECUPERACIÓN Y VIDA.</b> , — 09 de Junio de 1996. Dirección: Cantón Sitios Arriba. Días y horas  de  reuniones: De  Lunes  a Domingo de 5:00 a 7:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow891 = new google.maps.InfoWindow({ content: contentString891 }); 
    //markers 
    var marker891 = new google.maps.Marker({ position: point891, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "891.RECUPERACIÓN Y VIDA." }); 
    //information 
     function goToLink891() { infowindow891.open(map,marker891); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker891, 'click', goToLink891); google.maps.event.addDomListener(window, 'load', initialize);

    //MARCADOR 892 
    //positions 
    var point892 = new google.maps.LatLng(14.138236, -89.001072); 
    var contentString892 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">RENACER 25 DE ABRIL.</h1>'+ '<div id="bodyContent">'+ '<p><b>RENACER 25 DE ABRIL.</b> , — 25 de Abril de 1995.  Dirección:  Cantón Los Achiotes. Días y horas  de  reuniones: De Lunes  a Domingo de 5:00 a 7:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow892 = new google.maps.InfoWindow({ content: contentString892 }); 
    //markers 
    var marker892 = new google.maps.Marker({ position: point892, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "892.RENACER 25 DE ABRIL." }); 
    //information 
     function goToLink892() { infowindow892.open(map,marker892); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker892, 'click', goToLink892); google.maps.event.addDomListener(window, 'load', initialize);

    //MARCADOR 893 
    //positions 
    var point893 = new google.maps.LatLng(14.115825, -89.032420); 
    var contentString893 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">SIEMPRE UNIDOS.</h1>'+ '<div id="bodyContent">'+ '<p><b>SIEMPRE UNIDOS.</b> , — 01 de Noviembre de 1980. Dirección: Cantón Los Sitios Abajo. Días y horas de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow893 = new google.maps.InfoWindow({ content: contentString893 }); 
    //markers 
    var marker893 = new google.maps.Marker({ position: point893, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "893.SIEMPRE UNIDOS." }); 
    //information 
     function goToLink893() { infowindow893.open(map,marker893); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker893, 'click', goToLink893); google.maps.event.addDomListener(window, 'load', initialize);

    //MARCADOR 894 
    //positions 
    var point894 = new google.maps.LatLng(14.177547, -88.920902); 
    var contentString894 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">DIOS ES AMOR.</h1>'+ '<div id="bodyContent">'+ '<p><b>DIOS ES AMOR.</b> , — 30 de Julio de 2002. Dirección: Barrio El Centro. Días y horas  de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m. Miembros asistentes: 7 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow894 = new google.maps.InfoWindow({ content: contentString894 }); 
    //markers 
    var marker894 = new google.maps.Marker({ position: point894, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "894.DIOS ES AMOR." }); 
    //information 
     function goToLink894() { infowindow894.open(map,marker894); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker894, 'click', goToLink894); google.maps.event.addDomListener(window, 'load', initialize);

    //MARCADOR 895 
    //positions 
    var point895 = new google.maps.LatLng(14.111921, -89.069302); 
    var contentString895 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">DESPERTAR EN  EL PARAÍSO.</h1>'+ '<div id="bodyContent">'+ '<p><b>DESPERTAR EN  EL PARAÍSO.</b> , —  16  de   Noviembre  de   1972. Dirección:  Barrio La Vega.  Días y horas  de  reuniones: De  Lunes  a Domingo de  5:00  a 7:00  p.m.  Miembros asistentes: 20 Hombres y</p>'+ '</div>'+ '</div>'; var infowindow895 = new google.maps.InfoWindow({ content: contentString895 }); 
    //markers 
    var marker895 = new google.maps.Marker({ position: point895, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "895.DESPERTAR EN  EL PARAÍSO." }); 
    //information 
     function goToLink895() { infowindow895.open(map,marker895); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker895, 'click', goToLink895); google.maps.event.addDomListener(window, 'load', initialize);

    //MARCADOR 896 
    //positions 
    var point896 = new google.maps.LatLng(14.107507, -89.071001); 
    var contentString896 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">HAY UNA SOLUCIÓN.</h1>'+ '<div id="bodyContent">'+ '<p><b>HAY UNA SOLUCIÓN.</b> , — 27 de Octubre de 1985. Dirección:  Barrio El Calvario. Días y horas  de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.  Miembros asistentes: 30 Hombres y 2 Mujeres.</p>'+ '</div>'+ '</div>'; var infowindow896 = new google.maps.InfoWindow({ content: contentString896 }); 
    //markers 
    var marker896 = new google.maps.Marker({ position: point896, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "896.HAY UNA SOLUCIÓN." }); 
    //information 
     function goToLink896() { infowindow896.open(map,marker896); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker896, 'click', goToLink896); google.maps.event.addDomListener(window, 'load', initialize);

    //MARCADOR 897 
    //positions 
    var point897 = new google.maps.LatLng(14.105476, -89.067875); 
    var contentString897 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">LUCHAR POR  MI RECUPERACIÓN.</h1>'+ '<div id="bodyContent">'+ '<p><b>LUCHAR POR  MI RECUPERACIÓN.</b> , — 22  de   Marzo  de   2007. Dirección:  Colonia  Santa  Fe. Días y horas  de  reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m.  Miembros asistentes: 3 Hombres y 2</p>'+ '</div>'+ '</div>'; var infowindow897 = new google.maps.InfoWindow({ content: contentString897 }); 
    //markers 
    var marker897 = new google.maps.Marker({ position: point897, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "897.LUCHAR POR  MI RECUPERACIÓN." }); 
    //information
      function goToLink897() { infowindow897.open(map,marker897); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker897, 'click', goToLink897); google.maps.event.addDomListener(window, 'load', initialize);

    //MARCADOR 898 
    //positions 
    var point898 = new google.maps.LatLng(14.107904, -89.073231); 
    var contentString898 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UN NUEVO MODO DE VIVIR.</h1>'+ '<div id="bodyContent">'+ '<p><b>UN NUEVO MODO DE VIVIR.</b> , — 22 de Febrero de 1993. Dirección: Calle  Nueva.  Días y horas  de  reuniones: De  Lunes  a Domingo de 6:00 a 8:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow898 = new google.maps.InfoWindow({ content: contentString898 }); 
    //markers 
    var marker898 = new google.maps.Marker({ position: point898, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "898.UN NUEVO MODO DE VIVIR." });
     //information 
      function goToLink898() { infowindow898.open(map,marker898); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker898, 'click', goToLink898); google.maps.event.addDomListener(window, 'load', initialize);

    //MARCADOR 899 
    //positions 
    var point899 = new google.maps.LatLng(14.165885, -88.942400); 
    var contentString899 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">DIOS  CON  NOSOTROS.</h1>'+ '<div id="bodyContent">'+ '<p><b>DIOS  CON  NOSOTROS.</b> , —  13  de  Octubre de  1966.   Dirección: Cantón Los Guevara. Días y horas de reuniones: De Lunes a Domingo de 5:00 a 7:00 p.m.  Miembros asistentes: 5 Hombres y 2 Mujeres.</p>'+ '</div>'+ '</div>'; var infowindow899 = new google.maps.InfoWindow({ content: contentString899 });
     //markers
      var marker899 = new google.maps.Marker({ position: point899, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "899.DIOS  CON  NOSOTROS." }); 
      //information 
       function goToLink899() { infowindow899.open(map,marker899); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker899, 'click', goToLink899); google.maps.event.addDomListener(window, 'load', initialize);

    //MARCADOR 900 
    //positions 
    var point900 = new google.maps.LatLng(14.164529, -88.937581); 
    var contentString900 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">LÁGRIMAS DE UNA  MADRE.</h1>'+ '<div id="bodyContent">'+ '<p><b>LÁGRIMAS DE UNA  MADRE.</b> , — 14 de  Abril de  1974.  Dirección: Cantón Pacayas. Días y horas de reuniones: De Lunes a Domingo de 4:30 a 6:30 p.m.</p>'+ '</div>'+ '</div>'; var infowindow900 = new google.maps.InfoWindow({ content: contentString900 }); 
    //markers 
    var marker900 = new google.maps.Marker({ position: point900, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "900.LÁGRIMAS DE UNA  MADRE." }); 
    //information 
     function goToLink900() { infowindow900.open(map,marker900); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker900, 'click', goToLink900); google.maps.event.addDomListener(window, 'load', initialize);

    //MARCADOR 901 
    //positions 
    var point901 = new google.maps.LatLng(14.156182, -88.940996); 
    var contentString901 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">LAGUNA DE SOBRIEDAD.</h1>'+ '<div id="bodyContent">'+ '<p><b>LAGUNA DE SOBRIEDAD.</b> , — 25 de Diciembre de 1975.  Dirección: Barrio El Centro. Días y horas de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow901 = new google.maps.InfoWindow({ content: contentString901 });
    //markers 
    var marker901 = new google.maps.Marker({ position: point901, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "901.LAGUNA DE SOBRIEDAD." }); 
    //information 
     function goToLink901() { infowindow901.open(map,marker901); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker901, 'click', goToLink901); google.maps.event.addDomListener(window, 'load', initialize);

    //MARCADOR 902 
    //positions 
    var point902 = new google.maps.LatLng(14.151463, -88.941893); 
    var contentString902 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NACER A UNA NUEVA VIDA.</h1>'+ '<div id="bodyContent">'+ '<p><b>NACER A UNA NUEVA VIDA.</b> , — 30 de  Enero  de  2012.  Dirección: Cantón Pacayas. Días y horas de reuniones: De Lunes a Domingo de 5:00 a 7:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow902 = new google.maps.InfoWindow({ content: contentString902 }); 
    //markers 
    var marker902 = new google.maps.Marker({ position: point902, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "902.NACER A UNA NUEVA VIDA." }); 
    //information 
     function goToLink902() { infowindow902.open(map,marker902); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker902, 'click', goToLink902); google.maps.event.addDomListener(window, 'load', initialize);

    //MARCADOR 903 
    //positions 
    var point903 = new google.maps.LatLng(14.164174, -88.943047); 
    var contentString903 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">RAYO DE LUZ.</h1>'+ '<div id="bodyContent">'+ '<p><b>RAYO DE LUZ.</b> , — 15  de  Agosto de  1976.  Dirección:  Cantón San José. Días y horas  de  reuniones: De  Lunes  a Domingo de  4:30  a 6:30 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow903 = new google.maps.InfoWindow({ content: contentString903 }); 
    //markers 
    var marker903 = new google.maps.Marker({ position: point903, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "903.RAYO DE LUZ." }); 
    //information 
     function goToLink903() { infowindow903.open(map,marker903); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker903, 'click', goToLink903); google.maps.event.addDomListener(window, 'load', initialize);

    //MARCADOR 904 
    //positions 
    var point904 = new google.maps.LatLng(14.165837, -88.953540); 
    var contentString904 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">RENACER 05 DE MAYO.</h1>'+ '<div id="bodyContent">'+ '<p><b>RENACER 05 DE MAYO.</b> , — 05 de Mayo de 1992.  Dirección:  Barrio El Calvario. Días y horas  de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow904 = new google.maps.InfoWindow({ content: contentString904 }); 
    //markers 
    var marker904 = new google.maps.Marker({ position: point904, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "904.RENACER 05 DE MAYO." }); 
    //information 
     function goToLink904() { infowindow904.open(map,marker904); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker904, 'click', goToLink904); google.maps.event.addDomListener(window, 'load', initialize);

    //MARCADOR 905 
    //positions 
    var point905 = new google.maps.LatLng(14.159813, -88.954577); 
    var contentString905 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">RENACER FELIZ.</h1>'+ '<div id="bodyContent">'+ '<p><b>RENACER FELIZ.</b> , — 15 de  Agosto de  1975.  Dirección:  Cantón Los Prados. Días y horas  de  reuniones: De Lunes a Domingo de  5:00 a 7:00 p.m.</p>'+ '</div>'+ '</div>'; var infowindow905 = new google.maps.InfoWindow({ content: contentString905 }); 
    //markers 
    var marker905 = new google.maps.Marker({ position: point905, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "905.RENACER FELIZ." }); 
    //information 
     function goToLink905() { infowindow905.open(map,marker905); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker905, 'click', goToLink905); google.maps.event.addDomListener(window, 'load', initialize);

    //MARCADOR 906 
    //positions 
    var point906 = new google.maps.LatLng(14.166262, -88.948740); 
    var contentString906 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">VIVIENDO EN SOBRIEDAD.</h1>'+ '<div id="bodyContent">'+ '<p><b>VIVIENDO EN SOBRIEDAD.</b> , — 25 de  Agosto de  2007.  Dirección: Caserío La Aldea.  Días y horas  de  reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow906 = new google.maps.InfoWindow({ content: contentString906 }); 
    //markers 
    var marker906 = new google.maps.Marker({ position: point906, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "906.VIVIENDO EN SOBRIEDAD." }); 
    //information 
     function goToLink906() { infowindow906.open(map,marker906); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker906, 'click', goToLink906); google.maps.event.addDomListener(window, 'load', initialize);

    //MARCADOR 907 
    //positions 
    var point907 = new google.maps.LatLng(14.316768, -89.175246); 
    var contentString907 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">10 DE MAYO.</h1>'+ '<div id="bodyContent">'+ '<p><b>10 DE MAYO.</b> , — 10 de Mayo de 2012.  Dirección:  Barrio El Tránsito. Días y horas  de reuniones: De Lunes a Domingo de 7:00 a 9:00 p.m. Miembros asistentes: 15 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow907 = new google.maps.InfoWindow({ content: contentString907 }); 
    //markers 
    var marker907 = new google.maps.Marker({ position: point907, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "907.10 DE MAYO." }); 
    //information 
     function goToLink907() { infowindow907.open(map,marker907); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker907, 'click', goToLink907); google.maps.event.addDomListener(window, 'load', initialize);

    //MARCADOR 908 
    //positions 
    var point908 = new google.maps.LatLng(14.310251, -89.166675); 
    var contentString908 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">APOCALÍPSIS.</h1>'+ '<div id="bodyContent">'+ '<p><b>APOCALÍPSIS.</b> , — 16  de  Septiembre de  2009.  Dirección:  Cantón Los Planes.  Días y horas  de reuniones: De Lunes a Domingo de 5:00 a 7:00 p.m.  Miembros asistentes: 8 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow908 = new google.maps.InfoWindow({ content: contentString908 }); 
    //markers 
    var marker908 = new google.maps.Marker({ position: point908, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "908.APOCALÍPSIS." }); 
    //information 
     function goToLink908() { infowindow908.open(map,marker908); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker908, 'click', goToLink908); google.maps.event.addDomListener(window, 'load', initialize);

    //MARCADOR 909 
    //positions 
    var point909 = new google.maps.LatLng(14.312265, -89.165961); 
    var contentString909 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">EL MILAGRO.</h1>'+ '<div id="bodyContent">'+ '<p><b>EL MILAGRO.</b> , — 17 de  Noviembre de  1971.  Dirección:  Barrio San Antonio.  Días y horas  de reuniones: De Lunes a Domingo de 7:00 a 9:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow909 = new google.maps.InfoWindow({ content: contentString909 }); 
    //markers 
    var marker909 = new google.maps.Marker({ position: point909, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "909.EL MILAGRO." }); 
    //information 
     function goToLink909() { infowindow909.open(map,marker909); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker909, 'click', goToLink909); google.maps.event.addDomListener(window, 'load', initialize);

    //MARCADOR 910
     //positions
      var point910 = new google.maps.LatLng(14.315136, -89.173093);
       var contentString910 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NUEVO RENACER 05  DE NOVIEMBRE.</h1>'+ '<div id="bodyContent">'+ '<p><b>NUEVO RENACER 05  DE NOVIEMBRE.</b> , — 05 de  Noviembre de 1991. Dirección: Cantón San José Sacáre. Días y horas de reuniones: De  Lunes  a Domingo de  6:00  a 8:00  p.m.  </p>'+ '</div>'+ '</div>'; var infowindow910 = new google.maps.InfoWindow({ content: contentString910 }); 
       //markers 
       var marker910 = new google.maps.Marker({ position: point910, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "910.NUEVO RENACER 05  DE NOVIEMBRE." }); 
       //information 
        function goToLink910() { infowindow910.open(map,marker910); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker910, 'click', goToLink910); google.maps.event.addDomListener(window, 'load', initialize);

    //MARCADOR 911 
    //positions 
    var point911 = new google.maps.LatLng(14.194575, -89.153633); 
    var contentString911 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NACIO UNA ESPERANZA.</h1>'+ '<div id="bodyContent">'+ '<p><b>NACIO UNA ESPERANZA.</b> , — 27 de Septiembre de 1991. Dirección: Cantón El Tigre. Días y horas  de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.</p>'+ '</div>'+ '</div>'; var infowindow911 = new google.maps.InfoWindow({ content: contentString911 }); 
    //markers 
    var marker911 = new google.maps.Marker({ position: point911, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "911.NACIO UNA ESPERANZA." }); 
    //information 
     function goToLink911() { infowindow911.open(map,marker911); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker911, 'click', goToLink911); google.maps.event.addDomListener(window, 'load', initialize);

    //MARCADOR 912 
    //positions 
    var point912 = new google.maps.LatLng(14.195045, -89.152131); 
    var contentString912 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NACIO UNA LUZ EN TILAPA.</h1>'+ '<div id="bodyContent">'+ '<p><b>NACIO UNA LUZ EN TILAPA.</b> , — 22 de  Enero  de  2011.  Dirección: Cantón Tilapa. Días y horas  de  reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.</p>'+ '</div>'+ '</div>'; var infowindow912 = new google.maps.InfoWindow({ content: contentString912 }); 
    //markers 
    var marker912 = new google.maps.Marker({ position: point912, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "912.NACIO UNA LUZ EN TILAPA." }); 
    //information 
     function goToLink912() { infowindow912.open(map,marker912); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker912, 'click', goToLink912); google.maps.event.addDomListener(window, 'load', initialize);

    //MARCADOR 913 
    //positions 
    var point913 = new google.maps.LatLng(14.196149, -89.151858); 
    var contentString913 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NUEVO RENACER.</h1>'+ '<div id="bodyContent">'+ '<p><b>NUEVO RENACER.</b> , — 26 de Agosto de 2010.  Dirección:  Cantón El Barrancón. Días y horas  de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow913 = new google.maps.InfoWindow({ content: contentString913 }); 
    //markers 
    var marker913 = new google.maps.Marker({ position: point913, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "913.NUEVO RENACER." }); 
    //information 
     function goToLink913() { infowindow913.open(map,marker913); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker913, 'click', goToLink913); google.maps.event.addDomListener(window, 'load', initialize);

    //MARCADOR 914 
    //positions 
    var point914 = new google.maps.LatLng(14.194898, -89.150356); 
    var contentString914 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">REGALITO DE DIOS.</h1>'+ '<div id="bodyContent">'+ '<p><b>REGALITO DE DIOS.</b> , — 19 de Octubre de 1999.  Dirección:  Cantón Montañita. Días y horas  de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow914 = new google.maps.InfoWindow({ content: contentString914 }); 
    //markers 
    var marker914 = new google.maps.Marker({ position: point914, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "914.REGALITO DE DIOS." }); 
    //information 
     function goToLink914() { infowindow914.open(map,marker914); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker914, 'click', goToLink914); google.maps.event.addDomListener(window, 'load', initialize);

    //MARCADOR 915 
    //positions 
    var point915 = new google.maps.LatLng(14.194619, -89.145516); 
    var contentString915 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">RENACER EN LA REYNA.</h1>'+ '<div id="bodyContent">'+ '<p><b>RENACER EN LA REYNA.</b> , — 13  de  Octubre de  2006.  Dirección: Barrio San Antonio.  Días y horas  de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow915 = new google.maps.InfoWindow({ content: contentString915 }); 
    //markers 
    var marker915 = new google.maps.Marker({ position: point915, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "915.RENACER EN LA REYNA." }); 
    //information
      function goToLink915() { infowindow915.open(map,marker915); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker915, 'click', goToLink915); google.maps.event.addDomListener(window, 'load', initialize);

    //MARCADOR 916 
    //positions 
    var point916 = new google.maps.LatLng(14.191750, -89.148717); 
    var contentString916 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">RENACER.</h1>'+ '<div id="bodyContent">'+ '<p><b>RENACER.</b> , — 01  de  Diciembre  de  2011.   Dirección:   Cantón Las Peñas. Días y horas  de  reuniones: De Lunes  a Domingo de  6:00  a 8:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow916 = new google.maps.InfoWindow({ content: contentString916 }); 
    //markers 
    var marker916 = new google.maps.Marker({ position: point916, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "916.RENACER." }); 
    //information 
     function goToLink916() { infowindow916.open(map,marker916); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker916, 'click', goToLink916); google.maps.event.addDomListener(window, 'load', initialize);

    //MARCADOR 917 
    //positions 
    var point917 = new google.maps.LatLng(14.194236, -89.148353); 
    var contentString917 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">RUEGOS DE UNA MADRE.</h1>'+ '<div id="bodyContent">'+ '<p><b>RUEGOS DE UNA MADRE.</b> , — 13 de  Octubre de  1982.  Dirección: Cantón Las Peñas. Días y horas  de  reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow917 = new google.maps.InfoWindow({ content: contentString917 }); 
    //markers 
    var marker917 = new google.maps.Marker({ position: point917, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "917.RUEGOS DE UNA MADRE." }); 
    //information 
     function goToLink917() { infowindow917.open(map,marker917); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker917, 'click', goToLink917); google.maps.event.addDomListener(window, 'load', initialize);

    //MARCADOR 918 
    //positions 
    var point918 = new google.maps.LatLng(14.195987, -89.148019); 
    var contentString918 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UNA LUZ EN PRIMAVERA.</h1>'+ '<div id="bodyContent">'+ '<p><b>UNA LUZ EN PRIMAVERA.</b> , — 09 de Septiembre de 1987. Dirección: Barrio La Primavera. Días y horas de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow918 = new google.maps.InfoWindow({ content: contentString918 });
     //markers
      var marker918 = new google.maps.Marker({ position: point918, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "918.UNA LUZ EN PRIMAVERA." }); 
      //information 
       function goToLink918() { infowindow918.open(map,marker918); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker918, 'click', goToLink918); google.maps.event.addDomListener(window, 'load', initialize);

    //MARCADOR 919 
    //positions 
    var point919 = new google.maps.LatLng(14.125370, -89.293293); 
    var contentString919 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">LIBERACIÓN.</h1>'+ '<div id="bodyContent">'+ '<p><b>LIBERACIÓN.</b> , — 28 de  Abril de  2011.  Dirección:  Barrio El Rosario. Días y horas  de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow919 = new google.maps.InfoWindow({ content: contentString919 });
     //markers
      var marker919 = new google.maps.Marker({ position: point919, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "919.LIBERACIÓN." }); 
      //information 
       function goToLink919() { infowindow919.open(map,marker919); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker919, 'click', goToLink919); google.maps.event.addDomListener(window, 'load', initialize);

    //MARCADOR 920 
    //positions 
    var point920 = new google.maps.LatLng(14.126360, -89.291200); 
    var contentString920 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">REDENCIÓN.</h1>'+ '<div id="bodyContent">'+ '<p><b>REDENCIÓN.</b> , — 20 de Febrero de1964. Dirección: Barrio El Rosario. Días y horas  de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow920 = new google.maps.InfoWindow({ content: contentString920 }); 
    //markers 
    var marker920 = new google.maps.Marker({ position: point920, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "920.REDENCIÓN." }); 
    //information 
     function goToLink920() { infowindow920.open(map,marker920); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker920, 'click', goToLink920); google.maps.event.addDomListener(window, 'load', initialize);

    //MARCADOR 921 
    //positions 
    var point921 = new google.maps.LatLng(14.130419, -89.287449); 
    var contentString921 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UNA LUZ EN EL CAMINO DE BILL.</h1>'+ '<div id="bodyContent">'+ '<p><b>UNA LUZ EN EL CAMINO DE BILL.</b> , — 07 de  Diciembre de  1978. Dirección:  Barrio El Centro. Días y horas  de  reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow921 = new google.maps.InfoWindow({ content: contentString921 }); 
    //markers 
    var marker921 = new google.maps.Marker({ position: point921, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "921.UNA LUZ EN EL CAMINO DE BILL." });
     //information 
      function goToLink921() { infowindow921.open(map,marker921); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker921, 'click', goToLink921); google.maps.event.addDomListener(window, 'load', initialize);

    //MARCADOR 922 
    //positions 
    var point922 = new google.maps.LatLng(14.181284, -88.892300); 
    var contentString922 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UN  MILAGRO EN  EL ZAPOTAL.</h1>'+ '<div id="bodyContent">'+ '<p><b>UN  MILAGRO EN  EL ZAPOTAL.</b> , — 29  de   Octubre  de   2011. Dirección:  Cantón El Zapotal. Días y horas  de  reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow922 = new google.maps.InfoWindow({ content: contentString922 }); 
    //markers 
    var marker922 = new google.maps.Marker({ position: point922, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "922.UN  MILAGRO EN  EL ZAPOTAL." }); 
    //information
      function goToLink922() { infowindow922.open(map,marker922); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker922, 'click', goToLink922); google.maps.event.addDomListener(window, 'load', initialize);

    //MARCADOR 923 
    //positions 
    var point923 = new google.maps.LatLng(14.004418, -88.896582); 
    var contentString923 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UNA  LUZ EN  LOS  RANCHOS.</h1>'+ '<div id="bodyContent">'+ '<p><b>UNA  LUZ EN  LOS  RANCHOS.</b> , —  29  de   Noviembre  de   2013. Dirección:  Barrio El Centro. Días y horas  de  reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow923 = new google.maps.InfoWindow({ content: contentString923 }); 
    //markers 
    var marker923 = new google.maps.Marker({ position: point923, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "923.UNA  LUZ EN  LOS  RANCHOS." });
     //information 
      function goToLink923() { infowindow923.open(map,marker923); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker923, 'click', goToLink923); google.maps.event.addDomListener(window, 'load', initialize);

    //MARCADOR 924 
    //positions 
    var point924 = new google.maps.LatLng(14.307650, -89.025264); 
    var contentString924 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">DIOS NOS ACOMPAÑA.</h1>'+ '<div id="bodyContent">'+ '<p><b>DIOS NOS ACOMPAÑA.</b> , — 04 de Julio de 2007. Dirección: Cantón San Juan  La Cruz. Días y horas  de  reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.</p>'+ '</div>'+ '</div>'; var infowindow924 = new google.maps.InfoWindow({ content: contentString924 }); 
    //markers 
    var marker924 = new google.maps.Marker({ position: point924, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "924.DIOS NOS ACOMPAÑA." }); 
    //information 
     function goToLink924() { infowindow924.open(map,marker924); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker924, 'click', goToLink924); google.maps.event.addDomListener(window, 'load', initialize);

    //MARCADOR 925
     //positions
      var point925 = new google.maps.LatLng(13.972358, -89.002143);
       var contentString925 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UN PODER SUPERIOR.</h1>'+ '<div id="bodyContent">'+ '<p><b>UN PODER SUPERIOR.</b> , — 02 de Julio de 1985.  Dirección:  Barrio El Centro. Días y horas  de  reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m.</p>'+ '</div>'+ '</div>'; var infowindow925 = new google.maps.InfoWindow({ content: contentString925 }); 
       //markers 
       var marker925 = new google.maps.Marker({ position: point925, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "925.UN PODER SUPERIOR." }); 
       //information
         function goToLink925() { infowindow925.open(map,marker925); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker925, 'click', goToLink925); google.maps.event.addDomListener(window, 'load', initialize);

    //MARCADOR 926 
    //positions 
    var point926 = new google.maps.LatLng(14.176992, -89.049005); 
    var contentString926 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">06  DE  AGOSTO.</h1>'+ '<div id="bodyContent">'+ '<p><b>06  DE  AGOSTO.</b> , —  06  de   Agosto de   2011.   Dirección:   Cantón Temendal. Días y horas  de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow926 = new google.maps.InfoWindow({ content: contentString926 }); 
    //markers 
    var marker926 = new google.maps.Marker({ position: point926, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "926.06  DE  AGOSTO." }); 
    //information 
     function goToLink926() { infowindow926.open(map,marker926); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker926, 'click', goToLink926); google.maps.event.addDomListener(window, 'load', initialize);

    //MARCADOR 927 
    //positions 
    var point927 = new google.maps.LatLng(14.199859, -89.052973); 
    var contentString927 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">DIOS ES AMOR.</h1>'+ '<div id="bodyContent">'+ '<p><b>DIOS ES AMOR.</b> , — 06 de  Febrero de  2010.  Dirección:  Cantón Los Naranjos. Días y horas  de  reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow927 = new google.maps.InfoWindow({ content: contentString927 }); 
    //markers 
    var marker927 = new google.maps.Marker({ position: point927, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "927.DIOS ES AMOR." }); 
    //information 
     function goToLink927() { infowindow927.open(map,marker927); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker927, 'click', goToLink927); google.maps.event.addDomListener(window, 'load', initialize);

    //MARCADOR 928 
    //positions 
    var point928 = new google.maps.LatLng(14.178188, -89.050575); 
    var contentString928 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">MI NUEVO MUNDO</h1>'+ '<div id="bodyContent">'+ '<p><b>MI NUEVO MUNDO</b> , .—  11 de  Agosto de  2004.  Dirección:  Barrio  San Antonio.  Días y horas  de  reuniones: De  Lunes  a Domingo de 6:00 a 8:00 p.m.</p>'+ '</div>'+ '</div>'; var infowindow928 = new google.maps.InfoWindow({ content: contentString928 }); 
    //markers 
    var marker928 = new google.maps.Marker({ position: point928, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "928.MI NUEVO MUNDO" }); 
    //information 
     function goToLink928() { infowindow928.open(map,marker928); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker928, 'click', goToLink928); google.maps.event.addDomListener(window, 'load', initialize);

    //MARCADOR 929 
    //positions 
    var point929 = new google.maps.LatLng(14.339933, -89.177567); 
    var contentString929 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">04 DE SEPTIEMBRE.</h1>'+ '<div id="bodyContent">'+ '<p><b>04 DE SEPTIEMBRE.</b> , — 04 de Septiembre de 1983. Dirección: Barrio El Calvario Calle a Las Pilas. Días y horas  de  reuniones: De Lunes a Domingo de  6:00  a 8:00  p.m.  </p>'+ '</div>'+ '</div>'; var infowindow929 = new google.maps.InfoWindow({ content: contentString929 }); 
    //markers 
    var marker929 = new google.maps.Marker({ position: point929, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "929.04 DE SEPTIEMBRE." }); 
    //information 
     function goToLink929() { infowindow929.open(map,marker929); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker929, 'click', goToLink929); google.maps.event.addDomListener(window, 'load', initialize);

    //MARCADOR 930 
    //positions 
    var point930 = new google.maps.LatLng(14.339154, -89.177503); 
    var contentString930 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">AMOR DE MADRE.</h1>'+ '<div id="bodyContent">'+ '<p><b>AMOR DE MADRE.</b> , — 22 de  Marzo de  1980.  Dirección:  Cantón El Centro. Días y horas  de  reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m.</p>'+ '</div>'+ '</div>'; var infowindow930 = new google.maps.InfoWindow({ content: contentString930 }); 
    //markers 
    var marker930 = new google.maps.Marker({ position: point930, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "930.AMOR DE MADRE." }); 
    //information 
     function goToLink930() { infowindow930.open(map,marker930); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker930, 'click', goToLink930); google.maps.event.addDomListener(window, 'load', initialize);

    //MARCADOR 931 
    //positions 
    var point931 = new google.maps.LatLng(14.338003, -89.171951); 
    var contentString931 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">BROTE DE ESPERANZA.</h1>'+ '<div id="bodyContent">'+ '<p><b>BROTE DE ESPERANZA.</b> , — 11 de  Septiembre de  2010.  Dirección: Cantón Las  Granadillas. Días  y horas   de  reuniones: De  Lunes  a Domingo de 6:00 a 8:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow931 = new google.maps.InfoWindow({ content: contentString931 }); 
    //markers 
    var marker931 = new google.maps.Marker({ position: point931, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "931.BROTE DE ESPERANZA." }); 
    //information 
     function goToLink931() { infowindow931.open(map,marker931); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker931, 'click', goToLink931); google.maps.event.addDomListener(window, 'load', initialize);

    //MARCADOR 932 
    //positions 
    var point932 = new google.maps.LatLng(14.335853, -89.172727); 
    var contentString932 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">HÉROES EN SOBRIEDAD.</h1>'+ '<div id="bodyContent">'+ '<p><b>HÉROES EN SOBRIEDAD.</b> , — 05 de Septiembre de 1974. Dirección: Cantón El Rosario. Días y horas  de  reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow932 = new google.maps.InfoWindow({ content: contentString932 }); 
    //markers 
    var marker932 = new google.maps.Marker({ position: point932, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "932.HÉROES EN SOBRIEDAD." }); 
    //information 
     function goToLink932() { infowindow932.open(map,marker932); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker932, 'click', goToLink932); google.maps.event.addDomListener(window, 'load', initialize);

    //MARCADOR 933 
    //positions 
    var point933 = new google.maps.LatLng(14.338912, -89.173954); 
    var contentString933 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">LO MEJOR DE MI VIDA.</h1>'+ '<div id="bodyContent">'+ '<p><b>LO MEJOR DE MI VIDA.</b> , — 20 de Marzo de 2013. Dirección: Caserío Las Aradas  Cantón Las Piñas. Días y horas  de  reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow933 = new google.maps.InfoWindow({ content: contentString933 }); 
    //markers 
    var marker933 = new google.maps.Marker({ position: point933, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "933.LO MEJOR DE MI VIDA." }); 
    //information 
     function goToLink933() { infowindow933.open(map,marker933); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker933, 'click', goToLink933); google.maps.event.addDomListener(window, 'load', initialize);

    //MARCADOR 934 
    //positions 
    var point934 = new google.maps.LatLng(14.338720, -89.178663); 
    var contentString934 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">REGALO A  LAS MADRES.</h1>'+ '<div id="bodyContent">'+ '<p><b>REGALO A  LAS MADRES.</b> , —  11  de  Mayo  de  2009.   Dirección: Cantón Río Chiquito. Días y horas de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow934 = new google.maps.InfoWindow({ content: contentString934 }); 
    //markers 
    var marker934 = new google.maps.Marker({ position: point934, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "934.REGALO A  LAS MADRES." }); 
    //information 
     function goToLink934() { infowindow934.open(map,marker934); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker934, 'click', goToLink934); google.maps.event.addDomListener(window, 'load', initialize);

    //MARCADOR 935 
    //positions 
    var point935 = new google.maps.LatLng(14.337867, -89.179552); 
    var contentString935 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UNA LUZ EN LA FRONTERA.</h1>'+ '<div id="bodyContent">'+ '<p><b>UNA LUZ EN LA FRONTERA.</b> , — 21 de  Enero  de  1976.  Dirección: Cantón El Centro Las Pilas. Días y horas  de  reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow935 = new google.maps.InfoWindow({ content: contentString935 }); 
    //markers 
    var marker935 = new google.maps.Marker({ position: point935, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "935.UNA LUZ EN LA FRONTERA." }); 
    //information 
     function goToLink935() { infowindow935.open(map,marker935); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker935, 'click', goToLink935); google.maps.event.addDomListener(window, 'load', initialize);

    //MARCADOR 936 
    //positions 
    var point936 = new google.maps.LatLng(14.008837, -88.940538); 
    var contentString936 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">SAN  MIGUEL.</h1>'+ '<div id="bodyContent">'+ '<p><b>SAN  MIGUEL.</b> , — 28  de  Diciembre de  1969.  Dirección:  Barrio  El Centro. Días y horas  de  reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m.</p>'+ '</div>'+ '</div>'; var infowindow936 = new google.maps.InfoWindow({ content: contentString936 }); 
    //markers 
    var marker936 = new google.maps.Marker({ position: point936, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "936.SAN  MIGUEL." }); 
    //information 
     function goToLink936() { infowindow936.open(map,marker936); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker936, 'click', goToLink936); google.maps.event.addDomListener(window, 'load', initialize);

    //MARCADOR 937 
    //positions 
    var point937 = new google.maps.LatLng(14.009316, -88.938661); 
    var contentString937 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UNA  LUZ EN  EL MATAZANO.</h1>'+ '<div id="bodyContent">'+ '<p><b>UNA  LUZ EN  EL MATAZANO.</b> , —  23  de   Septiembre de   2001. Dirección: Cantón El Matazano. Días y horas de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow937 = new google.maps.InfoWindow({ content: contentString937 }); 
    //markers 
    var marker937 = new google.maps.Marker({ position: point937, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "937.UNA  LUZ EN  EL MATAZANO." }); 
    //information 
     function goToLink937() { infowindow937.open(map,marker937); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker937, 'click', goToLink937); google.maps.event.addDomListener(window, 'load', initialize);

    //MARCADOR 938 
    //positions 
    var point938 = new google.maps.LatLng(14.134297, -89.028216); 
    var contentString938 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">MI ESPERANZA.</h1>'+ '<div id="bodyContent">'+ '<p><b>MI ESPERANZA.</b> , — 19  de  Abril de  1975.  Dirección:  Cantón Ojos de Agua. Días y horas  de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow938 = new google.maps.InfoWindow({ content: contentString938 }); 
    //markers 
    var marker938 = new google.maps.Marker({ position: point938, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "938.MI ESPERANZA." }); 
    //information 
     function goToLink938() { infowindow938.open(map,marker938); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker938, 'click', goToLink938); google.maps.event.addDomListener(window, 'load', initialize);

    //MARCADOR 939 
    //positions 
    var point939 = new google.maps.LatLng(14.138997, -89.024707); 
    var contentString939 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">MI SALVACIÓN 07 DE MARZO.</h1>'+ '<div id="bodyContent">'+ '<p><b>MI SALVACIÓN 07 DE MARZO.</b> , — 07 de Marzo de 2007. Dirección: Barrio El Centro. Días y horas de reuniones: De Lunes a Domingo de 5:00 a 7:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow939 = new google.maps.InfoWindow({ content: contentString939 }); 
    //markers 
    var marker939 = new google.maps.Marker({ position: point939, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "939.MI SALVACIÓN 07 DE MARZO." }); 
    //information 
     function goToLink939() { infowindow939.open(map,marker939); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker939, 'click', goToLink939); google.maps.event.addDomListener(window, 'load', initialize);

    //MARCADOR 940 
    //positions 
    var point940 = new google.maps.LatLng(14.131976, -89.024084); 
    var contentString940 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NUEVA VIDA.</h1>'+ '<div id="bodyContent">'+ '<p><b>NUEVA VIDA.</b> , — 28 de Noviembre de 2011.  Dirección:  Cantón Los Sitios. Días y horas  de  reuniones: De Lunes  a Domingo de  6:00  a 8:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow940 = new google.maps.InfoWindow({ content: contentString940 }); 
    //markers 
    var marker940 = new google.maps.Marker({ position: point940, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "940.NUEVA VIDA." }); 
    //information
      function goToLink940() { infowindow940.open(map,marker940); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker940, 'click', goToLink940); google.maps.event.addDomListener(window, 'load', initialize);

    //MARCADOR 941 
    //positions 
    var point941 = new google.maps.LatLng(14.130227, -89.043897); 
    var contentString941 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">RENACER EN BUENA VISTA.</h1>'+ '<div id="bodyContent">'+ '<p><b>RENACER EN BUENA VISTA.</b> , — 20 de Agosto de 2011.  Dirección: Cantón Buena Vista. Días y horas de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow941 = new google.maps.InfoWindow({ content: contentString941 }); 
    //markers 
    var marker941 = new google.maps.Marker({ position: point941, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "941.RENACER EN BUENA VISTA." }); 
    //information 
     function goToLink941() { infowindow941.open(map,marker941); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker941, 'click', goToLink941); google.maps.event.addDomListener(window, 'load', initialize);

    //MARCADOR 942 
    //positions 
    var point942 = new google.maps.LatLng(14.103512, -89.023725); 
    var contentString942 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">EL REMEDIO.</h1>'+ '<div id="bodyContent">'+ '<p><b>EL REMEDIO.</b> , — 19 de  Marzo de  1974.  Dirección:  Cantón Piedras Gordas. Días y horas  de  reuniones: De Lunes a Domingo de  5:00 a 7:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow942 = new google.maps.InfoWindow({ content: contentString942 }); 
    //markers 
    var marker942 = new google.maps.Marker({ position: point942, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "942.EL REMEDIO." }); 
    //information
      function goToLink942() { infowindow942.open(map,marker942); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker942, 'click', goToLink942); google.maps.event.addDomListener(window, 'load', initialize);

    //MARCADOR 943 
    //positions 
    var point943 = new google.maps.LatLng(14.127796, -89.005405); 
    var contentString943 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">GRITO DE LIBERTAD.</h1>'+ '<div id="bodyContent">'+ '<p><b>GRITO DE LIBERTAD.</b> , — 14 de  Mayo de  1966.  Dirección:  Barrio El Centro. Días y horas  de  reuniones: De Lunes a Domingo de  5:00 a 7:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow943 = new google.maps.InfoWindow({ content: contentString943 }); 
    //markers 
    var marker943 = new google.maps.Marker({ position: point943, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "943.GRITO DE LIBERTAD." }); 
    //information 
     function goToLink943() { infowindow943.open(map,marker943); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker943, 'click', goToLink943); google.maps.event.addDomListener(window, 'load', initialize);

    //MARCADOR 944 
    //positions 
    var point944 = new google.maps.LatLng(14.121440, -89.006012); 
    var contentString944 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">LUZ EN MI CAMINO.</h1>'+ '<div id="bodyContent">'+ '<p><b>LUZ EN MI CAMINO.</b> , — 14 de Octubre de 2005. Dirección: Colonia El Sol. Días y horas  de  reuniones: De Lunes  a Domingo de  5:00  a 7:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow944 = new google.maps.InfoWindow({ content: contentString944 }); 
    //markers 
    var marker944 = new google.maps.Marker({ position: point944, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "944.LUZ EN MI CAMINO." }); 
    //information 
     function goToLink944() { infowindow944.open(map,marker944); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker944, 'click', goToLink944); google.maps.event.addDomListener(window, 'load', initialize);

    //MARCADOR 945 
    //positions 
    var point945 = new google.maps.LatLng(14.127090, -89.013174); 
    var contentString945 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">SAN  MIGUEL.</h1>'+ '<div id="bodyContent">'+ '<p><b>SAN  MIGUEL.</b> , — 04  de   Mayo  de   2001.   Dirección:   Cantón  San Miguel  Tobías.  Días y horas  de  reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow945 = new google.maps.InfoWindow({ content: contentString945 }); 
    //markers 
    var marker945 = new google.maps.Marker({ position: point945, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "945.SAN  MIGUEL." }); 
    //information 
     function goToLink945() { infowindow945.open(map,marker945); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker945, 'click', goToLink945); google.maps.event.addDomListener(window, 'load', initialize);

    //MARCADOR 946 
    //positions 
    var point946 = new google.maps.LatLng(14.171312, -89.109885); 
    var contentString946 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">03  DE MARZO.</h1>'+ '<div id="bodyContent">'+ '<p><b>03  DE MARZO.</b> , — 03 de  Marzo de  1984.  Dirección:  Hacienda San Juan  Colima.  Días y horas  de  reuniones: De Lunes  a Domingo de 5:00 a 7:00 p.m.  </p>'+ '</div>'+ '</div>'; var infowindow946 = new google.maps.InfoWindow({ content: contentString946 }); 
    //markers 
    var marker946 = new google.maps.Marker({ position: point946, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "946.03  DE MARZO." }); 
    //information 
     function goToLink946() { infowindow946.open(map,marker946); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker946, 'click', goToLink946); google.maps.event.addDomListener(window, 'load', initialize);

    //MARCADOR 947 
    //positions 
    var point947 = new google.maps.LatLng(14.171462, -89.098974); 
    var contentString947 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">06  DE ENERO.</h1>'+ '<div id="bodyContent">'+ '<p><b>06  DE ENERO.</b> , — 06  de  Enero  de  1972.  Dirección:  Caserío Valle Nuevo, Cantón Aguaje  Escondido. Días y horas  de  reuniones: De Lunes  a  Domingo de  5:00  a  7:00  p.m.  </p>'+ '</div>'+ '</div>'; var infowindow947 = new google.maps.InfoWindow({ content: contentString947 }); 
    //markers 
    var marker947 = new google.maps.Marker({ position: point947, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "947.06  DE ENERO." }); 
    //information 
     function goToLink947() { infowindow947.open(map,marker947); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker947, 'click', goToLink947); google.maps.event.addDomListener(window, 'load', initialize);

    //MARCADOR 948 
    //positions 
    var point948 = new google.maps.LatLng(14.168249, -89.100477); 
    var contentString948 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">20 DE MAYO.</h1>'+ '<div id="bodyContent">'+ '<p><b>20 DE MAYO.</b> , — 20 de Mayo de 1982. Dirección: Barrio Concepción. Días y horas  de reuniones: De Lunes a Domingo de 4:00 a 6:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow948 = new google.maps.InfoWindow({ content: contentString948 }); 
    //markers 
    var marker948 = new google.maps.Marker({ position: point948, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "948.20 DE MAYO." }); 
    //information 
     function goToLink948() { infowindow948.open(map,marker948); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker948, 'click', goToLink948); google.maps.event.addDomListener(window, 'load', initialize);

    //MARCADOR 949 
    //positions 
    var point949 = new google.maps.LatLng(14.170921, -89.101421); 
    var contentString949 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">25 DE MARZO.</h1>'+ '<div id="bodyContent">'+ '<p><b>25 DE MARZO.</b> , — 25 de Marzo de 2012. Dirección: Cantón Aldeíta. Días y horas  de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.</p>'+ '</div>'+ '</div>'; var infowindow949 = new google.maps.InfoWindow({ content: contentString949 }); 
    //markers 
    var marker949 = new google.maps.Marker({ position: point949, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "949.25 DE MARZO." }); 
    //information 
     function goToLink949() { infowindow949.open(map,marker949); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker949, 'click', goToLink949); google.maps.event.addDomListener(window, 'load', initialize);

    //MARCADOR 950 
    //positions 
    var point950 = new google.maps.LatLng(14.171490, -89.098359); 
    var contentString950 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">AMOR SIN PRECIO.</h1>'+ '<div id="bodyContent">'+ '<p><b>AMOR SIN PRECIO.</b> , — 01 de  Junio  de  1999.  Dirección:  Barrio San Antonio.  Días y horas  de reuniones: De Lunes a Domingo de 5:00 a 7:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow950 = new google.maps.InfoWindow({ content: contentString950 }); 
    //markers 
    var marker950 = new google.maps.Marker({ position: point950, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "950.AMOR SIN PRECIO." }); 
    //information 
     function goToLink950() { infowindow950.open(map,marker950); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker950, 'click', goToLink950); google.maps.event.addDomListener(window, 'load', initialize);

    //MARCADOR 951 
    //positions 
    var point951 = new google.maps.LatLng(14.176168, -89.093352); 
    var contentString951 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">AMOR Y PAZ.</h1>'+ '<div id="bodyContent">'+ '<p><b>AMOR Y PAZ.</b> , — 12 de  Febrero de  2001.  Dirección:  Río Matayate. Días y horas  de reuniones: De Lunes a Domingo de 5:00 a 7:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow951 = new google.maps.InfoWindow({ content: contentString951 }); 
    //markers 
    var marker951 = new google.maps.Marker({ position: point951, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "951.AMOR Y PAZ." });
     //information
       function goToLink951() { infowindow951.open(map,marker951); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker951, 'click', goToLink951); google.maps.event.addDomListener(window, 'load', initialize);

    //MARCADOR 952 
    //positions 
    var point952 = new google.maps.LatLng(14.170150, -89.090682); 
    var contentString952 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">LA GRACIA DE DIOS.</h1>'+ '<div id="bodyContent">'+ '<p><b>LA GRACIA DE DIOS.</b> , — 28 de Abril de 1982.  Dirección:  Cantón El Coyolito.  Días y horas  de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow952 = new google.maps.InfoWindow({ content: contentString952 }); 
    //markers 
    var marker952 = new google.maps.Marker({ position: point952, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "952.LA GRACIA DE DIOS." }); 
    //information 
     function goToLink952() { infowindow952.open(map,marker952); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker952, 'click', goToLink952); google.maps.event.addDomListener(window, 'load', initialize);

    //MARCADOR 953 
    //positions 
    var point953 = new google.maps.LatLng(14.158254, -89.094218); 
    var contentString953 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">SAN  ANTONIO.</h1>'+ '<div id="bodyContent">'+ '<p><b>SAN  ANTONIO.</b> , —  31 de  Octubre de  1987.  Dirección:  Cantón El Salítre.  Días y horas  de  reuniones: De Lunes a Domingo de  6:00  a 8:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow953 = new google.maps.InfoWindow({ content: contentString953 }); 
    //markers 
    var marker953 = new google.maps.Marker({ position: point953, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "953.SAN  ANTONIO." });
     //information
       function goToLink953() { infowindow953.open(map,marker953); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker953, 'click', goToLink953); google.maps.event.addDomListener(window, 'load', initialize);

    //MARCADOR 954 
    //positions 
    var point954 = new google.maps.LatLng(14.158674, -89.102374); 
    var contentString954 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">SANTO  TOMÁS.</h1>'+ '<div id="bodyContent">'+ '<p><b>SANTO  TOMÁS.</b> , —  03  de  Enero  de  1971.  Dirección:  Barrio  San Antonio.  Días y horas  de reuniones: De Lunes a Domingo de 4:30 a 6:30 p.m.</p>'+ '</div>'+ '</div>'; var infowindow954 = new google.maps.InfoWindow({ content: contentString954 }); 
    //markers 
    var marker954 = new google.maps.Marker({ position: point954, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "954.SANTO  TOMÁS." });
     //information
       function goToLink954() { infowindow954.open(map,marker954); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker954, 'click', goToLink954); google.maps.event.addDomListener(window, 'load', initialize);

    //MARCADOR 955 
    //positions 
    var point955 = new google.maps.LatLng(14.181067, -89.084331); 
    var contentString955 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UNA VISIÓN PARA TÍ.</h1>'+ '<div id="bodyContent">'+ '<p><b>UNA VISIÓN PARA TÍ.</b> , — 11 de  Marzo de  2001.  Dirección:  Desvío Cantón Amayo. Días y horas  de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow955 = new google.maps.InfoWindow({ content: contentString955 }); 
    //markers 
    var marker955 = new google.maps.Marker({ position: point955, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "955.UNA VISIÓN PARA TÍ." });
     //information
       function goToLink955() { infowindow955.open(map,marker955); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker955, 'click', goToLink955); google.maps.event.addDomListener(window, 'load', initialize);

    //MARCADOR 956 
    //positions 
    var point956 = new google.maps.LatLng(14.170215, -89.100623); 
    var contentString956 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">VIDA Y ACCIÓN.</h1>'+ '<div id="bodyContent">'+ '<p><b>VIDA Y ACCIÓN.</b> , — 01 de Julio de 1974. Dirección: Barrio El Centro. Días y horas  de reuniones: De Lunes a Domingo de 4:00 a 6:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow956 = new google.maps.InfoWindow({ content: contentString956 }); 
    //markers 
    var marker956 = new google.maps.Marker({ position: point956, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "956.VIDA Y ACCIÓN." });
     //information
       function goToLink956() { infowindow956.open(map,marker956); if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker956, 'click', goToLink956); google.maps.event.addDomListener(window, 'load', initialize);
}