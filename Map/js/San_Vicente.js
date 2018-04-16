

function initialize() {


    //Map parametrs
    var mapOptions = {
        zoom: 10,
        center: new google.maps.LatLng(13.5190681,-88.690374),
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

        

        //MARCADOR 1158  
        //positions 
        var point1158 = new google.maps.LatLng(13.671040, -88.777404); var contentString1158 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">CAMINO DE ESPERANZA</h1>'+ '<div id="bodyContent">'+ '<p><b></b> , — 27 de Diciembre de 1962. Dirección: 4ª  Avenida  Norte  Barrio Los Ángeles. Días  y horas  de  reuniones: De Lunes a Domingo de  5:00 a 7:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow1158 = new google.maps.InfoWindow({ content: contentString1158 });   
        //markers  
        var marker1158 = new google.maps.Marker({ position: point1158, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1158.CAMINO DE ESPERANZA" }); 
        //information for 
        function goToLink1158() { infowindow1158.open(map,marker1158);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1158, 'click', goToLink1158); google.maps.event.addDomListener(window, 'load', initialize);

        
        //MARCADOR 1159  
        //positions 
        var point1159 = new google.maps.LatLng(13.672029, -88.773063); var contentString1159 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UNA  LUZ EN  EL CAMINO.</h1>'+ '<div id="bodyContent">'+ '<p><b></b> ,  — . Dirección:  San  Juan  De  Merino Apastepeque. Días y horas  de  reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.</p>'+ '</div>'+ '</div>'; var infowindow1159 = new google.maps.InfoWindow({ content: contentString1159 });   
        //markers  
        var marker1159 = new google.maps.Marker({ position: point1159, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1159.UNA  LUZ EN  EL CAMINO." }); 
        //information for  
        function goToLink1159() { infowindow1159.open(map,marker1159);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1159, 'click', goToLink1159); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1160  
        //positions 
        var point1160 = new google.maps.LatLng(13.668488, -88.774384); var contentString1160 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UNA  LUZ EN  EL DESVÍO.</h1>'+ '<div id="bodyContent">'+ '<p><b></b> ,  —  12  de  Mayo  de  1996.   Dirección: Colonia  Divina Providencia No  1, Desvío  de  Apastepeque Cantón Las Minas. Días y horas  de reuniones: De Lunes a Domingo de 5:00 a 7:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow1160 = new google.maps.InfoWindow({ content: contentString1160 });   
        //markers  
        var marker1160 = new google.maps.Marker({ position: point1160, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1160.UNA  LUZ EN  EL DESVÍO." }); 
        //information for  
        function goToLink1160() { infowindow1160.open(map,marker1160);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1160, 'click', goToLink1160); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1161  
        //positions 
        var point1161 = new google.maps.LatLng(13.668331, -88.782324); var contentString1161 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UNA LUZ EN LA LOMA.</h1>'+ '<div id="bodyContent">'+ '<p><b></b> , — 18 de  Septiembre de  2011.  Dirección: Calle  Principal  Caserío La Loma  Cantón Calderas Apastepeque. Días y horas  de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow1161 = new google.maps.InfoWindow({ content: contentString1161 });   
        //markers  
        var marker1161 = new google.maps.Marker({ position: point1161, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1161.UNA LUZ EN LA LOMA." }); 
        //information for  
        function goToLink1161() { infowindow1161.open(map,marker1161);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1161, 'click', goToLink1161); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1162  
        //positions 
        var point1162 = new google.maps.LatLng(13.667237, -88.778740); var contentString1162 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">VERDAD HACIA LA PAZ.</h1>'+ '<div id="bodyContent">'+ '<p><b></b> , — 13 de  Noviembre de  1973.  Dirección: 2ª Calle Oriente 12 Barrio San Francisco.  Días y horas  de reuniones: De Lunes a Domingo de  4:30 a 6:30 p.m.</p>'+ '</div>'+ '</div>'; var infowindow1162 = new google.maps.InfoWindow({ content: contentString1162 });   
        //markers  
        var marker1162 = new google.maps.Marker({ position: point1162, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1162.VERDAD HACIA LA PAZ." }); 
        //information for  
        function goToLink1162() { infowindow1162.open(map,marker1162);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1162, 'click', goToLink1162); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1163  
        //positions 
        var point1163 = new google.maps.LatLng(13.668164, -88.778258); var contentString1163 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">VOLVER A NACER.</h1>'+ '<div id="bodyContent">'+ '<p><b></b> ,  — 05  de  Marzo  de  1983.  Dirección:  1ª  Calle Oriente 14-79  Barrio San Francisco  Casa  de  esquina. Días y horas de  reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow1163 = new google.maps.InfoWindow({ content: contentString1163 });   
        //markers  
        var marker1163 = new google.maps.Marker({ position: point1163, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1163.VOLVER A NACER." }); 
        //information for  
        function goToLink1163() { infowindow1163.open(map,marker1163);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1163, 'click', goToLink1163); google.maps.event.addDomListener(window, 'load', initialize);

        //MARCADOR 1164  
        //positions 
        var point1164 = new google.maps.LatLng(13.621055, -88.879968); var contentString1164 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">15  DE OCTUBRE.</h1>'+ '<div id="bodyContent">'+ '<p><b></b> ,  — 15  de  Octubre de  1978.  Dirección:  Cantón San Emigdio  Municipio  de  Guadalupe. Días y horas  de  reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m.</p>'+ '</div>'+ '</div>'; var infowindow1164 = new google.maps.InfoWindow({ content: contentString1164 });   
        //markers  
        var marker1164 = new google.maps.Marker({ position: point1164, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1164.15  DE OCTUBRE." }); 
        //information for  
        function goToLink1164() { infowindow1164.open(map,marker1164);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1164, 'click', goToLink1164); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1165  
        //positions 
        var point1165 = new google.maps.LatLng(13.618072, -88.880989); var contentString1165 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">DE LAS TINIEBLAS A LA LUZ.</h1>'+ '<div id="bodyContent">'+ '<p><b></b> , — Diciembre de  2012.  Dirección: Calle Principal 50 metros al Sur de La Iglesia Católica  San Francisco Agua  Agría.  Días  y horas  de  reuniones: De  Lunes  a Domingo de 5:00 a 7:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow1165 = new google.maps.InfoWindow({ content: contentString1165 });   
        //markers  
        var marker1165 = new google.maps.Marker({ position: point1165, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1165.DE LAS TINIEBLAS A LA LUZ." }); 
        //information for  
        function goToLink1165() { infowindow1165.open(map,marker1165);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1165, 'click', goToLink1165); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1166  
        //positions 
        var point1166 = new google.maps.LatLng(13.621484, -88.879040); var contentString1166 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">DIOS CON NOSOTROS.</h1>'+ '<div id="bodyContent">'+ '<p><b></b> , — 18 de  Noviembre de  1978.  Dirección: 13ª  Calle,  El Calvario,  Guadalupe. Días  y horas  de  reuniones: De Lunes  a  Domingo de  7:00  a  9:00  p.m.</p>'+ '</div>'+ '</div>'; var infowindow1166 = new google.maps.InfoWindow({ content: contentString1166 });   
        //markers  
        var marker1166 = new google.maps.Marker({ position: point1166, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1166.DIOS CON NOSOTROS." }); 
        //information for  
        function goToLink1166() { infowindow1166.open(map,marker1166);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1166, 'click', goToLink1166); google.maps.event.addDomListener(window, 'load', initialize);

        //MARCADOR 1167  
        //positions 
        var point1167 = new google.maps.LatLng(13.654491, -88.813925); var contentString1167 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">DESPERTAR 05   DE  JULIO.</h1>'+ '<div id="bodyContent">'+ '<p><b></b> , — 05  de   Julio  de   1994.   Dirección: Cantón  San  José Cerro   Grande  San  Cayetano  Istepeque.  Días y horas  de  reuniones: De  Lunes  a  Domingo de  5:00  a  7:00  p.m.</p>'+ '</div>'+ '</div>'; var infowindow1167 = new google.maps.InfoWindow({ content: contentString1167 });   
        //markers  
        var marker1167 = new google.maps.Marker({ position: point1167, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1167.DESPERTAR 05   DE  JULIO." }); 
        //information for  
        function goToLink1167() { infowindow1167.open(map,marker1167);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1167, 'click', goToLink1167); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1168  
        //positions 
        var point1168 = new google.maps.LatLng(13.648068, -88.809269); var contentString1168 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NUEVO  AMANECER.</h1>'+ '<div id="bodyContent">'+ '<p><b></b> , — 16  de  Abril de  1977.  Dirección:  Colonia La Entrevista  San Cayetano Istepeque. Días y horas  de  reuniones: De Lunes a Domingo de  4:00 a 6:00 p.m.</p>'+ '</div>'+ '</div>'; var infowindow1168 = new google.maps.InfoWindow({ content: contentString1168 });  
         //markers  
        var marker1168 = new google.maps.Marker({ position: point1168, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1168.NUEVO  AMANECER." }); 
        //information for  
        function goToLink1168() { infowindow1168.open(map,marker1168);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1168, 'click', goToLink1168); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1169  
        //positions 
        var point1169 = new google.maps.LatLng(13.650508, -88.808775); var contentString1169 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UNA  LUZ EN  EL CAMINO.</h1>'+ '<div id="bodyContent">'+ '<p><b></b> , —  17  de  Junio  de  2002.  Dirección: Entrada a San Cayetano, al costado izquierdo Calle Principal  Nº 1. Días y horas  de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow1169 = new google.maps.InfoWindow({ content: contentString1169 });   
        //markers  
        var marker1169 = new google.maps.Marker({ position: point1169, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1169.UNA  LUZ EN  EL CAMINO." }); 
        //information for  
        function goToLink1169() { infowindow1169.open(map,marker1169);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1169, 'click', goToLink1169); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1170  
        //positions 
        var point1170 = new google.maps.LatLng(13.684469, -88.787517); var contentString1170 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NUEVA  VIDA</h1>'+ '<div id="bodyContent">'+ '<p><b></b> , — 25  de  Abril  de  2005.   Dirección:   Calle  Central Domingo Santas  Cerro Delicias. Días y horas de reuniones: De Lunes a Domingo de 5:30 a 7:30 p.m.</p>'+ '</div>'+ '</div>'; var infowindow1170 = new google.maps.InfoWindow({ content: contentString1170 });   
        //markers  
        var marker1170 = new google.maps.Marker({ position: point1170, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1170.NUEVA  VIDA" }); 
        //information for  
        function goToLink1170() { infowindow1170.open(map,marker1170);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1170, 'click', goToLink1170); google.maps.event.addDomListener(window, 'load', initialize);

        //MARCADOR 1171  
        //positions 
        var point1171 = new google.maps.LatLng(13.705664, -88.559420); var contentString1171 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">LUZ DE VIDA.</h1>'+ '<div id="bodyContent">'+ '<p><b></b> , 06 de Mayo de 1974. Dirección: 1 Cuadra al Norte del parque Central  Barrio Cadelaria. Días y horas  de  reuniones: De Lunes  a  Domingo de  5:00  a  7:00  p.m.</p>'+ '</div>'+ '</div>'; var infowindow1171 = new google.maps.InfoWindow({ content: contentString1171 });   
        //markers  
        var marker1171 = new google.maps.Marker({ position: point1171, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1171.LUZ DE VIDA." }); 
        //information for  
        function goToLink1171() { infowindow1171.open(map,marker1171);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1171, 'click', goToLink1171); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1172  
        //positions 
        var point1172 = new google.maps.LatLng(13.702324, -88.801552); var contentString1172 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">DIVINA PROVIDENCIA.</h1>'+ '<div id="bodyContent">'+ '<p><b></b> , — 27 de Junio de 2007. Dirección: Caserío Las Puertas, Santa  Lucía, Municipio  San  Lorenzo.  Días y horas  de reuniones: De  Lunes  a  Domingo de  5:00  a  7:00  p.m.</p>'+ '</div>'+ '</div>'; var infowindow1172 = new google.maps.InfoWindow({ content: contentString1172 });   
        //markers  
        var marker1172 = new google.maps.Marker({ position: point1172, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1172.DIVINA PROVIDENCIA." }); 
        //information for  
        function goToLink1172() { infowindow1172.open(map,marker1172);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1172, 'click', goToLink1172); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1173  
        //positions 
        var point1173 = new google.maps.LatLng(13.701438, -88.804693); var contentString1173 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">FUENTE DE AGUA VIVA.</h1>'+ '<div id="bodyContent">'+ '<p><b></b> , — 15  de  Octubre de  2001.  Dirección: Cantón Santa  Lucía,  2  Cuadras abajo del  Centro Escolar  por  El Conacaste. Días y horas  de reuniones: De Lunes a Domingo de 5:00 a 7:00 p.m.</p>'+ '</div>'+ '</div>'; var infowindow1173 = new google.maps.InfoWindow({ content: contentString1173 });   
        //markers  
        var marker1173 = new google.maps.Marker({ position: point1173, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1173.FUENTE DE AGUA VIVA." }); 
        //information for  
        function goToLink1173() { infowindow1173.open(map,marker1173);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1173, 'click', goToLink1173); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1174  
        //positions 
        var point1174 = new google.maps.LatLng(13.709008, -88.803939); var contentString1174 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">LOS CUBÍAS.</h1>'+ '<div id="bodyContent">'+ '<p><b></b> , — 12 de  Noviembre de  1998.  Dirección:  Cantón La Cruz, Caserío Los Cubías  San Lorenzo.  Días y horas  de  reuniones: De  Lunes  a Domingo de  5:00  a 7:00  p.m.</p>'+ '</div>'+ '</div>'; var infowindow1174 = new google.maps.InfoWindow({ content: contentString1174 });   
        //markers  
        var marker1174 = new google.maps.Marker({ position: point1174, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1174.LOS CUBÍAS." }); 
        //information for  
        function goToLink1174() { infowindow1174.open(map,marker1174);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1174, 'click', goToLink1174); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1175  
        //positions 
        var point1175 = new google.maps.LatLng(13.704141, -88.805795); var contentString1175 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NUEVA FELICIDAD.</h1>'+ '<div id="bodyContent">'+ '<p><b></b> , — 12 de  febrero de  1984.  Dirección:  2ª Calle Poniente Barrio San Antonio, San Lorenzo. Días y horas de reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m.</p>'+ '</div>'+ '</div>'; var infowindow1175 = new google.maps.InfoWindow({ content: contentString1175 });   
        //markers  
        var marker1175 = new google.maps.Marker({ position: point1175, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1175.NUEVA FELICIDAD." }); 
        //information for  
        function goToLink1175() { infowindow1175.open(map,marker1175);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1175, 'click', goToLink1175); google.maps.event.addDomListener(window, 'load', initialize);

        //MARCADOR 1176  
        //positions 
        var point1176 = new google.maps.LatLng(13.721657, -88.825772); var contentString1176 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">14 DE JUNIO.</h1>'+ '<div id="bodyContent">'+ '<p><b></b> , — 14 de Junio  de 1998.  Dirección:  Cantón Las Rosas San Sebastián. Días y horas  de  reuniones: De Lunes a Domingo de 5:00 a 7:00 p.m.</p>'+ '</div>'+ '</div>'; var infowindow1176 = new google.maps.InfoWindow({ content: contentString1176 });   
        //markers  
        var marker1176 = new google.maps.Marker({ position: point1176, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1176.14 DE JUNIO." }); 
        //information for  
        function goToLink1176() { infowindow1176.open(map,marker1176);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1176, 'click', goToLink1176); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1177  
        //positions 
        var point1177 = new google.maps.LatLng(13.723311, -88.825840); var contentString1177 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">15  DE FEBRERO.</h1>'+ '<div id="bodyContent">'+ '<p><b></b> , — 15 de  Febrero de  1985.  Dirección:  Desvío  El Nance, Cantón Aguacayo, San Sebastián . Días y horas de reuniones: De  Lunes  a Sábado de  5:00  a 7:00  p.m.</p>'+ '</div>'+ '</div>'; var infowindow1177 = new google.maps.InfoWindow({ content: contentString1177 });   
        //markers  
        var marker1177 = new google.maps.Marker({ position: point1177, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1177.15  DE FEBRERO." }); 
        //information for  
        function goToLink1177() { infowindow1177.open(map,marker1177);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1177, 'click', goToLink1177); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1178 
         //positions 
        var point1178 = new google.maps.LatLng(13.722665, -88.817064); var contentString1178 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">BATANECO.</h1>'+ '<div id="bodyContent">'+ '<p><b></b> , — 09  de  Agosto de  1972.  Dirección:  3ª  Avenida  Sur Barrio San Antonio.  Días y horas  de reuniones: De Lunes a Domingo de 7:00 a 9:00 p.m.</p>'+ '</div>'+ '</div>'; var infowindow1178 = new google.maps.InfoWindow({ content: contentString1178 });   
        //markers  
        var marker1178 = new google.maps.Marker({ position: point1178, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1178.BATANECO." }); 
        //information for  
        function goToLink1178() { infowindow1178.open(map,marker1178);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1178, 'click', goToLink1178); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1179  
        //positions 
        var point1179 = new google.maps.LatLng(13.723895, -88.809404); var contentString1179 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">FUENTE DE FORTALEZA.</h1>'+ '<div id="bodyContent">'+ '<p><b></b> , — 25 de  Diciembre de  1965.  Dirección: Final  Calle   Francisco   Miranda   San  Sebastián.  Días  y  horas   de reuniones: De  Lunes  a  Domingo de  7:00  a  9:00  p.m.</p>'+ '</div>'+ '</div>'; var infowindow1179 = new google.maps.InfoWindow({ content: contentString1179 });   
        //markers  
        var marker1179 = new google.maps.Marker({ position: point1179, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1179.FUENTE DE FORTALEZA." }); 
        //information for  
        function goToLink1179() { infowindow1179.open(map,marker1179);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1179, 'click', goToLink1179); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1180  
        //positions 
        var point1180 = new google.maps.LatLng(13.720820, -88.813535); var contentString1180 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">GENTE RENACIDA EN A.A.</h1>'+ '<div id="bodyContent">'+ '<p><b></b> , — 15 de  Agosto de  1999.  Dirección: Cantón San José La Labor El Centro, a un costado de Casa Comunal. Días y horas  de  reuniones: De Lunes a Sábado de  5:00 a 7:00 p.m. y Domingo de  8:00 a 10:00  a.m.</p>'+ '</div>'+ '</div>'; var infowindow1180 = new google.maps.InfoWindow({ content: contentString1180 });   
        //markers  
        var marker1180 = new google.maps.Marker({ position: point1180, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1180.GENTE RENACIDA EN A.A." }); 
        //information for  
        function goToLink1180() { infowindow1180.open(map,marker1180);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1180, 'click', goToLink1180); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1181  
        //positions 
        var point1181 = new google.maps.LatLng(13.723634, -88.822246); var contentString1181 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">LA NUEVA  ESPERANZA.</h1>'+ '<div id="bodyContent">'+ '<p><b></b> , — 08  de  Octubre de  1995.  Dirección: Cantón La Esperanza una Cuadra antes de  La Cancha. Días y horas de  reuniones: De Lunes a Domingo de  5:00 a 7:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow1181 = new google.maps.InfoWindow({ content: contentString1181 });   
        //markers  
        var marker1181 = new google.maps.Marker({ position: point1181, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1181.LA NUEVA  ESPERANZA." }); 
        //information for 
         function goToLink1181() { infowindow1181.open(map,marker1181);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1181, 'click', goToLink1181); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1182  
        //positions 
        var point1182 = new google.maps.LatLng(13.727647, -88.811957); var contentString1182 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NUEVO HORIZONTE.</h1>'+ '<div id="bodyContent">'+ '<p><b></b> , — 26 de  Marzo de  1986.  Dirección:  Cantón El Porvenir  Aguacayo, Caserío Los  Domínguez. Días  y horas   de reuniones: De Lunes a Viernes de 6:00 a 8:00 p.m. y Sábado de 4:00 a 6:00 p.m.</p>'+ '</div>'+ '</div>'; var infowindow1182 = new google.maps.InfoWindow({ content: contentString1182 });   
        //markers  
        var marker1182 = new google.maps.Marker({ position: point1182, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1182.NUEVO HORIZONTE." }); 
        //information for  
        function goToLink1182() { infowindow1182.open(map,marker1182);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1182, 'click', goToLink1182); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1183  
        //positions 
        var point1183 = new google.maps.LatLng(13.721112, -88.810530); var contentString1183 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">PARAÍSO EN RECUPERACIÓN.</h1>'+ '<div id="bodyContent">'+ '<p><b></b> , — 03 de Junio  de 1999. Dirección: Cantón El Paraíso San Sebastián. Días y horas de reuniones: De Lunes a Domingo de 5:00 a 7:00 p.m.</p>'+ '</div>'+ '</div>'; var infowindow1183 = new google.maps.InfoWindow({ content: contentString1183 });   
        //markers  
        var marker1183 = new google.maps.Marker({ position: point1183, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1183.PARAÍSO EN RECUPERACIÓN." }); 
        //information for  
        function goToLink1183() { infowindow1183.open(map,marker1183);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1183, 'click', goToLink1183); google.maps.event.addDomListener(window, 'load', initialize);

        //MARCADOR 1184  
        //positions 
        var point1184 = new google.maps.LatLng(13.644922, -88.783211); var contentString1184 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">15 DE SEPTIEMBRE.</h1>'+ '<div id="bodyContent">'+ '<p><b></b> ,  — 15 de Septiembre de 2009. Dirección: Calle Principal  Barrio Concepción contiguo a La Iglesia  de  Concepción. Días y horas  de reuniones: De Lunes a Domingo de 5:00 a 7:00 p.m.</p>'+ '</div>'+ '</div>'; var infowindow1184 = new google.maps.InfoWindow({ content: contentString1184 });   
        //markers  
        var marker1184 = new google.maps.Marker({ position: point1184, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1184.15 DE SEPTIEMBRE." }); 
        //information for  
        function goToLink1184() { infowindow1184.open(map,marker1184);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1184, 'click', goToLink1184); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1185  
        //positions 
        var point1185 = new google.maps.LatLng(13.640671, -88.793727); var contentString1185 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">26  DE  SEPTIEMBRE.</h1>'+ '<div id="bodyContent">'+ '<p><b></b> , — 26 de Septiembre de 2009. Dirección: Centro Penal de San Vicente. Miembros asistentes: 20 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow1185 = new google.maps.InfoWindow({ content: contentString1185 });   
        //markers  
        var marker1185 = new google.maps.Marker({ position: point1185, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1185.26  DE  SEPTIEMBRE." }); 
        //information for  
        function goToLink1185() { infowindow1185.open(map,marker1185);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1185, 'click', goToLink1185); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1186  
        //positions 
        var point1186 = new google.maps.LatLng(13.625995, -88.775095); var contentString1186 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">AMAPULAPA.</h1>'+ '<div id="bodyContent">'+ '<p><b></b> , — 04  de  Junio  de  2004.  Dirección:  Comunidad y Avenida  Lozano  San Jacinto. Días y horas  de  reuniones: De Lunes a Domingo de 5:00 a 7:00 p.m.</p>'+ '</div>'+ '</div>'; var infowindow1186 = new google.maps.InfoWindow({ content: contentString1186 });   
        //markers  
        var marker1186 = new google.maps.Marker({ position: point1186, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1186.AMAPULAPA." }); 
        //information for  
        function goToLink1186() { infowindow1186.open(map,marker1186);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1186, 'click', goToLink1186); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1187  
        //positions 
        var point1187 = new google.maps.LatLng(13.640297, -88.780926); var contentString1187 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">CENTRAL VICENTINO.</h1>'+ '<div id="bodyContent">'+ '<p><b></b> , — 30 de Septiembre del 1977. Dirección: 6a Calle Oriente 3-32 Barrio San Francisco.  Días y horas  de  reuniones: De  Lunes  a Domingo de  6:30  a 8:30  p.m.</p>'+ '</div>'+ '</div>'; var infowindow1187 = new google.maps.InfoWindow({ content: contentString1187 });   
        //markers  
        var marker1187 = new google.maps.Marker({ position: point1187, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1187.CENTRAL VICENTINO." }); 
        //information for  
        function goToLink1187() { infowindow1187.open(map,marker1187);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1187, 'click', goToLink1187); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1188  
        //positions 
        var point1188 = new google.maps.LatLng(13.644923, -88.790013); var contentString1188 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">EL REFUGIO.</h1>'+ '<div id="bodyContent">'+ '<p><b></b> , — 18 de Febrero de 1982. Dirección: 2ª Calle Poniente Casa N° 75 Barrio Concepción. Días y horas  de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.</p>'+ '</div>'+ '</div>'; var infowindow1188 = new google.maps.InfoWindow({ content: contentString1188 });   
        //markers  
        var marker1188 = new google.maps.Marker({ position: point1188, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1188.EL REFUGIO." }); 
        //information for 
         function goToLink1188() { infowindow1188.open(map,marker1188);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1188, 'click', goToLink1188); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1189  
        //positions 
        var point1189 = new google.maps.LatLng(13.645645, -88.782816); var contentString1189 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">EL SANTUARIO.</h1>'+ '<div id="bodyContent">'+ '<p><b></b> , —  04  de  Abril  de  1966.  Dirección:   4ª  Avenida Norte  Nº 22, Barrio El Centro. Días y horas  de  reuniones: De Lunes a Domingo de 6:30 a 8:30 p.m.</p>'+ '</div>'+ '</div>'; var infowindow1189 = new google.maps.InfoWindow({ content: contentString1189 });   
        //markers  
        var marker1189 = new google.maps.Marker({ position: point1189, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1189.EL SANTUARIO." }); 
        //information for  
        function goToLink1189() { infowindow1189.open(map,marker1189);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1189, 'click', goToLink1189); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1190  
        //positions 
        var point1190 = new google.maps.LatLng(13.644673, -88.777611); var contentString1190 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">LUZ Y ESPERANZA.</h1>'+ '<div id="bodyContent">'+ '<p><b></b> , — 03  de  Abril de  2014.  Dirección:  5ª  Calle Oriente Casa Nº 12. Días y horas  de  reuniones: De Lunes a Sábado de  6:30  a 8:30  y Domingo de  10:00  a.m.  a 12:00  m.d.</p>'+ '</div>'+ '</div>'; var infowindow1190 = new google.maps.InfoWindow({ content: contentString1190 });   
        //markers  
        var marker1190 = new google.maps.Marker({ position: point1190, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1190.LUZ Y ESPERANZA." }); 
        //information for  
        function goToLink1190() { infowindow1190.open(map,marker1190);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1190, 'click', goToLink1190); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1191  
        //positions 
        var point1191 = new google.maps.LatLng(13.640129, -88.793598); var contentString1191 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">MARAVILLAS DEL 2002.</h1>'+ '<div id="bodyContent">'+ '<p><b></b> , — 18 de Mayo de 2002. Dirección: Centro Penal de San Vicente. Miembros asistentes: 25 Hombres</p>'+ '</div>'+ '</div>'; var infowindow1191 = new google.maps.InfoWindow({ content: contentString1191 });   
        //markers  
        var marker1191 = new google.maps.Marker({ position: point1191, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1191.MARAVILLAS DEL 2002." }); 
        //information for  
        function goToLink1191() { infowindow1191.open(map,marker1191);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1191, 'click', goToLink1191); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1192  
        //positions 
        var point1192 = new google.maps.LatLng(13.647427, -88.787125); var contentString1192 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NAVE DE SALVACIÓN.</h1>'+ '<div id="bodyContent">'+ '<p><b></b> , — 30 de Agosto de 1974. Dirección: 8ª Calle Poniente Nº 20, Barrio San Juan  de Dios. Días y horas  de reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m.</p>'+ '</div>'+ '</div>'; var infowindow1192 = new google.maps.InfoWindow({ content: contentString1192 });   
        //markers  
        var marker1192 = new google.maps.Marker({ position: point1192, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1192.NAVE DE SALVACIÓN." }); 
        //information for  
        function goToLink1192() { infowindow1192.open(map,marker1192);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1192, 'click', goToLink1192); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1193  
        //positions 
        var point1193 = new google.maps.LatLng(13.641687, -88.786155); var contentString1193 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NUEVA VIDA.</h1>'+ '<div id="bodyContent">'+ '<p><b></b> , — . Dirección:  10ª Calle Poniente Nº 26, Barrio San Juan  de  Dios. Días y horas  de  reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.</p>'+ '</div>'+ '</div>'; var infowindow1193 = new google.maps.InfoWindow({ content: contentString1193 });   
        //markers  
        var marker1193 = new google.maps.Marker({ position: point1193, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1193.NUEVA VIDA." }); 
        //information for  
        function goToLink1193() { infowindow1193.open(map,marker1193);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1193, 'click', goToLink1193); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1194  
        //positions 
        var point1194 = new google.maps.LatLng(13.643377, -88.783330); var contentString1194 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">RENACER EN  PRIMAVERA.</h1>'+ '<div id="bodyContent">'+ '<p><b></b> , — 14  de  Abril de  2013.  Dirección: Calle  Principal  Colonia  Primavera  local Nº 4 Polígono 16 S.V. Días y horas  de  reuniones: De  Lunes  a  Domingo de  6:00  a  7:30  p.m.</p>'+ '</div>'+ '</div>'; var infowindow1194 = new google.maps.InfoWindow({ content: contentString1194 });  
         //markers  
        var marker1194 = new google.maps.Marker({ position: point1194, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1194.RENACER EN  PRIMAVERA." }); 
        //information for  
        function goToLink1194() { infowindow1194.open(map,marker1194);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1194, 'click', goToLink1194); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1195  
        //positions 
        var point1195 = new google.maps.LatLng(13.639164, -88.786144); var contentString1195 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">>RENOVACIÓN.</h1>'+ '<div id="bodyContent">'+ '<p><b></b> ,  — 04 de Febrero de 1961.  Dirección:  Avenida Crescencio Miranda Casa Nº 45. Días y horas de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow1195 = new google.maps.InfoWindow({ content: contentString1195 });   
        //markers  
        var marker1195 = new google.maps.Marker({ position: point1195, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1195.>RENOVACIÓN." }); 
        //information for 
         function goToLink1195() { infowindow1195.open(map,marker1195);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1195, 'click', goToLink1195); google.maps.event.addDomListener(window, 'load', initialize);
         
         //MARCADOR 1196  
         //positions 
         var point1196 = new google.maps.LatLng(13.703536, -88.727163); var contentString1196 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">ILUMINACIÓN SANTA  CLARA.</h1>'+ '<div id="bodyContent">'+ '<p><b></b> , — 28  de   Septiembre de   2008. Dirección:  Calle  Principal,  frente  a Casa  Comunal. Días y horas  de reuniones: De  Lunes  a  Domingo de  4:00  a  6:00  p.m.</p>'+ '</div>'+ '</div>'; var infowindow1196 = new google.maps.InfoWindow({ content: contentString1196 });   
         //markers  
         var marker1196 = new google.maps.Marker({ position: point1196, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1196.ILUMINACIÓN SANTA  CLARA." }); 
         //information for  
         function goToLink1196() { infowindow1196.open(map,marker1196);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1196, 'click', goToLink1196); google.maps.event.addDomListener(window, 'load', initialize);
         
         //MARCADOR 1197  
         //positions 
         var point1197 = new google.maps.LatLng(13.702046, -88.728708); var contentString1197 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UNA LUZ EN LA JOYA HONDA.</h1>'+ '<div id="bodyContent">'+ '<p><b></b> , — 04 de Junio de 2014. Dirección: Cantón El Tortuguero, Santa  Clara.  Días y horas  de  reuniones: De Lunes  a  Domingo de  5:00  a  7:00  p.m.</p>'+ '</div>'+ '</div>'; var infowindow1197 = new google.maps.InfoWindow({ content: contentString1197 });   
         //markers  
         var marker1197 = new google.maps.Marker({ position: point1197, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1197.UNA LUZ EN LA JOYA HONDA." }); 
         //information for  
         function goToLink1197() { infowindow1197.open(map,marker1197);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1197, 'click', goToLink1197); google.maps.event.addDomListener(window, 'load', initialize);

        //MARCADOR 1198  
        //positions 
        var point1198 = new google.maps.LatLng(13.717367, -88.855798); var contentString1198 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">AHORA SOY FELIZ.</h1>'+ '<div id="bodyContent">'+ '<p><b></b> , — 07 de  Septiembre de  1977.  Dirección:  Una Cuadra Abajo  al Oriente del parque, Barrio El Centro. Días y horas de reuniones: De Lunes a Sábado de 6:00 a 8:00 p.m. y Domingo de 5:00 a 7:00 p.m.</p>'+ '</div>'+ '</div>'; var infowindow1198 = new google.maps.InfoWindow({ content: contentString1198 });   
        //markers  
        var marker1198 = new google.maps.Marker({ position: point1198, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1198.AHORA SOY FELIZ." }); 
        //information for  
        function goToLink1198() { infowindow1198.open(map,marker1198);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1198, 'click', goToLink1198); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1199  
        //positions 
        var point1199 = new google.maps.LatLng(13.715798, -88.855616); var contentString1199 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">MANANTIAL DE SOBRIEDAD.</h1>'+ '<div id="bodyContent">'+ '<p><b></b> , — 15 de  Noviembre de  1975. Dirección:  Calle  hacia  línea  férrea,  Barrio La Cruz. Días y horas  de reuniones: De Lunes a Sábado de  6:00  a 8:00  p.m.  y Domingo de 4:00 a 6:00 p.m.</p>'+ '</div>'+ '</div>'; var infowindow1199 = new google.maps.InfoWindow({ content: contentString1199 });   
        //markers 
        var marker1199 = new google.maps.Marker({ position: point1199, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1199.MANANTIAL DE SOBRIEDAD." }); 
        //information for  
        function goToLink1199() { infowindow1199.open(map,marker1199);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1199, 'click', goToLink1199); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1200  
        //positions 
        var point1200 = new google.maps.LatLng(13.719893, -88.858317); var contentString1200 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">SANTO  DOMINGO.</h1>'+ '<div id="bodyContent">'+ '<p><b></b> ,  —   25  de   Septiembre  de   1962.   Dirección: Avenida  15 de  Septiembre Barrio San José, Santo  Domingo. Días y horas  de  reuniones: De  Lunes  a  Domingo de  6:00  a  8:00  p.m.</p>'+ '</div>'+ '</div>'; var infowindow1200 = new google.maps.InfoWindow({ content: contentString1200 });   
        //markers  
        var marker1200 = new google.maps.Marker({ position: point1200, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1200.SANTO  DOMINGO." }); 
        //information for  
        function goToLink1200() { infowindow1200.open(map,marker1200);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1200, 'click', goToLink1200); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1201  
        //positions 
        var point1201 = new google.maps.LatLng(13.721709, -88.859637); var contentString1201 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">SOL DE ORIENTE.</h1>'+ '<div id="bodyContent">'+ '<p><b></b> , — 28  de  Marzo  de  2007.  Dirección:  Carretera Panamericana Km. 47  Caserío Los  Manantiales. Días  y horas  de reuniones: De  Lunes  a  Domingo de  6:00  a  8:00  p.m.</p>'+ '</div>'+ '</div>'; var infowindow1201 = new google.maps.InfoWindow({ content: contentString1201 });   
        //markers  
        var marker1201 = new google.maps.Marker({ position: point1201, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1201.SOL DE ORIENTE." }); 
        //information for  
        function goToLink1201() { infowindow1201.open(map,marker1201);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1201, 'click', goToLink1201); google.maps.event.addDomListener(window, 'load', initialize);

        //MARCADOR 1202  
        //positions
        var point1202 = new google.maps.LatLng(13.540334, -88.778438); var contentString1202 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">MI NUEVA  VIDA.</h1>'+ '<div id="bodyContent">'+ '<p><b></b> , — 20  de  Noviembre de  1991.  Dirección:  Calle Principal  San  Nicolás  Lempas  a 200  metros de  gasolinera Texaco. Días y horas  de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow1202 = new google.maps.InfoWindow({ content: contentString1202 });   
        //markers  
        var marker1202 = new google.maps.Marker({ position: point1202, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1202.MI NUEVA  VIDA." }); 
        //information for  
        function goToLink1202() { infowindow1202.open(map,marker1202);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1202, 'click', goToLink1202); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1203  
        //positions 
        var point1203 = new google.maps.LatLng(13.535570, -88.773769); var contentString1203 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">RENACIMIENTO.</h1>'+ '<div id="bodyContent">'+ '<p><b></b> ,  — 04 de  Febrero de  2006.  Dirección:  3ª Avenida Sur Nº  3 Barrio El Calvario,  Tecoluca. Días  y horas  de  reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow1203 = new google.maps.InfoWindow({ content: contentString1203 });   
        //markers  
        var marker1203 = new google.maps.Marker({ position: point1203, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1203.RENACIMIENTO." }); 
        //information for 
        function goToLink1203() { infowindow1203.open(map,marker1203);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1203, 'click', goToLink1203); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1204  
        //positions 
        var point1204 = new google.maps.LatLng(13.535216, -88.781354); var contentString1204 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UN  MILAGRO EN  SANTA  TERESA.</h1>'+ '<div id="bodyContent">'+ '<p><b></b> , — 20  de  Octubre de  2013. Dirección:   El  Playón   Santa   Teresa,  Tecoluca.  Días   y  horas   de reuniones: De  Lunes  a  Domingo de  6:00  a  8:00  p.m.</p>'+ '</div>'+ '</div>'; var infowindow1204 = new google.maps.InfoWindow({ content: contentString1204 });   
        //markers  
        var marker1204 = new google.maps.Marker({ position: point1204, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1204.UN  MILAGRO EN  SANTA  TERESA." }); 
        //information for  
        function goToLink1204() { infowindow1204.open(map,marker1204);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1204, 'click', goToLink1204); google.maps.event.addDomListener(window, 'load', initialize);

        //MARCADOR 1205 
         //positions 
        var point1205 = new google.maps.LatLng(13.647814, -88.835471); var contentString1205 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">BUENA  VOLUNTAD.</h1>'+ '<div id="bodyContent">'+ '<p><b></b> , — 25  Junio  de  1970.  Dirección:  3a  Avenida Sur, Barrio El Centro Nueva  Tepetitán.  Días y horas  de  reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m. </p>'+ '</div>'+ '</div>'; var infowindow1205 = new google.maps.InfoWindow({ content: contentString1205 });   
        //markers  
        var marker1205 = new google.maps.Marker({ position: point1205, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1205.BUENA  VOLUNTAD." }); 
        //information for  
        function goToLink1205() { infowindow1205.open(map,marker1205);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1205, 'click', goToLink1205); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1206 
         //positions 
        var point1206 = new google.maps.LatLng(13.650223, -88.835340); var contentString1206 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">>DESPERTAR 51.</h1>'+ '<div id="bodyContent">'+ '<p><b></b> , — 25 de Junio  de 1983. Dirección:  Km. 51, Cantón La Virgen  Municipio  de  Tepetitán. Días  y horas  de  reuniones: De Lunes  a  Domingo de  4:00  a  6:00  p.m.</p>'+ '</div>'+ '</div>'; var infowindow1206 = new google.maps.InfoWindow({ content: contentString1206 });   
        //markers  
        var marker1206 = new google.maps.Marker({ position: point1206, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1206.>DESPERTAR 51." }); 
        //information for  
        function goToLink1206() { infowindow1206.open(map,marker1206);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1206, 'click', goToLink1206); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1207 
         //positions 
        var point1207 = new google.maps.LatLng(13.643242, -88.833844); var contentString1207 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">RENACER EN  UNA  NUEVA  LUZ.</h1>'+ '<div id="bodyContent">'+ '<p><b></b> ,  — 28  de   Agosto  del  2002. Dirección:  Concepción Cañas,  Tepetitán. Días y horas  de reuniones: De  Lunes  a Domingo de  5:00  a 7:00  p.m.</p>'+ '</div>'+ '</div>'; var infowindow1207 = new google.maps.InfoWindow({ content: contentString1207 });   
        //markers  
        var marker1207 = new google.maps.Marker({ position: point1207, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1207.RENACER EN  UNA  NUEVA  LUZ." }); 
        //information for  
        function goToLink1207() { infowindow1207.open(map,marker1207);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1207, 'click', goToLink1207); google.maps.event.addDomListener(window, 'load', initialize);

        //MARCADOR 1208  
        //positions 
        var point1208 = new google.maps.LatLng(13.646897, -88.867846); var contentString1208 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">02 DE ABRIL.</h1>'+ '<div id="bodyContent">'+ '<p><b></b> ,  02 de Abril de 1989.  Dirección:  Cantón El Carmen de Verapaz. Días y horas de reuniones: Miércoles, Sábado y Domingo de 5:00 a 7:00 p.m.</p>'+ '</div>'+ '</div>'; var infowindow1208 = new google.maps.InfoWindow({ content: contentString1208 });   
        //markers  
        var marker1208 = new google.maps.Marker({ position: point1208, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1208.02 DE ABRIL." }); 
        //information for 
         function goToLink1208() { infowindow1208.open(map,marker1208);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1208, 'click', goToLink1208); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1209  
        //positions
        var point1209 = new google.maps.LatLng(13.643756, -88.871440); var contentString1209 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NUEVO   RENACER  11   DE  MAYO.</h1>'+ '<div id="bodyContent">'+ '<p><b></b> , —  11   de   Mayo   de   2002. Dirección: Barrio Mercedes, ½ Cuadra atrás de La Iglesia Evangélica. Días y horas  de reuniones: De Lunes a Domingo de 6:30 a 8:00 p.m.</p>'+ '</div>'+ '</div>'; var infowindow1209 = new google.maps.InfoWindow({ content: contentString1209 });   
        //markers  
        var marker1209 = new google.maps.Marker({ position: point1209, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1209.NUEVO   RENACER  11   DE  MAYO." }); 
        //information for  
        function goToLink1209() { infowindow1209.open(map,marker1209);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1209, 'click', goToLink1209); google.maps.event.addDomListener(window, 'load', initialize);
        
        //MARCADOR 1210  
        //positions 
        var point1210 = new google.maps.LatLng(13.643062, -88.873359); var contentString1210 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">VOLVÍ A NACER EN  A.A.</h1>'+ '<div id="bodyContent">'+ '<p><b></b> , —  16  de  Mayo  de  1992.  Dirección:  3 Cuadras abajo de  La línea férrea  Colonia  Santa  María C/ Molinero. Días y horas  de reuniones: De Lunes a Domingo de 5:00 a 7:00 p.m.</p>'+ '</div>'+ '</div>'; var infowindow1210 = new google.maps.InfoWindow({ content: contentString1210 });  
         //markers  
        var marker1210 = new google.maps.Marker({ position: point1210, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "1210.VOLVÍ A NACER EN  A.A." }); 
        //information for  
        function goToLink1210() { infowindow1210.open(map,marker1210);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker1210, 'click', goToLink1210); google.maps.event.addDomListener(window, 'load', initialize);




}

