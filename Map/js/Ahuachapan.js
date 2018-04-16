

function initialize() {


    //Map parametrs
    var mapOptions = {
        zoom: 14,
        center: new google.maps.LatLng(13.919779, -89.847583),
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
    var point1 = new google.maps.LatLng(13.919779, -89.847583);

    var contentString1 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Los Ausoles</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Los Ausoles</b>, 20 de Octubre de 1959. Dirección: 1ª Avenida Sur No 3-4 Barrio San José. Días y horas de reuniones: De Lunes a Domingo de 7:00 a 9:00 p.m.</p>'+
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
        title: "1.LOS AUSOLES"
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
    var point2 = new google.maps.LatLng(13.923515, -89.847291);

    var contentString2 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">SANTA MARIA</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Santa María</b>,  26 de Noviembre de 1965. Dirección: 1ª Avenida Norte y 6ª Calle Poniente Nº 3- 6, parque Bernardino Zamora, Barrio El Calvario. Días y horas de reuniones: De Lunes a Domingo de 7:00 a 9:00 p.m.</p>'+
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
        title: "2.SANTA MARIA"

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
    var point3 = new google.maps.LatLng(13.921154, -89.850942);

    var contentString3 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">EL ESPINO</h1>'+
      '<div id="bodyContent">'+
      '<p><b>El Espino</b>, 11 de Junio de 1968. Dirección: Final 1ª Calle Poniente frente 3-3 Calle al Rastro Municipal. Días y horas de reuniones: De Lunes a Domingo de 7:00 a 9:00 p.m.</p>'+
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
        title: "3.EL ESPINO"

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
    

    //MARCADOR 4 EL JUNQUILLO
 
 //positions
    var point4 = new google.maps.LatLng(13.988537, -89.848886);

    var contentString4 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">EL FRONTERIZO</h1>'+
      '<div id="bodyContent">'+
      '<p><b>El Fronterizo</b>, 22 de Mayo de 1973. Dirección: Cantón El Junquillo. Días y horas de reuniones: De Lunes a Domingo de 7:00 a 9:00 p.m.</p>'+
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
        title: "4.EL FRONTERIZO"

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
    
    //MARCADOR 5 CANTON CHANCULLO---------- NO ENCONTRADO

    //MARCADOR 6 


    //MARCADOR 7 
 
    //positions
    var point7 = new google.maps.LatLng(13.929923, -89.852348);

    var contentString7 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">EL IVU</h1>'+
      '<div id="bodyContent">'+
      '<p><b>El Ivu</b>, 19 de Junio de 1995. Dirección: Calle San Francisco, Colonia Cítalia. Días y horas de reuniones: Lunes, Jueves, Viernes, Sábado y Domingo de 7:00 a 9:00 p.m.</p>'+
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
        title: "7.EL IVU"

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
    var point8 = new google.maps.LatLng(13.990196, -89.847911);

    var contentString8 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">UNA LUZ EN EL DIAMANTE</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Una Luz en el Diamante</b>, 07 de Febrero de 2011. Dirección: Colonia El Diamante, Cantón Junquillo. Días y horas de reuniones: De Lunes a Domingo de 7:00 a 9:00 p.m.</p>'+
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
        title: "8.UNA LUZ EN EL DIAMANTE"

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
    var point9 = new google.maps.LatLng(13.859732, -89.804165);

    var contentString9 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">PAZ EN LA ANGUSTIA</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Paz en la Angustia</b>,  08 de Marzo de 1961. Dirección: 3ª Avenida Norte, Barrio San José. Días y horas de reuniones: De Lunes a Domingo de 7:00 a 9:00 p.m.</p>'+
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
        title: "9.PAZ EN LA ANGUSTIA"

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



    //MARCADOR 10 --no encontrado
    //MARCADOR 11 --no encontrado
    //MARCADOR 12 --no encontrado
    //MARCADOR 13 --no encontrado
    //MARCADOR 14
    //positions
    var point14 = new google.maps.LatLng(13.870227, -89.851685);

    var contentString14 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">DIOS CON NOSOTROS</h1>'+
      '<div id="bodyContent">'+
      '<p><b>DIOS CON NOSOTROS</b>,  01 de Septiembre de 1976. Dirección: 6ª Avenida Norte y 1ª Calle Oriente, Barrio El Centro. Días y horas de reuniones: De Lunes a Domingo de 7:00 a 9:00 p.m.</p>'+
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
        title: "14.DIOS CON NOSOTROS"

    });



    //information for
    function goToLink14() {
        infowindow14.open(map,marker14);
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
    var point15 = new google.maps.LatLng(13.749540, -89.844376);

    var contentString15 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">UN MILAGRO</h1>'+
      '<div id="bodyContent">'+
      '<p><b>UN MILAGRO</b>, 27 de Septiembre de 1990. Dirección: 2ª Avenida Sur, Barrio El Centro, atrás del complejo Educativo. Días y horas de reuniones: De Lunes a Domingo de 7:00 a 9:00 p.m.</p>'+
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
        title: "15.UN MILAGRO"

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
    var point16 = new google.maps.LatLng(13.785717, -89.860233);

    var contentString16 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">02 DE JULIO</h1>'+
      '<div id="bodyContent">'+
      '<p><b>02 DE JULIO</b>,  02 de Julio de 1977. Dirección: Barrio Las Flores, Villa Jujutla. Días y horas de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.</p>'+
      '</div>'+
      '</div>';

      var infowindow16 = new google.maps.InfoWindow({
      content: contentString16
  });
    //markers
    var marker16= new google.maps.Marker({
        position: point16,
        map: map,
        category: cook,
        icon: cook,
        animation: google.maps.Animation.DROP,
        title: "16.02 DE JULIO"

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
    var point17 = new google.maps.LatLng(13.784753, -89.859659);

    var contentString17 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">UN CAMINO DE ESPERANZA</h1>'+
      '<div id="bodyContent">'+
      '<p><b>UN CAMINO DE ESPERANZA</b>, 08 de Diciembre de 1974. Dirección: Colonia Nueva Guayapa, Cantón Guayapa Abajo. Días y horas de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.</p>'+
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
        title: "17.UN CAMINO DE ESPERANZA"

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
    var point18 = new google.maps.LatLng(13.686680, -89.994098);

    var contentString18 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">UNA LUZ EN LA ISLA.</h1>'+
      '<div id="bodyContent">'+
      '<p><b>UNA LUZ EN LA ISLA.</b>,14 de Mayo de 1975. Dirección: Calle Principal, Barra de Santiago, contiguo al estero. Días y horas de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.</p>'+
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
        title: "18.UNA LUZ EN LA ISLA."

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
    var point19 = new google.maps.LatLng(13.713508, -89.966115);

    var contentString19 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">UNA LUZ EN CATARINA</h1>'+
      '<div id="bodyContent">'+
      '<p><b>UNA LUZ EN CATARINA</b>, 23 de Mayo de 1976. Dirección: Carretera El Litoral Km. 105 Cantón Guayapa, Caserío Catarina. Días y horas de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.</p>'+
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
        title: "19.UNA LUZ EN CATARINA"

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
    var point20 = new google.maps.LatLng(13.785746, -89.860174);

    var contentString20 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">SENDERO DE VIDA</h1>'+
      '<div id="bodyContent">'+
      '<p><b>SENDERO DE VIDA</b>,  21 de Enero de 1994. Dirección: Avenida Armando Vallejo, Barrio Las Flores. Días y horas de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m</p>'+
      '</div>'+
      '</div>';

      var infowindow20 = new google.maps.InfoWindow({
      content: contentString20
  });
    //markers
    var marker20 = new google.maps.Marker({
        position: point15,
        map: map,
        category: cook,
        icon: cook,
        animation: google.maps.Animation.DROP,
        title: "20.SENDERO DE VIDA"

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

}