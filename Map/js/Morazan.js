

function initialize() {


    //Map parametrs
    var mapOptions = {
        zoom: 11,
        center: new google.maps.LatLng(13.7468575,-88.1017156),
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

    //positions
    var point1 = new google.maps.LatLng(13.9232737, -88.1330591);

    var contentString1 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Pura Vida.</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Pura Vida.</b>, 14 de Enero de 2014. Dirección: Barrio El Centro salida a Joateca. Días y horas de reuniones: De Lunes a Domingo de 5:00 a 7:00 p.m.</p>'+
      '</div>'+
      '</div>';

      var infowindow = new google.maps.InfoWindow({
      content: contentString1
  });
    //markers
    var marker1 = new google.maps.Marker({
        position: point1,
        map: map,
        category: cook,
        icon: cook,
        animation: google.maps.Animation.DROP,
        title: "1.PURA VIDA"
    });



    //information for
    function goToLink() {
        infowindow.open(map,marker1);
        if (marker.getAnimation() != null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
         
    }
    google.maps.event.addListener(marker1, 'click', goToLink);
    google.maps.event.addDomListener(window, 'load', initialize);
    
  //MARCADOR 2
 
 //positions
    var point2 = new google.maps.LatLng(13.769554, -88.076314);

    var contentString2 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">ALEGRÍA DE VIVIR</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Alegría de Vivir</b>, 17 de Junio de 1978. Dirección: Caserío Estancia, Cantón Tierra Blanca. Días y horas de reuniones: Domingo, Martes, Jueves y Sábado de 4:00 a 6:00 p.m.</p>'+
      '</div>'+
      '</div>';

      var infowindow2 = new google.maps.InfoWindow({
      content: contentString2
  });
    //markers
    var marker2 = new google.maps.Marker({
        position: point2,
        map: map,
        category: cook,
        icon: cook,
        animation: google.maps.Animation.DROP,
        title: "2.ALEGRÍA DE VIVIR"

    });



    //information for
    function goToLink2() {
        infowindow2.open(map,marker2);
        if (marker.getAnimation() != null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
         
    }
    google.maps.event.addListener(marker2, 'click', goToLink2);
    google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 3
 
 //positions
    var point3 = new google.maps.LatLng(13.7706398,-88.079742);

    var contentString3 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">CAMBIO DE VIDA</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Cambio de Vida</b>,19 de Septiembre de 2002. Dirección: Caserío Llana El Nance, Cantón Sunzulaca. Días y horas de reuniones: De Lunes a Sábado de 3:00 a 5:00 p.m</p>'+
      '</div>'+
      '</div>';

      var infowindow3 = new google.maps.InfoWindow({
      content: contentString3
  });
    //markers
    var marker3 = new google.maps.Marker({
        position: point3,
        map: map,
        category: cook,
        icon: cook,
        animation: google.maps.Animation.DROP,
        title: "3.CAMBIO DE VIDA"

    });



    //information for
    function goToLink3() {
        infowindow3.open(map,marker3);
        if (marker.getAnimation() != null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
         
    }
    google.maps.event.addListener(marker3, 'click', goToLink3);
    google.maps.event.addDomListener(window, 'load', initialize);

    //MARCADOR 4
 
 //positions
    var point4 = new google.maps.LatLng(13.8165796,-88.0520599);

    var contentString4 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">FE Y ESPERANZA</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Fe y Esperanza</b> ,03 de Diciembre de 2005. Dirección: Cantón Agua Blanca, Caserío La Hacienda. Días y horas de reuniones: De Lunes a Sábado de 3:00 a 5:00 p.m.</p>'+
      '</div>'+
      '</div>';

      var infowindow4 = new google.maps.InfoWindow({
      content: contentString4
  });
    //markers
    var marker4 = new google.maps.Marker({
        position: point4,
        map: map,
        category: cook,
        icon: cook,
        animation: google.maps.Animation.DROP,
        title: "4.FE Y ESPERANZA"

    });



    //information for
    function goToLink4() {
        infowindow4.open(map,marker4);
        if (marker.getAnimation() != null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
         
    }
    google.maps.event.addListener(marker4, 'click', goToLink4);
    google.maps.event.addDomListener(window, 'load', initialize);

    //MARCADOR 5
 
 //positions
    var point5 = new google.maps.LatLng(13.772029, -88.078385);

    var contentString5 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">NUEVA LUZ EN MI CAMINO</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Nueva Luz en mi Camino</b> ,04 de Mayo de 2000. Dirección: Cantón Estancia, Caserío La Presa. Días y horas de reuniones: Lunes, Jueves y Sábado de 4:00 a 6:00 p.m.</p>'+
      '</div>'+
      '</div>';

      var infowindow5 = new google.maps.InfoWindow({
      content: contentString5
  });
    //markers
    var marker5 = new google.maps.Marker({
        position: point5,
        map: map,
        category: cook,
        icon: cook,
        animation: google.maps.Animation.DROP,
        title: "5.NUEVA LUZ EN MI CAMINO"

    });



    //information for
    function goToLink5() {
        infowindow5.open(map,marker5);
        if (marker.getAnimation() != null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
         
    }
    google.maps.event.addListener(marker5, 'click', goToLink5);
    google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 6
 
 //positions
    var point6 = new google.maps.LatLng(13.751146, -88.065634);

    var contentString6 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">NUEVOS HORIZONTES</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Nuevos Horizontes</b> ,14 de Septiembre de 1997. Dirección: Caserío Albania, Cantón Ocotío. Días y horas de reuniones: Martes, Jueves y Sábado de 3:00 a 5:00 p.m.</p>'+
      '</div>'+
      '</div>';

      var infowindow6 = new google.maps.InfoWindow({
      content: contentString6
  });
    //markers
    var marker6 = new google.maps.Marker({
        position: point6,
        map: map,
        category: cook,
        icon: cook,
        animation: google.maps.Animation.DROP,
        title: "6.NUEVOS HORIZONTES"

    });



    //information for
    function goToLink6() {
        infowindow6.open(map,marker6);
        if (marker.getAnimation() != null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
         
    }
    google.maps.event.addListener(marker6, 'click', goToLink6);
    google.maps.event.addDomListener(window, 'load', initialize);
    

//MARCADOR 7
 
 //positions
    var point7 = new google.maps.LatLng(13.773144, -88.078364);

    var contentString7 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">UN RAYO DE LUZ</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Un Rayo de Luz</b> ,10 de Junio de 1972. Dirección: Barrio El Centro a ½ Cuadra de Iglesia Católica. Días y horas de reuniones: De Lunes a Domingo de 4:00 a 6:00 p.m.</p>'+
      '</div>'+
      '</div>';

      var infowindow7 = new google.maps.InfoWindow({
      content: contentString7
  });
    //markers
    var marker7 = new google.maps.Marker({
        position: point7,
        map: map,
        category: cook,
        icon: cook,
        animation: google.maps.Animation.DROP,
        title: "7.UN RAYO DE LUZ"

    });



    //information for
    function goToLink7() {
        infowindow7.open(map,marker7);
        if (marker.getAnimation() != null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
         
    }
    google.maps.event.addListener(marker7, 'click', goToLink7);
    google.maps.event.addDomListener(window, 'load', initialize);
//MARCADOR 8
 
 //positions
    var point8 = new google.maps.LatLng(13.772404, -88.078997);

    var contentString8 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">REGALO DE DIOS</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Regalo de Dios</b> ,01 de Agosto de 2006. Dirección: Cantón Calavera, Caserío Matapalo. Días y horas de reuniones: Lunes, Miércoles y Sábado de 4:00 a 6:00 p.m.</p>'+
      '</div>'+
      '</div>';

      var infowindow8 = new google.maps.InfoWindow({
      content: contentString8
  });
    //markers
    var marker8 = new google.maps.Marker({
        position: point8,
        map: map,
        category: cook,
        icon: cook,
        animation: google.maps.Animation.DROP,
        title: "8.REGALO DE DIOS"

    });



    //information for
    function goToLink8() {
        infowindow8.open(map,marker8);
        if (marker.getAnimation() != null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
         
    }
    google.maps.event.addListener(marker8, 'click', goToLink8);
    google.maps.event.addDomListener(window, 'load', initialize);
    
//MARCADOR 9
 
 //positions
    var point9 = new google.maps.LatLng(13.811934, -88.012475);

    var contentString9 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">UN MILAGRO EN SAN MIGUEL ARCÁNGEL</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Un Milagro en Sas Miguel Arcángel</b>, 26 de Enero de 2012. Dirección: Cantón Guachipilín, Caserío San Miguelito. Días y horas de reuniones: De Lunes a Sábado de 3:00 a 5:00 p.m.</p>'+
      '</div>'+
      '</div>';

      var infowindow9 = new google.maps.InfoWindow({
      content: contentString9
  });
    //markers
    var marker9 = new google.maps.Marker({
        position: point9,
        map: map,
        category: cook,
        icon: cook,
        animation: google.maps.Animation.DROP,
        title: "9.UN MILAGRO EN SAN MIGUEL ARCÁNGEL"

    });



    //information for
    function goToLink9() {
        infowindow9.open(map,marker9);
        if (marker.getAnimation() != null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
         
    }
    google.maps.event.addListener(marker9, 'click', goToLink9);
    google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 10
 
 //positions
    var point10 = new google.maps.LatLng(13.770383, -88.075628);

    var contentString10 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">UNA ESTRELLA EN A.A.</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Una Estrella en A.A.</b> ,11 de Julio de 2013. Dirección: Cantón Junquillo Caserío El Campo. Días y horas de reuniones: de Lunes a Sábado de 4:00 a 6:00 p.m.</p>'+
      '</div>'+
      '</div>';

      var infowindow10 = new google.maps.InfoWindow({
      content: contentString10
  });
    //markers
    var marker10 = new google.maps.Marker({
        position: point10,
        map: map,
        category: cook,
        icon: cook,
        animation: google.maps.Animation.DROP,
        title: "10.UNA ESTRELLA EN A.A."

    });



    //information for
    function goToLink10() {
        infowindow10.open(map,marker10);
        if (marker.getAnimation() != null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
         
    }
    google.maps.event.addListener(marker10, 'click', goToLink10);
    google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 11
 
 //positions
    var point11 = new google.maps.LatLng(13.769236, -88.076808);

    var contentString11 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">UNA LUZ EN LAS VEGAS DE MASCULÍ</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Una Luz en las Vegas de Masculí</b> , 27 de Agosto de 1999. Dirección: Cantón Estancia, Caserío Masculí. Días y horas de reuniones: De Lunes a Domingo de 4:00 a 6:00 p.m.</p>'+
      '</div>'+
      '</div>';

      var infowindow11 = new google.maps.InfoWindow({
      content: contentString11
  });
    //markers
    var marker11 = new google.maps.Marker({
        position: point11,
        map: map,
        category: cook,
        icon: cook,
        animation: google.maps.Animation.DROP,
        title: "11.UNA LUZ EN LAS VEGAS DE MASCULÍ"

    });



    //information for
    function goToLink11() {
        infowindow11.open(map,marker11);
        if (marker.getAnimation() != null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
         
    }
    google.maps.event.addListener(marker11, 'click', goToLink11);
    google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 12
 
 //positions
    var point12 = new google.maps.LatLng(13.770216, -88.078546);

    var contentString12 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">VIVE Y DEJA VIVIR</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Vive y Deja Vivir</b> , 01 de Mayo de 2010. Dirección: Caserío La Crucita, Cantón Estancia. Días y horas de reuniones: De Lunes a Domingo de 4:00 a 6:00 p.m.</p>'+
      '</div>'+
      '</div>';

      var infowindow12 = new google.maps.InfoWindow({
      content: contentString12
  });
    //markers
    var marker12 = new google.maps.Marker({
        position: point12,
        map: map,
        category: cook,
        icon: cook,
        animation: google.maps.Animation.DROP,
        title: "12.VIVE Y DEJA VIVIR"

    });



    //information for
    function goToLink12() {
        infowindow12.open(map,marker12);
        if (marker.getAnimation() != null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
         
    }
    google.maps.event.addListener(marker12, 'click', goToLink12);
    google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 13
 
 //positions
    var point13 = new google.maps.LatLng(13.812566, -87.973259);

    var contentString13 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">FELICES PASCUAS</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Felices Pascuas</b> , 23 de Diciembre de 1978. Dirección: Cantón Corralito, Caserío Llano Grande, 3 Cuadras al Norte del Desvío El Naipe. Días y horas de reuniones: De Lunes a Domingo de 4:00 a 6:00 p.m.</p>'+
      '</div>'+
      '</div>';

      var infowindow13 = new google.maps.InfoWindow({
      content: contentString13
  });
    //markers
    var marker13 = new google.maps.Marker({
        position: point13,
        map: map,
        category: cook,
        icon: cook,
        animation: google.maps.Animation.DROP,
        title: "13.FELICES PASCUAS"

    });



    //information for
    function goToLink13() {
        infowindow13.open(map,marker13);
        if (marker.getAnimation() != null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
         
    }
    google.maps.event.addListener(marker13, 'click', goToLink13);
    google.maps.event.addDomListener(window, 'load', initialize);
 //MARCADOR 14
 
 //positions
    var point14 = new google.maps.LatLng(13.811774, -87.968951);

    var contentString14 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">NUEVO DESPERTAR 04 DE JUNIO</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Nuevo Despertar 04 de Junio</b> , 04 de Junio de 1972. Dirección: Cantón La Laguna, La Ermita, 3 Cuadras al Oriente del Complejo Educativo. Días y horas de reuniones: De Lunes a Domingo de 4:00 a 6:00 p.m.</p>'+
      '</div>'+
      '</div>';

      var infowindow14 = new google.maps.InfoWindow({
      content: contentString14
  });
    //markers
    var marker14 = new google.maps.Marker({
        position: point14,
        map: map,
        category: cook,
        icon: cook,
        animation: google.maps.Animation.DROP,
        title: "14.NUEVO DESPERTAR 04 DE JUNIO"

    });



    //information for
    function goToLink14() {
        infowindow4.open(map,marker14);
        if (marker.getAnimation() != null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
         
    }
    google.maps.event.addListener(marker14, 'click', goToLink14);
    google.maps.event.addDomListener(window, 'load', initialize);


//MARCADOR 15
 
 //positions
    var point15 = new google.maps.LatLng(13.811441, -87.972320);

    var contentString15 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">RECUPERACIÓN 04 DE DICIEMBRE</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Recuperación 04 de Diciembre</b> , 04 de Diciembre de 1971. Dirección: Barrio Las Delicias, Casa 81, 2ª Planta. Días y horas de reuniones: De Lunes a Domingo de 4:00 a 6:00 p.m.</p>'+
      '</div>'+
      '</div>';

      var infowindow15 = new google.maps.InfoWindow({
      content: contentString15
  });
    //markers
    var marker15 = new google.maps.Marker({
        position: point15,
        map: map,
        category: cook,
        icon: cook,
        animation: google.maps.Animation.DROP,
        title: "15.RECUPERACIÓN 04 DE DICIEMBRE"

    });



    //information for
    function goToLink15() {
        infowindow15.open(map,marker15);
        if (marker.getAnimation() != null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
         
    }
    google.maps.event.addListener(marker15, 'click', goToLink15);
    google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 16
 
 //positions
    var point16 = new google.maps.LatLng(13.807961, -87.972212);

    var contentString16 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">RECUPERACIÓN 21 DE MAYO</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Recuperación 21 de Mayo</b> ,  21 de Mayo de 2011. Dirección: Cantón Hondable, Caserío Altillo. Días y horas de reuniones: De Lunes a Viernes de 4:00 a 6:00 p.m.</p>'+
      '</div>'+
      '</div>';

      var infowindow16 = new google.maps.InfoWindow({
      content: contentString16
  });
    //markers
    var marker16 = new google.maps.Marker({
        position: point16,
        map: map,
        category: cook,
        icon: cook,
        animation: google.maps.Animation.DROP,
        title: "16.RECUPERACIÓN 21 DE MAYO"

    });



    //information for
    function goToLink16() {
        infowindow16.open(map,marker16);
        if (marker.getAnimation() != null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
         
    }
    google.maps.event.addListener(marker16, 'click', goToLink16);
    google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 17
 
 //positions
    var point17 = new google.maps.LatLng(13.810899, -87.968221);

    var contentString17 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">SENDERO DE PAZ</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Sendero de Paz</b> , 01 de Octubre de 1978. Dirección: Barrio El Calvario. Días y horas de reuniones: De Lunes a Domingo de 5:00 a 7:00 p.m.</p>'+
      '</div>'+
      '</div>';

      var infowindow17 = new google.maps.InfoWindow({
      content: contentString17
  });
    //markers
    var marker17 = new google.maps.Marker({
        position: point17,
        map: map,
        category: cook,
        icon: cook,
        animation: google.maps.Animation.DROP,
        title: "17.SENDERO DE PAZ"

    });



    //information for
    function goToLink17() {
        infowindow17.open(map,marker17);
        if (marker.getAnimation() != null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
         
    }
    google.maps.event.addListener(marker17, 'click', goToLink17);
    google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 18
 
 //positions
    var point18 = new google.maps.LatLng(13.807044, -87.967342);

    var contentString18 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">TERCERA TRADICIÓN.</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Tercera Tradición.</b> , 24 de Julio de 2006. Dirección: Cantón San Felipe, Caserío Babilonia. Días y horas de reuniones: De Lunes a Domingo de 4:00 a 6:00 p.m.</p>'+
      '</div>'+
      '</div>';

      var infowindow18 = new google.maps.InfoWindow({
      content: contentString18
  });
    //markers
    var marker18 = new google.maps.Marker({
        position: point18,
        map: map,
        category: cook,
        icon: cook,
        animation: google.maps.Animation.DROP,
        title: "18.TERCERA TRADICIÓN."

    });



    //information for
    function goToLink18() {
        infowindow18.open(map,marker18);
        if (marker.getAnimation() != null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
         
    }
    google.maps.event.addListener(marker18, 'click', goToLink18);
    google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 19
 
 //positions
    var point19 = new google.maps.LatLng(13.809420, -87.971032);

    var contentString19 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">UN MILAGRO EN MI CAMINO</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Un Milagro en mi Camino</b> , 14 de Octubre del 2000. Dirección: Cantón Hondable, Caserío Piedra Parada, Casa de Elario Álvarez Umaña. Días y horas de reuniones: Lunes, Miércoles y Viernes de 3:00 a 5:00 p.m.</p>'+
      '</div>'+
      '</div>';

      var infowindow19 = new google.maps.InfoWindow({
      content: contentString19
  });
    //markers
    var marker19 = new google.maps.Marker({
        position: point19,
        map: map,
        category: cook,
        icon: cook,
        animation: google.maps.Animation.DROP,
        title: "19.UN MILAGRO EN MI CAMINO"

    });



    //information for
    function goToLink19() {
        infowindow19.open(map,marker19);
        if (marker.getAnimation() != null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
         
    }
    google.maps.event.addListener(marker19, 'click', goToLink19);
    google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 20
 
 //positions
    var point20 = new google.maps.LatLng(13.811212, -87.966312);

    var contentString20 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">UN MILAGRO EN ROPILLA.</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Un Milagro en Ropilla</b> , 26 de Agosto de 2008. Dirección: Caserío Ropilla, Cantón San Felipe. Días y horas de reuniones: Martes, Jueves y Sábado de 4:00 a 6:00 p.m.</p>'+
      '</div>'+
      '</div>';

      var infowindow20 = new google.maps.InfoWindow({
      content: contentString20
  });
    //markers
    var marker20 = new google.maps.Marker({
        position: point20,
        map: map,
        category: cook,
        icon: cook,
        animation: google.maps.Animation.DROP,
        title: "20.UN MILAGRO EN ROPILLA."

    });



    //information for
    function goToLink20() {
        infowindow20.open(map,marker20);
        if (marker.getAnimation() != null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
         
    }
    google.maps.event.addListener(marker20, 'click', goToLink20);
    google.maps.event.addDomListener(window, 'load', initialize);
//MARCADOR 21
 
 //positions
    var point21 = new google.maps.LatLng(13.809982, -87.968736);

    var contentString21 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">UNA LUZ EN LLANO VERDE</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Una Luz En Llano Verde</b> , 02 de Julio de 1988. Dirección: Cantón Hondable, Llano Verde. Días y horas de reuniones: Lunes, Miércoles, Jueves y Sábado de 4:00 a 6:00 p.m.</p>'+
      '</div>'+
      '</div>';

      var infowindow21 = new google.maps.InfoWindow({
      content: contentString21
  });
    //markers
    var marker21 = new google.maps.Marker({
        position: point21,
        map: map,
        category: cook,
        icon: cook,
        animation: google.maps.Animation.DROP,
        title: "21.UNA LUZ EN LLANO VERDE"

    });



    //information for
    function goToLink21() {
        infowindow21.open(map,marker21);
        if (marker.getAnimation() != null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
         
    }
    google.maps.event.addListener(marker21, 'click', goToLink21);
    google.maps.event.addDomListener(window, 'load', initialize);
 //MARCADOR 22
 
 //positions
    var point22 = new google.maps.LatLng(13.722769, -88.121542);

    var contentString22 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">AQUÍ SOY FELIZ</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Aquí Soy Feliz</b> , 16 de Octubre de 1983. Dirección: Barrio El Calvario, salida a Lajitas Abajo. Días y horas de reuniones: De Lunes a Domingo de 5:00 a 7:00 p.m. </p>'+
      '</div>'+
      '</div>';

      var infowindow22 = new google.maps.InfoWindow({
      content: contentString22
  });
    //markers
    var marker22 = new google.maps.Marker({
        position: point22,
        map: map,
        category: cook,
        icon: cook,
        animation: google.maps.Animation.DROP,
        title: "22.AQUÍ SOY FELIZ"

    });



    //information for
    function goToLink22() {
        infowindow22.open(map,marker22);
        if (marker.getAnimation() != null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
         
    }
    google.maps.event.addListener(marker22, 'click', goToLink22);
    google.maps.event.addDomListener(window, 'load', initialize);  

 //MARCADOR 23
 
 //positions
    var point23 = new google.maps.LatLng(13.717749, -88.161521);

    var contentString23 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">UNA LUZ EN MI CAMINO</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Una Luz En mi Camino</b> ,  20 de Septiembre de 2008. Dirección: Cantón Piedra Parada, Caserío Los Sánchez. Días y horas de reuniones: Lunes, Miércoles y Viernes de 3:00 a 5:00 p.m.</p>'+
      '</div>'+
      '</div>';

      var infowindow23 = new google.maps.InfoWindow({
      content: contentString23
  });
    //markers
    var marker23 = new google.maps.Marker({
        position: point23,
        map: map,
        category: cook,
        icon: cook,
        animation: google.maps.Animation.DROP,
        title: "23.UNA LUZ EN MI CAMINO"

    });



    //information for
    function goToLink23() {
        infowindow23.open(map,marker23);
        if (marker.getAnimation() != null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
         
    }
    google.maps.event.addListener(marker23, 'click', goToLink23);
    google.maps.event.addDomListener(window, 'load', initialize);      

//MARCADOR 24
 
 //positions
    var point24 = new google.maps.LatLng(13.793515, -88.138740);

    var contentString24 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">DÍAS FELICES</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Días Felices</b> , 02 de Julio de 1988. Dirección: Cantón Hondable, Llano Verde. Días y horas de reuniones: Lunes, Miércoles, Jueves y Sábado de 4:00 a 6:00 p.m.</p>'+
      '</div>'+
      '</div>';

      var infowindow24 = new google.maps.InfoWindow({
      content: contentString24
  });
    //markers
    var marker24 = new google.maps.Marker({
        position: point24,
        map: map,
        category: cook,
        icon: cook,
        animation: google.maps.Animation.DROP,
        title: "24.DÍAS FELICES"

    });



    //information for
    function goToLink24() {
        infowindow24.open(map,marker24);
        if (marker.getAnimation() != null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
         
    }
    google.maps.event.addListener(marker24, 'click', goToLink24);
    google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 25
 
 //positions
    var point25 = new google.maps.LatLng(13.792817, -88.136283);

    var contentString25 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">FELIZ NAVIDAD</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Feliz Navidad</b> , 25 de Diciembre de 1991. Dirección: Caserío Agua Fría, Cantón La Cuchilla. Días y horas de reuniones: De Lunes a Domingo de 4:00 a 6:00 p.m.</p>'+
      '</div>'+
      '</div>';

      var infowindow25 = new google.maps.InfoWindow({
      content: contentString25
  });
    //markers
    var marker25 = new google.maps.Marker({
        position: point25,
        map: map,
        category: cook,
        icon: cook,
        animation: google.maps.Animation.DROP,
        title: "25.FELIZ NAVIDAD"

    });



    //information for
    function goToLink25() {
        infowindow25.open(map,marker25);
        if (marker.getAnimation() != null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
         
    }
    google.maps.event.addListener(marker25, 'click', goToLink25);
    google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 26
 
 //positions
    var point26 = new google.maps.LatLng(13.790410, -88.137313);

    var contentString26 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">RETORNO A MI NUEVA VIDA</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Retorno a mi Nueva Vida</b> , 25 de Agosto de 2012. Dirección: Caserío Agua Fría, Cantón La Cuchilla. Días y horas de reuniones: De Lunes a Domingo de 4:00 a 6:00 p.m.</p>'+
      '</div>'+
      '</div>';

      var infowindow26 = new google.maps.InfoWindow({
      content: contentString26
  });
    //markers
    var marker26 = new google.maps.Marker({
        position: point26,
        map: map,
        category: cook,
        icon: cook,
        animation: google.maps.Animation.DROP,
        title: "26.RETORNO A MI NUEVA VIDA"

    });



    //information for
    function goToLink26() {
        infowindow26.open(map,marker26);
        if (marker.getAnimation() != null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
         
    }
    google.maps.event.addListener(marker26, 'click', goToLink26);
    google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 27
 
 //positions
    var point27 = new google.maps.LatLng(13.601433, -88.054294);

    var contentString27 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">UNA LUZ EN LLANO VERDE</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Una Luz En Llano Verde</b> , 02 de Julio de 1988. Dirección: Cantón Hondable, Llano Verde. Días y horas de reuniones: Lunes, Miércoles, Jueves y Sábado de 4:00 a 6:00 p.m.</p>'+
      '</div>'+
      '</div>';

      var infowindow27 = new google.maps.InfoWindow({
      content: contentString27
  });
    //markers
    var marker27 = new google.maps.Marker({
        position: point27,
        map: map,
        category: cook,
        icon: cook,
        animation: google.maps.Animation.DROP,
        title: "27.UNA LUZ EN LLANO VERDE"

    });



    //information for
    function goToLink27() {
        infowindow27.open(map,marker27);
        if (marker.getAnimation() != null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
         
    }
    google.maps.event.addListener(marker27, 'click', goToLink27);
    google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 28
 
 //positions
    var point28 = new google.maps.LatLng(13.817473, -88.215923);

    var contentString28 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">FUENTE DE RECUPERACIÓN</h1>'+
      '<div id="bodyContent">'+
      '<p><b>fuente de Recuperación</b> , 11 de Agosto de 2012. Dirección: San Lucas. Días y horas de reuniones: De Lunes a Domingo de 4:00 a 6:00 p.m.</p>'+
      '</div>'+
      '</div>';

      var infowindow28 = new google.maps.InfoWindow({
      content: contentString28
  });
    //markers
    var marker28 = new google.maps.Marker({
        position: point28,
        map: map,
        category: cook,
        icon: cook,
        animation: google.maps.Animation.DROP,
        title: "28.FUENTE DE RECUPERACIÓN"

    });



    //information for
    function goToLink28() {
        infowindow28.open(map,marker28);
        if (marker.getAnimation() != null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
         
    }
    google.maps.event.addListener(marker28, 'click', goToLink28);
    google.maps.event.addDomListener(window, 'load', initialize);

 //MARCADOR 29
 
 //positions
    var point29 = new google.maps.LatLng(13.821224, -88.206697);

    var contentString29 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">UN FUTURO MEJOR</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Un futuro Mejor</b> , 15 de Enero de 2011. Dirección: Barrio El Centro. Días y horas de reuniones: De Lunes a Sábado de 4:00 a 6:00 p.m.</p>'+
      '</div>'+
      '</div>';

      var infowindow29 = new google.maps.InfoWindow({
      content: contentString29
  });
    //markers
    var marker29 = new google.maps.Marker({
        position: point29,
        map: map,
        category: cook,
        icon: cook,
        animation: google.maps.Animation.DROP,
        title: "29.UN FUTURO MEJOR"

    });



    //information for
    function goToLink29() {
        infowindow29.open(map,marker29);
        if (marker.getAnimation() != null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
         
    }
    google.maps.event.addListener(marker29, 'click', goToLink29);
    google.maps.event.addDomListener(window, 'load', initialize);
//MARCADOR 30
 
 //positions
    var point30 = new google.maps.LatLng(13.663012, -88.173727);

    var contentString30 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">SAN SEBASTIÁN</h1>'+
      '<div id="bodyContent">'+
      '<p><b>San Sebastían</b> , 16 de Diciembre de 1968. Dirección: Barrio El Centro. Días y horas de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.</p>'+
      '</div>'+
      '</div>';

      var infowindow30 = new google.maps.InfoWindow({
      content: contentString30
  });
    //markers
    var marker30 = new google.maps.Marker({
        position: point30,
        map: map,
        category: cook,
        icon: cook,
        animation: google.maps.Animation.DROP,
        title: "30.SAN SEBASTIÁN"

    });



    //information for
    function goToLink30() {
        infowindow30.open(map,marker30);
        if (marker.getAnimation() != null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
         
    }
    google.maps.event.addListener(marker30, 'click', goToLink30);
    google.maps.event.addDomListener(window, 'load', initialize);

 //MARCADOR 31
 
 //positions
    var point31 = new google.maps.LatLng(13.851320, -88.153331);

    var contentString31 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">UNA LUZ EN MI BARRIO</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Una Luz en mi Barrio</b> , 04 de Mayo de 1995. Dirección: Barrio Arriba, Cantón Meanguera. Días y horas de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.</p>'+
      '</div>'+
      '</div>';

      var infowindow31 = new google.maps.InfoWindow({
      content: contentString31
  });
    //markers
    var marker31 = new google.maps.Marker({
        position: point31,
        map: map,
        category: cook,
        icon: cook,
        animation: google.maps.Animation.DROP,
        title: "31.UNA LUZ EN MI BARRIO"

    });



    //information for
    function goToLink31() {
        infowindow31.open(map,marker31);
        if (marker.getAnimation() != null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
         
    }
    google.maps.event.addListener(marker31, 'click', goToLink31);
    google.maps.event.addDomListener(window, 'load', initialize);

 //MARCADOR 32
 
 //positions
    var point32 = new google.maps.LatLng(13.893760, -88.044444);

    var contentString32 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">NUEVO DESPERTAR</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Nuevo Despertar</b> , 30 de Noviembre de 1986. Dirección: Joateca. Días y horas de reuniones: De Lunes a Domingo de 5:00 a 7:00 p.m.</p>'+
      '</div>'+
      '</div>';

      var infowindow32 = new google.maps.InfoWindow({
      content: contentString32
  });
    //markers
    var marker32 = new google.maps.Marker({
        position: point32,
        map: map,
        category: cook,
        icon: cook,
        animation: google.maps.Animation.DROP,
        title: "32.NUEVO DESPERTAR"

    });



    //information for
    function goToLink32() {
        infowindow32.open(map,marker32);
        if (marker.getAnimation() != null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
         
    }
    google.maps.event.addListener(marker32, 'click', goToLink32);
    google.maps.event.addDomListener(window, 'load', initialize);


//MARCADOR 33
 
 //positions
    var point33 = new google.maps.LatLng(13.883229, -88.166624);

    var contentString33 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">PAZ Y SOBRIEDAD</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Paz y Sobriedad</b> , 26 de Febrero de 2011. Dirección: Cantón Volcancillo, Caserío Masalá. Días y horas de reuniones: De Lunes a Domingo de 5:00 a 7:00 p.m.</p>'+
      '</div>'+
      '</div>';

      var infowindow33 = new google.maps.InfoWindow({
      content: contentString33
  });
    //markers
    var marker33 = new google.maps.Marker({
        position: point33,
        map: map,
        category: cook,
        icon: cook,
        animation: google.maps.Animation.DROP,
        title: "33.PAZ Y SOBRIEDAD"

    });



    //information for
    function goToLink33() {
        infowindow33.open(map,marker33);
        if (marker.getAnimation() != null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
         
    }
    google.maps.event.addListener(marker33, 'click', goToLink33);
    google.maps.event.addDomListener(window, 'load', initialize);

 //MARCADOR 34
 
 //positions
    var point34 = new google.maps.LatLng(13.870674, -88.191773);

    var contentString34 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">VOLVER A VIVIR EN A.A.</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Volver a Vivir en A.A.</b> , 19 de Octubre de 2001. Dirección: Cantón Paturla, Caserío La Laguna. Días y horas de reuniones: Martes, Jueves y Sábado de 4:00 a 6:00 p.m.</p>'+
      '</div>'+
      '</div>';

      var infowindow34 = new google.maps.InfoWindow({
      content: contentString34
  });
    //markers
    var marker34 = new google.maps.Marker({
        position: point34,
        map: map,
        category: cook,
        icon: cook,
        animation: google.maps.Animation.DROP,
        title: "34.VOLVER A VIVIR EN A.A."

    });



    //information for
    function goToLink34() {
        infowindow34.open(map,marker34);
        if (marker.getAnimation() != null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
         
    }
    google.maps.event.addListener(marker34, 'click', goToLink34);
    google.maps.event.addDomListener(window, 'load', initialize);


 //MARCADOR 35
 
 //positions
    var point35 = new google.maps.LatLng(13.684080, -88.160992);

    var contentString35 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">AMOR POR TU VIDA</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Amor por tu Vida</b> , 22 de Febrero de 2006. Dirección: Cantón El Rodeo, Caserío Los Quebrachos. Días y horas de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.</p>'+
      '</div>'+
      '</div>';

      var infowindow35 = new google.maps.InfoWindow({
      content: contentString35
  });
    //markers
    var marker35 = new google.maps.Marker({
        position: point35,
        map: map,
        category: cook,
        icon: cook,
        animation: google.maps.Animation.DROP,
        title: "35.AMOR POR TU VIDA"

    });



    //information for
    function goToLink35() {
        infowindow35.open(map,marker35);
        if (marker.getAnimation() != null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
         
    }
    google.maps.event.addListener(marker35, 'click', goToLink35);
    google.maps.event.addDomListener(window, 'load', initialize);

 //MARCADOR 36
 
 //positions
    var point36 = new google.maps.LatLng(13.925735, -88.161142);

    var contentString36 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">CAMBIO DE VIDA</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Cambio de Vida</b> , 16 de Marzo de 2005. Dirección: Barrio Las Vegas. Días y horas de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.</p>'+
      '</div>'+
      '</div>';

      var infowindow36 = new google.maps.InfoWindow({
      content: contentString36
  });
    //markers
    var marker36 = new google.maps.Marker({
        position: point36,
        map: map,
        category: cook,
        icon: cook,
        animation: google.maps.Animation.DROP,
        title: "36.CAMBIO DE VIDA"

    });



    //information for
    function goToLink36() {
        infowindow36.open(map,marker36);
        if (marker.getAnimation() != null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
         
    }
    google.maps.event.addListener(marker36, 'click', goToLink36);
    google.maps.event.addDomListener(window, 'load', initialize);

 //MARCADOR 37
 
 //positions
    var point37 = new google.maps.LatLng(13.612945, -88.027013);

    var contentString37 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">EL CALVARIO</h1>'+
      '<div id="bodyContent">'+
      '<p><b>El Calvario</b> , 07 de Noviembre de 1976. Dirección: 4ª Calle Poniente, Barrio Nuevo. Días y horas de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.</p>'+
      '</div>'+
      '</div>';

      var infowindow37 = new google.maps.InfoWindow({
      content: contentString37
  });
    //markers
    var marker37 = new google.maps.Marker({
        position: point37,
        map: map,
        category: cook,
        icon: cook,
        animation: google.maps.Animation.DROP,
        title: "37.EL CALVARIO"

    });



    //information for
    function goToLink37() {
        infowindow37.open(map,marker37);
        if (marker.getAnimation() != null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
         
    }
    google.maps.event.addListener(marker37, 'click', goToLink37);
    google.maps.event.addDomListener(window, 'load', initialize);


 //MARCADOR 38
 
 //positions
    var point38 = new google.maps.LatLng(13.612180, -88.023451);

    var contentString38 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">SAN ANTONIO</h1>'+
      '<div id="bodyContent">'+
      '<p><b>San Antonio</b> , 11 de Julio de 1962. Dirección: Barrio San Sebastián, 4ª Avenida Sur, Jocoro. Días y horas de reuniones: De Lunes a Domingo de 5:30 a 7:30 p.m.</p>'+
      '</div>'+
      '</div>';

      var infowindow38 = new google.maps.InfoWindow({
      content: contentString38
  });
    //markers
    var marker38 = new google.maps.Marker({
        position: point38,
        map: map,
        category: cook,
        icon: cook,
        animation: google.maps.Animation.DROP,
        title: "38.SAN ANTONIO"

    });



    //information for
    function goToLink38() {
        infowindow38.open(map,marker38);
        if (marker.getAnimation() != null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
         
    }
    google.maps.event.addListener(marker38, 'click', goToLink38);
    google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 39
 
 //positions
    var point39 = new google.maps.LatLng(13.616059, -88.021864);

    var contentString39 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">SAN JUAN BAUTISTA</h1>'+
      '<div id="bodyContent">'+
      '<p><b>San Juan Bautista</b> , 27 de Diciembre de 1973. Dirección: Cantón San Juan. Días y horas de reuniones: De Lunes a Sábado de 4:00 a 6:00 p.m.</p>'+
      '</div>'+
      '</div>';

      var infowindow39 = new google.maps.InfoWindow({
      content: contentString39
  });
    //markers
    var marker39 = new google.maps.Marker({
        position: point39,
        map: map,
        category: cook,
        icon: cook,
        animation: google.maps.Animation.DROP,
        title: "39.SAN JUAN BAUTISTA"

    });



    //information for
    function goToLink39() {
        infowindow39.open(map,marker39);
        if (marker.getAnimation() != null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
         
    }
    google.maps.event.addListener(marker39, 'click', goToLink39);
    google.maps.event.addDomListener(window, 'load', initialize);


//MARCADOR 40
 
 //positions
    var point40 = new google.maps.LatLng(13.615225, -88.025039);

    var contentString40 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">SEGUIMOS EL CAMINO DE DIOS</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Seguimos el Camino de Dios</b> , 07 de Octubre de 1977. Dirección: Cantón Laguneta, Caserío Los Santos. Días y horas de reuniones: Martes, Viernes y Domingo de 4:00 a 6:00 p.m.</p>'+
      '</div>'+
      '</div>';

      var infowindow40 = new google.maps.InfoWindow({
      content: contentString40
  });
    //markers
    var marker40 = new google.maps.Marker({
        position: point40,
        map: map,
        category: cook,
        icon: cook,
        animation: google.maps.Animation.DROP,
        title: "40.SEGUIMOS EL CAMINO DE DIOS"

    });



    //information for
    function goToLink40() {
        infowindow40.open(map,marker40);
        if (marker.getAnimation() != null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
         
    }
    google.maps.event.addListener(marker40, 'click', goToLink40);
    google.maps.event.addDomListener(window, 'load', initialize);


//MARCADOR 41
 
 //positions
    var point41 = new google.maps.LatLng(13.614849, -88.031777);

    var contentString41 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">UNA LUZ EN LA COLONIA</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Una Luz en la Colonia</b> , 03 de Mayo de 1992. Dirección: Calle Principal, Colonia Nuevo Jocoro. Días y horas de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.</p>'+
      '</div>'+
      '</div>';

      var infowindow41 = new google.maps.InfoWindow({
      content: contentString41
  });
    //markers
    var marker41 = new google.maps.Marker({
        position: point41,
        map: map,
        category: cook,
        icon: cook,
        animation: google.maps.Animation.DROP,
        title: "41.UNA LUZ EN LA COLONIA"

    });



    //information for
    function goToLink41() {
        infowindow41.open(map,marker41);
        if (marker.getAnimation() != null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
         
    }
    google.maps.event.addListener(marker41, 'click', goToLink41);
    google.maps.event.addDomListener(window, 'load', initialize);

 //MARCADOR 42
 
 //positions
    var point42 = new google.maps.LatLng(13.724388, -88.091383);

    var contentString42 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">SUPERACIÓN Y FE</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Superación y Fe</b> , 16 de Junio de 1979. Dirección: Barrio El Centro. Días y horas de reuniones: De Lunes a Domingo de 4:00 a 6:00 p.m.</p>'+
      '</div>'+
      '</div>';

      var infowindow42 = new google.maps.InfoWindow({
      content: contentString42
  });
    //markers
    var marker42 = new google.maps.Marker({
        position: point42,
        map: map,
        category: cook,
        icon: cook,
        animation: google.maps.Animation.DROP,
        title: "42.SUPERACIÓN Y FE"

    });



    //information for
    function goToLink42() {
        infowindow42.open(map,marker42);
        if (marker.getAnimation() != null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
         
    }
    google.maps.event.addListener(marker42, 'click', goToLink42);
    google.maps.event.addDomListener(window, 'load', initialize);

 //MARCADOR 43
 
 //positions
    var point43 = new google.maps.LatLng(13.728598, -88.086319);

    var contentString43 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">VIVIR EN A.A.</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Vivir en A.A.</b> , 01 de Noviembre de 1997. Dirección: Barrio La Cruz Cantón El Norte, Calle al parque. Días y horas de reuniones: De Lunes a Domingo de 4:00 a 6:00 p.m.</p>'+
      '</div>'+
      '</div>';

      var infowindow43 = new google.maps.InfoWindow({
      content: contentString43
  });
    //markers
    var marker43 = new google.maps.Marker({
        position: point43,
        map: map,
        category: cook,
        icon: cook,
        animation: google.maps.Animation.DROP,
        title: "43.VIVIR EN A.A."

    });



    //information for
    function goToLink43() {
        infowindow43.open(map,marker43);
        if (marker.getAnimation() != null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
         
    }
    google.maps.event.addListener(marker43, 'click', goToLink43);
    google.maps.event.addDomListener(window, 'load', initialize);

 //MARCADOR 44
 
 //positions
    var point44 = new google.maps.LatLng(13.851258, -88.149919);

    var contentString44 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">20 DE JUNIO</h1>'+
      '<div id="bodyContent">'+
      '<p><b>20 de Junio</b> , 20 de Junio de 2014. Dirección: Colonia San Luis 2, 1 Cuadra Arriba de La gasolinera a mano izquierda. Días y horas de reuniones: De Lunes a Domingo de 6:00 a 8:00 pm.</p>'+
      '</div>'+
      '</div>';

      var infowindow44 = new google.maps.InfoWindow({
      content: contentString44
  });
    //markers
    var marker44 = new google.maps.Marker({
        position: point44,
        map: map,
        category: cook,
        icon: cook,
        animation: google.maps.Animation.DROP,
        title: "44.20 DE JUNIO"

    });



    //information for
    function goToLink44() {
        infowindow44.open(map,marker44);
        if (marker.getAnimation() != null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
         
    }
    google.maps.event.addListener(marker44, 'click', goToLink44);
    google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 45
 
 //positions
    var point45 = new google.maps.LatLng(13.856133, -88.152924);

    var contentString45 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">CAMINO DE VIDA</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Camino de Vida</b> , 23 de Marzo de 2008. Dirección: Cantón Cerro Pando, Caserío El Barrial. Días y horas de reuniones: De Lunes a Domingo de 5:00 a 7:00 p.m.</p>'+
      '</div>'+
      '</div>';

      var infowindow45 = new google.maps.InfoWindow({
      content: contentString45
  });
    //markers
    var marker45 = new google.maps.Marker({
        position: point45,
        map: map,
        category: cook,
        icon: cook,
        animation: google.maps.Animation.DROP,
        title: "45.CAMINO DE VIDA"

    });



    //information for
    function goToLink45() {
        infowindow45.open(map,marker45);
        if (marker.getAnimation() != null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
         
    }
    google.maps.event.addListener(marker45, 'click', goToLink45);
    google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 46
 
 //positions
    var point46 = new google.maps.LatLng(13.847132, -88.150349);

    var contentString46 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">NUEVO DESPERTAR</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Nuevo Despertar</b> , 11 de Enero de 2014. Dirección: Cantón La Joya, Caserío Hatos 2: Días y horas de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.</p>'+
      '</div>'+
      '</div>';

      var infowindow46 = new google.maps.InfoWindow({
      content: contentString46
  });
    //markers
    var marker46 = new google.maps.Marker({
        position: point46,
        map: map,
        category: cook,
        icon: cook,
        animation: google.maps.Animation.DROP,
        title: "46.NUEVO DESPERTAR"

    });



    //information for
    function goToLink46() {
        infowindow46.open(map,marker46);
        if (marker.getAnimation() != null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
         
    }
    google.maps.event.addListener(marker46, 'click', goToLink46);
    google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 47
 
 //positions
    var point47 = new google.maps.LatLng(13.849966, -88.155498);

    var contentString47 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">PARE DE SUFRIR</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Pare de Sufrir</b> , 29 de Noviembre de 2002. Dirección: Colonia 18 de Noviembre, entrada a Radio Segundo Monte, Cantón La Joya, Caserío San Luis. Días y horas de reuniones: De Lunes a Domingo de 5:00 a 7:00 p.m.</p>'+
      '</div>'+
      '</div>';

      var infowindow47 = new google.maps.InfoWindow({
      content: contentString47
  });
    //markers
    var marker47 = new google.maps.Marker({
        position: point47,
        map: map,
        category: cook,
        icon: cook,
        animation: google.maps.Animation.DROP,
        title: "47.PARE DE SUFRIR"

    });



    //information for
    function goToLink47() {
        infowindow47.open(map,marker47);
        if (marker.getAnimation() != null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
         
    }
    google.maps.event.addListener(marker47, 'click', goToLink47);
    google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 48
 
 //positions
    var point48 = new google.maps.LatLng(13.800751, -88.149469);

    var contentString48 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">BUENA VISTA</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Buena Vista</b> , 08 de Noviembre de 1998. Dirección: Cantón Agua Zarca, 2 Cuadras antes del Desvío La Alejandría. Días y horas de reuniones: De Lunes a Domingo de 4:00 a 6:00 p.m.</p>'+
      '</div>'+
      '</div>';

      var infowindow48 = new google.maps.InfoWindow({
      content: contentString48
  });
    //markers
    var marker48 = new google.maps.Marker({
        position: point48,
        map: map,
        category: cook,
        icon: cook,
        animation: google.maps.Animation.DROP,
        title: "48.BUENA VISTA"

    });



    //information for
    function goToLink48() {
        infowindow48.open(map,marker48);
        if (marker.getAnimation() != null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
         
    }
    google.maps.event.addListener(marker48, 'click', goToLink48);
    google.maps.event.addDomListener(window, 'load', initialize);


//MARCADOR 49
 
 //positions
    var point49 = new google.maps.LatLng(13.808815, -88.152666);

    var contentString49 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">LAS 24 HORAS</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Las 24 Horas</b> , 25 de Junio de 1977. Dirección: Calle Principal, Natividad Majano. Días y horas de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.</p>'+
      '</div>'+
      '</div>';

      var infowindow49 = new google.maps.InfoWindow({
      content: contentString49
  });
    //markers
    var marker49 = new google.maps.Marker({
        position: point49,
        map: map,
        category: cook,
        icon: cook,
        animation: google.maps.Animation.DROP,
        title: "49.LAS 24 HORAS"

    });



    //information for
    function goToLink49() {
        infowindow49.open(map,marker49);
        if (marker.getAnimation() != null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
         
    }
    google.maps.event.addListener(marker49, 'click', goToLink49);
    google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 50
 
 //positions
    var point50 = new google.maps.LatLng(13.804481, -88.154447);

    var contentString50 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">LUCHEMOS COMPAÑEROS</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Luchemos Compañeros</b> , 06 de Octubre de 1973. Dirección: Barrio El Centro. Días y horas de reuniones: De Lunes a Domingo de 4:00 a 6:00 p.m.</p>'+
      '</div>'+
      '</div>';

      var infowindow50 = new google.maps.InfoWindow({
      content: contentString50
  });
    //markers
    var marker50 = new google.maps.Marker({
        position: point50,
        map: map,
        category: cook,
        icon: cook,
        animation: google.maps.Animation.DROP,
        title: "50.LUCHEMOS COMPAÑEROS"

    });



    //information for
    function goToLink50() {
        infowindow50.open(map,marker50);
        if (marker.getAnimation() != null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
         
    }
    google.maps.event.addListener(marker50, 'click', goToLink50);
    google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 51
 
 //positions
    var point51 = new google.maps.LatLng(13.958266, -88.162537);

    var contentString51 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">NUEVA VIDA</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Nueva Vida</b> , 10 de Enero de 1990. Dirección: Cantón Casa Blanca, Caserío La Tejera. Días y horas de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.</p>'+
      '</div>'+
      '</div>';

      var infowindow51 = new google.maps.InfoWindow({
      content: contentString51
  });
    //markers
    var marker51 = new google.maps.Marker({
        position: point51,
        map: map,
        category: cook,
        icon: cook,
        animation: google.maps.Animation.DROP,
        title: "51.NUEVA VIDA"

    });



    //information for
    function goToLink51() {
        infowindow51.open(map,marker51);
        if (marker.getAnimation() != null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
         
    }
    google.maps.event.addListener(marker51, 'click', goToLink51);
    google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 52
 
 //positions
    var point52 = new google.maps.LatLng(13.646946, -88.096769);

    var contentString52 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">11 DE SEPTIEMBRE</h1>'+
      '<div id="bodyContent">'+
      '<p><b>11 De Septiembre</b> , 11 de Septiembre de 1977. Dirección: Barrio El Centro, Avenida Morazán, contiguo a Juzgado de Paz. Días y horas de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.</p>'+
      '</div>'+
      '</div>';

      var infowindow52 = new google.maps.InfoWindow({
      content: contentString52
  });
    //markers
    var marker52 = new google.maps.Marker({
        position: point52,
        map: map,
        category: cook,
        icon: cook,
        animation: google.maps.Animation.DROP,
        title: "52.11 DE SEPTIEMBRE"

    });



    //information for
    function goToLink52() {
        infowindow52.open(map,marker52);
        if (marker.getAnimation() != null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
         
    }
    google.maps.event.addListener(marker52, 'click', goToLink52);
    google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 53
 
 //positions
    var point53 = new google.maps.LatLng(13.688703, -88.098078);

    var contentString53 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">11 DE ENERO LUZ Y ESPERANZA</h1>'+
      '<div id="bodyContent">'+
      '<p><b>11 De Enero Luz y Esperanza</b> , 11 de Enero de 1994. Dirección: Colonia Las Flores. Días y horas de reuniones: De Lunes a Domingo de 5:00 a 7:00 p.m.</p>'+
      '</div>'+
      '</div>';

      var infowindow53 = new google.maps.InfoWindow({
      content: contentString53
  });
    //markers
    var marker53 = new google.maps.Marker({
        position: point53,
        map: map,
        category: cook,
        icon: cook,
        animation: google.maps.Animation.DROP,
        title: "53.11 DE ENERO LUZ Y ESPERANZA"

    });



    //information for
    function goToLink53() {
        infowindow53.open(map,marker53);
        if (marker.getAnimation() != null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
         
    }
    google.maps.event.addListener(marker53, 'click', goToLink53);
    google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 54
 
 //positions
    var point54 = new google.maps.LatLng(13.695336, -88.103118);

    var contentString54 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">12 DE MAYO</h1>'+
      '<div id="bodyContent">'+
      '<p><b>12 De Mayo</b> , 12 de Mayo de 1994. Dirección: Barrio La Cruz. Días y horas de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.</p>'+
      '</div>'+
      '</div>';

      var infowindow54 = new google.maps.InfoWindow({
      content: contentString54
  });
    //markers
    var marker54 = new google.maps.Marker({
        position: point54,
        map: map,
        category: cook,
        icon: cook,
        animation: google.maps.Animation.DROP,
        title: "54.12 DE MAYO"

    });



    //information for
    function goToLink54() {
        infowindow54.open(map,marker54);
        if (marker.getAnimation() != null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
         
    }
    google.maps.event.addListener(marker54, 'click', goToLink54);
    google.maps.event.addDomListener(window, 'load', initialize);
    
    //MARCADOR 55
 
 //positions
    var point55 = new google.maps.LatLng(13.693955, -88.101216);

    var contentString55 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">20 DE JULIO FE Y ESPERANZA</h1>'+
      '<div id="bodyContent">'+
      '<p><b>20 de Julio Fe y Esperanza</b> , 20 de Julio de 1984. Dirección: 6ª Calle Oriente, Polígono D, Casa Nº 28 Colonia Los Almendros. Días y horas de reuniones: De Lunes a Domingo de 7:00 a 9:00 p.m.</p>'+
      '</div>'+
      '</div>';

      var infowindow55 = new google.maps.InfoWindow({
      content: contentString55
  });
    //markers
    var marker55 = new google.maps.Marker({
        position: point55,
        map: map,
        category: cook,
        icon: cook,
        animation: google.maps.Animation.DROP,
        title: "55.20 DE JULIO FE Y ESPERANZA"

    });



    //information for
    function goToLink55() {
        infowindow55.open(map,marker55);
        if (marker.getAnimation() != null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
         
    }
    google.maps.event.addListener(marker55, 'click', goToLink55);
    google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 56
 
 //positions
    var point56 = new google.maps.LatLng(13.697293, -88.104239);

    var contentString56 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">26 DE JULIO UNIDOS EN ACCIÓN</h1>'+
      '<div id="bodyContent">'+
      '<p><b>26 de Julio Unidos en Acción</b> , 26 de Julio de 2010. Dirección: Final Calle Oriente B, La Cruz. Días y horas de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.</p>'+
      '</div>'+
      '</div>';

      var infowindow56 = new google.maps.InfoWindow({
      content: contentString56
  });
    //markers
    var marker56 = new google.maps.Marker({
        position: point56,
        map: map,
        category: cook,
        icon: cook,
        animation: google.maps.Animation.DROP,
        title: "56.26 DE JULIO UNIDOS EN ACCIÓN"

    });



    //information for
    function goToLink56() {
        infowindow56.open(map,marker56);
        if (marker.getAnimation() != null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
         
    }
    google.maps.event.addListener(marker56, 'click', goToLink56);
    google.maps.event.addDomListener(window, 'load', initialize);

    //MARCADOR 57
 
 //positions
    var point57 = new google.maps.LatLng(13.682874, -88.101484);

    var contentString57 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">FE Y ACCIÓN</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Fe y Acción</b> , 01 de Agosto de 1998. Dirección: Colonia San  José, Pasaje 1. Días y horas de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.</p>'+
      '</div>'+
      '</div>';

      var infowindow57 = new google.maps.InfoWindow({
      content: contentString57
  });
    //markers
    var marker57 = new google.maps.Marker({
        position: point57,
        map: map,
        category: cook,
        icon: cook,
        animation: google.maps.Animation.DROP,
        title: "57.FE Y ACCIÓN"

    });



    //information for
    function goToLink57() {
        infowindow57.open(map,marker57);
        if (marker.getAnimation() != null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
         
    }
    google.maps.event.addListener(marker57, 'click', goToLink57);
    google.maps.event.addDomListener(window, 'load', initialize);

    //MARCADOR 58
 
 //positions
    var point58 = new google.maps.LatLng(13.680806, -88.098807);

    var contentString58 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">FELIZ AMANECER</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Feliz Amanecer</b> , 13 de Octubre 2011. Dirección: Colonia Nuevo Amanecer, Cantón San José. Días y horas de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.</p>'+
      '</div>'+
      '</div>';

      var infowindow58 = new google.maps.InfoWindow({
      content: contentString58
  });
    //markers
    var marker58 = new google.maps.Marker({
        position: point58,
        map: map,
        category: cook,
        icon: cook,
        animation: google.maps.Animation.DROP,
        title: "58.Feliz AMANECER"

    });



    //information for
    function goToLink58() {
        infowindow58.open(map,marker58);
        if (marker.getAnimation() != null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
         
    }
    google.maps.event.addListener(marker58, 'click', goToLink58);
    google.maps.event.addDomListener(window, 'load', initialize);

 //MARCADOR 59
 
 //positions
    var point59 = new google.maps.LatLng(13.696294, -88.104427);

    var contentString59 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">LA MEDITACIÓN</h1>'+
      '<div id="bodyContent">'+
      '<p><b>La Meditación</b> , 23 de Diciembre de 2012. Dirección: Avenida Morazán B, San Martín. Días y horas de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.</p>'+
      '</div>'+
      '</div>';

      var infowindow59 = new google.maps.InfoWindow({
      content: contentString59
  });
    //markers
    var marker59 = new google.maps.Marker({
        position: point59,
        map: map,
        category: cook,
        icon: cook,
        animation: google.maps.Animation.DROP,
        title: "59.LA MEDITACIÓN"

    });



    //information for
    function goToLink59() {
        infowindow59.open(map,marker59);
        if (marker.getAnimation() != null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
         
    }
    google.maps.event.addListener(marker59, 'click', goToLink59);
    google.maps.event.addDomListener(window, 'load', initialize);
    
//MARCADOR 60
 
 //positions
    var point60 = new google.maps.LatLng(13.687025, -88.100245);

    var contentString60 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">PRIMERO DE FEBRERO NADA PODEMOS SOLOS</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Primero de Febrero Nada Podemos Solos</b> , 01 de Febrero de 2014. Dirección: Colonia Morazán, 1  Pasaje al final. Días y horas de reuniones: De Lunes a Domingo de 5:00 a 7:00 p.m.</p>'+
      '</div>'+
      '</div>';

      var infowindow60 = new google.maps.InfoWindow({
      content: contentString60
  });
    //markers
    var marker60 = new google.maps.Marker({
        position: point60,
        map: map,
        category: cook,
        icon: cook,
        animation: google.maps.Animation.DROP,
        title: "60.PRIMERO DE FEBRERO NADA PODEMOS SOLOS"

    });



    //information for
    function goToLink60() {
        infowindow60.open(map,marker60);
        if (marker.getAnimation() != null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
         
    }
    google.maps.event.addListener(marker60, 'click', goToLink60);
    google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 61
 
 //positions
    var point61 = new google.maps.LatLng(13.694384, -88.107551);

    var contentString61 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">PRIMERO DE NOVIEMBRE FE Y RECUPERACIÓN</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Primero de Noviembre Fe y Recuperación</b> , 01 de Noviembre de 2006. Dirección: Barrio Las Flores, lado Poniente a La Alcaldía Municipal. Días y horas de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.</p>'+
      '</div>'+
      '</div>';

      var infowindow61 = new google.maps.InfoWindow({
      content: contentString61
  });
    //markers
    var marker61 = new google.maps.Marker({
        position: point61,
        map: map,
        category: cook,
        icon: cook,
        animation: google.maps.Animation.DROP,
        title: "61.PRIMERO DE NOVIEMBRE FE Y RECUPERACIÓN"

    });



    //information for
    function goToLink61() {
        infowindow61.open(map,marker61);
        if (marker.getAnimation() != null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
         
    }
    google.maps.event.addListener(marker61, 'click', goToLink61);
    google.maps.event.addDomListener(window, 'load', initialize);

    //MARCADOR 62
 
 //positions
    var point62 = new google.maps.LatLng(13.858929, -88.232548);

    var contentString62 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">13 DE ENERO</h1>'+
      '<div id="bodyContent">'+
      '<p><b>13 De Enero</b> , 13 de Enero de 1994. Dirección: Barrio El Calvario. Días y horas de reuniones: De Lunes a Sábado de 6:00 a 8:00 p.m.</p>'+
      '</div>'+
      '</div>';

      var infowindow62 = new google.maps.InfoWindow({
      content: contentString62
  });
    //markers
    var marker62 = new google.maps.Marker({
        position: point62,
        map: map,
        category: cook,
        icon: cook,
        animation: google.maps.Animation.DROP,
        title: "62.13 DE ENERO"

    });



    //information for
    function goToLink62() {
        infowindow62.open(map,marker62);
        if (marker.getAnimation() != null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
         
    }
    google.maps.event.addListener(marker62, 'click', goToLink62);
    google.maps.event.addDomListener(window, 'load', initialize);   
    

//MARCADOR 63
 
 //positions
    var point63 = new google.maps.LatLng(13.837142, -88.231416);

    var contentString63 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">AMANECER FELIZ</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Amanecer Feliz</b> , 25 de Mayo de 2007. Dirección: Cantón Potrero, Caserío Centro. Días y horas de reuniones: De Lunes a Sábado de 4:00 a 6:00 p.m.</p>'+
      '</div>'+
      '</div>';

      var infowindow63 = new google.maps.InfoWindow({
      content: contentString63
  });
    //markers
    var marker63 = new google.maps.Marker({
        position: point63,
        map: map,
        category: cook,
        icon: cook,
        animation: google.maps.Animation.DROP,
        title: "63.AMANECER FELIZ"

    });



    //information for
    function goToLink63() {
        infowindow63.open(map,marker63);
        if (marker.getAnimation() != null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
         
    }
    google.maps.event.addListener(marker63, 'click', goToLink63);
    google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 64
 
 //positions
    var point64 = new google.maps.LatLng(13.830767, -88.226824);

    var contentString64 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">EL MILAGRO</h1>'+
      '<div id="bodyContent">'+
      '<p><b>El Milagro</b> , 11 de Septiembre de 1974. Dirección: Barrio El Calvario. Días y horas de reuniones: De Lunes a Domingo de 4:00 a 6:00 p.m.</p>'+
      '</div>'+
      '</div>';

      var infowindow64 = new google.maps.InfoWindow({
      content: contentString64
  });
    //markers
    var marker64 = new google.maps.Marker({
        position: point64,
        map: map,
        category: cook,
        icon: cook,
        animation: google.maps.Animation.DROP,
        title: "64.EL MILAGRO"

    });



    //information for
    function goToLink64() {
        infowindow64.open(map,marker64);
        if (marker.getAnimation() != null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
         
    }
    google.maps.event.addListener(marker64, 'click', goToLink64);
    google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 65
 
 //positions
    var point65 = new google.maps.LatLng(13.825016, -88.223176);

    var contentString65 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">NADA PODEMOS SOLOS</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Nada Podemos Solos</b> , 21 de Junio de 2007. Dirección: Cantón San Francisco, Caserío Sequía de Agua. Días y horas de reuniones: De Lunes a Sábado de 4:00 a 6:00 p.m.</p>'+
      '</div>'+
      '</div>';

      var infowindow65 = new google.maps.InfoWindow({
      content: contentString65
  });
    //markers
    var marker65 = new google.maps.Marker({
        position: point65,
        map: map,
        category: cook,
        icon: cook,
        animation: google.maps.Animation.DROP,
        title: "65.NADA PODEMOS SOLOS"

    });



    //information for
    function goToLink65() {
        infowindow65.open(map,marker65);
        if (marker.getAnimation() != null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
         
    }
    google.maps.event.addListener(marker65, 'click', goToLink65);
    google.maps.event.addDomListener(window, 'load', initialize);


//MARCADOR 66
 
 //positions
    var point66 = new google.maps.LatLng(13.698392, -88.008240);

    var contentString66 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">NUEVO RENACER 06 DE AGOSTO</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Nuevo Renacer 06 de Agosto</b> , 06 de Agosto de 2014 Dirección: Barrio El Centro. Días y horas de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.</p>'+
      '</div>'+
      '</div>';

      var infowindow66 = new google.maps.InfoWindow({
      content: contentString66
  });
    //markers
    var marker66 = new google.maps.Marker({
        position: point66,
        map: map,
        category: cook,
        icon: cook,
        animation: google.maps.Animation.DROP,
        title: "66.NUEVO RENACER 06 DE AGOSTO"

    });



    //information for
    function goToLink66() {
        infowindow66.open(map,marker66);
        if (marker.getAnimation() != null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
         
    }
    google.maps.event.addListener(marker66, 'click', goToLink66);
    google.maps.event.addDomListener(window, 'load', initialize);
//MARCADOR 67
 
 //positions
    var point67 = new google.maps.LatLng(13.700868, -88.010691);

    var contentString67 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">NUEVO RENACIMIENTO</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Nuevo Renacimiento</b> , 21 de Enero de 2009. Dirección: Cantón El Tablón, Caserío Tepemechín. Días y horas de reuniones: Lunes, Jueves y Sábado de 3:00 a 5:00 p.m.</p>'+
      '</div>'+
      '</div>';

      var infowindow67 = new google.maps.InfoWindow({
      content: contentString67
  });
    //markers
    var marker67 = new google.maps.Marker({
        position: point67,
        map: map,
        category: cook,
        icon: cook,
        animation: google.maps.Animation.DROP,
        title: "67.NUEVO RENACIMIENTO"

    });



    //information for
    function goToLink67() {
        infowindow67.open(map,marker67);
        if (marker.getAnimation() != null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
         
    }
    google.maps.event.addListener(marker67, 'click', goToLink67);
    google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 68
 
 //positions
    var point68 = new google.maps.LatLng(13.915713, -88.233508);

    var contentString68 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">NUEVO RENACIMIENTO</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Nuevo Renacimiento</b> , 24 de Enero de 1994. Dirección: Barrio El Centro. Días y horas de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.</p>'+
      '</div>'+
      '</div>';

      var infowindow68 = new google.maps.InfoWindow({
      content: contentString68
  });
    //markers
    var marker68 = new google.maps.Marker({
        position: point68,
        map: map,
        category: cook,
        icon: cook,
        animation: google.maps.Animation.DROP,
        title: "68.NUEVO RENACIMIENTO"

    });



    //information for
    function goToLink68() {
        infowindow68.open(map,marker68);
        if (marker.getAnimation() != null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
         
    }
    google.maps.event.addListener(marker68, 'click', goToLink68);
    google.maps.event.addDomListener(window, 'load', initialize);    

//MARCADOR 69
 
 //positions
    var point69 = new google.maps.LatLng(13.582127, -88.077068);

    var contentString69 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">ARAUTE PARE DE SUFRIR</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Araute Pare de Sufrir</b> , 17 de Enero 2014. Dirección: Barrio El Centro. Días y horas de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.</p>'+
      '</div>'+
      '</div>';

      var infowindow69 = new google.maps.InfoWindow({
      content: contentString69
  });
    //markers
    var marker69 = new google.maps.Marker({
        position: point69,
        map: map,
        category: cook,
        icon: cook,
        animation: google.maps.Animation.DROP,
        title: "69.ARAUTE PARE DE SUFRIR"

    });



    //information for
    function goToLink69() {
        infowindow69.open(map,marker69);
        if (marker.getAnimation() != null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
         
    }
    google.maps.event.addListener(marker69, 'click', goToLink69);
    google.maps.event.addDomListener(window, 'load', initialize);









}

