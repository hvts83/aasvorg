

function initialize() {


    //Map parametrs
    var mapOptions = {
        zoom: 11,
        center: new google.maps.LatLng(13.8539164,-89.0166645),
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

  //MARCADOR 175
 
 //positions
    var point175 = new google.maps.LatLng(13.687452, -88.975859);

    var contentString175 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">24 DE JULIO</h1>'+
      '<div id="bodyContent">'+
      '<p><b>24 de Julio</b> , 01 de Julio de 1984. Dirección: Colonia Cuscatlán, Desvío a Monte San Juan. Días y horas de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.</p>'+
      '</div>'+
      '</div>';

      var infowindow175 = new google.maps.InfoWindow({
      content: contentString175
  });
    //markers
    var marker175 = new google.maps.Marker({
        position: point175,
        map: map,
        category: cook,
        icon: cook,
        animation: google.maps.Animation.DROP,
        title: "175.24 DE JULIO"

    });



    //information for
    function goToLink175() {
        infowindow175.open(map,marker175);
        if (marker.getAnimation() != null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
         
    }
    google.maps.event.addListener(marker175, 'click', goToLink175);
    google.maps.event.addDomListener(window, 'load', initialize);
    
//MARCADOR 176
 
 //positions
    var point176 = new google.maps.LatLng(13.690725, -88.972340);

    var contentString176 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">25 DE FEBRERO</h1>'+
      '<div id="bodyContent">'+
      '<p><b>25 De Febrero</b> , 25 de Febrero de 1975. Dirección: Cantón San Juan Miraflores Arriba, Pasaje Los Pérez. Días y horas de reuniones: De Lunes a Domingo de 5:00 a 7:00 p.m.</p>'+
      '</div>'+
      '</div>';

      var infowindow176 = new google.maps.InfoWindow({
      content: contentString176
  });
    //markers
    var marker176 = new google.maps.Marker({
        position: point176,
        map: map,
        category: cook,
        icon: cook,
        animation: google.maps.Animation.DROP,
        title: "176.25 DE FEBRERO"

    });



    //information for
    function goToLink176() {
        infowindow176.open(map,marker176);
        if (marker.getAnimation() != null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
         
    }
    google.maps.event.addListener(marker176, 'click', goToLink176);
    google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 177
 
 //positions
    var point177 = new google.maps.LatLng(13.689078, -88.977254);

    var contentString177 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">29 DE AGOSTO</h1>'+
      '<div id="bodyContent">'+
      '<p><b>29 de Agosto</b> , 29 de Agosto de 1979. Dirección: Cantón Miraflores Abajo. Días y horas de reuniones: De Lunes a Domingo de 5:00 a 7:00 p.m.</p>'+
      '</div>'+
      '</div>';

      var infowindow177 = new google.maps.InfoWindow({
      content: contentString177
  });
    //markers
    var marker177 = new google.maps.Marker({
        position: point177,
        map: map,
        category: cook,
        icon: cook,
        animation: google.maps.Animation.DROP,
        title: "177.29 DE AGOSTO"

    });



    //information for
    function goToLink177() {
        infowindow177.open(map,marker177);
        if (marker.getAnimation() != null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
         
    }
    google.maps.event.addListener(marker177, 'click', goToLink177);
    google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 178
 
 //positions
    var point178 = new google.maps.LatLng(13.689495, -88.973692);

    var contentString178 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">CORAZONES FELICES</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Corazones Felices</b> , 27 de Agosto de 1979. Dirección: Cantón Concepción frente a La Escuela. Días y horas de reuniones: De Lunes a Domingo de 5:00 a 7:00 p.m. Miembros</p>'+
      '</div>'+
      '</div>';

      var infowindow178 = new google.maps.InfoWindow({
      content: contentString178
  });
    //markers
    var marker178 = new google.maps.Marker({
        position: point178,
        map: map,
        category: cook,
        icon: cook,
        animation: google.maps.Animation.DROP,
        title: "178.CORAZONES FELICES"

    });



    //information for
    function goToLink178() {
        infowindow178.open(map,marker178);
        if (marker.getAnimation() != null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
         
    }
    google.maps.event.addListener(marker178, 'click', goToLink178);
    google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 179
 
 //positions
    var point179 = new google.maps.LatLng(13.689078, -88.975923);

    var contentString179 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">NUEVA VIDA 11 DE ABRIL</h1>'+
      '<div id="bodyContent">'+
      '<p><b>NUEVA VIDA 11 DE ABRIL</b> , 11 de Abril de 2005. Dirección: Cantón San Antonio. Días y horas de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.</p>'+
      '</div>'+
      '</div>';

      var infowindow179 = new google.maps.InfoWindow({
      content: contentString179
  });
    //markers
    var marker179 = new google.maps.Marker({
        position: point179,
        map: map,
        category: cook,
        icon: cook,
        animation: google.maps.Animation.DROP,
        title: "179.NUEVA VIDA 11 DE ABRIL"

    });



    //information for
    function goToLink179() {
        infowindow179.open(map,marker179);
        if (marker.getAnimation() != null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
         
    }
    google.maps.event.addListener(marker179, 'click', goToLink179);
    google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 180
 
 //positions
    var point180 = new google.maps.LatLng(13.687848, -88.972833);

    var contentString180 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">RENACER 05 DE JULIO</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Renacer 05 DE Julio</b> , 05 de Julio de 2004. Dirección: Cantón San José La Ceiba. Días y horas de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.</p>'+
      '</div>'+
      '</div>';

      var infowindow180 = new google.maps.InfoWindow({
      content: contentString180
  });
    //markers
    var marker180 = new google.maps.Marker({
        position: point180,
        map: map,
        category: cook,
        icon: cook,
        animation: google.maps.Animation.DROP,
        title: "180.RENACER 05 DE JULIO"

    });



    //information for
    function goToLink180() {
        infowindow180.open(map,marker180);
        if (marker.getAnimation() != null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
         
    }
    google.maps.event.addListener(marker180, 'click', goToLink180);
    google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 181
 
 //positions
    var point181 = new google.maps.LatLng(13.690413, -88.974893);

    var contentString181 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">UNA LUZ EN SAN RAFAEL</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Una Luz en San Rafael</b> , 18 de Abril de 2010. Dirección: Cantón San Rafael La Loma. Días y horas de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.</p>'+
      '</div>'+
      '</div>';

      var infowindow181 = new google.maps.InfoWindow({
      content: contentString181
  });
    //markers
    var marker181 = new google.maps.Marker({
        position: point181,
        map: map,
        category: cook,
        icon: cook,
        animation: google.maps.Animation.DROP,
        title: "181.UNA LUZ EN SAN RAFAEL"

    });



    //information for
    function goToLink181() {
        infowindow181.open(map,marker181);
        if (marker.getAnimation() != null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
         
    }
    google.maps.event.addListener(marker181, 'click', goToLink181);
    google.maps.event.addDomListener(window, 'load', initialize);


//MARCADOR 182
 
 //positions
    var point182 = new google.maps.LatLng(13.727974, -88.952390);

    var contentString182 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">1° DE JULIO</h1>'+
      '<div id="bodyContent">'+
      '<p><b>1° de Julio</b> , 01 de Julio de 1984. Dirección: Colonia Cuscatlán, Desvío a Monte San Juan. Días y horas de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.</p>'+
      '</div>'+
      '</div>';

      var infowindow182 = new google.maps.InfoWindow({
      content: contentString182
  });
    //markers
    var marker182 = new google.maps.Marker({
        position: point182,
        map: map,
        category: cook,
        icon: cook,
        animation: google.maps.Animation.DROP,
        title: "182.1° DE JULIO"

    });



    //information for
    function goToLink182() {
        infowindow182.open(map,marker182);
        if (marker.getAnimation() != null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
         
    }
    google.maps.event.addListener(marker182, 'click', goToLink182);
    google.maps.event.addDomListener(window, 'load', initialize);
//MARCADOR 183
 
 //positions
    var point183 = new google.maps.LatLng(13.714442, -88.931969);

    var contentString183 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">20 DE JULIO</h1>'+
      '<div id="bodyContent">'+
      '<p><b>20 de Julio</b> , 20 de Julio de 1981. Dirección: Colonia Jardínes de Las Pavas, N° 9, Calle a San Ramón. Días y horas de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.</p>'+
      '</div>'+
      '</div>';

      var infowindow183 = new google.maps.InfoWindow({
      content: contentString183
  });
    //markers
    var marker183 = new google.maps.Marker({
        position: point183,
        map: map,
        category: cook,
        icon: cook,
        animation: google.maps.Animation.DROP,
        title: "183.20 DE JULIO"

    });



    //information for
    function goToLink183() {
        infowindow183.open(map,marker183);
        if (marker.getAnimation() != null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
         
    }
    google.maps.event.addListener(marker183, 'click', goToLink183);
    google.maps.event.addDomListener(window, 'load', initialize);
//MARCADOR 184
 
 //positions
    var point184 = new google.maps.LatLng(13.718966, -88.934859);

    var contentString184 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">20 DE MAYO</h1>'+
      '<div id="bodyContent">'+
      '<p><b>20 de Mayo</b> , 20 de Mayo de 1975. Dirección: Barrio San José 2ª Avenida Sur y 8ª Calle Oriente Casa N 113. Días y horas de reuniones: 6:00 a 8:00 p.m.</p>'+
      '</div>'+
      '</div>';

      var infowindow184 = new google.maps.InfoWindow({
      content: contentString184
  });
    //markers
    var marker184 = new google.maps.Marker({
        position: point184,
        map: map,
        category: cook,
        icon: cook,
        animation: google.maps.Animation.DROP,
        title: "184.20 DE MAYO"

    });



    //information for
    function goToLink184() {
        infowindow184.open(map,marker184);
        if (marker.getAnimation() != null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
         
    }
    google.maps.event.addListener(marker184, 'click', goToLink184);
    google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 185
 
 //positions
    var point185 = new google.maps.LatLng(13.723409, -88.940374);

    var contentString185 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">EL CALVARIO</h1>'+
      '<div id="bodyContent">'+
      '<p><b>EL CALVARIO</b> , 04 de Agosto de 1978. Dirección: Barrio El Calvario, 2ª Calle Poniente N° 73. Días  y horas  de reuniones: De  Lunes  a Domingo de 6:00 a 8:00 p.m.</p>'+
      '</div>'+
      '</div>';

      var infowindow185 = new google.maps.InfoWindow({
      content: contentString185
  });
    //markers
    var marker185 = new google.maps.Marker({
        position: point185,
        map: map,
        category: cook,
        icon: cook,
        animation: google.maps.Animation.DROP,
        title: "185.EL CALVARIO"

    });



    //information for
    function goToLink185() {
        infowindow185.open(map,marker185);
        if (marker.getAnimation() != null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
         
    }
    google.maps.event.addListener(marker185, 'click', goToLink185);
    google.maps.event.addDomListener(window, 'load', initialize);



//MARCADOR 186
 
 //positions
    var point186 = new google.maps.LatLng(13.721936, -88.934153);

    var contentString186 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">UNIDOS</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Unidos</b> , 17 de Enero de 1960. Dirección: Costado Norte del Parque Francisco Menéndez (Parque Viejo). Días y horas de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.</p>'+
      '</div>'+
      '</div>';

      var infowindow186 = new google.maps.InfoWindow({
      content: contentString186
  });
    //markers
    var marker186 = new google.maps.Marker({
        position: point186,
        map: map,
        category: cook,
        icon: cook,
        animation: google.maps.Animation.DROP,
        title: "186.UNIDOS"

    });



    //information for
    function goToLink186() {
        infowindow186.open(map,marker186);
        if (marker.getAnimation() != null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
         
    }
    google.maps.event.addListener(marker186, 'click', goToLink186);
    google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 187
 
 //positions
    var point187 = new google.maps.LatLng(13.730168, -88.932794);

    var contentString187 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">DESPERTAR 20 DE OCTUBRE</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Despertar 20 de Octubre</b> , 20 de Octubre de 2013. Dirección: Colonia  San Antonio 1, Km. 30 Carretera Panamericana. Días y horas de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.</p>'+
      '</div>'+
      '</div>';

      var infowindow187 = new google.maps.InfoWindow({
      content: contentString187
  });
    //markers
    var marker187 = new google.maps.Marker({
        position: point187,
        map: map,
        category: cook,
        icon: cook,
        animation: google.maps.Animation.DROP,
        title: "187.DESPERTAR 20 DE OCTUBRE"

    });



    //information for
    function goToLink187() {
        infowindow187.open(map,marker187);
        if (marker.getAnimation() != null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
         
    }
    google.maps.event.addListener(marker187, 'click', goToLink187);
    google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 188
 
 //positions
    var point188 = new google.maps.LatLng(13.721198, -88.911517);

    var contentString188 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">13 DE MAYO</h1>'+
      '<div id="bodyContent">'+
      '<p><b>13 de Mayo</b> , 13 de Mayo de 1986. Dirección: Cantón San Antonio 2 Cuadras al Oriente de La Ermita. Días y horas de reuniones: De Lunes a Domingo de 5:30 a 7:30 p.m.</p>'+
      '</div>'+
      '</div>';

      var infowindow188 = new google.maps.InfoWindow({
      content: contentString188
  });
    //markers
    var marker188 = new google.maps.Marker({
        position: point188,
        map: map,
        category: cook,
        icon: cook,
        animation: google.maps.Animation.DROP,
        title: "188.13 DE MAYO"

    });



    //information for
    function goToLink188() {
        infowindow188.open(map,marker188);
        if (marker.getAnimation() != null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
         
    }
    google.maps.event.addListener(marker188, 'click', goToLink188);
    google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 189
 
 //positions
    var point189 = new google.maps.LatLng(13.725576, -88.906034);

    var contentString189 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">17 DE OCTUBRE</h1>'+
      '<div id="bodyContent">'+
      '<p><b>17 de Octubre</b> , 17 de febrero de 2011. Dirección: Calle Briosco, Barrio El Centro. Días y horas de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.</p>'+
      '</div>'+
      '</div>';

      var infowindow189 = new google.maps.InfoWindow({
      content: contentString189
  });
    //markers
    var marker189 = new google.maps.Marker({
        position: point189,
        map: map,
        category: cook,
        icon: cook,
        animation: google.maps.Animation.DROP,
        title: "189.17 DE OCTUBRE"

    });



    //information for
    function goToLink189() {
        infowindow189.open(map,marker189);
        if (marker.getAnimation() != null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
         
    }
    google.maps.event.addListener(marker189, 'click', goToLink189);
    google.maps.event.addDomListener(window, 'load', initialize);

 //MARCADOR 190
 
 //positions
    var point190 = new google.maps.LatLng(13.722095, -88.902762);

    var contentString190 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">UNA LUZ EN MI CAMINO</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Una Luz en mi Camino</b> , 10 de Junio de 1983. Dirección: Cantón El Carmen. Días y horas de reuniones: De Lunes a Domingo de 5:00 a 7:00 p.m.</p>'+
      '</div>'+
      '</div>';

      var infowindow190 = new google.maps.InfoWindow({
      content: contentString190
  });
    //markers
    var marker190 = new google.maps.Marker({
        position: point190,
        map: map,
        category: cook,
        icon: cook,
        animation: google.maps.Animation.DROP,
        title: "190.UNA LUZ EN MI CAMINO"

    });



    //information for
    function goToLink190() {
        infowindow190.open(map,marker190);
        if (marker.getAnimation() != null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
         
    }
    google.maps.event.addListener(marker190, 'click', goToLink190);
    google.maps.event.addDomListener(window, 'load', initialize);   
 //MARCADOR 191
 
 //positions
    var point191 = new google.maps.LatLng(13.766371, -88.908641);

    var contentString191 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">CAMINO DE SALVACIÓN</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Camino de Salvación</b> , 07 de Mayo de 1976. Dirección: Barrio El Centro. Días y horas de reuniones: De Lunes a Domingo de 4:30 a 6:30 p.m.</p>'+
      '</div>'+
      '</div>';

      var infowindow191 = new google.maps.InfoWindow({
      content: contentString191
  });
    //markers
    var marker191 = new google.maps.Marker({
        position: point191,
        map: map,
        category: cook,
        icon: cook,
        animation: google.maps.Animation.DROP,
        title: "191.CAMINO DE SALVACIÓN"

    });



    //information for
    function goToLink191() {
        infowindow191.open(map,marker191);
        if (marker.getAnimation() != null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
         
    }
    google.maps.event.addListener(marker191, 'click', goToLink191);
    google.maps.event.addDomListener(window, 'load', initialize);


//MARCADOR 192
 
 //positions
    var point192 = new google.maps.LatLng(13.757649, -88.948864);

    var contentString192 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">FELIZ MENSAJE</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Feliz Mensaje</b> , 18 de Noviembre de 1980. Dirección: Barrio El Centro, contiguo a Juzgado de Paz. Días y horas de reuniones: De Lunes a Domingo de 6:30 a 8:30 p.m.</p>'+
      '</div>'+
      '</div>';

      var infowindow192 = new google.maps.InfoWindow({
      content: contentString192
  });
    //markers
    var marker192 = new google.maps.Marker({
        position: point192,
        map: map,
        category: cook,
        icon: cook,
        animation: google.maps.Animation.DROP,
        title: "192.FELIZ MENSAJE"

    });



    //information for
    function goToLink192() {
        infowindow192.open(map,marker192);
        if (marker.getAnimation() != null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
         
    }
    google.maps.event.addListener(marker192, 'click', goToLink192);
    google.maps.event.addDomListener(window, 'load', initialize);


//MARCADOR 193
 
 //positions
    var point193 = new google.maps.LatLng(13.755617, -88.949240);

    var contentString193 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">HAY UNA LUZ EN SAN MARTÍN</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Hay una Luz en San Martín</b> , 03 de Junio de 1991. Dirección: Cantón San Martín Calle Principal, 1 Cuadra después de La Ermita Católica. Días y horas de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.</p>'+
      '</div>'+
      '</div>';

      var infowindow193 = new google.maps.InfoWindow({
      content: contentString193
  });
    //markers
    var marker193 = new google.maps.Marker({
        position: point193,
        map: map,
        category: cook,
        icon: cook,
        animation: google.maps.Animation.DROP,
        title: "193.HAY UNA LUZ EN SAN MARTÍN"

    });



    //information for
    function goToLink193() {
        infowindow193.open(map,marker193);
        if (marker.getAnimation() != null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
         
    }
    google.maps.event.addListener(marker193, 'click', goToLink193);
    google.maps.event.addDomListener(window, 'load', initialize);



//MARCADOR 194
 
 //positions
    var point194 = new google.maps.LatLng(13.763141, -88.952094);

    var contentString194 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">LLEVANDO EL MENSAJE</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Llevando el Mensaje</b> , 07 Septiembre de 2006. Dirección: Cantón San José, Calle Principal. Días y horas de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.</p>'+
      '</div>'+
      '</div>';

      var infowindow194 = new google.maps.InfoWindow({
      content: contentString194
  });
    //markers
    var marker194 = new google.maps.Marker({
        position: point194,
        map: map,
        category: cook,
        icon: cook,
        animation: google.maps.Animation.DROP,
        title: "194.LLEVANDO EL MENSAJE"

    });



    //information for
    function goToLink194() {
        infowindow194.open(map,marker194);
        if (marker.getAnimation() != null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
         
    }
    google.maps.event.addListener(marker194, 'click', goToLink194);
    google.maps.event.addDomListener(window, 'load', initialize);


//MARCADOR 195
 
 //positions
    var point195 = new google.maps.LatLng(13.761370, -88.950656);

    var contentString195 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">NUEVO RENACER 27 DE JUNIO UNA LUZ EN SOLEDAD</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Nuevo Renacer 27 de Junio una Luz en Soledad</b> , 27 de Junio de 1995. Dirección: Cantón. Soledad, contiguo a Ermita Católica. Días y horas de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.</p>'+
      '</div>'+
      '</div>';

      var infowindow195 = new google.maps.InfoWindow({
      content: contentString195
  });
    //markers
    var marker195 = new google.maps.Marker({
        position: point195,
        map: map,
        category: cook,
        icon: cook,
        animation: google.maps.Animation.DROP,
        title: "195.NUEVO RENACER 27 DE JUNIO UNA LUZ EN SOLEDAD"

    });



    //information for
    function goToLink195() {
        infowindow195.open(map,marker195);
        if (marker.getAnimation() != null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
         
    }
    google.maps.event.addListener(marker195, 'click', goToLink195);
    google.maps.event.addDomListener(window, 'load', initialize);
    //MARCADOR 196
 
 //positions
    var point196 = new google.maps.LatLng(13.757410, -88.952094);

    var contentString196 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">SAGRADO DE DIOS</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Sagrado de Dios</b> , 01 de Enero de 2004. Dirección: Cantón. El Rosario, una Cuadra después de La Ermita Católica. Días y horas de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.</p>'+
      '</div>'+
      '</div>';

      var infowindow196 = new google.maps.InfoWindow({
      content: contentString196
  });
    //markers
    var marker196 = new google.maps.Marker({
        position: point196,
        map: map,
        category: cook,
        icon: cook,
        animation: google.maps.Animation.DROP,
        title: "196.SAGRADO DE DIOS"

    });



    //information for
    function goToLink196() {
        infowindow196.open(map,marker196);
        if (marker.getAnimation() != null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
         
    }
    google.maps.event.addListener(marker196, 'click', goToLink196);
    google.maps.event.addDomListener(window, 'load', initialize);


//MARCADOR 197
 
 //positions
    var point197 = new google.maps.LatLng(13.814868, -89.057478);

    var contentString197 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">PALACIO CON PUERTAS ABIERTAS</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Palacio Con Puertas Abiertas</b> , 03 de Mayo de 2009. Dirección: Cantón Palacios. Días y horas de reuniones: De Lunes a Domingo de 5:00 a 7:00 p.m.</p>'+
      '</div>'+
      '</div>';

      var infowindow197 = new google.maps.InfoWindow({
      content: contentString197
  });
    //markers
    var marker197 = new google.maps.Marker({
        position: point197,
        map: map,
        category: cook,
        icon: cook,
        animation: google.maps.Animation.DROP,
        title: "197.PALACIO CON PUERTAS ABIERTAS"

    });



    //information for
    function goToLink197() {
        infowindow197.open(map,marker197);
        if (marker.getAnimation() != null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
         
    }
    google.maps.event.addListener(marker197, 'click', goToLink197);
    google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 198
 
 //positions
    var point198 = new google.maps.LatLng(13.763276, -89.048996);

    var contentString198 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">06 DE AGOSTO</h1>'+
      '<div id="bodyContent">'+
      '<p><b>06 de Agosto</b> , 6 de Agosto de 1962. Dirección: Avenida Morazán Nº 13, Barrio El Centro. Días y horas de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.</p>'+
      '</div>'+
      '</div>';

      var infowindow198 = new google.maps.InfoWindow({
      content: contentString198
  });
    //markers
    var marker198 = new google.maps.Marker({
        position: point198,
        map: map,
        category: cook,
        icon: cook,
        animation: google.maps.Animation.DROP,
        title: "198.06 DE AGOSTO"

    });



    //information for
    function goToLink198() {
        infowindow198.open(map,marker198);
        if (marker.getAnimation() != null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
         
    }
    google.maps.event.addListener(marker198, 'click', goToLink198);
    google.maps.event.addDomListener(window, 'load', initialize);

 //MARCADOR 199
 
 //positions
    var point199 = new google.maps.LatLng(13.756762, -89.051553);

    var contentString199 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">UNA LUZ EN EL BOSQUE</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Una Luz en el Bosque</b> , 06 de Octubre de 1999. Dirección: Comunidad Bosque de Perulapía Carretera Suchitoto. Días y horas de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.</p>'+
      '</div>'+
      '</div>';

      var infowindow199 = new google.maps.InfoWindow({
      content: contentString199
  });
    //markers
    var marker199 = new google.maps.Marker({
        position: point199,
        map: map,
        category: cook,
        icon: cook,
        animation: google.maps.Animation.DROP,
        title: "199.UNA LUZ EN EL BOSQUE"

    });



    //information for
    function goToLink199() {
        infowindow199.open(map,marker199);
        if (marker.getAnimation() != null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
         
    }
    google.maps.event.addListener(marker199, 'click', goToLink199);
    google.maps.event.addDomListener(window, 'load', initialize);

 //MARCADOR 200
 
 //positions
    var point200 = new google.maps.LatLng(13.699935, -88.897167);

    var contentString200 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">NUEVO RENACER MILAGRO DE DIOS</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Nuevo Renacer Milagro de Dios</b> , 1 de Diciembre de 2001. Dirección: Cantón San Francisco, Calle Principal Caserío Los Mangos. Días y horas de reuniones: De Lunes a Domingo de 5:30 a  7:30 p.m.</p>'+
      '</div>'+
      '</div>';

      var infowindow200 = new google.maps.InfoWindow({
      content: contentString200
  });
    //markers
    var marker200 = new google.maps.Marker({
        position: point200,
        map: map,
        category: cook,
        icon: cook,
        animation: google.maps.Animation.DROP,
        title: "200.NUEVO RENACER MILAGRO DE DIOS"

    });



    //information for
    function goToLink200() {
        infowindow200.open(map,marker200);
        if (marker.getAnimation() != null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
         
    }
    google.maps.event.addListener(marker200, 'click', goToLink200);
    google.maps.event.addDomListener(window, 'load', initialize);

 //MARCADOR 201
 
 //positions
    var point201 = new google.maps.LatLng(13.699935, -88.897167);

    var contentString201 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">QUINTA TRADICIÓN</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Quinta Tradición</b> , 16 de Mayo de 1969. Dirección: Barrio El Centro. Días y horas de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.</p>'+
      '</div>'+
      '</div>';

      var infowindow201 = new google.maps.InfoWindow({
      content: contentString201
  });
    //markers
    var marker201 = new google.maps.Marker({
        position: point201,
        map: map,
        category: cook,
        icon: cook,
        animation: google.maps.Animation.DROP,
        title: "201.QUINTA TRADICIÓN"

    });



    //information for
    function goToLink201() {
        infowindow201.open(map,marker201);
        if (marker.getAnimation() != null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
         
    }
    google.maps.event.addListener(marker201, 'click', goToLink201);
    google.maps.event.addDomListener(window, 'load', initialize);

 //MARCADOR 202
 
 //positions
    var point202 = new google.maps.LatLng(13.844022, -89.096012);

    var contentString202 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">NAO SAN JOSÉ</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Nao San José</b> , 18 de Enero de 2011. Dirección: Cantón Ánimas, Km 9. Días y horas de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.</p>'+
      '</div>'+
      '</div>';

      var infowindow202 = new google.maps.InfoWindow({
      content: contentString202
  });
    //markers
    var marker202 = new google.maps.Marker({
        position: point202,
        map: map,
        category: cook,
        icon: cook,
        animation: google.maps.Animation.DROP,
        title: "202.NAO SAN JOSÉ"

    });



    //information for
    function goToLink202() {
        infowindow202.open(map,marker202);
        if (marker.getAnimation() != null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
         
    }
    google.maps.event.addListener(marker202, 'click', goToLink202);
    google.maps.event.addDomListener(window, 'load', initialize);

     //MARCADOR 203
 
 //positions
    var point203 = new google.maps.LatLng(13.839834, -89.097300);

    var contentString203 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">NUEVO DESPERTAR SAN JOSÉ GUAYABAL</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Nuevo Despertar San José Guayabal</b> , 15 de Octubre de 2008. Dirección: Barrio San Agustín, salida a Cantón Meléndez. Días y horas de reuniones: De Lunes a Domingo de 6:30 a 8:30 p.m.</p>'+
      '</div>'+
      '</div>';

      var infowindow203 = new google.maps.InfoWindow({
      content: contentString203
  });
    //markers
    var marker203 = new google.maps.Marker({
        position: point203,
        map: map,
        category: cook,
        icon: cook,
        animation: google.maps.Animation.DROP,
        title: "203.NUEVO DESPERTAR SAN JOSÉ GUAYABAL"

    });



    //information for
    function goToLink203() {
        infowindow203.open(map,marker203);
        if (marker.getAnimation() != null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
         
    }
    google.maps.event.addListener(marker203, 'click', goToLink203);
    google.maps.event.addDomListener(window, 'load', initialize);


//MARCADOR 204
 
 //positions
    var point204 = new google.maps.LatLng(13.833573, -89.092645);

    var contentString204 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">SAN JOSÉ</h1>'+
      '<div id="bodyContent">'+
      '<p><b>San José</b> , 18 de Mayo de 1972. Dirección: 1ª Avenida Sur y 3ª Calle Poniente frente a Unidad de Salud. Días y horas de reuniones: De Lunes a Domingo de 6:30 a 8:30 p.m.</p>'+
      '</div>'+
      '</div>';

      var infowindow204 = new google.maps.InfoWindow({
      content: contentString204
  });
    //markers
    var marker204 = new google.maps.Marker({
        position: point204,
        map: map,
        category: cook,
        icon: cook,
        animation: google.maps.Animation.DROP,
        title: "204.SAN JOSÉ"

    });



    //information for
    function goToLink204() {
        infowindow204.open(map,marker204);
        if (marker.getAnimation() != null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
         
    }
    google.maps.event.addListener(marker204, 'click', goToLink204);
    google.maps.event.addDomListener(window, 'load', initialize);
//MARCADOR 205
 
 //positions
    var point205 = new google.maps.LatLng(13.769888, -89.035199);

    var contentString205 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">29 DE JUNIO</h1>'+
      '<div id="bodyContent">'+
      '<p><b>29 de Junio</b> , 29 de Junio de 1980. Dirección: Cantón San José El Espinal, lotificación La Granja, Km 23 C.A. Días y horas de reunio- nes: De Lunes a Domingo de 6:00 a 8:00 p.m.</p>'+
      '</div>'+
      '</div>';

      var infowindow205 = new google.maps.InfoWindow({
      content: contentString205
  });
    //markers
    var marker205 = new google.maps.Marker({
        position: point205,
        map: map,
        category: cook,
        icon: cook,
        animation: google.maps.Animation.DROP,
        title: "205.29 DE JUNIO"

    });



    //information for
    function goToLink205() {
        infowindow205.open(map,marker205);
        if (marker.getAnimation() != null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
         
    }
    google.maps.event.addListener(marker205, 'click', goToLink205);
    google.maps.event.addDomListener(window, 'load', initialize);

 //MARCADOR 206
 
 //positions
    var point206 = new google.maps.LatLng(13.766637, -89.038353);

    var contentString206 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">BUENA ACCIÓN</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Buena Acción</b> , 30 de Noviembre de 1977. Dirección: Cantón Huiziltepeque. Días y horas de reuniones: De Lunes a Domingo de 5:00 a 7:00 p.m.</p>'+
      '</div>'+
      '</div>';

      var infowindow206 = new google.maps.InfoWindow({
      content: contentString206
  });
    //markers
    var marker206 = new google.maps.Marker({
        position: point206,
        map: map,
        category: cook,
        icon: cook,
        animation: google.maps.Animation.DROP,
        title: "206.BUENA ACCIÓN"

    });



    //information for
    function goToLink206() {
        infowindow206.open(map,marker206);
        if (marker.getAnimation() != null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
         
    }
    google.maps.event.addListener(marker206, 'click', goToLink206);
    google.maps.event.addDomListener(window, 'load', initialize);

 //MARCADOR 207
 
 //positions
    var point207 = new google.maps.LatLng(13.769033, -89.034491);

    var contentString207 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">DESPERTAR 23 DE JUNIO</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Despertar 23 de Junio</b> , 23 de Junio de 1974. Dirección: Cantón La Loma Carretera Panamericana. Días y horas de reuniones: De Lunes a Domingo de 6:30 a 8:30 p.m.</p>'+
      '</div>'+
      '</div>';

      var infowindow207 = new google.maps.InfoWindow({
      content: contentString207
  });
    //markers
    var marker207 = new google.maps.Marker({
        position: point207,
        map: map,
        category: cook,
        icon: cook,
        animation: google.maps.Animation.DROP,
        title: "207.DESPERTAR 23 DE JUNIO"

    });



    //information for
    function goToLink207() {
        infowindow207.open(map,marker207);
        if (marker.getAnimation() != null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
         
    }
    google.maps.event.addListener(marker207, 'click', goToLink207);
    google.maps.event.addDomListener(window, 'load', initialize);

 //MARCADOR 208
 
 //positions
    var point208 = new google.maps.LatLng(13.760968, -89.035821);

    var contentString208 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">FE 03 DE ABRIL</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Fe 03 de Abril</b> , 03 de Abril de 1984. Dirección: Cantón La Loma, Carretera Panamericana Km. 22, Calle al Paraíso. Días y horas de reuniones: De Lunes a Domingo de 6:30 a 8:30 p.m.</p>'+
      '</div>'+
      '</div>';

      var infowindow208 = new google.maps.InfoWindow({
      content: contentString208
  });
    //markers
    var marker208 = new google.maps.Marker({
        position: point208,
        map: map,
        category: cook,
        icon: cook,
        animation: google.maps.Animation.DROP,
        title: "208.FE 03 DE ABRIL"

    });



    //information for
    function goToLink208() {
        infowindow208.open(map,marker208);
        if (marker.getAnimation() != null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
         
    }
    google.maps.event.addListener(marker208, 'click', goToLink208);
    google.maps.event.addDomListener(window, 'load', initialize);

 //MARCADOR 209
 
 //positions
    var point209 = new google.maps.LatLng(13.771284, -89.036593);

    var contentString209 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">FE Y ACCIÓN</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Fe y Acción</b> , 01 de Agosto de 2009. Dirección: Cantón Miraflores, 2 Cuadras antes de La Iglesia. Días y horas de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.</p>'+
      '</div>'+
      '</div>';

      var infowindow209 = new google.maps.InfoWindow({
      content: contentString209
  });
    //markers
    var marker209 = new google.maps.Marker({
        position: point209,
        map: map,
        category: cook,
        icon: cook,
        animation: google.maps.Animation.DROP,
        title: "209.FE Y ACCIÓN"

    });



    //information for
    function goToLink209() {
        infowindow209.open(map,marker209);
        if (marker.getAnimation() != null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
         
    }
    google.maps.event.addListener(marker209, 'click', goToLink209);
    google.maps.event.addDomListener(window, 'load', initialize);

 //MARCADOR 210
 
 //positions
    var point210 = new google.maps.LatLng(13.763219, -89.037817);

    var contentString210 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">LA LUZ DEL 03 DE ENERO</h1>'+
      '<div id="bodyContent">'+
      '<p><b>La Luz del 03 de Enero</b> , 03 de Enero de 1975. Dirección: Cantón San Agustín, Calle Principal. Días y horas de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.</p>'+
      '</div>'+
      '</div>';

      var infowindow210 = new google.maps.InfoWindow({
      content: contentString210
  });
    //markers
    var marker210 = new google.maps.Marker({
        position: point210,
        map: map,
        category: cook,
        icon: cook,
        animation: google.maps.Animation.DROP,
        title: "210.LA LUZ DEL 03 DE ENERO"

    });



    //information for
    function goToLink210() {
        infowindow210.open(map,marker210);
        if (marker.getAnimation() != null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
         
    }
    google.maps.event.addListener(marker210, 'click', goToLink210);
    google.maps.event.addDomListener(window, 'load', initialize);


 //MARCADOR 211
 
 //positions
    var point211 = new google.maps.LatLng(13.772154, -89.038224);

    var contentString211 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">LA LLAVE DE LA BUENA VOLUNTAD</h1>'+
      '<div id="bodyContent">'+
      '<p><b>La Llave de la Buena Voluntad</b> , 06 de Agosto de 1975. Dirección: Carretera Panamericana, Km. 22. Días y horas de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.</p>'+
      '</div>'+
      '</div>';

      var infowindow211 = new google.maps.InfoWindow({
      content: contentString211
  });
    //markers
    var marker211 = new google.maps.Marker({
        position: point211,
        map: map,
        category: cook,
        icon: cook,
        animation: google.maps.Animation.DROP,
        title: "211.LA LLAVE DE LA BUENA VOLUNTAD"

    });



    //information for
    function goToLink211() {
        infowindow211.open(map,marker211);
        if (marker.getAnimation() != null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
         
    }
    google.maps.event.addListener(marker211, 'click', goToLink211);
    google.maps.event.addDomListener(window, 'load', initialize);    

 //MARCADOR 212
 
 //positions
    var point212 = new google.maps.LatLng(13.774947, -89.037130);

    var contentString212 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">NUEVA DIMENSIÓN</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Nueva Dimensión</b> ,  21 de Noviembre de 1970. Dirección: Cantón El Espino, Calle Principal. Días y horas de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.</p>'+
      '</div>'+
      '</div>';

      var infowindow212 = new google.maps.InfoWindow({
      content: contentString212
  });
    //markers
    var marker212 = new google.maps.Marker({
        position: point212,
        map: map,
        category: cook,
        icon: cook,
        animation: google.maps.Animation.DROP,
        title: "212.NUEVA DIMENSIÓN"

    });



    //information for
    function goToLink212() {
        infowindow212.open(map,marker212);
        if (marker.getAnimation() != null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
         
    }
    google.maps.event.addListener(marker212, 'click', goToLink212);
    google.maps.event.addDomListener(window, 'load', initialize);

 //MARCADOR 213
 
 //positions
    var point213 = new google.maps.LatLng(13.769591, -89.039147);

    var contentString213 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">NUEVO DESPERTAR 18 DE JULIO</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Nuevo Despertar 18 de Julio</b> , 18 de Julio de 1977. Dirección: Cantón Istagua, Lotificación Brisas del Rio Carretera a Suchitoto Km 26 ½. Días y horas de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.</p>'+
      '</div>'+
      '</div>';

      var infowindow213 = new google.maps.InfoWindow({
      content: contentString213
  });
    //markers
    var marker213 = new google.maps.Marker({
        position: point213,
        map: map,
        category: cook,
        icon: cook,
        animation: google.maps.Animation.DROP,
        title: "213.NUEVO DESPERTAR 18 DE JULIO"

    });



    //information for
    function goToLink213() {
        infowindow213.open(map,marker213);
        if (marker.getAnimation() != null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
         
    }
    google.maps.event.addListener(marker213, 'click', goToLink213);
    google.maps.event.addDomListener(window, 'load', initialize);

 //MARCADOR 214
 
 //positions
    var point214 = new google.maps.LatLng(13.766381, -89.034147);

    var contentString214 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">PRIMERO DE SEPTIEMBRE</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Primero de Septiembre</b> , 01 de Septiembre de 1979. Dirección: Cantón San José El Espino. Días y horas de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.</p>'+
      '</div>'+
      '</div>';

      var infowindow214 = new google.maps.InfoWindow({
      content: contentString214
  });
    //markers
    var marker214 = new google.maps.Marker({
        position: point214,
        map: map,
        category: cook,
        icon: cook,
        animation: google.maps.Animation.DROP,
        title: "214.PRIMERO DE SEPTIEMBRE"

    });



    //information for
    function goToLink214() {
        infowindow214.open(map,marker214);
        if (marker.getAnimation() != null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
         
    }
    google.maps.event.addListener(marker214, 'click', goToLink214);
    google.maps.event.addDomListener(window, 'load', initialize);

 //MARCADOR 215
 
 //positions
    var point215 = new google.maps.LatLng(13.767178, -89.035821);

    var contentString215 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">RENACER 06 DE JULIO 2013</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Renacer 06 de Julio 2013</b> , 06 de Julio de 2013. Dirección: Cantón El Paraíso Abajo. Días y horas de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.</p>'+
      '</div>'+
      '</div>';

      var infowindow215 = new google.maps.InfoWindow({
      content: contentString215
  });
    //markers
    var marker215 = new google.maps.Marker({
        position: point215,
        map: map,
        category: cook,
        icon: cook,
        animation: google.maps.Animation.DROP,
        title: "215.RENACER 06 DE JULIO 2013"

    });



    //information for
    function goToLink215() {
        infowindow215.open(map,marker215);
        if (marker.getAnimation() != null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
         
    }
    google.maps.event.addListener(marker215, 'click', goToLink215);
    google.maps.event.addDomListener(window, 'load', initialize);

 //MARCADOR 216
 
 //positions
    var point216 = new google.maps.LatLng(13.762948, -89.035327);

    var contentString216 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">RENACER EN EL VALLE</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Renacer en el Valle</b> , 04 de Mayo de 1975. Dirección: Cantón Miraflores, 2 Cuadras después de La Calle al Cementerio. Días y horas de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.</p>'+
      '</div>'+
      '</div>';

      var infowindow216 = new google.maps.InfoWindow({
      content: contentString216
  });
    //markers
    var marker216 = new google.maps.Marker({
        position: point216,
        map: map,
        category: cook,
        icon: cook,
        animation: google.maps.Animation.DROP,
        title: "216.RENACER EN EL VALLE"

    });



    //information for
    function goToLink216() {
        infowindow216.open(map,marker216);
        if (marker.getAnimation() != null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
         
    }
    google.maps.event.addListener(marker216, 'click', goToLink216);
    google.maps.event.addDomListener(window, 'load', initialize);

 //MARCADOR 217
 
 //positions
    var point217 = new google.maps.LatLng(13.764928, -89.036701);

    var contentString217 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">RESURRECCIÓN 03 DE ABRIL</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Resurrección 03 de Abril</b> ,  03 de Abril de 1976. Dirección: Cantón Tecoluco Arriba. Días y horas de reuniones: De Lunes a Domingo de 6:30 a 8:30 p.m.</p>'+
      '</div>'+
      '</div>';

      var infowindow217 = new google.maps.InfoWindow({
      content: contentString217
  });
    //markers
    var marker217 = new google.maps.Marker({
        position: point217,
        map: map,
        category: cook,
        icon: cook,
        animation: google.maps.Animation.DROP,
        title: "217.RESURRECCIÓN 03 DE ABRIL"

    });



    //information for
    function goToLink217() {
        infowindow217.open(map,marker217);
        if (marker.getAnimation() != null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
         
    }
    google.maps.event.addListener(marker217, 'click', goToLink217);
    google.maps.event.addDomListener(window, 'load', initialize);

 //MARCADOR 218
 
 //positions
    var point218 = new google.maps.LatLng(13.769096, -89.036143);

    var contentString218 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">TERCERA TRADICIÓN</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Tercera Tradición</b> ,  15 de Septiembre de 1969. Dirección: Cantón El Carmen, Carretera antigua Panamericana. Días y horas de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.</p>'+
      '</div>'+
      '</div>';

      var infowindow218 = new google.maps.InfoWindow({
      content: contentString218
  });
    //markers
    var marker218 = new google.maps.Marker({
        position: point218,
        map: map,
        category: cook,
        icon: cook,
        animation: google.maps.Animation.DROP,
        title: "218.TERCERA TRADICIÓN"

    });



    //information for
    function goToLink218() {
        infowindow218.open(map,marker218);
        if (marker.getAnimation() != null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
         
    }
    google.maps.event.addListener(marker218, 'click', goToLink218);
    google.maps.event.addDomListener(window, 'load', initialize);

 //MARCADOR 219
 
 //positions
    var point219 = new google.maps.LatLng(13.765553, -89.033074);

    var contentString219 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">UNA BENDICIÓN DE DIOS</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Una Bendición de Dios</b> ,  24 de Junio de 1995. Dirección: Cantón Tecomatepe, Carretera a Suchitoto Km. 31 ½ Caserío Los Pérez. Días y horas de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.</p>'+
      '</div>'+
      '</div>';

      var infowindow219 = new google.maps.InfoWindow({
      content: contentString219
  });
    //markers
    var marker219 = new google.maps.Marker({
        position: point219,
        map: map,
        category: cook,
        icon: cook,
        animation: google.maps.Animation.DROP,
        title: "219.UNA BENDICIÓN DE DIOS"

    });



    //information for
    function goToLink219() {
        infowindow219.open(map,marker219);
        if (marker.getAnimation() != null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
         
    }
    google.maps.event.addListener(marker219, 'click', goToLink219);
    google.maps.event.addDomListener(window, 'load', initialize);

 //MARCADOR 220
 
 //positions
    var point220 = new google.maps.LatLng(13.764407, -89.038739);

    var contentString220 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">UNA LUZ EN LA ESPERANZA</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Una Luz en la Esperanza</b> , 16 de Mayo de 1986. Dirección: Cantón La Esperanza, en Zona Nº 2, 2ª Cantarera. Días y horas de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.</p>'+
      '</div>'+
      '</div>';

      var infowindow220 = new google.maps.InfoWindow({
      content: contentString220
  });
    //markers
    var marker220 = new google.maps.Marker({
        position: point220,
        map: map,
        category: cook,
        icon: cook,
        animation: google.maps.Animation.DROP,
        title: "220.UNA LUZ EN LA ESPERANZA"

    });



    //information for
    function goToLink220() {
        infowindow220.open(map,marker220);
        if (marker.getAnimation() != null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
         
    }
    google.maps.event.addListener(marker220, 'click', goToLink220);
    google.maps.event.addDomListener(window, 'load', initialize);


 //MARCADOR 221
 
 //positions
    var point221 = new google.maps.LatLng(13.736060, -88.888139);

    var contentString221 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">17 DE JUNIO</h1>'+
      '<div id="bodyContent">'+
      '<p><b>17 de Junio</b> , 17 de Junio de 1972. Dirección: 1ª Avenida Sur, Barrio El Centro. Días y horas de reuniones: De Lunes a Domingo de 5:00 a 7:00 p.m.</p>'+
      '</div>'+
      '</div>';

      var infowindow221 = new google.maps.InfoWindow({
      content: contentString221
  });
    //markers
    var marker221 = new google.maps.Marker({
        position: point221,
        map: map,
        category: cook,
        icon: cook,
        animation: google.maps.Animation.DROP,
        title: "221.17 DE JUNIO"

    });



    //information for
    function goToLink221() {
        infowindow221.open(map,marker221);
        if (marker.getAnimation() != null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
         
    }
    google.maps.event.addListener(marker221, 'click', goToLink221);
    google.maps.event.addDomListener(window, 'load', initialize);

 //MARCADOR 222
 
 //positions
    var point222 = new google.maps.LatLng(13.741630, -88.879989);

    var contentString222 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">27 DE MAYO</h1>'+
      '<div id="bodyContent">'+
      '<p><b>27 de Mayo</b> , 27 de Mayo de 1981. Dirección: Calle a Rosario Cuscatlán, frente a Subsectoría Eléctrica Atachin. Días y horas de reuniones: De Lunes a Domingo de 5:00 a 7:00 p.m.</p>'+
      '</div>'+
      '</div>';

      var infowindow222 = new google.maps.InfoWindow({
      content: contentString222
  });
    //markers
    var marker222 = new google.maps.Marker({
        position: point222,
        map: map,
        category: cook,
        icon: cook,
        animation: google.maps.Animation.DROP,
        title: "222.27 DE MAYO"

    });



    //information for
    function goToLink222() {
        infowindow222.open(map,marker222);
        if (marker.getAnimation() != null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
         
    }
    google.maps.event.addListener(marker222, 'click', goToLink222);
    google.maps.event.addDomListener(window, 'load', initialize);

 //MARCADOR 223
 
 //positions
    var point223 = new google.maps.LatLng(13.741824, -88.875511);

    var contentString223 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">DESPERTAR 06 DE NOVIEMBRE</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Despertar 06 de Noviembre</b> , 06 de Noviembre de 1983. Dirección: Cantón Cerro Colorado, Carretera a Ilobasco, Km. 44. Días y horas de reuniones: De Lunes a Domingo de 4:00 a 6:00 p.m.</p>'+
      '</div>'+
      '</div>';

      var infowindow223 = new google.maps.InfoWindow({
      content: contentString223
  });
    //markers
    var marker223 = new google.maps.Marker({
        position: point223,
        map: map,
        category: cook,
        icon: cook,
        animation: google.maps.Animation.DROP,
        title: "223.DESPERTAR 06 DE NOVIEMBRE"

    });



    //information for
    function goToLink223() {
        infowindow223.open(map,marker223);
        if (marker.getAnimation() != null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
         
    }
    google.maps.event.addListener(marker223, 'click', goToLink223);
    google.maps.event.addDomListener(window, 'load', initialize);



 //MARCADOR 224
 
 //positions
    var point224 = new google.maps.LatLng(13.740073, -88.878129);

    var contentString224 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">DESPERTAR LO MEJOR DE BILL</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Despertar lo Mejor de Bill</b> , 10 de Mayo de 1999. Dirección: Cantón  Cerro Colorado, Carretera Ilobasco Km 45. Días y horas de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.</p>'+
      '</div>'+
      '</div>';

      var infowindow224 = new google.maps.InfoWindow({
      content: contentString224
  });
    //markers
    var marker224 = new google.maps.Marker({
        position: point224,
        map: map,
        category: cook,
        icon: cook,
        animation: google.maps.Animation.DROP,
        title: "224.DESPERTAR LO MEJOR DE BILL"

    });



    //information for
    function goToLink224() {
        infowindow224.open(map,marker224);
        if (marker.getAnimation() != null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
         
    }
    google.maps.event.addListener(marker224, 'click', goToLink224);
    google.maps.event.addDomListener(window, 'load', initialize);



 //MARCADOR 225
 
 //positions
    var point225 = new google.maps.LatLng(13.731860, -88.892956);

    var contentString225 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">DIOS CON NOSOTROS</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Dios con Nosotros</b> , 04 de Abril de 1980. Dirección: Cantón Copinol Calle al beneficio, cruzadilla línea férrea. Días y horas de reuniones: De Lunes a Domingo de 5:00 a 7:00 p.m.</p>'+
      '</div>'+
      '</div>';

      var infowindow225 = new google.maps.InfoWindow({
      content: contentString225
  });
    //markers
    var marker225 = new google.maps.Marker({
        position: point225,
        map: map,
        category: cook,
        icon: cook,
        animation: google.maps.Animation.DROP,
        title: "225.DIOS CON NOSOTROS"

    });



    //information for
    function goToLink225() {
        infowindow225.open(map,marker225);
        if (marker.getAnimation() != null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
         
    }
    google.maps.event.addListener(marker225, 'click', goToLink225);
    google.maps.event.addDomListener(window, 'load', initialize);


 //MARCADOR 226
 
 //positions
    var point226 = new google.maps.LatLng(13.734236, -88.891797);

    var contentString226 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">DIVINA PROVIDENCIA</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Divina Providencia</b> , 25 de Febrero de 1975. Dirección: Cantón Soledad. Días y horas de reuniones: De Lunes a Domingo de 5:00 a 7:00 p.m.</p>'+
      '</div>'+
      '</div>';

      var infowindow226 = new google.maps.InfoWindow({
      content: contentString226
  });
    //markers
    var marker226 = new google.maps.Marker({
        position: point226,
        map: map,
        category: cook,
        icon: cook,
        animation: google.maps.Animation.DROP,
        title: "226.DIVINA PROVIDENCIA"

    });



    //information for
    function goToLink226() {
        infowindow226.open(map,marker226);
        if (marker.getAnimation() != null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
         
    }
    google.maps.event.addListener(marker226, 'click', goToLink226);
    google.maps.event.addDomListener(window, 'load', initialize);


 //MARCADOR 227
 
 //positions
    var point227 = new google.maps.LatLng(13.732934, -88.886712);

    var contentString227 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">NUEVA VIDA</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Nueva Vida</b> , 28 de Febrero de 1964. Dirección: Calle Antigua a San Sebastián, contiguo a Casa Comunal. Días y horas de reuniones: De Lunes a Viernes de 5:00 a 7:00 p.m. Sábado y Domingo de 4.00 a 6:00 p.m.</p>'+
      '</div>'+
      '</div>';

      var infowindow227 = new google.maps.InfoWindow({
      content: contentString227
  });
    //markers
    var marker227 = new google.maps.Marker({
        position: point227,
        map: map,
        category: cook,
        icon: cook,
        animation: google.maps.Animation.DROP,
        title: "227.NUEVA VIDA"

    });



    //information for
    function goToLink227() {
        infowindow227.open(map,marker227);
        if (marker.getAnimation() != null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
         
    }
    google.maps.event.addListener(marker227, 'click', goToLink227);
    google.maps.event.addDomListener(window, 'load', initialize);

 //MARCADOR 228
 
 //positions
    var point228 = new google.maps.LatLng();

    var contentString228 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">PRIMERO DE JUNIO</h1>'+
      '<div id="bodyContent">'+
      '<p><b>pri de Junio</b> , 01 de Junio de 1993. Dirección: Cantón El Espinal. Días y horas de reuniones: De Lunes a Domingo de 5:00 a 7:00 p.m.</p>'+
      '</div>'+
      '</div>';

      var infowindow228 = new google.maps.InfoWindow({
      content: contentString228
  });
    //markers
    var marker228 = new google.maps.Marker({
        position: point228,
        map: map,
        category: cook,
        icon: cook,
        animation: google.maps.Animation.DROP,
        title: "228.PRIMERO DE JUNIO"

    });



    //information for
    function goToLink228() {
        infowindow228.open(map,marker228);
        if (marker.getAnimation() != null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
         
    }
    google.maps.event.addListener(marker228, 'click', goToLink228);
    google.maps.event.addDomListener(window, 'load', initialize);

 //MARCADOR 229
 
 //positions
    var point229 = new google.maps.LatLng(13.726735, -88.879872);

    var contentString229 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">PRIMERO DE MAYO</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Primero de Mayo</b> , 01 de Mayo de 1971. Dirección: Calle Antigua a Ilobasco. Días y horas de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.</p>'+
      '</div>'+
      '</div>';

      var infowindow229 = new google.maps.InfoWindow({
      content: contentString229
  });
    //markers
    var marker229 = new google.maps.Marker({
        position: point229,
        map: map,
        category: cook,
        icon: cook,
        animation: google.maps.Animation.DROP,
        title: "229.PRIMERO DE MAYO"

    });



    //information for
    function goToLink229() {
        infowindow229.open(map,marker229);
        if (marker.getAnimation() != null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
         
    }
    google.maps.event.addListener(marker229, 'click', goToLink229);
    google.maps.event.addDomListener(window, 'load', initialize);


 //MARCADOR 230
 
 //positions
    var point230 = new google.maps.LatLng(13.726964, -88.889270);

    var contentString230 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">UN MILAGRO DE DIOS</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Un Milagro de Dios</b> , 25 de Abril de 1979. Dirección: Cantón Soledad, 4 Cuadras después de La vueltona. Días y horas de reuniones: De Lunes a Domingo de 4:00 a 6:00 p.m.</p>'+
      '</div>'+
      '</div>';

      var infowindow230 = new google.maps.InfoWindow({
      content: contentString230
  });
    //markers
    var marker230 = new google.maps.Marker({
        position: point230,
        map: map,
        category: cook,
        icon: cook,
        animation: google.maps.Animation.DROP,
        title: "230.UN MILAGRO DE DIOS"

    });



    //information for
    function goToLink230() {
        infowindow230.open(map,marker230);
        if (marker.getAnimation() != null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
         
    }
    google.maps.event.addListener(marker230, 'click', goToLink230);
    google.maps.event.addDomListener(window, 'load', initialize);


 //MARCADOR 231
 
 //positions
    var point231 = new google.maps.LatLng(13.729466, -88.874883);

    var contentString231 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">UNA LUZ EN LA SOMBRA</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Una Luz en la Sombra</b> , 28 de Mayo de 1975. Dirección: Cantón Palacios. Días y horas de reuniones: De Lunes a Sábado de 6:00 a 8:00 p.m. y Domingo de 4:00 a 6:00 p.m.</p>'+
      '</div>'+
      '</div>';

      var infowindow231 = new google.maps.InfoWindow({
      content: contentString231
  });
    //markers
    var marker231 = new google.maps.Marker({
        position: point231,
        map: map,
        category: cook,
        icon: cook,
        animation: google.maps.Animation.DROP,
        title: "231.UNA LUZ EN LA SOMBRA"

    });



    //information for
    function goToLink231() {
        infowindow231.open(map,marker231);
        if (marker.getAnimation() != null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
         
    }
    google.maps.event.addListener(marker231, 'click', goToLink231);
    google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 232
 
 //positions
    var point232 = new google.maps.LatLng(13.682683, -88.926290);

    var contentString232 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">LOS REMEDIOS</h1>'+
      '<div id="bodyContent">'+
      '<p><b>LOS REMEDIOS</b> , 13 de Enero de 1974. Dirección: Calle Principal Barrio Sangre de Cristo. Días y horas de reuniones: De Lunes a Domingo de 5:00 a 7:00 p.m.</p>'+
      '</div>'+
      '</div>';

      var infowindow232 = new google.maps.InfoWindow({
      content: contentString232
  });
    //markers
    var marker232 = new google.maps.Marker({
        position: point232,
        map: map,
        category: cook,
        icon: cook,
        animation: google.maps.Animation.DROP,
        title: "232.LOS REMEDIOS"

    });



    //information for
    function goToLink232() {
        infowindow232.open(map,marker232);
        if (marker.getAnimation() != null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
         
    }
    google.maps.event.addListener(marker232, 'click', goToLink232);
    google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 233
 
 //positions
    var point233 = new google.maps.LatLng(13.658356, -88.956584);

    var contentString233 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">HAY UNA LUZ EN MI CAMINO</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Hay una Luz en mi Camino</b> , Dirección: Final Calle Principal, Barrio El Centro. Días y horas de reuniones: De Lunes a Domingo de 6:30 a 8:30 p.m.</p>'+
      '</div>'+
      '</div>';

      var infowindow233 = new google.maps.InfoWindow({
      content: contentString233
  });
    //markers
    var marker233 = new google.maps.Marker({
        position: point233,
        map: map,
        category: cook,
        icon: cook,
        animation: google.maps.Animation.DROP,
        title: "233.HAY UNA LUZ EN MI CAMINO"

    });



    //information for
    function goToLink233() {
        infowindow233.open(map,marker233);
        if (marker.getAnimation() != null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
         
    }
    google.maps.event.addListener(marker233, 'click', goToLink233);
    google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 234
 
 //positions
    var point234 = new google.maps.LatLng(13.741164, -88.977883);

    var contentString234 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">1° DE AGOSTO</h1>'+
      '<div id="bodyContent">'+
      '<p><b>1° de Agosto</b> , 01 de Agosto de 1975. Dirección: Santa Clara, Calle Luis de La O. Días y horas de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.</p>'+
      '</div>'+
      '</div>';

      var infowindow234 = new google.maps.InfoWindow({
      content: contentString234
  });
    //markers
    var marker234 = new google.maps.Marker({
        position: point234,
        map: map,
        category: cook,
        icon: cook,
        animation: google.maps.Animation.DROP,
        title: "234.1° DE AGOSTO"

    });



    //information for
    function goToLink234() {
        infowindow234.open(map,marker234);
        if (marker.getAnimation() != null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
         
    }
    google.maps.event.addListener(marker234, 'click', goToLink234);
    google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 235
 
 //positions
    var point235 = new google.maps.LatLng(13.937826, -89.029684);

    var contentString235 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">EL ROBLE 14 DE OCTUBRE.</h1>'+
      '<div id="bodyContent">'+
      '<p><b>EL ROBLE 14 DE OCTUBRE.</b> , 14 de Octubre de 2006.  Dirección: Cantón El Roble, La Colonia. Días y horas  de reuniones: De Lunes a Sábado de 6:00 a 8:00 p.m.</p>'+
      '</div>'+
      '</div>';

      var infowindow235 = new google.maps.InfoWindow({
      content: contentString235
  });
    //markers
    var marker235 = new google.maps.Marker({
        position: point235,
        map: map,
        category: cook,
        icon: cook,
        animation: google.maps.Animation.DROP,
        title: "235.EL ROBLE 14 DE OCTUBRE."

    });



    //information for
    function goToLink235() {
        infowindow235.open(map,marker235);
        if (marker.getAnimation() != null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
         
    }
    google.maps.event.addListener(marker235, 'click', goToLink235);
    google.maps.event.addDomListener(window, 'load', initialize);


//MARCADOR 236
 
 //positions
    var point236 = new google.maps.LatLng(13.937139, -89.024448);

    var contentString236 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">NUEVO PRIMAVERA</h1>'+
      '<div id="bodyContent">'+
      '<p><b>NUEVO PRIMAVERA</b> , 01 de Agosto de 2011.  Dirección:  Cantón La Bermuda Caserío Primavera, Parada El Morro hacia  El Poniente. Días y horas  de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.</p>'+
      '</div>'+
      '</div>';

      var infowindow236 = new google.maps.InfoWindow({
      content: contentString236
  });
    //markers
    var marker236 = new google.maps.Marker({
        position: point236,
        map: map,
        category: cook,
        icon: cook,
        animation: google.maps.Animation.DROP,
        title: "236.NUEVO PRIMAVERA"

    });



    //information for
    function goToLink236() {
        infowindow236.open(map,marker236);
        if (marker.getAnimation() != null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
         
    }
    google.maps.event.addListener(marker236, 'click', goToLink236);
    google.maps.event.addDomListener(window, 'load', initialize);


//MARCADOR 237
 
 //positions
    var point237 = new google.maps.LatLng(13.932148, -89.030623);

    var contentString237 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">RENACER 08  DE AGOSTO</h1>'+
      '<div id="bodyContent">'+
      '<p><b>RENACER 08  DE AGOSTO</b> , 08 de  Agosto de  2010.  Dirección: Barrio  La Cruz,  frente  al Cementerio. Días  y horas  de  reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m.</p>'+
      '</div>'+
      '</div>';

      var infowindow237 = new google.maps.InfoWindow({
      content: contentString237
  });
    //markers
    var marker237 = new google.maps.Marker({
        position: point237,
        map: map,
        category: cook,
        icon: cook,
        animation: google.maps.Animation.DROP,
        title: "237.RENACER 08  DE AGOSTO"

    });



    //information for
    function goToLink237() {
        infowindow237.open(map,marker237);
        if (marker.getAnimation() != null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
         
    }
    google.maps.event.addListener(marker237, 'click', goToLink237);
    google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 238
 
 //positions
    var point238 = new google.maps.LatLng(13.930287, -89.023826);

    var contentString238 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">SANTA LUCIA</h1>'+
      '<div id="bodyContent">'+
      '<p><b>SANTA LUCIA</b> , 14 de  Febrero de  1984.  Dirección:  Avenida  5 de Noviembre, Casa  N° 25-B. Días y horas  de  reuniones: De Lunes  a Domingo de 7:00 a 9:00 p.m.</p>'+
      '</div>'+
      '</div>';

      var infowindow238 = new google.maps.InfoWindow({
      content: contentString238
  });
    //markers
    var marker238 = new google.maps.Marker({
        position: point238,
        map: map,
        category: cook,
        icon: cook,
        animation: google.maps.Animation.DROP,
        title: "238.SANTA LUCIA"

    });



    //information for
    function goToLink238() {
        infowindow238.open(map,marker238);
        if (marker.getAnimation() != null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
         
    }
    google.maps.event.addListener(marker238, 'click', goToLink238);
    google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 239
 
 //positions
    var point239 = new google.maps.LatLng(13.834463, -88.979608);

    var contentString239 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">10  DE OCTUBRE</h1>'+
      '<div id="bodyContent">'+
      '<p><b10  DE OCTUBRE</b> , 10  de  Octubre de  2002.  Dirección:  Cantón Santa  Anita Tenancingo. Días y horas  de reuniones: De Lunes a Do- mingo  de 5:00 a 7:00 p.m. </p>'+
      '</div>'+
      '</div>';

      var infowindow239 = new google.maps.InfoWindow({
      content: contentString239
  });
    //markers
    var marker239 = new google.maps.Marker({
        position: point239,
        map: map,
        category: cook,
        icon: cook,
        animation: google.maps.Animation.DROP,
        title: "239.10  DE OCTUBRE"

    });



    //information for
    function goToLink239() {
        infowindow239.open(map,marker239);
        if (marker.getAnimation() != null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
         
    }
    google.maps.event.addListener(marker239, 'click', goToLink239);
    google.maps.event.addDomListener(window, 'load', initialize);

//MARCADOR 240
 
 //positions
    var point240 = new google.maps.LatLng(13.837411, -88.987708);

    var contentString240 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">A.A. EN TUS MANOS</h1>'+
      '<div id="bodyContent">'+
      '<p><b>A.A. EN TUS MANOS</b> , 03 de  Marzo de  2002.  Dirección:  Cantón Rosario  Tablón,  Calle Principal Tenancingo. Días y horas  de  reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.</p>'+
      '</div>'+
      '</div>';

      var infowindow240 = new google.maps.InfoWindow({
      content: contentString240
  });
    //markers
    var marker240 = new google.maps.Marker({
        position: point240,
        map: map,
        category: cook,
        icon: cook,
        animation: google.maps.Animation.DROP,
        title: "240.A.A. EN TUS MANOS"

    });



    //information for
    function goToLink240() {
        infowindow240.open(map,marker240);
        if (marker.getAnimation() != null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
         
    }
    google.maps.event.addListener(marker240, 'click', goToLink240);
    google.maps.event.addDomListener(window, 'load', initialize);


    //MARCADOR 241
 
 //positions
    var point241 = new google.maps.LatLng(13.835182, -88.986217);

    var contentString241 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">BUENA ESPERANZA</h1>'+
      '<div id="bodyContent">'+
      '<p><b>BUENA ESPERANZA</b> , 23 de  Marzo de  2012.  Dirección:  Hacien- da  Nueva  de  Tenancingo. Días y horas  de  reuniones: De  Lunes  a Domingo de 5:00 a 7:00 p.m.</p>'+
      '</div>'+
      '</div>';

      var infowindow241 = new google.maps.InfoWindow({
      content: contentString241
  });
    //markers
    var marker241 = new google.maps.Marker({
        position: point241,
        map: map,
        category: cook,
        icon: cook,
        animation: google.maps.Animation.DROP,
        title: "241.BUENA ESPERANZA"

    });



    //information for
    function goToLink241() {
        infowindow241.open(map,marker241);
        if (marker.getAnimation() != null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
         
    }
    google.maps.event.addListener(marker241, 'click', goToLink241);
    google.maps.event.addDomListener(window, 'load', initialize);


//MARCADOR 242
 
 //positions
    var point242 = new google.maps.LatLng(13.836828, -88.984919);

    var contentString242 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">DESPERTAR 21  DE DICIEMBRE</h1>'+
      '<div id="bodyContent">'+
      '<p><b>DESPERTAR 21  DE DICIEMBRE</b> , 21 de  Diciembre de  1998.  Di- rección:  5ª Avenida  Sur Barrio Las Delicias 25 metros al Sur del juzgado de  Paz. Días y horas  de  reuniones: De Lunes  a Domingo de 6:00 a 8:00 p.m.</p>'+
      '</div>'+
      '</div>';

      var infowindow242 = new google.maps.InfoWindow({
      content: contentString242
  });
    //markers
    var marker242 = new google.maps.Marker({
        position: point242,
        map: map,
        category: cook,
        icon: cook,
        animation: google.maps.Animation.DROP,
        title: "242.DESPERTAR 21  DE DICIEMBRE"

    });



    //information for
    function goToLink242() {
        infowindow242.open(map,marker242);
        if (marker.getAnimation() != null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
         
    }
    google.maps.event.addListener(marker242, 'click', goToLink242);
    google.maps.event.addDomListener(window, 'load', initialize);
//MARCADOR 243
 
 //positions
    var point243 = new google.maps.LatLng(13.835192, -88.983610);

    var contentString243 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">RENACER A LA FELICIDAD</h1>'+
      '<div id="bodyContent">'+
      '<p><b>RENACER A LA FELICIDAD</b> , 10 de  Septiembre de  2009.  Direc- ción: Colonia  Jardínes, Calle Principal,  Polígono N° 9, Casa  N° 11. Días y horas  de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.</p>'+
      '</div>'+
      '</div>';

      var infowindow243 = new google.maps.InfoWindow({
      content: contentString243
  });
    //markers
    var marker243 = new google.maps.Marker({
        position: point243,
        map: map,
        category: cook,
        icon: cook,
        animation: google.maps.Animation.DROP,
        title: "243.RENACER A LA FELICIDAD"

    });



    //information for
    function goToLink243() {
        infowindow243.open(map,marker243);
        if (marker.getAnimation() != null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
         
    }
    google.maps.event.addListener(marker243, 'click', goToLink243);
    google.maps.event.addDomListener(window, 'load', initialize);
//MARCADOR 244
 
 //positions
    var point244 = new google.maps.LatLng(13.834567, -88.985766);

    var contentString244 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">UN  AMANECER FELIZ  EN  EL LLANO</h1>'+
      '<div id="bodyContent">'+
      '<p><b>UN  AMANECER FELIZ  EN  EL LLANO</b> , 10  de  Abril de  2004. Dirección:  Caserío El Llano. Días y horas  de  reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.</p>'+
      '</div>'+
      '</div>';

      var infowindow244 = new google.maps.InfoWindow({
      content: contentString244
  });
    //markers
    var marker244 = new google.maps.Marker({
        position: point244,
        map: map,
        category: cook,
        icon: cook,
        animation: google.maps.Animation.DROP,
        title: "244.UN  AMANECER FELIZ  EN  EL LLANO"

    });



    //information for
    function goToLink244() {
        infowindow244.open(map,marker244);
        if (marker.getAnimation() != null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
         
    }
    google.maps.event.addListener(marker244, 'click', goToLink244);
    google.maps.event.addDomListener(window, 'load', initialize);




}

