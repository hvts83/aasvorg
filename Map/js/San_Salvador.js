

function initialize() {


    //Map parametrs
    var mapOptions = {
        zoom: 10,
        center: new google.maps.LatLng(13.6914782,-89.2146939),
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

        //MARCADOR 475  
          //positions
           var point475 = new google.maps.LatLng(13.956675, -89.190815); var contentString475 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">12  TRADICIONES.</h1>'+ '<div id="bodyContent">'+ '<p><b>12  TRADICIONES.</b> , — 02 Agosto de  2000.  Dirección:  1ª  Calle  Po- niente Nº 17 Aguilares.  Días y horas  de  reuniones: De Lunes a Do- mingo  de 6:00 a 8:00 p.m.  Miembros asistentes: 8 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow475 = new google.maps.InfoWindow({ content: contentString475 });   
           //markers  
           var marker475 = new google.maps.Marker({ position: point475, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "475.12  TRADICIONES." }); 
           //information for  
           function goToLink475() { infowindow475.open(map,marker475);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker475, 'click', goToLink475); google.maps.event.addDomListener(window, 'load', initialize);

        //MARCADOR 476  
          //positions 
          var point476 = new google.maps.LatLng(13.959742, -89.188292); var contentString476 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">AMOR Y COMPRENSIÓN.</h1>'+ '<div id="bodyContent">'+ '<p><b>AMOR Y COMPRENSIÓN.</b> , — 02 de Octubre de 1973, Dirección:  8a Calle Poniente, Barrio El Centro. Días y horas  de  reuniones: De Lu- nes  a Domingo de  6:00 a 8:00 p.m.  Miembros asistentes: 10 Hom- bres  y 4 Mujeres.</p>'+ '</div>'+ '</div>'; var infowindow476 = new google.maps.InfoWindow({ content: contentString476 });   
          //markers  
          var marker476 = new google.maps.Marker({ position: point476, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "476.AMOR Y COMPRENSIÓN." }); 
          //information for  
          function goToLink476() { infowindow476.open(map,marker476);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker476, 'click', goToLink476); google.maps.event.addDomListener(window, 'load', initialize);

        //MARCADOR 477  
          //positions 
          var point477 = new google.maps.LatLng(13.958628, -89.194343); var contentString477 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">BUENA FE.</h1>'+ '<div id="bodyContent">'+ '<p><b>BUENA FE.</b> , — 13 de  Enero  de  1979.  Dirección:  Calle Principal Co- lonia Los Mangos, Pasaje  8 Casa  N° 181 Aguilares,  Días y horas  de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m. Miembros asis- tentes: 20 de Hombres y 1 Mujer.</p>'+ '</div>'+ '</div>'; var infowindow477 = new google.maps.InfoWindow({ content: contentString477 });   
          //markers  
          var marker477 = new google.maps.Marker({ position: point477, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "477.BUENA FE." }); 
          //information for 
           function goToLink477() { infowindow477.open(map,marker477);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker477, 'click', goToLink477); google.maps.event.addDomListener(window, 'load', initialize);

        //MARCADOR 478  
          //positions 
          var point478 = new google.maps.LatLng(13.962866, -89.185030); var contentString478 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">CENTRAL DE AGUILARES.</h1>'+ '<div id="bodyContent">'+ '<p><b>CENTRAL DE AGUILARES.</b> , — 23  de  Agosto de  1988,  Dirección: Colonia  Romero  Calle  Principal  N° 44.  Días y horas  de  reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m.  Miembros asistentes: 12 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow478 = new google.maps.InfoWindow({ content: contentString478 });    
          //markers 
           var marker478 = new google.maps.Marker({ position: point478, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "478.CENTRAL DE AGUILARES." }); 
           //information for  
           function goToLink478() { infowindow478.open(map,marker478);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker478, 'click', goToLink478); google.maps.event.addDomListener(window, 'load', initialize);

        //MARCADOR 479  
          //positions 
          var point479 = new google.maps.LatLng(13.953463, -89.184590); var contentString479 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">FELICIDAD 1° DE JUNIO. </h1>'+ '<div id="bodyContent">'+ '<p><b>FELICIDAD 1° DE JUNIO. </b> , – 01 de Junio  de 1967.  Dirección:  Barrio El Centro, Nº 5, Días y horas  de reuniones: De Lunes a Domingo de 6:00 a 8:00 p. m. Miembros asistentes: 16 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow479 = new google.maps.InfoWindow({ content: contentString479 });   
          //markers  
          var marker479 = new google.maps.Marker({ position: point479, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "479.FELICIDAD 1° DE JUNIO. " }); 
          //information for  
          function goToLink479() { infowindow479.open(map,marker479);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker479, 'click', goToLink479); google.maps.event.addDomListener(window, 'load', initialize);
       
        //MARCADOR 480  
          //positions 
          var point480 = new google.maps.LatLng(13.969773, -89.194006); var contentString480 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">GENERACIÓN 21.</h1>'+ '<div id="bodyContent">'+ '<p><b>GENERACIÓN 21.</b> , — 10 de Enero de 2010, Dirección: Urbanización San Rafael Avenida  Central  Norte, Block 25, Casa  Nº 12. Días y horas de  reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m.  Miembros  asistentes: 12 Hombres y 1 Mujer.</p>'+ '</div>'+ '</div>'; var infowindow480 = new google.maps.InfoWindow({ content: contentString480 });   
          //markers  
          var marker480 = new google.maps.Marker({ position: point480, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "480.GENERACIÓN 21." }); 
          //information for  
          function goToLink480() { infowindow480.open(map,marker480);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker480, 'click', goToLink480); google.maps.event.addDomListener(window, 'load', initialize);

        //MARCADOR 481  
          //positions 
          var point481 = new google.maps.LatLng(13.968124, -89.172537); var contentString481 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">RENACER 28 DE ENERO.</h1>'+ '<div id="bodyContent">'+ '<p><b>RENACER 28 DE ENERO.</b> , — 28 de Enero de 2005.  Dirección:  Can- tón  y Hacienda Los Mango. Días y horas  de  reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.  Miembros asistentes: 8 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow481 = new google.maps.InfoWindow({ content: contentString481 });   
          //markers  
          var marker481 = new google.maps.Marker({ position: point481, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "481.RENACER 28 DE ENERO." }); 
          //information for  
          function goToLink481() { infowindow481.open(map,marker481);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker481, 'click', goToLink481); google.maps.event.addDomListener(window, 'load', initialize);

        //MARCADOR 482  
          //positions 
          var point482 = new google.maps.LatLng(13.965179, -89.183431); var contentString482 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">SENDERO DE VIDA.</h1>'+ '<div id="bodyContent">'+ '<p><b>SENDERO DE VIDA.</b> , — 12 de Noviembre de 1993. Dirección:  Calle Central  Colonia  Las Pampitas Pasaje  No 32, Casa N° 22. Días y horas de  reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m.  Miembros asistentes: 8 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow482 = new google.maps.InfoWindow({ content: contentString482 });   
          //markers  
          var marker482 = new google.maps.Marker({ position: point482, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "482.SENDERO DE VIDA." }); 
          //information for  
          function goToLink482() { infowindow482.open(map,marker482);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker482, 'click', goToLink482); google.maps.event.addDomListener(window, 'load', initialize);

        //MARCADOR 483  
          //positions 
          var point483 = new google.maps.LatLng(13.973977, -89.187528); var contentString483 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UNA  SOLUCIÓN EN  EL CAMINO.</h1>'+ '<div id="bodyContent">'+ '<p><b>UNA  SOLUCIÓN EN  EL CAMINO.</b> , — 14  de  Abril del  2009,  Di- rección:  Colonia  Palacios,  Pasaje  N° 8, Casa  N° 1. Días y horas  de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m. Miembros asis- tentes: 12 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow483 = new google.maps.InfoWindow({ content: contentString483 });   
          //markers  
          var marker483 = new google.maps.Marker({ position: point483, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "483.UNA  SOLUCIÓN EN  EL CAMINO." }); 
          //information for  
          function goToLink483() { infowindow483.open(map,marker483);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker483, 'click', goToLink483); google.maps.event.addDomListener(window, 'load', initialize);

        //MARCADOR 484  
          //positions 
          var point484 = new google.maps.LatLng(13.952552, -89.188480); var contentString484 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UNIDOS 09 DE JULIO.</h1>'+ '<div id="bodyContent">'+ '<p><b>UNIDOS 09 DE JULIO.</b> , — 09 de  Julio de  1994.  Dirección:  Avenida Ferrocarril, frente  a ex estación, Días y horas de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.  Miembros asistentes: 14 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow484 = new google.maps.InfoWindow({ content: contentString484 });   
          //markers  
          var marker484 = new google.maps.Marker({ position: point484, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "484.UNIDOS 09 DE JULIO." }); 
          //information for  
          function goToLink484() { infowindow484.open(map,marker484);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker484, 'click', goToLink484); google.maps.event.addDomListener(window, 'load', initialize);

       //MARCADOR 485  
          //positions 
          var point485 = new google.maps.LatLng(13.806729, -89.195596); var contentString485 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">01 DE JULIO.</h1>'+ '<div id="bodyContent">'+ '<p><b>01 DE JULIO.</b> , — 01 de Julio del 2005.  Dirección:  3a  Avenida  Sur, Nº 6 Apopa. Días y horas  de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.  Miembros asistentes: 17 Hombres y 2 Mujeres.</p>'+ '</div>'+ '</div>'; var infowindow485 = new google.maps.InfoWindow({ content: contentString485 });   
          //markers  
          var marker485 = new google.maps.Marker({ position: point485, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "485.01 DE JULIO." }); 
          //information for  
          function goToLink485() { infowindow485.open(map,marker485);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker485, 'click', goToLink485); google.maps.event.addDomListener(window, 'load', initialize);

        //MARCADOR 486  //positions 
        var point486 = new google.maps.LatLng(13.793364, -89.188642); var contentString486 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">20  DE FEBRERO.</h1>'+ '<div id="bodyContent">'+ '<p><b>20  DE FEBRERO.</b> , —20 de  Febrero de  2007.  Dirección:  Calle  a La Cabañita 2 Cuadras Arriba del Niño Perdido. Días y horas de reunio- nes: De Lunes a Domingo de 6:00 a 8:00 p.m. Miembros asistentes: 4 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow486 = new google.maps.InfoWindow({ content: contentString486 });   
        //markers  
        var marker486 = new google.maps.Marker({ position: point486, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "486.20  DE FEBRERO." }); 
        //information for  
        function goToLink486() { infowindow486.open(map,marker486);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker486, 'click', goToLink486); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 487  //positions 
        var point487 = new google.maps.LatLng(13.791786, -89.176140); var contentString487 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">24  DE FEBRERO VIDA NUEVA.</h1>'+ '<div id="bodyContent">'+ '<p><b>24  DE FEBRERO VIDA NUEVA.</b> , — 24 de  Febrero de  1984.  Direc- ción: Carretera Troncal del Norte, Km. 12, frente  a Peri-plaza  Apopa. Días y horas  de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m. Miembros asistentes: 19 Hombres y 2 Mujeres.</p>'+ '</div>'+ '</div>'; var infowindow487 = new google.maps.InfoWindow({ content: contentString487 });   
        //markers  
        var marker487 = new google.maps.Marker({ position: point487, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "487.24  DE FEBRERO VIDA NUEVA." }); 
        //information for  
        function goToLink487() { infowindow487.open(map,marker487);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker487, 'click', goToLink487); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 488  
        //positions 
        var point488 = new google.maps.LatLng(13.811175, -89.176304); var contentString488 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">ALFA Y OMEGA.</h1>'+ '<div id="bodyContent">'+ '<p><b>ALFA Y OMEGA.</b> , — 13 de Junio  de 1983.  Dirección:  Colonia  La Er- mita Nº 2 Polígono Q, Pasaje  9-A Nº 21 “D”. Días y horas de reunio- nes: De Lunes a Domingo de 6:30 a 8:30 p.m. Miembros asistentes: 8 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow488 = new google.maps.InfoWindow({ content: contentString488 });   
        //markers  
        var marker488 = new google.maps.Marker({ position: point488, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "488.ALFA Y OMEGA." }); 
        //information for  
        function goToLink488() { infowindow488.open(map,marker488);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker488, 'click', goToLink488); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 489  
        //positions 
        var point489 = new google.maps.LatLng(13.801419, -89.168289); var contentString489 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">AMIGOS EN A.A.  07  DE MAYO.</h1>'+ '<div id="bodyContent">'+ '<p><b>AMIGOS EN A.A.  07  DE MAYO.</b> , — 07 de  Mayo  de  1993.  Direc- ción: Urbanización Popotlán 1 Pasaje  Masahuat, Casa  Nº 10. frente al mercadito, Días y horas  de  reuniones: De Lunes  a Domingo de 7:00 a 9:00 p.m.  Miembros asistentes: 13 Hombres y 1 Mujer.</p>'+ '</div>'+ '</div>'; var infowindow489 = new google.maps.InfoWindow({ content: contentString489 });   
        //markers  
        var marker489 = new google.maps.Marker({ position: point489, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "489.AMIGOS EN A.A.  07  DE MAYO." }); 
        //information for  
        function goToLink489() { infowindow489.open(map,marker489);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker489, 'click', goToLink489); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 490  
        //positions 
        var point490 = new google.maps.LatLng(13.809542, -89.166469); var contentString490 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">APOPLÁN.</h1>'+ '<div id="bodyContent">'+ '<p><b>APOPLÁN.</b> , — 07 de Julio de 1963.  Dirección:  Carretera Troncal del Norte, Km. 13 ½. Días y horas  de  reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.  Miembros asistentes: 30 Hombres y 6 Mujeres.</p>'+ '</div>'+ '</div>'; var infowindow490 = new google.maps.InfoWindow({ content: contentString490 });   
        //markers  
        var marker490 = new google.maps.Marker({ position: point490, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "490.APOPLÁN." });
         //information for  
         function goToLink490() { infowindow490.open(map,marker490);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker490, 'click', goToLink490); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 491  
        //positions 
        var point491 = new google.maps.LatLng(13.802642, -89.199307); var contentString491 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">CONSEJO  DE UNA  MADRE.</h1>'+ '<div id="bodyContent">'+ '<p><b>CONSEJO  DE UNA  MADRE.</b> , — 02 de  Diciembre de  1972.  Direc- ción: Parcelación El Ángel,  Calle Nº 3 lote  al final. Días y horas  de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m. Miembros asis- tentes: 21 Hombres y 1 Mujer.</p>'+ '</div>'+ '</div>'; var infowindow491 = new google.maps.InfoWindow({ content: contentString491 });   
        //markers  
        var marker491 = new google.maps.Marker({ position: point491, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "491.CONSEJO  DE UNA  MADRE." }); 
        //information for  
        function goToLink491() { infowindow491.open(map,marker491);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker491, 'click', goToLink491); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 492  
        //positions 
        var point492 = new google.maps.LatLng(13.810752, -89.167150); var contentString492 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">DESPERTAR 17  DE ABRIL.</h1>'+ '<div id="bodyContent">'+ '<p><b>DESPERTAR 17  DE ABRIL.</b> , — 17 de  Abril de  1978.  Dirección:  Km. 15 Carretera Troncal del Norte  Calle Principal Colonia  Las Cañas  N° 4. Días y horas  de  reuniones: De Lunes a Domingo de  6:30 a 8:30 p.m.  Miembros asistentes: 10 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow492 = new google.maps.InfoWindow({ content: contentString492 });   
        //markers  
        var marker492 = new google.maps.Marker({ position: point492, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "492.DESPERTAR 17  DE ABRIL." }); 
        //information for  
        function goToLink492() { infowindow492.open(map,marker492);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker492, 'click', goToLink492); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 493  
        //positions 
        var point493 = new google.maps.LatLng(13.805846, -89.168643); var contentString493 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">GRACIAS A DIOS.</h1>'+ '<div id="bodyContent">'+ '<p><b>GRACIAS A DIOS.</b> , — 30 de  Noviembre de  1999.  Dirección:  Carre- tera Troncal del Norte, Km. 11, Colonia San Antonio,  Calle Principal, Nº 3 Bis. Días y horas  de reuniones: De Lunes a Domingo de 6:30 a 8:30 p.m.  Miembros asistentes: 23 Hombres y 2 Mujeres.</p>'+ '</div>'+ '</div>'; var infowindow493 = new google.maps.InfoWindow({ content: contentString493 });   
        //markers  
        var marker493 = new google.maps.Marker({ position: point493, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "493.GRACIAS A DIOS." }); 
        //information for  
        function goToLink493() { infowindow493.open(map,marker493);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker493, 'click', goToLink493); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 494  
        //positions 
        var point494 = new google.maps.LatLng(13.819697, -89.183606); var contentString494 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">HAY UNA SOLUCIÓN.</h1>'+ '<div id="bodyContent">'+ '<p><b>HAY UNA SOLUCIÓN.</b> , — 09 de  Abril de  1995.  Dirección:  Calle al Tikal, Colonia  San Leonardo Block “1”  Nº 13. Días y horas  de  reu- niones: De Lunes a Domingo de 7:00 a 9:00 p.m. Miembros asisten- tes: 22 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow494 = new google.maps.InfoWindow({ content: contentString494 });   
        //markers  
        var marker494 = new google.maps.Marker({ position: point494, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "494.HAY UNA SOLUCIÓN." }); 
        //information for  
        function goToLink494() { infowindow494.open(map,marker494);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker494, 'click', goToLink494); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 495  
        //positions
         var point495 = new google.maps.LatLng(13.808729, -89.190890); var contentString495 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">LA BUENA ESPERANZA.</h1>'+ '<div id="bodyContent">'+ '<p><b>LA BUENA ESPERANZA.</b> , —08 de  Diciembre de  1980.  Dirección: Calle  a  La Cabañita, urbanización Pandora, block  “E”,  lote  Nº  2. Días y horas  de  reuniones: de  Lunes a Sábado de  7:00 a 9:00 p.m. Miembros asistentes: 9 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow495 = new google.maps.InfoWindow({ content: contentString495 });   
         //markers  
         var marker495 = new google.maps.Marker({ position: point495, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "495.LA BUENA ESPERANZA." }); 
         //information for  
         function goToLink495() { infowindow495.open(map,marker495);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker495, 'click', goToLink495); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 496  
        //positions 
        var point496 = new google.maps.LatLng(13.817751, -89.182836); var contentString496 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">LA PONDEROSA.</h1>'+ '<div id="bodyContent">'+ '<p><b>LA PONDEROSA.</b> , —11   de  Abril de  1982.  Dirección:   Colonia  La Ponderosa Polígono “H” Nº 15, Calle Circunvalación. Días y horas de reuniones: De Lunes a Sábado de 7:00 a 9:00 p.m. y Domingo de 6:00 a 8:00 p.m.  Miembros asistentes: 12 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow496 = new google.maps.InfoWindow({ content: contentString496 });   
        //markers 
         var marker496 = new google.maps.Marker({ position: point496, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "496.LA PONDEROSA." }); 
         //information for  
         function goToLink496() { infowindow496.open(map,marker496);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker496, 'click', goToLink496); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 497  
        //positions 
        var point497 = new google.maps.LatLng(13.803204, -89.177788); var contentString497 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">LA SALIDA.</h1>'+ '<div id="bodyContent">'+ '<p><b>LA SALIDA.</b> , — 09 de Marzo de 1977. Dirección: 6ª Calle, Oriente Nº 1 Apopa. Días y horas  de reuniones: De Lunes a Domingo de 5:30 a 7:30 p.m.  Miembros asistentes: 25 Hombres y 3 Mujeres.</p>'+ '</div>'+ '</div>'; var infowindow497 = new google.maps.InfoWindow({ content: contentString497 });   
        //markers  
        var marker497 = new google.maps.Marker({ position: point497, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "497.LA SALIDA." }); 
        //information for  
        function goToLink497() { infowindow497.open(map,marker497);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker497, 'click', goToLink497); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 498  
        //positions 
        var point498 = new google.maps.LatLng(13.802537, -89.179823); var contentString498 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">LIBERADOS HOY.</h1>'+ '<div id="bodyContent">'+ '<p><b>LIBERADOS HOY.</b> , — 12 de Octubre de 1972. Dirección:  4ª Avenida Norte, Nº 11, Barrio El Calvario, Días y horas de reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m.  Miembros asistentes: 8 Hombres y 1 Mujer.</p>'+ '</div>'+ '</div>'; var infowindow498 = new google.maps.InfoWindow({ content: contentString498 });   
        //markers  
        var marker498 = new google.maps.Marker({ position: point498, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "498.LIBERADOS HOY." }); 
        //information for  
        function goToLink498() { infowindow498.open(map,marker498);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker498, 'click', goToLink498); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 499  
        //positions 
        var point499 = new google.maps.LatLng(13.799318, -89.178770); var contentString499 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">LUZ QUE VUELVE.</h1>'+ '<div id="bodyContent">'+ '<p><b>LUZ QUE VUELVE.</b> , — 27 de  Agosto de  1983.  Dirección:  Avenida Quirino Chávez  Nº 57 A. Días y horas  de reuniones: De Lunes a Do- mingo  de 5:30 a 7:30 p.m.  Miembros asistentes: 15 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow499 = new google.maps.InfoWindow({ content: contentString499 });   
        //markers  
        var marker499 = new google.maps.Marker({ position: point499, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "499.LUZ QUE VUELVE." }); 
        //information for  
        function goToLink499() { infowindow499.open(map,marker499);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker499, 'click', goToLink499); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 500  
        //positions 
        var point500 = new google.maps.LatLng(13.825284, -89.187217); var contentString500 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">RENACER AMOR Y SALVACIÓN.</h1>'+ '<div id="bodyContent">'+ '<p><b>RENACER AMOR Y SALVACIÓN.</b> , — 07 de  Marzo de  2010.  Direc- ción: Cantón Joya  Grande Caserío La Loma,  S/N.  Días y Horas  de reuniones De Domingo a Viernes de  6:00 a 8:00 p.m.  y Sábado de 5:00 a 7:00 pm. Miembros asistentes: 11 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow500 = new google.maps.InfoWindow({ content: contentString500 });   
        //markers  
        var marker500 = new google.maps.Marker({ position: point500, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "500.RENACER AMOR Y SALVACIÓN." }); 
        //information for  
        function goToLink500() { infowindow500.open(map,marker500);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker500, 'click', goToLink500); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 501  
        //positions 
        var point501 = new google.maps.LatLng(13.793223, -89.171208); var contentString501 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">RENACER 03 DE MARZO.</h1>'+ '<div id="bodyContent">'+ '<p><b>RENACER 03 DE MARZO.</b> , — 03 de Marzo de 2008.  Dirección:  Co- lonia  Los Naranjos, Pasaje  “E”,  N° 21.  Días y horas  de  reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m.  Miembros asistentes: 15 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow501 = new google.maps.InfoWindow({ content: contentString501 });   
        //markers  
        var marker501 = new google.maps.Marker({ position: point501, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "501.RENACER 03 DE MARZO." }); 
        //information for  
        function goToLink501() { infowindow501.open(map,marker501);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker501, 'click', goToLink501); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 502  
        //positions 
        var point502 = new google.maps.LatLng(13.801335, -89.172543); var contentString502 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">RENACER 06 DE JULIO.</h1>'+ '<div id="bodyContent">'+ '<p><b>RENACER 06 DE JULIO.</b> , — 06 de Julio de 1988. Dirección:  Colonia Popotlán Nº 1, Pasaje  Quezalapa, Equipo  47, Acceso  4, Casa  Nº 6. Días y horas  de reuniones: De Lunes a Domingo de 7:00 a 9:00 p.m. Miembros asistentes: 13 Hombres y 1 Mujer.</p>'+ '</div>'+ '</div>'; var infowindow502 = new google.maps.InfoWindow({ content: contentString502 });  
         //markers  
        var marker502 = new google.maps.Marker({ position: point502, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "502.RENACER 06 DE JULIO." }); 
        //information for  
        function goToLink502() { infowindow502.open(map,marker502);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker502, 'click', goToLink502); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 503  
        //positions 
        var point503 = new google.maps.LatLng(13.803248, -89.181724); var contentString503 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">RENACER 28 DE OCTUBRE.</h1>'+ '<div id="bodyContent">'+ '<p><b>RENACER 28 DE OCTUBRE.</b> , — 28 de Octubre de 1996.  Dirección: 2a  Calle Poniente N° 24 Apopa. Días y horas de reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m.  Miembros asistentes: 15 Hombres y 3 Mujeres.</p>'+ '</div>'+ '</div>'; var infowindow503 = new google.maps.InfoWindow({ content: contentString503 });   
        //markers 
         var marker503 = new google.maps.Marker({ position: point503, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "503.RENACER 28 DE OCTUBRE." }); 
         //information for  
         function goToLink503() { infowindow503.open(map,marker503);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker503, 'click', goToLink503); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 504  
        //positions 
        var point504 = new google.maps.LatLng(13.814019, -89.182335); var contentString504 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">RENACER EN CHINTUC.</h1>'+ '<div id="bodyContent">'+ '<p><b>RENACER EN CHINTUC.</b> , — 12 de Mayo de 1985.  Dirección:  Colonia Chintuc  N° 2 Calle Principal, entrada a Pasaje  Guazapa Casa  Nº  2. Días y horas de reuniones: De Lunes a Sábado de 7:30 a 9:00 p.m. y Domingo de 6:00 a 8:00 p.m.  Miembros asistentes: 10 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow504 = new google.maps.InfoWindow({ content: contentString504 });   
        //markers  
        var marker504 = new google.maps.Marker({ position: point504, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "504.RENACER EN CHINTUC." }); 
        //information for  
        function goToLink504() { infowindow504.open(map,marker504);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker504, 'click', goToLink504); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 505  
        //positions 
        var point505 = new google.maps.LatLng(13.808155, -89.133391); var contentString505 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">RENOVACIÓN 26  DE JUNIO.</h1>'+ '<div id="bodyContent">'+ '<p><b>RENOVACIÓN 26  DE JUNIO.</b> , — 26 de  Junio  de  2014.  Dirección: Colonia  Popotlán Nº 1 Calle  antigua a Tonacatepeque, equipo 13 acceso Nº 2 Casa  Nº 51, Colonia  Popotlán. Días y horas  de  reunio- nes: De Lunes a Domingo de 7:00 a 9:00 p.m. Miembros asistentes: 10 Hombres y 2 Mujeres.</p>'+ '</div>'+ '</div>'; var infowindow505 = new google.maps.InfoWindow({ content: contentString505 });   
        //markers  
        var marker505 = new google.maps.Marker({ position: point505, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "505.RENOVACIÓN 26  DE JUNIO." }); 
        //information for  
        function goToLink505() { infowindow505.open(map,marker505);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker505, 'click', goToLink505); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 506  
        //positions 
        var point506 = new google.maps.LatLng(13.813767, -89.184300); var contentString506 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">SALVACIÓN  86.</h1>'+ '<div id="bodyContent">'+ '<p><b>SALVACIÓN  86.</b> , —  20  de  Julio  de  1986.  Dirección:  Colonia  Ma- dre  Tierra Nº 1 Block “E”  Casa  Nº 27.  Días y horas  de  reuniones: De Lunes a Domingo de  7:00 a 9:00 p.m.  Miembros asistentes: 17 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow506 = new google.maps.InfoWindow({ content: contentString506 });  
         //markers  
        var marker506 = new google.maps.Marker({ position: point506, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "506.SALVACIÓN  86." }); 
        //information for  
        function goToLink506() { infowindow506.open(map,marker506);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker506, 'click', goToLink506); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 507  
        //positions 
        var point507 = new google.maps.LatLng(13.798444, -89.161188); var contentString507 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UN DÍA DE VICTORIA.</h1>'+ '<div id="bodyContent">'+ '<p><b>UN DÍA DE VICTORIA.</b> , — 16 de  Julio de  1989.  Dirección:  Avenida Amasatepeq local talleres vocacionales, Popotlán Nº 2. Días y horas de reuniones: De Lunes a Sábado de 7:00 a 9:00 p.m. y Domingo de 5:00 a 7:00 p.m.  Miembros asistentes: 4 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow507 = new google.maps.InfoWindow({ content: contentString507 });  
         //markers  
        var marker507 = new google.maps.Marker({ position: point507, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "507.UN DÍA DE VICTORIA." }); 
        //information for  
        function goToLink507() { infowindow507.open(map,marker507);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker507, 'click', goToLink507); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 508  
        //positions 
        var point508 = new google.maps.LatLng(13.802776, -89.164830); var contentString508 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UN MILAGRO EN POPOTLÁN.</h1>'+ '<div id="bodyContent">'+ '<p><b>UN MILAGRO EN POPOTLÁN.</b> , — 02 de Enero de 1986. Dirección: Prolongación Pasaje  Majucla Acceso  4 Colonia  Popotlán. Días y ho- ras de  reuniones: De Lunes a Domingo de  7:00 a 9:00 p.m.  Miem- bros  asistentes: 15 Hombres y 1 Mujer.</p>'+ '</div>'+ '</div>'; var infowindow508 = new google.maps.InfoWindow({ content: contentString508 });   
        //markers  
        var marker508 = new google.maps.Marker({ position: point508, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "508.UN MILAGRO EN POPOTLÁN." }); 
        //information for  
        function goToLink508() { infowindow508.open(map,marker508);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker508, 'click', goToLink508); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 509  
        //positions 
        var point509 = new google.maps.LatLng(13.805835, -89.168589); var contentString509 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UN  PUENTE HACIA LA LUZ.</h1>'+ '<div id="bodyContent">'+ '<p><b>UN  PUENTE HACIA LA LUZ.</b> , — 10 de  Junio  de  2003.  Dirección: Km. 11 Carretera Troncal  del  Norte, Calle Real Madrid,  Casa  Nº 1, Colonia  San Antonio  contiguo al puente. Días y horas  de reuniones: De Lunes a Domingo de  7:00 a 9:00 p.m.  Miembros asistentes: 20 Hombres y 3 Mujeres.</p>'+ '</div>'+ '</div>'; var infowindow509 = new google.maps.InfoWindow({ content: contentString509 });   
        //markers  
        var marker509 = new google.maps.Marker({ position: point509, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "509.UN  PUENTE HACIA LA LUZ." }); 
        //information for  
        function goToLink509() { infowindow509.open(map,marker509);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker509, 'click', goToLink509); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 510  
        //positions 
        var point510 = new google.maps.LatLng(13.795573, -89.188570); var contentString510 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UNA LUZ EN CONCEPCIÓN.</h1>'+ '<div id="bodyContent">'+ '<p><b>UNA LUZ EN CONCEPCIÓN.</b> , — 20 de  Enero  de  1980.  Dirección: Cantón San Nicolás Calle antigua a La Ponderosa Casa N° 1. Días y horas  de reuniones: De Lunes a Viernes de 6:00 a 8:00 p.m. Sábado y Domingo de 5:30 a 7:30 p.m.  Miembros asistentes: 16 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow510 = new google.maps.InfoWindow({ content: contentString510 });   
        //markers  
        var marker510 = new google.maps.Marker({ position: point510, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "510.UNA LUZ EN CONCEPCIÓN." }); 
        //information for  
        function goToLink510() { infowindow510.open(map,marker510);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker510, 'click', goToLink510); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 511  
        //positions 
        var point511 = new google.maps.LatLng(13.793966, -89.161038); var contentString511 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UNA  LUZ EN VALLE VERDE.</h1>'+ '<div id="bodyContent">'+ '<p><b>UNA  LUZ EN VALLE VERDE.</b> , — 10  de  Septiembre de  1996.  Di- rección:  Urbanización Valle Verde N° 2 Polígono 29, Pasaje  “O”  Sur Casa  Nº 17. Días y horas  de  reuniones: De Lunes a Sábado de  7:00 a 9:00  p.m.  y Domingo de  5:00  a 7: 00 p.m.  Miembros asistentes: 15 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow511 = new google.maps.InfoWindow({ content: contentString511 });   
        //markers  
        var marker511 = new google.maps.Marker({ position: point511, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "511.UNA  LUZ EN VALLE VERDE." }); 
        //information for  
        function goToLink511() { infowindow511.open(map,marker511);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker511, 'click', goToLink511); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 512  
        //positions 
        var point512 = new google.maps.LatLng(13.810681, -89.173633); var contentString512 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">VIVIR EN SOBRIEDAD.</h1>'+ '<div id="bodyContent">'+ '<p><b>VIVIR EN SOBRIEDAD.</b> , — 02 de  Mayo  de  1991.  Dirección:  Calle Real Lotificación Los Ricos, Pasaje  Los Ricos, Lote Nº 2, 40 metros Al Poniente del  Cementerio de  La Colonia  Nueva  Apopa. Días  y horas  de reuniones: De Lunes a Viernes de 6:30 a 8:30 p.m. Sábado y Domingo de 5:30 a 7:30 p.m.  Miembros asistentes: 14 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow512 = new google.maps.InfoWindow({ content: contentString512 });   
        //markers  
        var marker512 = new google.maps.Marker({ position: point512, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "512.VIVIR EN SOBRIEDAD." }); 
        //information for 
         function goToLink512() { infowindow512.open(map,marker512);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker512, 'click', goToLink512); google.maps.event.addDomListener(window, 'load', initialize);

        //MARCADOR 513  
        //positions 
        var point513 = new google.maps.LatLng(13.748051, -89.195705); var contentString513 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">LA CLAVE DE LA SOBRIEDAD.</h1>'+ '<div id="bodyContent">'+ '<p><b>LA CLAVE DE LA SOBRIEDAD.</b> , — 01 de  Octubre de  1998.  Direc- ción: Colonia  Belga  Latea,  Calle  a Los Llanitos Casa  Nº 51. Días y horas  de reuniones: De Lunes a Domingo de 6:30 a 8:00 pm. Miem- bros  asistentes: 7 Hombres y 1 Mujer.</p>'+ '</div>'+ '</div>'; var infowindow513 = new google.maps.InfoWindow({ content: contentString513 });   
        //markers  
        var marker513 = new google.maps.Marker({ position: point513, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "513.LA CLAVE DE LA SOBRIEDAD." }); 
        //information for  
        function goToLink513() { infowindow513.open(map,marker513);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker513, 'click', goToLink513); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 514  
        //positions 
        var point514 = new google.maps.LatLng(13.736296, -89.195512); var contentString514 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NACER 15 DE SEPTIEMBRE.</h1>'+ '<div id="bodyContent">'+ '<p><b>NACER 15 DE SEPTIEMBRE.</b> , — 15 de  Septiembre de  2011.  Dirección: Calle Principal a Los Llanitos, Colonia  San Alfonso, Casa  N° 2 Ayutuxtepeque. Días y horas  de  reuniones: De Lunes a Sábado de 6:30 a 8:30 p.m.  y Domingo de  5:00 a 7:00 p.m.  Miembros asisten-</p>'+ '</div>'+ '</div>'; var infowindow514 = new google.maps.InfoWindow({ content: contentString514 });   
        //markers  
        var marker514 = new google.maps.Marker({ position: point514, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "514.NACER 15 DE SEPTIEMBRE." }); 
        //information for  
        function goToLink514() { infowindow514.open(map,marker514);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker514, 'click', goToLink514); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 515  
        //positions 
        var point515 = new google.maps.LatLng(13.736775, -89.202507); var contentString515 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UNIDAD Y ESPERANZA.</h1>'+ '<div id="bodyContent">'+ '<p><b>UNIDAD Y ESPERANZA.</b> , — 01 de  Diciembre de  1988.  Dirección: 2ª Calle Poniente, N° 6 frente  a tienda El mono, por La Despensa de Don Juan.  Días y horas  de  reuniones: De Lunes a Domingo de  7:00 a 8:30 p.m.  Miembros asistentes: 17 Hombres y 1 Mujer.</p>'+ '</div>'+ '</div>'; var infowindow515 = new google.maps.InfoWindow({ content: contentString515 });   
        //markers  
        var marker515 = new google.maps.Marker({ position: point515, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "515.UNIDAD Y ESPERANZA." }); 
        //information for  
        function goToLink515() { infowindow515.open(map,marker515);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker515, 'click', goToLink515); google.maps.event.addDomListener(window, 'load', initialize);

        //MARCADOR 516  
        //positions 
        var point516 = new google.maps.LatLng(13.735546, -89.183342); var contentString516 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">10 DE JUNIO.</h1>'+ '<div id="bodyContent">'+ '<p><b>10 DE JUNIO.</b> , — 10 de Junio  de 1996.  Dirección:  Avenida  Las Mar- garitas  Casa  Nº  12-A  Cuscatancingo. Días  y horas  de  reuniones: De Lunes a Domingo de  6:30 a 8:30 p.m.  Miembros asistentes: 10 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow516 = new google.maps.InfoWindow({ content: contentString516 });   
        //markers  
        var marker516 = new google.maps.Marker({ position: point516, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "516.10 DE JUNIO." }); 
        //information for  
        function goToLink516() { infowindow516.open(map,marker516);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker516, 'click', goToLink516); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 517 
         //positions 
        var point517 = new google.maps.LatLng(13.779927, -89.177253); var contentString517 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">AMOR  Y BONDAD.</h1>'+ '<div id="bodyContent">'+ '<p><b>AMOR  Y BONDAD.</b> , —  14  de  Abril de  1973.  Dirección:  Colonia Santa  Rosa, Avenida  Insurgentes Nº 16. Días y horas  de  reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m.  Miembros asistentes: 11 Hombres y 1 Mujer.</p>'+ '</div>'+ '</div>'; var infowindow517 = new google.maps.InfoWindow({ content: contentString517 });   
        //markers  
        var marker517 = new google.maps.Marker({ position: point517, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "517.AMOR  Y BONDAD." }); 
        //information for  
        function goToLink517() { infowindow517.open(map,marker517);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker517, 'click', goToLink517); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 518  
        //positions 
        var point518 = new google.maps.LatLng(13.726087, -89.175648); var contentString518 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">CUSCATANCINGO.</h1>'+ '<div id="bodyContent">'+ '<p><b>CUSCATANCINGO.</b> , — 15 de Septiembre de 1981. Dirección: 3ª Ca- lle Oriente, Casa  Nº 12 Cuscatancingo. Días y horas  de  reuniones: De Lunes a Domingo de  6:30 a 8:30 p.m.  Miembros asistentes: 16 Hombres y 1 Mujer.</p>'+ '</div>'+ '</div>'; var infowindow518 = new google.maps.InfoWindow({ content: contentString518 });   
        //markers  
        var marker518 = new google.maps.Marker({ position: point518, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "518.CUSCATANCINGO." }); 
        //information for  
        function goToLink518() { infowindow518.open(map,marker518);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker518, 'click', goToLink518); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 519  
        //positions 
        var point519 = new google.maps.LatLng(13.756142, -89.184446); var contentString519 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">LUZ Y ESPERANZA.</h1>'+ '<div id="bodyContent">'+ '<p><b>LUZ Y ESPERANZA.</b> , — 13  de  Mayo  de  1963.  Dirección:  Colonia Juanita Pasaje  Roosevelt Nº 13. Días y horas de reuniones: De Lunes a Domingo de 7:00 a 9:00 pm. Miembros asistentes: 7 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow519 = new google.maps.InfoWindow({ content: contentString519 });   
        //markers  
        var marker519 = new google.maps.Marker({ position: point519, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "519.LUZ Y ESPERANZA." }); 
        //information for  
        function goToLink519() { infowindow519.open(map,marker519);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker519, 'click', goToLink519); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 520  
        //positions 
        var point520 = new google.maps.LatLng(13.774095, -89.180329); var contentString520 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">MILAGRO DEL SIGLO XX.</h1>'+ '<div id="bodyContent">'+ '<p><b>MILAGRO DEL SIGLO XX.</b> , — 18  de  Agosto de  1966.  Dirección: Calle Santa  Rosa Nº 1-B. Días y horas  de reuniones: De Lunes a Do- mingo  de 6:30 a 8:00 p.m.  Miembros asistentes: 7 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow520 = new google.maps.InfoWindow({ content: contentString520 });   
        //markers  
        var marker520 = new google.maps.Marker({ position: point520, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "520.MILAGRO DEL SIGLO XX." }); 
        //information for  
        function goToLink520() { infowindow520.open(map,marker520);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker520, 'click', goToLink520); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 521  
        //positions 
        var point521 = new google.maps.LatLng(13.731048, -89.180906); var contentString521 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">RECUPERACIÓN AMIGOS DE EFRAÍN C.</h1>'+ '<div id="bodyContent">'+ '<p><b>RECUPERACIÓN AMIGOS DE EFRAÍN C.</b> , —15 de  Julio de  2009. Dirección:  Final Calle  Central  (Parroquia  Inmaculada Concepción). Días y horas  de  reuniones: De Lunes a Sábado de  06.00  a 08.00  p. m. y Domingo de  5:00  a 7:00  p.m.  Miembros asistentes: 12 Hom- bres.</p>'+ '</div>'+ '</div>'; var infowindow521 = new google.maps.InfoWindow({ content: contentString521 });   
        //markers  
        var marker521 = new google.maps.Marker({ position: point521, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "521.RECUPERACIÓN AMIGOS DE EFRAÍN C." }); 
        //information for  
        function goToLink521() { infowindow521.open(map,marker521);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker521, 'click', goToLink521); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 522  
        //positions 
        var point522 = new google.maps.LatLng(13.733132, -89.175560); var contentString522 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">SALVADOR.</h1>'+ '<div id="bodyContent">'+ '<p><b>SALVADOR.</b> , — 20 de  Agosto de  1960.  Dirección.  Calle Central  Nº 7. Días y horas  de  reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m.  Miembros asistentes: 22 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow522 = new google.maps.InfoWindow({ content: contentString522 });   
        //markers  
        var marker522 = new google.maps.Marker({ position: point522, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "522.SALVADOR." }); 
        //information for  
        function goToLink522() { infowindow522.open(map,marker522);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker522, 'click', goToLink522); google.maps.event.addDomListener(window, 'load', initialize);

        //MARCADOR 523  
        //positions 
        var point523 = new google.maps.LatLng(13.757519, -89.179077); var contentString523 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">SANTA FE.</h1>'+ '<div id="bodyContent">'+ '<p><b>SANTA FE.</b> , — 19 de  Enero  de  1969.  Dirección:  Calle María Auxilia- dora  y Colonia  María Auxiliadora  Casa N° 2. Días y horas  de reunio- nes: De Lunes a Domingo de 6:30 a 8:30 p.m. Miembros asistentes: 8 Hombres y 1 Mujer.</p>'+ '</div>'+ '</div>'; var infowindow523 = new google.maps.InfoWindow({ content: contentString523 });   
        //markers  
        var marker523 = new google.maps.Marker({ position: point523, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "523.SANTA FE." }); 
        //information for  
        function goToLink523() { infowindow523.open(map,marker523);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker523, 'click', goToLink523); google.maps.event.addDomListener(window, 'load', initialize);

        //MARCADOR 524  
        //positions 
        var point524 = new google.maps.LatLng(13.756019, -89.153984); var contentString524 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">11 DE ENERO.</h1>'+ '<div id="bodyContent">'+ '<p><b>11 DE ENERO.</b> , — 11 de Enero de 1967. Dirección: Cantón San José Cortez,  punto de  buses Ruta Nº 19. Días y horas  de  reuniones: De Lunes a Domingo de 6:00 a 8:00pm. Miembros asistentes: 15 Hom- bres.</p>'+ '</div>'+ '</div>'; var infowindow524 = new google.maps.InfoWindow({ content: contentString524 });   
        //markers  
        var marker524 = new google.maps.Marker({ position: point524, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "524.11 DE ENERO." }); 
        //information for  
        function goToLink524() { infowindow524.open(map,marker524);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker524, 'click', goToLink524); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 525  
        //positions 
        var point525 = new google.maps.LatLng(13.729778, -89.166871); var contentString525 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">11 DE MAYO.</h1>'+ '<div id="bodyContent">'+ '<p><b>11 DE MAYO.</b> , — 11 de Mayo de 1966.  Dirección:  Final Avenida  Paleca Nº 117 Ruta 4. Días y horas  de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.  Miembros asistentes: 25 Hombres y 2 Mujeres.</p>'+ '</div>'+ '</div>'; var infowindow525 = new google.maps.InfoWindow({ content: contentString525 });   
        //markers 
        var marker525 = new google.maps.Marker({ position: point525, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "525.11 DE MAYO." }); 
        //information for  
        function goToLink525() { infowindow525.open(map,marker525);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker525, 'click', goToLink525); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 526  
        //positions 
        var point526 = new google.maps.LatLng(13.723482, -89.169159); var contentString526 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">20 DE ENERO.</h1>'+ '<div id="bodyContent">'+ '<p><b>20 DE ENERO.</b> , — 20 de Enero de 1970. Dirección:  Cantón San Laureano. Días y horas  de  reuniones: De Lunes  a Domingo de  6:00  a 8:00 p.m.  Miembros asistentes: 4 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow526 = new google.maps.InfoWindow({ content: contentString526 });   
        //markers  
        var marker526 = new google.maps.Marker({ position: point526, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "526.20 DE ENERO." }); 
        //information for  
        function goToLink526() { infowindow526.open(map,marker526);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker526, 'click', goToLink526); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 527  
        //positions
        var point527 = new google.maps.LatLng(13.731810, -89.164878); var contentString527 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">29  DE JUNIO.</h1>'+ '<div id="bodyContent">'+ '<p><b>29  DE JUNIO.</b> , — 29 de  Junio  de  1985.  Dirección:  Avenida  Paleca Colonia  Patricia, Calle Principal Nº 1048.  Días y horas  de reuniones: De  Lunes  a Domingo de  6:30  a 8:30  pm.  Miembros asistentes: 4 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow527 = new google.maps.InfoWindow({ content: contentString527 });   
        //markers  
        var marker527 = new google.maps.Marker({ position: point527, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "527.29  DE JUNIO." }); 
        //information for  
        function goToLink527() { infowindow527.open(map,marker527);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker527, 'click', goToLink527); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 528  
        //positions 
        var point528 = new google.maps.LatLng(13.718996, -89.171210); var contentString528 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">ACOLHUATÁN.</h1>'+ '<div id="bodyContent">'+ '<p><b>ACOLHUATÁN.</b> , — 07 de  Marzo de  1965.  Dirección:  Avenida  Acolhuatán Nº 48. Días y horas  de  reuniones: De Lunes a Domingo de 7:00 a 9:00 p.m.  Miembros asistentes: 18 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow528 = new google.maps.InfoWindow({ content: contentString528 });   
        //markers  
        var marker528 = new google.maps.Marker({ position: point528, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "528.ACOLHUATÁN." }); 
        //information for  
        function goToLink528() { infowindow528.open(map,marker528);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker528, 'click', goToLink528); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 529  
        //positions 
        var point529 = new google.maps.LatLng(); var contentString529 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">CENTRAL DELGADO.</h1>'+ '<div id="bodyContent">'+ '<p><b>CENTRAL DELGADO.</b> , — 04 de  Mayo de  1967.  Dirección:  Calle El Calvario Nº 22. Días y horas  de  reuniones: De Lunes a Domingo de  7:00 a 9:00 p.m.  Miembros asistentes: 13 Hombres y 1 Mujer.</p>'+ '</div>'+ '</div>'; var infowindow529 = new google.maps.InfoWindow({ content: contentString529 });   
        //markers  
        var marker529 = new google.maps.Marker({ position: point529, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "529.CENTRAL DELGADO." }); 
        //information for  
        function goToLink529() { infowindow529.open(map,marker529);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker529, 'click', goToLink529); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 530  
        //positions 
        var point530 = new google.maps.LatLng(); var contentString530 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">CENTRAL PLAN DEL PINO.</h1>'+ '<div id="bodyContent">'+ '<p><b>CENTRAL PLAN DEL PINO.</b> , —  12  de  Diciembre de  1972.  Direc- ción:  Calle  Principal,  1 Cuadra al Norte  del  punto de  microbuses Ruta N°19 Cantón Plan del Pino. Días y horas  de  reuniones: De Lu- nes  a Domingo de  6:30 a 8:30 p.m.  Miembros asistentes: 17 Hom- bres  y 1 Mujer.</p>'+ '</div>'+ '</div>'; var infowindow530 = new google.maps.InfoWindow({ content: contentString530 });   
        //markers  
        var marker530 = new google.maps.Marker({ position: point530, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "530.CENTRAL PLAN DEL PINO." }); 
        //information for  
        function goToLink530() { infowindow530.open(map,marker530);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker530, 'click', goToLink530); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 531  
        //positions 
        var point531 = new google.maps.LatLng(13.726904, -89.166214); var contentString531 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">DESPERTAR 10  DE ENERO.</h1>'+ '<div id="bodyContent">'+ '<p><b>DESPERTAR 10  DE ENERO.</b> , — 10  de  Enero  de  2013.  Dirección: Carretera Troncal del Norte  Km. 5 ½ Comunidad Monte Carlos Casa N° 9, Ciudad Delgado. Días y horas  de  reuniones: De Lunes a Sá- bado de 7:00 a 9:00 p.m.  y Domingo de 5:00 a 7:00 pm. Miembros asistentes:. 20 Hombres y 1 Mujer.</p>'+ '</div>'+ '</div>'; var infowindow531 = new google.maps.InfoWindow({ content: contentString531 });   
        //markers  
        var marker531 = new google.maps.Marker({ position: point531, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "531.DESPERTAR 10  DE ENERO." }); 
        //information for  
        function goToLink531() { infowindow531.open(map,marker531);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker531, 'click', goToLink531); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 532  
        //positions 
        var point532 = new google.maps.LatLng(13.761276, -89.183144); var contentString532 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">DESPERTAR 20  DE MARZO.</h1>'+ '<div id="bodyContent">'+ '<p><b>DESPERTAR 20  DE MARZO.</b> , — 20 de  Marzo  de  1985.  Dirección: Calle  Gloria Nº 25 Colonia  San Francisco  después de  línea  férrea. Días y horas  de reuniones: De Lunes a Domingo de 7:00 a 9:30 p.m. Miembros asistentes: 7 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow532 = new google.maps.InfoWindow({ content: contentString532 });   
        //markers  
        var marker532 = new google.maps.Marker({ position: point532, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "532.DESPERTAR 20  DE MARZO." }); 
        //information for  
        function goToLink532() { infowindow532.open(map,marker532);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker532, 'click', goToLink532); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 533  
        //positions 
        var point533 = new google.maps.LatLng(13.792217, -89.157957); var contentString533 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">EL ALBA.</h1>'+ '<div id="bodyContent">'+ '<p><b>EL ALBA.</b> , — 16 de  Diciembre de  1983.  Dirección:  Cantón La Caba- ña 5 cuadras al Sur de  Escuela,  Km 14 ½, Carretera de  Oro.  Días y horas de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m. Miem- bros  asistentes: 14 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow533 = new google.maps.InfoWindow({ content: contentString533 });   
        //markers  
        var marker533 = new google.maps.Marker({ position: point533, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "533.EL ALBA." }); 
        //information for  
        function goToLink533() { infowindow533.open(map,marker533);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker533, 'click', goToLink533); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 534  

        //positions 
        var point534 = new google.maps.LatLng(13.711789, -89.166008); var contentString534 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">EL PROGRESO.</h1>'+ '<div id="bodyContent">'+ '<p><b>EL PROGRESO.</b> , — 22 de  Junio  de  1961.  Dirección:  Calle La Joya, Avenida Juan Bertis Casa Nº 19. Días y horas de reuniones: De Lunes a Domingo de 7:00 a 9:00 p.m.  Miembros asistentes: 9 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow534 = new google.maps.InfoWindow({ content: contentString534 });   
        //markers 
         var marker534 = new google.maps.Marker({ position: point534, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "534.EL PROGRESO." }); 
         //information for  
         function goToLink534() { infowindow534.open(map,marker534);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker534, 'click', goToLink534); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 535  
        //positions 
        var point535 = new google.maps.LatLng(13.729519, -89.168344); var contentString535 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">ESPERANZA.</h1>'+ '<div id="bodyContent">'+ '<p><b>ESPERANZA.</b> , — 20 de  Diciembre de  1962.  Dirección:  1ª  Calle  La Ronda,  Nº 10 Barrio Paleca,  Nº 12. Días y horas  de  reuniones: De Lunes  a  Domingo de  7:00  a  9:00  p.m.  Miembros asistentes:  10 Hombres y 1 Mujer.</p>'+ '</div>'+ '</div>'; var infowindow535 = new google.maps.InfoWindow({ content: contentString535 });   
        //markers  
        var marker535 = new google.maps.Marker({ position: point535, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "535.ESPERANZA." }); 
        //information for  
        function goToLink535() { infowindow535.open(map,marker535);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker535, 'click', goToLink535); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 536  
        //positions 
        var point536 = new google.maps.LatLng(13.752331, -89.170686); var contentString536 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">FUENTE DE  SALVACIÓN.</h1>'+ '<div id="bodyContent">'+ '<p><b>FUENTE DE  SALVACIÓN.</b> , — 30  de  Agosto de  1966.  Dirección: Cantón Calle Real, Km.9 Carretera Troncal del Norte, Calle Principal. Días y horas  de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m. Miembros asistentes: 9 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow536 = new google.maps.InfoWindow({ content: contentString536 });   
        //markers  
        var marker536 = new google.maps.Marker({ position: point536, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "536.FUENTE DE  SALVACIÓN." }); 
        //information for  
        function goToLink536() { infowindow536.open(map,marker536);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker536, 'click', goToLink536); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 537  
        //positions 
        var point537 = new google.maps.LatLng(13.754592, -89.154328); var contentString537 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">LUZ DE BILL.</h1>'+ '<div id="bodyContent">'+ '<p><b>LUZ DE BILL.</b> , — 06 de Agosto de 1978. Dirección:  Cantón San José Cortéz,  Caserío Flor Blanca Calle al Toríl. Días y horas  de reuniones: De Lunes a Domingo de  5:30 a 7:30 p.m.  Miembros asistentes: 16 Hombres y 1 Mujer.</p>'+ '</div>'+ '</div>'; var infowindow537 = new google.maps.InfoWindow({ content: contentString537 });   
        //markers  
        var marker537 = new google.maps.Marker({ position: point537, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "537.LUZ DE BILL." }); 
        //information for  
        function goToLink537() { infowindow537.open(map,marker537);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker537, 'click', goToLink537); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 538  
        //positions 
        var point538 = new google.maps.LatLng(13.770065, -89.168192); var contentString538 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NUEVO CAMINO.</h1>'+ '<div id="bodyContent">'+ '<p><b>NUEVO CAMINO.</b> , — 20 de Diciembre de 1969.  Dirección:  Colonia San Antonio  Km.11, Carretera Troncal  del  Norte, Avenida  La Reina Calle Principal,  Casa  N° 13. Días y horas  de  reuniones: De Lunes a Sábado de  7:00 a 9:00 pm  y Domingo de  6:00  a 8:00  p.m.  Miem- bros  asistentes: 20 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow538 = new google.maps.InfoWindow({ content: contentString538 });   
        //markers  
        var marker538 = new google.maps.Marker({ position: point538, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "538.NUEVO CAMINO." }); 
        //information for  
        function goToLink538() { infowindow538.open(map,marker538);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker538, 'click', goToLink538); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 539  
        //positions 
        var point539 = new google.maps.LatLng(13.775127, -89.169552); var contentString539 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NUEVO CAYALÁ.</h1>'+ '<div id="bodyContent">'+ '<p><b>NUEVO CAYALÁ.</b> , — 25 de Enero  de 1985.  Dirección:  Urbanización Nuevo  Cayalá,  Pasaje  Quinona Edificio K Apartamento N° 105 Km. 10, Carretera Troncal del Norte. Días y horas de reuniones: De Lunes a Domingo de 7:00 a 9:00 p.m.  Miembros asistentes: 8 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow539 = new google.maps.InfoWindow({ content: contentString539 });   
        //markers  
        var marker539 = new google.maps.Marker({ position: point539, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "539.NUEVO CAYALÁ." }); 
        //information for  
        function goToLink539() { infowindow539.open(map,marker539);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker539, 'click', goToLink539); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 540  
        //positions 
        var point540 = new google.maps.LatLng(13.787726, -89.151886); var contentString540 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">PLAN DE LAS 24 HORAS.</h1>'+ '<div id="bodyContent">'+ '<p><b>PLAN DE LAS 24 HORAS.</b> , — 19 de Mayo de 1973.  Dirección:  Can- tón  Cabaña, Caserío Bola  de  Monte de  Ciudad Delgado. Días  y horas de reuniones: De Lunes a Domingo de 6:30 a 8:00 p.m. Miem- bros  asistentes: 15 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow540 = new google.maps.InfoWindow({ content: contentString540 });   
        //markers  
        var marker540 = new google.maps.Marker({ position: point540, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "540.PLAN DE LAS 24 HORAS." }); 
        //information for  
        function goToLink540() { infowindow540.open(map,marker540);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker540, 'click', goToLink540); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 541  
        //positions 
        var point541 = new google.maps.LatLng(13.783953, -89.150126); var contentString541 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">RENACER 01  DE NOVIEMBRE.</h1>'+ '<div id="bodyContent">'+ '<p><b>RENACER 01  DE NOVIEMBRE.</b> , — 01 de  Noviembre de  1982.  Di- rección:  Caserío La Ermita, Cantón La Cabaña. Días y horas  de  reu- niones: De Lunes a Domingo de 5:30 a 7:00 p.m. Miembros asisten- tes: 12 Hombres y 2 Mujeres.</p>'+ '</div>'+ '</div>'; var infowindow541 = new google.maps.InfoWindow({ content: contentString541 });   
        //markers  
        var marker541 = new google.maps.Marker({ position: point541, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "541.RENACER 01  DE NOVIEMBRE." }); 
        //information for  
        function goToLink541() { infowindow541.open(map,marker541);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker541, 'click', goToLink541); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 542  
        //positions 
        var point542 = new google.maps.LatLng(13.741453, -89.165217); var contentString542 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">RENACER 08  DE AGOSTO.</h1>'+ '<div id="bodyContent">'+ '<p><b>RENACER 08  DE AGOSTO.</b> , — 08 de  Agosto de  2005.  Dirección: Ciudad Delgado. Días y horas  de reuniones: De Lunes a Sábado de 6:00 a 8:00 pm y Domingo de 5:00 a 7:00pm. Miembros asistentes: 8 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow542 = new google.maps.InfoWindow({ content: contentString542 });   
        //markers  
        var marker542 = new google.maps.Marker({ position: point542, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "542.RENACER 08  DE AGOSTO." }); 
        //information for  
        function goToLink542() { infowindow542.open(map,marker542);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker542, 'click', goToLink542); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 543  
        //positions 
        var point543 = new google.maps.LatLng(13.741242, -89.169078); var contentString543 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">RENACER HABITAT CONFIEN.</h1>'+ '<div id="bodyContent">'+ '<p><b>RENACER HABITAT CONFIEN.</b> , — 22 de Marzo de 2014. Dirección: Pasaje  Nº 11 Casa Nº 7, Zona A Km. 7, Carretera Troncal del Norte. Días y horas  de reuniones: De Lunes a Domingo de 6:30 a 8:30 p.m. Miembros asistentes: 8 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow543 = new google.maps.InfoWindow({ content: contentString543 });   
        //markers 
         var marker543 = new google.maps.Marker({ position: point543, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "543.RENACER HABITAT CONFIEN." }); 
         //information for  
         function goToLink543() { infowindow543.open(map,marker543);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker543, 'click', goToLink543); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 544  
        //positions 
        var point544 = new google.maps.LatLng(13.726548, -89.167703); var contentString544 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">RENOVACIÓN.</h1>'+ '<div id="bodyContent">'+ '<p><b>RENOVACIÓN.</b> , — 15 de  Marzo de  1988.  Dirección:  Barrio Paleca, Calle Las Ánimas Nº 25. Días y horas  de  reuniones: De Lunes a Do- mingo  de 7:00 a 9:00 p.m.  Miembros asistentes: 15 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow544 = new google.maps.InfoWindow({ content: contentString544 });   
        //markers  
        var marker544 = new google.maps.Marker({ position: point544, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "544.RENOVACIÓN." }); 
        //information for  
        function goToLink544() { infowindow544.open(map,marker544);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker544, 'click', goToLink544); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 545  
        //positions 
        var point545 = new google.maps.LatLng(13.717977, -89.165906); var contentString545 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">SAN SEBASTIÁN.</h1>'+ '<div id="bodyContent">'+ '<p><b>SAN SEBASTIÁN.</b> , — 29 de  Julio de  1965.  Dirección:  Calle Texical, Casa  Nº  57  Barrio  San  Sebastián. Días  y horas  de  reuniones: De Lunes a Domingo de 7:00 a 9:00 p.m. Miembros asistentes: 7 Hom- bres  y 1 Mujer.</p>'+ '</div>'+ '</div>'; var infowindow545 = new google.maps.InfoWindow({ content: contentString545 });   
        //markers  
        var marker545 = new google.maps.Marker({ position: point545, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "545.SAN SEBASTIÁN." }); 
        //information for  
        function goToLink545() { infowindow545.open(map,marker545);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker545, 'click', goToLink545); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 546  
        //positions 
        var point546 = new google.maps.LatLng(13.750803, -89.169880); var contentString546 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">TESORO DE VIDA.</h1>'+ '<div id="bodyContent">'+ '<p><b>TESORO DE VIDA.</b> , — 19 de Octubre de 1975.  Dirección:  Carretera Troncal del Norte  Km. 7 ½ Urbanización Las Colinas del Norte, Polí- gono L, Pasaje  Nº 7 Casa Nº 6. Días y horas  de reuniones: De Lunes a Domingo de  6:30 a 8:30 p.m.  Miembros asistentes: 24 Hombres y 2 Mujeres.</p>'+ '</div>'+ '</div>'; var infowindow546 = new google.maps.InfoWindow({ content: contentString546 });   
        //markers  
        var marker546 = new google.maps.Marker({ position: point546, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "546.TESORO DE VIDA." }); 
        //information for  
        function goToLink546() { infowindow546.open(map,marker546);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker546, 'click', goToLink546); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 547  
        //positions 
        var point547 = new google.maps.LatLng(13.797144, -89.160877); var contentString547 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UNA LUZ EN LAS PRADERAS.</h1>'+ '<div id="bodyContent">'+ '<p><b>UNA LUZ EN LAS PRADERAS.</b> , — 23 de  Junio  de  1982.  Dirección: Cantón La Cabañita Praderas Nº 1. Días y horas  de  reuniones: De Lunes  a  Domingo de  6:00  a  8:00  p.m.  Miembros asistentes:  12 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow547 = new google.maps.InfoWindow({ content: contentString547 });   
        //markers  
        var marker547 = new google.maps.Marker({ position: point547, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "547.UNA LUZ EN LAS PRADERAS." }); 
        //information for  
        function goToLink547() { infowindow547.open(map,marker547);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker547, 'click', goToLink547); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 548  
        //positions 
        var point548 = new google.maps.LatLng(13.762924, -89.172983); var contentString548 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">VICTORIA 06  DE FEBRERO.</h1>'+ '<div id="bodyContent">'+ '<p><b>VICTORIA 06  DE FEBRERO.</b> , — 06 de  Febrero de  1971.  Dirección: 9ª Calle Oriente 412 Bis, Barrio Las Victorias Ciudad Delgado. Días y horas de reuniones: De Lunes a Domingo de 7:00 a 9:00 p.m. Miem- bros  asistentes:10 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow548 = new google.maps.InfoWindow({ content: contentString548 });   
        //markers  
        var marker548 = new google.maps.Marker({ position: point548, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "548.VICTORIA 06  DE FEBRERO." }); 
        //information for  
        function goToLink548() { infowindow548.open(map,marker548);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker548, 'click', goToLink548); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 549  
        //positions 
        var point549 = new google.maps.LatLng(13.725316, -89.166926); var contentString549 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">VIDA EN A.A.</h1>'+ '<div id="bodyContent">'+ '<p><b>VIDA EN A.A.</b> , —  22 de  Julio  de  1972.  Dirección:  Avenida  Paleca Nº 47 Ciudad Delgado S.S. Días y horas  de  reuniones: De Lunes a Domingo de 7:00 a 9:00 p.m.  Miembros asistentes: 12 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow549 = new google.maps.InfoWindow({ content: contentString549 });   
        //markers  
        var marker549 = new google.maps.Marker({ position: point549, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "549.VIDA EN A.A." }); 
        //information for  
        function goToLink549() { infowindow549.open(map,marker549);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker549, 'click', goToLink549); google.maps.event.addDomListener(window, 'load', initialize);

        //MARCADOR 550  
        //positions 
        var point550 = new google.maps.LatLng(14.034386, -89.156789); var contentString550 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">DIVINA PROVIDENCIA.</h1>'+ '<div id="bodyContent">'+ '<p><b>DIVINA PROVIDENCIA.</b> , — 14 de Junio  de 1988. Dirección:  Cantón Potrero Grande, Km. 43, Carretera Troncal  del  Norte. Días y horas de  reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m.  Miembros asistentes: 15 de Hombres y 4 Mujeres.</p>'+ '</div>'+ '</div>'; var infowindow550 = new google.maps.InfoWindow({ content: contentString550 });   
        //markers  
        var marker550 = new google.maps.Marker({ position: point550, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "550.DIVINA PROVIDENCIA." }); 
        //information for  
        function goToLink550() { infowindow550.open(map,marker550);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker550, 'click', goToLink550); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 551  
        //positions 
        var point551 = new google.maps.LatLng(13.979741, -89.221343); var contentString551 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">FUENTE DE FORTALEZA.</h1>'+ '<div id="bodyContent">'+ '<p><b>FUENTE DE FORTALEZA.</b> , — 17 de  Abril de  1982.  Dirección:  Can- tón  San Rafael Los Turcos.  Días y horas  de  reuniones: De Lunes  a Domingo de 6:00a  8:00 p.m.  Miembros asistentes: 15 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow551 = new google.maps.InfoWindow({ content: contentString551 });   
        //markers  
        var marker551 = new google.maps.Marker({ position: point551, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "551.FUENTE DE FORTALEZA." }); 
        //information for  
        function goToLink551() { infowindow551.open(map,marker551);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker551, 'click', goToLink551); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 552  
        //positions 
        var point552 = new google.maps.LatLng(14.053048, -89.146757); var contentString552 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NACIMOS PARA TRIUNFAR.</h1>'+ '<div id="bodyContent">'+ '<p><b>NACIMOS PARA TRIUNFAR.</b> , — 10  de  Mayo  de  2011.  Dirección: Lotificación El Tule 3, Polígono 5, Lote N° 4. Días y horas  de reunio- nes: De Lunes a Domingo de 6.00 a 8.00 p.m. Miembros asistentes: 30 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow552 = new google.maps.InfoWindow({ content: contentString552 });   
        //markers  
        var marker552 = new google.maps.Marker({ position: point552, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "552.NACIMOS PARA TRIUNFAR." }); 
        //information for  
        function goToLink552() { infowindow552.open(map,marker552);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker552, 'click', goToLink552); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 553  
        //positions 
        var point553 = new google.maps.LatLng(14.056053, -89.135062); var contentString553 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NUEVA ESPERANZA.</h1>'+ '<div id="bodyContent">'+ '<p><b>NUEVA ESPERANZA.</b> , — 29 de Junio  de 1986.  Dirección:  Brisas de San  Diego  Km. 40,  Carretera Troncal  del  Norte. Días  y horas  de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m. Miembros asis- tentes: 5 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow553 = new google.maps.InfoWindow({ content: contentString553 });   
        //markers  
        var marker553 = new google.maps.Marker({ position: point553, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "553.NUEVA ESPERANZA." }); 
        //information for  
        function goToLink553() { infowindow553.open(map,marker553);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker553, 'click', goToLink553); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 554  
        //positions 
        var point554 = new google.maps.LatLng(14.016668, -89.183006); var contentString554 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">SAN LORENZO.</h1>'+ '<div id="bodyContent">'+ '<p><b>SAN LORENZO.</b> , — 20 de  Junio  de  1972.  Dirección:  Cantón La Cabaña, El Paisnal. Días y horas  de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.  Miembros asistentes: 12 Hombres y 1 Mujer.</p>'+ '</div>'+ '</div>'; var infowindow554 = new google.maps.InfoWindow({ content: contentString554 });   
        //markers  
        var marker554 = new google.maps.Marker({ position: point554, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "554.SAN LORENZO." }); 
        //information for  
        function goToLink554() { infowindow554.open(map,marker554);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker554, 'click', goToLink554); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 555  
        //positions 
        var point555 = new google.maps.LatLng(14.009145, -89.164142); var contentString555 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UNA  LUZ DE ESPERANZA.</h1>'+ '<div id="bodyContent">'+ '<p><b>UNA  LUZ DE ESPERANZA.</b> , — 18 de  Noviembre de  2008.  Direc- ción:  Calle  El Chagüite, Barrio El Centro, Casa  S/N.  Días  y horas de  reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m.  Miembros asistentes: 7 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow555 = new google.maps.InfoWindow({ content: contentString555 });   
        //markers  
        var marker555 = new google.maps.Marker({ position: point555, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "555.UNA  LUZ DE ESPERANZA." }); 
        //information for  
        function goToLink555() { infowindow555.open(map,marker555);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker555, 'click', goToLink555); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 556  
        //positions 
        var point556 = new google.maps.LatLng(14.053464, -89.143107); var contentString556 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">VIVIR EN A.A.  ES VIDA.</h1>'+ '<div id="bodyContent">'+ '<p><b>VIVIR EN A.A.  ES VIDA.</b> , — 28 de  Enero  de  1992.  Dirección:  Ca- rretera Troncal del  Norte, Kilometro  45. Días y horas  de  reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m.  Miembros asistentes: 16 Hombres y 1 Mujer.</p>'+ '</div>'+ '</div>'; var infowindow556 = new google.maps.InfoWindow({ content: contentString556 });   
        //markers  
        var marker556 = new google.maps.Marker({ position: point556, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "556.VIVIR EN A.A.  ES VIDA." }); 
        //information for  
        function goToLink556() { infowindow556.open(map,marker556);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker556, 'click', goToLink556); google.maps.event.addDomListener(window, 'load', initialize);

        //MARCADOR 557  
        //positions 
        var point557 = new google.maps.LatLng(13.870998, -89.168544); var contentString557 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">1° DE MARZO.</h1>'+ '<div id="bodyContent">'+ '<p><b>1° DE MARZO.</b> , — 01 de Marzo de 2005. Dirección:  Colonia San An- tonio Nº 1, Calle Principal Nº 36, Días y horas de reuniones: De Lunes a Domingo de 6:30 a 8:30 p.m.  Miembros asistentes: 13 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow557 = new google.maps.InfoWindow({ content: contentString557 });   
        //markers  
        var marker557 = new google.maps.Marker({ position: point557, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "557.1° DE MARZO." }); 
        //information for  
        function goToLink557() { infowindow557.open(map,marker557);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker557, 'click', goToLink557); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 558  
        //positions 
        var point558 = new google.maps.LatLng(13.876458, -89.179989); var contentString558 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">12 PASOS.</h1>'+ '<div id="bodyContent">'+ '<p><b>12 PASOS.</b> , — 25 de Noviembre de 2007. Dirección: Km. 30 Carrete- ra Troncal del Norte  Lotificación El Trapiche Nº 2 lote No 21 Cantón San Gerónimo, Días y horas  de  reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.  Miembros asistentes: 10 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow558 = new google.maps.InfoWindow({ content: contentString558 });   
        //markers  
        var marker558 = new google.maps.Marker({ position: point558, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "558.12 PASOS." }); 
        //information for  
        function goToLink558() { infowindow558.open(map,marker558);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker558, 'click', goToLink558); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 559  
        //positions 
        var point559 = new google.maps.LatLng(13.877399, -89.172908); var contentString559 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">FELICIDAD 12  DE ABRIL.</h1>'+ '<div id="bodyContent">'+ '<p><b>FELICIDAD 12  DE ABRIL.</b> , — 12 de  Abril de  2010.  Dirección:  Ca- rretera Troncal  del  Norte, Km. 22 ½ frente  a Gasolinera Enmanuel, antes de  llegar  a La pasarela. Días y horas  de  reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m.  Miembros asistentes: 13 Hombres y 1 Mujer.</p>'+ '</div>'+ '</div>'; var infowindow559 = new google.maps.InfoWindow({ content: contentString559 });   
        //markers  
        var marker559 = new google.maps.Marker({ position: point559, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "559.FELICIDAD 12  DE ABRIL." }); 
        //information for  
        function goToLink559() { infowindow559.open(map,marker559);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker559, 'click', goToLink559); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 560  
        //positions 
        var point560 = new google.maps.LatLng(13.870549, -89.162560); var contentString560 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">JARDÍNES DEL  CAMPO.</h1>'+ '<div id="bodyContent">'+ '<p><b>JARDÍNES DEL  CAMPO.</b> , —  02  de  octubre de  2010.   Dirección: Colonia  Jardínes del  Campo, Calle Principal  al Cementerio Nuevo. Días y horas  de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m. Miembros asistentes: 14 Hombres y 1 Mujer</p>'+ '</div>'+ '</div>'; var infowindow560 = new google.maps.InfoWindow({ content: contentString560 });   
        //markers  
        var marker560 = new google.maps.Marker({ position: point560, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "560.JARDÍNES DEL  CAMPO." }); 
        //information for  
        function goToLink560() { infowindow560.open(map,marker560);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker560, 'click', goToLink560); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 561  
        //positions 
        var point561 = new google.maps.LatLng(13.878303, -89.168417); var contentString561 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">LIBERADOS 1º DE AGOSTO.</h1>'+ '<div id="bodyContent">'+ '<p><b>LIBERADOS 1º DE AGOSTO.</b> , — 01 de  Agosto de  1979.  Dirección: Calle 5 de  Noviembre. Días y horas  de  reuniones: De Lunes a Do- mingo  de  6:00  a 8:00  pm.  Miembros asistentes: 20  Hombres y 3 Mujeres</p>'+ '</div>'+ '</div>'; var infowindow561 = new google.maps.InfoWindow({ content: contentString561 });   
        //markers  
        var marker561 = new google.maps.Marker({ position: point561, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "561.LIBERADOS 1º DE AGOSTO." }); 
        //information for  
        function goToLink561() { infowindow561.open(map,marker561);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker561, 'click', goToLink561); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 562  
        //positions 
        var point562 = new google.maps.LatLng(13.875084, -89.175558); var contentString562 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">SAN MIGUEL.</h1>'+ '<div id="bodyContent">'+ '<p><b>SAN MIGUEL.</b> , — 17 de  Mayo de  1964.  Dirección:  1ª Calle Oriente No  192,  Barrio  El Centro. Días  y horas  de  reuniones: De  Lunes  a Domingo de  6:00  a 8:00  p.m.  Miembros asistentes: 12 Hombres y 1 Mujer.</p>'+ '</div>'+ '</div>'; var infowindow562 = new google.maps.InfoWindow({ content: contentString562 });   
        //markers  
        var marker562 = new google.maps.Marker({ position: point562, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "562.SAN MIGUEL." }); 
        //information for  
        function goToLink562() { infowindow562.open(map,marker562);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker562, 'click', goToLink562); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 563  
        //positions 
        var point563 = new google.maps.LatLng(13.877544, -89.181263); var contentString563 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UN MILAGRO EN EL CAMPO.</h1>'+ '<div id="bodyContent">'+ '<p><b>UN MILAGRO EN EL CAMPO.</b> , — 23 de  Junio  de  1985.  Dirección: Colonia  Buena  Vista, Calle Principal  Nº 29, Días y horas  de  reunio- nes: De Lunes a Domingo de 6:00 a 8:00 p.m. Miembros asistentes: 14 Hombres y 1 Mujer.</p>'+ '</div>'+ '</div>'; var infowindow563 = new google.maps.InfoWindow({ content: contentString563 });   
        //markers  
        var marker563 = new google.maps.Marker({ position: point563, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "563.UN MILAGRO EN EL CAMPO." }); 
        //information for  
        function goToLink563() { infowindow563.open(map,marker563);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker563, 'click', goToLink563); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 564  
        //positions 
        var point564 = new google.maps.LatLng(13.873091, -89.167869); var contentString564 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UN MUNDO  NUEVO.</h1>'+ '<div id="bodyContent">'+ '<p><b>UN MUNDO  NUEVO.</b> , — 31 de  Enero  de  1979.  Dirección:  Calle El Calvario  frente  a Renovación Carismática, Días y horas  de  reunio- nes: De Lunes a Domingo de 6:00 a 8:00 p.m. Miembros asistentes: 16 Hombres y 1 Mujer.</p>'+ '</div>'+ '</div>'; var infowindow564 = new google.maps.InfoWindow({ content: contentString564 });   
        //markers  
        var marker564 = new google.maps.Marker({ position: point564, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "564.UN MUNDO  NUEVO." }); 
        //information for  
        function goToLink564() { infowindow564.open(map,marker564);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker564, 'click', goToLink564); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 565  
        //positions 
        var point565 = new google.maps.LatLng(13.876730, -89.166311); var contentString565 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UN RAYO DE LUZ 31 DE MARZO.</h1>'+ '<div id="bodyContent">'+ '<p><b>UN RAYO DE LUZ 31 DE MARZO.</b> , — 31 de Marzo de 1977.  Direc- ción: Barrio El Calvario Avenida  Central  No 87 Guazapa. Días y horas de  reuniones: De Lunes a Domingo de  6:30  a 8:30  pm.  Miembros asistentes: 15 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow565 = new google.maps.InfoWindow({ content: contentString565 });   
        //markers  
        var marker565 = new google.maps.Marker({ position: point565, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "565.UN RAYO DE LUZ 31 DE MARZO." }); 
        //information for  
        function goToLink565() { infowindow565.open(map,marker565);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker565, 'click', goToLink565); google.maps.event.addDomListener(window, 'load', initialize);

        //MARCADOR 566  
        //positions 
        var point566 = new google.maps.LatLng(13.694314, -89.110362); var contentString566 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">1º  DE JUNIO AGUILAS DE LA NOCHE.</h1>'+ '<div id="bodyContent">'+ '<p><b>1º  DE JUNIO AGUILAS DE LA NOCHE.</b> , —01  de  Junio  de  2002. Dirección:  Avenida  5 de Noviembre Nº 4 Contiguo a Alcaldía Muni- cipal de  Ilopango. Días y horas  de  reuniones: De Lunes a Domingo de 7:00 a 9:00 p.m.  Miembros asistentes: 28 Hombres y 3 Mujeres.</p>'+ '</div>'+ '</div>'; var infowindow566 = new google.maps.InfoWindow({ content: contentString566 });   
        //markers  
        var marker566 = new google.maps.Marker({ position: point566, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "566.1º  DE JUNIO AGUILAS DE LA NOCHE." }); 
        //information for  
        function goToLink566() { infowindow566.open(map,marker566);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker566, 'click', goToLink566); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 567  
        //positions 
        var point567 = new google.maps.LatLng(13.695392, -89.120890); var contentString567 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">BELLO AMANECER.</h1>'+ '<div id="bodyContent">'+ '<p><b>BELLO AMANECER.</b> , — 01 de  Diciembre de  1994.  Dirección:  Can- tón  Dolores, Apulo,  Calle Amatitlán,  Colonia  Bello Amanecer. Días y horas  de  reuniones: De  Lunes  a  Domingo de  7:00  a  9:00  p.m. Miembros asistentes: 12 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow567 = new google.maps.InfoWindow({ content: contentString567 });   
        //markers  
        var marker567 = new google.maps.Marker({ position: point567, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "567.BELLO AMANECER." }); 
        //information for  
        function goToLink567() { infowindow567.open(map,marker567);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker567, 'click', goToLink567); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 568  
        //positions 
        var point568 = new google.maps.LatLng(13.717592, -89.104073); var contentString568 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">DESPERTAR 20  DE OCTUBRE.</h1>'+ '<div id="bodyContent">'+ '<p><b>DESPERTAR 20  DE OCTUBRE.</b> , — 20 de  Octubre de  1988.  Direc- ción:  Colonia  Cima  1 Boulevard Las Pavas  Block 1 Nº  13.  Días  y horas de reuniones: De Lunes a Domingo de 7:00 a 9:00 p.m. Miem- bros  asistentes: 12 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow568 = new google.maps.InfoWindow({ content: contentString568 });   
        //markers 
        var marker568 = new google.maps.Marker({ position: point568, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "568.DESPERTAR 20  DE OCTUBRE." }); 
        //information for  
        function goToLink568() { infowindow568.open(map,marker568);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker568, 'click', goToLink568); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 569  
        //positions 
        var point569 = new google.maps.LatLng(13.707435, -89.106340); var contentString569 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">ESCOGIDOS DE DIOS 2001.</h1>'+ '<div id="bodyContent">'+ '<p><b>ESCOGIDOS DE DIOS 2001.</b> , — 09 de  Noviembre de  2001.  Direc- ción: Cantón San Bartolo,  Final Calle Meléndez Nº 10. Días y horas de  reuniones: De Lunes a Domingo de  7:00 a 9:00 p.m.  Miembros asistentes: 9 Hombres y 1 Mujer.</p>'+ '</div>'+ '</div>'; var infowindow569 = new google.maps.InfoWindow({ content: contentString569 });   
        //markers  
        var marker569 = new google.maps.Marker({ position: point569, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "569.ESCOGIDOS DE DIOS 2001." }); 
        //information for  
        function goToLink569() { infowindow569.open(map,marker569);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker569, 'click', goToLink569); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 570  
        //positions 
        var point570 = new google.maps.LatLng(13.681453, -89.139093); var contentString570 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">FE EN MI CAMINO.</h1>'+ '<div id="bodyContent">'+ '<p><b>FE EN MI CAMINO.</b> , — 27 de  Febrero de  1991.  Dirección:  Colonia San Rafael, N° 232,  Ilopango. Días y horas  de  reuniones: De Lunes a Domingo de 7:00 a 9:00 p.m.  Miembros asistentes: 4 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow570 = new google.maps.InfoWindow({ content: contentString570 });   
        //markers  
        var marker570 = new google.maps.Marker({ position: point570, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "570.FE EN MI CAMINO." }); 
        //information for  
        function goToLink570() { infowindow570.open(map,marker570);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker570, 'click', goToLink570); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 571  
        //positions 
        var point571 = new google.maps.LatLng(13.706409, -89.107107); var contentString571 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">FÉNIX.</h1>'+ '<div id="bodyContent">'+ '<p><b>FÉNIX.</b> , — 12  de  Junio  de  2012.  Dirección:  Entrada a  La Colonia Santa  Rosa, Calle Principal, Casa  Nº 12. A 200 metros adelante por pizza hut. Días y horas  de reuniones: De Lunes a Domingo de 7:00 a 9:00 p.m.  Miembros asistentes: 12 Hombres y 1 Mujer.</p>'+ '</div>'+ '</div>'; var infowindow571 = new google.maps.InfoWindow({ content: contentString571 });   
        //markers  
        var marker571 = new google.maps.Marker({ position: point571, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "571.FÉNIX." }); 
        //information for  
        function goToLink571() { infowindow571.open(map,marker571);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker571, 'click', goToLink571); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 572  
        //positions 
        var point572 = new google.maps.LatLng(13.700363, -89.077955); var contentString572 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">LA GRAN FAMILIA.</h1>'+ '<div id="bodyContent">'+ '<p><b>LA GRAN FAMILIA.</b> , — 17 de  Febrero de  1982.  Dirección:  Turicen- tro Parque Acuático de Turismo, Cantón Dolores Apulo. Días y horas de  reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m.  Miembros asistentes: 10 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow572 = new google.maps.InfoWindow({ content: contentString572 });   
        //markers  
        var marker572 = new google.maps.Marker({ position: point572, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "572.LA GRAN FAMILIA." }); 
        //information for  
        function goToLink572() { infowindow572.open(map,marker572);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker572, 'click', goToLink572); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 573  
        //positions 
        var point573 = new google.maps.LatLng(13.705422, -89.104228); var contentString573 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">LUZ Y VIDA.</h1>'+ '<div id="bodyContent">'+ '<p><b>LUZ Y VIDA.</b> , — 16 de  Octubre de  1971.  Dirección:  Boulevard San Bartolo,  costado Oriente de  Instituto  Nacional  San  Bartolo,  Calle Principal. Días y horas  de reuniones: De Lunes a Domingo de 7:00 a 9:00 p.m.  Miembros asistentes: 16 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow573 = new google.maps.InfoWindow({ content: contentString573 });   
        //markers  
        var marker573 = new google.maps.Marker({ position: point573, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "573.LUZ Y VIDA." }); 
        //information for  
        function goToLink573() { infowindow573.open(map,marker573);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker573, 'click', goToLink573); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 574  
        //positions 
        var point574 = new google.maps.LatLng(13.707130, -89.108561); var contentString574 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NUEVO  AMANECER.</h1>'+ '<div id="bodyContent">'+ '<p><b>NUEVO  AMANECER.</b> , — 23  de  Enero  de  1987.  Dirección:  Calle Principal  Nº  304,  Reparto Las Cañas  San  Bartolo.  Días y horas  de reuniones: De Lunes a Domingo de 7:00 a 9:00 p.m. Miembros asis- tentes:10 Hombres y 1 mujer</p>'+ '</div>'+ '</div>'; var infowindow574 = new google.maps.InfoWindow({ content: contentString574 });   
        //markers  
        var marker574 = new google.maps.Marker({ position: point574, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "574.NUEVO  AMANECER." }); 
        //information for  
        function goToLink574() { infowindow574.open(map,marker574);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker574, 'click', goToLink574); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 575  
        //positions 
        var point575 = new google.maps.LatLng(13.689115, -89.128501); var contentString575 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">PRIMERA LUZ DE MAYO.</h1>'+ '<div id="bodyContent">'+ '<p><b>PRIMERA LUZ DE MAYO.</b> , — 01 de  Mayo de  1973.  Dirección:  Co- lonia Santa  Lucía, Calle Principal  Nº 74. Días y horas  de  reuniones: De Lunes a Domingo de  7:00 a 9:00 p.m.  Miembros asistentes: 20 Hombres y 2 Mujeres.</p>'+ '</div>'+ '</div>'; var infowindow575 = new google.maps.InfoWindow({ content: contentString575 });   
        //markers  
        var marker575 = new google.maps.Marker({ position: point575, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "575.PRIMERA LUZ DE MAYO." }); 
        //information for  
        function goToLink575() { infowindow575.open(map,marker575);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker575, 'click', goToLink575); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 576  
        //positions 
        var point576 = new google.maps.LatLng(13.715071, -89.108471); var contentString576 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">RECUPERACIÓN 1º  AGOSTO.</h1>'+ '<div id="bodyContent">'+ '<p><b>RECUPERACIÓN 1º  AGOSTO.</b> , —  01  de  Agosto de  1981.  Direc- ción: Pasaje  “C” Polígono 1, Casa N° 154 Reparto San Bartolo.  Días y horas  de  reuniones: De  Lunes  a  Domingo de  7:00  a  9:00  p.m. Miembros asistentes: 12 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow576 = new google.maps.InfoWindow({ content: contentString576 });   
        //markers  
        var marker576 = new google.maps.Marker({ position: point576, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "576.RECUPERACIÓN 1º  AGOSTO." }); 
        //information for  
        function goToLink576() { infowindow576.open(map,marker576);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker576, 'click', goToLink576); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 577  
        //positions 
        var point577 = new google.maps.LatLng(13.712079, -89.099043); var contentString577 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">SOBRIEDAD 20 DE JULIO.</h1>'+ '<div id="bodyContent">'+ '<p><b>SOBRIEDAD 20 DE JULIO.</b> , — 20 de Julio de 1983. Dirección: Colo- nia San Felipe,  Polígono N° 5 Casa Nº 5. Días y horas  de reuniones: De Lunes a Domingo de  7:00 a 9:00 p.m.  Miembros asistentes: 12 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow577 = new google.maps.InfoWindow({ content: contentString577 });   
        //markers  
        var marker577 = new google.maps.Marker({ position: point577, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "577.SOBRIEDAD 20 DE JULIO." }); 
        //information for  
        function goToLink577() { infowindow577.open(map,marker577);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker577, 'click', goToLink577); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 578  
        //positions 
        var point578 = new google.maps.LatLng(13.703471, -89.076745); var contentString578 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">SOMOS FELICES HOY.</h1>'+ '<div id="bodyContent">'+ '<p><b>SOMOS FELICES HOY.</b> , — 18 de Agosto de 1963. Dirección: Cantón Dolores, Apulo,  Calle El Cocalito Ilopango. Días y horas  de  reunio- nes: De Lunes a Domingo de 6.00 a 8:00 p.m. Miembros asistentes: 24 Hombres y 1 Mujer.</p>'+ '</div>'+ '</div>'; var infowindow578 = new google.maps.InfoWindow({ content: contentString578 });   
        //markers  
        var marker578 = new google.maps.Marker({ position: point578, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "578.SOMOS FELICES HOY." }); 
        //information for  
        function goToLink578() { infowindow578.open(map,marker578);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker578, 'click', goToLink578); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 579  
        //positions 
        var point579 = new google.maps.LatLng(13.712438, -89.087713); var contentString579 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">TORRE FUERTE 03 DE MAYO.</h1>'+ '<div id="bodyContent">'+ '<p><b>TORRE FUERTE 03 DE MAYO.</b> , — 03 de  Mayo de  2013.  Dirección: Colonia  Jardínes de  Selsut  Carretera Panamericana Kilometro  13 Ilopango. Días y horas  de  reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m.  Miembros asistentes: 10 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow579 = new google.maps.InfoWindow({ content: contentString579 });   
        //markers  
        var marker579 = new google.maps.Marker({ position: point579, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "579.TORRE FUERTE 03 DE MAYO." }); 
        //information for  
        function goToLink579() { infowindow579.open(map,marker579);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker579, 'click', goToLink579); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 580  
        //positions 
        var point580 = new google.maps.LatLng(13.707661, -89.115463); var contentString580 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UNA LUZ EN EL JARDÍN.</h1>'+ '<div id="bodyContent">'+ '<p><b>UNA LUZ EN EL JARDÍN.</b> , — 09 de Septiembre de 1983. Dirección: Urbanización Jardínes de  San Bartolo,  Polígono 19 N° 8. Calle Las Flores.  Días y horas  de  reuniones: De Lunes a Domingo de  7:00  a 9:00 p.m.  Miembros asistentes: 10 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow580 = new google.maps.InfoWindow({ content: contentString580 });   
        //markers  
        var marker580 = new google.maps.Marker({ position: point580, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "580.UNA LUZ EN EL JARDÍN." }); 
        //information for  
        function goToLink580() { infowindow580.open(map,marker580);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker580, 'click', goToLink580); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 581  
        //positions 
        var point581 = new google.maps.LatLng(13.703944, -89.106753); var contentString581 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UNA  LUZ EN LA COMUNIDAD.</h1>'+ '<div id="bodyContent">'+ '<p><b>UNA  LUZ EN LA COMUNIDAD.</b> , —21  de  Noviembre de  1988.Di- rección:  Comunidad Adesco Flores  Nº  68,  Sector  1,  San  Bartolo. Días y horas  de reuniones: De Lunes a Domingo de 7:00 a 9:00 p.m. Miembros asistentes: 13 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow581 = new google.maps.InfoWindow({ content: contentString581 });   
        //markers  
        var marker581 = new google.maps.Marker({ position: point581, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "581.UNA  LUZ EN LA COMUNIDAD." }); 
        //information for  
        function goToLink581() { infowindow581.open(map,marker581);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker581, 'click', goToLink581); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 582  
        //positions 
        var point582 = new google.maps.LatLng(13.706673, -89.093748); var contentString582 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UNIDOS 18 DE ABRIL.</h1>'+ '<div id="bodyContent">'+ '<p><b>UNIDOS 18 DE ABRIL.</b> , — 18 de Abril de 1992. Dirección  Km. 14 ½, Carretera a Apulo,  Colonia  Vista Hermosa. Días y horas  de  reuniones: De Lunes a Domingo 6:30 a 8.30 p.m. Miembros asistentes: 15 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow582 = new google.maps.InfoWindow({ content: contentString582 });   
        //markers  
        var marker582 = new google.maps.Marker({ position: point582, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "582.UNIDOS 18 DE ABRIL." }); 
        //information for  
        function goToLink582() { infowindow582.open(map,marker582);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker582, 'click', goToLink582); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 583  
        //positions 
        var point583 = new google.maps.LatLng(13.706648, -89.070954); var contentString583 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UNIDOS VENCEREMOS.</h1>'+ '<div id="bodyContent">'+ '<p><b>UNIDOS VENCEREMOS.</b> , — 04 de Octubre de 1973. Dirección: Km. 15 Caserío Amatitlán,  Apulo. Días y horas  de reuniones: De Lunes a Domingo de  6:30  a 8:30  p.m.  Miembros asistentes: 19 Hombres y 6 Mujeres.</p>'+ '</div>'+ '</div>'; var infowindow583 = new google.maps.InfoWindow({ content: contentString583 });   
        //markers  
        var marker583 = new google.maps.Marker({ position: point583, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "583.UNIDOS VENCEREMOS." }); 
        //information for  
        function goToLink583() { infowindow583.open(map,marker583);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker583, 'click', goToLink583); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 584  
        //positions 
        var point584 = new google.maps.LatLng(13.705891, -89.098046); var contentString584 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">VOLVER A RENACER.</h1>'+ '<div id="bodyContent">'+ '<p><b>VOLVER A RENACER.</b> , — 18 de Octubre de 1984.  Dirección:  Carretera  Panamericana, ½ Cuadra al Oriente Desvío  de  Apulo,  Km. Nº 12. Días y horas  de  reuniones: De Lunes a Domingo de  7:00 a 9:00 p.m.  Miembros asistentes: 7 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow584 = new google.maps.InfoWindow({ content: contentString584 });   
        //markers  
        var marker584 = new google.maps.Marker({ position: point584, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "584.VOLVER A RENACER." }); 
        //information for  
        function goToLink584() { infowindow584.open(map,marker584);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker584, 'click', goToLink584); google.maps.event.addDomListener(window, 'load', initialize);

        //MARCADOR 585  
        //positions 
        var point585 = new google.maps.LatLng(13.715031, -89.197120); var contentString585 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">06 DE AGOSTO.</h1>'+ '<div id="bodyContent">'+ '<p><b>06 DE AGOSTO.</b> , — 06 de  Agosto de  2010.  Dirección:  Pasaje  Pérez Romero, Colonia  San Carlos.  Días y horas  de reuniones: De Lunes a Domingo de 6:30 a 8:30 pm. Miembros asistentes: 4 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow585 = new google.maps.InfoWindow({ content: contentString585 });   
        //markers  
        var marker585 = new google.maps.Marker({ position: point585, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "585.06 DE AGOSTO." }); 
        //information for  
        function goToLink585() { infowindow585.open(map,marker585);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker585, 'click', goToLink585); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 586  
        //positions 
        var point586 = new google.maps.LatLng(13.755579, -89.189673); var contentString586 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">10  DE MARZO (INSTITUCIONAL).</h1>'+ '<div id="bodyContent">'+ '<p><b>10  DE MARZO (INSTITUCIONAL).</b> , — 10  de  Marzo  de  2011.  Di- rección:  Centro Penal  La Esperanza, San  Luis Mariona.  Miembros asistentes: 40 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow586 = new google.maps.InfoWindow({ content: contentString586 });   
        //markers  
        var marker586 = new google.maps.Marker({ position: point586, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "586.10  DE MARZO (INSTITUCIONAL)." }); 
        //information for  
        function goToLink586() { infowindow586.open(map,marker586);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker586, 'click', goToLink586); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 587  
        //positions 
        var point587 = new google.maps.LatLng(13.733860, -89.222904); var contentString587 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">29  DE ENERO.</h1>'+ '<div id="bodyContent">'+ '<p><b>29  DE ENERO.</b> , — 29  de  Enero  de  1984.  Dirección:  Colonia  San Miguel,  Lotificación  Santa  Isabel  Pasaje  1 Casa  N° 3. Días y horas de  reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m.  Miembros asistentes: 10 Hombres y 1 Mujer.</p>'+ '</div>'+ '</div>'; var infowindow587 = new google.maps.InfoWindow({ content: contentString587 });   
        //markers  
        var marker587 = new google.maps.Marker({ position: point587, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "587.29  DE ENERO." }); 
        //information for  
        function goToLink587() { infowindow587.open(map,marker587);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker587, 'click', goToLink587); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 588  
        //positions 
        var point588 = new google.maps.LatLng(13.734549, -89.207185); var contentString588 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">29  DE JUNIO.</h1>'+ '<div id="bodyContent">'+ '<p><b>29  DE JUNIO.</b> , —  29  de  Junio  de  1980.  Dirección:  Entrada a Co- lonia  El Bosque Plan  del  Pito,  Mejicanos Casa  N° 5. Días y horas de  reuniones: De Lunes a Domingo de  6:30 a 8:30 p.m.  Miembros asistentes: 6 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow588 = new google.maps.InfoWindow({ content: contentString588 });   
        //markers  
        var marker588 = new google.maps.Marker({ position: point588, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "588.29  DE JUNIO." }); 
        //information for  
        function goToLink588() { infowindow588.open(map,marker588);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker588, 'click', goToLink588); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 589  
        //positions 
        var point589 = new google.maps.LatLng(13.728973, -89.200365); var contentString589 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">ACCIÓN.</h1>'+ '<div id="bodyContent">'+ '<p><b>ACCIÓN.</b> , — 05 de  Diciembre de  1974.  Dirección:  Colonia  Zacamil, entre Sector  Magisterial atrás  del Edificio 600.  Días y horas  de  reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m. Miembros asistentes: 35 Hombres y 2 Mujeres.</p>'+ '</div>'+ '</div>'; var infowindow589 = new google.maps.InfoWindow({ content: contentString589 });   
        //markers  
        var marker589 = new google.maps.Marker({ position: point589, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "589.ACCIÓN." }); 
        //information for  
        function goToLink589() { infowindow589.open(map,marker589);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker589, 'click', goToLink589); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 590  
        //positions 
        var point590 = new google.maps.LatLng(13.732000, -89.221425); var contentString590 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">AMOR Y PAZ.</h1>'+ '<div id="bodyContent">'+ '<p><b>AMOR Y PAZ.</b> , — 05 de  Diciembre de  1965.  Dirección:  Avenida  28 de  Febrero Casa  No  2, San Ramón  Mejicanos. Días y horas  de  reu- niones: De Lunes a Domingo de 7:00 a 9:00 p.m. Miembros asisten- tes: 17 Hombres y 6 Mujeres.</p>'+ '</div>'+ '</div>'; var infowindow590 = new google.maps.InfoWindow({ content: contentString590 });   
        //markers  
        var marker590 = new google.maps.Marker({ position: point590, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "590.AMOR Y PAZ." }); 
        //information for  
        function goToLink590() { infowindow590.open(map,marker590);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker590, 'click', goToLink590); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 591  
        //positions 
        var point591 = new google.maps.LatLng(13.774366, -89.182716); var contentString591 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">BENDICIÓN 07  DE NOVIEMBRE.</h1>'+ '<div id="bodyContent">'+ '<p><b>BENDICIÓN 07  DE NOVIEMBRE.</b> , — 07  de  Noviembre de  1982. Dirección:  Villa Mariona  1 Condominio “A” Senda 2 Casa  No  206. Días y horas  de  reuniones: De Lunes  a Domingo 7:00  a 9:00  p.m. Miembros asistentes: 8 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow591 = new google.maps.InfoWindow({ content: contentString591 });   
        //markers  
        var marker591 = new google.maps.Marker({ position: point591, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "591.BENDICIÓN 07  DE NOVIEMBRE." }); 
        //information for  
        function goToLink591() { infowindow591.open(map,marker591);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker591, 'click', goToLink591); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 592  
        //positions 
        var point592 = new google.maps.LatLng(13.780216, -89.116806); var contentString592 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">BENDITA SOBRIEDAD.</h1>'+ '<div id="bodyContent">'+ '<p><b>BENDITA SOBRIEDAD.</b> , — 11 de  Octubre de  1969.  Dirección:  Ave- nida  14 de  Diciembre N° 4. Días y horas  de  reuniones: De Lunes a Domingo de  6:00  a 8:00  p.m.  Miembros asistentes: 26 Hombres y 5 Mujeres.</p>'+ '</div>'+ '</div>'; var infowindow592 = new google.maps.InfoWindow({ content: contentString592 });   
        //markers  
        var marker592 = new google.maps.Marker({ position: point592, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "592.BENDITA SOBRIEDAD." }); 
        //information for  
        function goToLink592() { infowindow592.open(map,marker592);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker592, 'click', goToLink592); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 593  
        //positions 
        var point593 = new google.maps.LatLng(13.742371, -89.213666); var contentString593 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">CAMINO DE LA VERDAD.</h1>'+ '<div id="bodyContent">'+ '<p><b>CAMINO DE LA VERDAD.</b> , —21 de  Enero  de  1973.  Dirección:  San Roque  Colonia  Escalante Calle  Principal  Nº  106.  Días  y horas  de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m. Miembros asis- tentes: 8 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow593 = new google.maps.InfoWindow({ content: contentString593 });   
        //markers  
        var marker593 = new google.maps.Marker({ position: point593, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "593.CAMINO DE LA VERDAD." }); 
        //information for  
        function goToLink593() { infowindow593.open(map,marker593);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker593, 'click', goToLink593); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 594  
        //positions 
        var point594 = new google.maps.LatLng(13.727189, -89.201933); var contentString594 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">DECISIÓN 24 DE AGOSTO.</h1>'+ '<div id="bodyContent">'+ '<p><b>DECISIÓN 24 DE AGOSTO.</b> , — Dirección.  Centro Comercial Metro- polis, Calle Zacamil, local B-4, 2a  Planta.  Días y horas  de  reuniones: De Lunes a Domingo de  6:30 a 8:30 p.m.  Miembros asistentes: 20 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow594 = new google.maps.InfoWindow({ content: contentString594 });   
        //markers  
        var marker594 = new google.maps.Marker({ position: point594, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "594.DECISIÓN 24 DE AGOSTO." }); 
        //information for  
        function goToLink594() { infowindow594.open(map,marker594);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker594, 'click', goToLink594); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 595  
        //positions 
        var point595 = new google.maps.LatLng(13.789883, -89.187777); var contentString595 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">DIVINA LUZ.</h1>'+ '<div id="bodyContent">'+ '<p><b>DIVINA LUZ.</b> , — 07 de Junio  de 1995.  Dirección:  Ciudad Futura  Ca- lle Principal Nº 7 Polígono 10 Pasaje  11. Días y horas  de  reuniones: De Lunes a Sábado de  7:00 a 9:00 p.m.  y Domingo de  6.00  a 8.00 p.m.  Miembros asistentes: 8 Hombres y 2 Mujeres.</p>'+ '</div>'+ '</div>'; var infowindow595 = new google.maps.InfoWindow({ content: contentString595 });   
        //markers  
        var marker595 = new google.maps.Marker({ position: point595, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "595.DIVINA LUZ." }); 
        //information for  
        function goToLink595() { infowindow595.open(map,marker595);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker595, 'click', goToLink595); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 596  
        //positions 
        var point596 = new google.maps.LatLng(13.724814, -89.193176); var contentString596 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">EL GRAN PASO.</h1>'+ '<div id="bodyContent">'+ '<p><b>EL GRAN PASO.</b> , — 06 de  Agosto de  2004.  Dirección:  5ª Calle Po- niente Nº 2, frente  Ex YKK. Días y horas  de  reuniones: De Lunes a Sábado de  7:00 a 9:00 p.m.  y Domingo de  5:00 a 7:00 p.m.  Miem- bros  asistentes: 20 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow596 = new google.maps.InfoWindow({ content: contentString596 });   
        //markers  
        var marker596 = new google.maps.Marker({ position: point596, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "596.EL GRAN PASO." }); 
        //information for  
        function goToLink596() { infowindow596.open(map,marker596);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker596, 'click', goToLink596); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 597  
        //positions 
        var point597 = new google.maps.LatLng(13.784364, -89.230473); var contentString597 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">EXPERIENCIA Y FORTALEZA.</h1>'+ '<div id="bodyContent">'+ '<p><b>EXPERIENCIA Y FORTALEZA.</b> , — 14 de  Mayo de  1967.  Dirección: Colonia Delicias del Norte, entre Calle a Mariona y Calle El Progreso Casa Nº 26 Bis. Días y horas  de reuniones: De Lunes a Domingo de 7:00 a 8:30 p.m.  Miembros asistentes: 4 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow597 = new google.maps.InfoWindow({ content: contentString597 });   
        //markers  
        var marker597 = new google.maps.Marker({ position: point597, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "597.EXPERIENCIA Y FORTALEZA." }); 
        //information for  
        function goToLink597() { infowindow597.open(map,marker597);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker597, 'click', goToLink597); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 598  
        //positions 
        var point598 = new google.maps.LatLng(13.757332, -89.191684); var contentString598 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">FE Y ESPERANZA (INSTITUCIONAL).</h1>'+ '<div id="bodyContent">'+ '<p><b>FE Y ESPERANZA (INSTITUCIONAL).</b> , — Dirección:  Centro Penal Esperanza, San Luis Mariona.  Días y horas  de reuniones:, Viernes de 1:00 a 3:00 p.m.  Miembros asistentes: 45 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow598 = new google.maps.InfoWindow({ content: contentString598 });   
        //markers  
        var marker598 = new google.maps.Marker({ position: point598, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "598.FE Y ESPERANZA (INSTITUCIONAL)." }); 
        //information for  
        function goToLink598() { infowindow598.open(map,marker598);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker598, 'click', goToLink598); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 599  
        //positions 
        var point599 = new google.maps.LatLng(13.726016, -89.189153); var contentString599 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">HUMILDAD Y ACCIÓN.</h1>'+ '<div id="bodyContent">'+ '<p><b>HUMILDAD Y ACCIÓN.</b> , — 02 de Noviembre de 1975. Dirección: 9ª Calle Poniente y 1ª Avenida  Norte  Nº 1. Días y horas  de  reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m.  Miembros asistentes: 15 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow599 = new google.maps.InfoWindow({ content: contentString599 });   
        //markers  
        var marker599 = new google.maps.Marker({ position: point599, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "599.HUMILDAD Y ACCIÓN." }); 
        //information for  
        function goToLink599() { infowindow599.open(map,marker599);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker599, 'click', goToLink599); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 600  
        //positions 
        var point600 = new google.maps.LatLng(13.732873, -89.204921); var contentString600 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">LA NUEVA LUZ.</h1>'+ '<div id="bodyContent">'+ '<p><b>LA NUEVA LUZ.</b> , — 03 de Junio  de 2007.  Dirección:  Calle al Volcán Quinta  Gonzales Días y horas de reuniones: De Lunes a Domingo de 7:00 a 9:00 p.m.  Miembros asistentes: 6 Hombres y 1 Mujer.</p>'+ '</div>'+ '</div>'; var infowindow600 = new google.maps.InfoWindow({ content: contentString600 });   
        //markers  
        var marker600 = new google.maps.Marker({ position: point600, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "600.LA NUEVA LUZ." }); 
        //information for  
        function goToLink600() { infowindow600.open(map,marker600);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker600, 'click', goToLink600); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 601  
        //positions 
        var point601 = new google.maps.LatLng(13.751877, -89.191165); var contentString601 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">LUZ DEL SIGLO XX.</h1>'+ '<div id="bodyContent">'+ '<p><b>LUZ DEL SIGLO XX.</b> , — 14 de  Diciembre de  1975.  Dirección:  Ave- nida Rengifo  Nº 20, Colonia  El Retiro, Calle a Mariona.  Días y horas de  reuniones: De Lunes a Domingo de  6.00  a 8.00  p.m.  Miembros asistentes: 6 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow601 = new google.maps.InfoWindow({ content: contentString601 });   
        //markers  
        var marker601 = new google.maps.Marker({ position: point601, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "601.LUZ DEL SIGLO XX." }); 
        //information for  
        function goToLink601() { infowindow601.open(map,marker601);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker601, 'click', goToLink601); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 602  
        //positions 
        var point602 = new google.maps.LatLng(13.734835, -89.182891); var contentString602 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">LUZ Y VERDAD.</h1>'+ '<div id="bodyContent">'+ '<p><b>LUZ Y VERDAD.</b> , — 10 de Noviembre de 1972.  Dirección:  Calle Los Ángeles N° 9. Días y horas  de  reuniones: De Lunes a Domingo de 7:00 a 9:00 p.m.  Miembros asistentes: 13 Hombres y 2 Mujeres.</p>'+ '</div>'+ '</div>'; var infowindow602 = new google.maps.InfoWindow({ content: contentString602 });   
        //markers  
        var marker602 = new google.maps.Marker({ position: point602, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "602.LUZ Y VERDAD." }); 
        //information for  
        function goToLink602() { infowindow602.open(map,marker602);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker602, 'click', goToLink602); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 603  
        //positions 
        var point603 = new google.maps.LatLng(13.738477, -89.184684); var contentString603 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">MONTREAL.</h1>'+ '<div id="bodyContent">'+ '<p><b>MONTREAL.</b> , — 01 de  Junio  de  1970.  Dirección:  Colonia  Las Deli- cias del Norte, Avenida  Montreal Nº 35. Días y horas  de  reuniones: De  Lunes  Domingo de  6:00  a 8:00  p.m.  Miembros asistentes: 20 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow603 = new google.maps.InfoWindow({ content: contentString603 });   
        //markers  
        var marker603 = new google.maps.Marker({ position: point603, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "603.MONTREAL." }); 
        //information for 
        function goToLink603() { infowindow603.open(map,marker603);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker603, 'click', goToLink603); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 604  
        //positions 
        var point604 = new google.maps.LatLng(13.744691, -89.192249); var contentString604 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NACER 18  DE FEBRERO.</h1>'+ '<div id="bodyContent">'+ '<p><b>NACER 18  DE FEBRERO.</b> , — 18  de  Febrero de  2006.  Dirección: Calle  a Mariona,  Colonia  Buena  Vista, Casa  Nº  6, Quinta  Mónica. Días y horas  de reuniones: De Lunes a Domingo de 7:00 a 8:30 p.m. Miembros asistentes: 8 Hombres y 1 mujer</p>'+ '</div>'+ '</div>'; var infowindow604 = new google.maps.InfoWindow({ content: contentString604 });   
        //markers  
        var marker604 = new google.maps.Marker({ position: point604, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "604.NACER 18  DE FEBRERO." }); 
        //information for  
        function goToLink604() { infowindow604.open(map,marker604);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker604, 'click', goToLink604); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 605  
        //positions 
        var point605 = new google.maps.LatLng(13.737679, -89.185776); var contentString605 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NUEVO AMANECER 08 DE JUNIO.</h1>'+ '<div id="bodyContent">'+ '<p><b>NUEVO AMANECER 08 DE JUNIO.</b> , — 08 de Junio de 1989. Direc- ción: Lotificación Santa  María Nº 2, Polígono 21 N° 5. Días y horas de  reuniones: De Lunes a Domingo de  7:00 a 9:00 p.m.  Miembros asistentes: 4 Hombres y 1 Mujer.</p>'+ '</div>'+ '</div>'; var infowindow605 = new google.maps.InfoWindow({ content: contentString605 });   
        //markers  
        var marker605 = new google.maps.Marker({ position: point605, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "605.NUEVO AMANECER 08 DE JUNIO." }); 
        //information for  
        function goToLink605() { infowindow605.open(map,marker605);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker605, 'click', goToLink605); google.maps.event.addDomListener(window, 'load', initialize);

        //MARCADOR 606  
        //positions 
        var point606 = new google.maps.LatLng(13.729602, -89.203082); var contentString606 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NUEVOS HORIZONTES.</h1>'+ '<div id="bodyContent">'+ '<p><b>NUEVOS HORIZONTES.</b> , — 15 de  Septiembre de  1987.  Dirección: 29 Avenida  Norte, Mejicanos. Días y horas  de  reuniones: De Lunes a Domingo de 7:00 a 9:00 p.m.  Miembros asistentes: 22 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow606 = new google.maps.InfoWindow({ content: contentString606 });  
         //markers 
         var marker606 = new google.maps.Marker({ position: point606, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "606.NUEVOS HORIZONTES." });
         //information for 
         function goToLink606() { infowindow606.open(map,marker606);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker606, 'click', goToLink606); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 607  
        //positions 
        var point607 = new google.maps.LatLng(13.732700, -89.219994); var contentString607 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">RECUPERACIÓN OBRA DE DIOS.</h1>'+ '<div id="bodyContent">'+ '<p><b>RECUPERACIÓN OBRA DE DIOS.</b> , — 28 de  Octubre de  1991.  Di- rección:  Colonia  El Paraíso  Avenida  Argentina Casa  N° 2 San  Ra- món, Mejicanos. Días y horas de reuniones: De Lunes a Domingo de 7:00 a 9:00 p.m.  Miembros asistentes: 20 Hombres y 1 Mujer.</p>'+ '</div>'+ '</div>'; var infowindow607 = new google.maps.InfoWindow({ content: contentString607 });  
         //markers  
        var marker607 = new google.maps.Marker({ position: point607, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "607.RECUPERACIÓN OBRA DE DIOS." });
        //information for 
        function goToLink607() { infowindow607.open(map,marker607);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker607, 'click', goToLink607); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 608  
        //positions 
        var point608 = new google.maps.LatLng(13.725891, -89.192719); var contentString608 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">RENACER 02 DE MAYO.</h1>'+ '<div id="bodyContent">'+ '<p><b>RENACER 02 DE MAYO.</b> , — 02 de Mayo de 2003.  Dirección:  Colo- nia Regalado y Pasaje  Regalado, Casa Nº 8. Días y horas  de reunio- nes:  De Lunes a Sábado de  6:00 a 8:00 p.m.  y Domingo de  5:00 a 7:00 p.m.  Miembros asistentes: 7 Hombres y 1 Mujer.</p>'+ '</div>'+ '</div>'; var infowindow608 = new google.maps.InfoWindow({ content: contentString608 });   
        //markers  
        var marker608 = new google.maps.Marker({ position: point608, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "608.RENACER 02 DE MAYO." });
        //information for 
        function goToLink608() { infowindow608.open(map,marker608);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker608, 'click', goToLink608); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 609  
        //positions 
        var point609 = new google.maps.LatLng(13.738773, -89.201052); var contentString609 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">SALVANDO UNA  VIDA.</h1>'+ '<div id="bodyContent">'+ '<p><b>SALVANDO UNA  VIDA.</b> , —23 de  Septiembre de  1982.  Dirección: Colonia  Las Colinas  Block “A” 1 Casa  Nº 1. Días y horas  de  reunio- nes: De Lunes a Domingo de 6:00 a 8:00 p.m. Miembros asistentes: 15 Hombres y 6 Mujeres.</p>'+ '</div>'+ '</div>'; var infowindow609 = new google.maps.InfoWindow({ content: contentString609 });   
        //markers  
        var marker609 = new google.maps.Marker({ position: point609, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "609.SALVANDO UNA  VIDA." });
        //information for 
        function goToLink609() { infowindow609.open(map,marker609);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker609, 'click', goToLink609); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 610  
        //positions 
        var point610 = new google.maps.LatLng(13.773786, -89.174373); var contentString610 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">SAN LUIS.</h1>'+ '<div id="bodyContent">'+ '<p><b>SAN LUIS.</b> , — 16 de Febrero de 1965.  Dirección:  Colonia  La Paz Ca- lle Principal Km. 11. Días y horas de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.  Miembros asistentes: 5 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow610 = new google.maps.InfoWindow({ content: contentString610 });   
        //markers  
        var marker610 = new google.maps.Marker({ position: point610, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "610.SAN LUIS." });
        //information for 
        function goToLink610() { infowindow610.open(map,marker610);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker610, 'click', goToLink610); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 611  
        //positions 
        var point611 = new google.maps.LatLng(13.767493, -89.180241); var contentString611 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">SOBRIEDAD Y RECUPERACIÓN.</h1>'+ '<div id="bodyContent">'+ '<p><b>SOBRIEDAD Y RECUPERACIÓN.</b> , — 16 de  Enero  de  1963.  Direc- ción: San Luis Mariona,  Calle a Colonia  Monte Carmelo. Contiguo a Casa Comunal. Días y horas  de  reuniones: De Lunes a Domingo de 6:30 a 8:30 p.m.  Miembros asistentes: 16 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow611 = new google.maps.InfoWindow({ content: contentString611 });  
         //markers  
        var marker611 = new google.maps.Marker({ position: point611, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "611.SOBRIEDAD Y RECUPERACIÓN." });
        //information for 
        function goToLink611() { infowindow611.open(map,marker611);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker611, 'click', goToLink611); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 612  
        //positions 
        var point612 = new google.maps.LatLng(13.780803, -89.176814); var contentString612 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UNA LUZ DE ESPERANZA.</h1>'+ '<div id="bodyContent">'+ '<p><b>UNA LUZ DE ESPERANZA.</b> , — 25 de Julio de 1993. Dirección: Calle Principal  Colonia  Iberia  Nº 9. Días y horas  de  reuniones: De Lunes a Domingo de 7:00 a 8:30 p.m.  Miembros asistentes: 8 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow612 = new google.maps.InfoWindow({ content: contentString612 });   
        //markers  
        var marker612 = new google.maps.Marker({ position: point612, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "612.UNA LUZ DE ESPERANZA." });
        //information for 
        function goToLink612() { infowindow612.open(map,marker612);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker612, 'click', goToLink612); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 613  
        //positions 
        var point613 = new google.maps.LatLng(13.724298, -89.191636); var contentString613 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">VIDA NUEVA.</h1>'+ '<div id="bodyContent">'+ '<p><b>VIDA NUEVA.</b> , —  15  de  Septiembre de  1964.  Dirección:  5a   Calle Poniente Nº  29  Barrio El Calvario  esquina opuesta a ex Telecom. Días y horas  de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m. Miembros asistentes: 20 Hombres y 1 Mujer.</p>'+ '</div>'+ '</div>'; var infowindow613 = new google.maps.InfoWindow({ content: contentString613 });   
        //markers  
        var marker613 = new google.maps.Marker({ position: point613, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "613.VIDA NUEVA." });
        //information for 
        function goToLink613() { infowindow613.open(map,marker613);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker613, 'click', goToLink613); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 614  
        //positions 
        var point614 = new google.maps.LatLng(13.732160, -89.192142); var contentString614 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">VIDA Y SOBRIEDAD.</h1>'+ '<div id="bodyContent">'+ '<p><b>VIDA Y SOBRIEDAD.</b> , — 01  de  Mayo  de  1969.  Dirección:  Calle  a Mariona  N° 423,  Mejicanos. Días y horas  de  reuniones: De Lunes a Domingo de  6:00  a 8:00  p.m.  Miembros asistentes: 30 Hombres y 1 Mujer.</p>'+ '</div>'+ '</div>'; var infowindow614 = new google.maps.InfoWindow({ content: contentString614 });   
        //markers  
        var marker614 = new google.maps.Marker({ position: point614, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "614.VIDA Y SOBRIEDAD." }); 
        //information for 
        function goToLink614() { infowindow614.open(map,marker614);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker614, 'click', goToLink614); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 615  
        //positions 
        var point615 = new google.maps.LatLng(13.725611, -89.204048); var contentString615 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">VOLUNTAD Y ACCIÓN.</h1>'+ '<div id="bodyContent">'+ '<p><b>VOLUNTAD Y ACCIÓN.</b> , — 01 de  Febrero de  1986.  Dirección:  Co- lonia Zacamil Edificio 88, Apartamento 18. Días y horas  de  reunio- nes: De Lunes a Domingo de 7:00 a 9:00 p.m. Miembros asistentes: 5 Hombres y 2 Mujeres.</p>'+ '</div>'+ '</div>'; var infowindow615 = new google.maps.InfoWindow({ content: contentString615 });   
        //markers  
        var marker615 = new google.maps.Marker({ position: point615, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "615.VOLUNTAD Y ACCIÓN." }); 
        //information for  
        function goToLink615() { infowindow615.open(map,marker615);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker615, 'click', goToLink615); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 616  
        //positions 
        var point616 = new google.maps.LatLng(13.733312, -89.212662); var contentString616 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">BENDITA SOBRIEDAD.</h1>'+ '<div id="bodyContent">'+ '<p><b>BENDITA SOBRIEDAD.</b> , — 11 de  Octubre de  1961.  Dirección:  Ave- nida  14 de  Diciembre. Días y horas  de  reuniones: De Lunes a Do- mingo  de  6:00  a 8:00  p.m.  Miembros asistentes: 28 Hombres y 2 Mujeres.</p>'+ '</div>'+ '</div>'; var infowindow616 = new google.maps.InfoWindow({ content: contentString616 });   
        //markers  
        var marker616 = new google.maps.Marker({ position: point616, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "616.BENDITA SOBRIEDAD." }); 
        //information for  
        function goToLink616() { infowindow616.open(map,marker616);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker616, 'click', goToLink616); google.maps.event.addDomListener(window, 'load', initialize);

        //MARCADOR 617 
        //positions
        var point617 = new google.maps.LatLng(13.817262, -89.249995); var contentString617 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">16  DE MAYO.</h1>'+ '<div id="bodyContent">'+ '<p><b>16  DE MAYO.</b> , —16  de  Mayo  de  1969.  Dirección:  Hacienda Tetul- tepeque, Calle a Tacachico. Días y horas  de  reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.  Miembros asistentes: 15 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow617 = new google.maps.InfoWindow({ content: contentString617 });  
        //markers 
        var marker617 = new google.maps.Marker({ position: point617, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "617.16  DE MAYO." }); 
        //information for  
        function goToLink617() { infowindow617.open(map,marker617);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker617, 'click', goToLink617); google.maps.event.addDomListener(window, 'load', initialize);

        //MARCADOR 618 
        //positions
        var point618 = new google.maps.LatLng(13.802841, -89.216744); var contentString618 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">FLOR DE LOTO.</h1>'+ '<div id="bodyContent">'+ '<p><b>FLOR DE LOTO.</b> , — 04 de  Julio de  1977.  Dirección:  Colonia  Cuesta Blanca, Carretera a Quezaltepeque, Km. 18 ½, Parada El Cedral  Pa- saje Nº 4, Casa 81. Días y horas  de reuniones: De Lunes a Domingo de 5:00 a 7:00 p.m.  Miembros asistentes: 15 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow618 = new google.maps.InfoWindow({ content: contentString618 });  
        //markers 
        var marker618 = new google.maps.Marker({ position: point618, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "618.FLOR DE LOTO." }); 
        //information for  
        function goToLink618() { infowindow618.open(map,marker618);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker618, 'click', goToLink618); google.maps.event.addDomListener(window, 'load', initialize);

        //MARCADOR 619 
        //positions
        var point619 = new google.maps.LatLng(13.806379, -89.252047); var contentString619 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NUEVA  LUZ DE  VIDA EN  EL SALITRE.</h1>'+ '<div id="bodyContent">'+ '<p><b>NUEVA  LUZ DE  VIDA EN  EL SALITRE.</b> , —05 de  Diciembre de 2009.  Dirección  Cantón Aldea de Mercedes, Caserío El Salitre, Días y Horas  de  reuniones: De  Lunes  a Domingo de  6:00  a 8:00  p.m. Miembros asistentes: 10 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow619 = new google.maps.InfoWindow({ content: contentString619 });  
        //markers 
        var marker619 = new google.maps.Marker({ position: point619, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "619.NUEVA  LUZ DE  VIDA EN  EL SALITRE." }); 
        //information for  
        function goToLink619() { infowindow619.open(map,marker619);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker619, 'click', goToLink619); google.maps.event.addDomListener(window, 'load', initialize);

        //MARCADOR 620 
        //positions
        var point620 = new google.maps.LatLng(13.819880, -89.230331); var contentString620 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">RESURRECCIÓN.</h1>'+ '<div id="bodyContent">'+ '<p><b>RESURRECCIÓN.</b> , — 11  de  Octubre de  1973.  Dirección:  Hacien- da  Mapilapa Mesón  Nº 14, pieza  Nº 8, Días y horas  de  reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m.  Miembros asistentes: 16 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow620 = new google.maps.InfoWindow({ content: contentString620 });   
        //markers 
        var marker620 = new google.maps.Marker({ position: point620, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "620.RESURRECCIÓN." }); 
        //information for  
        function goToLink620() { infowindow620.open(map,marker620);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker620, 'click', goToLink620); google.maps.event.addDomListener(window, 'load', initialize);

        //MARCADOR 621  

        //positions
        var point621 = new google.maps.LatLng(13.812635, -89.230306); var contentString621 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">SOL NACIENTE.</h1>'+ '<div id="bodyContent">'+ '<p><b>SOL NACIENTE.</b> , — 27 de  Octubre de  1963.  Dirección:  5a  Calle Po- niente Casa N°4 Nejapa S.S. Días y horas  de reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m.  Miembros asistentes: 16 Hombres 1 Mujer.</p>'+ '</div>'+ '</div>'; var infowindow621 = new google.maps.InfoWindow({ content: contentString621 });  
        //markers 
        var marker621 = new google.maps.Marker({ position: point621, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "621.SOL NACIENTE." }); 
        //information for  
        function goToLink621() { infowindow621.open(map,marker621);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker621, 'click', goToLink621); google.maps.event.addDomListener(window, 'load', initialize);

        //MARCADOR 622 
        //positions
        var point622 = new google.maps.LatLng(13.807774, -89.226689); var contentString622 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UNA LUZ EN LA ALDEA.</h1>'+ '<div id="bodyContent">'+ '<p><b>UNA LUZ EN LA ALDEA.</b> , — 18 de  Mayo de  1986.  Dirección:  Can- tón Aldea de Mercedes. Días y horas  de reuniones: De Lunes a Do- mingo  de 6:00 a 8:00 p.m.  Miembros asistentes: 12 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow622 = new google.maps.InfoWindow({ content: contentString622 });  
        //markers 
        var marker622 = new google.maps.Marker({ position: point622, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "622.UNA LUZ EN LA ALDEA." }); 
        //information for  
        function goToLink622() { infowindow622.open(map,marker622);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker622, 'click', goToLink622); google.maps.event.addDomListener(window, 'load', initialize);

        //MARCADOR 623  
        //positions 
        var point623 = new google.maps.LatLng(13.609545, -89.178747); var contentString623 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">03  DE NOVIEMBRE.</h1>'+ '<div id="bodyContent">'+ '<p><b>03  DE NOVIEMBRE.</b> , — 03 de  Noviembre de  1974.  Dirección:  Pa- saje  Los Laureles  Calle  Principal,  Cantón Los Palones Nº 1. Días y horas de reuniones: De Lunes a Domingo de 7:00 a 9:00 p.m. Miem- bros  asistentes: 13 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow623 = new google.maps.InfoWindow({ content: contentString623 });   
        //markers  
        var marker623 = new google.maps.Marker({ position: point623, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "623.03  DE NOVIEMBRE." }); 
        //information for  
        function goToLink623() { infowindow623.open(map,marker623);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker623, 'click', goToLink623); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 624  
        //positions 
        var point624 = new google.maps.LatLng(13.611297, -89.177900); var contentString624 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">10 DE MARZO.</h1>'+ '<div id="bodyContent">'+ '<p><b>10 DE MARZO.</b> , — 10 de Marzo de 1996.  Dirección:  Cantón El Divi- sadero, Calle Principal, Contiguo a Iglesia Católica. Días y horas  de reuniones: De Lunes a Sábado de  6:00  a 8:00  p.m.  y Domingo de 5:00 a 7:00 p.m.  Miembros asistentes: 15 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow624 = new google.maps.InfoWindow({ content: contentString624 });   
        //markers  
        var marker624 = new google.maps.Marker({ position: point624, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "624.10 DE MARZO." }); 
        //information for  
        function goToLink624() { infowindow624.open(map,marker624);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker624, 'click', goToLink624); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 625  
        //positions 
        var point625 = new google.maps.LatLng(13.608700, -89.178329); var contentString625 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">16  DE SEPTIEMBRE.</h1>'+ '<div id="bodyContent">'+ '<p><b>16  DE SEPTIEMBRE.</b> , — 16 de  Septiembre de  1973.  Dirección:  Ba- rrio El Centro Calle  Principal  ½ Cuadra al Oriente de  La Alcaldía Municipal. Días y horas  de reuniones: De Lunes a Domingo de 7:00 a 9:00 p.m.  Miembros asistentes: 14 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow625 = new google.maps.InfoWindow({ content: contentString625 });   
        //markers  
        var marker625 = new google.maps.Marker({ position: point625, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "625.16  DE SEPTIEMBRE." }); 
        //information for  
        function goToLink625() { infowindow625.open(map,marker625);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker625, 'click', goToLink625); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 626  
        //positions 
        var point626 = new google.maps.LatLng(13.616396, -89.179563); var contentString626 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">COROLA DE ESPERANZA.</h1>'+ '<div id="bodyContent">'+ '<p><b>COROLA DE ESPERANZA.</b> , — 26 de  Junio  de  1966.  Dirección:  Ba- rrio El Calvario  Calle  La Ronda  final 2ª  Avenida  Sur. Días  y horas de  reuniones: De Lunes a Domingo de  6:30 a 8:30 p.m.  Miembros asistentes: 25 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow626 = new google.maps.InfoWindow({ content: contentString626 });   
        //markers  
        var marker626 = new google.maps.Marker({ position: point626, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "626.COROLA DE ESPERANZA." }); 
        //information for  
        function goToLink626() { infowindow626.open(map,marker626);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker626, 'click', goToLink626); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 627  
        //positions 
        var point627 = new google.maps.LatLng(13.616496, -89.176422); var contentString627 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">EL CONSUELO. </h1>'+ '<div id="bodyContent">'+ '<p><b>EL CONSUELO. </b> , 22 de  agosto de  1977.  Dirección:  Cantón Panchi- malquito Calle Principal, 1 Cuadra antes de La Escuela.  Días y horas de  reuniones: De Lunes a Domingo de  7:00 a 8:30 p.m.  Miembros asistentes: 16 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow627 = new google.maps.InfoWindow({ content: contentString627 });   
        //markers  
        var marker627 = new google.maps.Marker({ position: point627, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "627.EL CONSUELO. " }); 
        //information for  
        function goToLink627() { infowindow627.open(map,marker627);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker627, 'click', goToLink627); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 628  
        //positions 
        var point628 = new google.maps.LatLng(13.619147, -89.176863); var contentString628 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">FUENTE DE SOBRIEDAD.</h1>'+ '<div id="bodyContent">'+ '<p><b>FUENTE DE SOBRIEDAD.</b> , — 03 de  Diciembre de  1984.  Dirección: Carretera a Panchimalco, Km. 13  Calle  Principal  Caserío Las Joyi- tas frente  a Quinta  La Joya,  Días y horas  de  reuniones: De Lunes a Viernes de 7:00 a 9:00 p.m. Sábado y Domingo de 5:00 a 7:00 p.m. Miembros asistentes: 9 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow628 = new google.maps.InfoWindow({ content: contentString628 });   
        //markers  
        var marker628 = new google.maps.Marker({ position: point628, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "628.FUENTE DE SOBRIEDAD." }); 
        //information for  
        function goToLink628() { infowindow628.open(map,marker628);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker628, 'click', goToLink628); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 629  
        //positions 
        var point629 = new google.maps.LatLng(13.609232, -89.180807); var contentString629 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NUEVA VIDA 13  DE MARZO.</h1>'+ '<div id="bodyContent">'+ '<p><b>NUEVA VIDA 13  DE MARZO.</b> , —13 de  Marzo de  2005.  Dirección Caserío Los Guzmanes. Contiguo a Quintas Doradas. Días y horas de  reuniones:: De Lunes a Domingo de  7:00 a 9:00 p.m.  Miembros asistentes: 12 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow629 = new google.maps.InfoWindow({ content: contentString629 });   
        //markers  
        var marker629 = new google.maps.Marker({ position: point629, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "629.NUEVA VIDA 13  DE MARZO." }); 
        //information for  
        function goToLink629() { infowindow629.open(map,marker629);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker629, 'click', goToLink629); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 630  
        //positions 
        var point630 = new google.maps.LatLng(13.608440, -89.176902); var contentString630 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">PUERTA DE RECUPERACIÓN.</h1>'+ '<div id="bodyContent">'+ '<p><b>PUERTA DE RECUPERACIÓN.</b> , — 20 de  Mayo de  1975.  Dirección: Cantón El Cedro, Calle Principal. Días y horas  de  reuniones: De Lu- nes a Sábado de 6:00 a 7:30 p.m. Miembros asistentes: 9 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow630 = new google.maps.InfoWindow({ content: contentString630 });   
        //markers  
        var marker630 = new google.maps.Marker({ position: point630, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "630.PUERTA DE RECUPERACIÓN." }); 
        //information for  
        function goToLink630() { infowindow630.open(map,marker630);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker630, 'click', goToLink630); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 631  
        //positions 
        var point631 = new google.maps.LatLng(13.610901, -89.179949); var contentString631 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">RENACER 29  DE AGOSTO.</h1>'+ '<div id="bodyContent">'+ '<p><b>RENACER 29  DE AGOSTO.</b> , — 29 de  Agosto de  1999.  Dirección: Colonia  Monte Lis, Pasaje  Nº 1 Carretera a Panchimalco, Km. 111½. Días y horas  de  reuniones: De Lunes a Domingo de  7:00 a 9:00 p. m. Miembros asistentes: 5 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow631 = new google.maps.InfoWindow({ content: contentString631 });   
        //markers  
        var marker631 = new google.maps.Marker({ position: point631, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "631.RENACER 29  DE AGOSTO." }); 
        //information for  
        function goToLink631() { infowindow631.open(map,marker631);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker631, 'click', goToLink631); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 632  
        //positions 
        var point632 = new google.maps.LatLng(13.615113, -89.179048); var contentString632 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">SOBRIEDAD 1° DE DICIEMBRE.</h1>'+ '<div id="bodyContent">'+ '<p><b>SOBRIEDAD 1° DE DICIEMBRE.</b> , — 01 de  Diciembre de  1974.  Di- rección:  Cantón El Guayabo, Calle Principal frente  a La Terminal del punto de  Microbuses Ruta ”12”.  Días y horas  de  reuniones: De Lu- nes  a Domingo de  7:00  a 9:00  p.m.  Miembros asistentes: 9 Hom- bres.</p>'+ '</div>'+ '</div>'; var infowindow632 = new google.maps.InfoWindow({ content: contentString632 });   
        //markers  
        var marker632 = new google.maps.Marker({ position: point632, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "632.SOBRIEDAD 1° DE DICIEMBRE." }); 
        //information for  
        function goToLink632() { infowindow632.open(map,marker632);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker632, 'click', goToLink632); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 633  
        //positions 
        var point633 = new google.maps.LatLng(13.610400, -89.176902); var contentString633 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">SOBRIEDAD 25 DE ABRIL.</h1>'+ '<div id="bodyContent">'+ '<p><b>SOBRIEDAD 25 DE ABRIL.</b> , — 25 de  abril de  1976.  Dirección:  Can- tón San Isidro. Barrio El Centro, Días y horas de reuniones: De Lunes a Domingo de 6:30 a 8:30 p.m.  Miembros asistentes: 15 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow633 = new google.maps.InfoWindow({ content: contentString633 });  
         //markers  
        var marker633 = new google.maps.Marker({ position: point633, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "633.SOBRIEDAD 25 DE ABRIL." }); 
        //information for  
        function goToLink633() { infowindow633.open(map,marker633);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker633, 'click', goToLink633); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 634  
        //positions 
        var point634 = new google.maps.LatLng(13.614112, -89.175786); var contentString634 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">SOBRIEDAD MIL CUMBRES.</h1>'+ '<div id="bodyContent">'+ '<p><b>SOBRIEDAD MIL CUMBRES.</b> , — 25  de  Junio  de  1978.  Dirección: Cantón Mil Cumbres, Calle Principal al Cantón El Cedro, Días y ho- ras de  reuniones: De Lunes a Domingo de  6:00 a 8:00 p. m. Miem- bros  asistentes: 4 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow634 = new google.maps.InfoWindow({ content: contentString634 });   
        //markers  
        var marker634 = new google.maps.Marker({ position: point634, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "634.SOBRIEDAD MIL CUMBRES." }); 
        //information for  
        function goToLink634() { infowindow634.open(map,marker634);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker634, 'click', goToLink634); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 635  
        //positions 
        var point635 = new google.maps.LatLng(13.605478, -89.180292); var contentString635 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UNA VIRTUD EN LOS SITIOS.</h1>'+ '<div id="bodyContent">'+ '<p><b>UNA VIRTUD EN LOS SITIOS.</b> , — 04 de  Junio  de  1983.  Dirección: Panchimalquito, Calle  al Conacaste, Panchimalco. Días y horas  de reuniones: De Lunes a Domingo 7:00 a. 9:00 pm. Miembros asisten- tes: 9 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow635 = new google.maps.InfoWindow({ content: contentString635 });   
        //markers  
        var marker635 = new google.maps.Marker({ position: point635, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "635.UNA VIRTUD EN LOS SITIOS." }); 
        //information for  
        function goToLink635() { infowindow635.open(map,marker635);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker635, 'click', goToLink635); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 636  
        //positions 
        var point636 = new google.maps.LatLng(13.608481, -89.180722); var contentString636 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UNIDAD 26  DE FEBRERO.</h1>'+ '<div id="bodyContent">'+ '<p><b>UNIDAD 26  DE FEBRERO.</b> , — 26 de  Febrero de  1996.  Dirección: Barrio San José, Calle La Ronda,  Nº 13, Contiguo a Juzgado de paz. Días y horas  de reuniones: De Lunes a Domingo de 7:00 a 9:00 p.m. Miembros asistentes: 15 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow636 = new google.maps.InfoWindow({ content: contentString636 });   
        //markers  
        var marker636 = new google.maps.Marker({ position: point636, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "636.UNIDAD 26  DE FEBRERO." }); 
        //information for  
        function goToLink636() { infowindow636.open(map,marker636);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker636, 'click', goToLink636); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 637  
        //positions 
        var point637 = new google.maps.LatLng(13.612361, -89.180035); var contentString637 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">VOLVER  A VIVIR 15  DE NOVIEMBRE.</h1>'+ '<div id="bodyContent">'+ '<p><b>VOLVER  A VIVIR 15  DE NOVIEMBRE.</b> , — 15  de  Noviembre de 1993.  Dirección:  Cantón Quezalapa, Caserío Nº 2. Días y horas  de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m. Miembros asis- tentes: 15 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow637 = new google.maps.InfoWindow({ content: contentString637 });   
        //markers  
        var marker637 = new google.maps.Marker({ position: point637, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "637.VOLVER  A VIVIR 15  DE NOVIEMBRE." }); 
        //information for  
        function goToLink637() { infowindow637.open(map,marker637);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker637, 'click', goToLink637); google.maps.event.addDomListener(window, 'load', initialize);

        //MARCADOR 638  
        //positions 
        var point638 = new google.maps.LatLng(13.574224, -89.209757); var contentString638 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">08  DE SEPTIEMBRE.</h1>'+ '<div id="bodyContent">'+ '<p><b>08  DE SEPTIEMBRE.</b> , — 08 de  Septiembre de  1991.  Dirección:  Ba- rrio Santa Lucía Calle La Ronda.  Días y horas de reuniones: De Lunes a Domingo de 7:00 a 9:00 p.m.  Miembros asistentes: 10 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow638 = new google.maps.InfoWindow({ content: contentString638 });   
        //markers  
        var marker638 = new google.maps.Marker({ position: point638, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "638.08  DE SEPTIEMBRE." }); 
        //information for  
        function goToLink638() { infowindow638.open(map,marker638);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker638, 'click', goToLink638); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 639  
        //positions 
        var point639 = new google.maps.LatLng(13.572305, -89.206452); var contentString639 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">27 DE JULIO.</h1>'+ '<div id="bodyContent">'+ '<p><b>27 DE JULIO.</b> , —27 de  Julio de  2007.  Dirección:  Barrio Santa  Lucía, Calle Principal. Días y horas  de  reuniones: De Lunes a Domingo de 6:30 a 8:30 p.m.  Miembros asistentes: 12 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow639 = new google.maps.InfoWindow({ content: contentString639 });   
        //markers  
        var marker639 = new google.maps.Marker({ position: point639, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "639.27 DE JULIO." }); 
        //information for  
        function goToLink639() { infowindow639.open(map,marker639);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker639, 'click', goToLink639); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 640  
        //positions 
        var point640 = new google.maps.LatLng(13.576748, -89.199564); var contentString640 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">AL CUIDADO DE DIOS.</h1>'+ '<div id="bodyContent">'+ '<p><b>AL CUIDADO DE DIOS.</b> , — 20 de Abril de 1980.  Dirección:  Entrada a Barrio La Vega. Días y horas de reuniones: De Lunes a Domingo de 6:30 a 8:30 p.m.  Miembros asistentes: 17 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow640 = new google.maps.InfoWindow({ content: contentString640 });   
        //markers  
        var marker640 = new google.maps.Marker({ position: point640, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "640.AL CUIDADO DE DIOS." }); 
        //information for  
        function goToLink640() { infowindow640.open(map,marker640);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker640, 'click', goToLink640); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 641  
        //positions 
        var point641 = new google.maps.LatLng(13.579022, -89.206796); var contentString641 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">AMATE BLANCO.</h1>'+ '<div id="bodyContent">'+ '<p><b>AMATE BLANCO.</b> , — 13 de Noviembre de 1976. Dirección: Barrio El Centro, Caserío Amate  Blanco. Días y horas  de reuniones: De Lunes a Domingo de 7:00 a 9:00 p.m.  Miembros asistentes: 12 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow641 = new google.maps.InfoWindow({ content: contentString641 });   
        //markers  
        var marker641 = new google.maps.Marker({ position: point641, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "641.AMATE BLANCO." }); 
        //information for  
        function goToLink641() { infowindow641.open(map,marker641);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker641, 'click', goToLink641); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 642  
        //positions 
        var point642 = new google.maps.LatLng(13.574892, -89.202933); var contentString642 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">LUZ Y ESPERANZA.</h1>'+ '<div id="bodyContent">'+ '<p><b>LUZ Y ESPERANZA.</b> , — 30 de  Julio de  1988.  Dirección:  Cantón Las Barrosas  ½ Cuadra al Sur de  La Escuela.  Días y horas  de  reuniones: De Lunes a Domingo de  7:00 a 9:00 p.m.  Miembros asistentes: 26 Hombres</p>'+ '</div>'+ '</div>'; var infowindow642 = new google.maps.InfoWindow({ content: contentString642 });   
        //markers  
        var marker642 = new google.maps.Marker({ position: point642, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "642.LUZ Y ESPERANZA." }); 
        //information for  
        function goToLink642() { infowindow642.open(map,marker642);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker642, 'click', goToLink642); google.maps.event.addDomListener(window, 'load', initialize);

        //MARCADOR 643  
        //positions 
        var point643 = new google.maps.LatLng(13.667617, -89.184222); var contentString643 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">16  DE ABRIL.</h1>'+ '<div id="bodyContent">'+ '<p><b>16  DE ABRIL.</b> , — 16 de  Abril de  1988.  Dirección:  Colonia  Grimaldi Pasaje  No  1 Casa  N° 9 San Marcos,  Kilometro  6 Carretera Antigua a Zacatecoluca. Días y horas  de  reuniones: De Lunes a Viernes  de 6:30 a 8:30 p.m.  Sábado y Domingo de  6:00 a 8:00 p.m.  Miembros asistentes: 14 Hombres y 3 Mujeres.</p>'+ '</div>'+ '</div>'; var infowindow643 = new google.maps.InfoWindow({ content: contentString643 });   
        //markers  
        var marker643 = new google.maps.Marker({ position: point643, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "643.16  DE ABRIL." }); 
        //information for  
        function goToLink643() { infowindow643.open(map,marker643);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker643, 'click', goToLink643); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 644  
        //positions 
        var point644 = new google.maps.LatLng(13.656246, -89.171074); var contentString644 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">17  DE OCTUBRE.</h1>'+ '<div id="bodyContent">'+ '<p><b>17  DE OCTUBRE.</b> , — 17  de  Octubre de  1971.  Dirección:  Colonia Santa  María, Km. 6 ½ Carretera a Santo  Tomás.  Días y horas  de reu- niones: De Lunes a Domingo de 7:00 a 9:00 p.m. Miembros asisten- tes: 16 Hombres y 1 Mujer.</p>'+ '</div>'+ '</div>'; var infowindow644 = new google.maps.InfoWindow({ content: contentString644 });   
        //markers  
        var marker644 = new google.maps.Marker({ position: point644, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "644.17  DE OCTUBRE." }); 
        //information for  
        function goToLink644() { infowindow644.open(map,marker644);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker644, 'click', goToLink644); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 645  
        //positions 
        var point645 = new google.maps.LatLng(13.657567, -89.186251); var contentString645 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">26  DE OCTUBRE.</h1>'+ '<div id="bodyContent">'+ '<p><b>26  DE OCTUBRE.</b> , — 26  de  Octubre de  1985.  Dirección:  Colonia Tepeyac Pasaje  Sinaloa,  Casa  Nº 7, Días y horas  de  reuniones: De Lunes a Viernes de  7:00 a 9:00 p.m.  Sábado y Domingo de  5:00 a 7:00 p.m.  Miembros asistentes: 8 Hombres y 1 Mujer.</p>'+ '</div>'+ '</div>'; var infowindow645 = new google.maps.InfoWindow({ content: contentString645 });   
        //markers  
        var marker645 = new google.maps.Marker({ position: point645, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "645.26  DE OCTUBRE." }); 
        //information for  
        function goToLink645() { infowindow645.open(map,marker645);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker645, 'click', goToLink645); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 646  
        //positions 
        var point646 = new google.maps.LatLng(13.657557, -89.183027); var contentString646 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">ALEGRÍA DE VIVIR.</h1>'+ '<div id="bodyContent">'+ '<p><b>ALEGRÍA DE VIVIR.</b> , — 07 de  Febrero de  1964.  Dirección:  Calle 25 de  Abril Poniente N° 89 San Marcos.  Días y horas  de  reuniones: De Lunes a Sábado de 6:30 a 8:30 p.m. y Domingo de 5:00 a 7:00 p.m. Miembros asistentes: 17 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow646 = new google.maps.InfoWindow({ content: contentString646 });   
        //markers  
        var marker646 = new google.maps.Marker({ position: point646, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "646.ALEGRÍA DE VIVIR." }); 
        //information for  
        function goToLink646() { infowindow646.open(map,marker646);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker646, 'click', goToLink646); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 647  
        //positions 
        var point647 = new google.maps.LatLng(13.659786, -89.184001); var contentString647 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">BUENAVENTURA.</h1>'+ '<div id="bodyContent">'+ '<p><b>BUENAVENTURA.</b> ,  — 16 de  Noviembre de  2009.  Dirección:  Colo- nia San Antonio  Nº 7, Calle Principal Casa  N° 5 San Marcos.  Días y horas de reuniones: De Lunes a Domingo de 7:00 a 9:00 p.m. Miem- bros  asistentes: 4 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow647 = new google.maps.InfoWindow({ content: contentString647 });   
        //markers  
        var marker647 = new google.maps.Marker({ position: point647, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "647.BUENAVENTURA." }); 
        //information for 
        function goToLink647() { infowindow647.open(map,marker647);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker647, 'click', goToLink647); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 648  
        //positions 
        var point648 = new google.maps.LatLng(13.653596, -89.166448); var contentString648 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">DESPERTAR 10  DE ENERO.</h1>'+ '<div id="bodyContent">'+ '<p><b>DESPERTAR 10  DE ENERO.</b> , — 10  de  Enero  de  1988.  Dirección: Colonia  10 de  Octubre Polígono No  5 Calle  Principal  N° 1. Días y horas de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m. Miem- bros  asistentes: 8 Hombres y 1 Mujer.</p>'+ '</div>'+ '</div>'; var infowindow648 = new google.maps.InfoWindow({ content: contentString648 });   
        //markers  
        var marker648 = new google.maps.Marker({ position: point648, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "648.DESPERTAR 10  DE ENERO." }); 
        //information for  
        function goToLink648() { infowindow648.open(map,marker648);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker648, 'click', goToLink648); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 649  
        //positions 
        var point649 = new google.maps.LatLng(13.660515, -89.180505); var contentString649 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">DESPERTAR 06 DE AGOSTO.</h1>'+ '<div id="bodyContent">'+ '<p><b>DESPERTAR 06 DE AGOSTO.</b> , — 06 de Agosto de 1982.  Dirección: Colonia  El Tránsito Nº 3, Avenida  Granada, Block “F”, Lote 19. Días y horas  de  reuniones: De  Lunes  a  Domingo de  7:00  a  9:00  p.m. Miembros asistentes: 4 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow649 = new google.maps.InfoWindow({ content: contentString649 });   
        //markers  
        var marker649 = new google.maps.Marker({ position: point649, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "649.DESPERTAR 06 DE AGOSTO." }); 
        //information for  
        function goToLink649() { infowindow649.open(map,marker649);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker649, 'click', goToLink649); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 650  
        //positions 
        var point650 = new google.maps.LatLng(13.663090, -89.181720); var contentString650 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">EL MILAGRO.</h1>'+ '<div id="bodyContent">'+ '<p><b>EL MILAGRO.</b> , —  01de Julio de 2011. Dirección: Calle Principal Casa Nº 50 Colonia  El Milagro San Marcos.  Días y horas  de reuniones: De Lunes  a  Domingo de  7.00  a  9.00  p.  m.  Miembros asistentes: 12 Hombres y 1 Mujer.</p>'+ '</div>'+ '</div>'; var infowindow650 = new google.maps.InfoWindow({ content: contentString650 });   
        //markers  
        var marker650 = new google.maps.Marker({ position: point650, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "650.EL MILAGRO." }); 
        //information for  
        function goToLink650() { infowindow650.open(map,marker650);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker650, 'click', goToLink650); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 651  
        //positions 
        var point651 = new google.maps.LatLng(13.663277, -89.188343); var contentString651 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">FALTA UNO.</h1>'+ '<div id="bodyContent">'+ '<p><b>FALTA UNO.</b> , —  08 de  Enero  2007.  Dirección:  Terminal  del  Sur, Pe- gado a meta de Ruta 26. Días y horas de reuniones: De Lunes a Vier- nes de  3:00 a 5:00 p.m.  Sábado de  2:00 a 4:00 p.m.  y Domingo de 10:00 a.m. a 12:00 m.d.  Miembros asistentes: 6 Hombres y 1 Mujer.</p>'+ '</div>'+ '</div>'; var infowindow651 = new google.maps.InfoWindow({ content: contentString651 });   
        //markers  
        var marker651 = new google.maps.Marker({ position: point651, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "651.FALTA UNO." }); 
        //information for  
        function goToLink651() { infowindow651.open(map,marker651);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker651, 'click', goToLink651); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 652  
        //positions 
        var point652 = new google.maps.LatLng(13.665367, -89.181454); var contentString652 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NACE UNA ESPERANZA.</h1>'+ '<div id="bodyContent">'+ '<p><b>NACE UNA ESPERANZA.</b> , — 02 de  Abril de  2009.  Dirección:  Calle Principal Los Gálvez, Pasaje  Nº 2 Casa N° 1 San Marcos. Días y horas de  reuniones: De Lunes a Sábado de  6:00  a 8:00  p.m.  y Domingo 10:00 a.m. a 12:00 m.d.  Miembros asistentes: 16 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow652 = new google.maps.InfoWindow({ content: contentString652 });   
        //markers  
        var marker652 = new google.maps.Marker({ position: point652, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "652.NACE UNA ESPERANZA." }); 
        //information for  
        function goToLink652() { infowindow652.open(map,marker652);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker652, 'click', goToLink652); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 653  
        //positions 
        var point653 = new google.maps.LatLng(13.664525, -89.163794); var contentString653 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NUEVO PATROCINIO.</h1>'+ '<div id="bodyContent">'+ '<p><b>NUEVO PATROCINIO.</b> , — 13 de  Octubre de  2000.  Dirección:  Calle El Diamante Casa Nº 7, Colonia Perla Escondida. Días y horas  de re- uniones: De Lunes a Viernes de 6:00 a 8:00 p.m. Sábado y Domingo de 5:00 a 7:00 p.m.  Miembros asistentes: 13 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow653 = new google.maps.InfoWindow({ content: contentString653 });   
        //markers  
        var marker653 = new google.maps.Marker({ position: point653, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "653.NUEVO PATROCINIO." }); 
        //information for  
        function goToLink653() { infowindow653.open(map,marker653);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker653, 'click', goToLink653); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 654  
        //positions 
        var point654 = new google.maps.LatLng(13.660457, -89.176728); var contentString654 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">OASIS.</h1>'+ '<div id="bodyContent">'+ '<p><b>OASIS.</b> , — 01 de  Junio  de  1988.  Dirección:  Callé 25 de  Abril Orien- te,  Pasaje  San Marcos,  N° 14. Días y horas  de  reuniones: De Lunes a Domingo de 6:30 a 8:30 pm. Miembros asistentes: 14 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow654 = new google.maps.InfoWindow({ content: contentString654 });   
        //markers  
        var marker654 = new google.maps.Marker({ position: point654, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "654.OASIS." }); 
        //information for  
        function goToLink654() { infowindow654.open(map,marker654);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker654, 'click', goToLink654); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 655  
        //positions 
        var point655 = new google.maps.LatLng(13.656665, -89.181971); var contentString655 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">RESURRECCIÓN.</h1>'+ '<div id="bodyContent">'+ '<p><b>RESURRECCIÓN.</b> , — 07 de  Marzo de  1961.  Dirección:  Avenida  Pa- dre  Mario Zanconato N° 59. Días y horas  de  reuniones: De Lunes a Domingo de  6:30 a 8:30 pm.  Miembros asistentes: 15 Hombres y 1 Mujer.</p>'+ '</div>'+ '</div>'; var infowindow655 = new google.maps.InfoWindow({ content: contentString655 });   
        //markers  
        var marker655 = new google.maps.Marker({ position: point655, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "655.RESURRECCIÓN." }); 
        //information for  
        function goToLink655() { infowindow655.open(map,marker655);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker655, 'click', goToLink655); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 656  
        //positions 
        var point656 = new google.maps.LatLng(13.660876, -89.185202); var contentString656 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">SOLO POR HOY.</h1>'+ '<div id="bodyContent">'+ '<p><b>SOLO POR HOY.</b> , — 02  de  Abril de  1978.  Dirección:  Colonia  San Antonio  Nº 3 Calle Principal  Nº 10. Días y horas  de  reuniones: De Lunes a Sábado de 6:30 a 8:30 p.m. y Domingo de 5:00 a 7:00 p.m. Miembros asistentes: 11 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow656 = new google.maps.InfoWindow({ content: contentString656 });   
        //markers  
        var marker656 = new google.maps.Marker({ position: point656, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "656.SOLO POR HOY." }); 
        //information for  
        function goToLink656() { infowindow656.open(map,marker656);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker656, 'click', goToLink656); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 657  
        //positions 
        var point657 = new google.maps.LatLng(13.650065, -89.179378); var contentString657 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">TRES CAMINOS.</h1>'+ '<div id="bodyContent">'+ '<p><b>TRES CAMINOS.</b> , —  06  de  Octubre de  1986.  Dirección:  Colonia Santa  Paula,  final Calle  Principal  Nº  1. Días y horas  de  reuniones: De Lunes a Domingo de  6:30 a 8:30 p.m.  Miembros asistentes: 14 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow657 = new google.maps.InfoWindow({ content: contentString657 });   
        //markers  
        var marker657 = new google.maps.Marker({ position: point657, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "657.TRES CAMINOS." }); 
        //information for  
        function goToLink657() { infowindow657.open(map,marker657);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker657, 'click', goToLink657); google.maps.event.addDomListener(window, 'load', initialize);

        //MARCADOR 658  
        //positions 
        var point658 = new google.maps.LatLng(13.738725, -89.055791); var contentString658 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">10 DE MAYO.</h1>'+ '<div id="bodyContent">'+ '<p><b>10 DE MAYO.</b> , — 10 de Mayo de 1975. Dirección: 12 Avenida Sur N° 2 frente  a Alcaldía Municipal de San Martín. Días y horas  de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m. Miembros asistentes: 8 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow658 = new google.maps.InfoWindow({ content: contentString658 });   
        //markers  
        var marker658 = new google.maps.Marker({ position: point658, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "658.10 DE MAYO." }); 
        //information for  
        function goToLink658() { infowindow658.open(map,marker658);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker658, 'click', goToLink658); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 659  
        //positions 
        var point659 = new google.maps.LatLng(13.732530, -89.067501); var contentString659 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">22 DE ENERO.</h1>'+ '<div id="bodyContent">'+ '<p><b>22 DE ENERO.</b> , — 22 de  Enero  de  2012.  Dirección:  Cantón Ánimas de  San Martín Carretera a San José Guayabal Km. 6. Días y horas de  reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m.  Miembros asistentes: 16 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow659 = new google.maps.InfoWindow({ content: contentString659 });   
        //markers  
        var marker659 = new google.maps.Marker({ position: point659, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "659.22 DE ENERO." }); 
        //information for  
        function goToLink659() { infowindow659.open(map,marker659);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker659, 'click', goToLink659); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 660  
        //positions 
        var point660 = new google.maps.LatLng(13.737238, -89.062613); var contentString660 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">ACCIÓN 10  DE MARZO.</h1>'+ '<div id="bodyContent">'+ '<p><b>ACCIÓN 10  DE MARZO.</b> , — 10 de  Marzo de  1990.  Dirección:  Co- lonia Santa  María final Pasaje  Nº 16, Casa  N° 127.  Días y horas  de reuniones: de Lunes a Domingo de 6:00 a 8:00 p.m. Miembros asis- tentes: 7 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow660 = new google.maps.InfoWindow({ content: contentString660 });   
        //markers  
        var marker660 = new google.maps.Marker({ position: point660, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "660.ACCIÓN 10  DE MARZO." }); 
        //information for  
        function goToLink660() { infowindow660.open(map,marker660);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker660, 'click', goToLink660); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 661  
        //positions 
        var point661 = new google.maps.LatLng(13.739672, -89.080433); var contentString661 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">CENTRAL 1º  DE NOVIEMBRE.</h1>'+ '<div id="bodyContent">'+ '<p><b>CENTRAL 1º  DE NOVIEMBRE.</b> , — 01 de  Noviembre de  1984.  Di- rección:  1ª Avenida  Norte  Nº 29, Barrio Mercedes. Días y horas  de reuniones: De Lunes a Domingo de 6:30 a 8:30 p.m. Miembros asis- tentes: 15 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow661 = new google.maps.InfoWindow({ content: contentString661 });   
        //markers  
        var marker661 = new google.maps.Marker({ position: point661, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "661.CENTRAL 1º  DE NOVIEMBRE." }); 
        //information for  
        function goToLink661() { infowindow661.open(map,marker661);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker661, 'click', goToLink661); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 662  
        //positions 
        var point662 = new google.maps.LatLng(13.766646, -89.063191); var contentString662 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">DESPERTAR 30 DE AGOSTO.</h1>'+ '<div id="bodyContent">'+ '<p><b>DESPERTAR 30 DE AGOSTO.</b> , — 30 de Agosto de 1981.  Dirección: Calle  a Cantón Las Delicias  frente  a CEL San Martín.  Días y horas de  reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m.  Miembros asistentes: 17 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow662 = new google.maps.InfoWindow({ content: contentString662 });   
        //markers  
        var marker662 = new google.maps.Marker({ position: point662, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "662.DESPERTAR 30 DE AGOSTO." }); 
        //information for  
        function goToLink662() { infowindow662.open(map,marker662);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker662, 'click', goToLink662); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 663  
        //positions 
        var point663 = new google.maps.LatLng(13.719707, -89.081989); var contentString663 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">FUENTE DE SALVACIÓN.</h1>'+ '<div id="bodyContent">'+ '<p><b>FUENTE DE SALVACIÓN.</b> , — 26 de Noviembre de 2001.  Dirección: Colonia  Santa  Gertrudis, Polígono Nº 27 Casa  N° 15. Días y horas de  reuniones: De Lunes a Domingo de  6:30 a 8:30 p.m.  Miembros asistentes: 7 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow663 = new google.maps.InfoWindow({ content: contentString663 });   
        //markers  
        var marker663 = new google.maps.Marker({ position: point663, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "663.FUENTE DE SALVACIÓN." }); 
        //information for  
        function goToLink663() { infowindow663.open(map,marker663);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker663, 'click', goToLink663); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 664  
        //positions 
        var point664 = new google.maps.LatLng(13.716331, -89.086721); var contentString664 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">LUZ Y ESPERANZA 2010.</h1>'+ '<div id="bodyContent">'+ '<p><b>LUZ Y ESPERANZA 2010.</b> , — 09 de  Enero  de  2010.  Dirección:  4a Avenida  Sur Casa  N° 10.  Días  y horas  de  reuniones: De  Lunes  a Domingo de  6:00 a 8:00 p.m.  Miembros asistentes: 9 Hombres y 1 Mujer.</p>'+ '</div>'+ '</div>'; var infowindow664 = new google.maps.InfoWindow({ content: contentString664 });   
        //markers  
        var marker664 = new google.maps.Marker({ position: point664, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "664.LUZ Y ESPERANZA 2010." }); 
        //information for  
        function goToLink664() { infowindow664.open(map,marker664);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker664, 'click', goToLink664); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 665  
        //positions 
        var point665 = new google.maps.LatLng(13.761345, -89.054226); var contentString665 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NUEVO DESPERTAR EN LAS DELICIAS.</h1>'+ '<div id="bodyContent">'+ '<p><b>NUEVO DESPERTAR EN LAS DELICIAS.</b> , — 06 de  Noviembre de 1999. Dirección:  Cantón Las Delicias 50 metros Oriente a Desvío Al- tavista sobre Carretera a Tonacatepeque. Días y horas de reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m.  Miembros asistentes: 22 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow665 = new google.maps.InfoWindow({ content: contentString665 });   
        //markers  
        var marker665 = new google.maps.Marker({ position: point665, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "665.NUEVO DESPERTAR EN LAS DELICIAS." }); 
        //information for  
        function goToLink665() { infowindow665.open(map,marker665);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker665, 'click', goToLink665); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 666  
        //positions 
        var point666 = new google.maps.LatLng(13.719630, -89.069488); var contentString666 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NUEVO SENDERO.</h1>'+ '<div id="bodyContent">'+ '<p><b>NUEVO SENDERO.</b> , — 25 de  Septiembre de  1970.  Dirección:  Ca- rretera Panamericana Cantón La Palma  Km. 15 ½, San Martín. Días y horas  de  reuniones: De  Lunes  a  Domingo de  6:30  a  8:30  p.m. Miembros asistentes: 22 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow666 = new google.maps.InfoWindow({ content: contentString666 });   
        //markers  
        var marker666 = new google.maps.Marker({ position: point666, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "666.NUEVO SENDERO." }); 
        //information for  
        function goToLink666() { infowindow666.open(map,marker666);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker666, 'click', goToLink666); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 667  
        //positions 
        var point667 = new google.maps.LatLng(13.746301, -89.045702); var contentString667 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">RESURRECCIÓN EN A.A.</h1>'+ '<div id="bodyContent">'+ '<p><b>RESURRECCIÓN EN A.A.</b> , — 21 de Septiembre de 1997. Dirección: 2ª Avenida  Norte  Local Nº 9. Días y horas  de  reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m.  Miembros asistentes: 12 hombre y 1 mujer</p>'+ '</div>'+ '</div>'; var infowindow667 = new google.maps.InfoWindow({ content: contentString667 });   
        //markers  
        var marker667 = new google.maps.Marker({ position: point667, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "667.RESURRECCIÓN EN A.A." }); 
        //information for  
        function goToLink667() { infowindow667.open(map,marker667);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker667, 'click', goToLink667); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 668  
        //positions 
        var point668 = new google.maps.LatLng(13.729627, -89.061420); var contentString668 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">SALVANDO VIDAS.</h1>'+ '<div id="bodyContent">'+ '<p><b>SALVANDO VIDAS.</b> , — 07 de Diciembre de 1997.  Dirección:  Aveni- da Monseñor Romero  Casa  N° 5, Colonia  Santa  Teresa  San Martín. Días y horas  de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m. Miembros asistentes: 6 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow668 = new google.maps.InfoWindow({ content: contentString668 });   
        //markers  
        var marker668 = new google.maps.Marker({ position: point668, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "668.SALVANDO VIDAS." }); 
        //information for  
        function goToLink668() { infowindow668.open(map,marker668);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker668, 'click', goToLink668); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 669  
        //positions 
        var point669 = new google.maps.LatLng(13.742899, -89.052354); var contentString669 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">SOMOS LIBRES EN A.A.</h1>'+ '<div id="bodyContent">'+ '<p><b>SOMOS LIBRES EN A.A.</b> , — 28 de Marzo de 1982.  Dirección:  Colo- nia San Joaquín, Pasaje A Nº 53. Días y horas de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.  Miembros asistentes: 19 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow669 = new google.maps.InfoWindow({ content: contentString669 });   
        //markers  
        var marker669 = new google.maps.Marker({ position: point669, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "669.SOMOS LIBRES EN A.A." }); 
        //information for  
        function goToLink669() { infowindow669.open(map,marker669);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker669, 'click', goToLink669); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 670  
        //positions 
        var point670 = new google.maps.LatLng(13.716418, -89.083371); var contentString670 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UN MILAGRO EN TIERRA VIRGEN.</h1>'+ '<div id="bodyContent">'+ '<p><b>UN MILAGRO EN TIERRA VIRGEN.</b> , — 23 de Noviembre de 1982. Dirección:  Calle José María, Casa Nº 7 Colonia  Tierra Virgen. Días y horas de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m. Miem- bros  asistentes: 18 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow670 = new google.maps.InfoWindow({ content: contentString670 });   
        //markers 
         var marker670 = new google.maps.Marker({ position: point670, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "670.UN MILAGRO EN TIERRA VIRGEN." }); 
         //information for  
         function goToLink670() { infowindow670.open(map,marker670);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker670, 'click', goToLink670); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 671  
        //positions 
        var point671 = new google.maps.LatLng(13.727019, -89.079469); var contentString671 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UNIDAD EN A.A.</h1>'+ '<div id="bodyContent">'+ '<p><b>UNIDAD EN A.A.</b> , — 18 de  Abril de  1962.  Dirección:  Avenida  Mo- razán  Nº  14,  local  No  3.  frente  a Súper  Selectos. Días  y horas  de reuniones: De Lunes a Domingo de 4:00 a 6:00 p.m. Miembros asis- tentes: 8 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow671 = new google.maps.InfoWindow({ content: contentString671 });   
        //markers  
        var marker671 = new google.maps.Marker({ position: point671, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "671.UNIDAD EN A.A." }); 
        //information for  
        function goToLink671() { infowindow671.open(map,marker671);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker671, 'click', goToLink671); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 672  
        //positions 
        var point672 = new google.maps.LatLng(13.737965, -89.048178); var contentString672 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UNIDOS 18 DE MAYO.</h1>'+ '<div id="bodyContent">'+ '<p><b>UNIDOS 18 DE MAYO.</b> , — 17 de Mayo de 1982.  Dirección:  Colonia Anémona Pasaje  Nº 2, Casa  Nº 20 Block “C”.  Días y horas  de  reu- niones: De Lunes a Domingo de 6:30 a 8:30 p.m. Miembros asisten- tes: 9 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow672 = new google.maps.InfoWindow({ content: contentString672 });   
        //markers  
        var marker672 = new google.maps.Marker({ position: point672, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "672.UNIDOS 18 DE MAYO." }); 
        //information for  
        function goToLink672() { infowindow672.open(map,marker672);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker672, 'click', goToLink672); google.maps.event.addDomListener(window, 'load', initialize);

        //MARCADOR 673  
        //positions 
        var point673 = new google.maps.LatLng(13.693793, -89.213003); var contentString673 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">03  DE MAYO.</h1>'+ '<div id="bodyContent">'+ '<p><b>03  DE MAYO.</b> , — 15 de  Febrero de  2007.  Dirección:  Antigua  Calle del Ferrocarril  Nº 2430  Colonia  3 de  Mayo. Días y horas  de  reunio- nes: De Lunes a Domingo de 7:30 a 9:00 p.m. Miembros asistentes: 6 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow673 = new google.maps.InfoWindow({ content: contentString673 });   
        //markers  
        var marker673 = new google.maps.Marker({ position: point673, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "673.03  DE MAYO." }); 
        //information for  
        function goToLink673() { infowindow673.open(map,marker673);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker673, 'click', goToLink673); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 674  
        //positions 
        var point674 = new google.maps.LatLng(13.708007, -89.186095); var contentString674 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">05  DE NOVIEMBRE.</h1>'+ '<div id="bodyContent">'+ '<p><b>05  DE NOVIEMBRE.</b> , — 05 de  Noviembre de  1951.  Dirección:  10a Avenida  Norte  Nº 1109.  Días y horas  de  reuniones: De Lunes a Do- mingo  de  6:00  a 8:00  p.m.  Miembros asistentes: 25 Hombres y 3 Mujeres.</p>'+ '</div>'+ '</div>'; var infowindow674 = new google.maps.InfoWindow({ content: contentString674 });   
        //markers  
        var marker674 = new google.maps.Marker({ position: point674, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "674.05  DE NOVIEMBRE." }); 
        //information for  
        function goToLink674() { infowindow674.open(map,marker674);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker674, 'click', goToLink674); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 675  
        //positions 
        var point675 = new google.maps.LatLng(13.691291, -89.199766); var contentString675 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">10  DE DICIEMBRE.</h1>'+ '<div id="bodyContent">'+ '<p><b>10  DE DICIEMBRE.</b> , —  10  de  Diciembre de  1987.  Dirección:  13ª Avenida  Sur Nº 1005,  Barrio Santa  Anita. Días y horas  de reuniones: De Lunes a Domingo de  6:30 a 8:30 p.m.  Miembros asistentes: 15 Hombres 2 Mujeres.</p>'+ '</div>'+ '</div>'; var infowindow675 = new google.maps.InfoWindow({ content: contentString675 });   
        //markers  
        var marker675 = new google.maps.Marker({ position: point675, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "675.10  DE DICIEMBRE." }); 
        //information for  
        function goToLink675() { infowindow675.open(map,marker675);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker675, 'click', goToLink675); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 676  
        //positions 
        var point676 = new google.maps.LatLng(13.692168, -89.233333); var contentString676 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">11 DE SEPTIEMBRE.</h1>'+ '<div id="bodyContent">'+ '<p><b>11 DE SEPTIEMBRE.</b> , — 11 de  Septiembre de  1970.  Dirección:  Comunidad Las Palmas,  Parcela  4, Pasaje  Cuscatlán, Casa  Nº 78, Km. 5 Carretera a Santa  Tecla.  Días y horas  de  reuniones: De  Lunes  a Domingo de  7:00 a 9:00 p.m.  Miembros asistentes: 8 Hombres y 1 Mujer.</p>'+ '</div>'+ '</div>'; var infowindow676 = new google.maps.InfoWindow({ content: contentString676 });   
        //markers  
        var marker676 = new google.maps.Marker({ position: point676, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "676.11 DE SEPTIEMBRE." }); 
        //information for  
        function goToLink676() { infowindow676.open(map,marker676);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker676, 'click', goToLink676); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 677  
        //positions 
        var point677 = new google.maps.LatLng(13.710782, -89.206984); var contentString677 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">12 DE ABRIL.</h1>'+ '<div id="bodyContent">'+ '<p><b>12 DE ABRIL.</b> , — 12 de Abril de 1976.  Dirección:  Boulevard Los Hé- roes  Condomino Los Héroes Nivel 2 locales  2G y 2H. Días y horas de  reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m.  Miembros asistentes: 30 Hombres y 5 Mujeres.</p>'+ '</div>'+ '</div>'; var infowindow677 = new google.maps.InfoWindow({ content: contentString677 });   
        //markers  
        var marker677 = new google.maps.Marker({ position: point677, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "677.12 DE ABRIL." });
         //information for  
         function goToLink677() { infowindow677.open(map,marker677);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker677, 'click', goToLink677); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 678  
        //positions 
        var point678 = new google.maps.LatLng(13.706514, -89.189623); var contentString678 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">12  DE OCTUBRE.</h1>'+ '<div id="bodyContent">'+ '<p><b>12  DE OCTUBRE.</b> , — 12  de  Octubre de  1993.  Dirección:  Colonia Santa  Eugenia, Pasaje  Nº 1 Casa Nº 123, Barrio San Miguelito. Días y horas  de reuniones: De Lunes a Sábado de 6:00 a 8:00 p.m. y Do- mingo  de 11:00 a.m. a 1:00 p.m.  Miembros asistentes: 28 Hombres y 3 Mujeres.</p>'+ '</div>'+ '</div>'; var infowindow678 = new google.maps.InfoWindow({ content: contentString678 });   
        //markers  
        var marker678 = new google.maps.Marker({ position: point678, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "678.12  DE OCTUBRE." }); 
        //information for  
        function goToLink678() { infowindow678.open(map,marker678);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker678, 'click', goToLink678); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 679  
        //positions 
        var point679 = new google.maps.LatLng(13.699101, -89.185911); var contentString679 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">17 DE DICIEMBRE.</h1>'+ '<div id="bodyContent">'+ '<p><b>17 DE DICIEMBRE.</b> , — 17 de Diciembre de 1994. Dirección: 1ª Calle Oriente, Centro Comercial Duarte  Novoa, local Nº 1. Días y horas de  reuniones: De Lunes  a Domingo de  5:00  a 7:00  p.m.Miembros asistentes: 30 Hombres y 10 Mujeres.</p>'+ '</div>'+ '</div>'; var infowindow679 = new google.maps.InfoWindow({ content: contentString679 });   
        //markers  
        var marker679 = new google.maps.Marker({ position: point679, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "679.17 DE DICIEMBRE." }); 
        //information for  
        function goToLink679() { infowindow679.open(map,marker679);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker679, 'click', goToLink679); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 680  
        //positions 
        var point680 = new google.maps.LatLng(13.680100, -89.205794); var contentString680 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">18 DE JULIO.</h1>'+ '<div id="bodyContent">'+ '<p><b>18 DE JULIO.</b> , — 01 de Julio de 1965.  Dirección:  Calle Las Pilas Co- lonia Dolores Nº 203. Días y horas  de reuniones: De Lunes a Domin- go de 7:00 a 9:00 p.m.  Miembros asistentes: 10 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow680 = new google.maps.InfoWindow({ content: contentString680 });   
        //markers  
        var marker680 = new google.maps.Marker({ position: point680, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "680.18 DE JULIO." }); 
        //information for  
        function goToLink680() { infowindow680.open(map,marker680);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker680, 'click', goToLink680); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 681  
        //positions 
        var point681 = new google.maps.LatLng(13.695891, -89.189873); var contentString681 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">24 DE OCTUBRE.</h1>'+ '<div id="bodyContent">'+ '<p><b>24 DE OCTUBRE.</b> , — 24 de Octubre de 1982. Dirección:  Final 6a  Ca- lle Oriente Pasaje C, Casa No 65. Días y horas de reuniones: De Lunes a Domingo de 7:00 a 9:00 p.m.  Miembros asistentes: 12 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow681 = new google.maps.InfoWindow({ content: contentString681 });   
        //markers  
        var marker681 = new google.maps.Marker({ position: point681, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "681.24 DE OCTUBRE." }); 
        //information for  
        function goToLink681() { infowindow681.open(map,marker681);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker681, 'click', goToLink681); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 682  
        //positions 
        var point682 = new google.maps.LatLng(13.761969, -89.189337); var contentString682 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">24 DE SEPTIEMBRE.</h1>'+ '<div id="bodyContent">'+ '<p><b>24 DE SEPTIEMBRE.</b> , — 24 de  Septiembre de  1980,  Dirección:  Co- munidad Cristo  Redentor, Sector  “C”  Pasaje  N° 2. Días y horas  de reuniones: De Lunes a Domingo de 5:00 a 7:00 p.m. Miembros asis- tentes: 5 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow682 = new google.maps.InfoWindow({ content: contentString682 });   
        //markers  
        var marker682 = new google.maps.Marker({ position: point682, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "682.24 DE SEPTIEMBRE." }); 
        //information for  
        function goToLink682() { infowindow682.open(map,marker682);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker682, 'click', goToLink682); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 683  
        //positions 
        var point683 = new google.maps.LatLng(13.640319, -89.187866); var contentString683 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">25 DE MAYO.</h1>'+ '<div id="bodyContent">'+ '<p><b>25 DE MAYO.</b> , — 25 de Mayo de 1966.  Dirección:  Planes  de Rende- ros, Calle al Parque Balboa, Colonia  Los Ángeles frente  a Pupuseria Paty II. Días y horas  de reuniones: De Lunes a Domingo 7:00 a 9:00 p.m.  Miembros asistentes: 20 Hombres y 2 Mujeres.</p>'+ '</div>'+ '</div>'; var infowindow683 = new google.maps.InfoWindow({ content: contentString683 });   
        //markers  
        var marker683 = new google.maps.Marker({ position: point683, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "683.25 DE MAYO." }); 
        //information for  
        function goToLink683() { infowindow683.open(map,marker683);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker683, 'click', goToLink683); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 684  
        //positions 
        var point684 = new google.maps.LatLng(13.711943, -89.166659); var contentString684 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">28  DE ENERO.</h1>'+ '<div id="bodyContent">'+ '<p><b>28  DE ENERO.</b> , — 28 de  Enero  de  1978  Dirección:  Colonia  1º  de Septiembre Plan Piloto Pasaje  Nº 2 Casa  Nº 26 Bis. Días y horas  de reuniones: De Lunes a Domingo de 7:00 a 9:00 p.m. Miembros asis- tentes: 17 Hombres y 1 Mujer.</p>'+ '</div>'+ '</div>'; var infowindow684 = new google.maps.InfoWindow({ content: contentString684 });   
        //markers  
        var marker684 = new google.maps.Marker({ position: point684, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "684.28  DE ENERO." }); 
        //information for  
        function goToLink684() { infowindow684.open(map,marker684);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker684, 'click', goToLink684); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 685  
        //positions 
        var point685 = new google.maps.LatLng(13.704347, -89.239931); var contentString685 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">29 DE AGOSTO.</h1>'+ '<div id="bodyContent">'+ '<p><b>29 DE AGOSTO.</b> , — 29 de Agosto de 1963.  Dirección:  Final 85 Ave- nida Norte, Comunidad Pedrera Nº 1, Pasaje  Principal C Nº 3. Días y horas  de  reuniones: De  Lunes  a  Domingo de  6:30  a  8:30  p.m. Miembros asistentes: 11 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow685 = new google.maps.InfoWindow({ content: contentString685 });   
        //markers  
        var marker685 = new google.maps.Marker({ position: point685, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "685.29 DE AGOSTO." }); 
        //information for  
        function goToLink685() { infowindow685.open(map,marker685);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker685, 'click', goToLink685); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 686  
        //positions 
        var point686 = new google.maps.LatLng(13.681529, -89.184096); var contentString686 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">ALTOS DE SAN ROQUE.</h1>'+ '<div id="bodyContent">'+ '<p><b>ALTOS DE SAN ROQUE.</b> , — 10 de  Marzo de  1997.  Dirección:  Calle México Avenida  Flor de  Loto Eje No 6 Casa Nº 151. Días y horas  de reuniones: De  Lunes  a Domingo de  8:00  a 10:00  p.m.  Miembros asistentes: 7 Hombres y 1 Mujer.</p>'+ '</div>'+ '</div>'; var infowindow686 = new google.maps.InfoWindow({ content: contentString686 });   
        //markers  
        var marker686 = new google.maps.Marker({ position: point686, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "686.ALTOS DE SAN ROQUE." }); 
        //information for  
        function goToLink686() { infowindow686.open(map,marker686);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker686, 'click', goToLink686); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 687  
        //positions 
        var point687 = new google.maps.LatLng(13.676387, -89.188795); var contentString687 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">AMÉRICA.</h1>'+ '<div id="bodyContent">'+ '<p><b>AMÉRICA.</b> , — 06 de  Agosto de  1970.  Dirección:  Colonia  América, Barrio  San  Jacinto Calle  12  de  Octubre Nº  330.  Días  y horas  de reuniones: De Lunes a Domingo de 7:00 a 9:00 p.m. Miembros asis- tentes: 12 Hombres y 1 Mujer.</p>'+ '</div>'+ '</div>'; var infowindow687 = new google.maps.InfoWindow({ content: contentString687 });   
        //markers  
        var marker687 = new google.maps.Marker({ position: point687, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "687.AMÉRICA." }); 
        //information for  
        function goToLink687() { infowindow687.open(map,marker687);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker687, 'click', goToLink687); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 688  
        //positions 
        var point688 = new google.maps.LatLng(13.696410, -89.185517); var contentString688 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">AMIGOS EN A.A.</h1>'+ '<div id="bodyContent">'+ '<p><b>AMIGOS EN A.A.</b> , — 07de Enero  de 2002.  Dirección:  Barrio San Esteban 4ª Calle Oriente Nº 869 Barrio San Esteban, Teléfono: 2100 2607.  Días y horas  de  reuniones: De  Lunes  a Domingo de  7:00  a 9:00 p.m.  Miembros asistentes: 18 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow688 = new google.maps.InfoWindow({ content: contentString688 });   
        //markers  
        var marker688 = new google.maps.Marker({ position: point688, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "688.AMIGOS EN A.A." }); 
        //information for  
        function goToLink688() { infowindow688.open(map,marker688);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker688, 'click', goToLink688); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 689  
        //positions 
        var point689 = new google.maps.LatLng(13.650680, -89.170710); var contentString689 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">AMISTAD 24  DE AGOSTO.</h1>'+ '<div id="bodyContent">'+ '<p><b>AMISTAD 24  DE AGOSTO.</b> , — 24  de  Agosto de  1981.  Dirección: Final Calle Lara, Avenida  Las Rosas Nº 38 B Colonia  Miraflores, San Jacinto. Días y horas  de  reuniones: De Lunes a Domingo de  7:00 a 9:00 p.m.  Miembros asistentes: 13 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow689 = new google.maps.InfoWindow({ content: contentString689 });   
        //markers  
        var marker689 = new google.maps.Marker({ position: point689, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "689.AMISTAD 24  DE AGOSTO." }); 
        //information for  
        function goToLink689() { infowindow689.open(map,marker689);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker689, 'click', goToLink689); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 690  
        //positions 
        var point690 = new google.maps.LatLng(13.717972, -89.210234); var contentString690 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">AMISTAD.</h1>'+ '<div id="bodyContent">'+ '<p><b>AMISTAD.</b> , — 18 de  Febrero de  1968.  Dirección:  Avenida  Morazán y 1ª  Calle,  Edificio Salomé  2ª  Planta,  Local Nº  8. Días y horas  de reuniones: De Lunes a Domingo de 6:00 a 8:00 pm. Miembros asis- tentes: 18 Hombres y 1 Mujer.</p>'+ '</div>'+ '</div>'; var infowindow690 = new google.maps.InfoWindow({ content: contentString690 });   
        //markers  
        var marker690 = new google.maps.Marker({ position: point690, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "690.AMISTAD." }); 
        //information for  
        function goToLink690() { infowindow690.open(map,marker690);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker690, 'click', goToLink690); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 691  
        //positions 
        var point691 = new google.maps.LatLng(13.688375, -89.193709); var contentString691 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">BUSCANDO  LA LUZ.</h1>'+ '<div id="bodyContent">'+ '<p><b>BUSCANDO  LA LUZ.</b> , — 21 Mayo de  2009.  Dirección:  Calle 15 de Septiembre y Calle Perú Nº 209, Barrio Candelaria. Días y horas  de reuniones: De Lunes a Domingo de 7:00 a 9:00 p.m. Miembros asis- tentes: 9 Hombres y 1 Mujer.</p>'+ '</div>'+ '</div>'; var infowindow691 = new google.maps.InfoWindow({ content: contentString691 });   
        //markers  
        var marker691 = new google.maps.Marker({ position: point691, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "691.BUSCANDO  LA LUZ." }); 
        //information for  
        function goToLink691() { infowindow691.open(map,marker691);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker691, 'click', goToLink691); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 692  
        //positions 
        var point692 = new google.maps.LatLng(13.672147, -89.194299); var contentString692 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">CALIFORNIA.</h1>'+ '<div id="bodyContent">'+ '<p><b>CALIFORNIA.</b> , —27 de  Enero  de  2009.  Dirección:  Carretera Planes de Renderos Km. 3 ½, Col California Pasaje  L Nº 17. Días y horas  de reuniones: De Lunes a Domingo 7:00 a 9:00 p.m. Miembros asisten- tes: 8 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow692 = new google.maps.InfoWindow({ content: contentString692 });   
        //markers  
        var marker692 = new google.maps.Marker({ position: point692, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "692.CALIFORNIA." }); 
        //information for  
        function goToLink692() { infowindow692.open(map,marker692);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker692, 'click', goToLink692); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 693  
        //positions 
        var point693 = new google.maps.LatLng(13.702442, -89.186768); var contentString693 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">CATARSIS.</h1>'+ '<div id="bodyContent">'+ '<p><b>CATARSIS.</b> , — 30 de  Mayo de  2011.  Dirección:  5a   Calle Oriente N° 701,  Contiguo a  Unidad  de  Salud  de  La Calle  Concepción.  Días y horas  de  reuniones: De  Lunes  a Domingo de  8:00  a 10:00  p.m. Miembros asistentes: 18 Hombres y 3 Mujeres.</p>'+ '</div>'+ '</div>'; var infowindow693 = new google.maps.InfoWindow({ content: contentString693 });   
        //markers  
        var marker693 = new google.maps.Marker({ position: point693, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "693.CATARSIS." }); 
        //information for  
        function goToLink693() { infowindow693.open(map,marker693);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker693, 'click', goToLink693); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 694  
        //positions 
        var point694 = new google.maps.LatLng(13.697086, -89.188318); var contentString694 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">CENTENARIO 11 DE JULIO.</h1>'+ '<div id="bodyContent">'+ '<p><b>CENTENARIO 11 DE JULIO.</b> , — 11 de Julio de 2001. Dirección:  10ª Avenida  Norte  Nº 537-B, frente  a parque Centenario. Días y horas de  reuniones: De  Lunes  a Sábado de  6:00  a 8:00  p.m.  Miembros asistentes: 12 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow694 = new google.maps.InfoWindow({ content: contentString694 });   
        //markers  
        var marker694 = new google.maps.Marker({ position: point694, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "694.CENTENARIO 11 DE JULIO." }); 
        //information for  
        function goToLink694() { infowindow694.open(map,marker694);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker694, 'click', goToLink694); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 695  
        //positions 
        var point695 = new google.maps.LatLng(13.713883, -89.212921); var contentString695 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">CENTRAL DE EL SALVADOR.</h1>'+ '<div id="bodyContent">'+ '<p><b>CENTRAL DE EL SALVADOR.</b> , — 28 de Febrero de 1955. Dirección: 8a  Avenida  Sur, Comercial Libertad 3a  Planta,  local N° 2, atrás  de  La Iglesia El Rosario. Días y horas  de reuniones: De Lunes a Sábado de 5:00 a 7:00 p.m.  y Domingo de  3:30 a 5:30 p.m.  Miembros asistentes: 20 Hombres y 2 Mujeres.</p>'+ '</div>'+ '</div>'; var infowindow695 = new google.maps.InfoWindow({ content: contentString695 });   
        //markers  
        var marker695 = new google.maps.Marker({ position: point695, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "695.CENTRAL DE EL SALVADOR." }); 
        //information for  
        function goToLink695() { infowindow695.open(map,marker695);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker695, 'click', goToLink695); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 696  
        //positions 
        var point696 = new google.maps.LatLng(13.714211, -89.213114); var contentString696 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">CENTROAMERICA.</h1>'+ '<div id="bodyContent">'+ '<p><b>CENTROAMERICA.</b> , — 12 de  Octubre de  1960.  Dirección:  Colonia Centroamérica Avenida  Izalco, Pasaje  La Capilla  local Nº 1. Días y horas  de  reuniones: De Lunes a Domingo de  5:30 a 7:30 p.m.;  Sá- bado de  4:00  a 6:00  p.m.  y Domingo de  10:00  a.m.  a 12:00  m.d. Miembros asistentes: 30 Hombres y 4 Mujeres.</p>'+ '</div>'+ '</div>'; var infowindow696 = new google.maps.InfoWindow({ content: contentString696 });   
        //markers  
        var marker696 = new google.maps.Marker({ position: point696, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "696.CENTROAMERICA." }); 
        //information for  
        function goToLink696() { infowindow696.open(map,marker696);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker696, 'click', goToLink696); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 697  
        //positions 
        var point697 = new google.maps.LatLng(13.709452, -89.199996); var contentString697 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">CENTROAMERICANO Y PANAMÁ.</h1>'+ '<div id="bodyContent">'+ '<p><b>CENTROAMERICANO Y PANAMÁ.</b> , —22  de  Noviembre de  1996. Dirección:  Avenida  Isidro Menéndez y 6a  Calle Poniente San Salva- dor. Días y horas  de reuniones: De Lunes a Domingo de 3:00 a 6:00 p.m.  Miembros asistentes: 20 Hombres y 2 Mujeres.</p>'+ '</div>'+ '</div>'; var infowindow697 = new google.maps.InfoWindow({ content: contentString697 });   
        //markers  
        var marker697 = new google.maps.Marker({ position: point697, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "697.CENTROAMERICANO Y PANAMÁ." }); 
        //information for  
        function goToLink697() { infowindow697.open(map,marker697);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker697, 'click', goToLink697); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 698  
        //positions 
        var point698 = new google.maps.LatLng(13.695995, -89.200634); var contentString698 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">DESPERTAR 70.</h1>'+ '<div id="bodyContent">'+ '<p><b>DESPERTAR 70.</b> , —  06 de  Marzo de  1970.  Dirección:  Calle Gerardo Barrios y 17 Avenida  Sur Nº 302. Días y horas  de  reuniones: De Lu- nes  a Domingo de  6:30 a 8:30 p.m.  Miembros asistentes: 16 Hom- bres  y 1 Mujer.</p>'+ '</div>'+ '</div>'; var infowindow698 = new google.maps.InfoWindow({ content: contentString698 });   
        //markers  
        var marker698 = new google.maps.Marker({ position: point698, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "698.DESPERTAR 70." }); 
        //information for  
        function goToLink698() { infowindow698.open(map,marker698);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker698, 'click', goToLink698); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 699  
        //positions 
        var point699 = new google.maps.LatLng(13.687485, -89.212297); var contentString699 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">DIGNIDAD.</h1>'+ '<div id="bodyContent">'+ '<p><b>DIGNIDAD.</b> , — 16 de  Noviembre de  1963.  Dirección:  26 Calle  Po- niente Casa  No  2122  Colonia  Dina.  Días y horas  de  reuniones: De Lunes a Domingo de 7:00 a 9:00 p.m. Miembros asistentes: 7 Hom- bres.</p>'+ '</div>'+ '</div>'; var infowindow699 = new google.maps.InfoWindow({ content: contentString699 });   
        //markers  
        var marker699 = new google.maps.Marker({ position: point699, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "699.DIGNIDAD." }); 
        //information for  
        function goToLink699() { infowindow699.open(map,marker699);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker699, 'click', goToLink699); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 700  
        //positions 
        var point700 = new google.maps.LatLng(13.689116, -89.187839); var contentString700 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">DIVINA MISERICORDIA.</h1>'+ '<div id="bodyContent">'+ '<p><b>DIVINA MISERICORDIA.</b> , — 21 de  Enero  de  2004.  Dirección:  Co- lonia América,  Avenida  Cuba. Local externo Iglesia San Antonio  de Padua Barrio San  Jacinto. Días y horas  de  reuniones: De  Lunes  a Domingo de  6:00  a 8:00  p.m.  Miembros asistentes: 35 Hombres y 1 Mujer.</p>'+ '</div>'+ '</div>'; var infowindow700 = new google.maps.InfoWindow({ content: contentString700 });   
        //markers  
        var marker700 = new google.maps.Marker({ position: point700, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "700.DIVINA MISERICORDIA." }); 
        //information for  
        function goToLink700() { infowindow700.open(map,marker700);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker700, 'click', goToLink700); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 701  
        //positions 
        var point701 = new google.maps.LatLng(13.682192, -89.188305); var contentString701 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">DIVINO PODER.</h1>'+ '<div id="bodyContent">'+ '<p><b>DIVINO PODER.</b> , — 24 de  Diciembre de  2009.  Dirección:  Colonia Manzano y Calle  Vilanova Casa  Nº 13.  Días y horas  de  reuniones: De  Lunes  a Domingo de  6.00  a 8.00  p.m.  Miembros asistentes: 7 Hombres y 2 Mujeres.</p>'+ '</div>'+ '</div>'; var infowindow701 = new google.maps.InfoWindow({ content: contentString701 });   
        //markers  
        var marker701 = new google.maps.Marker({ position: point701, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "701.DIVINO PODER." }); 
        //information for  
        function goToLink701() { infowindow701.open(map,marker701);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker701, 'click', goToLink701); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 702  
        //positions 
        var point702 = new google.maps.LatLng(13.710239, -89.264957); var contentString702 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">EL CARMEN.</h1>'+ '<div id="bodyContent">'+ '<p><b>EL CARMEN.</b> , — 17 de Enero de 1972. Dirección:  Final Paseo Gene- ral Escalón, Calle La Ronda,  Cantón El Carmen Zona 11. Días y horas de  reuniones: De Lunes a Domingo de  6:30 a 8:30 p.m.  Miembros asistentes: 22 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow702 = new google.maps.InfoWindow({ content: contentString702 });   
        //markers  
        var marker702 = new google.maps.Marker({ position: point702, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "702.EL CARMEN." }); 
        //information for  
        function goToLink702() { infowindow702.open(map,marker702);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker702, 'click', goToLink702); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 703  
        //positions 
        var point703 = new google.maps.LatLng(13.688901, -89.201497); var contentString703 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">FE Y ACCIÓN.</h1>'+ '<div id="bodyContent">'+ '<p><b>FE Y ACCIÓN.</b> , — 29 de Octubre de 1973. Dirección: Calle Francisco Meléndez Nº 208. Días y horas  de  reuniones: De Lunes a Domingo de 5:00 a 7:00 p.m.  Miembros asistentes: 14 Hombres y 4 Mujeres.</p>'+ '</div>'+ '</div>'; var infowindow703 = new google.maps.InfoWindow({ content: contentString703 });   
        //markers  
        var marker703 = new google.maps.Marker({ position: point703, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "703.FE Y ACCIÓN." }); 
        //information for  
        function goToLink703() { infowindow703.open(map,marker703);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker703, 'click', goToLink703); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 704  
        //positions 
        var point704 = new google.maps.LatLng(13.716210, -89.094759); var contentString704 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">FE Y ESPERANZA.</h1>'+ '<div id="bodyContent">'+ '<p><b>FE Y ESPERANZA.</b> , — 07 de  Septiembre de  1988.  Dirección  Final Calle, Asilo Sara, Colonia  San Cristóbal Nº 1 Pasaje  2 S.S. Nº 4. Días y horas  de  reuniones: De  Lunes  a  Domingo de  6:00  a  8:00  p.m. Miembros asistentes: 17 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow704 = new google.maps.InfoWindow({ content: contentString704 });   
        //markers  
        var marker704 = new google.maps.Marker({ position: point704, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "704.FE Y ESPERANZA." }); 
        //information for  
        function goToLink704() { infowindow704.open(map,marker704);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker704, 'click', goToLink704); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 705  
        //positions 
        var point705 = new google.maps.LatLng(13.704701, -89.219705); var contentString705 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">FLOR BLANCA (MEDIODIA).</h1>'+ '<div id="bodyContent">'+ '<p><b>FLOR BLANCA (MEDIODIA).</b> , — 27 de Octubre de 1998. Dirección. Alameda Juan  Pablo  II, Avenida  Bernal,  cerca  del  Colegio García Flamenco. Días y horas de reuniones: De Lunes a Domingo de 12:00 m.d.  a 2:00 p.m.  Miembros asistentes: 45 Hombres y 6 Mujeres.</p>'+ '</div>'+ '</div>'; var infowindow705 = new google.maps.InfoWindow({ content: contentString705 });   
        //markers  
        var marker705 = new google.maps.Marker({ position: point705, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "705.FLOR BLANCA (MEDIODIA)." }); 
        //information for  
        function goToLink705() { infowindow705.open(map,marker705);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker705, 'click', goToLink705); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 706  
        //positions 
        var point706 = new google.maps.LatLng(13.696793, -89.220777); var contentString706 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">FLOR BLANCA (NOCHE).</h1>'+ '<div id="bodyContent">'+ '<p><b>FLOR BLANCA (NOCHE).</b> , — 16 de  Julio  de  1984.  Dirección:  Co- mercial  El Rosal, Local 12 Poniente Calle El Progreso. Días y horas de  reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m.  Miembros asistentes: 20 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow706 = new google.maps.InfoWindow({ content: contentString706 });   
        //markers  
        var marker706 = new google.maps.Marker({ position: point706, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "706.FLOR BLANCA (NOCHE)." }); 
        //information for  
        function goToLink706() { infowindow706.open(map,marker706);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker706, 'click', goToLink706); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 707  
        //positions 
        var point707 = new google.maps.LatLng(13.692809, -89.227649); var contentString707 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">FORTALEZA.</h1>'+ '<div id="bodyContent">'+ '<p><b>FORTALEZA.</b> , — 08 de  Febrero de  1969.  Dirección:  Final Boulevard Venezuela Nº 65 Sector  Munguía  Comunidad Fortaleza. Días y ho- ras de  reuniones: De Lunes a Domingo de  7:00 a 9:00 p.m.  Miem- bros  asistentes: 12 Hombres y 1 Mujer.</p>'+ '</div>'+ '</div>'; var infowindow707 = new google.maps.InfoWindow({ content: contentString707 });   
        //markers  
        var marker707 = new google.maps.Marker({ position: point707, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "707.FORTALEZA." }); 
        //information for  
        function goToLink707() { infowindow707.open(map,marker707);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker707, 'click', goToLink707); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 708  
        //positions 
        var point708 = new google.maps.LatLng(13.709324, -89.188098); var contentString708 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">GÉNESIS.</h1>'+ '<div id="bodyContent">'+ '<p><b>GÉNESIS.</b> , — 13 de  Febrero de  2006.  Dirección:  Iglesia  Evangélica El Dios de  Israel, Barrio San Miguelito. Días y horas  de  reuniones:, Lunes,  Martes, Jueves y Domingo de  6:30  a 8:30  p.m.  Miembros asistentes: 14 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow708 = new google.maps.InfoWindow({ content: contentString708 });   
        //markers  
        var marker708 = new google.maps.Marker({ position: point708, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "708.GÉNESIS." }); 
        //information for  
        function goToLink708() { infowindow708.open(map,marker708);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker708, 'click', goToLink708); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 709  
        //positions 
        var point709 = new google.maps.LatLng(13.711668, -89.207084); var contentString709 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">GENTE JOVEN.</h1>'+ '<div id="bodyContent">'+ '<p><b>GENTE JOVEN.</b> , — 15  de  Septiembre de  1975.  Dirección:  Boulevard Los Héroes frente  anexo Hospital  Benjamín  Bloom,  Condominio Los Héroes. Días y horas  de  reuniones: De Lunes a Sábado de 6:30 a 8:30 p.m.  Miembros asistentes: 19 Hombres y 1 Mujer.</p>'+ '</div>'+ '</div>'; var infowindow709 = new google.maps.InfoWindow({ content: contentString709 });   
        //markers  
        var marker709 = new google.maps.Marker({ position: point709, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "709.GENTE JOVEN." }); 
        //information for  
        function goToLink709() { infowindow709.open(map,marker709);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker709, 'click', goToLink709); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 710  
        //positions 
        var point710 = new google.maps.LatLng(13.720103, -89.216382); var contentString710 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">H.M.C.  26  DE OCTUBRE.</h1>'+ '<div id="bodyContent">'+ '<p><b>H.M.C.  26  DE OCTUBRE.</b> , — 26  de  octubre de  2009.  Dirección: Hospital  Militar. Días y horas  de reuniones: Martes  y Jueves de 1:00 a 2:00 p. m. Miembros asistentes: 12 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow710 = new google.maps.InfoWindow({ content: contentString710 });   
        //markers 
         var marker710 = new google.maps.Marker({ position: point710, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "710.H.M.C.  26  DE OCTUBRE." }); 
         //information for  
         function goToLink710() { infowindow710.open(map,marker710);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker710, 'click', goToLink710); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 711  
        //positions 
        var point711 = new google.maps.LatLng(13.683616, -89.215695); var contentString711 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">IBERIA 16 DE DICIEMBRE.</h1>'+ '<div id="bodyContent">'+ '<p><b>IBERIA 16 DE DICIEMBRE.</b> , — 16 de Diciembre de 1965. Dirección: Calle Renovación, Colonia  Iberia,  Sección  “B” Locales 1 y 2. Días y horas de reuniones: De Lunes a Domingo de 7:00 a 9:00 p.m. Miem- bros  asistentes: 12 Hombres y 1 Mujer.</p>'+ '</div>'+ '</div>'; var infowindow711 = new google.maps.InfoWindow({ content: contentString711 });   
        //markers  
        var marker711 = new google.maps.Marker({ position: point711, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "711.IBERIA 16 DE DICIEMBRE." }); 
        //information for  
        function goToLink711() { infowindow711.open(map,marker711);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker711, 'click', goToLink711); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 712  
        //positions 
        var point712 = new google.maps.LatLng(13.691724, -89.201138); var contentString712 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">IBERIA 31  DE MAYO.</h1>'+ '<div id="bodyContent">'+ '<p><b>IBERIA 31  DE MAYO.</b> , — 31 de  Mayo de  2003.  Dirección:  18 Calle Poniente Apartamento C-4 Condominio Iberia frente  a Cine Iberia, Barrio Santa  Anita. Días y horas  de reuniones: De Lunes a Domingo de 6:30 a 8:30 p.m.  Miembros asistentes: 20 Hombres y 4 Mujeres.</p>'+ '</div>'+ '</div>'; var infowindow712 = new google.maps.InfoWindow({ content: contentString712 });   
        //markers  
        var marker712 = new google.maps.Marker({ position: point712, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "712.IBERIA 31  DE MAYO." }); 
        //information for  
        function goToLink712() { infowindow712.open(map,marker712);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker712, 'click', goToLink712); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 713  
        //positions 
        var point713 = new google.maps.LatLng(13.709921, -89.200859); var contentString713 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">INDEPENDENCIA 10 DE SEPTIEMBRE “LOS JUZGADOS”.</h1>'+ '<div id="bodyContent">'+ '<p><b>INDEPENDENCIA 10 DE SEPTIEMBRE “LOS JUZGADOS”.</b> , — 10 de Septiembre de 1991.  Dirección:  Avenida  Max, Block Nº 132, Co- lonia Médica  local Comisión Servicio Civil, Atrás de  Los Juzgados. Días y horas  de  reuniones: De Lunes a Viernes de  1:00 a 2:00 p.m. Miembros asistentes: 15 Hombres y 1 Mujer.</p>'+ '</div>'+ '</div>'; var infowindow713 = new google.maps.InfoWindow({ content: contentString713 });   
        //markers  
        var marker713 = new google.maps.Marker({ position: point713, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "713.INDEPENDENCIA 10 DE SEPTIEMBRE “LOS JUZGADOS”." }); 
        //information for  
        function goToLink713() { infowindow713.open(map,marker713);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker713, 'click', goToLink713); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 714  
        //positions 
        var point714 = new google.maps.LatLng(13.710351, -89.231739); var contentString714 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">LA 75.</h1>'+ '<div id="bodyContent">'+ '<p><b>LA 75.</b> , —  10  de  Octubre de  1987.  Dirección:  75ª  Avenida  Norte, Centro Comercial Escalón Norte  2, Local Nº 2 –7 Prolongación Juan Pablo  II. Días y horas  de  reuniones: De Lunes a Domingo de  7:00 a 9:00 p.m.  Miembros asistentes: 15 Hombres y 5 Mujeres.</p>'+ '</div>'+ '</div>'; var infowindow714 = new google.maps.InfoWindow({ content: contentString714 });   
        //markers  
        var marker714 = new google.maps.Marker({ position: point714, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "714.LA 75." }); 
        //information for  
        function goToLink714() { infowindow714.open(map,marker714);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker714, 'click', goToLink714); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 715  
        //positions 
        var point715 = new google.maps.LatLng(13.702052, -89.233861); var contentString715 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">LA ESCALÓN.</h1>'+ '<div id="bodyContent">'+ '<p><b>LA ESCALÓN.</b> , —11 de  Septiembre de  1980.  Dirección:  Paseo Ge- neral  Escalón,  Edificio Beethoven Local 12. Días y horas  de  reunio- nes: Lunes, Miércoles, Viernes y Sábado de 7:30 a 9:30 p.m.  Miem- bros  asistentes: 25 Hombres y 3 Mujeres.</p>'+ '</div>'+ '</div>'; var infowindow715 = new google.maps.InfoWindow({ content: contentString715 });   
        //markers  
        var marker715 = new google.maps.Marker({ position: point715, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "715.LA ESCALÓN." }); 
        //information for  
        function goToLink715() { infowindow715.open(map,marker715);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker715, 'click', goToLink715); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 716  
        //positions 
        var point716 = new google.maps.LatLng(13.706878, -89.189618); var contentString716 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">LA ESPÍGA.</h1>'+ '<div id="bodyContent">'+ '<p><b>LA ESPÍGA.</b> , — 04 de Abril de 2002.  Dirección:  Colonia  Santa  Eugenia Pasaje  Nº 1, Casa  116,  Barrio San Miguelito. Teléfono: 2221— 1186.  Días y horas  de  reuniones: De  Lunes  a Domingo de  6:00  a 8:00 p.m.  Miembros asistentes: 56 Hombres y 5 Mujeres.</p>'+ '</div>'+ '</div>'; var infowindow716 = new google.maps.InfoWindow({ content: contentString716 });   
        //markers  
        var marker716 = new google.maps.Marker({ position: point716, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "716.LA ESPÍGA." }); 
        //information for  
        function goToLink716() { infowindow716.open(map,marker716);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker716, 'click', goToLink716); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 717  
        //positions 
        var point717 = new google.maps.LatLng(13.690500, -89.213168); var contentString717 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">LA LUZ.</h1>'+ '<div id="bodyContent">'+ '<p><b>LA LUZ.</b> , — 18  de  Agosto de  1962.  Dirección:  20  Calle  Poniente Pasaje  2 de  Abril Nº  117  Colonia  Luz. Días y horas  de  reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m.  Miembros asistentes: 18 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow717 = new google.maps.InfoWindow({ content: contentString717 });   
        //markers  
        var marker717 = new google.maps.Marker({ position: point717, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "717.LA LUZ." }); 
        //information for  
        function goToLink717() { infowindow717.open(map,marker717);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker717, 'click', goToLink717); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 718  
        //positions 
        var point718 = new google.maps.LatLng(13.684538, -89.234094); var contentString718 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">LA OTRA OPCIÓN.</h1>'+ '<div id="bodyContent">'+ '<p><b>LA OTRA OPCIÓN.</b> , —21  de  Septiembre de  2005.  Dirección:  Con- dominio Feria  Rosa,  Manuel  José Arce,  Nº  203-6  Sobre  Carretera Panamericana. Días y horas  de  reuniones:  De Lunes a Domingo de 6:30 a 8:00 p.m.  Miembros asistentes: 18 Hombres y 6 Mujeres.</p>'+ '</div>'+ '</div>'; var infowindow718 = new google.maps.InfoWindow({ content: contentString718 });   
        //markers  
        var marker718 = new google.maps.Marker({ position: point718, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "718.LA OTRA OPCIÓN." }); 
        //information for  
        function goToLink718() { infowindow718.open(map,marker718);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker718, 'click', goToLink718); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 719  
        //positions 
        var point719 = new google.maps.LatLng(13.710675, -89.205615); var contentString719 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">LA SOLUCIÓN.</h1>'+ '<div id="bodyContent">'+ '<p><b>LA SOLUCIÓN.</b> , — 09 de  Noviembre de  1993.  Dirección  12a   Calle Poniente Nº 119  Local 4 y La esquina. Días y horas  de  reuniones: De  Lunes  a Domingo de  3:00  a 5:00  p.m.  Miembros asistentes: 8 Hombres y 3 Mujeres.</p>'+ '</div>'+ '</div>'; var infowindow719 = new google.maps.InfoWindow({ content: contentString719 });   
        //markers  
        var marker719 = new google.maps.Marker({ position: point719, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "719.LA SOLUCIÓN." }); 
        //information for  
        function goToLink719() { infowindow719.open(map,marker719);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker719, 'click', goToLink719); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 720  
        //positions
        var point720 = new google.maps.LatLng(13.690442, -89.236246); var contentString720 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">LAS PALMAS.</h1>'+ '<div id="bodyContent">'+ '<p><b>LAS PALMAS.</b> , — 28 de Agosto de 1966.  Dirección:  Comunidad Las Palmas,  Calle Padre Fermín  Sainz Parcela  Nº 15 Casa  Nº 25. Días y horas de reuniones: De Lunes a Domingo de 7:00 a 9:00 p.m. Miem- bros  asistentes: 12 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow720 = new google.maps.InfoWindow({ content: contentString720 });   
        //markers  
        var marker720 = new google.maps.Marker({ position: point720, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "720.LAS PALMAS." }); 
        //information for  
        function goToLink720() { infowindow720.open(map,marker720);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker720, 'click', goToLink720); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 721  
        //positions 
        var point721 = new google.maps.LatLng(13.682334, -89.227924); var contentString721 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">LOS PRÓCERES.</h1>'+ '<div id="bodyContent">'+ '<p><b>LOS PRÓCERES.</b> , — 04  de  Abril de  2003.  Dirección:  Local Nº  12, 2ª Planta,  Edificio Delca  adyacente a Boulevard Los Próceres. Días y horas  de  reuniones: De  Lunes  a Sábado de  7:00  a 9:00  p.m.  y Domingo de  6:00  a 8:00  p.m.  Miembros asistentes: 24 Hombres y 6 Mujeres.</p>'+ '</div>'+ '</div>'; var infowindow721 = new google.maps.InfoWindow({ content: contentString721 });   
        //markers  
        var marker721 = new google.maps.Marker({ position: point721, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "721.LOS PRÓCERES." }); 
        //information for  
        function goToLink721() { infowindow721.open(map,marker721);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker721, 'click', goToLink721); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 722  

        //positions 
        var point722 = new google.maps.LatLng(13.721977, -89.208298); var contentString722 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">LOURDES.</h1>'+ '<div id="bodyContent">'+ '<p><b>LOURDES.</b> , — 05 de Enero de 1961.  Dirección:  Centro Urbano  Lour- des Edificio Comercial Local Nº 4. Días y horas  de reuniones: De Lu- nes  a Domingo de  7:00 a 9:00 p.m.  Miembros asistentes: 10 Hom- bres.</p>'+ '</div>'+ '</div>'; var infowindow722 = new google.maps.InfoWindow({ content: contentString722 });   
        //markers  
        var marker722 = new google.maps.Marker({ position: point722, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "722.LOURDES." }); 
        //information for  
        function goToLink722() { infowindow722.open(map,marker722);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker722, 'click', goToLink722); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 723  
        //positions 
        var point723 = new google.maps.LatLng(13.716579, -89.220259); var contentString723 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">LUZ DE BILL.</h1>'+ '<div id="bodyContent">'+ '<p><b>LUZ DE BILL.</b> , — 02 de  Julio de  1972.  Dirección:  Calle a San Anto- nio Abad  Pasaje  Melara  Nº 2 Casa  No 6. Días y horas  de  reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m.  Miembros asistentes: 12 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow723 = new google.maps.InfoWindow({ content: contentString723 });   
        //markers  
        var marker723 = new google.maps.Marker({ position: point723, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "723.LUZ DE BILL." }); 
        //information for  
        function goToLink723() { infowindow723.open(map,marker723);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker723, 'click', goToLink723); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 724  
        //positions 
        var point724 = new google.maps.LatLng(13.639718, -89.184050); var contentString724 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">MEXICO.</h1>'+ '<div id="bodyContent">'+ '<p><b>MEXICO.</b> , — 05 de  Septiembre de  1971.  Dirección:  Carretera a Los Planes  de Renderos Km. 4 ½, Lote Nº 1, Colonia  México, San Salva- dor. Días y horas  de reuniones: De Lunes a Domingo de 7:00 a 9:00 p.m.  Miembros asistentes: 8 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow724 = new google.maps.InfoWindow({ content: contentString724 });   
        //markers  
        var marker724 = new google.maps.Marker({ position: point724, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "724.MEXICO." }); 
        //information for  
        function goToLink724() { infowindow724.open(map,marker724);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker724, 'click', goToLink724); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 725  
        //positions 
        var point725 = new google.maps.LatLng(13.676526, -89.200652); var contentString725 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">MILAGRO DE DIOS.</h1>'+ '<div id="bodyContent">'+ '<p><b>MILAGRO DE DIOS.</b> , — 22 de  Enero  de  1999.  Dirección:  Avenida Irazú y Calle Punta  Arenas N° 218 Colonia  Costa  Rica, San Salvador. Días y horas  de reuniones: De Lunes a Domingo de 6:30 a 8:30 p.m. Miembros asistentes: 10 Hombres y 1 Mujer.</p>'+ '</div>'+ '</div>'; var infowindow725 = new google.maps.InfoWindow({ content: contentString725 });   
        //markers  
        var marker725 = new google.maps.Marker({ position: point725, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "725.MILAGRO DE DIOS." }); 
        //information for  
        function goToLink725() { infowindow725.open(map,marker725);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker725, 'click', goToLink725); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 726  
        //positions 
        var point726 = new google.maps.LatLng(13.688250, -89.181925); var contentString726 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">MIRAFLORES.</h1>'+ '<div id="bodyContent">'+ '<p><b>MIRAFLORES.</b> , — 03 de  Mayo de  1972  Dirección:  Colonia  Miraflo- res, Calle Poniente Nº 6, Barrio San Jacinto. Días y horas  de reunio- nes: De Lunes a Domingo de 7:00 a 9:00 p.m. Miembros asistentes: 8 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow726 = new google.maps.InfoWindow({ content: contentString726 });   
        //markers  
        var marker726 = new google.maps.Marker({ position: point726, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "726.MIRAFLORES." }); 
        //information for 
         function goToLink726() { infowindow726.open(map,marker726);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker726, 'click', goToLink726); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 727  
        //positions 
        var point727 = new google.maps.LatLng(13.718310, -89.227556); var contentString727 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">MIRALVALLE.</h1>'+ '<div id="bodyContent">'+ '<p><b>MIRALVALLE.</b> , — 01 de Julio de 1970. Dirección:  Colonia  Miralvalle, Avenida  Los Bambúes Pasaje  Nerio  Nº 10. Días y horas  de  reunio- nes: De Lunes a Domingo de 7:00 a 9:00 p.m. Miembros asistentes: 12 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow727 = new google.maps.InfoWindow({ content: contentString727 });   
        //markers  
        var marker727 = new google.maps.Marker({ position: point727, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "727.MIRALVALLE." }); 
        //information for  
        function goToLink727() { infowindow727.open(map,marker727);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker727, 'click', goToLink727); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 728  
        //positions 
        var point728 = new google.maps.LatLng(13.683617, -89.189434); var contentString728 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NACE UNA NUEVA ESPERANZA.</h1>'+ '<div id="bodyContent">'+ '<p><b>NACE UNA NUEVA ESPERANZA.</b> , — 22 de  Junio  de  2011.  Direc- ción: Calle México N° 817, entre Avenida  Cuba  y Avenida  El Cocal. Barrio San Jacinto San Salvador. Días y horas  de  reuniones: Lunes, Sábado y Domingo de  6:00  a  8:00  p.m.  Miembros asistentes: 8 Hombres y 4 Mujeres.</p>'+ '</div>'+ '</div>'; var infowindow728 = new google.maps.InfoWindow({ content: contentString728 });   
        //markers  
        var marker728 = new google.maps.Marker({ position: point728, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "728.NACE UNA NUEVA ESPERANZA." }); 
        //information for  
        function goToLink728() { infowindow728.open(map,marker728);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker728, 'click', goToLink728); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 729  
        //positions 
        var point729 = new google.maps.LatLng(13.710270, -89.206195); var contentString729 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NOS DECIDIMOS.</h1>'+ '<div id="bodyContent">'+ '<p><b>NOS DECIDIMOS.</b> , — 22 de Junio  de 1972.  Dirección:  Final 21ª Ca- lle Poniente Costado Norte  de Los Juzgados Condominio Saavedra Edificio B 2-1. Días y horas  de  reuniones: De Lunes a Domingo de 7:00 a 9:00 p.m.  Miembros asistentes: 20 Hombres y 1 Mujer.</p>'+ '</div>'+ '</div>'; var infowindow729 = new google.maps.InfoWindow({ content: contentString729 });   
        //markers  
        var marker729 = new google.maps.Marker({ position: point729, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "729.NOS DECIDIMOS." }); 
        //information for  
        function goToLink729() { infowindow729.open(map,marker729);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker729, 'click', goToLink729); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 730  
        //positions 
        var point730 = new google.maps.LatLng(13.709803, -89.202005); var contentString730 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NUESTRA BUSQUEDA.</h1>'+ '<div id="bodyContent">'+ '<p><b>NUESTRA BUSQUEDA.</b> , —  10 Junio  2012.  Dirección:  Edificios Clí- nicos Médicos, Poniente. Local N° 203 y 25 Avenida  Norte, Pasaje San Fernando S.S. Días y horas de reuniones: De Lunes a Sábado de 6:00 a 8:00 p.m.  Miembros asistentes: 12 Hombres y 2 Mujer.</p>'+ '</div>'+ '</div>'; var infowindow730 = new google.maps.InfoWindow({ content: contentString730 });   
        //markers  
        var marker730 = new google.maps.Marker({ position: point730, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "730.NUESTRA BUSQUEDA." }); 
        //information for  
        function goToLink730() { infowindow730.open(map,marker730);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker730, 'click', goToLink730); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 731  
        //positions 
        var point731 = new google.maps.LatLng(13.710985, -89.231125); var contentString731 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NUESTRO BIENESTAR.</h1>'+ '<div id="bodyContent">'+ '<p><b>NUESTRO BIENESTAR.</b> , — 14  de  Noviembre de  1966.  Dirección: Final Alameda Juan  Pablo  II y 75 Avenida  Norte; entre Despensa de Don Juan  y Pasaje  San José, Casa  Nº 4. Días y horas  de  reuniones: De Lunes a Domingo de  6:30 a 8:30 p.m.  Miembros asistentes: 14 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow731 = new google.maps.InfoWindow({ content: contentString731 });   
        //markers  
        var marker731 = new google.maps.Marker({ position: point731, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "731.NUESTRO BIENESTAR." }); 
        //information for  
        function goToLink731() { infowindow731.open(map,marker731);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker731, 'click', goToLink731); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 732  
        //positions 
        var point732 = new google.maps.LatLng(13.708354, -89.188663); var contentString732 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NUESTRO HOGAR.</h1>'+ '<div id="bodyContent">'+ '<p><b>NUESTRO HOGAR.</b> , — 18 de  Octubre de  1981  Dirección:  Colonia Santa  Eugenia 2a   Avenida  Norte  Local B Casa  C. Días y horas  de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m. Miembros asis- tentes: 8 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow732 = new google.maps.InfoWindow({ content: contentString732 });   
        //markers  
        var marker732 = new google.maps.Marker({ position: point732, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "732.NUESTRO HOGAR." }); 
        //information for  
        function goToLink732() { infowindow732.open(map,marker732);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker732, 'click', goToLink732); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 733  
        //positions 
        var point733 = new google.maps.LatLng(13.658065, -89.220610); var contentString733 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NUEVA VIDA 02  DE ENERO.</h1>'+ '<div id="bodyContent">'+ '<p><b>NUEVA VIDA 02  DE ENERO.</b> , — 02 de  Enero  de  1979.  Dirección Colonia Brisas de Candelaria N° 26 Calle Principal y Pasaje  Nº 4, S.S. Días horas  de  reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m. Miembros asistentes: 9 Hombres y 1 Mujer.</p>'+ '</div>'+ '</div>'; var infowindow733 = new google.maps.InfoWindow({ content: contentString733 });   
        //markers  
        var marker733 = new google.maps.Marker({ position: point733, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "733.NUEVA VIDA 02  DE ENERO." }); 
        //information for  
        function goToLink733() { infowindow733.open(map,marker733);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker733, 'click', goToLink733); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 734  
        //positions 
        var point734 = new google.maps.LatLng(13.701415, -89.212525); var contentString734 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NUEVA VIDA 03.</h1>'+ '<div id="bodyContent">'+ '<p><b>NUEVA VIDA 03.</b> , —  26 de  Mayo  de  2005.  Dirección:  18 Avenida Norte, Pasaje  San Pedro Nº 574. Días y horas  de  reuniones: De Lu- nes  a Domingo de  6:00 a 8:00 p.m.  Miembros asistentes: 20 Hom- bres  y 5 Mujeres.</p>'+ '</div>'+ '</div>'; var infowindow734 = new google.maps.InfoWindow({ content: contentString734 });   
        //markers  
        var marker734 = new google.maps.Marker({ position: point734, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "734.NUEVA VIDA 03." }); 
        //information for  
        function goToLink734() { infowindow734.open(map,marker734);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker734, 'click', goToLink734); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 735  
        //positions 
        var point735 = new google.maps.LatLng(13.711611, -89.244384); var contentString735 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NUEVO 06  DE MARZO.</h1>'+ '<div id="bodyContent">'+ '<p><b>NUEVO 06  DE MARZO.</b> , — 06 de  Marzo de  2004.  Dirección:  Calle Principal Colonia  Los Arcos Nº 1300 Barrio Santa Anita. Días y horas de reuniones: De Lunes a Domingo (Mediodía)  de 12.30 a 2.30 p.m. (Noche)  de  7:00  a 9:00  p.m.  Miembros asistentes: 21  Hombres 2 Mujeres.</p>'+ '</div>'+ '</div>'; var infowindow735 = new google.maps.InfoWindow({ content: contentString735 });   
        //markers  
        var marker735 = new google.maps.Marker({ position: point735, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "735.NUEVO 06  DE MARZO." }); 
        //information for  
        function goToLink735() { infowindow735.open(map,marker735);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker735, 'click', goToLink735); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 736  
        //positions 
        var point736 = new google.maps.LatLng(13.706195, -89.190954); var contentString736 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NUEVO CENTRAL 94.</h1>'+ '<div id="bodyContent">'+ '<p><b>NUEVO CENTRAL 94.</b> , —  05 de  Octubre de  1994.  Dirección:  Ave- nida España Nº 432. Días y horas  de reuniones: De Lunes a Sábado de 5:00 a7:00  pm. Miembros asistentes: 10 Hombres y 2 Mujeres.</p>'+ '</div>'+ '</div>'; var infowindow736 = new google.maps.InfoWindow({ content: contentString736 });   
        //markers  
        var marker736 = new google.maps.Marker({ position: point736, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "736.NUEVO CENTRAL 94." }); 
        //information for  
        function goToLink736() { infowindow736.open(map,marker736);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker736, 'click', goToLink736); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 737  
        //positions 
        var point737 = new google.maps.LatLng(13.642209, -89.182122); var contentString737 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NUEVO DESPERTAR.</h1>'+ '<div id="bodyContent">'+ '<p><b>NUEVO DESPERTAR.</b> , — 05 de  Octubre de  1980.  Dirección:  Carre- tera  a Panchimalco Km. 10 ½ Planes  de  Renderos. Días y horas  de reuniones: De Lunes a Domingo de 7:00 a 9:00 p.m. Miembros asis- tentes: 15 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow737 = new google.maps.InfoWindow({ content: contentString737 });   
        //markers  
        var marker737 = new google.maps.Marker({ position: point737, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "737.NUEVO DESPERTAR." }); 
        //information for  
        function goToLink737() { infowindow737.open(map,marker737);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker737, 'click', goToLink737); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 738  
        //positions 
        var point738 = new google.maps.LatLng(13.694351, -89.191405); var contentString738 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NUEVO  MILENIO.</h1>'+ '<div id="bodyContent">'+ '<p><b>NUEVO  MILENIO.</b> , — 22  de  Mayo  de  1998.  Dirección:  10ª  Calle Oriente Nº  1222,  Barrio  San  Jacinto. Días  y horas  de  reuniones: De Lunes a Domingo de  4:00 a 6:00 p.m.  Miembros asistentes: 18 Hombres y 2 Mujeres.</p>'+ '</div>'+ '</div>'; var infowindow738 = new google.maps.InfoWindow({ content: contentString738 });   
        //markers  
        var marker738 = new google.maps.Marker({ position: point738, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "738.NUEVO  MILENIO." }); 
        //information for  
        function goToLink738() { infowindow738.open(map,marker738);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker738, 'click', goToLink738); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 739  
        //positions 
        var point739 = new google.maps.LatLng(13.698274, -89.230995); var contentString739 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NUEVO RENACER 1999 (TABERNACULO DE ISRAEL).</h1>'+ '<div id="bodyContent">'+ '<p><b>NUEVO RENACER 1999 (TABERNACULO DE ISRAEL).</b> , — 22 de Junio  de  1999.  Dirección:  Iglesia  del  Tabernáculo Bíblico Bautista Amigos de Israel, Colonia Escalón.  Días y horas  de reuniones: Lunes y Martes  de  6:00 a 8:00 p.m.  y Sábado de  3:00 a 5:00 p.m.  Miem- bros  asistentes: 15 Hombres y 4 Mujeres.</p>'+ '</div>'+ '</div>'; var infowindow739 = new google.maps.InfoWindow({ content: contentString739 });   
        //markers  
        var marker739 = new google.maps.Marker({ position: point739, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "739.NUEVO RENACER 1999 (TABERNACULO DE ISRAEL)." }); 
        //information for  
        function goToLink739() { infowindow739.open(map,marker739);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker739, 'click', goToLink739); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 740  
        //positions 
        var point740 = new google.maps.LatLng(13.783006, -89.173102); var contentString740 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">PANORAMICO 10  DE OCTUBRE.</h1>'+ '<div id="bodyContent">'+ '<p><b>PANORAMICO 10  DE OCTUBRE.</b> , — 10 de  Octubre de  1982.  Di- rección:  Reparto Santa  Marta  Nº  2 Pasaje  4 Nº  115  Block C San Jacinto. Días y horas  de  reuniones: De Lunes a Domingo de  7:00 a 9:00 p.m.  Miembros asistentes: 24 hombre y 1 Mujer.</p>'+ '</div>'+ '</div>'; var infowindow740 = new google.maps.InfoWindow({ content: contentString740 });   
        //markers  
        var marker740 = new google.maps.Marker({ position: point740, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "740.PANORAMICO 10  DE OCTUBRE." }); 
        //information for  
        function goToLink740() { infowindow740.open(map,marker740);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker740, 'click', goToLink740); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 741  
        //positions 
        var point741 = new google.maps.LatLng(13.705954, -89.181442); var contentString741 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">PLAZUELA AYALA.</h1>'+ '<div id="bodyContent">'+ '<p><b>PLAZUELA AYALA.</b> , — 04 de  Agosto de  1962.  Dirección:  Calle Ta- marindo final 24ª Avenida  Norte  Nº 223. Días y horas  de reuniones: De Lunes a Domingo de  7:00 a 9:00 p.m.  Miembros asistentes: 10 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow741 = new google.maps.InfoWindow({ content: contentString741 });   
        //markers  
        var marker741 = new google.maps.Marker({ position: point741, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "741.PLAZUELA AYALA." }); 
        //information for  
        function goToLink741() { infowindow741.open(map,marker741);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker741, 'click', goToLink741); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 742  
        //positions 
        var point742 = new google.maps.LatLng(13.678206, -89.203051); var contentString742 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">PURA VIDA.</h1>'+ '<div id="bodyContent">'+ '<p><b>PURA VIDA.</b> , — 28 de  Febrero de  1986.  Dirección:  Colonia  Lencas, Pasaje  Tolteca, Calle  Turrialba  Nº  127.  Días y horas  de  reuniones: De  Lunes  a Domingo de  6:30  a 8:30  p.m.  Miembros asistentes: 4 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow742 = new google.maps.InfoWindow({ content: contentString742 });   
        //markers  
        var marker742 = new google.maps.Marker({ position: point742, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "742.PURA VIDA." }); 
        //information for  
        function goToLink742() { infowindow742.open(map,marker742);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker742, 'click', goToLink742); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 743  
        //positions 
        var point743 = new google.maps.LatLng(13.688359, -89.181855); var contentString743 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">QUINTO CAPÍTULO.</h1>'+ '<div id="bodyContent">'+ '<p><b>QUINTO CAPÍTULO.</b> , — 19 de Septiembre de 2005. Dirección: Final Calle Lara, Pasaje  Las Chulas Nº 58 Colonia Miraflores Barrio San Ja- cinto. Días horas  de reuniones: De Lunes a Domingo de 7:00 a 9:00 p.m.  Miembros asistentes: 15 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow743 = new google.maps.InfoWindow({ content: contentString743 });   
        //markers  
        var marker743 = new google.maps.Marker({ position: point743, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "743.QUINTO CAPÍTULO." }); 
        //information for  
        function goToLink743() { infowindow743.open(map,marker743);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker743, 'click', goToLink743); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 744  
        //positions 
        var point744 = new google.maps.LatLng(13.709098, -89.216376); var contentString744 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">REFLEXIONES.</h1>'+ '<div id="bodyContent">'+ '<p><b>REFLEXIONES.</b> , — 01 de Octubre de 2003. Dirección:  Colonia Mira- monte Avenida  Sierra Nevada Condominio CC Local 2. Días y horas de  reuniones: De  Lunes  a Viernes  de  6:00  a 8:00  p.m.  Sábado y Domingo de  3:00  a 4:00  p.m.  Miembros asistentes: 20 Hombres y 3 Mujeres.</p>'+ '</div>'+ '</div>'; var infowindow744 = new google.maps.InfoWindow({ content: contentString744 });   
        //markers  
        var marker744 = new google.maps.Marker({ position: point744, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "744.REFLEXIONES." }); 
        //information for  
        function goToLink744() { infowindow744.open(map,marker744);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker744, 'click', goToLink744); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 745  
        //positions 
        var point745 = new google.maps.LatLng(13.702421, -89.185407); var contentString745 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">RENACER 04  DE SEPTIEMBRE.</h1>'+ '<div id="bodyContent">'+ '<p><b>RENACER 04  DE SEPTIEMBRE.</b> , — 04 de  Septiembre 1995.  Direc- ción:12 Avenida  Norte  y 33 Calle Poniente Nº 1724, esquina opues- ta a La Parroquia Fátima,  Colonia  La Rábida.  Días y horas  de reunio- nes: De Lunes a Domingo de 6:30 a 8:30 p.m. Miembros asistentes: 17 Hombres y 3 Mujeres.</p>'+ '</div>'+ '</div>'; var infowindow745 = new google.maps.InfoWindow({ content: contentString745 });   
        //markers  
        var marker745 = new google.maps.Marker({ position: point745, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "745.RENACER 04  DE SEPTIEMBRE." }); 
        //information for  
        function goToLink745() { infowindow745.open(map,marker745);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker745, 'click', goToLink745); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 746  
        //positions 
        var point746 = new google.maps.LatLng(13.707930, -89.175837); var contentString746 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">RENACER 13  DE ABRIL.</h1>'+ '<div id="bodyContent">'+ '<p><b>RENACER 13  DE ABRIL.</b> , — 13 de  Abril de  1989.  Dirección:  Calle Concepción Pasaje  Merazo  Nº 5 Barrio Cisneros, La Garita  San Sal- vador.  Días y horas  de  reuniones: De Lunes  a Domingo de  5:30  a 7:30 p.m.  Miembros asistentes: 21 Hombres y 2 Mujeres.</p>'+ '</div>'+ '</div>'; var infowindow746 = new google.maps.InfoWindow({ content: contentString746 });   
        //markers  
        var marker746 = new google.maps.Marker({ position: point746, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "746.RENACER 13  DE ABRIL." }); 
        //information for  
        function goToLink746() { infowindow746.open(map,marker746);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker746, 'click', goToLink746); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 747  
        //positions 
        var point747 = new google.maps.LatLng(13.686916, -89.195898); var contentString747 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">RENACER 14 DE ENERO.</h1>'+ '<div id="bodyContent">'+ '<p><b>RENACER 14 DE ENERO.</b> , —14 de Enero  de 2012.  Dirección:  Calle 15 de  septiembre y Calle Perú,  N° 209.  Días y horas  de  reuniones: De Lunes a Domingo de  7:00 a 9:00 p.m.  Miembros asistentes: 10 Hombres y 2 Mujeres.</p>'+ '</div>'+ '</div>'; var infowindow747 = new google.maps.InfoWindow({ content: contentString747 });   
        //markers  
        var marker747 = new google.maps.Marker({ position: point747, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "747.RENACER 14 DE ENERO." }); 
        //information for  
        function goToLink747() { infowindow747.open(map,marker747);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker747, 'click', goToLink747); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 748  
        //positions 
        var point748 = new google.maps.LatLng(13.696858, -89.186987); var contentString748 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">RENACER 18 DE ABRIL.</h1>'+ '<div id="bodyContent">'+ '<p><b>RENACER 18 DE ABRIL.</b> , — 18 de Abril de 1979. Dirección:  4a  Calle Oriente Nº 935. Días y horas  de reuniones: De Lunes a Domingo de 7:00 a 9:00 p.m.  Miembros asistentes: 25 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow748 = new google.maps.InfoWindow({ content: contentString748 });   
        //markers  
        var marker748 = new google.maps.Marker({ position: point748, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "748.RENACER 18 DE ABRIL." }); 
        //information for  
        function goToLink748() { infowindow748.open(map,marker748);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker748, 'click', goToLink748); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 749  
        //positions 
        var point749 = new google.maps.LatLng(13.692260, -89.198245); var contentString749 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">RENACER 20  DE MAYO.</h1>'+ '<div id="bodyContent">'+ '<p><b>RENACER 20  DE MAYO.</b> , — 20 de  Mayo de  2001.  Dirección:  Bou- levard  Venezuela y 29 de  Agosto Condominio Plaza Barrios L-33-A. Días y horas  de reuniones: De Lunes a Domingo de 1:00 a 3:00 p.m. Miembros asistentes: 15 Hombres y 2 Mujeres.</p>'+ '</div>'+ '</div>'; var infowindow749 = new google.maps.InfoWindow({ content: contentString749 });   
        //markers  
        var marker749 = new google.maps.Marker({ position: point749, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "749.RENACER 20  DE MAYO." }); 
        //information for  
        function goToLink749() { infowindow749.open(map,marker749);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker749, 'click', goToLink749); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 750  
        //positions 
        var point750 = new google.maps.LatLng(13.685278, -89.237865); var contentString750 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">RENACER 21  DE AGOSTO (MOP).</h1>'+ '<div id="bodyContent">'+ '<p><b>RENACER 21  DE AGOSTO (MOP).</b> , — 21 de  Agosto de  2006.  Di- rección:  Km. 5 ½ Carretera a Santa  Tecla, Plantel La Lechuza local al Sur del Despacho Magisterial, Contiguo a Feria Internacional. Días y horas  de reuniones: De Lunes a Viernes de 12:40 a 1:30 p.m. Miem- bros  asistentes: 20 Hombres y 3 Mujeres.</p>'+ '</div>'+ '</div>'; var infowindow750 = new google.maps.InfoWindow({ content: contentString750 });   
        //markers  
        var marker750 = new google.maps.Marker({ position: point750, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "750.RENACER 21  DE AGOSTO (MOP)." }); 
        //information for  
        function goToLink750() { infowindow750.open(map,marker750);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker750, 'click', goToLink750); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 751  
        //positions 
        var point751 = new google.maps.LatLng(13.696806, -89.207670); var contentString751 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">RENACER 27  DE MARZO (BERMEJA).</h1>'+ '<div id="bodyContent">'+ '<p><b>RENACER 27  DE MARZO (BERMEJA).</b> , — 27 de  Marzo  de  2008. Dirección:  Boulevard Venezuela entre 29 y 31 Avenida  Sur Nº 1617 frente  a Baterías  Rayo. Días y horas  de  reuniones: De Lunes a Vier- nes de 12:15 a 1:30 p.m.  Miembros asistentes: 5 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow751 = new google.maps.InfoWindow({ content: contentString751 });   
        //markers  
        var marker751 = new google.maps.Marker({ position: point751, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "751.RENACER 27  DE MARZO (BERMEJA)." }); 
        //information for  
        function goToLink751() { infowindow751.open(map,marker751);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker751, 'click', goToLink751); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 752  
        //positions 
        var point752 = new google.maps.LatLng(13.704719, -89.228940); var contentString752 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">RENACER ISTMANIA.</h1>'+ '<div id="bodyContent">'+ '<p><b>RENACER ISTMANIA.</b> , — 04 de  Noviembre 2009.  Dirección:  Final 71  Avenida  Norte  Pasaje  Nº  6 Lote  1 Comunidad Istmania.  Días y horas  de  reuniones: De  Lunes  a Sábado de  06.00  a 08.00  p.m. Miembros asistentes: 11 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow752 = new google.maps.InfoWindow({ content: contentString752 });   
        //markers  
        var marker752 = new google.maps.Marker({ position: point752, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "752.RENACER ISTMANIA." }); 
        //information for  
        function goToLink752() { infowindow752.open(map,marker752);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker752, 'click', goToLink752); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 753  
        //positions 
        var point753 = new google.maps.LatLng(13.692427, -89.199019); var contentString753 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">RENACER LA BASÍLICA.</h1>'+ '<div id="bodyContent">'+ '<p><b>RENACER LA BASÍLICA.</b> , —03 de  Noviembre de  1988.  Dirección: Boulevard Venezuela Nº 618  “A”, Colonia  Ferrocarril.  Días y horas de  reuniones: De Lunes a Domingo de  6:30 a 8:30 p.m.  Miembros asistentes: 25 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow753 = new google.maps.InfoWindow({ content: contentString753 });   
        //markers  
        var marker753 = new google.maps.Marker({ position: point753, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "753.RENACER LA BASÍLICA." }); 
        //information for  
        function goToLink753() { infowindow753.open(map,marker753);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker753, 'click', goToLink753); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 754  
        //positions 
        var point754 = new google.maps.LatLng(13.713565, -89.214895); var contentString754 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">RESTAURACIÓN 13  DE ENERO.</h1>'+ '<div id="bodyContent">'+ '<p><b>RESTAURACIÓN 13  DE ENERO.</b> , — 13 de  Enero  de  1997.  Direc- ción: Alameda Juan  Pablo II y 18ª Avenida  Norte  Nº 435, contiguo a Clínica Mateo Llort. Días y horas de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.  Miembros asistentes: 50 Hombres y 5 Mujeres.</p>'+ '</div>'+ '</div>'; var infowindow754 = new google.maps.InfoWindow({ content: contentString754 });   
        //markers  
        var marker754 = new google.maps.Marker({ position: point754, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "754.RESTAURACIÓN 13  DE ENERO." }); 
        //information for  
        function goToLink754() { infowindow754.open(map,marker754);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker754, 'click', goToLink754); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 755  
        //positions 
        var point755 = new google.maps.LatLng(13.713565, -89.214895); var contentString755 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">SALVANDO UNA VIDA (ALBERGUE).</h1>'+ '<div id="bodyContent">'+ '<p><b>SALVANDO UNA VIDA (ALBERGUE).</b> , — 29 de  Mayo de  2007.Di- rección:  Colonia  Centroamérica. Días y horas  de  reuniones: De Lu- nes  a Domingo de  5:00 a 7:00 p.m.  Miembros asistentes: 15 Hom- bres.</p>'+ '</div>'+ '</div>'; var infowindow755 = new google.maps.InfoWindow({ content: contentString755 });   
        //markers  
        var marker755 = new google.maps.Marker({ position: point755, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "755.SALVANDO UNA VIDA (ALBERGUE)." }); 
        //information for  
        function goToLink755() { infowindow755.open(map,marker755);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker755, 'click', goToLink755); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 756  
        //positions 
        var point756 = new google.maps.LatLng(13.702262, -89.200060); var contentString756 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">SAN  ESTEBAN.</h1>'+ '<div id="bodyContent">'+ '<p><b>SAN  ESTEBAN.</b> , — 19 de  Noviembre de  1963.  Dirección:  4ª Calle Oriente Nº 821 esquina Opuesta de Escuela  Francisco  Campos, Ba- rrio San Esteban. Días y horas  de  reuniones: De Lunes a Sábado de 7:00 a 9:00 p.m.  y Domingo de  5:00 a 7:00 p.m.  Miembros asistentes: 12 Hombres y 2 Mujeres.</p>'+ '</div>'+ '</div>'; var infowindow756 = new google.maps.InfoWindow({ content: contentString756 });   
        //markers  
        var marker756 = new google.maps.Marker({ position: point756, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "756.SAN  ESTEBAN." }); 
        //information for  
        function goToLink756() { infowindow756.open(map,marker756);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker756, 'click', goToLink756); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 757  
        //positions 
        var point757 = new google.maps.LatLng(13.706026, -89.186353); var contentString757 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">SAN FRANCISCO.</h1>'+ '<div id="bodyContent">'+ '<p><b>SAN FRANCISCO.</b> , — 14 de  Julio de  1961.  Dirección:  10ª  Avenida Norte  No  810.  Días y horas  de  reuniones: De Lunes a Domingo de 5:30 a 7:30 pm. Miembros asistentes: 14 Hombres y 2 Mujeres.</p>'+ '</div>'+ '</div>'; var infowindow757 = new google.maps.InfoWindow({ content: contentString757 });   
        //markers  
        var marker757 = new google.maps.Marker({ position: point757, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "757.SAN FRANCISCO." }); 
        //information for  
        function goToLink757() { infowindow757.open(map,marker757);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker757, 'click', goToLink757); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 758  
        //positions 
        var point758 = new google.maps.LatLng(13.687216, -89.188988); var contentString758 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">SAN JACINTO.</h1>'+ '<div id="bodyContent">'+ '<p><b>SAN JACINTO.</b> , — 05 de  Septiembre de  1964.  Dirección:  Avenida Cuba  y Calle Las Mercedes, Barrio San Jacinto. Días y horas  de reu- niones: De Lunes a Domingo de 6:00 a 8:00 p.m. Miembros asisten- tes: 9 Hombres y 1 Mujer.</p>'+ '</div>'+ '</div>'; var infowindow758 = new google.maps.InfoWindow({ content: contentString758 });   
        //markers  
        var marker758 = new google.maps.Marker({ position: point758, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "758.SAN JACINTO." }); 
        //information for  
        function goToLink758() { infowindow758.open(map,marker758);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker758, 'click', goToLink758); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 759  
        //positions 
        var point759 = new google.maps.LatLng(13.703865, -89.205001); var contentString759 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">SAN LORENZO.</h1>'+ '<div id="bodyContent">'+ '<p><b>SAN LORENZO.</b> , — 26 de abril de 1964.  Dirección:  25 Avenida  Nor- te Pasaje  San Lorenzo,  Comunidad Tutunichapa Nº 1. Días y horas de  reuniones: De Lunes a Domingo de  7:30 a 9:30 p.m.  Miembros asistentes: 13 Hombres y 3 Mujeres.</p>'+ '</div>'+ '</div>'; var infowindow759 = new google.maps.InfoWindow({ content: contentString759 });   
        //markers  
        var marker759 = new google.maps.Marker({ position: point759, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "759.SAN LORENZO." }); 
        //information for  
        function goToLink759() { infowindow759.open(map,marker759);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker759, 'click', goToLink759); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 760  
        //positions 
        var point760 = new google.maps.LatLng(13.690345, -89.201011); var contentString760 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">SANTA ANITA.</h1>'+ '<div id="bodyContent">'+ '<p><b>SANTA ANITA.</b> , — 02 de Diciembre de 1962.  Dirección:  15 Avenida Sur, Casa  Nº  1218  Barrio Santa  Anita.  Días y horas  de  reuniones: De Lunes a Domingo de  7:00 a 9:00 p.m.  Miembros asistentes: 12 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow760 = new google.maps.InfoWindow({ content: contentString760 });   
        //markers  
        var marker760 = new google.maps.Marker({ position: point760, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "760.SANTA ANITA." }); 
        //information for  
        function goToLink760() { infowindow760.open(map,marker760);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker760, 'click', goToLink760); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 761  
        //positions 
        var point761 = new google.maps.LatLng(13.649758, -89.196399); var contentString761 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">SOBRIEDAD 10  DE JULIO.</h1>'+ '<div id="bodyContent">'+ '<p><b>SOBRIEDAD 10  DE JULIO.</b> , — 10 de  Julio de  1976.  Dirección:  Ca- rretera Planes  de  Renderos Km. 8. Villa San Francisco  Local 1. Días y horas  de  reuniones: De Lunes a Domingo 6:00 a 8:00 p.m.  Miem- bros  asistentes: 6 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow761 = new google.maps.InfoWindow({ content: contentString761 });   
        //markers  
        var marker761 = new google.maps.Marker({ position: point761, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "761.SOBRIEDAD 10  DE JULIO." }); 
        //information for  
        function goToLink761() { infowindow761.open(map,marker761);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker761, 'click', goToLink761); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 762  
        //positions 
        var point762 = new google.maps.LatLng(13.707322, -89.176604); var contentString762 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">SOBRIEDAD 26 DE JUNIO.</h1>'+ '<div id="bodyContent">'+ '<p><b>SOBRIEDAD 26 DE JUNIO.</b> , — 26 de  Junio  de  1983.  Dirección:  Ur- banización Concepción Final Calle  Principal  Nº 2 Pasaje  E lote  39 (Bis.) Días y horas de reuniones: De Lunes a Domingo de 7:00 a 9:00 p.m.  Miembros asistentes:18 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow762 = new google.maps.InfoWindow({ content: contentString762 });   
        //markers  
        var marker762 = new google.maps.Marker({ position: point762, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "762.SOBRIEDAD 26 DE JUNIO." }); 
        //information for  
        function goToLink762() { infowindow762.open(map,marker762);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker762, 'click', goToLink762); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 763  
        //positions 
        var point763 = new google.maps.LatLng(13.668144, -89.193580); var contentString763 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">SOBRIEDAD.</h1>'+ '<div id="bodyContent">'+ '<p><b>SOBRIEDAD.</b> , — 23 de Marzo de 2008.  Dirección:  Colonia  San Juan de  Dios. Días y horas  de  reuniones: De Lunes a Domingo de  7:00 a 9:00 p.m.  Miembros asistentes: 6 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow763 = new google.maps.InfoWindow({ content: contentString763 });   
        //markers  
        var marker763 = new google.maps.Marker({ position: point763, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "763.SOBRIEDAD." }); 
        //information for  
        function goToLink763() { infowindow763.open(map,marker763);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker763, 'click', goToLink763); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 764  
        //positions 
        var point764 = new google.maps.LatLng(13.700626, -89.211976); var contentString764 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">TIERRA SANTA.</h1>'+ '<div id="bodyContent">'+ '<p><b>TIERRA SANTA.</b> , — 09 de  Noviembre de  1966.  Dirección:  1ª Calle Poniente y Avenida  Morazán. Edificio Salomé  135,  2o   Nivel. Días y horas  de  reuniones: De Lunes a Sábado de  6:00 a 8:00 p.m.  Miem- bros  asistentes: 33 Hombres y 3 Mujeres.</p>'+ '</div>'+ '</div>'; var infowindow764 = new google.maps.InfoWindow({ content: contentString764 });   
        //markers  
        var marker764 = new google.maps.Marker({ position: point764, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "764.TIERRA SANTA." }); 
        //information for  
        function goToLink764() { infowindow764.open(map,marker764);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker764, 'click', goToLink764); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 765  
        //positions 
        var point765 = new google.maps.LatLng(13.708010, -89.253611); var contentString765 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">TRANSMÍTELO.</h1>'+ '<div id="bodyContent">'+ '<p><b>TRANSMÍTELO.</b> , — 15  de  Septiembre 2008.  Dirección:  Calle  José Martí Nº 15-A Colonia  Escalón.  Días y horas  de reuniones: De Lunes a Domingo de  6.00  a 8.00.  p.m.  Miembros asistentes: 12 Hombres y 4 Mujeres.</p>'+ '</div>'+ '</div>'; var infowindow765 = new google.maps.InfoWindow({ content: contentString765 });   
        //markers  
        var marker765 = new google.maps.Marker({ position: point765, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "765.TRANSMÍTELO." }); 
        //information for  
        function goToLink765() { infowindow765.open(map,marker765);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker765, 'click', goToLink765); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 766  
        //positions 
        var point766 = new google.maps.LatLng(13.698077, -89.227355); var contentString766 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">TRES LEGADOS.</h1>'+ '<div id="bodyContent">'+ '<p><b>TRES LEGADOS.</b> , — 21 de  Agosto de  1965.  Dirección:  4a   Avenida Norte  Nº 424,  Edificio Melara  2a  Planta.  Días y horas  de  reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m.  Miembros asistentes: 20 Hombres y 3 Mujeres.</p>'+ '</div>'+ '</div>'; var infowindow766 = new google.maps.InfoWindow({ content: contentString766 });   
        //markers  
        var marker766 = new google.maps.Marker({ position: point766, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "766.TRES LEGADOS." }); 
        //information for  
        function goToLink766() { infowindow766.open(map,marker766);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker766, 'click', goToLink766); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 767  
        //positions 
        var point767 = new google.maps.LatLng(13.713815, -89.227048); var contentString767 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UN MILAGRO DE A.A.</h1>'+ '<div id="bodyContent">'+ '<p><b>UN MILAGRO DE A.A.</b> , — 27 de Enero de 1964.  Dirección:  Calle La Granjita,  frente  a Vivero Los Pinos, San Antonio  Abad.  Días y horas de  reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m.  Miembros asistentes: 20 Hombres 2 Mujeres.</p>'+ '</div>'+ '</div>'; var infowindow767 = new google.maps.InfoWindow({ content: contentString767 });   
        //markers  
        var marker767 = new google.maps.Marker({ position: point767, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "767.UN MILAGRO DE A.A." }); 
        //information for  
        function goToLink767() { infowindow767.open(map,marker767);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker767, 'click', goToLink767); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 768  
        //positions 
        var point768 = new google.maps.LatLng(13.707876, -89.263495); var contentString768 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UN MILAGRO EN EL HOGAR.</h1>'+ '<div id="bodyContent">'+ '<p><b>UN MILAGRO EN EL HOGAR.</b> , — 25 de  Julio de  1968.  Dirección: Final Colonia  Escalón,  Calle El Carmen Caserío Lajas Poniente. Días y horas de reuniones: De Lunes a Sábado de 7:00 a 9:00 p.m. Miem- bros  asistentes: 6 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow768 = new google.maps.InfoWindow({ content: contentString768 });   
        //markers  
        var marker768 = new google.maps.Marker({ position: point768, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "768.UN MILAGRO EN EL HOGAR." }); 
        //information for  
        function goToLink768() { infowindow768.open(map,marker768);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker768, 'click', goToLink768); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 769  
        //positions 
        var point769 = new google.maps.LatLng(13.698259, -89.199965); var contentString769 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UN MILAGRO EN LA ZONA.</h1>'+ '<div id="bodyContent">'+ '<p><b>UN MILAGRO EN LA ZONA.</b> , — 03 de  Diciembre de  2001.  Direc- ción: 4ª Calle Poniente y 17 Avenida Sur Nº 1015, Zona Metropolita- na de ANDA. Días y horas  de reuniones: De Lunes a Viernes de 4:00 a 6:00 p.m.  Miembros asistentes: 12 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow769 = new google.maps.InfoWindow({ content: contentString769 });   
        //markers  
        var marker769 = new google.maps.Marker({ position: point769, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "769.UN MILAGRO EN LA ZONA." }); 
        //information for  
        function goToLink769() { infowindow769.open(map,marker769);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker769, 'click', goToLink769); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 770  
        //positions 
        var point770 = new google.maps.LatLng(13.670469, -89.210524); var contentString770 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UN MILAGRO EN SAN  PATRICIO.</h1>'+ '<div id="bodyContent">'+ '<p><b>UN MILAGRO EN SAN  PATRICIO.</b> , — 08 de  Noviembre de  2005. Dirección:  Colonia  San Patricio, Calle Principal y Pasaje  8, 2a  Etapa. Nº 50-A. Días y horas  de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.  Miembros asistentes: 10 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow770 = new google.maps.InfoWindow({ content: contentString770 });  
         //markers  
        var marker770 = new google.maps.Marker({ position: point770, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "770.UN MILAGRO EN SAN  PATRICIO." }); 
        //information for  
        function goToLink770() { infowindow770.open(map,marker770);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker770, 'click', goToLink770); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 771  
        //positions 
        var point771 = new google.maps.LatLng(13.720909, -89.230339); var contentString771 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UNA LUZ EN EL ROBLE.</h1>'+ '<div id="bodyContent">'+ '<p><b>UNA LUZ EN EL ROBLE.</b> , — 25 de  Abril de  1996.  Dirección:  Calle El Roble  Pasaje  García  Nº 255,  San Antonio  Abad.  Días y horas  de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m. Miembros asis- tentes: 19 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow771 = new google.maps.InfoWindow({ content: contentString771 });   
        //markers  
        var marker771 = new google.maps.Marker({ position: point771, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "771.UNA LUZ EN EL ROBLE." }); 
        //information for  
        function goToLink771() { infowindow771.open(map,marker771);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker771, 'click', goToLink771); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 772  
        //positions 
        var point772 = new google.maps.LatLng(13.690529, -89.180076); var contentString772 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UNA LUZ EN LA FLORIDA.</h1>'+ '<div id="bodyContent">'+ '<p><b>UNA LUZ EN LA FLORIDA.</b> , — 07 de Julio de 1981. Dirección: Calle y Colonia  Florida  Nº 111,  Pasaje  EL Pozo San Jacinto. Días y horas de  reuniones: De Lunes a Domingo de  7:00 a 9:00 p.m.  Miembros asistentes: 5 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow772 = new google.maps.InfoWindow({ content: contentString772 });   
        //markers  
        var marker772 = new google.maps.Marker({ position: point772, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "772.UNA LUZ EN LA FLORIDA." }); 
        //information for  
        function goToLink772() { infowindow772.open(map,marker772);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker772, 'click', goToLink772); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 773  
        //positions 
        var point773 = new google.maps.LatLng(13.706683, -89.174483); var contentString773 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UNA LUZ EN LA TIENDONA.</h1>'+ '<div id="bodyContent">'+ '<p><b>UNA LUZ EN LA TIENDONA.</b> , — 19 de Septiembre de 2005. Direc- ción: Edificio Nº 5, local ex-clínica La Tiendona. Días y horas  de  re- uniones: De Lunes a Domingo de 12:00 m.d.  a 2:00 p.m.  Miembros asistentes: 10 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow773 = new google.maps.InfoWindow({ content: contentString773 });   
        //markers  
        var marker773 = new google.maps.Marker({ position: point773, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "773.UNA LUZ EN LA TIENDONA." }); 
        //information for  
        function goToLink773() { infowindow773.open(map,marker773);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker773, 'click', goToLink773); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 774  
        //positions 
        var point774 = new google.maps.LatLng(13.637247, -89.188501); var contentString774 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UNA LUZ EN LAS NEBLINAS.</h1>'+ '<div id="bodyContent">'+ '<p><b>UNA LUZ EN LAS NEBLINAS.</b> , — 29 de  Marzo de  1981.  Dirección: Final Parque Balboa  Colonia  Monterrey, frente  a redondel Los Pró- ceres  Planes  de  Renderos. Días y horas  de  reuniones: De  Lunes  a Domingo de 6:30 a 8:30 p.m.  Miembros asistentes: 10 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow774 = new google.maps.InfoWindow({ content: contentString774 });   
        //markers  
        var marker774 = new google.maps.Marker({ position: point774, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "774.UNA LUZ EN LAS NEBLINAS." }); 
        //information for  
        function goToLink774() { infowindow774.open(map,marker774);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker774, 'click', goToLink774); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 775  
        //positions 
        var point775 = new google.maps.LatLng(13.685300, -89.189579); var contentString775 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UNIDAD.</h1>'+ '<div id="bodyContent">'+ '<p><b>UNIDAD.</b> , — 16 de Junio de 1973. Dirección: Avenida Cuba  Nº 1314 Barrio San Jacinto frente  a Servicentro San Jacinto. Días y horas  de reuniones: De Lunes a Domingo de 7:00 a 9:00 p.m. Miembros asistentes: 24 Hombres y 1 Mujer.</p>'+ '</div>'+ '</div>'; var infowindow775 = new google.maps.InfoWindow({ content: contentString775 });   
        //markers  
        var marker775 = new google.maps.Marker({ position: point775, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "775.UNIDAD." }); 
        //information for  
        function goToLink775() { infowindow775.open(map,marker775);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker775, 'click', goToLink775); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 776  
        //positions 
        var point776 = new google.maps.LatLng(13.702895, -89.188455); var contentString776 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UNIVERSAL.</h1>'+ '<div id="bodyContent">'+ '<p><b>UNIVERSAL.</b> , — 22 de Diciembre de 1972. Dirección: 9ª Calle Orien- te y Avenida  Monseñor Oscar  Arnulfo Romero, Edificio Centro Co- mercial San Francisco  Local 216, 2ª Planta,  frente  a Alcaldía Munici- pal. Días y horas  de reuniones: De Lunes a Domingo de 5:30 a 7:00 p.m.  Miembros asistentes: 40 Hombres y 5 Mujeres.</p>'+ '</div>'+ '</div>'; var infowindow776 = new google.maps.InfoWindow({ content: contentString776 });   
        //markers  
        var marker776 = new google.maps.Marker({ position: point776, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "776.UNIVERSAL." }); 
        //information for  
        function goToLink776() { infowindow776.open(map,marker776);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker776, 'click', goToLink776); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 777  
        //positions
        var point777 = new google.maps.LatLng(13.715598, -89.202202); var contentString777 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UNIVERSIDAD DE EL SALVADOR.</h1>'+ '<div id="bodyContent">'+ '<p><b>UNIVERSIDAD DE EL SALVADOR.</b> , — 26 de  Abril de  2010.  Direc- ción: Final Avenida  Héroes 30 de  Julio,  Ciudad Universitaria.  Local SETUES (mantenimiento). Días  y horas  de  reuniones: De  Lunes  a Viernes de 12:30 m.d.a 2:00 p.m. Miembros asistentes: 20 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow777 = new google.maps.InfoWindow({ content: contentString777 });   
        //markers  
        var marker777 = new google.maps.Marker({ position: point777, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "777.UNIVERSIDAD DE EL SALVADOR." }); 
        //information for  
        function goToLink777() { infowindow777.open(map,marker777);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker777, 'click', goToLink777); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 778  
        //positions 
        var point778 = new google.maps.LatLng(13.709119, -89.191572); var contentString778 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">VERDAD Y LIBERTAD.</h1>'+ '<div id="bodyContent">'+ '<p><b>VERDAD Y LIBERTAD.</b> , — 15 de  Noviembre 2010.  Dirección:  entre 1ª Avenida  Norte  N° 114,  2o   Nivel. Días y horas  de  reuniones: De Lunes a Sábado de  5:00 a 7:00 p.m.  Miembros asistentes: 9 Hom- bres  y 1 Mujer.</p>'+ '</div>'+ '</div>'; var infowindow778 = new google.maps.InfoWindow({ content: contentString778 });   
        //markers  
        var marker778 = new google.maps.Marker({ position: point778, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "778.VERDAD Y LIBERTAD." }); 
        //information for  
        function goToLink778() { infowindow778.open(map,marker778);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker778, 'click', goToLink778); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 779  
        //positions 
        var point779 = new google.maps.LatLng(13.684630, -89.229037); var contentString779 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">VETERANOS EN ACCIÓN SOLO POR HOY.</h1>'+ '<div id="bodyContent">'+ '<p><b>VETERANOS EN ACCIÓN SOLO POR HOY.</b> , — 27 de  Noviembre de 2011.  Dirección:  11ª Calle Oriente Colonia  Las Mercedes Nº 705 Teléfono: 2271—4150. Días y horas  de  reuniones: De Lunes a Domingo  de  6:00  a 8:00  p.m.  Miembros asistentes: 18 Hombres y 3 Mujeres.</p>'+ '</div>'+ '</div>'; var infowindow779 = new google.maps.InfoWindow({ content: contentString779 });   
        //markers  
        var marker779 = new google.maps.Marker({ position: point779, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "779.VETERANOS EN ACCIÓN SOLO POR HOY." }); 
        //information for  
        function goToLink779() { infowindow779.open(map,marker779);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker779, 'click', goToLink779); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 780  
        //positions 
        var point780 = new google.maps.LatLng(13.702790, -89.181558); var contentString780 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">VIDA NUEVA 01.</h1>'+ '<div id="bodyContent">'+ '<p><b>VIDA NUEVA 01.</b> , —  15 de  Agosto de  1985.  Dirección:  Calle Con- cepción Nº 522, 2a  Planta  Edificio Ibarra,  frente  a Gasolinera Puma. Días y horas  de reuniones: De Lunes a Domingo de 7:00 a 9:00 p.m. Miembros asistentes: 12 Hombres y 3 Mujeres.</p>'+ '</div>'+ '</div>'; var infowindow780 = new google.maps.InfoWindow({ content: contentString780 });   
        //markers  
        var marker780 = new google.maps.Marker({ position: point780, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "780.VIDA NUEVA 01." }); 
        //information for  
        function goToLink780() { infowindow780.open(map,marker780);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker780, 'click', goToLink780); google.maps.event.addDomListener(window, 'load', initialize);

        //MARCADOR 781  
        //positions 
        var point781 = new google.maps.LatLng(13.709957, -89.182401); var contentString781 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">VIDA NUEVA 02.</h1>'+ '<div id="bodyContent">'+ '<p><b>VIDA NUEVA 02.</b> , —  06 de  Noviembre de  2004.  Dirección:  18 Ave- nida  Norte, Pasaje  San  Pedro Nº  574.  Días y horas  de  reuniones: De Lunes a Domingo de  3:00 a 5:00 p.m.  Miembros asistentes: 25 Hombres y 2 Mujeres.</p>'+ '</div>'+ '</div>'; var infowindow781 = new google.maps.InfoWindow({ content: contentString781 });   
        //markers  
        var marker781 = new google.maps.Marker({ position: point781, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "781.VIDA NUEVA 02." }); 
        //information for  
        function goToLink781() { infowindow781.open(map,marker781);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker781, 'click', goToLink781); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 782  
        //positions 
        var point782 = new google.maps.LatLng(13.707754, -89.216633); var contentString782 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">VIRTUD 06  DE JULIO.</h1>'+ '<div id="bodyContent">'+ '<p><b>VIRTUD 06  DE JULIO.</b> , — 06 de  Julio  de  1965.  Dirección:  Calle El Progreso Nº 226,  Barrio Santa  Lucía, Colonia  Miramonte, Avenida Bernal. Días y horas de reuniones: Miércoles  y Jueves de 7:00 a 9:00 p.m.  Miembros asistentes: 7 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow782 = new google.maps.InfoWindow({ content: contentString782 });   
        //markers  
        var marker782 = new google.maps.Marker({ position: point782, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "782.VIRTUD 06  DE JULIO." }); 
        //information for  
        function goToLink782() { infowindow782.open(map,marker782);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker782, 'click', goToLink782); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 783  
        //positions 
        var point783 = new google.maps.LatLng(13.705788, -89.204154); var contentString783 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">VISIÓN 3000.</h1>'+ '<div id="bodyContent">'+ '<p><b>VISIÓN 3000.</b> , — 01 de  Junio  de  1999.  Dirección:  Edificio América Nº 302-A, Urbanización La Esperanza, Boulevard Tutunichapa y Ave- nida  Las Américas.  Días y horas  de  reuniones: De Lunes a Sábado 6:00 a 8:00 p.m.  Miembros asistentes: 20 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow783 = new google.maps.InfoWindow({ content: contentString783 });   
        //markers  
        var marker783 = new google.maps.Marker({ position: point783, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "783.VISIÓN 3000." }); 
        //information for  
        function goToLink783() { infowindow783.open(map,marker783);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker783, 'click', goToLink783); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 784  
        //positions 
        var point784 = new google.maps.LatLng(13.698659, -89.186906); var contentString784 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">VOLUNTAD 08  DE ENERO.</h1>'+ '<div id="bodyContent">'+ '<p><b>VOLUNTAD 08  DE ENERO.</b> , — 08  de  Enero  de  1971.  Dirección: 10ª  Avenida  Norte  y Calle  Delgado Nº 222  Edificio Éxito, 2ª plan- ta, costado Oriente Mercado Ex-cuartel.  Días y horas  de  reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m.  Miembros asistentes: 20 Hombres y 5 Mujeres.</p>'+ '</div>'+ '</div>'; var infowindow784 = new google.maps.InfoWindow({ content: contentString784 });   
        //markers  
        var marker784 = new google.maps.Marker({ position: point784, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "784.VOLUNTAD 08  DE ENERO." }); 
        //information for  
        function goToLink784() { infowindow784.open(map,marker784);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker784, 'click', goToLink784); google.maps.event.addDomListener(window, 'load', initialize);

        //MARCADOR 785  
        //positions 
        var point785 = new google.maps.LatLng(13.614553, -89.124463); var contentString785 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">26  DE ENERO.</h1>'+ '<div id="bodyContent">'+ '<p><b>26  DE ENERO.</b> , — 26 de  Enero  de  1985.  Dirección:  Km. 16 ½ Can- tón El Morro, Colonia El Sauce.  Días y horas  de reuniones: De Lunes a Domingo de 7:00 a 9:00 p.m.  Miembros asistentes: 15 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow785 = new google.maps.InfoWindow({ content: contentString785 });   
        //markers  
        var marker785 = new google.maps.Marker({ position: point785, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "785.26  DE ENERO." }); 
        //information for  
        function goToLink785() { infowindow785.open(map,marker785);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker785, 'click', goToLink785); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 786  
        //positions 
        var point786 = new google.maps.LatLng(13.644113, -89.122124); var contentString786 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">27  DE ENERO.</h1>'+ '<div id="bodyContent">'+ '<p><b>27  DE ENERO.</b> , — 27 de  Enero  de  1979.  Dirección:  Colonia  Santa Isabel 1, Casa Nº 7. Días y horas  de reuniones: De Lunes a Domingo de 7:00 a 9:00 p.m.  Miembros asistentes: 9 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow786 = new google.maps.InfoWindow({ content: contentString786 });   
        //markers  
        var marker786 = new google.maps.Marker({ position: point786, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "786.27  DE ENERO." }); 
        //information for  
        function goToLink786() { infowindow786.open(map,marker786);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker786, 'click', goToLink786); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 787  
        //positions 
        var point787 = new google.maps.LatLng(13.619037, -89.118239); var contentString787 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">CAMINO DE LA RECUPERACIÓN.</h1>'+ '<div id="bodyContent">'+ '<p><b>CAMINO DE LA RECUPERACIÓN.</b> , — 04  de  Marzo  de  1965.  Di- rección:  Carretera antigua a Zacatecoluca Km. 15 ½. Lotificación La Ilusión N°10.  Días y horas  de  reuniones: De  Lunes  a Domingo de 6:30 a 8:30 p.m.  Miembros asistentes: 3 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow787 = new google.maps.InfoWindow({ content: contentString787 });   
        //markers  
        var marker787 = new google.maps.Marker({ position: point787, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "787.CAMINO DE LA RECUPERACIÓN." }); 
        //information for  
        function goToLink787() { infowindow787.open(map,marker787);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker787, 'click', goToLink787); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 788  
        //positions 
        var point788 = new google.maps.LatLng(13.631004, -89.114661); var contentString788 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">ILUMINACIÓN EN A.A.</h1>'+ '<div id="bodyContent">'+ '<p><b>ILUMINACIÓN EN A.A.</b> , — 13 de  Marzo de  1990.  Dirección:  Barrio San José, Calle Guatemala, Casa  Nº 6. Días y horas  de  reuniones: De  Lunes  a Domingo de  7:00  a 9:00  p.m.  Miembros asistentes: 5 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow788 = new google.maps.InfoWindow({ content: contentString788 });  
        //markers  
        var marker788 = new google.maps.Marker({ position: point788, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "788.ILUMINACIÓN EN A.A." }); 
        //information for  
        function goToLink788() { infowindow788.open(map,marker788);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker788, 'click', goToLink788); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 789  
        //positions 
        var point789 = new google.maps.LatLng(13.640289, -89.124850); var contentString789 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NUEVO AMANECER.</h1>'+ '<div id="bodyContent">'+ '<p><b>NUEVO AMANECER.</b> , — 29 de Agosto de 1999.  Dirección:  Cantón Shaltipa, contiguo a mi Tiendita. Días y horas  de  reuniones: De Lu- nes  a Domingo de  6:00  a 8:00  p.m.  Miembros asistentes: 6 Hom- bres.</p>'+ '</div>'+ '</div>'; var infowindow789 = new google.maps.InfoWindow({ content: contentString789 });   
        //markers  
        var marker789 = new google.maps.Marker({ position: point789, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "789.NUEVO AMANECER." }); 
        //information for  
        function goToLink789() { infowindow789.open(map,marker789);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker789, 'click', goToLink789); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 790  
        //positions
        var point790 = new google.maps.LatLng(13.645439, -89.118984); var contentString790 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">SENDERO DEL BIEN.</h1>'+ '<div id="bodyContent">'+ '<p><b>SENDERO DEL BIEN.</b> , — 28 de Abril de 1963. Dirección: Barrio Con- cepción Calle 25 de  Julio Contiguo a caja de  crédito. Días y horas de  reuniones: De Lunes a Domingo de  7:00 a 9:00 p.m.  Miembros asistentes: 15 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow790 = new google.maps.InfoWindow({ content: contentString790 });   
        //markers  
        var marker790 = new google.maps.Marker({ position: point790, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "790.SENDERO DEL BIEN." }); 
        //information for  
        function goToLink790() { infowindow790.open(map,marker790);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker790, 'click', goToLink790); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 791 
        //positions 
        var point791 = new google.maps.LatLng(13.643808, -89.119454); var contentString791 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">TRABAJANDO CON OTROS.</h1>'+ '<div id="bodyContent">'+ '<p><b>TRABAJANDO CON OTROS.</b> , — 27 de  Enero  de  1998.  Dirección: Colonia  Dalmacia  Nº 2 conocido como  Zona baja,  Calle panorámi- ca, Abajo del salón  del reino  Casa  N° 3. Días y horas  de  reuniones: De  Lunes  a Domingo de  7:00  a 9:00  p.m.  Miembros asistentes: 7 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow791 = new google.maps.InfoWindow({ content: contentString791 });   
        //markers  
        var marker791 = new google.maps.Marker({ position: point791, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "791.TRABAJANDO CON OTROS." }); 
        //information for  
        function goToLink791() { infowindow791.open(map,marker791);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker791, 'click', goToLink791); google.maps.event.addDomListener(window, 'load', initialize);

        //MARCADOR 792  
        //positions 
        var point792 = new google.maps.LatLng(13.643501, -89.137977); var contentString792 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">07 DE NOVIEMBRE.</h1>'+ '<div id="bodyContent">'+ '<p><b>07 DE NOVIEMBRE.</b> , — 07 de Noviembre de 1964.  Dirección:  Calle San Agustín  Campos Nº 15. Días y horas  de  reuniones: De Lunes a Domingo de  7:00  a 9:00  p.m.  Miembros asistentes: 7 Hombres 1 Mujer.</p>'+ '</div>'+ '</div>'; var infowindow792 = new google.maps.InfoWindow({ content: contentString792 });   
        //markers  
        var marker792 = new google.maps.Marker({ position: point792, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "792.07 DE NOVIEMBRE." }); 
        //information for  
        function goToLink792() { infowindow792.open(map,marker792);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker792, 'click', goToLink792); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 793  
        //positions 
        var point793 = new google.maps.LatLng(13.653076, -89.156947); var contentString793 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">REDENCIÓN.</h1>'+ '<div id="bodyContent">'+ '<p><b>REDENCIÓN.</b> , — 26  de  Agosto de  1962.  Dirección:  Calle  Alberto Masferrer  final Pasaje  Palomo, Barrio  Las Mercedes. Días  y horas de  reuniones: De Lunes  a Viernes  de  7:00   a 9:00  p.m.   Sábado y Domingo 5:00 p.m.  a 7:00 p.m.  Miembros asistentes: 30 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow793 = new google.maps.InfoWindow({ content: contentString793 });   
        //markers  
        var marker793 = new google.maps.Marker({ position: point793, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "793.REDENCIÓN." }); 
        //information for  
        function goToLink793() { infowindow793.open(map,marker793);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker793, 'click', goToLink793); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 794  
        //positions 
        var point794 = new google.maps.LatLng(13.638749, -89.154890); var contentString794 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">RENACER 08  DE AGOSTO.</h1>'+ '<div id="bodyContent">'+ '<p><b>RENACER 08  DE AGOSTO.</b> , — 08 de  Agosto de  2013.  Dirección: Cantón El Guaje  Nº 2 sector La manzana Santo  Tomás.  Días y horas de  reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m.  Miembros asistentes: 14 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow794 = new google.maps.InfoWindow({ content: contentString794 });   
        //markers  
        var marker794 = new google.maps.Marker({ position: point794, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "794.RENACER 08  DE AGOSTO." }); 
        //information for  
        function goToLink794() { infowindow794.open(map,marker794);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker794, 'click', goToLink794); google.maps.event.addDomListener(window, 'load', initialize);

        //MARCADOR 795  
        //positions 
        var point795 = new google.maps.LatLng(13.700895, -89.149024); var contentString795 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">04  DE ENERO.</h1>'+ '<div id="bodyContent">'+ '<p><b>04  DE ENERO.</b> , — 04 de  Enero  de  1962.  Dirección:  Pasaje  ADOC, Nº 17, Días y horas  de  reuniones: De Lunes  a Domingo de  7:00  a 9:00 p.m.  Miembros asistentes: 6 Hombres y 1 Mujer.G</p>'+ '</div>'+ '</div>'; var infowindow795 = new google.maps.InfoWindow({ content: contentString795 });   
        //markers  
        var marker795 = new google.maps.Marker({ position: point795, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "795.04  DE ENERO." }); 
        //information for  
        function goToLink795() { infowindow795.open(map,marker795);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker795, 'click', goToLink795); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 796  
        //positions
        var point796 = new google.maps.LatLng(13.714747, -89.130417); var contentString796 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">05 DE SEPTIEMBRE.</h1>'+ '<div id="bodyContent">'+ '<p><b>05 DE SEPTIEMBRE.</b> , — 05 de  Septiembre de  1976.  Dirección:  Co- lonia  El Pepeto, Pasaje  “E 1”,  Polígono 1“F”,  Nº 20.  Días y horas de  reuniones: De Lunes a Domingo de  7:00  a 9:00  pm.  Miembros asistentes: 9 Hombres y 2 Mujeres.</p>'+ '</div>'+ '</div>'; var infowindow796 = new google.maps.InfoWindow({ content: contentString796 });   
        //markers  
        var marker796 = new google.maps.Marker({ position: point796, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "796.05 DE SEPTIEMBRE." }); 
        //information for  
        function goToLink796() { infowindow796.open(map,marker796);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker796, 'click', goToLink796); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 797  
        //positions 
        var point797 = new google.maps.LatLng(13.697398, -89.137454); var contentString797 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">20 DE ABRIL.</h1>'+ '<div id="bodyContent">'+ '<p><b>20 DE ABRIL.</b> , — 20 de Abril de 1967.  Dirección:  Boulevard del Ejer- cito  Calle  al rastro  costado Oriente a  cigarrería Morazán  Nº  129, Días y horas  de reuniones: De Lunes a Domingo de 6:30 a 8:30 p.m. Miembros asistentes: 16 Hombres y 3 Mujeres.</p>'+ '</div>'+ '</div>'; var infowindow797 = new google.maps.InfoWindow({ content: contentString797 });   
        //markers  
        var marker797 = new google.maps.Marker({ position: point797, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "797.20 DE ABRIL." }); 
        //information for  
        function goToLink797() { infowindow797.open(map,marker797);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker797, 'click', goToLink797); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 798  
        //positions 
        var point798 = new google.maps.LatLng(13.693787, -89.170814); var contentString798 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">A.A ES LA SOLUCIÓN.</h1>'+ '<div id="bodyContent">'+ '<p><b>A.A ES LA SOLUCIÓN.</b> , — 19 de Mayo de 2013.  Dirección:  Colonia Amiquino Nº 1 Pasaje  Los Alas Casa Nº 18 ex local del grupo una luz en El pino.  Días y horas  de reuniones: De Lunes a Viernes de 6:30 a 8:30 pm. Miembros asistentes: 6 Hombres y 2 Mujeres.</p>'+ '</div>'+ '</div>'; var infowindow798 = new google.maps.InfoWindow({ content: contentString798 });   
        //markers  
        var marker798 = new google.maps.Marker({ position: point798, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "798.A.A ES LA SOLUCIÓN." }); 
        //information for  
        function goToLink798() { infowindow798.open(map,marker798);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker798, 'click', goToLink798); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 799  
        //positions 
        var point799 = new google.maps.LatLng(13.706710, -89.140166); var contentString799 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">ACCIÓN.</h1>'+ '<div id="bodyContent">'+ '<p><b>ACCIÓN.</b> , — 13 de Junio  de 1981.  Dirección:  Colonia  Los Santos  Nº 1 Pasaje  San Gregorio Nº 125,  Block “C”  Soyapango. Días y horas de  reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m.  Miembros asistentes: 22 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow799 = new google.maps.InfoWindow({ content: contentString799 });   
        //markers  
        var marker799 = new google.maps.Marker({ position: point799, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "799.ACCIÓN." }); 
        //information for  
        function goToLink799() { infowindow799.open(map,marker799);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker799, 'click', goToLink799); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 800  
        //positions 
        var point800 = new google.maps.LatLng(13.715792, -89.120979); var contentString800 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">DECISIÓN 01  DE AGOSTO.</h1>'+ '<div id="bodyContent">'+ '<p><b>DECISIÓN 01  DE AGOSTO.</b> , — 01 de  Agosto de  1982.  Dirección: Colonia  Monte Blanco,  Calle Principal  Pasaje  15-B Casa  96. Días y horas de reuniones: De Lunes a Domingo de 7:00 a 9:00 p.m. Miem- bros  asistentes: 8 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow800 = new google.maps.InfoWindow({ content: contentString800 });   
        //markers  
        var marker800 = new google.maps.Marker({ position: point800, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "800.DECISIÓN 01  DE AGOSTO." }); 
        //information for  
        function goToLink800() { infowindow800.open(map,marker800);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker800, 'click', goToLink800); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 801  
        //positions 
        var point801 = new google.maps.LatLng(13.685049, -89.139513); var contentString801 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">DECISIÓN 14 DE JUNIO.</h1>'+ '<div id="bodyContent">'+ '<p><b>DECISIÓN 14 DE JUNIO.</b> , — 14 de Junio  de 1975.  Dirección:  Colo- nia El Guaje  Quinta  Juanita, Cantón El Matazano No  1 Soyapango. Días y horas  de reuniones: De Lunes a Domingo de 7:30 a 9:30 pm. Miembros asistentes: 20 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow801 = new google.maps.InfoWindow({ content: contentString801 });   
        //markers  
        var marker801 = new google.maps.Marker({ position: point801, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "801.DECISIÓN 14 DE JUNIO." }); 
        //information for  
        function goToLink801() { infowindow801.open(map,marker801);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker801, 'click', goToLink801); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 802  
        //positions 
        var point802 = new google.maps.LatLng(13.712041, -89.139238); var contentString802 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">DESPERTAR 27 DE MAYO.</h1>'+ '<div id="bodyContent">'+ '<p><b>DESPERTAR 27 DE MAYO.</b> , — 27 de  Mayo de  1982.  Dirección:  Bri- sas de Cuscatlán Nº 38 Block “K” Reparto Los Santos  2, Soyapango. Días y horas  de reuniones: De Lunes a Domingo de 7:00 a 9:00 p.m. Miembros asistentes: 20 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow802 = new google.maps.InfoWindow({ content: contentString802 });   
        //markers  
        var marker802 = new google.maps.Marker({ position: point802, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "802.DESPERTAR 27 DE MAYO." }); 
        //information for  
        function goToLink802() { infowindow802.open(map,marker802);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker802, 'click', goToLink802); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 803  
        //positions 
        var point803 = new google.maps.LatLng(13.726036, -89.126496); var contentString803 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">DESPERTAR 82.</h1>'+ '<div id="bodyContent">'+ '<p><b>DESPERTAR 82.</b> , — 05 de Abril de 1982 Dirección: Colonia San José 2 Calle Principal, Pasaje  23, Casa N° 36, Soyapango. Días y horas de reuniones: De Lunes a Viernes de 7:00 a 9:00 p.m. Sábado y Domin- go de 6:00 a 8:00 p.m.  Miembros asistentes: 15 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow803 = new google.maps.InfoWindow({ content: contentString803 });   
        //markers  
        var marker803 = new google.maps.Marker({ position: point803, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "803.DESPERTAR 82." }); 
        //information for  
        function goToLink803() { infowindow803.open(map,marker803);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker803, 'click', goToLink803); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 804  
        //positions 
        var point804 = new google.maps.LatLng(13.683120, -89.136766); var contentString804 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">DESPERTAR SAN  RAFAEL.</h1>'+ '<div id="bodyContent">'+ '<p><b>DESPERTAR SAN  RAFAEL.</b> , — 25  de  Agosto de  1985.  Dirección: Calle  El Guaje  Block “B”  Casa  Nº  2.  Días  y horas  de  reuniones: De Lunes a Domingo de  7:00 a 9:00 p.m.  Miembros asistentes: 10 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow804 = new google.maps.InfoWindow({ content: contentString804 });   
        //markers 
        var marker804 = new google.maps.Marker({ position: point804, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "804.DESPERTAR SAN  RAFAEL." }); 
        //information for  
        function goToLink804() { infowindow804.open(map,marker804);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker804, 'click', goToLink804); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 805  
        //positions 
        var point805 = new google.maps.LatLng(13.727472, -89.150944); var contentString805 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">EL RETIRO.</h1>'+ '<div id="bodyContent">'+ '<p><b>EL RETIRO.</b> , —  23 de  Noviembre de  1966.  Dirección:  Colonia  Santa Isabel, Calle Principal, Pasaje  Nº 1 Casa Nº 3. Días y horas de reunio- nes: De Lunes a Domingo de  7:00 a 9:00 pm. Miembros asistentes: 12 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow805 = new google.maps.InfoWindow({ content: contentString805 });   
        //markers  
        var marker805 = new google.maps.Marker({ position: point805, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "805.EL RETIRO." }); 
        //information for  
        function goToLink805() { infowindow805.open(map,marker805);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker805, 'click', goToLink805); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 806  
        //positions 
        var point806 = new google.maps.LatLng(13.721784, -89.150992); var contentString806 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">EL ROSARIO.</h1>'+ '<div id="bodyContent">'+ '<p><b>EL ROSARIO.</b> , — 06 de  Julio  de  1966.  Dirección:  Cantón Plan del Pino,  Colonia  Quinta  Linda Nº  25.  Días y horas  de  reuniones: De Lunes a Domingo de 6:00 a 8:00 pm. Miembros asistentes: 16 Hom- bres  y 1 Mujer.</p>'+ '</div>'+ '</div>'; var infowindow806 = new google.maps.InfoWindow({ content: contentString806 });   
        //markers  
        var marker806 = new google.maps.Marker({ position: point806, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "806.EL ROSARIO." }); 
        //information for  
        function goToLink806() { infowindow806.open(map,marker806);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker806, 'click', goToLink806); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 807  
        //positions 
        var point807 = new google.maps.LatLng(13.707001, -89.148408); var contentString807 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">EL ÚLTIMO PELDAÑO.</h1>'+ '<div id="bodyContent">'+ '<p><b>EL ÚLTIMO PELDAÑO.</b> , —17  de  Mayo de  1982.  Dirección:  Calle y Colonia  Castillo,  Casa  Nº  4, Calle  a Tonacatepeque.  Días y horas de  reuniones: De Lunes a Domingo de  6:30 a 8:30 p.m.  Miembros asistentes: 12 Hombres y 2 Mujeres.</p>'+ '</div>'+ '</div>'; var infowindow807 = new google.maps.InfoWindow({ content: contentString807 });   
        //markers  
        var marker807 = new google.maps.Marker({ position: point807, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "807.EL ÚLTIMO PELDAÑO." }); 
        //information for  
        function goToLink807() { infowindow807.open(map,marker807);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker807, 'click', goToLink807); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 808  
        //positions 
        var point808 = new google.maps.LatLng(13.719233, -89.137724); var contentString808 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">FE Y ESPERANZA.</h1>'+ '<div id="bodyContent">'+ '<p><b>FE Y ESPERANZA.</b> , — 21 de Abril de 1985.  Dirección:  Urbanización Montes de  San Bartolo  Nº 3 Pasaje  6, Casa  Nº 2. Días y horas  de reuniones: De Lunes a Domingo de 7:00 a 9:00 p.m. Miembros asis- tentes: 5 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow808 = new google.maps.InfoWindow({ content: contentString808 });   
        //markers  
        var marker808 = new google.maps.Marker({ position: point808, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "808.FE Y ESPERANZA." }); 
        //information for  
        function goToLink808() { infowindow808.open(map,marker808);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker808, 'click', goToLink808); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 809  
        //positions 
        var point809 = new google.maps.LatLng(13.717911, -89.127622); var contentString809 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">FELICIDAD EN MONTE BLANCO.</h1>'+ '<div id="bodyContent">'+ '<p><b>FELICIDAD EN MONTE BLANCO.</b> , — 15 de Marzo de 1981.  Dirección:  Pasaje  Huizucar,  Casa  N° 7 – 2 “B”, Urbanización Guayacán, Soyapango. Días  y horas  de  reuniones: De  Lunes  a  Domingo de 7:00 a 9:00 p.m.  Miembros asistentes: 14 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow809 = new google.maps.InfoWindow({ content: contentString809 });   
        //markers  
        var marker809 = new google.maps.Marker({ position: point809, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "809.FELICIDAD EN MONTE BLANCO." }); 
        //information for  
        function goToLink809() { infowindow809.open(map,marker809);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker809, 'click', goToLink809); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 810  
        //positions
        var point810 = new google.maps.LatLng(13.720480, -89.139943); var contentString810 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">FUENTE DE VIDA.</h1>'+ '<div id="bodyContent">'+ '<p><b>FUENTE DE VIDA.</b> , — 26  de  Julio  de  1987.  Dirección:  Pasaje  El Mango Nº 1, Cantón El Limón, Días y horas  de reuniones: De Lunes a Domingo de 7:00 a 9:00 p.m.  Miembros asistentes: 14 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow810 = new google.maps.InfoWindow({ content: contentString810 });   
        //markers  
        var marker810 = new google.maps.Marker({ position: point810, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "810.FUENTE DE VIDA." }); 
        //information for  
        function goToLink810() { infowindow810.open(map,marker810);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker810, 'click', goToLink810); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 811  
        //positions 
        var point811 = new google.maps.LatLng(13.709775, -89.137249); var contentString811 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">LA UNIDAD HACE LA FUERZA.</h1>'+ '<div id="bodyContent">'+ '<p><b>LA UNIDAD HACE LA FUERZA.</b> , — 23 de  Noviembre de  1993.  Dirección:  Colonia  Las Carolinas  Pasaje  Gavidia  Nº 56, Ruta de  Buses 3 A. Días y horas  de  reuniones: De Lunes a Sábado de  7:00 a 9:00 p.m.  y Domingo de 5:00 a 7:00 p.m.  Miembros asistentes: 12 Hom- bres.</p>'+ '</div>'+ '</div>'; var infowindow811 = new google.maps.InfoWindow({ content: contentString811 });   
        //markers  
        var marker811 = new google.maps.Marker({ position: point811, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "811.LA UNIDAD HACE LA FUERZA." }); 
        //information for  
        function goToLink811() { infowindow811.open(map,marker811);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker811, 'click', goToLink811); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 812  
        //positions 
        var point812 = new google.maps.LatLng(13.734924, -89.139831); var contentString812 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">LIBERADOS 85.</h1>'+ '<div id="bodyContent">'+ '<p><b>LIBERADOS 85.</b> , — 14 de Febrero de 1985.  Dirección:  Calle a Tona- catepeque Colonia  Villa Alegre  Avenida  Las Rosas  Nº 134  Cantón El Limón. Días y horas  de reuniones: De Lunes a Domingo de 7:00 a 9:00 p.m.  Miembros asistentes: 10 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow812 = new google.maps.InfoWindow({ content: contentString812 });   
        //markers  
        var marker812 = new google.maps.Marker({ position: point812, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "812.LIBERADOS 85." }); 
        //information for  
        function goToLink812() { infowindow812.open(map,marker812);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker812, 'click', goToLink812); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 813  
        //positions 
        var point813 = new google.maps.LatLng(13.707100, -89.158808); var contentString813 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">LOMAS DEL RÍO.</h1>'+ '<div id="bodyContent">'+ '<p><b>LOMAS DEL RÍO.</b> , — 04 de  Junio  de  1979.  Dirección:  Colonia  Los Alpes, Pasaje  3, Casa  Nº 73. Días y horas  de  reuniones: De Lunes a Domingo de 7:00 a 9:00 p.m.  Miembros asistentes: 12 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow813 = new google.maps.InfoWindow({ content: contentString813 });   
        //markers  
        var marker813 = new google.maps.Marker({ position: point813, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "813.LOMAS DEL RÍO." }); 
        //information for  
        function goToLink813() { infowindow813.open(map,marker813);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker813, 'click', goToLink813); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 814  
        //positions 
        var point814 = new google.maps.LatLng(13.716506, -89.132194); var contentString814 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">LUZ EN LA CONFUSIÓN.</h1>'+ '<div id="bodyContent">'+ '<p><b>LUZ EN LA CONFUSIÓN.</b> , —16  de Mayo de 1992.  Dirección:  Urbanización Montes de San Bartolo  3. Calle La Fuente, Polígono 46, Nº 3 Días y horas  de  reuniones: De Lunes  a Domingo de  7:30  a 9:00 p.m.  Miembros asistentes: 12 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow814 = new google.maps.InfoWindow({ content: contentString814 });   
        //markers  
        var marker814 = new google.maps.Marker({ position: point814, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "814.LUZ EN LA CONFUSIÓN." });
         //information for  
         function goToLink814() { infowindow814.open(map,marker814);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker814, 'click', goToLink814); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 815  
        //positions 
        var point815 = new google.maps.LatLng(13.713482, -89.138645); var contentString815 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">MENTE SANA (INSTITUCIONAL).</h1>'+ '<div id="bodyContent">'+ '<p><b>MENTE SANA (INSTITUCIONAL).</b> , —24 de Agosto de 2010.  Direc- ción: Hospital  Psiquiatrico Nacional, Soyapango. Miembros asisten- tes: 30 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow815 = new google.maps.InfoWindow({ content: contentString815 });   
        //markers  
        var marker815 = new google.maps.Marker({ position: point815, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "815.MENTE SANA (INSTITUCIONAL)." }); 
        //information for 
         function goToLink815() { infowindow815.open(map,marker815);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker815, 'click', goToLink815); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 816  
        //positions
        var point816 = new google.maps.LatLng(13.695627, -89.151584); var contentString816 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NUESTRO BIENESTAR.</h1>'+ '<div id="bodyContent">'+ '<p><b>NUESTRO BIENESTAR.</b> , —12 de Marzo de 1984.  Dirección:  Colonia Monte Carmelo Nº 2, Avenida  Las Palmas Casa No 205, Soyapango. Días y horas  de reuniones: De Lunes a Domingo de 7:00 a 9:00 p.m. Miembros asistentes: 7 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow816 = new google.maps.InfoWindow({ content: contentString816 });   
        //markers  
        var marker816 = new google.maps.Marker({ position: point816, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "816.NUESTRO BIENESTAR." }); 
        //information for  
        function goToLink816() { infowindow816.open(map,marker816);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker816, 'click', goToLink816); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 817  
        //positions 
        var point817 = new google.maps.LatLng(13.709758, -89.148302); var contentString817 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NUEVA VIDA EN VENECIA.</h1>'+ '<div id="bodyContent">'+ '<p><b>NUEVA VIDA EN VENECIA.</b> , — 26 de Octubre de 1985.  Dirección: Urbanización Prados de Venecia III Polígono 111, Pasaje  34 Casa N° 6, Soyapango. Días y horas  de  reuniones: De Lunes a Domingo de 7:00 a 9:00 p.m.  Miembros asistentes: 6 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow817 = new google.maps.InfoWindow({ content: contentString817 });   
        //markers  
        var marker817 = new google.maps.Marker({ position: point817, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "817.NUEVA VIDA EN VENECIA." }); 
        //information for  
        function goToLink817() { infowindow817.open(map,marker817);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker817, 'click', goToLink817); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 818  
        //positions 
        var point818 = new google.maps.LatLng(13.696060, -89.155087); var contentString818 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">PRIMERO DE DICIEMBRE.</h1>'+ '<div id="bodyContent">'+ '<p><b>PRIMERO DE DICIEMBRE.</b> , — 01 de Diciembre de 1973.  Dirección: Colonia  Florencia, Calle Principal  Nº 20-A. Días y horas  de  reunio- nes: De Lunes a Domingo de  7:00 a 9:00 pm. Miembros asistentes: 4 Hombres y 1 Mujer.</p>'+ '</div>'+ '</div>'; var infowindow818 = new google.maps.InfoWindow({ content: contentString818 });   
        //markers  
        var marker818 = new google.maps.Marker({ position: point818, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "818.PRIMERO DE DICIEMBRE." }); 
        //information for  
        function goToLink818() { infowindow818.open(map,marker818);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker818, 'click', goToLink818); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 819  
        //positions 
        var point819 = new google.maps.LatLng(13.713862, -89.132485); var contentString819 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">QUINTA TRADICIÓN.</h1>'+ '<div id="bodyContent">'+ '<p><b>QUINTA TRADICIÓN.</b> , — 27 de  Enero  de  1975.  Dirección:  Colonia San Luis, Cantón El Limón, Soyapango. Días y horas  de  reuniones: De Lunes a Domingo de  6:30  a 8:30  pm.  Miembros asistentes: 13 Hombres y 2 Mujeres.</p>'+ '</div>'+ '</div>'; var infowindow819 = new google.maps.InfoWindow({ content: contentString819 });   
        //markers  
        var marker819 = new google.maps.Marker({ position: point819, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "819.QUINTA TRADICIÓN." }); 
        //information for  
        function goToLink819() { infowindow819.open(map,marker819);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker819, 'click', goToLink819); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 820  
        //positions 
        var point820 = new google.maps.LatLng(13.716075, -89.118900); var contentString820 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">RENACER EN EL BOSQUE.</h1>'+ '<div id="bodyContent">'+ '<p><b>RENACER EN EL BOSQUE.</b> , —  12  de  Diciembre de  1982.  Dirección: Colonia Bosques del Río. 3ª Etapa, Pasaje  21, Casa N° 6 Grupo 31, Nº 3. Días y horas  de reuniones: De Lunes a Domingo de 7:00 a 9:00 p.m.  Miembros asistentes: 12 Hombres.B</p>'+ '</div>'+ '</div>'; var infowindow820 = new google.maps.InfoWindow({ content: contentString820 });   
        //markers  
        var marker820 = new google.maps.Marker({ position: point820, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "820.RENACER EN EL BOSQUE." }); 
        //information for  
        function goToLink820() { infowindow820.open(map,marker820);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker820, 'click', goToLink820); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 821  
        //positions 
        var point821 = new google.maps.LatLng(13.703034, -89.152078); var contentString821 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">RENACER EN  EL VALLE.</h1>'+ '<div id="bodyContent">'+ '<p><b>RENACER EN  EL VALLE.</b> , — 28  de  Febrero de  1980.  Dirección: Avenida  El Olmo  N° 351.  Días y horas  de  reuniones: De  Lunes  a Domingo de 7:30 a 9:30 pm. Miembros asistentes: 10 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow821 = new google.maps.InfoWindow({ content: contentString821 });   
        //markers  
        var marker821 = new google.maps.Marker({ position: point821, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "821.RENACER EN  EL VALLE." }); 
        //information for  
        function goToLink821() { infowindow821.open(map,marker821);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker821, 'click', goToLink821); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 822  
        //positions 
        var point822 = new google.maps.LatLng(13.735055, -89.135449); var contentString822 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">RENACER EN LAS CAMPANERAS.</h1>'+ '<div id="bodyContent">'+ '<p><b>RENACER EN LAS CAMPANERAS.</b> , — 19 de  Febrero de  2012.  Di- rección  Colonia  Las Campaneras, Calle Principal Polígono 17, Casa N° 1. Días y horas de reuniones: De Lunes a Domingo de 7:00 a 9:00 p.m.  Miembros asistentes: 10 Hombres y 4 Mujeres.</p>'+ '</div>'+ '</div>'; var infowindow822 = new google.maps.InfoWindow({ content: contentString822 });   
        //markers  
        var marker822 = new google.maps.Marker({ position: point822, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "822.RENACER EN LAS CAMPANERAS." }); 
        //information for  
        function goToLink822() { infowindow822.open(map,marker822);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker822, 'click', goToLink822); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 823  
        //positions 
        var point823 = new google.maps.LatLng(13.714542, -89.140467); var contentString823 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">RENACER EN PRUSIA 18  DE ENERO.</h1>'+ '<div id="bodyContent">'+ '<p><b>RENACER EN PRUSIA 18  DE ENERO.</b> , — 18  de  Enero  de  1992. Dirección:  Avenida  La Fuente, block 40, N° 19, Bosques de  Prusia. Días y horas  de reuniones: De Lunes a Domingo de 7:00 a 9:00 pm. Miembros asistentes: 20 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow823 = new google.maps.InfoWindow({ content: contentString823 });   
        //markers  
        var marker823 = new google.maps.Marker({ position: point823, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "823.RENACER EN PRUSIA 18  DE ENERO." }); 
        //information for  
        function goToLink823() { infowindow823.open(map,marker823);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker823, 'click', goToLink823); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 824  
        //positions 
        var point824 = new google.maps.LatLng(13.693985, -89.170798); var contentString824 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">RENACER  ESTRELLA DE SALVACIÓN.</h1>'+ '<div id="bodyContent">'+ '<p><b>RENACER  ESTRELLA DE SALVACIÓN.</b> , — 13 de Julio de 2007.  Di- rección:  Colonia  Amatepec, 3ª Etapa, Entrada de  Calle Unidad  de Salud “Amatepec”. Días y horas de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.  Miembros asistentes: 10 Hombres y 1 Mujer.</p>'+ '</div>'+ '</div>'; var infowindow824 = new google.maps.InfoWindow({ content: contentString824 });   
        //markers  
        var marker824 = new google.maps.Marker({ position: point824, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "824.RENACER  ESTRELLA DE SALVACIÓN." }); 
        //information for  
        function goToLink824() { infowindow824.open(map,marker824);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker824, 'click', goToLink824); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 825  
        //positions 
        var point825 = new google.maps.LatLng(13.697661, -89.155472); var contentString825 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">RENACER LAS MARGARITAS.</h1>'+ '<div id="bodyContent">'+ '<p><b>RENACER LAS MARGARITAS.</b> , — 14  de  Febrero de  1993.  Direc- ción: Urbanización Las Margaritas No 3, Avenida  Prusia Nº 229, sec- tor conocido como El Triangulo. Días y horas de reuniones: De Lunes a Domingo de 7:00 a 9:00 p.m.  Miembros asistentes: 18 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow825 = new google.maps.InfoWindow({ content: contentString825 });   
        //markers  
        var marker825 = new google.maps.Marker({ position: point825, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "825.RENACER LAS MARGARITAS." }); 
        //information for  
        function goToLink825() { infowindow825.open(map,marker825);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker825, 'click', goToLink825); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 826  
        //positions 
        var point826 = new google.maps.LatLng(13.711929, -89.139331); var contentString826 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">SER MUJER (INSTITUCIONAL).</h1>'+ '<div id="bodyContent">'+ '<p><b>SER MUJER (INSTITUCIONAL).</b> , —24 de  Agosto de  2011.  Direc- ción: Hospital  Psiquiatrico Nacional, Soyapango. Miembros asisten- tes: 10 Mujeres.</p>'+ '</div>'+ '</div>'; var infowindow826 = new google.maps.InfoWindow({ content: contentString826 });   
        //markers  
        var marker826 = new google.maps.Marker({ position: point826, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "826.SER MUJER (INSTITUCIONAL)." }); 
        //information for  
        function goToLink826() { infowindow826.open(map,marker826);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker826, 'click', goToLink826); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 827  
        //positions 
        var point827 = new google.maps.LatLng(13.699741, -89.160596); var contentString827 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">SERENIDAD.</h1>'+ '<div id="bodyContent">'+ '<p><b>SERENIDAD.</b> , — 29 de  Agosto de  1971.  Dirección:  Colonia  22 de Abril Zona Nº 2, Pasaje  Carballo, Casa Nº 10. Días y horas de reunio- nes: De Lunes a Domingo de 6:30 a 8:30 p.m. Miembros asistentes: 15 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow827 = new google.maps.InfoWindow({ content: contentString827 });   
        //markers  
        var marker827 = new google.maps.Marker({ position: point827, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "827.SERENIDAD." }); 
        //information for  
        function goToLink827() { infowindow827.open(map,marker827);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker827, 'click', goToLink827); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 828  
        //positions 
        var point828 = new google.maps.LatLng(13.719166, -89.133591); var contentString828 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">TRIUNFO DE MI HOGAR.</h1>'+ '<div id="bodyContent">'+ '<p><b>TRIUNFO DE MI HOGAR.</b> , — 01 de Julio de 1990.  Dirección:  Urbanización Montes de San Bartolo  Nº 4, Pasaje17, Polígono Nº 26, Nº 49. Días y horas  de  reuniones: De Lunes a Domingo de  7:00 a 9:00 p.m.  Miembros asistentes: 15 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow828 = new google.maps.InfoWindow({ content: contentString828 });   
        //markers  
        var marker828 = new google.maps.Marker({ position: point828, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "828.TRIUNFO DE MI HOGAR." }); 
        //information for  
        function goToLink828() { infowindow828.open(map,marker828);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker828, 'click', goToLink828); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 829  
        //positions 
        var point829 = new google.maps.LatLng(13.697192, -89.134946); var contentString829 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UN MILAGRO DE DIOS.</h1>'+ '<div id="bodyContent">'+ '<p><b>UN MILAGRO DE DIOS.</b> , — 07 de Junio  de 1966.  Dirección:  Comu- nidad María De Los Ángeles Hacienda Prusia,  Calle  Panamericana Km 7 ½. Días y horas  de  reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m.  Miembros asistentes: 6 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow829 = new google.maps.InfoWindow({ content: contentString829 });   
        //markers  
        var marker829 = new google.maps.Marker({ position: point829, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "829.UN MILAGRO DE DIOS." }); 
        //information for  
        function goToLink829() { infowindow829.open(map,marker829);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker829, 'click', goToLink829); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 830  
        //positions 
        var point830 = new google.maps.LatLng(13.709685, -89.149128); var contentString830 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UN  MILAGRO EN  VENECIA.</h1>'+ '<div id="bodyContent">'+ '<p><b>UN  MILAGRO EN  VENECIA.</b> , — 16  de  Julio  de  1983.  Dirección: Colonia Prados de Venecia I Grupo 2, Pasaje  N° 12 Soyapango. Días y horas  de  reuniones: De  Lunes  a  Domingo de  7:00  a  9:00  p.m. Miembros asistentes: 4 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow830 = new google.maps.InfoWindow({ content: contentString830 });   
        //markers  
        var marker830 = new google.maps.Marker({ position: point830, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "830.UN  MILAGRO EN  VENECIA." }); 
        //information for  
        function goToLink830() { infowindow830.open(map,marker830);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker830, 'click', goToLink830); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 831  
        //positions 
        var point831 = new google.maps.LatLng(13.729664, -89.145089); var contentString831 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UNA  LUZ EN EL PINO.</h1>'+ '<div id="bodyContent">'+ '<p><b>UNA  LUZ EN EL PINO.</b> , — 04 de  Noviembre de  1990.  Dirección: Cantón Plan del Pino, Calle Principal No  225, Ex instituto Galdámez. Días y horas  de reuniones: De Lunes a Domingo de 6:30 a 8:30 p.m. Miembros asistentes: 18 Hombres y 2 Mujeres.</p>'+ '</div>'+ '</div>'; var infowindow831 = new google.maps.InfoWindow({ content: contentString831 });   
        //markers 
         var marker831 = new google.maps.Marker({ position: point831, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "831.UNA  LUZ EN EL PINO." }); 
         //information for  
         function goToLink831() { infowindow831.open(map,marker831);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker831, 'click', goToLink831); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 832  
        //positions 
        var point832 = new google.maps.LatLng(13.707840, -89.144685); var contentString832 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UNA LUZ EN LA CORUÑA.</h1>'+ '<div id="bodyContent">'+ '<p><b>UNA LUZ EN LA CORUÑA.</b> , —27 de Marzo de 1983. Dirección:  Co- lonia  Coruña  1, Pasaje  1, Block “G”,  Casa  Nº 16.  Días y horas  de reuniones: De Lunes a Domingo de 7:00 a 9:00 p.m. Miembros asis- tentes: 15 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow832 = new google.maps.InfoWindow({ content: contentString832 });   
        //markers  
        var marker832 = new google.maps.Marker({ position: point832, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "832.UNA LUZ EN LA CORUÑA." }); 
        //information for  
        function goToLink832() { infowindow832.open(map,marker832);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker832, 'click', goToLink832); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 833  
        //positions 
        var point833 = new google.maps.LatLng(13.691481, -89.143667); var contentString833 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UNA LUZ EN LA SIERRA.</h1>'+ '<div id="bodyContent">'+ '<p><b>UNA LUZ EN LA SIERRA.</b> , —11 de Octubre de 1987. Dirección:  Co- lonia Sierra  Morena 1ª etapa, Avenida  Cerro  Verde  Nº 341.  Días y horas  de  reuniones: De Lunes a Sábado de  7:00 a 9:00 p.m.  y Do- mingo  de  5:00  a 7:00  p.m.  Miembros asistentes: 23 Hombres y 2 Mujeres.</p>'+ '</div>'+ '</div>'; var infowindow833 = new google.maps.InfoWindow({ content: contentString833 });   
        //markers  
        var marker833 = new google.maps.Marker({ position: point833, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "833.UNA LUZ EN LA SIERRA." }); 
        //information for  
        function goToLink833() { infowindow833.open(map,marker833);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker833, 'click', goToLink833); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 834  
        //positions 
        var point834 = new google.maps.LatLng(13.718975, -89.151510); var contentString834 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">VENECIA.</h1>'+ '<div id="bodyContent">'+ '<p><b>VENECIA.</b> , — 05 de Noviembre de 1966.  Dirección:  Parcelación Ca- brera  y Pasaje  Cabrera Nº 4, Calle a La Ciudadela Don Bosco. Días y horas  de reuniones: De Lunes a Domingo de 5:30 a 7:30 pm. Miem- bros  asistentes: 16 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow834 = new google.maps.InfoWindow({ content: contentString834 });   
        //markers  
        var marker834 = new google.maps.Marker({ position: point834, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "834.VENECIA." }); 
        //information for  
        function goToLink834() { infowindow834.open(map,marker834);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker834, 'click', goToLink834); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 835  
        //positions 
        var point835 = new google.maps.LatLng(13.719203, -89.137038); var contentString835 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">YUNQUE DEL 80.</h1>'+ '<div id="bodyContent">'+ '<p><b>YUNQUE DEL 80.</b> , —  14 de  Mayo de  1980.  Dirección:  Colonia  San José 2,  Calle  Principal,  Casa  Nº  35,  Soyapango. Días  y horas  de reuniones: De Lunes a Domingo de 7:00 a 9:00 p.m. Miembros asis- tentes: 18 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow835 = new google.maps.InfoWindow({ content: contentString835 });   
        //markers  
        var marker835 = new google.maps.Marker({ position: point835, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "835.YUNQUE DEL 80." }); 
        //information for  
        function goToLink835() { infowindow835.open(map,marker835);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker835, 'click', goToLink835); google.maps.event.addDomListener(window, 'load', initialize);

        //MARCADOR 836  
        //positions 
        var point836 = new google.maps.LatLng(13.779747, -89.115504); var contentString836 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">25  DE JUNIO.</h1>'+ '<div id="bodyContent">'+ '<p><b>25  DE JUNIO.</b> , — 25 de  Junio  de  1963.  Dirección:  1ª Calle  Orien- te  y 3ª  Avenida  Sur Barrio El Calvario.  Días y horas  de  reuniones: De Lunes a Domingo de  7:00 a 9:00 p.m.  Miembros asistentes: 21 Hombres y 1 Mujer.</p>'+ '</div>'+ '</div>'; var infowindow836 = new google.maps.InfoWindow({ content: contentString836 });   
        //markers  
        var marker836 = new google.maps.Marker({ position: point836, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "836.25  DE JUNIO." }); 
        //information for  
        function goToLink836() { infowindow836.open(map,marker836);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker836, 'click', goToLink836); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 837  
        //positions 
        var point837 = new google.maps.LatLng(13.779236, -89.122499); var contentString837 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">30 DE ENERO.</h1>'+ '<div id="bodyContent">'+ '<p><b>30 DE ENERO.</b> , — 30 de Enero de 1982. Dirección: Cantón Las Flores ½ Cuadra de Parada La tienda. Días y horas  de reuniones: De Lunes a Domingo de 7:00 a 9:00 p.m.  Miembros asistentes: 12 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow837 = new google.maps.InfoWindow({ content: contentString837 });   
        //markers  
        var marker837 = new google.maps.Marker({ position: point837, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "837.30 DE ENERO." }); 
        //information for  
        function goToLink837() { infowindow837.open(map,marker837);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker837, 'click', goToLink837); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 838  
        //positions 
        var point838 = new google.maps.LatLng(13.807005, -89.148585); var contentString838 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">BUSCANDO  LA FELICIDAD.</h1>'+ '<div id="bodyContent">'+ '<p><b>BUSCANDO  LA FELICIDAD.</b> , — 12 de  Septiembre de  1998.  Direc- ción: Avenida  Chamulapa, Block “B” Nº 4 Colonia Nueva  Jerusalén, contiguo a  Distrito  Italia.  Días  y horas  de  reuniones: De  Lunes  a Domingo de  7:00  a 9:00  p.m.  Miembros asistentes: 12 Hombres y 2 Mujeres.</p>'+ '</div>'+ '</div>'; var infowindow838 = new google.maps.InfoWindow({ content: contentString838 });   
        //markers  
        var marker838 = new google.maps.Marker({ position: point838, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "838.BUSCANDO  LA FELICIDAD." }); 
        //information for  
        function goToLink838() { infowindow838.open(map,marker838);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker838, 'click', goToLink838); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 839  
        //positions 
        var point839 = new google.maps.LatLng(13.771825, -89.129087); var contentString839 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">DIVINA PROVIDENCIA.</h1>'+ '<div id="bodyContent">'+ '<p><b>DIVINA PROVIDENCIA.</b> , — 07 de Mayo de 1972. Dirección: Cantón Rosario Km. 12. Días y horas  de reuniones: De Lunes a Domingo de 6:30 a 8:30 p.m.  Miembros asistentes: 7 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow839 = new google.maps.InfoWindow({ content: contentString839 });   
        //markers  
        var marker839 = new google.maps.Marker({ position: point839, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "839.DIVINA PROVIDENCIA." }); 
        //information for  
        function goToLink839() { infowindow839.open(map,marker839);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker839, 'click', goToLink839); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 840  
        //positions 
        var point840 = new google.maps.LatLng(13.667265, -89.219316); var contentString840 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">GÉNESIS.</h1>'+ '<div id="bodyContent">'+ '<p><b>GÉNESIS.</b> , — 26 Febrero de  2007.  Dirección:  Urbanización Cimas 2, San Bartolo,  Pasaje  N° 22 Polígono N° 21 Sur N° 23. Días y horas de  reuniones: De Lunes a Domingo de  7:00 a 9:00 p.m.  Miembros asistentes: 12 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow840 = new google.maps.InfoWindow({ content: contentString840 });   
        //markers  
        var marker840 = new google.maps.Marker({ position: point840, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "840.GÉNESIS." }); 
        //information for  
        function goToLink840() { infowindow840.open(map,marker840);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker840, 'click', goToLink840); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 841  
        //positions 
        var point841 = new google.maps.LatLng(13.782777, -89.121886); var contentString841 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">GRACIAS A DIOS.</h1>'+ '<div id="bodyContent">'+ '<p><b>GRACIAS A DIOS.</b> , — 15 de  Junio  de  1975.  Dirección:  Cantón Mal- acoff,  Caserío Los Parada. Días y horas  de  reuniones: De  Lunes  a Domingo de 6:00 a 8:00 p.m.  Miembros asistentes: 11 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow841 = new google.maps.InfoWindow({ content: contentString841 });   
        //markers 
         var marker841 = new google.maps.Marker({ position: point841, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "841.GRACIAS A DIOS." }); 
         //information for  
         function goToLink841() { infowindow841.open(map,marker841);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker841, 'click', goToLink841); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 842  
        //positions 
        var point842 = new google.maps.LatLng(13.780126, -89.116012); var contentString842 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">JÓVENES EN A.A.</h1>'+ '<div id="bodyContent">'+ '<p><b>JÓVENES EN A.A.</b> , — 09 de  Mayo de  1990.  Dirección:  Final Calle El Gólgota, costado Norte  de  Iglesia  El Calvario.  Días y horas  de reuniones: De Lunes a Domingo de 7:00 a 9:00 p.m. Miembros asis- tentes: 11 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow842 = new google.maps.InfoWindow({ content: contentString842 });   
        //markers  
        var marker842 = new google.maps.Marker({ position: point842, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "842.JÓVENES EN A.A." }); 
        //information for  
        function goToLink842() { infowindow842.open(map,marker842);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker842, 'click', goToLink842); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 843  
        //positions 
        var point843 = new google.maps.LatLng(13.779071, -89.120741); var contentString843 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">LA FE QUE OBRA.</h1>'+ '<div id="bodyContent">'+ '<p><b>LA FE QUE OBRA.</b> , — 12 de  Enero  de  2011.  Dirección:  Residencial Libertad Poligono D, Pasaje  16, N° 174. Días y horas  de  reuniones: De Lunes a Sábado de 6:00 a 8:00 p.m. y Domingo de 10:00 a 12:00 m.d.  Miembros asistentes: 11 Hombres y 1 Mujer.</p>'+ '</div>'+ '</div>'; var infowindow843 = new google.maps.InfoWindow({ content: contentString843 });   
        //markers  
        var marker843 = new google.maps.Marker({ position: point843, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "843.LA FE QUE OBRA." }); 
        //information for  
        function goToLink843() { infowindow843.open(map,marker843);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker843, 'click', goToLink843); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 844  
        //positions 
        var point844 = new google.maps.LatLng(13.745391, -89.105018); var contentString844 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">LUZ QUE VUELVE.</h1>'+ '<div id="bodyContent">'+ '<p><b>LUZ QUE VUELVE.</b> , — 02 de Octubre de 1973. Dirección: Cantón La Fuente. Días y horas  de  reuniones: De Lunes a Domingo de  6:00 a 8:00 pm. Miembros asistentes: 15 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow844 = new google.maps.InfoWindow({ content: contentString844 });   
        //markers  
        var marker844 = new google.maps.Marker({ position: point844, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "844.LUZ QUE VUELVE." }); 
        //information for  
        function goToLink844() { infowindow844.open(map,marker844);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker844, 'click', goToLink844); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 845  
        //positions 
        var point845 = new google.maps.LatLng(13.774010, -89.120523); var contentString845 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NUEVA LUZ.</h1>'+ '<div id="bodyContent">'+ '<p><b>NUEVA LUZ.</b> , — 10 de  Diciembre de  1992.  Dirección:  Caserío Los Henríquez, Cantón Malacoff.  Días y horas  de  reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.  Miembros asistentes: 15 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow845 = new google.maps.InfoWindow({ content: contentString845 });   
        //markers  
        var marker845 = new google.maps.Marker({ position: point845, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "845.NUEVA LUZ." }); 
        //information for  
        function goToLink845() { infowindow845.open(map,marker845);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker845, 'click', goToLink845); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 846  
        //positions 
        var point846 = new google.maps.LatLng(13.726932, -89.091692); var contentString846 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">RENACER 1º DE FEBRERO.</h1>'+ '<div id="bodyContent">'+ '<p><b>RENACER 1º DE FEBRERO.</b> , — 01 De Febrero de  2005.  Dirección: Colonia  Altavista,  Calle Flor de  Fuego, Condominio Nº 2 Polígono 17 Pasaje  41 Nº 121 Edificio “E”. Días y horas  de reuniones: De Lu- nes  a Domingo de  7:00 a 9:00 p.m.  Miembros asistentes: 14 Hom- bres.</p>'+ '</div>'+ '</div>'; var infowindow846 = new google.maps.InfoWindow({ content: contentString846 });   
        //markers  
        var marker846 = new google.maps.Marker({ position: point846, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "846.RENACER 1º DE FEBRERO." }); 
        //information for  
        function goToLink846() { infowindow846.open(map,marker846);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker846, 'click', goToLink846); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 847  
        //positions 
        var point847 = new google.maps.LatLng(13.735841, -89.092241); var contentString847 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">RENACER 06 DE JULIO.</h1>'+ '<div id="bodyContent">'+ '<p><b>RENACER 06 DE JULIO.</b> , — 06 de Julio de 1998. Dirección:  Caserío El Rincón, Cantón Veracruz,  Zona  Nº 1. Días y horas  de  reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m.  Miembros asistentes: 11 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow847 = new google.maps.InfoWindow({ content: contentString847 });   
        //markers  
        var marker847 = new google.maps.Marker({ position: point847, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "847.RENACER 06 DE JULIO." }); 
        //information for  
        function goToLink847() { infowindow847.open(map,marker847);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker847, 'click', goToLink847); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 848  
        //positions 
        var point848 = new google.maps.LatLng(13.781358, -89.125718); var contentString848 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">SIEMPRE FELICES.</h1>'+ '<div id="bodyContent">'+ '<p><b>SIEMPRE FELICES.</b> , — 10 de  Enero  de  1980.  Dirección:  Caserío Za- camil, Cantón La Fuente Tonacatepeque. Días y horas  de reuniones: De  Lunes  a Domingo de  6:00  a 8:00  p.m.  Miembros asistentes: 8 Hombres y 2 Mujeres.</p>'+ '</div>'+ '</div>'; var infowindow848 = new google.maps.InfoWindow({ content: contentString848 });   
        //markers  
        var marker848 = new google.maps.Marker({ position: point848, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "848.SIEMPRE FELICES." }); 
        //information for  
        function goToLink848() { infowindow848.open(map,marker848);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker848, 'click', goToLink848); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 849  
        //positions 
        var point849 = new google.maps.LatLng(13.795222, -89.130845); var contentString849 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">TRABAJANDO CON OTROS.</h1>'+ '<div id="bodyContent">'+ '<p><b>TRABAJANDO CON OTROS.</b> , — 25 de Septiembre de 1982.  Dirección: Colonia San José Las Flores, Calle Los Crotos, Pasaje  39, Block 42, Casa  Nº 21. Días y horas  de  reuniones: De Lunes a Viernes de 6:30 a 8:30 p.m.  Sábado y Domingo de  6:00 a 8:00 p.m.  Miembros asistentes: 7 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow849 = new google.maps.InfoWindow({ content: contentString849 });   
        //markers  
        var marker849 = new google.maps.Marker({ position: point849, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "849.TRABAJANDO CON OTROS." }); 
        //information for  
        function goToLink849() { infowindow849.open(map,marker849);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker849, 'click', goToLink849); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 850  
        //positions 
        var point850 = new google.maps.LatLng(13.817154, -89.145326); var contentString850 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UN RESCATE DE DIOS.</h1>'+ '<div id="bodyContent">'+ '<p><b>UN RESCATE DE DIOS.</b> , — 21 de  Mayo de  1991.  Dirección:  Colonia 10  de  Octubre Polígono “B” Nº 12, San José Las Flores.  Días y horas de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m. Miem- bros  asistentes: 12 Hombres y 6 Mujeres.</p>'+ '</div>'+ '</div>'; var infowindow850 = new google.maps.InfoWindow({ content: contentString850 });   
        //markers  
        var marker850 = new google.maps.Marker({ position: point850, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "850.UN RESCATE DE DIOS." }); 
        //information for  
        function goToLink850() { infowindow850.open(map,marker850);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker850, 'click', goToLink850); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 851  
        //positions 
        var point851 = new google.maps.LatLng(13.780867, -89.116711); var contentString851 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UNA BENDICIÓN DE DIOS.</h1>'+ '<div id="bodyContent">'+ '<p><b>UNA BENDICIÓN DE DIOS.</b> , — 10 de  Julio de  1999.  Dirección:  2ª Calle Oriente y Avenida  15 de  Septiembre, Barrio Concepción To- nacatepeque. Días y horas  de  reuniones: De Lunes a Domingo de 7:30 a 9:30 p.m.  Miembros asistentes: 15 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow851 = new google.maps.InfoWindow({ content: contentString851 });   
        //markers  
        var marker851 = new google.maps.Marker({ position: point851, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "851.UNA BENDICIÓN DE DIOS." }); 
        //information for  
        function goToLink851() { infowindow851.open(map,marker851);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker851, 'click', goToLink851); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 852  
        //positions 
        var point852 = new google.maps.LatLng(13.735074, -89.085311); var contentString852 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UNA LUZ EN ALTAVISTA.</h1>'+ '<div id="bodyContent">'+ '<p><b>UNA LUZ EN ALTAVISTA.</b> , —14 de  Enero  de  2007.  Dirección:  Resi- dencia Altavista, Block “J”  Norte, Pasaje  11 Nº 97. Días y horas  de reuniones: De Lunes a Domingo 7:00 a 9:00 p.m. Miembros asisten- tes: 7 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow852 = new google.maps.InfoWindow({ content: contentString852 });   
        //markers  
        var marker852 = new google.maps.Marker({ position: point852, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "852.UNA LUZ EN ALTAVISTA." }); 
        //information for  
        function goToLink852() { infowindow852.open(map,marker852);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker852, 'click', goToLink852); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 853  
        //positions 
        var point853 = new google.maps.LatLng(13.736071, -89.093239); var contentString853 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UNA  LUZ EN VERACRUZ.</h1>'+ '<div id="bodyContent">'+ '<p><b>UNA  LUZ EN VERACRUZ.</b> , — 15  de  Febrero de  1975.  Dirección: Cantón Veracruz  Jurisdicción de  Tonacatepeque. Días  y horas  de reuniones: De Lunes a Domingo de 5:00 a 7:00 p.m. Miembros asis- tentes: 15 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow853 = new google.maps.InfoWindow({ content: contentString853 });   
        //markers  
        var marker853 = new google.maps.Marker({ position: point853, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "853.UNA  LUZ EN VERACRUZ." }); 
        //information for  
        function goToLink853() { infowindow853.open(map,marker853);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker853, 'click', goToLink853); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 854  
        //positions 
        var point854 = new google.maps.LatLng(13.744604, -89.106316); var contentString854 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UNIDOS 24  DE OCTUBRE.</h1>'+ '<div id="bodyContent">'+ '<p><b>UNIDOS 24  DE OCTUBRE.</b> , — 24 de  Octubre de  1991.  Dirección: Cantón La Fuente Caserío Zacamil. 1 ½ Cuadra de  La entrada. Días y horas  de  reuniones: De  Lunes  a  Domingo de  6:30  a  8:30  p.m. Miembros asistentes: 21 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow854 = new google.maps.InfoWindow({ content: contentString854 });   
        //markers  
        var marker854 = new google.maps.Marker({ position: point854, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "854.UNIDOS 24  DE OCTUBRE." }); 
        //information for  
        function goToLink854() { infowindow854.open(map,marker854);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker854, 'click', goToLink854); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 855  
        //positions 
        var point855 = new google.maps.LatLng(13.807955, -89.144957); var contentString855 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">XOCHILT 04  DE JUNIO.</h1>'+ '<div id="bodyContent">'+ '<p><b>XOCHILT 04  DE JUNIO.</b> , — 04 de  Junio  de  1995.  Dirección:  Distri- to Italia, C Manzana  26, Pasaje  Volcán de  Santa  Ana, Casa  N° 29 . Días y horas  de reuniones: De Lunes a Domingo de 7:00 a 9:00 p.m. Miembros asistentes: 11 Hombres y 1 Mujer.</p>'+ '</div>'+ '</div>'; var infowindow855 = new google.maps.InfoWindow({ content: contentString855 });   
        //markers  
        var marker855 = new google.maps.Marker({ position: point855, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "855.XOCHILT 04  DE JUNIO." }); 
        //information for  
        function goToLink855() { infowindow855.open(map,marker855);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker855, 'click', goToLink855); google.maps.event.addDomListener(window, 'load', initialize);

  




  


}

