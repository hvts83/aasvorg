

function initialize() {


    //Map parametrs
    var mapOptions = {
        zoom: 10,
        center: new google.maps.LatLng(13.531445,-88.2719195),
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

        //MARCADOR 1318  
        //positions 
        var point1318 = new google.maps.LatLng(13.843547, -88.305636); var contentString1318 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">19 DE SEPTIEMBRE</h1>'+ '<div id="bodyContent">'+ '<p><b>19 DE SEPTIEMBRE</b> , .— 19 de Septiembre de 2007. Dirección: Calle Principal,  Barrio El Calvario.  Días y horas  de  reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.  Miembros asistentes: 12 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1318 = new google.maps.InfoWindow({ content: contentString1318 });   
        //markers  
        var marker1318 = new google.maps.Marker({ position: point1318, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1318.19 DE SEPTIEMBRE" }); 
        //information for  
        function goToLink1318() { infowindow1318.open(map,marker1318);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1318, 'click', goToLink1318); google.maps.event.addDomListener(window, 'load', initialize);

        //MARCADOR 1319  
        //positions 
        var point1319 = new google.maps.LatLng(13.849987, -88.305359); var contentString1319 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">FE Y ESPERANZA.</h1>'+ '<div id="bodyContent">'+ '<p><b>FE Y ESPERANZA.</b> , — 19 de  Julio de  1987.  Dirección:  Caserío Los Jobos, Rosas Masca Pilos. Días y horas  de reuniones: Lunes, Jueves y Sábado de 4:00 a 6:00 p.m.  Miembros asistentes: 9 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1319 = new google.maps.InfoWindow({ content: contentString1319 });   
        //markers  
        var marker1319 = new google.maps.Marker({ position: point1319, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1319.FE Y ESPERANZA." }); 
        //information for  
        function goToLink1319() { infowindow1319.open(map,marker1319);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1319, 'click', goToLink1319); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1320  
        //positions 
        var point1320 = new google.maps.LatLng(13.849304, -88.306968); var contentString1320 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">RENACIMIENTO.</h1>'+ '<div id="bodyContent">'+ '<p><b>RENACIMIENTO.</b> , — 12  de  Octubre de  2013.  Dirección:  Barrio El Centro, 2 Cuadras al Sur de Iglesia Católica. Días y horas  de reunio- nes: De Lunes a Domingo de 5:00 a 7:00 p.m. Miembros asistentes: 18 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1320 = new google.maps.InfoWindow({ content: contentString1320 });   
        //markers  
        var marker1320 = new google.maps.Marker({ position: point1320, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1320.RENACIMIENTO." }); 
        //information for  
        function goToLink1320() { infowindow1320.open(map,marker1320);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1320, 'click', goToLink1320); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1321  
        //positions 
        var point1321 = new google.maps.LatLng(13.851930, -88.307485); var contentString1321 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UNIÓN Y ESPERANZA.</h1>'+ '<div id="bodyContent">'+ '<p><b>UNIÓN Y ESPERANZA.</b> , — 06 de Agosto de 2000. Dirección:  Barrio San Agustín,  Carolina  Díaz. Días y horas  de  reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.  Miembros asistentes: 10 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1321 = new google.maps.InfoWindow({ content: contentString1321 });   
        //markers  
        var marker1321 = new google.maps.Marker({ position: point1321, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1321.UNIÓN Y ESPERANZA." }); 
        //information for  
        function goToLink1321() { infowindow1321.open(map,marker1321);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1321, 'click', goToLink1321); google.maps.event.addDomListener(window, 'load', initialize);

        //MARCADOR 1322  
        //positions 
        var point1322 = new google.maps.LatLng(13.755918, -88.265121); var contentString1322 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">04 DE DICIEMBRE.</h1>'+ '<div id="bodyContent">'+ '<p><b>04 DE DICIEMBRE.</b> , — 04 de Diciembre de 1993.  Dirección:  Cantón San Matías,  Ciudad Barrios. Días y horas  de  reuniones: De Lunes a Domingo de  5:00  a 7:00  p.m.  Miembros asistentes: 12 Hombres y 1 Mujer.</p>'+ '</div>'+ '</div>'; var infowindow1322 = new google.maps.InfoWindow({ content: contentString1322 });   
        //markers  
        var marker1322 = new google.maps.Marker({ position: point1322, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1322.04 DE DICIEMBRE." }); 
        //information for  
        function goToLink1322() { infowindow1322.open(map,marker1322);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1322, 'click', goToLink1322); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1323  
        //positions 
        var point1323 = new google.maps.LatLng(13.777108, -88.289694); var contentString1323 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">08 DE SEPTIEMBRE.</h1>'+ '<div id="bodyContent">'+ '<p><b>08 DE SEPTIEMBRE.</b> , — 08 de Septiembre de 2003. Dirección:  Can- tón  Belén,  Caserío La Joya.  Días y horas  de  reuniones: De Lunes a Domingo de  6:00  a 8:00  p.m.  Miembros asistentes: 10 Hombres y 1 Mujer.</p>'+ '</div>'+ '</div>'; var infowindow1323 = new google.maps.InfoWindow({ content: contentString1323 });   
        //markers 
         var marker1323 = new google.maps.Marker({ position: point1323, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1323.08 DE SEPTIEMBRE." });
        //information for  
        function goToLink1323() { infowindow1323.open(map,marker1323);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1323, 'click', goToLink1323); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1324  
        //positions 
        var point1324 = new google.maps.LatLng(13.764865, -88.270742); var contentString1324 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">09  DE ABRIL.</h1>'+ '<div id="bodyContent">'+ '<p><b>09  DE ABRIL.</b> , — 09 de  Abril de  1972.  Dirección:  Barrio El Centro. Días y horas  de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m. Miembros asistentes: 28 Hombres y 1 Mujer.</p>'+ '</div>'+ '</div>'; var infowindow1324 = new google.maps.InfoWindow({ content: contentString1324 });   
        //markers  
        var marker1324 = new google.maps.Marker({ position: point1324, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1324.09  DE ABRIL." }); 
        //information for  
        function goToLink1324() { infowindow1324.open(map,marker1324);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1324, 'click', goToLink1324); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1325  
        //positions 
        var point1325 = new google.maps.LatLng(13.755148, -88.269299); var contentString1325 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">10  DE MAYO.</h1>'+ '<div id="bodyContent">'+ '<p><b>10  DE MAYO.</b> , — 14  de  Abril de  1998.  Dirección:  Colonia  Bollat, Ciudad Barrios. Días y horas  de reuniones: De Lunes a Domingo de 5:00 a 7:00 p.m.  Miembros asistentes: 13 Hombres y 1 Mujer.</p>'+ '</div>'+ '</div>'; var infowindow1325 = new google.maps.InfoWindow({ content: contentString1325 });   
        //markers  
        var marker1325 = new google.maps.Marker({ position: point1325, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1325.10  DE MAYO." }); 
        //information for  
        function goToLink1325() { infowindow1325.open(map,marker1325);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1325, 'click', goToLink1325); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1326  
        //positions 
        var point1326 = new google.maps.LatLng(13.698429, -88.099510); var contentString1326 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">13 DE MAYO DE 2008 (INSTITUCIONAL).</h1>'+ '<div id="bodyContent">'+ '<p><b>13 DE MAYO DE 2008 (INSTITUCIONAL).</b> , — 13 de Mayo de 2008. Dirección:  Centro Penal  de  Ciudad Barrios. Días y horas  de  reunio- nes: Lunes de 2:00 a 4:00 p.m. y Miércoles  de 11:00 a.m. a 1:00 p.m. Miembros asistentes: 162 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1326 = new google.maps.InfoWindow({ content: contentString1326 });   
        //markers  
        var marker1326 = new google.maps.Marker({ position: point1326, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1326.13 DE MAYO DE 2008 (INSTITUCIONAL)." }); 
        //information for  
        function goToLink1326() { infowindow1326.open(map,marker1326);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1326, 'click', goToLink1326); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1327  
        //positions 
        var point1327 = new google.maps.LatLng(13.796857, -88.285663); var contentString1327 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">15 DE JULIO.</h1>'+ '<div id="bodyContent">'+ '<p><b>15 DE JULIO.</b> , — 15 de Julio de 1998. Dirección: Cantón Llano El Án- gel Centro, Desvío a California. Días y horas  de reuniones: De Lunes a Domingo de 4:00 a 6:30 p.m.  Miembros asistentes: 10 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1327 = new google.maps.InfoWindow({ content: contentString1327 });   
        //markers  
        var marker1327 = new google.maps.Marker({ position: point1327, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1327.15 DE JULIO." }); 
        //information for  
        function goToLink1327() { infowindow1327.open(map,marker1327);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1327, 'click', goToLink1327); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1328  
        //positions 
        var point1328 = new google.maps.LatLng(13.773430, -88.286659); var contentString1328 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">17  DE  FEBRERO.</h1>'+ '<div id="bodyContent">'+ '<p><b>17  DE  FEBRERO.</b> , — 17  de  Febrero de  2003.  Dirección:  Cantón Monseñor Cabrera. Días y horas  de reuniones: De Lunes a Domingo de 5:00 a 7:00 p.m.  Miembros asistentes: 4 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1328 = new google.maps.InfoWindow({ content: contentString1328 });  
        //markers  
        var marker1328 = new google.maps.Marker({ position: point1328, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1328.17  DE  FEBRERO." }); 
        //information for  
        function goToLink1328() { infowindow1328.open(map,marker1328);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1328, 'click', goToLink1328); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1329  
        //positions 
        var point1329 = new google.maps.LatLng(13.708703, -88.275123); var contentString1329 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">22 DE SEPTIEMBRE.</h1>'+ '<div id="bodyContent">'+ '<p><b>22 DE SEPTIEMBRE.</b> , — 22 de Septiembre de 1999. Dirección:  Can- tón  Nuevo  Porvenir,  1 Cuadra antes al templo Evangélico. Días y horas de reuniones: De Lunes a Domingo de 5:00 a 7:00 p.m. Miem- bros  asistentes: 12 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1329 = new google.maps.InfoWindow({ content: contentString1329 });   
        //markers  
        var marker1329 = new google.maps.Marker({ position: point1329, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1329.22 DE SEPTIEMBRE." }); 
        //information for  
        function goToLink1329() { infowindow1329.open(map,marker1329);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1329, 'click', goToLink1329); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1330  
        //positions 
        var point1330 = new google.maps.LatLng(13.801395, -88.277826); var contentString1330 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">24 DE ENERO.</h1>'+ '<div id="bodyContent">'+ '<p><b>24 DE ENERO.</b> , — 24 de Enero  de 2007.  Dirección:  Cantón Llano El Ángel,  Caserío San Antonio.  Días y horas  de  reuniones: De Lunes a Domingo de 5:00 a 7:00 p.m.  Miembros asistentes: 10 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1330 = new google.maps.InfoWindow({ content: contentString1330 });   
        //markers  
        var marker1330 = new google.maps.Marker({ position: point1330, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1330.24 DE ENERO." }); 
        //information for  
        function goToLink1330() { infowindow1330.open(map,marker1330);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1330, 'click', goToLink1330); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1331  
        //positions 
        var point1331 = new google.maps.LatLng(13.773430, -88.323511); var contentString1331 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">25  DE OCTUBRE.</h1>'+ '<div id="bodyContent">'+ '<p><b>25  DE OCTUBRE.</b> , — 25  de  Octubre de  2013.  Dirección:  Cantón Belén,  Caserío Concepción. Días y horas  de  reuniones: De  Lunes a Domingo de 5:00 a 6:00 p.m.  Miembros asistentes: 18 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1331 = new google.maps.InfoWindow({ content: contentString1331 });   
        //markers 
        var marker1331 = new google.maps.Marker({ position: point1331, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1331.25  DE OCTUBRE." }); 
        //information for  
        function goToLink1331() { infowindow1331.open(map,marker1331);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1331, 'click', goToLink1331); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1332  
        //positions 
        var point1332 = new google.maps.LatLng(13.769929, -88.257422); var contentString1332 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NUEVO  AMANECER 18  DE NOVIEMBRE.</h1>'+ '<div id="bodyContent">'+ '<p><b>NUEVO  AMANECER 18  DE NOVIEMBRE.</b> , — 18  de  Noviembre de 2007. Dirección:  Caserío Cerro de Arena, Cantón Guniste. Días y horas de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m. Miem- bros  asistentes: 7 Hombres y 1 Mujer.</p>'+ '</div>'+ '</div>'; var infowindow1332 = new google.maps.InfoWindow({ content: contentString1332 });   
        //markers  
        var marker1332 = new google.maps.Marker({ position: point1332, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1332.NUEVO  AMANECER 18  DE NOVIEMBRE." }); 
        //information for  
        function goToLink1332() { infowindow1332.open(map,marker1332);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1332, 'click', goToLink1332); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1333  
        //positions 
        var point1333 = new google.maps.LatLng(13.767442, -88.274015); var contentString1333 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UNA LUZ EN EL CALVARIO.</h1>'+ '<div id="bodyContent">'+ '<p><b>UNA LUZ EN EL CALVARIO.</b> , —  15 de Junio de 2000. Dirección: Ba- rrio El Calvario, Ciudad Barrios. Días y horas  de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.  Miembros asistentes: 12 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1333 = new google.maps.InfoWindow({ content: contentString1333 });   
        //markers  
        var marker1333 = new google.maps.Marker({ position: point1333, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1333.UNA LUZ EN EL CALVARIO." }); 
        //information for  
        function goToLink1333() { infowindow1333.open(map,marker1333);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1333, 'click', goToLink1333); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1334  
        //positions 
        var point1334 = new google.maps.LatLng(13.792877, -88.273207); var contentString1334 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">VIDA NUEVA.</h1>'+ '<div id="bodyContent">'+ '<p><b>VIDA NUEVA.</b> , — 26 de  Diciembre de  2005.  Dirección:  Cantón Llano  El Ángel.  Días y horas  de  reuniones: De  Lunes  a Domingo de 5:00 a 7:00 p.m.  Miembros asistentes: 12 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1334 = new google.maps.InfoWindow({ content: contentString1334 });   
        //markers  
        var marker1334 = new google.maps.Marker({ position: point1334, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1334.VIDA NUEVA." }); 
        //information for  
        function goToLink1334() { infowindow1334.open(map,marker1334);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1334, 'click', goToLink1334); google.maps.event.addDomListener(window, 'load', initialize);

        //MARCADOR 1335  
        //positions 
        var point1335 = new google.maps.LatLng(13.529035, -88.065440); var contentString1335 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">AMOR Y PAZ.</h1>'+ '<div id="bodyContent">'+ '<p><b>AMOR Y PAZ.</b> , — 19 de  Abril de  1996.  Dirección:  Caserío El Hor- miguero frente  a La Iglesia  Evangélica. Días y horas  de  reuniones: De  Lunes  a Domingo de  6:00  a 8:00  p.m.  Miembros asistentes: 7 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1335 = new google.maps.InfoWindow({ content: contentString1335 });   
        //markers  
        var marker1335 = new google.maps.Marker({ position: point1335, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1335.AMOR Y PAZ." }); 
        //information for  
        function goToLink1335() { infowindow1335.open(map,marker1335);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1335, 'click', goToLink1335); google.maps.event.addDomListener(window, 'load', initialize);

        //MARCADOR 1336  
        //positions 
        var point1336 = new google.maps.LatLng(13.635542, -88.262621); var contentString1336 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">10 DE MAYO.</h1>'+ '<div id="bodyContent">'+ '<p><b>10 DE MAYO.</b> , — 16 de Enero de 2005. Dirección:  Potosí,  Calle Prin- cipal, frente  a Iglesia Católica. Días y horas  de  reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.  Miembros asistentes: 10 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1336 = new google.maps.InfoWindow({ content: contentString1336 });   
        //markers  
        var marker1336 = new google.maps.Marker({ position: point1336, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1336.10 DE MAYO." }); 
        //information for  
        function goToLink1336() { infowindow1336.open(map,marker1336);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1336, 'click', goToLink1336); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1337  
        //positions 
        var point1337 = new google.maps.LatLng(13.638835, -88.262047); var contentString1337 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">14 DE AGOSTO.</h1>'+ '<div id="bodyContent">'+ '<p><b>14 DE AGOSTO.</b> , — 14 de Agosto de 1975. Dirección: Barrio San Pe- dro,  Chapeltique. Días y horas  de  reuniones: De Lunes a Domingo de 6:30 a 8:30 p.m.  Miembros asistentes: 28 Hombres y 2 Mujeres.</p>'+ '</div>'+ '</div>'; var infowindow1337 = new google.maps.InfoWindow({ content: contentString1337 });   
        //markers  
        var marker1337 = new google.maps.Marker({ position: point1337, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1337.14 DE AGOSTO." }); 
        //information for  
        function goToLink1337() { infowindow1337.open(map,marker1337);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1337, 'click', goToLink1337); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1338  
        //positions 
        var point1338 = new google.maps.LatLng(13.632855, -88.263511); var contentString1338 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">FUE MI ÚLTIMA COPA.</h1>'+ '<div id="bodyContent">'+ '<p><b>FUE MI ÚLTIMA COPA.</b> , — 27 de Abril de 1994.  Dirección:  Barrio el Centro, Santa  Lucía. Días y horas  de  reuniones: De Lunes a Domin- go de 6:00 a 8:00 p.m. Miembros asistentes: 26 Hombres y 1 Mujer.</p>'+ '</div>'+ '</div>'; var infowindow1338 = new google.maps.InfoWindow({ content: contentString1338 });   
        //markers  
        var marker1338 = new google.maps.Marker({ position: point1338, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1338.FUE MI ÚLTIMA COPA." }); 
        //information for  
        function goToLink1338() { infowindow1338.open(map,marker1338);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1338, 'click', goToLink1338); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1339  
        //positions 
        var point1339 = new google.maps.LatLng(13.644123, -88.243270); var contentString1339 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">HE VUELTO A NACER FELIZ.</h1>'+ '<div id="bodyContent">'+ '<p><b>HE VUELTO A NACER FELIZ.</b> , — 02 de  Junio  de  2003.  Dirección: Cantón San Jacinto. Días y horas  de  reuniones: De Lunes a Domin- go de 6:00 a 8:00 p.m.  Miembros asistentes: 20 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1339 = new google.maps.InfoWindow({ content: contentString1339 });   
        //markers  
        var marker1339 = new google.maps.Marker({ position: point1339, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1339.HE VUELTO A NACER FELIZ." }); 
        //information for  
        function goToLink1339() { infowindow1339.open(map,marker1339);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1339, 'click', goToLink1339); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1340  
        //positions 
        var point1340 = new google.maps.LatLng(13.629614, -88.246882); var contentString1340 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">LUZ Y ESPERANZA.</h1>'+ '<div id="bodyContent">'+ '<p><b>LUZ Y ESPERANZA.</b> , — 09 de  Mayo de  2013.  Dirección:  Hacienda Singaltíque, Chapeltíque. Días  y horas  de  reuniones: De  Lunes  a Domingo de 4:00 a 6:00 p.m.  Miembros asistentes: 10 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1340 = new google.maps.InfoWindow({ content: contentString1340 });   
        //markers  
        var marker1340 = new google.maps.Marker({ position: point1340, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1340.LUZ Y ESPERANZA." }); 
        //information for  
        function goToLink1340() { infowindow1340.open(map,marker1340);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1340, 'click', goToLink1340); google.maps.event.addDomListener(window, 'load', initialize);

        //MARCADOR 1341  
        //positions 
        var point1341 = new google.maps.LatLng(13.509670, -88.346941); var contentString1341 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">CHINAMECA.</h1>'+ '<div id="bodyContent">'+ '<p><b>CHINAMECA.</b> , —  06  de   Noviembre  de   1970.   Dirección:   Aveni- da  Francisco  Araniva,  Barrio San Juan.  Días y horas  de  reuniones: De Lunes a Domingo de  7:00 a 9:00 p.m.  Miembros asistentes: 14 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1341 = new google.maps.InfoWindow({ content: contentString1341 });   
        //markers  
        var marker1341 = new google.maps.Marker({ position: point1341, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1341.CHINAMECA." }); 
        //information for  
        function goToLink1341() { infowindow1341.open(map,marker1341);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1341, 'click', goToLink1341); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1342  
        //positions 
        var point1342 = new google.maps.LatLng(13.513144, -88.348163); var contentString1342 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">DOLORES.</h1>'+ '<div id="bodyContent">'+ '<p><b>DOLORES.</b> , — 15 de Abril de 1972.  Dirección:  Barrio Dolores. Días y horas de reuniones: De Lunes a Domingo de 7:00 a 9:00 p.m. Miem- bros  asistentes: 20 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1342 = new google.maps.InfoWindow({ content: contentString1342 });   
        //markers  
        var marker1342 = new google.maps.Marker({ position: point1342, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1342.DOLORES." }); 
        //information for  
        function goToLink1342() { infowindow1342.open(map,marker1342);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1342, 'click', goToLink1342); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1343  
        //positions 
        var point1343 = new google.maps.LatLng(13.515331, -88.346027); var contentString1343 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">LA CEDE.</h1>'+ '<div id="bodyContent">'+ '<p><b>LA CEDE.</b> , — 28 de Marzo de 2008.  Dirección:  Calle Principal, Colo- nia Santa  Cecilia. Días y horas  de  reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.  Miembros asistentes: 14 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1343 = new google.maps.InfoWindow({ content: contentString1343 });   
        //markers  
        var marker1343 = new google.maps.Marker({ position: point1343, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1343.LA CEDE." }); 
        //information for  
        function goToLink1343() { infowindow1343.open(map,marker1343);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1343, 'click', goToLink1343); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1344  
        //positions 
        var point1344 = new google.maps.LatLng(13.508905, -88.351992); var contentString1344 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">LO MEJOR DE BILL.</h1>'+ '<div id="bodyContent">'+ '<p><b>LO MEJOR DE BILL.</b> , — 14 de Abril de 2010.  Dirección:  Barrio Yusi- que, Nº 2. Días y horas  de  reuniones: De Lunes a Domingo de  7:00 a 9:00 p.m.  Miembros asistentes: 7 Hombres y 1 Mujer.</p>'+ '</div>'+ '</div>'; var infowindow1344 = new google.maps.InfoWindow({ content: contentString1344 });   
        //markers  
        var marker1344 = new google.maps.Marker({ position: point1344, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1344.LO MEJOR DE BILL." }); 
        //information for  
        function goToLink1344() { infowindow1344.open(map,marker1344);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1344, 'click', goToLink1344); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1345  
        //positions 
        var point1345 = new google.maps.LatLng(13.515814, -88.354154); var contentString1345 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">MILAGRO DE DIOS.</h1>'+ '<div id="bodyContent">'+ '<p><b>MILAGRO DE DIOS.</b> , — 20 de Marzo de 2003.  Dirección:  Cantón El Joc Oriente, Hacienda San Isidro. Días y horas  de reuniones: De Lu- nes  a Domingo de  7:00 a 9:00 p.m.  Miembros asistentes: 15 Hom- bres.</p>'+ '</div>'+ '</div>'; var infowindow1345 = new google.maps.InfoWindow({ content: contentString1345 });   
        //markers  
        var marker1345 = new google.maps.Marker({ position: point1345, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1345.MILAGRO DE DIOS." }); 
        //information for  
        function goToLink1345() { infowindow1345.open(map,marker1345);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1345, 'click', goToLink1345); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1346  
        //positions 
        var point1346 = new google.maps.LatLng(13.513065, -88.346865); var contentString1346 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NUEVA DIMENSIÓN.</h1>'+ '<div id="bodyContent">'+ '<p><b>NUEVA DIMENSIÓN.</b> , — 26 de  Abril de  2008.  Dirección:  3ª Calle Oriente N° 7-A, Barrio Dolores. Días y horas  de reuniones: De Lunes a Domingo de 7:00 a 9:00 p.m.  Miembros asistentes: 12 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1346 = new google.maps.InfoWindow({ content: contentString1346 });   
        //markers 
         var marker1346 = new google.maps.Marker({ position: point1346, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1346.NUEVA DIMENSIÓN." }); 
         //information for  
         function goToLink1346() { infowindow1346.open(map,marker1346);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1346, 'click', goToLink1346); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1347  
        //positions 
        var point1347 = new google.maps.LatLng(13.516399, -88.334587); var contentString1347 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NUEVA SALVACIÓN.</h1>'+ '<div id="bodyContent">'+ '<p><b>NUEVA SALVACIÓN.</b> , — 20  de  Junio  de  1975.  Dirección:  Cantón Planes  1o, Desvío  El Huehuecho. Días y horas  de  reuniones: De Lu- nes  a Domingo de  5:30 a 7:30 p.m.  Miembros asistentes: 10 Hom- bres.</p>'+ '</div>'+ '</div>'; var infowindow1347 = new google.maps.InfoWindow({ content: contentString1347 });   
        //markers  
        var marker1347 = new google.maps.Marker({ position: point1347, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1347.NUEVA SALVACIÓN." }); 
        //information for  
        function goToLink1347() { infowindow1347.open(map,marker1347);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1347, 'click', goToLink1347); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1348  
        //positions 
        var point1348 = new google.maps.LatLng(13.503972, -88.337463); var contentString1348 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NUEVO AMANECER.</h1>'+ '<div id="bodyContent">'+ '<p><b>NUEVO AMANECER.</b> , — 25 de  Octubre de  1985.  Dirección:  Can- tón Cruz Primavera. Días y horas de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.  Miembros asistentes: 26 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1348 = new google.maps.InfoWindow({ content: contentString1348 });   
        //markers  
        var marker1348 = new google.maps.Marker({ position: point1348, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1348.NUEVO AMANECER." }); 
        //information for  
        function goToLink1348() { infowindow1348.open(map,marker1348);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1348, 'click', goToLink1348); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1349  
        //positions 
        var point1349 = new google.maps.LatLng(13.509888, -88.356557); var contentString1349 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">PAZ Y ALEGRÍA.</h1>'+ '<div id="bodyContent">'+ '<p><b>PAZ Y ALEGRÍA.</b> , — 02 de  Febrero de  1980.  Dirección:  Cantón Zaragoza. Días y horas  de  reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m.  Miembros asistentes: 15 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1349 = new google.maps.InfoWindow({ content: contentString1349 });   
        //markers  
        var marker1349 = new google.maps.Marker({ position: point1349, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1349.PAZ Y ALEGRÍA." }); 
        //information for  
        function goToLink1349() { infowindow1349.open(map,marker1349);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1349, 'click', goToLink1349); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1350  
        //positions 
        var point1350 = new google.maps.LatLng(13.508649, -88.346118); var contentString1350 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">RECUPERADOS EN A.A.  21  DE FEBRERO.</h1>'+ '<div id="bodyContent">'+ '<p><b>RECUPERADOS EN A.A.  21  DE FEBRERO.</b> , — 21 de  Febrero de 2011.  Dirección:  7a  Avenida  Sur, Barrio El Calvario.  Días y horas  de reuniones: De Lunes a Domingo de 7:00 a 9:00 p.m. Miembros asis- tentes: 6 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1350 = new google.maps.InfoWindow({ content: contentString1350 });   
        //markers  
        var marker1350 = new google.maps.Marker({ position: point1350, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1350.RECUPERADOS EN A.A.  21  DE FEBRERO." }); 
        //information for  
        function goToLink1350() { infowindow1350.open(map,marker1350);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1350, 'click', goToLink1350); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1351  
        //positions 
        var point1351 = new google.maps.LatLng(13.509283, -88.348832); var contentString1351 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">REFORMA.</h1>'+ '<div id="bodyContent">'+ '<p><b>REFORMA.</b> , — 10 de  Abril de  1964.  Dirección:  Barrio El Centro 4ª Avenida  y Calle Gerardo Barrios. Días y horas  de  reuniones: De Lu- nes  a Domingo de  7:00 a 9:00 p.m.  Miembros asistentes: 12 Hom- bres.</p>'+ '</div>'+ '</div>'; var infowindow1351 = new google.maps.InfoWindow({ content: contentString1351 });   
        //markers  
        var marker1351 = new google.maps.Marker({ position: point1351, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1351.REFORMA." }); 
        //information for  
        function goToLink1351() { infowindow1351.open(map,marker1351);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1351, 'click', goToLink1351); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1352  
        //positions 
        var point1352 = new google.maps.LatLng(13.511156, -88.349959); var contentString1352 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">RENACIMIENTO 10 DE JUNIO.</h1>'+ '<div id="bodyContent">'+ '<p><b>RENACIMIENTO 10 DE JUNIO.</b> , — 10 de Junio de 1982. Dirección: Barrio Yusique, Calle  Valentín  Villegas  y 3ª  Avenida  Norte. Días y horas de reuniones: De Lunes a Domingo de 7:00 a 9:00 p.m. Miem- bros  asistentes: 9 Hombres y 1 Mujer.</p>'+ '</div>'+ '</div>'; var infowindow1352 = new google.maps.InfoWindow({ content: contentString1352 });   
        //markers  
        var marker1352 = new google.maps.Marker({ position: point1352, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1352.RENACIMIENTO 10 DE JUNIO." }); 
        //information for  
        function goToLink1352() { infowindow1352.open(map,marker1352);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1352, 'click', goToLink1352); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1353  
        //positions 
        var point1353 = new google.maps.LatLng(13.521509, -88.339455); var contentString1353 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">SÍMBOLO DE PAZ.</h1>'+ '<div id="bodyContent">'+ '<p><b>SÍMBOLO DE PAZ.</b> , — 10 de Agosto de 2012. Dirección: Cantón Las Mesas.  2 Cuadras al Norte  de  La Carpintería de  Efraín. Días y horas de  reuniones: De Lunes a Domingo de  6:00 a 7:30 p.m.  Miembros asistentes: 20 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1353 = new google.maps.InfoWindow({ content: contentString1353 });   
        //markers  
        var marker1353 = new google.maps.Marker({ position: point1353, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1353.SÍMBOLO DE PAZ." }); 
        //information for  
        function goToLink1353() { infowindow1353.open(map,marker1353);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1353, 'click', goToLink1353); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1354  
        //positions 
        var point1354 = new google.maps.LatLng(13.459905, -88.287338); var contentString1354 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">SOBRIEDAD EN LAS COLINAS.</h1>'+ '<div id="bodyContent">'+ '<p><b>SOBRIEDAD EN LAS COLINAS.</b> , — 25  de  Marzo  de  1974.  Direc- ción: Cantón Conacastal, Caserío La Cruz. Días y horas  de  reunio- nes: De Lunes a Domingo de 4:30 a 6:30 p.m. Miembros asistentes: 12 Hombres</p>'+ '</div>'+ '</div>'; var infowindow1354 = new google.maps.InfoWindow({ content: contentString1354 });   
        //markers  
        var marker1354 = new google.maps.Marker({ position: point1354, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1354.SOBRIEDAD EN LAS COLINAS." }); 
        //information for  
        function goToLink1354() { infowindow1354.open(map,marker1354);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1354, 'click', goToLink1354); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1355  
        //positions 
        var point1355 = new google.maps.LatLng(13.491638, -88.336414); var contentString1355 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">SOLO DIOS CON NOSOTROS.</h1>'+ '<div id="bodyContent">'+ '<p><b>SOLO DIOS CON NOSOTROS.</b> , — Dirección:  Calle Principal,  Can- tón Planes  Terceros. Días y horas  de  reuniones: De Lunes a Sábado de 6:00 a 8:00 p.m.  Miembros asistentes: 14 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1355 = new google.maps.InfoWindow({ content: contentString1355 });   
        //markers  
        var marker1355 = new google.maps.Marker({ position: point1355, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1355.SOLO DIOS CON NOSOTROS." }); 
        //information for  
        function goToLink1355() { infowindow1355.open(map,marker1355);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1355, 'click', goToLink1355); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1356  
        //positions 
        var point1356 = new google.maps.LatLng(13.497963, -88.331223); var contentString1356 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UN LLAMADO DE DIOS.</h1>'+ '<div id="bodyContent">'+ '<p><b>UN LLAMADO DE DIOS.</b> , — 06 de  Junio  de  1976.  Dirección:  Can- tón Planes  2o, Caserío Las Lilas. Días y horas  de reuniones: De Lunes a Sábado de 6:00 a 8:00 p.m.  Miembros asistentes: 15 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1356 = new google.maps.InfoWindow({ content: contentString1356 });   
        //markers  
        var marker1356 = new google.maps.Marker({ position: point1356, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1356.UN LLAMADO DE DIOS." }); 
        //information for  
        function goToLink1356() { infowindow1356.open(map,marker1356);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1356, 'click', goToLink1356); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1357  
        //positions 
        var point1357 = new google.maps.LatLng(13.505141, -88.348690); var contentString1357 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UNIDOS PARA SIEMPRE.</h1>'+ '<div id="bodyContent">'+ '<p><b>UNIDOS PARA SIEMPRE.</b> , — 13 de Marzo de 1979.  Dirección:  Can- tón  Planes  1o,  Caserío Santa  Lucía. Días y horas  de  reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m. Miembros asistentes: 8 Hom- bres</p>'+ '</div>'+ '</div>'; var infowindow1357 = new google.maps.InfoWindow({ content: contentString1357 });   
        //markers  
        var marker1357 = new google.maps.Marker({ position: point1357, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1357.UNIDOS PARA SIEMPRE." }); 
        //information for  
        function goToLink1357() { infowindow1357.open(map,marker1357);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1357, 'click', goToLink1357); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1358  
        //positions 
        var point1358 = new google.maps.LatLng(13.499877, -88.332060); var contentString1358 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UNIDOS VENCEREMOS.</h1>'+ '<div id="bodyContent">'+ '<p><b>UNIDOS VENCEREMOS.</b> , — 19 de  Mayo de  1997.  Dirección:  Cantón  Planes  2o. Días y horas  de  reuniones: De Lunes a Domingo de 7:00 a 9:00 p.m.  Miembros asistentes: 10 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1358 = new google.maps.InfoWindow({ content: contentString1358 });   
        //markers  
        var marker1358 = new google.maps.Marker({ position: point1358, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1358.UNIDOS VENCEREMOS." }); 
        //information for  
        function goToLink1358() { infowindow1358.open(map,marker1358);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1358, 'click', goToLink1358); google.maps.event.addDomListener(window, 'load', initialize);

        //MARCADOR 1359  
        //positions 
        var point1359 = new google.maps.LatLng(13.223689, -88.139577); var contentString1359 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">02  DE JUNIO.</h1>'+ '<div id="bodyContent">'+ '<p><b>02  DE JUNIO.</b> , — 02 de  Junio  de  2009.  Dirección:  ½ Cuadra al Sur de  Gasolinera El Cuco.  Días y horas  de  reuniones: De Lunes a Do- mingo  de  4:00  a 6:00  p.m.  Miembros asistentes: 20 Hombres y 4 Mujeres.</p>'+ '</div>'+ '</div>'; var infowindow1359 = new google.maps.InfoWindow({ content: contentString1359 });   
        //markers  
        var marker1359 = new google.maps.Marker({ position: point1359, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1359.02  DE JUNIO." }); 
        //information for  
        function goToLink1359() { infowindow1359.open(map,marker1359);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1359, 'click', goToLink1359); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1360  
        //positions 
        var point1360 = new google.maps.LatLng(13.220537, -88.139646); var contentString1360 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">14  DE ABRIL.</h1>'+ '<div id="bodyContent">'+ '<p><b>14  DE ABRIL.</b> , — 14 de  Abril de  1976.  Dirección:  Barrio El Centro, Chirilagua. Días y horas  de reuniones: De Lunes a Domingo de 4:00 a 6:00 p.m.  Miembros asistentes: 20 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1360 = new google.maps.InfoWindow({ content: contentString1360 });   
        //markers  
        var marker1360 = new google.maps.Marker({ position: point1360, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1360.14  DE ABRIL." }); 
        //information for  
        function goToLink1360() { infowindow1360.open(map,marker1360);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1360, 'click', goToLink1360); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1361  
        //positions 
        var point1361 = new google.maps.LatLng(13.218251, -88.136297); var contentString1361 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">CAMINO HACIA EL BIEN.</h1>'+ '<div id="bodyContent">'+ '<p><b>CAMINO HACIA EL BIEN.</b> , — 14  de  Junio  de  1970.  Dirección:  1 Cuadra al Norte  de  Iglesia Católica  Chirilagua. Días y horas  de  reu- niones: De Lunes a Domingo de 5:00 a 7:00 p.m. Miembros asisten- tes: 29 Hombres y 1 Mujer.</p>'+ '</div>'+ '</div>'; var infowindow1361 = new google.maps.InfoWindow({ content: contentString1361 });   
        //markers  
        var marker1361 = new google.maps.Marker({ position: point1361, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1361.CAMINO HACIA EL BIEN." }); 
        //information for  
        function goToLink1361() { infowindow1361.open(map,marker1361);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1361, 'click', goToLink1361); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1362  
        //positions 
        var point1362 = new google.maps.LatLng(13.214176, -88.128130); var contentString1362 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">FE Y ESPERANZA.</h1>'+ '<div id="bodyContent">'+ '<p><b>FE Y ESPERANZA.</b> , — 29 de  Mayo  de  1976.  Dirección:  Cantón El Cuco,  Caserío La Bomba. Días y horas  de  reuniones: De  Lunes  a Domingo de 4:00 a 6:00 p.m.  Miembros asistentes: 9 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1362 = new google.maps.InfoWindow({ content: contentString1362 });   
        //markers  
        var marker1362 = new google.maps.Marker({ position: point1362, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1362.FE Y ESPERANZA." }); 
        //information for  
        function goToLink1362() { infowindow1362.open(map,marker1362);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1362, 'click', goToLink1362); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1363  
        //positions 
        var point1363 = new google.maps.LatLng(13.220023, -88.136253); var contentString1363 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">HEREDEROS DE BILL.</h1>'+ '<div id="bodyContent">'+ '<p><b>HEREDEROS DE BILL.</b> , — 12 de  Junio  de  2013.  Dirección:  Cantón Gualoso, 2 Cuadras atrás  de  La Iglesia.  Días y horas  de  reuniones: De Lunes a Domingo de  4:00 a 6:00 p.m.  Miembros asistentes: 15 Hombres y 1 Mujer.</p>'+ '</div>'+ '</div>'; var infowindow1363 = new google.maps.InfoWindow({ content: contentString1363 });   
        //markers  
        var marker1363 = new google.maps.Marker({ position: point1363, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1363.HEREDEROS DE BILL." }); 
        //information for  
        function goToLink1363() { infowindow1363.open(map,marker1363);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1363, 'click', goToLink1363); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1364  
        //positions 
        var point1364 = new google.maps.LatLng(13.222396, -88.139492); var contentString1364 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">LÁGRIMAS DE SAN PEDRO.</h1>'+ '<div id="bodyContent">'+ '<p><b>LÁGRIMAS DE SAN PEDRO.</b> , — 03 de  Agosto de1976. Dirección: Cantón San Pedro, frente  al Centro Escolar.  Días y horas  de  reunio- nes:  De Lunes a Sábado de  3:00 a 5:00 p.m.  y Domingo de  8:00 a 10:00 a.m., Miembros asistentes: 16 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1364 = new google.maps.InfoWindow({ content: contentString1364 });   
        //markers  
        var marker1364 = new google.maps.Marker({ position: point1364, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1364.LÁGRIMAS DE SAN PEDRO." }); 
        //information for  
        function goToLink1364() { infowindow1364.open(map,marker1364);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1364, 'click', goToLink1364); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1365  
        //positions 
        var point1365 = new google.maps.LatLng(13.214420, -88.127965); var contentString1365 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">LIBERACIÓN EN A.A.</h1>'+ '<div id="bodyContent">'+ '<p><b>LIBERACIÓN EN A.A.</b> , — 03 de  Septiembre de  1986.  Dirección:  70 metros al Sur de  Parada de  buses, Cantón El Cuco.  Días y horas  de reuniones: De Lunes a Domingo de 4:30 a 6:30 p.m. Miembros asis- tentes: 15 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1365 = new google.maps.InfoWindow({ content: contentString1365 });   
        //markers  
        var marker1365 = new google.maps.Marker({ position: point1365, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1365.LIBERACIÓN EN A.A." }); 
        //information for  
        function goToLink1365() { infowindow1365.open(map,marker1365);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1365, 'click', goToLink1365); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1366  
        //positions 
        var point1366 = new google.maps.LatLng(13.229011, -88.139759); var contentString1366 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NUEVA VIDA DE GUALOSITO.</h1>'+ '<div id="bodyContent">'+ '<p><b>NUEVA VIDA DE GUALOSITO.</b> , — 18 de Mayo de 1992.  Dirección: Cantón San Huazo. Días y horas  de reuniones: De Lunes a Domingo de 3:00 a 5:00 p.m.  Miembros asistentes: 25 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1366 = new google.maps.InfoWindow({ content: contentString1366 });   
        //markers  
        var marker1366 = new google.maps.Marker({ position: point1366, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1366.NUEVA VIDA DE GUALOSITO." }); 
        //information for  
        function goToLink1366() { infowindow1366.open(map,marker1366);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1366, 'click', goToLink1366); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1367  
        //positions 
        var point1367 = new google.maps.LatLng(13.222326, -88.137828); var contentString1367 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NUEVA VIDA.</h1>'+ '<div id="bodyContent">'+ '<p><b>NUEVA VIDA.</b> , — 18 de Mayo de 1992.  Dirección:  Cantón San José Gualoso, 1 Cuadra al Sur de  La Cancha. Días y horas  de  reuniones: De Lunes a Domingo de  3:00 a 5:00 p.m.  Miembros asistentes: 15 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1367 = new google.maps.InfoWindow({ content: contentString1367 });   
        //markers  
        var marker1367 = new google.maps.Marker({ position: point1367, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1367.NUEVA VIDA." }); 
        //information for  
        function goToLink1367() { infowindow1367.open(map,marker1367);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1367, 'click', goToLink1367); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1368  
        //positions 
        var point1368 = new google.maps.LatLng(13.222817, -88.138805); var contentString1368 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NUEVO  AMANECER GUALOSO.</h1>'+ '<div id="bodyContent">'+ '<p><b>NUEVO  AMANECER GUALOSO.</b> , — 24 de  Junio  de  1983.  Direc- ción: Cantón San José Gualoso, 1 Cuadra al Sur de La Cancha. Días y horas  de  reuniones: De  Lunes  a  Domingo de  4:00  a  6:00  p.m. Miembros asistentes: 23 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1368 = new google.maps.InfoWindow({ content: contentString1368 });   
        //markers  
        var marker1368 = new google.maps.Marker({ position: point1368, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1368.NUEVO  AMANECER GUALOSO." }); 
        //information for  
        function goToLink1368() { infowindow1368.open(map,marker1368);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1368, 'click', goToLink1368); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1369  
        //positions 
        var point1369 = new google.maps.LatLng(13.217250, -88.128122); var contentString1369 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NUEVO DESPERTAR.</h1>'+ '<div id="bodyContent">'+ '<p><b>NUEVO DESPERTAR.</b> , — 07 de  Enero  de  2003.  Dirección:  Caserío Zapatagua, Carretera al Cuco.  Días y horas  de  reuniones: De Lunes a Sábado de  4:00  a 6:00  p.m.  y Domingo de  9:00  a 11:00  a.m., Miembros asistentes: 10 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1369 = new google.maps.InfoWindow({ content: contentString1369 });   
        //markers  
        var marker1369 = new google.maps.Marker({ position: point1369, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1369.NUEVO DESPERTAR." }); 
        //information for  
        function goToLink1369() { infowindow1369.open(map,marker1369);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1369, 'click', goToLink1369); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1370  
        //positions 
        var point1370 = new google.maps.LatLng(13.230765, -88.135039); var contentString1370 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">RENACER 28  DE MAYO.</h1>'+ '<div id="bodyContent">'+ '<p><b>RENACER 28  DE MAYO.</b> , — 28 de  Mayo de  2011.  Dirección:  Cantón Guadalupe. Días y horas  de reuniones: De Lunes a Domingo de 4:00 a 6:00 p.m.  Miembros asistentes: 13 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1370 = new google.maps.InfoWindow({ content: contentString1370 });   
        //markers  
        var marker1370 = new google.maps.Marker({ position: point1370, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1370.RENACER 28  DE MAYO." }); 
        //information for  
        function goToLink1370() { infowindow1370.open(map,marker1370);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1370, 'click', goToLink1370); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1371  
        //positions 
        var point1371 = new google.maps.LatLng(13.216310, -88.138214); var contentString1371 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">TRES LEGADOS.</h1>'+ '<div id="bodyContent">'+ '<p><b>TRES LEGADOS.</b> , — 15 de  Octubre de  1984.  Dirección:  Barrio San Antonio  Nº  1,  Chirilagua. Días  y horas  de  reuniones: De  Lunes  a Domingo de  6:00  a 8:00  p.m.  Miembros asistentes: 22 Hombres y 2 Mujeres.</p>'+ '</div>'+ '</div>'; var infowindow1371 = new google.maps.InfoWindow({ content: contentString1371 });   
        //markers  
        var marker1371 = new google.maps.Marker({ position: point1371, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1371.TRES LEGADOS." }); 
        //information for  
        function goToLink1371() { infowindow1371.open(map,marker1371);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1371, 'click', goToLink1371); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1372  
        //positions 
        var point1372 = new google.maps.LatLng(13.219778, -88.140017); var contentString1372 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UNA  LUZ DE ESPERANZA EN  EL CARAO.</h1>'+ '<div id="bodyContent">'+ '<p><b>UNA  LUZ DE ESPERANZA EN  EL CARAO.</b> , — 15  de  Enero  de 2010.  Dirección:  Caserío El Carao,  Cantón San Pedro. Días y horas de  reuniones: De Lunes a Domingo de  4:00 a 6:00 p.m.  Miembros asistentes: 10 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1372 = new google.maps.InfoWindow({ content: contentString1372 });   
        //markers  
        var marker1372 = new google.maps.Marker({ position: point1372, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1372.UNA  LUZ DE ESPERANZA EN  EL CARAO." }); 
        //information for  
        function goToLink1372() { infowindow1372.open(map,marker1372);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1372, 'click', goToLink1372); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1373  
        //positions 
        var point1373 = new google.maps.LatLng(13.352157, -88.337161); var contentString1373 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">1° DE MARZO.</h1>'+ '<div id="bodyContent">'+ '<p><b>1° DE MARZO.</b> , — 01 de  Marzo de  1995.  Dirección:  Calle 14 de  Di- ciembre, Cantón Primavera. Días y horas  de  reuniones: De Lunes a Domingo de  4:00  a 6:00  p.m.  Miembros asistentes: 24 Hombres y 1 Mujer.</p>'+ '</div>'+ '</div>'; var infowindow1373 = new google.maps.InfoWindow({ content: contentString1373 });   
        //markers  
        var marker1373 = new google.maps.Marker({ position: point1373, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1373.1° DE MARZO." });
         //information for  
         function goToLink1373() { infowindow1373.open(map,marker1373);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1373, 'click', goToLink1373); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1374  
        //positions 
        var point1374 = new google.maps.LatLng(13.357667, -88.348585); var contentString1374 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">30  DE NOVIEMBRE.</h1>'+ '<div id="bodyContent">'+ '<p><b>30  DE NOVIEMBRE.</b> , — 30  de  Noviembre de  1981.  Dirección:  4ª Avenida Norte, Casa N° 6, Barrio San Carlos. Días y horas de reunio- nes: De Lunes a Domingo de 4:00 a 6:00 p.m. Miembros asistentes: 25 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1374 = new google.maps.InfoWindow({ content: contentString1374 });   
        //markers  
        var marker1374 = new google.maps.Marker({ position: point1374, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1374.30  DE NOVIEMBRE." }); 
        //information for  
        function goToLink1374() { infowindow1374.open(map,marker1374);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1374, 'click', goToLink1374); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1375  
        //positions 
        var point1375 = new google.maps.LatLng(13.350226, -88.248091); var contentString1375 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">CAMBIOS DE VIDA.</h1>'+ '<div id="bodyContent">'+ '<p><b>CAMBIOS DE VIDA.</b> , — 11 de  Julio de  2000.  Dirección:  Cantón El Borbollón, Km. 131,  contiguo a Iglesia.  Días y horas  de  reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m.  Miembros asistentes: 16 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1375 = new google.maps.InfoWindow({ content: contentString1375 });   
        //markers  
        var marker1375 = new google.maps.Marker({ position: point1375, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1375.CAMBIOS DE VIDA." }); 
        //information for  
        function goToLink1375() { infowindow1375.open(map,marker1375);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1375, 'click', goToLink1375); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1376  
        //positions 
        var point1376 = new google.maps.LatLng(13.354560, -88.251734); var contentString1376 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NUEVA  VIDA.</h1>'+ '<div id="bodyContent">'+ '<p><b>NUEVA  VIDA.</b> , — 01  de  Septiembre de  1965.  Dirección:  Avenida Ferrocarril  N°  20,  Barrio  Concepción. Días  y horas  de  reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m.  Miembros asistentes: 10 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1376 = new google.maps.InfoWindow({ content: contentString1376 });   
        //markers  
        var marker1376 = new google.maps.Marker({ position: point1376, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1376.NUEVA  VIDA." }); 
        //information for  
        function goToLink1376() { infowindow1376.open(map,marker1376);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1376, 'click', goToLink1376); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1377  
        //positions 
        var point1377 = new google.maps.LatLng(13.355315, -88.350908); var contentString1377 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NUEVO 13 DE MAYO.</h1>'+ '<div id="bodyContent">'+ '<p><b>NUEVO 13 DE MAYO.</b> , — 13 de  Mayo de  1973.  Dirección:  2ª Calle Poniente N° 21,  Barrio San  Francisco.  Días y horas  de  reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m.  Miembros asistentes: 13 Hombres y 2 Mujeres.</p>'+ '</div>'+ '</div>'; var infowindow1377 = new google.maps.InfoWindow({ content: contentString1377 });   
        //markers  
        var marker1377 = new google.maps.Marker({ position: point1377, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1377.NUEVO 13 DE MAYO." }); 
        //information for  
        function goToLink1377() { infowindow1377.open(map,marker1377);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1377, 'click', goToLink1377); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1378  
        //positions 
        var point1378 = new google.maps.LatLng(13.361441, -88.308751); var contentString1378 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UNA ESPERANZA EN EL LLANO.</h1>'+ '<div id="bodyContent">'+ '<p><b>UNA ESPERANZA EN EL LLANO.</b> , — 08 de  Febrero de  2008.  Di- rección:  Cantón El Llano, Caserío El Coyol.  Días y horas  de  reunio- nes: De Lunes a Domingo de 3:30 a 5:30 p.m. Miembros asistentes: 28 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1378 = new google.maps.InfoWindow({ content: contentString1378 });   
        //markers  
        var marker1378 = new google.maps.Marker({ position: point1378, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1378.UNA ESPERANZA EN EL LLANO." }); 
        //information for  
        function goToLink1378() { infowindow1378.open(map,marker1378);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1378, 'click', goToLink1378); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1379  
        //positions 
        var point1379 = new google.maps.LatLng(13.341080, -88.341964); var contentString1379 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UNA  LUZ EN LA PRADERA.</h1>'+ '<div id="bodyContent">'+ '<p><b>UNA  LUZ EN LA PRADERA.</b> , — 01  de  Junio  de  1995.  Dirección: Colonia  La Pradera, etapa N°3. Días y horas  de reuniones: De Lunes a Domingo de 4:00 a 6:00 p.m.  Miembros asistentes: 15 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1379 = new google.maps.InfoWindow({ content: contentString1379 });   
        //markers  
        var marker1379 = new google.maps.Marker({ position: point1379, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1379.UNA  LUZ EN LA PRADERA." }); 
        //information for  
        function goToLink1379() { infowindow1379.open(map,marker1379);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1379, 'click', goToLink1379); google.maps.event.addDomListener(window, 'load', initialize);

        //MARCADOR 1380  
        //positions 
        var point1380 = new google.maps.LatLng(13.557782, -88.351241); var contentString1380 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">11  DE FEBRERO.</h1>'+ '<div id="bodyContent">'+ '<p><b>11  DE FEBRERO.</b> , — 11 de  Febrero de  1983.  Dirección:  Barrio San Antonio,  Lolotique. Días y horas  de reuniones: De Lunes a Domingo de 5:00 a 7:00 p.m.  Miembros asistentes: 25 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1380 = new google.maps.InfoWindow({ content: contentString1380 });   
        //markers  
        var marker1380 = new google.maps.Marker({ position: point1380, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1380.11  DE FEBRERO." }); 
        //information for  
        function goToLink1380() { infowindow1380.open(map,marker1380);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1380, 'click', goToLink1380); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1381  
        //positions 
        var point1381 = new google.maps.LatLng(13.558929, -88.346863); var contentString1381 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">BUENA VISTA.</h1>'+ '<div id="bodyContent">'+ '<p><b>BUENA VISTA.</b> , — 13 de  Abril de  1981.  Dirección:  Cantón El Palón. Días y horas  de reuniones: De Lunes a Domingo de 5:00 a 7:00 p.m. Miembros asistentes: 15 Hombres y 3 Mujeres.</p>'+ '</div>'+ '</div>'; var infowindow1381 = new google.maps.InfoWindow({ content: contentString1381 });   
        //markers  
        var marker1381 = new google.maps.Marker({ position: point1381, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1381.BUENA VISTA." }); 
        //information for  
        function goToLink1381() { infowindow1381.open(map,marker1381);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1381, 'click', goToLink1381); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1382  
        //positions 
        var point1382 = new google.maps.LatLng(13.556917, -88.347679); var contentString1382 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">DESPERTAR DE NUEVO.</h1>'+ '<div id="bodyContent">'+ '<p><b>DESPERTAR DE NUEVO.</b> , — 22 de Julio de 2005. Dirección: Cantón Amaya, Caserío El Corralito.  Días y horas  de  reuniones: De Lunes a Domingo de 5:00 a 7:00 p.m.  Miembros asistentes: 8 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1382 = new google.maps.InfoWindow({ content: contentString1382 });   
        //markers  
        var marker1382 = new google.maps.Marker({ position: point1382, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1382.DESPERTAR DE NUEVO." }); 
        //information for  
        function goToLink1382() { infowindow1382.open(map,marker1382);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1382, 'click', goToLink1382); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1383  
        //positions 
        var point1383 = new google.maps.LatLng(13.555821, -88.350372); var contentString1383 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">ESPÍRITU DE RECUPERACIÓN.</h1>'+ '<div id="bodyContent">'+ '<p><b>ESPÍRITU DE RECUPERACIÓN.</b> , — 13 de  Agosto de  2004.  Direc- ción: Cantón El Jícaro,  Barrio El Centro. Días y horas  de  reuniones: De Lunes a Domingo de  4:00 a 6:00 p.m.  Miembros asistentes: 13 Hombres y 5 Mujeres.</p>'+ '</div>'+ '</div>'; var infowindow1383 = new google.maps.InfoWindow({ content: contentString1383 });   
        //markers  
        var marker1383 = new google.maps.Marker({ position: point1383, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1383.ESPÍRITU DE RECUPERACIÓN." }); 
        //information for  
        function goToLink1383() { infowindow1383.open(map,marker1383);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1383, 'click', goToLink1383); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1384  
        //positions 
        var point1384 = new google.maps.LatLng(13.558064, -88.351241); var contentString1384 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">FELICES EN SOBRIEDAD.</h1>'+ '<div id="bodyContent">'+ '<p><b>FELICES EN SOBRIEDAD.</b> , — 05 de Mayo de 2007. Dirección:  Calle Las Anonas,  Cantón El Palón.  Días y horas  de  reuniones: De Lunes a Domingo de 5:00 a 7:00 p.m.  Miembros asistentes: 14 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1384 = new google.maps.InfoWindow({ content: contentString1384 });   
        //markers  
        var marker1384 = new google.maps.Marker({ position: point1384, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1384.FELICES EN SOBRIEDAD." }); 
        //information for  
        function goToLink1384() { infowindow1384.open(map,marker1384);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1384, 'click', goToLink1384); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1385  
        //positions 
        var point1385 = new google.maps.LatLng(13.558116, -88.350146); var contentString1385 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">HOMBRES FELICES.</h1>'+ '<div id="bodyContent">'+ '<p><b>HOMBRES FELICES.</b> , — 04 de  Octubre de  1974.  Dirección:  Cantón El Palón. Días y horas  de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.  Miembros asistentes: 25 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1385 = new google.maps.InfoWindow({ content: contentString1385 });   
        //markers  
        var marker1385 = new google.maps.Marker({ position: point1385, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1385.HOMBRES FELICES." }); 
        //information for  
        function goToLink1385() { infowindow1385.open(map,marker1385);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1385, 'click', goToLink1385); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1386  
        //positions 
        var point1386 = new google.maps.LatLng(13.556343, -88.351520); var contentString1386 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">LOLOTIQUE.</h1>'+ '<div id="bodyContent">'+ '<p><b>LOLOTIQUE.</b> , — 22  de  Septiembre de  1972.  Dirección:  Barrio  El Centro Lolotique. Días y horas  de  reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.  Miembros asistentes: 23 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1386 = new google.maps.InfoWindow({ content: contentString1386 });  
         //markers  
        var marker1386 = new google.maps.Marker({ position: point1386, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1386.LOLOTIQUE." }); 
        //information for  
        function goToLink1386() { infowindow1386.open(map,marker1386);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1386, 'click', goToLink1386); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1387  
        //positions 
        var point1387 = new google.maps.LatLng(13.559576, -88.352239); var contentString1387 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">LUZ Y VIDA.</h1>'+ '<div id="bodyContent">'+ '<p><b>LUZ Y VIDA.</b> , — 15 de Mayo de 1977. Dirección:  Cantón Las Ventas. Días y horas  de reuniones: De Lunes a Domingo de 5:00 a 7:00 p.m. Miembros asistentes: 10 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1387 = new google.maps.InfoWindow({ content: contentString1387 });   
        //markers  
        var marker1387 = new google.maps.Marker({ position: point1387, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1387.LUZ Y VIDA." }); 
        //information for  
        function goToLink1387() { infowindow1387.open(map,marker1387);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1387, 'click', goToLink1387); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1388  
        //positions 
        var point1388 = new google.maps.LatLng(13.555008, -88.354277); var contentString1388 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NUEVO DESPERTAR.</h1>'+ '<div id="bodyContent">'+ '<p><b>NUEVO DESPERTAR.</b> , — 12 de Octubre de 1975.  Dirección:  Barrio. San Isidro, Lolotique. Días y horas  de reuniones: De Lunes a Domin- go de 6:00 a 8:00 p.m.  Miembros asistentes: 15 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1388 = new google.maps.InfoWindow({ content: contentString1388 });   
        //markers  
        var marker1388 = new google.maps.Marker({ position: point1388, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1388.NUEVO DESPERTAR." }); 
        //information for  
        function goToLink1388() { infowindow1388.open(map,marker1388);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1388, 'click', goToLink1388); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1389  
        //positions 
        var point1389 = new google.maps.LatLng(13.560567, -88.349749); var contentString1389 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">PRINCIPIO DE PAZ 10  DE ENERO.</h1>'+ '<div id="bodyContent">'+ '<p><b>PRINCIPIO DE PAZ 10  DE ENERO.</b> , — 10 de  Enero  de  1997.  Di- rección:  Cantón El Nancito. Días y horas  de  reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.  Miembros asistentes: 25 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1389 = new google.maps.InfoWindow({ content: contentString1389 });   
        //markers  
        var marker1389 = new google.maps.Marker({ position: point1389, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1389.PRINCIPIO DE PAZ 10  DE ENERO." }); 
        //information for  
        function goToLink1389() { infowindow1389.open(map,marker1389);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1389, 'click', goToLink1389); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1390  
        //positions 
        var point1390 = new google.maps.LatLng(13.553986, -88.350833); var contentString1390 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UNA  LUZ EN  EL CALVARIO.</h1>'+ '<div id="bodyContent">'+ '<p><b>UNA  LUZ EN  EL CALVARIO.</b> , — 20  de  Abril de  1983.  Dirección: Avenida  El Cementerio, Barrio El Calvario,  Lolotique. Días y horas de  reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m.  Miembros asistentes: 18 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1390 = new google.maps.InfoWindow({ content: contentString1390 });   
        //markers  
        var marker1390 = new google.maps.Marker({ position: point1390, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1390.UNA  LUZ EN  EL CALVARIO." }); 
        //information for  
        function goToLink1390() { infowindow1390.open(map,marker1390);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1390, 'click', goToLink1390); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1391  
        //positions 
        var point1391 = new google.maps.LatLng(13.557688, -88.350694); var contentString1391 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UNA LUZ EN LAS ALTURAS.</h1>'+ '<div id="bodyContent">'+ '<p><b>UNA LUZ EN LAS ALTURAS.</b> , — 10 de Octubre de 1997.  Dirección: Cantón El Palón. Días y horas de reuniones: De Lunes a Domingo de 5:00 a 7:00 p.m.  Miembros asistentes: 15 Hombres y 1 Mujer.</p>'+ '</div>'+ '</div>'; var infowindow1391 = new google.maps.InfoWindow({ content: contentString1391 });   
        //markers  
        var marker1391 = new google.maps.Marker({ position: point1391, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1391.UNA LUZ EN LAS ALTURAS." }); 
        //information for  
        function goToLink1391() { infowindow1391.open(map,marker1391);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1391, 'click', goToLink1391); google.maps.event.addDomListener(window, 'load', initialize);

        //MARCADOR 1392  //positions var point1392 = new google.maps.LatLng(); var contentString1392 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">01  DE MAYO.</h1>'+ '<div id="bodyContent">'+ '<p><b>01  DE MAYO.</b> , — 01  de  Mayo  de  2014.  Dirección:  Cantón El Pa- palón, Colonia  Los Cocos. Días y horas  de  reuniones: De  Lunes  a Domingo de  4:00 a 6:00 p.m.  Miembros asistentes: 5 Hombres y 5 Mujeres.</p>'+ '</div>'+ '</div>'; var infowindow1392 = new google.maps.InfoWindow({ content: contentString1392 });   //markers  var marker1392 = new google.maps.Marker({ position: point1392, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1392.01  DE MAYO." }); //information for  function goToLink1392() { infowindow1392.open(map,marker1392);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1392, 'click', goToLink1392); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1393  //positions var point1393 = new google.maps.LatLng(); var contentString1393 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">06 DE ENERO.</h1>'+ '<div id="bodyContent">'+ '<p><b>06 DE ENERO.</b> , — 06 de Enero de 2005. Dirección: Cantón El Rodeo, Jurisdicción de  Moncagua. Días y horas  de  reuniones: De Lunes  a Domingo de 5:30 a 7:30 p.m.  Miembros asistentes: 10 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1393 = new google.maps.InfoWindow({ content: contentString1393 });   //markers  var marker1393 = new google.maps.Marker({ position: point1393, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1393.06 DE ENERO." }); //information for  function goToLink1393() { infowindow1393.open(map,marker1393);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1393, 'click', goToLink1393); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1394  //positions var point1394 = new google.maps.LatLng(); var contentString1394 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">AGAVE.</h1>'+ '<div id="bodyContent">'+ '<p><b>AGAVE.</b> , — 23 de  Enero  de  2013.  Dirección:  Fábrica  de  Sacos,  Ha- cienda El Platanar. Días y horas  de  reuniones: De Lunes a Domingo de 2:00 a 3:30 p.m.  Miembros asistentes: 20 Hombres y 2 Mujeres.</p>'+ '</div>'+ '</div>'; var infowindow1394 = new google.maps.InfoWindow({ content: contentString1394 });   //markers  var marker1394 = new google.maps.Marker({ position: point1394, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1394.AGAVE." }); //information for  function goToLink1394() { infowindow1394.open(map,marker1394);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1394, 'click', goToLink1394); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1395  //positions var point1395 = new google.maps.LatLng(); var contentString1395 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">ALEGRE AMANECER.</h1>'+ '<div id="bodyContent">'+ '<p><b>ALEGRE AMANECER.</b> , — 16 de  Marzo de  1978.  Dirección:  Cantón Valle Alegre  200  metros Al Sur desvío  de  Moncagua. Días y horas de  reuniones: De Lunes a Domingo de  5:00 a 7:00 p.m.  Miembros asistentes: 8 Hombres y 1 Mujer.</p>'+ '</div>'+ '</div>'; var infowindow1395 = new google.maps.InfoWindow({ content: contentString1395 });   //markers  var marker1395 = new google.maps.Marker({ position: point1395, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1395.ALEGRE AMANECER." }); //information for  function goToLink1395() { infowindow1395.open(map,marker1395);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1395, 'click', goToLink1395); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1396  //positions var point1396 = new google.maps.LatLng(); var contentString1396 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">BUEN PENSAMIENTO.</h1>'+ '<div id="bodyContent">'+ '<p><b>BUEN PENSAMIENTO.</b> , — 12 de  Febrero de  1979.  Dirección:  Can- tón  El Chirrión,  Los Ejidos.  Días y horas  de  reuniones: De Lunes  a Domingo de 5:00 a 7:00 p.m.  Miembros asistentes: 8 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1396 = new google.maps.InfoWindow({ content: contentString1396 });   //markers  var marker1396 = new google.maps.Marker({ position: point1396, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1396.BUEN PENSAMIENTO." }); //information for  function goToLink1396() { infowindow1396.open(map,marker1396);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1396, 'click', goToLink1396); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1397  //positions var point1397 = new google.maps.LatLng(); var contentString1397 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">CAMINO HACIA LA FE.</h1>'+ '<div id="bodyContent">'+ '<p><b>CAMINO HACIA LA FE.</b> , — 03 de Febrero de 1973.  Dirección:  Can- tón El Jobo, Moncagua. Días y horas  de  reuniones: De Lunes a Do- mingo  de 4:00 a 6:00 p.m.  Miembros asistentes: 10 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1397 = new google.maps.InfoWindow({ content: contentString1397 });   //markers  var marker1397 = new google.maps.Marker({ position: point1397, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1397.CAMINO HACIA LA FE." }); //information for  function goToLink1397() { infowindow1397.open(map,marker1397);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1397, 'click', goToLink1397); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1398  //positions var point1398 = new google.maps.LatLng(); var contentString1398 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">CUIDADO CON  ESA COPA.</h1>'+ '<div id="bodyContent">'+ '<p><b>CUIDADO CON  ESA COPA.</b> , —  16  de  Abril de  1992.  Dirección: Cantón El Papalón, Caserío La América.  Días y horas  de  reuniones: De  Lunes  a Sábado de  4:00  a 6:00  p.m.  Miembros asistentes: 11 Hombres y 2 Mujeres.</p>'+ '</div>'+ '</div>'; var infowindow1398 = new google.maps.InfoWindow({ content: contentString1398 });   //markers  var marker1398 = new google.maps.Marker({ position: point1398, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1398.CUIDADO CON  ESA COPA." }); //information for  function goToLink1398() { infowindow1398.open(map,marker1398);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1398, 'click', goToLink1398); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1399  //positions var point1399 = new google.maps.LatLng(); var contentString1399 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">FARO DE LOS NAUFRAGOS.</h1>'+ '<div id="bodyContent">'+ '<p><b>FARO DE LOS NAUFRAGOS.</b> , — 14 de  Marzo de  1973.  Dirección: Calle  San Carlos,  Hacienda El Platanar. Días y horas  de  reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m.  Miembros asistentes: 12 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1399 = new google.maps.InfoWindow({ content: contentString1399 });   //markers  var marker1399 = new google.maps.Marker({ position: point1399, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1399.FARO DE LOS NAUFRAGOS." }); //information for  function goToLink1399() { infowindow1399.open(map,marker1399);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1399, 'click', goToLink1399); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1400  //positions var point1400 = new google.maps.LatLng(); var contentString1400 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">LA REFORMA.</h1>'+ '<div id="bodyContent">'+ '<p><b>LA REFORMA.</b> , — Dirección:  Colonia  La Reforma.  Días y horas  de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m. Miembros asis- tentes: 11 Hombres y 1 Mujer.</p>'+ '</div>'+ '</div>'; var infowindow1400 = new google.maps.InfoWindow({ content: contentString1400 });   //markers  var marker1400 = new google.maps.Marker({ position: point1400, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1400.LA REFORMA." }); //information for  function goToLink1400() { infowindow1400.open(map,marker1400);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1400, 'click', goToLink1400); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1401  //positions var point1401 = new google.maps.LatLng(); var contentString1401 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">LIBERACIÓN.</h1>'+ '<div id="bodyContent">'+ '<p><b>LIBERACIÓN.</b> , — 16 de  Junio  de  1972.  Dirección:  Barrio El Centro, Calle Central, frente  al parque. Días y horas  de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.  Miembros asistentes: 10 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1401 = new google.maps.InfoWindow({ content: contentString1401 });   //markers  var marker1401 = new google.maps.Marker({ position: point1401, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1401.LIBERACIÓN." }); //information for  function goToLink1401() { infowindow1401.open(map,marker1401);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1401, 'click', goToLink1401); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1402  //positions var point1402 = new google.maps.LatLng(); var contentString1402 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NUEVO AMANECER.</h1>'+ '<div id="bodyContent">'+ '<p><b>NUEVO AMANECER.</b> , — 29 de  Mayo  de  2000.  Dirección:  Cantón Valle Alegre,  Carretera Panamericana Km. 128. Días y horas  de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m. Miembros asistentes: 9 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1402 = new google.maps.InfoWindow({ content: contentString1402 });   //markers  var marker1402 = new google.maps.Marker({ position: point1402, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1402.NUEVO AMANECER." }); //information for  function goToLink1402() { infowindow1402.open(map,marker1402);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1402, 'click', goToLink1402); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1403  //positions var point1403 = new google.maps.LatLng(); var contentString1403 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NUEVOS HORIZONTES.</h1>'+ '<div id="bodyContent">'+ '<p><b>NUEVOS HORIZONTES.</b> , — 23 de Febrero de 1975. Dirección: Can- tón  El Papalón, Km. 125,  Carretera Panamericana, Planta  de  Gas. Días y horas  de reuniones: De Lunes a Domingo de 4:00 a 6:00 p.m. Miembros asistentes: 20 Hombres y 1 Mujer.</p>'+ '</div>'+ '</div>'; var infowindow1403 = new google.maps.InfoWindow({ content: contentString1403 });   //markers  var marker1403 = new google.maps.Marker({ position: point1403, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1403.NUEVOS HORIZONTES." }); //information for  function goToLink1403() { infowindow1403.open(map,marker1403);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1403, 'click', goToLink1403); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1404  //positions var point1404 = new google.maps.LatLng(); var contentString1404 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">SOBRIEDAD EN LAS CAMPANAS.</h1>'+ '<div id="bodyContent">'+ '<p><b>SOBRIEDAD EN LAS CAMPANAS.</b> , — 12 de  Octubre de  2001.  Di- rección:  Hacienda El Platanar, Calle El Calvario. Días y horas  de reu- niones: De Lunes a Domingo de 4:00 a 6:00 p.m. Miembros asisten- tes: 25 Hombres y 3 Mujeres.</p>'+ '</div>'+ '</div>'; var infowindow1404 = new google.maps.InfoWindow({ content: contentString1404 });   //markers  var marker1404 = new google.maps.Marker({ position: point1404, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1404.SOBRIEDAD EN LAS CAMPANAS." }); //information for  function goToLink1404() { infowindow1404.open(map,marker1404);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1404, 'click', goToLink1404); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1405  //positions var point1405 = new google.maps.LatLng(); var contentString1405 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UN NUEVO PORVENIR.</h1>'+ '<div id="bodyContent">'+ '<p><b>UN NUEVO PORVENIR.</b> , — 14 de Febrero de 2012. Dirección: Can- tón  El Jobo, Caserío Las Maravillas. Días y horas  de  reuniones: De Lunes a Domingo de 4:00 a 6:00 p.m. Miembros asistentes: 6 Hom- bres.</p>'+ '</div>'+ '</div>'; var infowindow1405 = new google.maps.InfoWindow({ content: contentString1405 });   //markers  var marker1405 = new google.maps.Marker({ position: point1405, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1405.UN NUEVO PORVENIR." }); //information for  function goToLink1405() { infowindow1405.open(map,marker1405);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1405, 'click', goToLink1405); google.maps.event.addDomListener(window, 'load', initialize);

        //MARCADOR 1406  //positions var point1406 = new google.maps.LatLng(); var contentString1406 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NADA  PODEMOS  SOLOS.</h1>'+ '<div id="bodyContent">'+ '<p><b>NADA  PODEMOS  SOLOS.</b> , — 22  de  Febrero de  1973.  Dirección: Calle  Central, Calle  Antigua  al Parque. Días y horas  de  reuniones: De Lunes a Domingo de  7:00 a 9:00 p.m.  Miembros asistentes: 30 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1406 = new google.maps.InfoWindow({ content: contentString1406 });   //markers  var marker1406 = new google.maps.Marker({ position: point1406, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1406.NADA  PODEMOS  SOLOS." }); //information for  function goToLink1406() { infowindow1406.open(map,marker1406);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1406, 'click', goToLink1406); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1407  //positions var point1407 = new google.maps.LatLng(); var contentString1407 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NUEVA  FORMA DE VIVIR.</h1>'+ '<div id="bodyContent">'+ '<p><b>NUEVA  FORMA DE VIVIR.</b> , — 18  de  Noviembre de  1973.  Direc- ción: Cantón Planes  de  San Sebastián, a 3 Cuadras de  La Casa  Co- munal.  Días y horas  de  reuniones: De Lunes a Domingo de  6:00  a 8:00 p.m.  Miembros asistentes: 18 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1407 = new google.maps.InfoWindow({ content: contentString1407 });   //markers  var marker1407 = new google.maps.Marker({ position: point1407, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1407.NUEVA  FORMA DE VIVIR." }); //information for  function goToLink1407() { infowindow1407.open(map,marker1407);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1407, 'click', goToLink1407); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1408  //positions var point1408 = new google.maps.LatLng(); var contentString1408 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NUEVO  RENACER DEL 96.</h1>'+ '<div id="bodyContent">'+ '<p><b>NUEVO  RENACER DEL 96.</b> , —  10  de  Enero  de  1996.  Dirección: Cantón San  Luis, Nueva  Guadalupe. Días  y horas  de  reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m.  Miembros asistentes: 16 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1408 = new google.maps.InfoWindow({ content: contentString1408 });   //markers  var marker1408 = new google.maps.Marker({ position: point1408, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1408.NUEVO  RENACER DEL 96." }); //information for  function goToLink1408() { infowindow1408.open(map,marker1408);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1408, 'click', goToLink1408); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1409  //positions var point1409 = new google.maps.LatLng(); var contentString1409 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">PAZ Y SERENIDAD.</h1>'+ '<div id="bodyContent">'+ '<p><b>PAZ Y SERENIDAD.</b> , — 19  de  Noviembre de  1988.  Dirección:  3 Cuadras al Oriente del Campo de  La Feria, Barrio San Isidro. Días y horas de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m. Miem- bros  asistentes: 12 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1409 = new google.maps.InfoWindow({ content: contentString1409 });   //markers  var marker1409 = new google.maps.Marker({ position: point1409, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1409.PAZ Y SERENIDAD." }); //information for  function goToLink1409() { infowindow1409.open(map,marker1409);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1409, 'click', goToLink1409); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1410  //positions var point1410 = new google.maps.LatLng(); var contentString1410 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">SALIENDO DE LA OSCURIDAD.</h1>'+ '<div id="bodyContent">'+ '<p><b>SALIENDO DE LA OSCURIDAD.</b> , — 23  de  Enero  de  2014.  Direc- ción:  3ª Avenida  Norte, Barrio San Luis, Nueva  Guadalupe. Días y horas de reuniones: De Lunes a Domingo de 5:00 a 7:00 p.m. Miem- bros  asistentes: 15 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1410 = new google.maps.InfoWindow({ content: contentString1410 });   //markers  var marker1410 = new google.maps.Marker({ position: point1410, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1410.SALIENDO DE LA OSCURIDAD." }); //information for  function goToLink1410() { infowindow1410.open(map,marker1410);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1410, 'click', goToLink1410); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1411  //positions var point1411 = new google.maps.LatLng(); var contentString1411 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">VIRTUDES DE ENERO.</h1>'+ '<div id="bodyContent">'+ '<p><b>VIRTUDES DE ENERO.</b> , — 12 de  Enero  de  1979.  Dirección:  Calle Principal,  2 ½ Cuadras del  Centro Escolar.  Días y horas  de  reunio- nes: De Lunes a Domingo de 6:00 a 8:00 p.m. Miembros asistentes: 15 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1411 = new google.maps.InfoWindow({ content: contentString1411 });   //markers  var marker1411 = new google.maps.Marker({ position: point1411, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1411.VIRTUDES DE ENERO." }); //information for  function goToLink1411() { infowindow1411.open(map,marker1411);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1411, 'click', goToLink1411); google.maps.event.addDomListener(window, 'load', initialize);

        //MARCADOR 1412  //positions var point1412 = new google.maps.LatLng(); var contentString1412 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">DESPERTAR 2000.</h1>'+ '<div id="bodyContent">'+ '<p><b>DESPERTAR 2000.</b> , — 17 de  Septiembre de  2000.  Dirección:  Barrio El Centro. Días y horas  de  reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m.  Miembros asistentes: 4 Hombres y 2 Mujeres.</p>'+ '</div>'+ '</div>'; var infowindow1412 = new google.maps.InfoWindow({ content: contentString1412 });   //markers  var marker1412 = new google.maps.Marker({ position: point1412, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1412.DESPERTAR 2000." }); //information for  function goToLink1412() { infowindow1412.open(map,marker1412);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1412, 'click', goToLink1412); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1413  //positions var point1413 = new google.maps.LatLng(); var contentString1413 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">DIOS UNIÓN LIBERTAD.</h1>'+ '<div id="bodyContent">'+ '<p><b>DIOS UNIÓN LIBERTAD.</b> , — 18 de Febrero de 1974. Dirección: Can- tón San Sebastián. Días y horas  de reuniones: De Lunes a Domingo de 2:30 a 4:30 p.m.  Miembros asistentes: 9 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1413 = new google.maps.InfoWindow({ content: contentString1413 });   //markers  var marker1413 = new google.maps.Marker({ position: point1413, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1413.DIOS UNIÓN LIBERTAD." }); //information for  function goToLink1413() { infowindow1413.open(map,marker1413);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1413, 'click', goToLink1413); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1414  //positions var point1414 = new google.maps.LatLng(); var contentString1414 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">LIBERACIÓN EN LA FRONTERA.</h1>'+ '<div id="bodyContent">'+ '<p><b>LIBERACIÓN EN LA FRONTERA.</b> , — 31 de Diciembre de 1990.  Di- rección:  Cantón El Cucurucho. Días y horas  de reuniones: De Lunes a Domingo de 3:00 a 5:00 p.m.  Miembros asistentes: 12 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1414 = new google.maps.InfoWindow({ content: contentString1414 });   //markers  var marker1414 = new google.maps.Marker({ position: point1414, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1414.LIBERACIÓN EN LA FRONTERA." }); //information for  function goToLink1414() { infowindow1414.open(map,marker1414);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1414, 'click', goToLink1414); google.maps.event.addDomListener(window, 'load', initialize);

        //MARCADOR 1415  //positions var point1415 = new google.maps.LatLng(); var contentString1415 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">ENCUENTRO REAL CON  LA FE.</h1>'+ '<div id="bodyContent">'+ '<p><b>ENCUENTRO REAL CON  LA FE.</b> , — 26  de  Agosto de  2004.  Dirección:  Caserío Las Lomitas,  entrada a Quelepa. Días y horas  de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m. Miembros asistentes: 10 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1415 = new google.maps.InfoWindow({ content: contentString1415 });   //markers  var marker1415 = new google.maps.Marker({ position: point1415, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1415.ENCUENTRO REAL CON  LA FE." }); //information for  function goToLink1415() { infowindow1415.open(map,marker1415);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1415, 'click', goToLink1415); google.maps.event.addDomListener(window, 'load', initialize);

        //MARCADOR 1416  //positions var point1416 = new google.maps.LatLng(); var contentString1416 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">LENCAS EN SOBRIEDAD.</h1>'+ '<div id="bodyContent">'+ '<p><b>LENCAS EN SOBRIEDAD.</b> , — 18 de  Mayo de  1976.  Dirección:  Ba- rrio Concepción, Centro de  Quelepa. Días  y horas  de  reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m.  Miembros asistentes: 11 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1416 = new google.maps.InfoWindow({ content: contentString1416 });   //markers  var marker1416 = new google.maps.Marker({ position: point1416, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1416.LENCAS EN SOBRIEDAD." }); //information for  function goToLink1416() { infowindow1416.open(map,marker1416);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1416, 'click', goToLink1416); google.maps.event.addDomListener(window, 'load', initialize);

        //MARCADOR 1417  //positions var point1417 = new google.maps.LatLng(); var contentString1417 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NUEVA LUZ EN A.A.</h1>'+ '<div id="bodyContent">'+ '<p><b>NUEVA LUZ EN A.A.</b> , — 02 de  Octubre de  2010.  Dirección:  Can- tón  El Obrajuelo Quelepa. Días y horas  de  reuniones: De Lunes  a Domingo de  6:00  a 8:00  p.m.  Miembros asistentes: 11 Hombres y 1 Mujer.</p>'+ '</div>'+ '</div>'; var infowindow1417 = new google.maps.InfoWindow({ content: contentString1417 });   //markers  var marker1417 = new google.maps.Marker({ position: point1417, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1417.NUEVA LUZ EN A.A." }); //information for  function goToLink1417() { infowindow1417.open(map,marker1417);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1417, 'click', goToLink1417); google.maps.event.addDomListener(window, 'load', initialize);

        //MARCADOR 1418  //positions var point1418 = new google.maps.LatLng(); var contentString1418 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NUEVA VIDA.</h1>'+ '<div id="bodyContent">'+ '<p><b>NUEVA VIDA.</b> , — 05 de Mayo de 2008. Dirección:  Cantón San José, Caserío Los Martínez.  Días y horas de reuniones: De Lunes a Domin- go de 6:00 a 8:00 p.m.  Miembros asistentes: 10 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1418 = new google.maps.InfoWindow({ content: contentString1418 });   //markers  var marker1418 = new google.maps.Marker({ position: point1418, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1418.NUEVA VIDA." }); //information for  function goToLink1418() { infowindow1418.open(map,marker1418);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1418, 'click', goToLink1418); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1419  
        //positions 
        var point1419 = new google.maps.LatLng(13.531506, -88.014660); var contentString1419 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">LA ÚLTIMA  COPA.</h1>'+ '<div id="bodyContent">'+ '<p><b>LA ÚLTIMA  COPA.</b> , —  03  de  Junio  de  2009.  Dirección:  Barrio  La Cruz, San Antonio  del Mosco.  Días y horas  de  reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.  Miembros asistentes: 10 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1419 = new google.maps.InfoWindow({ content: contentString1419 });   
        //markers  
        var marker1419 = new google.maps.Marker({ position: point1419, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1419.LA ÚLTIMA  COPA." }); 
        //information for  
        function goToLink1419() { infowindow1419.open(map,marker1419);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1419, 'click', goToLink1419); google.maps.event.addDomListener(window, 'load', initialize);

        //MARCADOR 1420  
        //positions 
        var point1420 = new google.maps.LatLng(13.806753, -88.407460); var contentString1420 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">CONSUELO DE UNA MADRE.</h1>'+ '<div id="bodyContent">'+ '<p><b>CONSUELO DE UNA MADRE.</b> , — 29 de  Junio  de  1982.  Dirección: Cantón San Gerónimo, Caserío San Andrés.  Días y horas  de reunio- nes: De Lunes a Domingo de 4:00 a 6:00 p.m. Miembros asistentes: 12 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1420 = new google.maps.InfoWindow({ content: contentString1420 });   
        //markers  
        var marker1420 = new google.maps.Marker({ position: point1420, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1420.CONSUELO DE UNA MADRE." }); 
        //information for  
        function goToLink1420() { infowindow1420.open(map,marker1420);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1420, 'click', goToLink1420); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1421  
        //positions 
        var point1421 = new google.maps.LatLng(13.808941, -88.408297); var contentString1421 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">RENACER EN SAN GERARDO.</h1>'+ '<div id="bodyContent">'+ '<p><b>RENACER EN SAN GERARDO.</b> , — 16 de  Septiembre de  1972.  Dirección:  Barrio Las Flores, 1 ½ Cuadra al Sur del Cyber.  Días y horas de  reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m.  Miembros asistentes: 12 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1421 = new google.maps.InfoWindow({ content: contentString1421 });   
        //markers  
        var marker1421 = new google.maps.Marker({ position: point1421, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1421.RENACER EN SAN GERARDO." }); 
        //information for  
        function goToLink1421() { infowindow1421.open(map,marker1421);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1421, 'click', goToLink1421); google.maps.event.addDomListener(window, 'load', initialize);

        //MARCADOR 1422  
        //positions 
        var point1422 = new google.maps.LatLng(13.422059, -88.333906); var contentString1422 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">17  DE JUNIO.</h1>'+ '<div id="bodyContent">'+ '<p><b>17  DE JUNIO.</b> , — 17 de  Junio  de  1984.  Dirección:  Cantón San Ju- lián. Días y horas  de reuniones: De Lunes a Domingo de 4:00 a 6:00 p.m.  Miembros asistentes: 10 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1422 = new google.maps.InfoWindow({ content: contentString1422 });   
        //markers  
        var marker1422 = new google.maps.Marker({ position: point1422, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1422.17  DE JUNIO." }); 
        //information for  
        function goToLink1422() { infowindow1422.open(map,marker1422);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1422, 'click', goToLink1422); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1423  
        //positions 
        var point1423 = new google.maps.LatLng(13.422210, -88.320335); var contentString1423 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">22  DE ENERO.</h1>'+ '<div id="bodyContent">'+ '<p><b>22  DE ENERO.</b> , — 22 de  Enero  de  2010.  Dirección:  Cantón La Mo- rita, 250 metros al Norte  de  La Escuela.  Días y horas  de  reuniones: De Lunes a Domingo de  4:00 a 6:00 p.m.  Miembros asistentes: 14 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1423 = new google.maps.InfoWindow({ content: contentString1423 });   
        //markers  
        var marker1423 = new google.maps.Marker({ position: point1423, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1423.22  DE ENERO." }); 
        //information for  
        function goToLink1423() { infowindow1423.open(map,marker1423);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1423, 'click', goToLink1423); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1424  
        //positions 
        var point1424 = new google.maps.LatLng(13.417656, -88.343871); var contentString1424 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">CIEN MIL DÓLARES PERDIDOS.</h1>'+ '<div id="bodyContent">'+ '<p><b>CIEN MIL DÓLARES PERDIDOS.</b> , — 15  de  Junio  de  1986.  Direc- ción: Barrio Santa Rosa a100 metros del Parque Infantil. Días y horas de  reuniones: De Lunes a Domingo de  4:00 a 6:00 p.m.  Miembros asistentes: 28 Hombres y 2 Mujeres.</p>'+ '</div>'+ '</div>'; var infowindow1424 = new google.maps.InfoWindow({ content: contentString1424 });   
        //markers  
        var marker1424 = new google.maps.Marker({ position: point1424, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1424.CIEN MIL DÓLARES PERDIDOS." }); 
        //information for  
        function goToLink1424() { infowindow1424.open(map,marker1424);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1424, 'click', goToLink1424); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1425  
        //positions 
        var point1425 = new google.maps.LatLng(13.425094, -88.319837); var contentString1425 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">DIVINO DESPERTAR.</h1>'+ '<div id="bodyContent">'+ '<p><b>DIVINO DESPERTAR.</b> , — 15 de Febrero de 1978.  Dirección:  Cantón La Morita. Días y horas  de  reuniones: De Lunes a Domingo de  4:00 a 6:00 p.m.  Miembros asistentes: 7 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1425 = new google.maps.InfoWindow({ content: contentString1425 });   
        //markers  
        var marker1425 = new google.maps.Marker({ position: point1425, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1425.DIVINO DESPERTAR." }); 
        //information for  
        function goToLink1425() { infowindow1425.open(map,marker1425);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1425, 'click', goToLink1425); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1426  
        //positions 
        var point1426 = new google.maps.LatLng(13.412933, -88.344660); var contentString1426 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">DIVINO RENACER.</h1>'+ '<div id="bodyContent">'+ '<p><b>DIVINO RENACER.</b> , — 10  de  Octubre de  1976.  Dirección:  Calle Principal,  Barrio Concepción. Días y horas  de  reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.  Miembros asistentes: 17 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1426 = new google.maps.InfoWindow({ content: contentString1426 });   
        //markers  
        var marker1426 = new google.maps.Marker({ position: point1426, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1426.DIVINO RENACER." }); 
        //information for  
        function goToLink1426() { infowindow1426.open(map,marker1426);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1426, 'click', goToLink1426); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1427  
        //positions 
        var point1427 = new google.maps.LatLng(13.410749, -88.345934); var contentString1427 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">MILAGRO POR UN DÍA.</h1>'+ '<div id="bodyContent">'+ '<p><b>MILAGRO POR UN DÍA.</b> , — 24 de  Octubre de  1996.  Dirección:  Ba- rrio Santa  Rosa,  frente  al parque. Días  y horas  de  reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m. Miembros asistentes: 8 Hom- bres.</p>'+ '</div>'+ '</div>'; var infowindow1427 = new google.maps.InfoWindow({ content: contentString1427 });   
        //markers  
        var marker1427 = new google.maps.Marker({ position: point1427, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1427.MILAGRO POR UN DÍA." }); 
        //information for  
        function goToLink1427() { infowindow1427.open(map,marker1427);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1427, 'click', goToLink1427); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1428  
        //positions 
        var point1428 = new google.maps.LatLng(13.406336, -88.342769); var contentString1428 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">PILAR DE SALVACIÓN.</h1>'+ '<div id="bodyContent">'+ '<p><b>PILAR DE SALVACIÓN.</b> , — 08 de Enero  de 2011.  Dirección:  Cantón Candelaria. Días y horas de reuniones: De Lunes a Domingo de 4:30 a 6:30 p.m.  Miembros asistentes: 6 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1428 = new google.maps.InfoWindow({ content: contentString1428 });   
        //markers  
        var marker1428 = new google.maps.Marker({ position: point1428, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1428.PILAR DE SALVACIÓN." }); 
        //information for  
        function goToLink1428() { infowindow1428.open(map,marker1428);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1428, 'click', goToLink1428); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1429  
        //positions 
        var point1429 = new google.maps.LatLng(13.405805, -88.345743); var contentString1429 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">RENACER EN CANDELARIA.</h1>'+ '<div id="bodyContent">'+ '<p><b>RENACER EN CANDELARIA.</b> , — 13 de  Junio  de  1981.  Dirección: Cantón Candelaria. Días y horas  de reuniones: De Lunes a Domingo de 4:00 a 6:00 p.m.  Miembros asistentes: 9 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1429 = new google.maps.InfoWindow({ content: contentString1429 });   
        //markers  
        var marker1429 = new google.maps.Marker({ position: point1429, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1429.RENACER EN CANDELARIA." }); //information for  function goToLink1429() { infowindow1429.open(map,marker1429);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1429, 'click', goToLink1429); google.maps.event.addDomListener(window, 'load', initialize);

        //MARCADOR 1430  
        //positions 
        var point1430 = new google.maps.LatLng(13.815061, -88.346183); var contentString1430 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NUEVO  AMANECER.</h1>'+ '<div id="bodyContent">'+ '<p><b>NUEVO  AMANECER.</b> , — 23  de  Enero  de  1976.  Dirección:  Calle Longitudinal del  Norte  a 3 Cuadras del  Instituto  de  La Reina, Casa Nº 25. Días y horas  de  reuniones: De Lunes  a Domingo de  4:30  a 6:30 p.m.  Miembros asistentes: 14 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1430 = new google.maps.InfoWindow({ content: contentString1430 });   
        //markers  
        var marker1430 = new google.maps.Marker({ position: point1430, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1430.NUEVO  AMANECER." }); 
        //information for  
        function goToLink1430() { infowindow1430.open(map,marker1430);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1430, 'click', goToLink1430); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1431  
        //positions 
        var point1431 = new google.maps.LatLng(13.805526, -88.335842); var contentString1431 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">RECUPERACIÓN 05 DE MAYO.</h1>'+ '<div id="bodyContent">'+ '<p><b>RECUPERACIÓN 05 DE MAYO.</b> , —  Dirección:  Cantón Ostucal, Caserío  El Jute. Días y horas  de  reuniones: De Lunes  a Domingo de 4:00 a 5:00 p.m.  Miembros asistentes: 9 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1431 = new google.maps.InfoWindow({ content: contentString1431 });   
        //markers  
        var marker1431 = new google.maps.Marker({ position: point1431, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1431.RECUPERACIÓN 05 DE MAYO." }); 
        //information for  
        function goToLink1431() { infowindow1431.open(map,marker1431);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1431, 'click', goToLink1431); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1432  
        //positions 
        var point1432 = new google.maps.LatLng(13.813029, -88.344795); var contentString1432 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading"></h1>'+ '<div id="bodyContent">'+ '<p><b></b> , UNA  LUZ EN SANTA BARBARA.— 21 de  Enero  de  2006.  Direc- ción: Cantón San Juan,  Caserío El Quebracho. Días y horas  de  reu- niones: De Lunes a Domingo de 4:00 a 6:00 p.m. Miembros asisten- tes: 15 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1432 = new google.maps.InfoWindow({ content: contentString1432 });   
        //markers  
        var marker1432 = new google.maps.Marker({ position: point1432, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1432." }); 
        //information for  
        function goToLink1432() { infowindow1432.open(map,marker1432);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1432, 'click', goToLink1432); google.maps.event.addDomListener(window, 'load', initialize);

        //MARCADOR 1433  
        //positions 
        var point1433 = new google.maps.LatLng(13.439118, -88.142245); var contentString1433 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">06  DE JULIO VOLVER A NACER.</h1>'+ '<div id="bodyContent">'+ '<p><b>06  DE JULIO VOLVER A NACER.</b> , — 06 de  Julio  de  1994.  Direc- ción: Cantón Anchico, Caserío El Huiscoyol. Días y horas  de reunio- nes: De Lunes a Domingo de 6:00 a 8:00 p.m. Miembros asistentes: 15 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1433 = new google.maps.InfoWindow({ content: contentString1433 });   
        //markers  
        var marker1433 = new google.maps.Marker({ position: point1433, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1433.06  DE JULIO VOLVER A NACER." }); 
        //information for  
        function goToLink1433() { infowindow1433.open(map,marker1433);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1433, 'click', goToLink1433); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1434  
        //positions 
        var point1434 = new google.maps.LatLng(13.464662, -88.191918); var contentString1434 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">10  DE AGOSTO.</h1>'+ '<div id="bodyContent">'+ '<p><b>10  DE AGOSTO.</b> , — 10 de  Agosto de  1997.  Dirección:  Avenida  Las Palmeras, Urbanización La Paz,  Block “O”  N° 5.  Días  y horas  de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m. Miembros asis- tentes: 16 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1434 = new google.maps.InfoWindow({ content: contentString1434 });   
        //markers  
        var marker1434 = new google.maps.Marker({ position: point1434, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1434.10  DE AGOSTO." }); 
        //information for  
        function goToLink1434() { infowindow1434.open(map,marker1434);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1434, 'click', goToLink1434); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1435  
        //positions 
        var point1435 = new google.maps.LatLng(13.470357, -88.184544); var contentString1435 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">12  DE ENERO.</h1>'+ '<div id="bodyContent">'+ '<p><b>12  DE ENERO.</b> , — 12  de  Enero  de  1974.  Dirección:  Colonia  San José, Calle Santa  María N° 17. Días y horas  de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.  Miembros asistentes: 8 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1435 = new google.maps.InfoWindow({ content: contentString1435 });   
        //markers  
        var marker1435 = new google.maps.Marker({ position: point1435, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1435.12  DE ENERO." }); 
        //information for  
        function goToLink1435() { infowindow1435.open(map,marker1435);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1435, 'click', goToLink1435); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1436  
        //positions 
        var point1436 = new google.maps.LatLng(13.477714, -88.175631); var contentString1436 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">14  DE MARZO.</h1>'+ '<div id="bodyContent">'+ '<p><b>14  DE MARZO.</b> , — 14 de  Marzo de  1965.  Dirección:  Avenida  José Simeón  Cañas  y 7ª Calle Poniente N° 101.  Días y horas  de  reunio- nes: De Lunes a Domingo de 7:00 a 9:00 p.m. Miembros asistentes: 12 Hombres y 1 Mujer.</p>'+ '</div>'+ '</div>'; var infowindow1436 = new google.maps.InfoWindow({ content: contentString1436 });  
         //markers  
         var marker1436 = new google.maps.Marker({ position: point1436, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1436.14  DE MARZO." }); 
         //information for  
         function goToLink1436() { infowindow1436.open(map,marker1436);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1436, 'click', goToLink1436); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1437  
        //positions 
        var point1437 = new google.maps.LatLng(13.489862, -88.205564); var contentString1437 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">17 DE JULIO.</h1>'+ '<div id="bodyContent">'+ '<p><b>17 DE JULIO.</b> , — 17 de  Julio de  1989.  Dirección:  San Antonio  Silva. Días y horas  de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m. Miembros asistentes: 4 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1437 = new google.maps.InfoWindow({ content: contentString1437 });   
        //markers  
        var marker1437 = new google.maps.Marker({ position: point1437, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1437.17 DE JULIO." }); 
        //information for  
        function goToLink1437() { infowindow1437.open(map,marker1437);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1437, 'click', goToLink1437); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1438  //positions 
        var point1438 = new google.maps.LatLng(13.481477, -88.178432); var contentString1438 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">17  DE JUNIO SAN  MIGUEL.</h1>'+ '<div id="bodyContent">'+ '<p><b>17  DE JUNIO SAN  MIGUEL.</b> , — 17  de  Junio  de  2009.  Dirección: Colonia  El Palmar,  Avenida  Central  Nº 104.  Días y horas  de  reunio- nes: De Lunes a Domingo de 7:00 a 9:00 p.m. Miembros asistentes: 20 Hombres y 1 Mujer.</p>'+ '</div>'+ '</div>'; var infowindow1438 = new google.maps.InfoWindow({ content: contentString1438 });   
        //markers  
        var marker1438 = new google.maps.Marker({ position: point1438, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1438.17  DE JUNIO SAN  MIGUEL." }); 
        //information for  
        function goToLink1438() { infowindow1438.open(map,marker1438);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1438, 'click', goToLink1438); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1439  //positions 
        var point1439 = new google.maps.LatLng(13.472250, -88.178955); var contentString1439 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">21 DE ENERO.</h1>'+ '<div id="bodyContent">'+ '<p><b>21 DE ENERO.</b> , — 21 de Enero de 1978. Dirección: 15ª Calle Ponien- te Nº 107 Barrio San Nicolás.  Días y horas  de  reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.  Miembros asistentes: 10 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1439 = new google.maps.InfoWindow({ content: contentString1439 });   
        //markers  
        var marker1439 = new google.maps.Marker({ position: point1439, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1439.21 DE ENERO." }); 
        //information for  
        function goToLink1439() { infowindow1439.open(map,marker1439);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1439, 'click', goToLink1439); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1440  //positions 
        var point1440 = new google.maps.LatLng(13.425343, -88.150878); var contentString1440 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">22  DE OCTUBRE.</h1>'+ '<div id="bodyContent">'+ '<p><b>22  DE OCTUBRE.</b> , — 22 de  Octubre de  2006.  Dirección:  Cantón El Volcán, entre fincas La Granja y Santa Isabel. Días y horas  de reunio- nes: De Lunes a Domingo de 4:30 a 6:30 p.m. Miembros asistentes: 9 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1440 = new google.maps.InfoWindow({ content: contentString1440 });   
        //markers  
        var marker1440 = new google.maps.Marker({ position: point1440, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1440.22  DE OCTUBRE." }); 
        //information for  
        function goToLink1440() { infowindow1440.open(map,marker1440);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1440, 'click', goToLink1440); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1441  //positions 
        var point1441 = new google.maps.LatLng(13.501549, -88.156019); var contentString1441 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">24 DE SEPTIEMBRE.</h1>'+ '<div id="bodyContent">'+ '<p><b>24 DE SEPTIEMBRE.</b> , — 24 de  Septiembre de  1987.  Dirección:  Co- lonia  Carmenza, Avenida  Flora,  Calle  Principal  N° 2. Días y horas de  reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m.  Miembros asistentes: 11 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1441 = new google.maps.InfoWindow({ content: contentString1441 });   
        //markers  
        var marker1441 = new google.maps.Marker({ position: point1441, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1441.24 DE SEPTIEMBRE." }); 
        //information for  
        function goToLink1441() { infowindow1441.open(map,marker1441);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1441, 'click', goToLink1441); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1442  //positions 
        var point1442 = new google.maps.LatLng(13.476541, -88.173152); var contentString1442 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">24 HORAS.</h1>'+ '<div id="bodyContent">'+ '<p><b>24 HORAS.</b> , — 13 de  Febrero de  1981.  Dirección:  14ª Calle Oriente N° 601, Colonia  Gavidia. Días y horas  de reuniones: De Lunes a Do- mingo  de 7:00 a 9:00 p.m.  Miembros asistentes: 22 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1442 = new google.maps.InfoWindow({ content: contentString1442 });   
        //markers  
        var marker1442 = new google.maps.Marker({ position: point1442, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1442.24 HORAS." }); 
        //information for  
        function goToLink1442() { infowindow1442.open(map,marker1442);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1442, 'click', goToLink1442); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1443  //positions 
        var point1443 = new google.maps.LatLng(13.446389, -88.176887); var contentString1443 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">30  DE MAYO.</h1>'+ '<div id="bodyContent">'+ '<p><b>30  DE MAYO.</b> , — 30 de  Mayo de  1982.  Dirección:  Colonia  Las Vio- letas,  Calle  Principal,  Cantón Zamora.  Días  y horas  de  reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m.  Miembros asistentes: 10 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1443 = new google.maps.InfoWindow({ content: contentString1443 });   
        //markers  
        var marker1443 = new google.maps.Marker({ position: point1443, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1443.30  DE MAYO." }); 
        //information for  
        function goToLink1443() { infowindow1443.open(map,marker1443);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1443, 'click', goToLink1443); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1444  //positions 
        var point1444 = new google.maps.LatLng(13.446860, -88.186599); var contentString1444 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">ACCIÓN Y FE.</h1>'+ '<div id="bodyContent">'+ '<p><b>ACCIÓN Y FE.</b> , — 24 de Septiembre de 1982.  Dirección:  7ª Avenida Sur Bis N° 612. Días y horas  de  reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.  Miembros asistentes: 16 Hombres y 2 Mujeres.</p>'+ '</div>'+ '</div>'; var infowindow1444 = new google.maps.InfoWindow({ content: contentString1444 });   
        //markers  
        var marker1444 = new google.maps.Marker({ position: point1444, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1444.ACCIÓN Y FE." }); 
        //information for  
        function goToLink1444() { infowindow1444.open(map,marker1444);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1444, 'click', goToLink1444); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1445  //positions 
        var point1445 = new google.maps.LatLng(13.454588, -88.145097); var contentString1445 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">ALEGRÍA DE VIVIR.</h1>'+ '<div id="bodyContent">'+ '<p><b>ALEGRÍA DE VIVIR.</b> , — 24  de  Enero  de  1976.  Dirección:  Colonia Carrillo, Calle Principal,  Block “N”,  N° 150.  Días y horas  de  reunio- nes: De Lunes a Domingo de 6:00 a 8:00 p.m. Miembros asistentes: 6 Hombres y 1 Mujer.</p>'+ '</div>'+ '</div>'; var infowindow1445 = new google.maps.InfoWindow({ content: contentString1445 });   
        //markers  
        var marker1445 = new google.maps.Marker({ position: point1445, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1445.ALEGRÍA DE VIVIR." }); 
        //information for  
        function goToLink1445() { infowindow1445.open(map,marker1445);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1445, 'click', goToLink1445); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1446  //positions 
        var point1446 = new google.maps.LatLng(13.441288, -88.104746); var contentString1446 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">AMANECER CON  SOBRIEDAD EN ORIENTE.</h1>'+ '<div id="bodyContent">'+ '<p><b>AMANECER CON  SOBRIEDAD EN ORIENTE.</b> , — 21  de  Abril de 1982.  Dirección:  Cantón El Jute, contiguo a Tropigas. Días y horas de  reuniones: De Lunes a Domingo de  5:00 a 7:00 p.m.  Miembros asistentes: 15 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1446 = new google.maps.InfoWindow({ content: contentString1446 });   
        //markers  
        var marker1446 = new google.maps.Marker({ position: point1446, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1446.AMANECER CON  SOBRIEDAD EN ORIENTE." }); 
        //information for  
        function goToLink1446() { infowindow1446.open(map,marker1446);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1446, 'click', goToLink1446); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1447  //positions 
        var point1447 = new google.maps.LatLng(13.499947, -88.220063); var contentString1447 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">AMOR POR SALVAR MI VIDA</h1>'+ '<div id="bodyContent">'+ '<p><b>AMOR POR SALVAR MI VIDA</b> , — 11 de  Julio  de  2005.  Dirección: Caserío La Ermita,  Cantón El Jacatal. Días  y horas  de  reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m.  Miembros asistentes: 13 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1447 = new google.maps.InfoWindow({ content: contentString1447 });   
        //markers  
        var marker1447 = new google.maps.Marker({ position: point1447, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1447.AMOR POR SALVAR MI VIDA" }); 
        //information for  
        function goToLink1447() { infowindow1447.open(map,marker1447);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1447, 'click', goToLink1447); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1448  
        //positions 
        var point1448 = new google.maps.LatLng(13.329592, -88.149807); var contentString1448 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">AMOR Y PAZ.</h1>'+ '<div id="bodyContent">'+ '<p><b>AMOR Y PAZ.</b> , — 08 de Julio de 1978.  Dirección:  Cantón El Delirio, Km. 143 Carretera a Usulután.  Días y horas  de  reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.  Miembros asistentes: 22 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1448 = new google.maps.InfoWindow({ content: contentString1448 });   
        //markers  
        var marker1448 = new google.maps.Marker({ position: point1448, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1448.AMOR Y PAZ." }); 
        //information for  
        function goToLink1448() { infowindow1448.open(map,marker1448);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1448, 'click', goToLink1448); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1449  
        //positions 
        var point1449 = new google.maps.LatLng(13.849391, -88.433383); var contentString1449 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">BENDITO AMANECER.</h1>'+ '<div id="bodyContent">'+ '<p><b>BENDITO AMANECER.</b> , — 14 de Marzo de 2002. Dirección: Cantón San Andrés.  Días y horas  de  reuniones: De Lunes a Sábado de  5:00 a 7:00 p.m.  Miembros asistentes: 15 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1449 = new google.maps.InfoWindow({ content: contentString1449 });   
        //markers  
        var marker1449 = new google.maps.Marker({ position: point1449, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1449.BENDITO AMANECER." }); 
        //information for  
        function goToLink1449() { infowindow1449.open(map,marker1449);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1449, 'click', goToLink1449); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1450  
        //positions 
        var point1450 = new google.maps.LatLng(13.488238, -88.177134); var contentString1450 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">BUENA  VOLUNTAD.</h1>'+ '<div id="bodyContent">'+ '<p><b>BUENA  VOLUNTAD.</b> , — 24  de  Junio  de  2005.  Dirección:  2ª  Ave- nida  Norte  entre 14 y 16 Calle Oriente. Días y horas  de  reuniones: De Lunes a Domingo de  7:00 a 9:00 p.m.  Miembros asistentes: 12 Hombres y 3 Mujeres.</p>'+ '</div>'+ '</div>'; var infowindow1450 = new google.maps.InfoWindow({ content: contentString1450 });   
        //markers  
        var marker1450 = new google.maps.Marker({ position: point1450, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1450.BUENA  VOLUNTAD." }); 
        //information for  
        function goToLink1450() { infowindow1450.open(map,marker1450);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1450, 'click', goToLink1450); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1451  
        //positions 
        var point1451 = new google.maps.LatLng(13.462575, -88.179305); var contentString1451 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">CENTRAL MIGUELEÑO.</h1>'+ '<div id="bodyContent">'+ '<p><b>CENTRAL MIGUELEÑO.</b> , — 03 de  Junio  de  1996.  Dirección:  Colo- nia Santa  Lucía, 7ª Avenida  Sur N° 121,  contiguo al Molino.  Días y horas de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m. Miem- bros  asistentes: 16 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1451 = new google.maps.InfoWindow({ content: contentString1451 });   
        //markers  
        var marker1451 = new google.maps.Marker({ position: point1451, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1451.CENTRAL MIGUELEÑO." }); 
        //information for  
        function goToLink1451() { infowindow1451.open(map,marker1451);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1451, 'click', goToLink1451); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1452  
        //positions 
        var point1452 = new google.maps.LatLng(13.487150, -88.177110); var contentString1452 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">CHAPARRASTIQUE.</h1>'+ '<div id="bodyContent">'+ '<p><b>CHAPARRASTIQUE.</b> , — 04 de Enero de 1963. Dirección:  2ª Avenida Norte  N° 701, entre 12ª y 14ª Calle Oriente. Días y horas  de reunio- nes: De Lunes a Domingo de 7:00 a 9:00 p.m. Miembros asistentes: 18 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1452 = new google.maps.InfoWindow({ content: contentString1452 });   
        //markers  
        var marker1452 = new google.maps.Marker({ position: point1452, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1452.CHAPARRASTIQUE." }); 
        //information for  
        function goToLink1452() { infowindow1452.open(map,marker1452);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1452, 'click', goToLink1452); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1453  
        //positions 
        var point1453 = new google.maps.LatLng(13.496741, -88.169257); var contentString1453 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">DESPERTAR EN A.A.</h1>'+ '<div id="bodyContent">'+ '<p><b>DESPERTAR EN A.A.</b> , — 01 de  Marzo de  2000.  Dirección:  Colonia Santa  Luisa, Avenida  Las Vegas  y Calle  Santa  Úrsula. Días y horas de  reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m.  Miembros asistentes: 9 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1453 = new google.maps.InfoWindow({ content: contentString1453 });   
        //markers  
        var marker1453 = new google.maps.Marker({ position: point1453, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1453.DESPERTAR EN A.A." }); 
        //information for  
        function goToLink1453() { infowindow1453.open(map,marker1453);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1453, 'click', goToLink1453); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1454  
        //positions 
        var point1454 = new google.maps.LatLng(13.466904, -88.169146); var contentString1454 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">DIOS NOS  GUÍA.</h1>'+ '<div id="bodyContent">'+ '<p><b>DIOS NOS  GUÍA.</b> , — 01  de  Noviembre de  2012.  Dirección:  Final Avenida  San Luis, Milagro de  La Paz. Días y horas  de  reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m. Miembros asistentes: 6 Hom- bres  y 1 Mujer.</p>'+ '</div>'+ '</div>'; var infowindow1454 = new google.maps.InfoWindow({ content: contentString1454 });   
        //markers  
        var marker1454 = new google.maps.Marker({ position: point1454, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1454.DIOS NOS  GUÍA." }); 
        //information for  
        function goToLink1454() { infowindow1454.open(map,marker1454);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1454, 'click', goToLink1454); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1455  
        //positions 
        var point1455 = new google.maps.LatLng(13.474201, -88.198078); var contentString1455 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">ENCONTRANDO AMIGOS.</h1>'+ '<div id="bodyContent">'+ '<p><b>ENCONTRANDO AMIGOS.</b> , — 10 de Junio de 2002. Dirección: Co- lonia Vía Satélite, Avenida  Utilia N° 18. Días y horas  de  reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m.  Miembros asistentes: 15 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1455 = new google.maps.InfoWindow({ content: contentString1455 });   
        //markers  
        var marker1455 = new google.maps.Marker({ position: point1455, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1455.ENCONTRANDO AMIGOS." }); 
        //information for  
        function goToLink1455() { infowindow1455.open(map,marker1455);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1455, 'click', goToLink1455); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1456  
        //positions 
        var point1456 = new google.maps.LatLng(13.467176, -88.195109); var contentString1456 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">ESPAÑA.</h1>'+ '<div id="bodyContent">'+ '<p><b>ESPAÑA.</b> , —  05 de  Agosto de  2002.  Dirección:  Urbanización Espa- ña, Polígono 13, Casa  Nº 33. Días y horas  de  reuniones: De Lunes a Domingo de  7:00 a 9:00 p.m.  Miembros asistentes: 6 Hombres y 1 Mujer.</p>'+ '</div>'+ '</div>'; var infowindow1456 = new google.maps.InfoWindow({ content: contentString1456 });   
        //markers  
        var marker1456 = new google.maps.Marker({ position: point1456, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1456.ESPAÑA." }); 
        //information for  
        function goToLink1456() { infowindow1456.open(map,marker1456);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1456, 'click', goToLink1456); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1457  
        //positions 
        var point1457 = new google.maps.LatLng(13.491354, -88.188758); var contentString1457 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">EXPRESO DE LA SIETE.</h1>'+ '<div id="bodyContent">'+ '<p><b>EXPRESO DE LA SIETE.</b> , — 02 de  Enero  de  1991.  Dirección:  Colo- nia Buenos  Aires, Calle  Principal  N° 8. Días y horas  de  reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m.  Miembros asistentes: 22 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1457 = new google.maps.InfoWindow({ content: contentString1457 });   
        //markers  
        var marker1457 = new google.maps.Marker({ position: point1457, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1457.EXPRESO DE LA SIETE." }); 
        //information for  
        function goToLink1457() { infowindow1457.open(map,marker1457);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1457, 'click', goToLink1457); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1458  
        //positions 
        var point1458 = new google.maps.LatLng(13.479102, -88.178001); var contentString1458 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">FAMILIA FELIZ.</h1>'+ '<div id="bodyContent">'+ '<p><b>FAMILIA FELIZ.</b> , — 23 de  Septiembre de  2000.  Dirección:  Barrio El Centro, San Antonio  Silva, San Miguel.  Días y horas  de  reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m.  Miembros asistentes: 25 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1458 = new google.maps.InfoWindow({ content: contentString1458 });   
        //markers  
        var marker1458 = new google.maps.Marker({ position: point1458, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1458.FAMILIA FELIZ." }); 
        //information for  
        function goToLink1458() { infowindow1458.open(map,marker1458);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1458, 'click', goToLink1458); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1459  
        //positions 
        var point1459 = new google.maps.LatLng(13.440121, -88.133909); var contentString1459 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">FE Y ESPERANZA.</h1>'+ '<div id="bodyContent">'+ '<p><b>FE Y ESPERANZA.</b> , — 12 de  Abril de  1980.  Dirección:  Cantón Las Delicias, Caserío El Apacunque. Días y horas de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.  Miembros asistentes: 15 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1459 = new google.maps.InfoWindow({ content: contentString1459 });   
        //markers  
        var marker1459 = new google.maps.Marker({ position: point1459, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1459.FE Y ESPERANZA." }); 
        //information for  
        function goToLink1459() { infowindow1459.open(map,marker1459);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1459, 'click', goToLink1459); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1460  
        //positions 
        var point1460 = new google.maps.LatLng(13.455981, -88.142664); var contentString1460 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">FE Y ESPERANZA.</h1>'+ '<div id="bodyContent">'+ '<p><b>FE Y ESPERANZA.</b> , — 20 de Septiembre de 2003. Dirección: Cantón El Volcán, Caserío El Carreto. Días y horas  de  reuniones: De Lunes a Domingo de 5:00 a 7:00 p.m.  Miembros asistentes: 10 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1460 = new google.maps.InfoWindow({ content: contentString1460 });   
        //markers  
        var marker1460 = new google.maps.Marker({ position: point1460, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1460.FE Y ESPERANZA." }); 
        //information for  
        function goToLink1460() { infowindow1460.open(map,marker1460);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1460, 'click', goToLink1460); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1461  
        //positions 
        var point1461 = new google.maps.LatLng(13.501993, -88.228381); var contentString1461 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">FE Y ESPERANZA.</h1>'+ '<div id="bodyContent">'+ '<p><b>FE Y ESPERANZA.</b> , — 26  de  Abril de  1990.  Dirección:  Cantón El Jacatal, Caserío El Alto de  La Loma,  1 Cuadra antes de  Hotel  de Oriente. Días y horas  de  reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m.  Miembros asistentes: 7 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1461 = new google.maps.InfoWindow({ content: contentString1461 });   
        //markers  
        var marker1461 = new google.maps.Marker({ position: point1461, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1461.FE Y ESPERANZA." }); 
        //information for  
        function goToLink1461() { infowindow1461.open(map,marker1461);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1461, 'click', goToLink1461); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1462  
        //positions 
        var point1462 = new google.maps.LatLng(13.502420, -88.211296); var contentString1462 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">LA ÚLTIMA CARRETA.</h1>'+ '<div id="bodyContent">'+ '<p><b>LA ÚLTIMA CARRETA.</b> , — 17 de Marzo de 1975. Dirección:  Avenida Roosevelt. Días y horas  de reuniones: De Lunes a Sábado de 6:30 a 8:30 p.m.  Miembros asistentes: 15 Hombres y 1 Mujer.</p>'+ '</div>'+ '</div>'; var infowindow1462 = new google.maps.InfoWindow({ content: contentString1462 });   
        //markers  
        var marker1462 = new google.maps.Marker({ position: point1462, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1462.LA ÚLTIMA CARRETA." }); 
        //information for  
        function goToLink1462() { infowindow1462.open(map,marker1462);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1462, 'click', goToLink1462); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1463  
        //positions 
        var point1463 = new google.maps.LatLng(13.492544, -88.160790); var contentString1463 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">LOS 12  PASOS.</h1>'+ '<div id="bodyContent">'+ '<p><b>LOS 12  PASOS.</b> , —  09 de  Septiembre de  1983.  Dirección:  Colonia El Tesoro, Calle La Paz, Nº 50. Días y horas  de  reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m.  Miembros asistentes: 25 Hombres y 1 Mujer.</p>'+ '</div>'+ '</div>'; var infowindow1463 = new google.maps.InfoWindow({ content: contentString1463 });   
        //markers  
        var marker1463 = new google.maps.Marker({ position: point1463, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1463.LOS 12  PASOS." }); 
        //information for  
        function goToLink1463() { infowindow1463.open(map,marker1463);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1463, 'click', goToLink1463); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1464  
        //positions 
        var point1464 = new google.maps.LatLng(13.467618, -88.191759); var contentString1464 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">LOS AHIJADOS DE BILL.</h1>'+ '<div id="bodyContent">'+ '<p><b>LOS AHIJADOS DE BILL.</b> , — 03 de  Diciembre de  2008.  Dirección: Colonia  Ciudad Pacifica 3a  Etapa. Días y horas  de reuniones: De Lu- nes  a Domingo de  6:30 a 8:30 p.m.  Miembros asistentes: 16 Hom- bres.</p>'+ '</div>'+ '</div>'; var infowindow1464 = new google.maps.InfoWindow({ content: contentString1464 });   
        //markers  
        var marker1464 = new google.maps.Marker({ position: point1464, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1464.LOS AHIJADOS DE BILL." }); 
        //information for  
        function goToLink1464() { infowindow1464.open(map,marker1464);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1464, 'click', goToLink1464); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1465  
        //positions 
        var point1465 = new google.maps.LatLng(13.469897, -88.170441); var contentString1465 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">LUZ EN EL TRIUNFO.</h1>'+ '<div id="bodyContent">'+ '<p><b>LUZ EN EL TRIUNFO.</b> , —  05 de Septiembre de 2006. Dirección: Co- lonia Milagro  de  La Paz, Calle Cadenas, esquina Pasaje  El Molino, Zona alta, Nº 237. Días y horas  de  reuniones: De Lunes a Domingo de 5:30 a 7:30 p.m.  Miembros asistentes: 10 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1465 = new google.maps.InfoWindow({ content: contentString1465 });   
        //markers  
        var marker1465 = new google.maps.Marker({ position: point1465, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1465.LUZ EN EL TRIUNFO." }); 
        //information for  
        function goToLink1465() { infowindow1465.open(map,marker1465);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1465, 'click', goToLink1465); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1466  
        //positions 
        var point1466 = new google.maps.LatLng(13.469153, -88.127746); var contentString1466 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">LUZ EN LAS TINIEBLAS.</h1>'+ '<div id="bodyContent">'+ '<p><b>LUZ EN LAS TINIEBLAS.</b> , — 10 de  Noviembre de  1966.  Dirección: 21 Calle Oriente N° 57, Barrio Concepción. Días y horas  de  reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m. Miembros asistentes: 8 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1466 = new google.maps.InfoWindow({ content: contentString1466 });   
        //markers  
        var marker1466 = new google.maps.Marker({ position: point1466, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1466.LUZ EN LAS TINIEBLAS." }); 
        //information for  
        function goToLink1466() { infowindow1466.open(map,marker1466);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1466, 'click', goToLink1466); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1467  
        //positions 
        var point1467 = new google.maps.LatLng(13.440978, -88.134134); var contentString1467 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">LUZ Y ESPERANZA.</h1>'+ '<div id="bodyContent">'+ '<p><b>LUZ Y ESPERANZA.</b> , — 03 de  Agosto de  1975.  Dirección:  Cantón Las Delicias, Caserío Las Hojas. Días y horas  de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.  Miembros asistentes: 12 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1467 = new google.maps.InfoWindow({ content: contentString1467 });   
        //markers  
        var marker1467 = new google.maps.Marker({ position: point1467, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1467.LUZ Y ESPERANZA." }); 
        //information for  
        function goToLink1467() { infowindow1467.open(map,marker1467);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1467, 'click', goToLink1467); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1468  
        //positions 
        var point1468 = new google.maps.LatLng(13.467810, -88.194232); var contentString1468 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">MENSAJE DE DIOS.</h1>'+ '<div id="bodyContent">'+ '<p><b>MENSAJE DE DIOS.</b> , — 28 de  Agosto de  1998.  Dirección:  Cantón San  Antonio  Silva, Barrio Santa  Lucía. Días  y horas  de  reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m.  Miembros asistentes: 20 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1468 = new google.maps.InfoWindow({ content: contentString1468 });   
        //markers  
        var marker1468 = new google.maps.Marker({ position: point1468, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1468.MENSAJE DE DIOS." }); 
        //information for  
        function goToLink1468() { infowindow1468.open(map,marker1468);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1468, 'click', goToLink1468); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1469  
        //positions 
        var point1469 = new google.maps.LatLng(13.451673, -88.151537); var contentString1469 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">MI ÚLTIMA COPA.</h1>'+ '<div id="bodyContent">'+ '<p><b>MI ÚLTIMA COPA.</b> , — 26 de Noviembre de 2011. Dirección:  Cantón El Jalacatal 2a  Calle a 1 Cuadra de Cruzadilla. Días y horas de reunio- nes: De Lunes a Domingo de 6:00 a 8:00 p.m. Miembros asistentes: 14 Hombres y 1 Mujer.</p>'+ '</div>'+ '</div>'; var infowindow1469 = new google.maps.InfoWindow({ content: contentString1469 });   
        //markers  
        var marker1469 = new google.maps.Marker({ position: point1469, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1469.MI ÚLTIMA COPA." }); 
        //information for  
        function goToLink1469() { infowindow1469.open(map,marker1469);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1469, 'click', goToLink1469); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1470  
        //positions 
        var point1470 = new google.maps.LatLng(13.467653, -88.194226); var contentString1470 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">MILAGRO DE LA PAZ.</h1>'+ '<div id="bodyContent">'+ '<p><b>MILAGRO DE LA PAZ.</b> , — 03  de  Septiembre de  1978.  Dirección: Calle Avalos, contiguo a Pozo  Adesco, Colonia  Milagro  de  La Paz. Días y horas  de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m. Miembros asistentes: 15 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1470 = new google.maps.InfoWindow({ content: contentString1470 });   
        //markers  
        var marker1470 = new google.maps.Marker({ position: point1470, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1470.MILAGRO DE LA PAZ." }); 
        //information for  
        function goToLink1470() { infowindow1470.open(map,marker1470);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1470, 'click', goToLink1470); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1471  
        //positions 
        var point1471 = new google.maps.LatLng(13.479939, -88.179060); var contentString1471 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NADA  PODEMOS SOLOS.</h1>'+ '<div id="bodyContent">'+ '<p><b>NADA  PODEMOS SOLOS.</b> , — 27 de  Junio  de  1958.  Dirección:  1a Calle Poniente N° 302, Barrio La Merced. Días y horas  de reuniones: De Lunes a Sábado de  4:00 a 6:00 y Domingo de  6:30 a 8:30 p.m. Miembros asistentes: 18 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1471 = new google.maps.InfoWindow({ content: contentString1471 });   
        //markers  
        var marker1471 = new google.maps.Marker({ position: point1471, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1471.NADA  PODEMOS SOLOS." }); 
        //information for  
        function goToLink1471() { infowindow1471.open(map,marker1471);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1471, 'click', goToLink1471); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1472  
        //positions 
        var point1472 = new google.maps.LatLng(13.461843, -88.169985); var contentString1472 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NUEVA VIDA.</h1>'+ '<div id="bodyContent">'+ '<p><b>NUEVA VIDA.</b> , — 18  de  Octubre de  2001.  Dirección:  Colonia  Mi- lagro  de  La Paz, Calle El Progreso, Pasaje  Los Olivos.  Días y horas de  reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m.  Miembros asistentes: 16 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1472 = new google.maps.InfoWindow({ content: contentString1472 });   
        //markers  
        var marker1472 = new google.maps.Marker({ position: point1472, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1472.NUEVA VIDA." }); 
        //information for  
        function goToLink1472() { infowindow1472.open(map,marker1472);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1472, 'click', goToLink1472); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1473  
        //positions 
        var point1473 = new google.maps.LatLng(13.528467, -88.190421); var contentString1473 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NUEVO CONCEPCIÓN.</h1>'+ '<div id="bodyContent">'+ '<p><b>NUEVO CONCEPCIÓN.</b> , — 17 de  Febrero de  2007.  Dirección:  Ca- lle Principal,  Colonia  15 de  Septiembre. Días y horas  de  reuniones: De  Lunes  a Domingo de  6:00  a 8:00  p.m.  Miembros asistentes: 8 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1473 = new google.maps.InfoWindow({ content: contentString1473 });   
        //markers  
        var marker1473 = new google.maps.Marker({ position: point1473, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1473.NUEVO CONCEPCIÓN." }); 
        //information for  
        function goToLink1473() { infowindow1473.open(map,marker1473);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1473, 'click', goToLink1473); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1474  
        //positions 
        var point1474 = new google.maps.LatLng(13.456911, -88.169973); var contentString1474 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NUEVO DESPERTAR AGUA ZARCA.</h1>'+ '<div id="bodyContent">'+ '<p><b>NUEVO DESPERTAR AGUA ZARCA.</b> , — 13 de  Enero  de  1997.  Di- rección:  Cantón Santa  Inés,  Caserío Agua  Zarca.  Días  y horas  de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m. Miembros asis- tentes: 15 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1474 = new google.maps.InfoWindow({ content: contentString1474 });   
        //markers  
        var marker1474 = new google.maps.Marker({ position: point1474, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1474.NUEVO DESPERTAR AGUA ZARCA." }); 
        //information for  
        function goToLink1474() { infowindow1474.open(map,marker1474);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1474, 'click', goToLink1474); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1475  
        //positions 
        var point1475 = new google.maps.LatLng(13.471185, -88.180481); var contentString1475 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NUEVO RENACER.</h1>'+ '<div id="bodyContent">'+ '<p><b>NUEVO RENACER.</b> , — 14 de  Mayo de  1989.  Dirección:  Calle Prin- cipal Colonia  Esmeralda. Días y horas  de reuniones: De Lunes a Do- mingo  de 6:00 a 8:00 p.m.  Miembros asistentes: 18 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1475 = new google.maps.InfoWindow({ content: contentString1475 });   
        //markers  
        var marker1475 = new google.maps.Marker({ position: point1475, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1475.NUEVO RENACER." }); 
        //information for  
        function goToLink1475() { infowindow1475.open(map,marker1475);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1475, 'click', goToLink1475); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1476  
        //positions 
        var point1476 = new google.maps.LatLng(13.460449, -88.138552); var contentString1476 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">PAZ Y SERENIDAD.</h1>'+ '<div id="bodyContent">'+ '<p><b>PAZ Y SERENIDAD.</b> , — 19 de  Noviembre de  1988.  Dirección:  10ª Avenida  Sur, Barrio San Isidro. Días y horas  de  reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.  Miembros asistentes: 10 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1476 = new google.maps.InfoWindow({ content: contentString1476 });   
        //markers  
        var marker1476 = new google.maps.Marker({ position: point1476, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1476.PAZ Y SERENIDAD." }); 
        //information for  
        function goToLink1476() { infowindow1476.open(map,marker1476);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1476, 'click', goToLink1476); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1477  
        //positions 
        var point1477 = new google.maps.LatLng(13.436807, -88.135162); var contentString1477 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">PRIMER MILAGRO DE DIOS.</h1>'+ '<div id="bodyContent">'+ '<p><b>PRIMER MILAGRO DE DIOS.</b> , — 30  de  Julio  de  1997.  Dirección: Cantón El Jacatal, al Poniente de  Centro Escolar.  Días y horas  de reuniones: De Lunes a Domingo de 6:30 a 8:30 p.m. Miembros asis- tentes: 8 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1477 = new google.maps.InfoWindow({ content: contentString1477 });   
        //markers  
        var marker1477 = new google.maps.Marker({ position: point1477, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1477.PRIMER MILAGRO DE DIOS." }); 
        //information for  
        function goToLink1477() { infowindow1477.open(map,marker1477);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1477, 'click', goToLink1477); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1478  
        //positions 
        var point1478 = new google.maps.LatLng(13.430598, -88.156893); var contentString1478 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">REALIDAD EN A.A.</h1>'+ '<div id="bodyContent">'+ '<p><b>REALIDAD EN A.A.</b> , — 14 de  Octubre de  1979.  Dirección:  Caserío La Loma,  Cantón Jalacatal. Días y horas  de  reuniones: De Lunes a Sábado de  6:00 a 8:00 p.m.  Miembros asistentes: 14 Hombres y 1 Mujer.</p>'+ '</div>'+ '</div>'; var infowindow1478 = new google.maps.InfoWindow({ content: contentString1478 });   
        //markers  
        var marker1478 = new google.maps.Marker({ position: point1478, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1478.REALIDAD EN A.A." }); 
        //information for  
        function goToLink1478() { infowindow1478.open(map,marker1478);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1478, 'click', goToLink1478); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1479  
        //positions 
        var point1479 = new google.maps.LatLng(13.421543, -88.157854); var contentString1479 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">RECUPERACIÓN 01  DE ENERO.</h1>'+ '<div id="bodyContent">'+ '<p><b>RECUPERACIÓN 01  DE ENERO.</b> , — 01 de  Enero  de  1987.  Direc- ción: 4ª Avenida Sur, N° 702 entre 11 y 13 Calle Oriente. Días y horas de  reuniones: De Lunes a Domingo de  6:30 a 8:30 p.m.  Miembros asistentes: 8 Hombres y 1 Mujer.</p>'+ '</div>'+ '</div>'; var infowindow1479 = new google.maps.InfoWindow({ content: contentString1479 });   
        //markers  
        var marker1479 = new google.maps.Marker({ position: point1479, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1479.RECUPERACIÓN 01  DE ENERO." }); 
        //information for  
        function goToLink1479() { infowindow1479.open(map,marker1479);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1479, 'click', goToLink1479); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1480  
        //positions 
        var point1480 = new google.maps.LatLng(13.477783, -88.183292); var contentString1480 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">RECUPERACIÓN 01  DE OCTUBRE.</h1>'+ '<div id="bodyContent">'+ '<p><b>RECUPERACIÓN 01  DE OCTUBRE.</b> , — 01  de  Octubre de  1994. Dirección:  Caserío La Loma,  Cantón El Jalacatal. Días  y horas  de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m. Miembros asis- tentes: 16 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1480 = new google.maps.InfoWindow({ content: contentString1480 });   
        //markers  
        var marker1480 = new google.maps.Marker({ position: point1480, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1480.RECUPERACIÓN 01  DE OCTUBRE." }); 
        //information for  
        function goToLink1480() { infowindow1480.open(map,marker1480);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1480, 'click', goToLink1480); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1481  
        //positions 
        var point1481 = new google.maps.LatLng(13.465060, -88.181515); var contentString1481 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">RENACER 02 DE MAYO.</h1>'+ '<div id="bodyContent">'+ '<p><b>RENACER 02 DE MAYO.</b> , — 02 de Mayo de 2008. Dirección: Cantón y Caserío Cantora. Días y horas  de reuniones: De Lunes a Domingo de 5:00 a 7:00 p.m.  Miembros asistentes: 10 Hombres y 1 Mujer.</p>'+ '</div>'+ '</div>'; var infowindow1481 = new google.maps.InfoWindow({ content: contentString1481 });   
        //markers  
        var marker1481 = new google.maps.Marker({ position: point1481, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1481.RENACER 02 DE MAYO." }); 
        //information for  
        function goToLink1481() { infowindow1481.open(map,marker1481);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1481, 'click', goToLink1481); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1482  
        //positions 
        var point1482 = new google.maps.LatLng(13.467864, -88.177305); var contentString1482 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">RENOVACIÓN 21 DE SEPTIEMBRE.</h1>'+ '<div id="bodyContent">'+ '<p><b>RENOVACIÓN 21 DE SEPTIEMBRE.</b> , — 21 de Septiembre de 1999. Dirección:  Cantón El Amate,  1 Cuadra al Poniente de  Centro Esco- lar. Días y horas  de  reuniones: De Lunes a Domingo de  4:00 a 6:00 p.m.  Miembros asistentes: 15 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1482 = new google.maps.InfoWindow({ content: contentString1482 });   
        //markers  
        var marker1482 = new google.maps.Marker({ position: point1482, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1482.RENOVACIÓN 21 DE SEPTIEMBRE." }); 
        //information for  
        function goToLink1482() { infowindow1482.open(map,marker1482);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1482, 'click', goToLink1482); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1483  
        //positions 
        var point1483 = new google.maps.LatLng(13.467778, -88.198281); var contentString1483 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">SAN  FRANCISCO DE ASÍS.</h1>'+ '<div id="bodyContent">'+ '<p><b>SAN  FRANCISCO DE ASÍS.</b> , — 26 de  Septiembre de  1964.  Direc- ción: Barrio San Felipe,  Avenida  Monseñor Romero  Nº 8. Días y ho- ras de  reuniones: De Lunes a Domingo de  6:30 a 8:30 p.m.  Miem- bros  asistentes: 15 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1483 = new google.maps.InfoWindow({ content: contentString1483 });   
        //markers  
        var marker1483 = new google.maps.Marker({ position: point1483, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1483.SAN  FRANCISCO DE ASÍS." }); 
        //information for  
        function goToLink1483() { infowindow1483.open(map,marker1483);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1483, 'click', goToLink1483); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1484  
        //positions 
        var point1484 = new google.maps.LatLng(13.452646, -88.162604); var contentString1484 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">SAN NICOLÁS.</h1>'+ '<div id="bodyContent">'+ '<p><b>SAN NICOLÁS.</b> , — 02 de  Abril de  1967.  Dirección:  Avenida  Unidad de  Salud,  Colonia  Milagro de  La Paz Nº 28. Días y horas  de  reunio- nes: De Lunes a Domingo de 6:00 a 8:00 p.m. Miembros asistentes: 16 Hombres y 2 Mujeres.</p>'+ '</div>'+ '</div>'; var infowindow1484 = new google.maps.InfoWindow({ content: contentString1484 });   
        //markers  
        var marker1484 = new google.maps.Marker({ position: point1484, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1484.SAN NICOLÁS." }); 
        //information for  
        function goToLink1484() { infowindow1484.open(map,marker1484);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1484, 'click', goToLink1484); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1485  
        //positions 
        var point1485 = new google.maps.LatLng(13.408378, -88.145487); var contentString1485 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">SITIO DE SOBRIEDAD.</h1>'+ '<div id="bodyContent">'+ '<p><b>SITIO DE SOBRIEDAD.</b> , — 15  de  Enero  de  1974.  Dirección:  Km. 136, Calle Panamericana, salida  a San Salvador. Días y horas  de  re- uniones: De Lunes a Domingo de  7:00 a 9:00 p.m.  Miembros asis- tentes: 10 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1485 = new google.maps.InfoWindow({ content: contentString1485 });   
        //markers  
        var marker1485 = new google.maps.Marker({ position: point1485, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1485.SITIO DE SOBRIEDAD." }); 
        //information for  
        function goToLink1485() { infowindow1485.open(map,marker1485);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1485, 'click', goToLink1485); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1486  
        //positions 
        var point1486 = new google.maps.LatLng(13.462950, -88.175693); var contentString1486 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">SOBRIEDAD EN LA 03  DE MAYO.</h1>'+ '<div id="bodyContent">'+ '<p><b>SOBRIEDAD EN LA 03  DE MAYO.</b> , — 14 de  Septiembre de  1995. Dirección:  Colonia  03  de  Mayo,  Calle  Principal,  Avenida  Arévalo. Días y horas  de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m. Miembros asistentes: 14 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1486 = new google.maps.InfoWindow({ content: contentString1486 });   
        //markers  
        var marker1486 = new google.maps.Marker({ position: point1486, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1486.SOBRIEDAD EN LA 03  DE MAYO." }); 
        //information for  
        function goToLink1486() { infowindow1486.open(map,marker1486);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1486, 'click', goToLink1486); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1487  
        //positions 
        var point1487 = new google.maps.LatLng(13.448820, -88.164382); var contentString1487 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">SOBRIEDAD EN LA PACÍFICA.</h1>'+ '<div id="bodyContent">'+ '<p><b>SOBRIEDAD EN LA PACÍFICA.</b> , — 26 de Marzo de 1999. Dirección: Urbanización Ciudad Pacifica,  senda A-9, N° 40.  Días  y horas  de reuniones: De Lunes a Domingo de 6:30 a 8:30 p.m. Miembros asis- tentes: 20 Hombres y 1 Mujer.</p>'+ '</div>'+ '</div>'; var infowindow1487 = new google.maps.InfoWindow({ content: contentString1487 });   
        //markers  
        var marker1487 = new google.maps.Marker({ position: point1487, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1487.SOBRIEDAD EN LA PACÍFICA." }); 
        //information for  
        function goToLink1487() { infowindow1487.open(map,marker1487);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1487, 'click', goToLink1487); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1488  
        //positions 
        var point1488 = new google.maps.LatLng(13.494006, -88.166910); var contentString1488 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">SOLO DIOS CON SU PODER.</h1>'+ '<div id="bodyContent">'+ '<p><b>SOLO DIOS CON SU PODER.</b> , — 31 de Agosto de 1977.  Dirección: Cantón Las Lomitas.  Días y horas  de  reuniones: De Lunes a Domin- go de 5:00 a 7:00 p.m.  Miembros asistentes: 24 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1488 = new google.maps.InfoWindow({ content: contentString1488 });   
        //markers  
        var marker1488 = new google.maps.Marker({ position: point1488, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1488.SOLO DIOS CON SU PODER." }); 
        //information for  
        function goToLink1488() { infowindow1488.open(map,marker1488);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1488, 'click', goToLink1488); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1489  
        //positions 
        var point1489 = new google.maps.LatLng(13.483643, -88.186073); var contentString1489 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">TRABAJANDO CON OTROS.</h1>'+ '<div id="bodyContent">'+ '<p><b>TRABAJANDO CON OTROS.</b> , — 07 de Febrero de 2007. Dirección: Calle Principal, Colonia  Kuri. Días y horas  de  reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m.  Miembros asistentes: 7 Hombres y 1 Mujer.</p>'+ '</div>'+ '</div>'; var infowindow1489 = new google.maps.InfoWindow({ content: contentString1489 });   
        //markers  
        var marker1489 = new google.maps.Marker({ position: point1489, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1489.TRABAJANDO CON OTROS." }); 
        //information for  
        function goToLink1489() { infowindow1489.open(map,marker1489);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1489, 'click', goToLink1489); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1490  
        //positions 
        var point1490 = new google.maps.LatLng(13.449039, -88.199177); var contentString1490 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">TRES LEGADOS.</h1>'+ '<div id="bodyContent">'+ '<p><b>TRES LEGADOS.</b> , — 10 de  Marzo de  1985.  Dirección:  El Jalacatal, La Ermita. Días y horas  de  reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m.  Miembros asistentes: 15 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1490 = new google.maps.InfoWindow({ content: contentString1490 });   
        //markers  
        var marker1490 = new google.maps.Marker({ position: point1490, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1490.TRES LEGADOS." }); 
        //information for  
        function goToLink1490() { infowindow1490.open(map,marker1490);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1490, 'click', goToLink1490); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1491  
        //positions 
        var point1491 = new google.maps.LatLng(13.504254, -88.172668); var contentString1491 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UN DÍA DESPUÉS.</h1>'+ '<div id="bodyContent">'+ '<p><b>UN DÍA DESPUÉS.</b> , — 16 de  Agosto de  1985.  Dirección:  Pasaje  1 N° 2. Colonia  Santa  María. Días y horas  de  reuniones: De Lunes  a Domingo de  6:30  a 8:30  p.m.  Miembros asistentes: 15 Hombres y 1 Mujer.</p>'+ '</div>'+ '</div>'; var infowindow1491 = new google.maps.InfoWindow({ content: contentString1491 });   
        //markers  
        var marker1491 = new google.maps.Marker({ position: point1491, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1491.UN DÍA DESPUÉS." }); 
        //information for  
        function goToLink1491() { infowindow1491.open(map,marker1491);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1491, 'click', goToLink1491); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1492  
        //positions 
        var point1492 = new google.maps.LatLng(13.440253, -88.136866); var contentString1492 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UN  MILAGRO EN ANCHICO.</h1>'+ '<div id="bodyContent">'+ '<p><b>UN  MILAGRO EN ANCHICO.</b> , — 02 de  Julio  de  2009.  Dirección: Cantón Anchico. Días y horas de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.  Miembros asistentes: 20 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1492 = new google.maps.InfoWindow({ content: contentString1492 });   
        //markers  
        var marker1492 = new google.maps.Marker({ position: point1492, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1492.UN  MILAGRO EN ANCHICO." }); 
        //information for  
        function goToLink1492() { infowindow1492.open(map,marker1492);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1492, 'click', goToLink1492); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1493  
        //positions 
        var point1493 = new google.maps.LatLng(13.416119, -88.218930); var contentString1493 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UN MILAGRO EN EL CIPRÉS.</h1>'+ '<div id="bodyContent">'+ '<p><b>UN MILAGRO EN EL CIPRÉS.</b> , — 10 de  Julio  de  2007.  Dirección: Cantón El Niño, Caserío El Ciprés.  Días y horas de reuniones: De Lu- nes  a Domingo de  6:00 a 8:00 p.m.  Miembros asistentes: 15 Hom- bres  y 1 Mujer.</p>'+ '</div>'+ '</div>'; var infowindow1493 = new google.maps.InfoWindow({ content: contentString1493 });   
        //markers  
        var marker1493 = new google.maps.Marker({ position: point1493, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1493.UN MILAGRO EN EL CIPRÉS." }); 
        //information for  
        function goToLink1493() { infowindow1493.open(map,marker1493);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1493, 'click', goToLink1493); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1494  
        //positions 
        var point1494 = new google.maps.LatLng(13.408343, -88.145526); var contentString1494 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UNA LUCHA EN A.A.</h1>'+ '<div id="bodyContent">'+ '<p><b>UNA LUCHA EN A.A.</b> , — 08 de  Enero  de  2004.  Dirección:  Cantón El progreso, Caserío N° 1. Días y horas  de  reuniones: De Lunes  a Domingo de 6:00 a 8:00 p.m.  Miembros asistentes: 10 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1494 = new google.maps.InfoWindow({ content: contentString1494 });   
        //markers  
        var marker1494 = new google.maps.Marker({ position: point1494, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1494.UNA LUCHA EN A.A." }); 
        //information for  
        function goToLink1494() { infowindow1494.open(map,marker1494);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1494, 'click', goToLink1494); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1495  
        //positions 
        var point1495 = new google.maps.LatLng(13.480124, -88.181988); var contentString1495 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UNA LUZ EN EL CALVARIO.</h1>'+ '<div id="bodyContent">'+ '<p><b>UNA LUZ EN EL CALVARIO.</b> , —  23 de Julio de 2013. Dirección:  Barrio El Calvario. Días y horas  de reuniones: De Lunes a Domingo de 7:00 a 9:00 p.m.  Miembros asistentes: 11 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1495 = new google.maps.InfoWindow({ content: contentString1495 });   
        //markers  
        var marker1495 = new google.maps.Marker({ position: point1495, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1495.UNA LUZ EN EL CALVARIO." }); 
        //information for  
        function goToLink1495() { infowindow1495.open(map,marker1495);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1495, 'click', goToLink1495); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1496  
        //positions 
        var point1496 = new google.maps.LatLng(13.475843, -88.203925); var contentString1496 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UNA LUZ EN EL CRISOL.</h1>'+ '<div id="bodyContent">'+ '<p><b>UNA LUZ EN EL CRISOL.</b> , — 18 de  Enero  de  2007.  Dirección:  Ca- lle Chaparrastique, Pasaje  Los Carrillos. Días y horas  de  reuniones: De Lunes a Domingo de  5:00 a 7:00 p.m.  Miembros asistentes: 12 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1496 = new google.maps.InfoWindow({ content: contentString1496 });   
        //markers  
        var marker1496 = new google.maps.Marker({ position: point1496, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1496.UNA LUZ EN EL CRISOL." }); 
        //information for  
        function goToLink1496() { infowindow1496.open(map,marker1496);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1496, 'click', goToLink1496); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1497  
        //positions 
        var point1497 = new google.maps.LatLng(13.432465, -88.116828); var contentString1497 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UNA LUZ EN EL MANGUITO.</h1>'+ '<div id="bodyContent">'+ '<p><b>UNA LUZ EN EL MANGUITO.</b> , — 07 de  Junio  de  1980.  Dirección: Cantón El Habillal, Caserío El Manguito, Carretera al Cuco.  Días y horas de reuniones: De Lunes a Domingo de 5:00 a 7:00 p.m. Miem- bros  asistentes: 19 Hombres y 1 Mujer.</p>'+ '</div>'+ '</div>'; var infowindow1497 = new google.maps.InfoWindow({ content: contentString1497 });   
        //markers  
        var marker1497 = new google.maps.Marker({ position: point1497, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1497.UNA LUZ EN EL MANGUITO." }); 
        //information for  
        function goToLink1497() { infowindow1497.open(map,marker1497);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1497, 'click', goToLink1497); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1498  
        //positions 
        var point1498 = new google.maps.LatLng(13.427755, -88.095029); var contentString1498 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UNA LUZ EN MI VALLE.</h1>'+ '<div id="bodyContent">'+ '<p><b>UNA LUZ EN MI VALLE.</b> , — 14 de Abril de 2000.  Dirección:  Cantón El Papalón, Caserío Las Peñitas. Días y horas de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.  Miembros asistentes: 14 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1498 = new google.maps.InfoWindow({ content: contentString1498 });   
        //markers  
        var marker1498 = new google.maps.Marker({ position: point1498, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1498.UNA LUZ EN MI VALLE." }); 
        //information for  
        function goToLink1498() { infowindow1498.open(map,marker1498);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1498, 'click', goToLink1498); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1499  
        //positions 
        var point1499 = new google.maps.LatLng(13.471378, -88.132157); var contentString1499 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UNA LUZ EN ZUNIGA.</h1>'+ '<div id="bodyContent">'+ '<p><b>UNA LUZ EN ZUNIGA.</b> , — 28 de  Abril de  2012.  Dirección:  Cantón Santa  Inés, Caserío Zúniga.  Días y horas  de  reuniones: De Lunes a Domingo de  5:00  a 7:00  p.m.  Miembros asistentes: 10 Hombres y 2 Mujeres.</p>'+ '</div>'+ '</div>'; var infowindow1499 = new google.maps.InfoWindow({ content: contentString1499 });   
        //markers  
        var marker1499 = new google.maps.Marker({ position: point1499, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1499.UNA LUZ EN ZUNIGA." }); 
        //information for  
        function goToLink1499() { infowindow1499.open(map,marker1499);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1499, 'click', goToLink1499); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1500  
        //positions 
        var point1500 = new google.maps.LatLng(13.493670, -88.183702); var contentString1500 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UNA SOLUCIÓN EN A.A.</h1>'+ '<div id="bodyContent">'+ '<p><b>UNA SOLUCIÓN EN A.A.</b> , — 19 de  Enero  de  1991.  Dirección:  Co- lonia 4 de Octubre, Pasaje  Las Flores Nº 21. Días y horas  de reunio- nes: De Lunes a Domingo de 6:00 a 8:00 p.m. Miembros asistentes: 12 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1500 = new google.maps.InfoWindow({ content: contentString1500 });   
        //markers  
        var marker1500 = new google.maps.Marker({ position: point1500, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1500.UNA SOLUCIÓN EN A.A." }); 
        //information for  
        function goToLink1500() { infowindow1500.open(map,marker1500);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1500, 'click', goToLink1500); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1501  
        //positions 
        var point1501 = new google.maps.LatLng(13.484680, -88.159984); var contentString1501 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UNIDOS CON DECISIÓN.</h1>'+ '<div id="bodyContent">'+ '<p><b>UNIDOS CON DECISIÓN.</b> , — 27 de  Junio  de  1982.  Dirección:  Col Las Unidas,  final 6ª Calle Oriente Calle Panamá N° 8. Días y horas de  reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m.  Miembros asistentes: 10 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1501 = new google.maps.InfoWindow({ content: contentString1501 });   
        //markers  
        var marker1501 = new google.maps.Marker({ position: point1501, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1501.UNIDOS CON DECISIÓN." }); 
        //information for  
        function goToLink1501() { infowindow1501.open(map,marker1501);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1501, 'click', goToLink1501); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1502  
        //positions 
        var point1502 = new google.maps.LatLng(13.467735, -88.168244); var contentString1502 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UNIDOS DE CORAZÓN.</h1>'+ '<div id="bodyContent">'+ '<p><b>UNIDOS DE CORAZÓN.</b> , — 07 de Octubre de 2000.  Dirección:  Ca- lle Principal, 1 Cuadra antes del Cementerio El Rebalse. Días y horas de  reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m.  Miembros asistentes: 10 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1502 = new google.maps.InfoWindow({ content: contentString1502 });   
        //markers  
        var marker1502 = new google.maps.Marker({ position: point1502, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1502.UNIDOS DE CORAZÓN." }); 
        //information for  
        function goToLink1502() { infowindow1502.open(map,marker1502);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1502, 'click', goToLink1502); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1503  
        //positions 
        var point1503 = new google.maps.LatLng(13.483912, -88.187025); var contentString1503 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">VIDA Y FORTALEZA.</h1>'+ '<div id="bodyContent">'+ '<p><b>VIDA Y FORTALEZA.</b> , — 27 de  Enero  de  1977.  Dirección:  Avenida Los Almendros, Colonia  Kury. Días y horas  de  reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.  Miembros asistentes: 8 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1503 = new google.maps.InfoWindow({ content: contentString1503 });   
        //markers  
        var marker1503 = new google.maps.Marker({ position: point1503, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1503.VIDA Y FORTALEZA." }); 
        //information for  
        function goToLink1503() { infowindow1503.open(map,marker1503);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1503, 'click', goToLink1503); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1504  
        //positions 
        var point1504 = new google.maps.LatLng(13.474955, -88.174828); var contentString1504 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">VIDA, PAZ Y LIBERTAD (INSTITUCIONAL).</h1>'+ '<div id="bodyContent">'+ '<p><b>VIDA, PAZ Y LIBERTAD (INSTITUCIONAL).</b> , —  09  de  Noviembre de  1982.  Dirección:  Centro Penal  de  San Miguel.  Días y horas  de reuniones: Sábado de  2:00  a  4:00  p.m.  Miembros asistentes: 50 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1504 = new google.maps.InfoWindow({ content: contentString1504 });   
        //markers  
        var marker1504 = new google.maps.Marker({ position: point1504, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1504.VIDA, PAZ Y LIBERTAD (INSTITUCIONAL)." }); 
        //information for  
        function goToLink1504() { infowindow1504.open(map,marker1504);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1504, 'click', goToLink1504); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1505  
        //positions 
        var point1505 = new google.maps.LatLng(13.474864, -88.211596); var contentString1505 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">YO QUIERO DEJAR DE BEBER.</h1>'+ '<div id="bodyContent">'+ '<p><b>YO QUIERO DEJAR DE BEBER.</b> , — 23 de Abril de 1989.  Dirección: Cantón El Amate,  Calle Chaparrastique. Días y horas  de  reuniones: De Lunes a Domingo de  4:00 a 6:00 p.m.  Miembros asistentes: 12 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1505 = new google.maps.InfoWindow({ content: contentString1505 });   
        //markers  
        var marker1505 = new google.maps.Marker({ position: point1505, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1505.YO QUIERO DEJAR DE BEBER." }); 
        //information for  
        function goToLink1505() { infowindow1505.open(map,marker1505);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1505, 'click', goToLink1505); google.maps.event.addDomListener(window, 'load', initialize);

        //MARCADOR 1506  
        //positions 
        var point1506 = new google.maps.LatLng(13.378143, -88.356099); var contentString1506 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">11 DE ENERO.</h1>'+ '<div id="bodyContent">'+ '<p><b>11 DE ENERO.</b> , — 11 de  Enero  de  1989.  Dirección:  Caserío Los Le- mus,  Barrio El Calvario.  Días y horas  de  reuniones: De Lunes a Do- mingo  de  4:00  a 6:00  p.m.  Miembros asistentes: 12 Hombres y 1 Mujer</p>'+ '</div>'+ '</div>'; var infowindow1506 = new google.maps.InfoWindow({ content: contentString1506 });   
        //markers  
        var marker1506 = new google.maps.Marker({ position: point1506, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1506.11 DE ENERO." }); 
        //information for  
        function goToLink1506() { infowindow1506.open(map,marker1506);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1506, 'click', goToLink1506); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1507  
        //positions 
        var point1507 = new google.maps.LatLng(13.381483, -88.352323); var contentString1507 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">25 DE MARZO.</h1>'+ '<div id="bodyContent">'+ '<p><b>25 DE MARZO.</b> , — 25 de Marzo de 1967. Dirección:  Barrio San Juan entre 3ª y 5ª Calle Oriente. Días y horas  de  reuniones: De Lunes a Domingo de 5:00 a 7:00 p.m.  Miembros asistentes: 18 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1507 = new google.maps.InfoWindow({ content: contentString1507 });   
        //markers  
        var marker1507 = new google.maps.Marker({ position: point1507, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1507.25 DE MARZO." }); 
        //information for  
        function goToLink1507() { infowindow1507.open(map,marker1507);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1507, 'click', goToLink1507); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1508  
        //positions 
        var point1508 = new google.maps.LatLng(13.384155, -88.351379); var contentString1508 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">ALEGRÍA DE VIVIR.</h1>'+ '<div id="bodyContent">'+ '<p><b>ALEGRÍA DE VIVIR.</b> , — 20 de  Junio  de  1999.  Dirección:  1ª Avenida Norte, 1 Cuadra al Norte  del  parque. Días y horas  de  reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m.  Miembros asistentes: 20 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1508 = new google.maps.InfoWindow({ content: contentString1508 });   
        //markers  
        var marker1508 = new google.maps.Marker({ position: point1508, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1508.ALEGRÍA DE VIVIR." }); 
        //information for  
        function goToLink1508() { infowindow1508.open(map,marker1508);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1508, 'click', goToLink1508); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1509  
        //positions 
        var point1509 = new google.maps.LatLng(13.387746, -88.351164); var contentString1509 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">AMANECER TRANQUILOS.</h1>'+ '<div id="bodyContent">'+ '<p><b>AMANECER TRANQUILOS.</b> , — 08 de  Agosto de  1978.  Dirección: Cantón Santa  Clara,  Caserío El Mango. Días y horas  de  reuniones: De Lunes a Domingo de  4:00 a 6:00 p.m.  Miembros asistentes: 12 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1509 = new google.maps.InfoWindow({ content: contentString1509 });   
        //markers  
        var marker1509 = new google.maps.Marker({ position: point1509, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1509.AMANECER TRANQUILOS." }); 
        //information for  
        function goToLink1509() { infowindow1509.open(map,marker1509);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1509, 'click', goToLink1509); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1510  
        //positions 
        var point1510 = new google.maps.LatLng(13.374090, -88.344684); var contentString1510 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">LAS DOS  VIDAS.</h1>'+ '<div id="bodyContent">'+ '<p><b>LAS DOS  VIDAS.</b> , — 18  de  Mayo  de  2011.  Dirección:  Caserío La Piedrona, Cantón Piedra  Azul. Días y horas  de  reuniones: De Lunes a Domingo de 4:00 a 6:00 p.m.  Miembros asistentes: 14 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1510 = new google.maps.InfoWindow({ content: contentString1510 });   
        //markers  
        var marker1510 = new google.maps.Marker({ position: point1510, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1510.LAS DOS  VIDAS." }); 
        //information for  
        function goToLink1510() { infowindow1510.open(map,marker1510);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1510, 'click', goToLink1510); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1511  
        //positions 
        var point1511 = new google.maps.LatLng(13.399009, -88.347448); var contentString1511 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">LUZ EN MI CAMINO.</h1>'+ '<div id="bodyContent">'+ '<p><b>LUZ EN MI CAMINO.</b> , — 12 de  Mayo de  1979.  Dirección:  Cantón Rodeo de  Pedrón, Desvío  San  José. Días  y horas  de  reuniones: De Lunes a Domingo de  4:00 a 6:00 p.m.  Miembros asistentes: 12 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1511 = new google.maps.InfoWindow({ content: contentString1511 });   
        //markers  
        var marker1511 = new google.maps.Marker({ position: point1511, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1511.LUZ EN MI CAMINO." }); 
        //information for  
        function goToLink1511() { infowindow1511.open(map,marker1511);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1511, 'click', goToLink1511); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1512  
        //positions 
        var point1512 = new google.maps.LatLng(13.394758, -88.338891); var contentString1512 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NUEVO  DESPERTAR.</h1>'+ '<div id="bodyContent">'+ '<p><b>NUEVO  DESPERTAR.</b> , — 21 de  Junio  de  2007.  Dirección:  Cantón Santa  Clara.  Días  y horas  de  reuniones: De  Lunes  a Domingo de 4:00 a 6:00 p.m.  Miembros asistentes: 10 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1512 = new google.maps.InfoWindow({ content: contentString1512 });   
        //markers  
        var marker1512 = new google.maps.Marker({ position: point1512, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1512.NUEVO  DESPERTAR." }); 
        //information for  
        function goToLink1512() { infowindow1512.open(map,marker1512);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1512, 'click', goToLink1512); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1513  
        //positions 
        var point1513 = new google.maps.LatLng(13.383827, -88.326872); var contentString1513 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">RESURGIENDO.</h1>'+ '<div id="bodyContent">'+ '<p><b>RESURGIENDO.</b> , — 20 de  Mayo de  1967.  Dirección:  Barrio La Mer- ced.  Días y horas  de reuniones: De Lunes a Domingo de 4:00 a 6:00 p.m.  Miembros asistentes: 35 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1513 = new google.maps.InfoWindow({ content: contentString1513 });   
        //markers  
        var marker1513 = new google.maps.Marker({ position: point1513, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1513.RESURGIENDO." }); 
        //information for  
        function goToLink1513() { infowindow1513.open(map,marker1513);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1513, 'click', goToLink1513); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1514  
        //positions 
        var point1514 = new google.maps.LatLng(13.375560, -88.349753); var contentString1514 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">SAN RAFAEL.</h1>'+ '<div id="bodyContent">'+ '<p><b>SAN RAFAEL.</b> , — 07 de  Junio  de  1983.  Dirección:  3ª Calle Oriente, Barrio San Juan,  frente  al Parque Central. Días y horas  de reuniones: De Lunes a Domingo de  6:00 a 7:30 p.m.  Miembros asistentes: 22 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1514 = new google.maps.InfoWindow({ content: contentString1514 });   
        //markers  
        var marker1514 = new google.maps.Marker({ position: point1514, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1514.SAN RAFAEL." }); 
        //information for  
        function goToLink1514() { infowindow1514.open(map,marker1514);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1514, 'click', goToLink1514); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1515  
        //positions 
        var point1515 = new google.maps.LatLng(13.376056, -88.363675); var contentString1515 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UNIDOS CAMBIAREMOS.</h1>'+ '<div id="bodyContent">'+ '<p><b>UNIDOS CAMBIAREMOS.</b> , — 21 de Enero de 1997. Dirección: Cantón Santa Clara. Días y horas  de reuniones: De Lunes a Domingo de 3:30 a 5:30 p.m.  Miembros asistentes: 6 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1515 = new google.maps.InfoWindow({ content: contentString1515 });   
        //markers  
        var marker1515 = new google.maps.Marker({ position: point1515, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1515.UNIDOS CAMBIAREMOS." }); 
        //information for  
        function goToLink1515() { infowindow1515.open(map,marker1515);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1515, 'click', goToLink1515); google.maps.event.addDomListener(window, 'load', initialize);

        //MARCADOR 1516  
        //positions 
        var point1516 = new google.maps.LatLng(13.716508, -88.361031); var contentString1516 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">AMANECER  FELICES.</h1>'+ '<div id="bodyContent">'+ '<p><b>AMANECER  FELICES.</b> , — 05  de   Diciembre  de   2002.   Dirección: Cantón Charlacha, Caserío El Jícaro.  Días y horas  de  reuniones: De Lunes a Domingo de 4:00 a 6:00 p.m. Miembros asistentes: 6 Hom- bres.</p>'+ '</div>'+ '</div>'; var infowindow1516 = new google.maps.InfoWindow({ content: contentString1516 });   
        //markers  
        var marker1516 = new google.maps.Marker({ position: point1516, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1516.AMANECER  FELICES." }); 
        //information for  
        function goToLink1516() { infowindow1516.open(map,marker1516);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1516, 'click', goToLink1516); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1517  
        //positions 
        var point1517 = new google.maps.LatLng(13.719656, -88.359228); var contentString1517 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">DESPERTAR DE NUEVO.</h1>'+ '<div id="bodyContent">'+ '<p><b>DESPERTAR DE NUEVO.</b> , — 01 de  Octubre de  1983.  Dirección:  4a Avenida  Norte, Nº 1. Días y horas  de reuniones: De Lunes a Domin- go de 6:00 a 8:00 p.m.  Miembros asistentes: 25 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1517 = new google.maps.InfoWindow({ content: contentString1517 });   
        //markers  
        var marker1517 = new google.maps.Marker({ position: point1517, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1517.DESPERTAR DE NUEVO." }); 
        //information for  
        function goToLink1517() { infowindow1517.open(map,marker1517);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1517, 'click', goToLink1517); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1518  
        //positions 
        var point1518 = new google.maps.LatLng(13.721803, -88.360645); var contentString1518 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">FORTALEZA Y ESPERANZA.</h1>'+ '<div id="bodyContent">'+ '<p><b>FORTALEZA Y ESPERANZA.</b> , — 12 de Febrero de 2008.  Dirección: Cantón Minitas, Caserío Santa Cruz a 50 metros del Río. Días y horas de  reuniones: De Lunes a Domingo de  4:00 a 6:00 p.m.  Miembros asistentes: 6 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1518 = new google.maps.InfoWindow({ content: contentString1518 });   
        //markers  
        var marker1518 = new google.maps.Marker({ position: point1518, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1518.FORTALEZA Y ESPERANZA." }); 
        //information for  
        function goToLink1518() { infowindow1518.open(map,marker1518);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1518, 'click', goToLink1518); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1519  
        //positions 
        var point1519 = new google.maps.LatLng(13.719773, -88.360900); var contentString1519 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NUEVA  ESPERANZA EN  MI CAMINO.</h1>'+ '<div id="bodyContent">'+ '<p><b>NUEVA  ESPERANZA EN  MI CAMINO.</b> , — 24  de  Noviembre de 2003.  Dirección:  Cantón Santa  Rosa, 175 metros al Oriente de Iglesia Católica. Días y horas  de  reuniones: De  Lunes  a Domingo de 4:00 a 6:00 p.m.  Miembros asistentes: 14 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1519 = new google.maps.InfoWindow({ content: contentString1519 });   
        //markers  
        var marker1519 = new google.maps.Marker({ position: point1519, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1519.NUEVA  ESPERANZA EN  MI CAMINO." }); 
        //information for  
        function goToLink1519() { infowindow1519.open(map,marker1519);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1519, 'click', goToLink1519); google.maps.event.addDomListener(window, 'load', initialize);

        //MARCADOR 1520  
        //positions 
        var point1520 = new google.maps.LatLng(13.502207, -88.071349); var contentString1520 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">CONCEPCIÓN  05  DE ABRIL.</h1>'+ '<div id="bodyContent">'+ '<p><b>CONCEPCIÓN  05  DE ABRIL.</b> , — 05  de  Abril de  1982.  Dirección: Barrio Concepción Centro. Días y horas  de  reuniones: De Lunes  a Domingo de 6:00 a 8:00 p.m.  Miembros asistentes: 8 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1520 = new google.maps.InfoWindow({ content: contentString1520 });   
        //markers  
        var marker1520 = new google.maps.Marker({ position: point1520, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1520.CONCEPCIÓN  05  DE ABRIL." }); 
        //information for  
        function goToLink1520() { infowindow1520.open(map,marker1520);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1520, 'click', goToLink1520); google.maps.event.addDomListener(window, 'load', initialize);







  


}



