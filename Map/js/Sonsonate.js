

function initialize() {


    //Map parametrs
    var mapOptions = {
        zoom: 10,
        center: new google.maps.LatLng(13.7090333,-89.7003444),
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

    ///MARCADOR 102  
    //positions 
    var point102 = new google.maps.LatLng(13.648390, -89.898641); var contentString102 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">06 DE OCTUBRE UN MILAGRO EN BUENOS AIRES.</h1>'+ '<div id="bodyContent">'+ '<p><b>06 DE OCTUBRE UN MILAGRO EN BUENOS AIRES.</b> , — 06 de Octubre de 2014. Dirección: Colonia Buenos Aires, Cantón Metalío, Acajutla. Días y horas de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m. Miembros asistentes: 5 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow102 = new google.maps.InfoWindow({ content: contentString102 });   
    //markers  
    var marker102 = new google.maps.Marker({ position: point102, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "102.06 DE OCTUBRE UN MILAGRO EN BUENOS AIRES." }); 
    //information for  
    function goToLink102() { infowindow102.open(map,marker102);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker102, 'click', goToLink102); google.maps.event.addDomListener(window, 'load', initialize);
	
	//MARCADOR 103  
	var point103 = new google.maps.LatLng(13.5928989,-89.8291042); var contentString103 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">15 DE SEPTIEMBRE</h1>'+ '<div id="bodyContent">'+ '<p><b>15 DE SEPTIEMBRE</b> , — 15 de  Septiembre de  1971.  Dirección:  Calle Principal  Nº  47,  Colonia  El Boulevard, Cantón Metalío,  Acajutla. Días y horas  de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m. Miembros asistentes: 24 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow103 = new google.maps.InfoWindow({ content: contentString103 });   
	//markers  
	var marker103 = new google.maps.Marker({ position: point103, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "103.15 DE SEPTIEMBRE" }); 
	//information for  
	function goToLink103() { infowindow103.open(map,marker103);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker103, 'click', goToLink103); google.maps.event.addDomListener(window, 'load', initialize);

	//MARCADOR 104  //positions 
	var point104 = new google.maps.LatLng(13.5921483,-89.8319439); var contentString104 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">16 DE ENERO.</h1>'+ '<div id="bodyContent">'+ '<p><b>16 DE ENERO.</b> , — 16 de Enero de 1964.  Dirección:  Colonia  Acaxual Nº  1,  Calle  Principal,  frente  a  oficina  de  Correos de  El Salvador, Acajutla. Días y horas  de reuniones: De Lunes a Domingo de 5:30 a 7:30 p.m.  Miembros asistentes: 8 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow104 = new google.maps.InfoWindow({ content: contentString104 });   
	//markers  
	var marker104 = new google.maps.Marker({ position: point104, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "104.16 DE ENERO." }); 
	//information for  
	function goToLink104() { infowindow104.open(map,marker104);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker104, 'click', goToLink104); google.maps.event.addDomListener(window, 'load', initialize);
	
	//MARCADOR 105  //positions 
	var point105 = new google.maps.LatLng(13.6092063,-89.8024443); var contentString105 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">1º DE DICIEMBRE.</h1>'+ '<div id="bodyContent">'+ '<p><b>1º DE DICIEMBRE.</b> , — 01 de Diciembre de 1977.  Dirección:  Colonia Mesa Verde, Caserío Kilo 5, Cantón San Julián, Acajutla. Días y horas de  reuniones: De Lunes a Domingo de  7:00 a 9:00 p.m.  Miembros asistentes: 6 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow105 = new google.maps.InfoWindow({ content: contentString105 });   
	//markers  
	var marker105 = new google.maps.Marker({ position: point105, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "105.1º DE DICIEMBRE." }); 
	//information for  
	function goToLink105() { infowindow105.open(map,marker105);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker105, 'click', goToLink105); google.maps.event.addDomListener(window, 'load', initialize);
	
	//MARCADOR 106  //positions 
	var point106 = new google.maps.LatLng(13.5949986,-89.8289119); var contentString106 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">24 DE MARZO UNA LUZ EN EL MORA.</h1>'+ '<div id="bodyContent">'+ '<p><b>24 DE MARZO UNA LUZ EN EL MORA.</b> , — 24 de  Marzo de  2012. Dirección:  Caserío El Mora,  frente  a  La Cancha, Cantón Metalío, Acajutla. Días y horas  de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.  Miembros asistentes: 7 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow106 = new google.maps.InfoWindow({ content: contentString106 });   
	//markers  
	var marker106 = new google.maps.Marker({ position: point106, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "106.24 DE MARZO UNA LUZ EN EL MORA." }); 
	//information for  
	function goToLink106() { infowindow106.open(map,marker106);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker106, 'click', goToLink106); google.maps.event.addDomListener(window, 'load', initialize);
	
	//MARCADOR 107  //positions 
	var point107 = new google.maps.LatLng(13.5920637,-89.8266323); var contentString107 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">DESPERTAR 74</h1>'+ '<div id="bodyContent">'+ '<p><b>DESPERTAR 74</b> , .—  06 de  Noviembre de  1974.  Dirección:  Colonia Acaxual  Nº  2,  Avenida  B, Casa  Nº  33,  Acajutla.  Días  y horas  de reuniones: De  Lunes  a  Domingo de  7:00  a  9:00  p.m.  Miembros asistentes: 6 Hombres y 1 Mujer.</p>'+ '</div>'+ '</div>'; var infowindow107 = new google.maps.InfoWindow({ content: contentString107 });   
	//markers  
	var marker107 = new google.maps.Marker({ position: point107, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "107.DESPERTAR 74" }); 
	//information for  
	function goToLink107() { infowindow107.open(map,marker107);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker107, 'click', goToLink107); google.maps.event.addDomListener(window, 'load', initialize);
	
	//MARCADOR 108  //positions 
	var point108 = new google.maps.LatLng(13.5781175,-89.8317253); var contentString108 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">FE EN LA VIDA.</h1>'+ '<div id="bodyContent">'+ '<p><b>FE EN LA VIDA.</b> , — 17 de Julio de 1989.  Dirección:  Zona Industrial, C.E.P.A., Acajutla. Días y horas  de reuniones: De Lunes a Viernes de 12:00 a 1:00 p.m.  Miembros asistentes: 6 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow108 = new google.maps.InfoWindow({ content: contentString108 });   
	//markers  
	var marker108 = new google.maps.Marker({ position: point108, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "108.FE EN LA VIDA." }); 
	//information for  
	function goToLink108() { infowindow108.open(map,marker108);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker108, 'click', goToLink108); google.maps.event.addDomListener(window, 'load', initialize);
	
	//MARCADOR 109  //positions 
	var point109 = new google.maps.LatLng(13.5909844,-89.8293923); var contentString109 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">LOS AMIGOS.</h1>'+ '<div id="bodyContent">'+ '<p><b>LOS AMIGOS.</b> , .—  29  de  Noviembre de  2005.  Dirección:  Colonia Acaxual  Nº  2,  Calle  Principal  Nº  54,  Acajutla.   Días  y  horas   de reuniones: De  Lunes  a  Domingo de  6:30  a  8:30  p.m.  Miembros asistentes: 12 Hombres y 2 Mujeres.</p>'+ '</div>'+ '</div>'; var infowindow109 = new google.maps.InfoWindow({ content: contentString109 });   
	//markers  
	var marker109 = new google.maps.Marker({ position: point109, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "109.LOS AMIGOS." }); 
	//information for  
	function goToLink109() { infowindow109.open(map,marker109);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker109, 'click', goToLink109); google.maps.event.addDomListener(window, 'load', initialize);
	
	//MARCADOR 110  //positions 
	var point110 = new google.maps.LatLng(13.5942115,-89.8215821); var contentString110 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">RENACER 09 DE OCTUBRE.</h1>'+ '<div id="bodyContent">'+ '<p><b>RENACER 09 DE OCTUBRE.</b> , — 09 de Octubre de 2000.  Dirección: Colonia   Magdalena  Nº  2  Block  F  contiguo  a  Iglesia   Nazareth, Acajutla. Días y horas  de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.  Miembros asistentes: 19 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow110 = new google.maps.InfoWindow({ content: contentString110 });   
	//markers  
	var marker110 = new google.maps.Marker({ position: point110, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "110.RENACER 09 DE OCTUBRE." }); 
	//information for  
	function goToLink110() { infowindow110.open(map,marker110);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker110, 'click', goToLink110); google.maps.event.addDomListener(window, 'load', initialize);
	
	//MARCADOR 111  //positions 
	var point111 = new google.maps.LatLng(13.596194,-89.8363199); var contentString111 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UNA LUZ EN LAS ATARRAYAS.</h1>'+ '<div id="bodyContent">'+ '<p><b>UNA LUZ EN LAS ATARRAYAS.</b> , — 24 de Enero de 1994. Dirección: Comunidad San Roque, Barrio Las Atarrayas,  50 metros al Norte  de La antigua estación del  ferrocarril  sobre línea  férrea.  Días y horas de  reuniones: De Lunes a Domingo de  6:30 a 8:30 p.m.  Miembros asistentes: 7 Hombres y 3 Mujeres.</p>'+ '</div>'+ '</div>'; var infowindow111 = new google.maps.InfoWindow({ content: contentString111 });   
	//markers  
	var marker111 = new google.maps.Marker({ position: point111, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "111.UNA LUZ EN LAS ATARRAYAS." }); 
	//information for  
	function goToLink111() { infowindow111.open(map,marker111);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker111, 'click', goToLink111); google.maps.event.addDomListener(window, 'load', initialize);

	
	
	//MARCADOR 112  //positions 
	var point112 = new google.maps.LatLng(13.744459, -89.502986); var contentString112 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">ARMENIA.</h1>'+ '<div id="bodyContent">'+ '<p><b>ARMENIA.</b> , —  17   de   Septiembre  de   1969.   Dirección:   4ª   Calle Poniente Nº 33, Barrio La Cruz, Armenia.  Días y horas  de reuniones: De Lunes a Domingo de  6:30 a 8:30 p.m.  Miembros asistentes: 10 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow112 = new google.maps.InfoWindow({ content: contentString112 });   
	//markers  
	var marker112 = new google.maps.Marker({ position: point112, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "112.ARMENIA." }); 
	//information for  
	function goToLink112() { infowindow112.open(map,marker112);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker112, 'click', goToLink112); google.maps.event.addDomListener(window, 'load', initialize);
	
	//MARCADOR 113  //positions 
	var point113 = new google.maps.LatLng(13.748649, -89.498802); var contentString113 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">EL ÚNICO REQUISITO</h1>'+ '<div id="bodyContent">'+ '<p><b>EL ÚNICO REQUISITO</b> , — 25 de  Enero  de  1998.  Dirección:  Pasaje El Estote Nº  2  entre 6ª  y 7ª  Calle  Oriente, Barrio  Santa  Teresa, Armenia.  Días y horas  de reuniones: De Lunes a Domingo de 6:30 a 8:30 p.m.  Miembros asistentes: 10 Hombres y 1 Mujer.</p>'+ '</div>'+ '</div>'; var infowindow113 = new google.maps.InfoWindow({ content: contentString113 });   
	//markers  
	var marker113 = new google.maps.Marker({ position: point113, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "113.EL ÚNICO REQUISITO" }); 
	//information for  
	function goToLink113() { infowindow113.open(map,marker113);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker113, 'click', goToLink113); google.maps.event.addDomListener(window, 'load', initialize);
	
	//MARCADOR 114  //positions 
	var point114 = new google.maps.LatLng(13.745126, -89.504274); var contentString114 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">FE QUE OBRA.</h1>'+ '<div id="bodyContent">'+ '<p><b>FE QUE OBRA.</b> , — 16 de  Agosto de  1982.  Dirección:  Calle  Arturo Araujo Nº 5 y 7ª Avenida  Sur, Barrio La Cruz, Armenia.  Días y horas de  reuniones: De Lunes a Domingo de  7:00 a 9:00 p.m.  Miembros asistentes: 7 Hombres y 1 Mujer.</p>'+ '</div>'+ '</div>'; var infowindow114 = new google.maps.InfoWindow({ content: contentString114 });   
	//markers  
	var marker114 = new google.maps.Marker({ position: point114, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "114.FE QUE OBRA." }); 
	//information for  
	function goToLink114() { infowindow114.open(map,marker114);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker114, 'click', goToLink114); google.maps.event.addDomListener(window, 'load', initialize);
	
	//MARCADOR 115  //positions 
	var point115 = new google.maps.LatLng(13.743625, -89.503791); var contentString115 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">MARAVILLA DEL 70.</h1>'+ '<div id="bodyContent">'+ '<p><b>MARAVILLA DEL 70.</b> , — 16 de Mayo de 1971. Dirección: 1ª Avenida Sur Nº  17,  Barrio Nuevo, Armenia.  Días y horas  de  reuniones: De Lunes  a  Domingo de  6:30  a  8:30  p.m.  Miembros asistentes:  10 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow115 = new google.maps.InfoWindow({ content: contentString115 });   
	//markers  
	var marker115 = new google.maps.Marker({ position: point115, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "115.MARAVILLA DEL 70." }); 
	//information for  
	function goToLink115() { infowindow115.open(map,marker115);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker115, 'click', goToLink115); google.maps.event.addDomListener(window, 'load', initialize);
	
	//MARCADOR 116  //positions 
	var point116 = new google.maps.LatLng(13.747242, -89.503480); var contentString116 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">PROVIDENCIA 21 DE ENERO.</h1>'+ '<div id="bodyContent">'+ '<p><b>PROVIDENCIA 21 DE ENERO.</b> , — 21 de Enero  de 1983.  Dirección: 5ª Calle Poniente Nº 27, Colonia  Divina Providencia, Armenia.  Días y horas  de  reuniones: De  Lunes  a  Domingo de  6:30  a  8:30  p.m. Miembros asistentes: 3 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow116 = new google.maps.InfoWindow({ content: contentString116 });   
	//markers  
	var marker116 = new google.maps.Marker({ position: point116, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "116.PROVIDENCIA 21 DE ENERO." }); 
	//information for  
	function goToLink116() { infowindow116.open(map,marker116);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker116, 'click', goToLink116); google.maps.event.addDomListener(window, 'load', initialize);
	
	//MARCADOR 117  //positions 
	var point117 = new google.maps.LatLng(13.747690, -89.509960); var contentString117 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">PUERTA DE SALVACIÓN.</h1>'+ '<div id="bodyContent">'+ '<p><b>PUERTA DE SALVACIÓN.</b> , — 01 de Septiembre de 2001.  Dirección: Cantón La Puerta 2ª  Zona,  Caserío Puente  Seco,   Armenia.   Días y horas  de  reuniones: De  Lunes  a  Domingo de  6:30  a  8:30  p.m. Miembros asistentes: 6 Hombres</p>'+ '</div>'+ '</div>'; var infowindow117 = new google.maps.InfoWindow({ content: contentString117 });   
	//markers  
	var marker117 = new google.maps.Marker({ position: point117, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "117.PUERTA DE SALVACIÓN." }); 
	//information for  
	function goToLink117() { infowindow117.open(map,marker117);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker117, 'click', goToLink117); google.maps.event.addDomListener(window, 'load', initialize);
	
	//MARCADOR 118  //positions 
	var point118 = new google.maps.LatLng(13.747106, -89.497450); var contentString118 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">RENOVACIÓN   07   DE  AGOSTO</h1>'+ '<div id="bodyContent">'+ '<p><b>RENOVACIÓN   07   DE  AGOSTO</b> , —   07   de   Agosto  de   1979. Dirección:  Calle Lito Barrientos por La 5ª Calle Oriente, Barrio Santa Teresa, Armenia.  Días y horas  de  reuniones: De Lunes  a Domingo de 6:30 a 8:30 p.m.  Miembros asistentes: 18 Hombres y 2 Mujeres.</p>'+ '</div>'+ '</div>'; var infowindow118 = new google.maps.InfoWindow({ content: contentString118 });   
	//markers  
	var marker118 = new google.maps.Marker({ position: point118, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "118.RENOVACIÓN   07   DE  AGOSTO" }); 
	//information for  
	function goToLink118() { infowindow118.open(map,marker118);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker118, 'click', goToLink118); google.maps.event.addDomListener(window, 'load', initialize);
	
	//MARCADOR 119  //positions 
	var point119 = new google.maps.LatLng(13.745960, -89.497601); var contentString119 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UN  MILAGRO EN  LAS CRUCITAS.</h1>'+ '<div id="bodyContent">'+ '<p><b>UN  MILAGRO EN  LAS CRUCITAS.</b> , — 19  de   Agosto de   2000. Dirección:  Cantón Las Crucitas  1ª Zona,  Armenia.  Días y horas  de reuniones: De  Lunes  a  Domingo de  6:30  a  8:30  p.m.  Miembros asistentes: 7 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow119 = new google.maps.InfoWindow({ content: contentString119 });   
	//markers  
	var marker119 = new google.maps.Marker({ position: point119, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "119.UN  MILAGRO EN  LAS CRUCITAS." }); 
	//information for  
	function goToLink119() { infowindow119.open(map,marker119);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker119, 'click', goToLink119); google.maps.event.addDomListener(window, 'load', initialize);
	
	//MARCADOR 120  //positions 
	var point120 = new google.maps.LatLng(13.746335, -89.511248); var contentString120 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UNA  LUZ EN LA PUERTA</h1>'+ '<div id="bodyContent">'+ '<p><b>UNA  LUZ EN LA PUERTA</b> , — 10  de  Agosto de  2010.  Dirección: Cantón La Puerta, 1ª  Zona  frente  a  Iglesia  Católica  Santa  Ursula, Armenia.  Días y horas  de reuniones: De Lunes a Domingo de 6:30 a 8:30 p.m.  Miembros asistentes: 7 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow120 = new google.maps.InfoWindow({ content: contentString120 });   
	//markers  
	var marker120 = new google.maps.Marker({ position: point120, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "120.UNA  LUZ EN LA PUERTA" }); 
	//information for  
	function goToLink120() { infowindow120.open(map,marker120);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker120, 'click', goToLink120); google.maps.event.addDomListener(window, 'load', initialize);
	
	//MARCADOR 121  //positions 
	var point121 = new google.maps.LatLng(13.744584, -89.498416); var contentString121 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UNIDOS  22  DE AGOSTO.</h1>'+ '<div id="bodyContent">'+ '<p><b>UNIDOS  22  DE AGOSTO.</b> , —  22  de  Agosto de  2002.  Dirección: 2ª  Calle  Oriente, Barrio  San  Sebastián, Armenia.  Días  y horas  de reuniones: De  Lunes  a  Domingo de  6:30  a  8:30  p.m.  Miembros asistentes: 8 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow121 = new google.maps.InfoWindow({ content: contentString121 });   
	//markers  
	var marker121 = new google.maps.Marker({ position: point121, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "121.UNIDOS  22  DE AGOSTO." }); 
	//information for  
	function goToLink121() { infowindow121.open(map,marker121);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker121, 'click', goToLink121); google.maps.event.addDomListener(window, 'load', initialize);
	
	
	//MARCADOR 122  //positions 
	var point122 = new google.maps.LatLng(13.637950, -89.606155); var contentString122 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">BUSCANDO  LA LUZ EN SAN  LUCAS.</h1>'+ '<div id="bodyContent">'+ '<p><b>BUSCANDO  LA LUZ EN SAN  LUCAS.</b> , — 10  de  Marzo  de  2013. Dirección:  Cantón y Caserío San Lucas, entre El Centro Escolar y La Iglesia  Católica, Cuisnahuat. Días y horas  de  reuniones: De  Lunes a Domingo de 6:00 a 8:00 p.m.  Miembros asistentes: 10 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow122 = new google.maps.InfoWindow({ content: contentString122 });   
	//markers  
	var marker122 = new google.maps.Marker({ position: point122, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "122.BUSCANDO  LA LUZ EN SAN  LUCAS." }); 
	//information for  
	function goToLink122() { infowindow122.open(map,marker122);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker122, 'click', goToLink122); google.maps.event.addDomListener(window, 'load', initialize);
	
	
	//MARCADOR 123  //positions 
	var point123 = new google.maps.LatLng(13.744679, -89.674745); var contentString123 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">ASUNCIÓN.</h1>'+ '<div id="bodyContent">'+ '<p><b>ASUNCIÓN.</b> , — 12 de Junio  de 1972. Dirección:  2ª Avenida Sur Nº 2 y 4ª Calle Oriente, Barrio Asunción, Izalco. Días y horas de reuniones: De Lunes a Domingo de  7:00 a 9:00 p.m.  Miembros asistentes: 10 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow123 = new google.maps.InfoWindow({ content: contentString123 });   
	//markers  
	var marker123 = new google.maps.Marker({ position: point123, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "123.ASUNCIÓN." }); 
	//information for  
	function goToLink123() { infowindow123.open(map,marker123);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker123, 'click', goToLink123); google.maps.event.addDomListener(window, 'load', initialize);
	
	//MARCADOR 124  //positions 
	var point124 = new google.maps.LatLng(13.717201,-89.5623066); var contentString124 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">CHISPAZO  DIVINO.</h1>'+ '<div id="bodyContent">'+ '<p><b>CHISPAZO  DIVINO.</b> , —  09  de   Septiembre  de   2011.   Dirección: Caserío La Santa  Sión,  sobre La Calle  Cantonal Principal,  Cantón Piedras   Pachas,  Izalco.  Días  y  horas   de   reuniones: De  Lunes  a Domingo de 6:30 a 8:30 p.m.  Miembros asistentes: 8 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow124 = new google.maps.InfoWindow({ content: contentString124 });   
	//markers  
	var marker124 = new google.maps.Marker({ position: point124, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "124.CHISPAZO  DIVINO." }); 
	//information for  
	function goToLink124() { infowindow124.open(map,marker124);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker124, 'click', goToLink124); google.maps.event.addDomListener(window, 'load', initialize);
	
	//MARCADOR 125  //positions 
	var point125 = new google.maps.LatLng(13.747063, -89.673967); var contentString125 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">FARO DE SALVACIÓN.</h1>'+ '<div id="bodyContent">'+ '<p><b>FARO DE SALVACIÓN.</b> , —  19  de  Diciembre de  1976.  Dirección: 1ª Calle Oriente Nº 3, Barrio San Sebastián Izalco. Días y horas  de reuniones: De  Lunes  a  Domingo de  7:00  a  9:00  p.m.  Miembros asistentes: 15 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow125 = new google.maps.InfoWindow({ content: contentString125 });  
	//markers  
	var marker125 = new google.maps.Marker({ position: point125, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "125.FARO DE SALVACIÓN." }); 
	//information for  
	function goToLink125() { infowindow125.open(map,marker125);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker125, 'click', goToLink125); google.maps.event.addDomListener(window, 'load', initialize);
	
	//MARCADOR 126  //positions 
	var point126 = new google.maps.LatLng(13.717201,-89.5623066); var contentString126 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">MI ÚNICO CAMINO.</h1>'+ '<div id="bodyContent">'+ '<p><b>MI ÚNICO CAMINO.</b> , — 08 de Marzo de 1990.  Dirección:  Hacienda Las  Trincheras, Cantón  Piedras   Pachas,  Izalco.  Días  y  horas   de reuniones: De  Lunes  a  Domingo de  6:30  a  8:30  p.m.  Miembros asistentes: 13 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow126 = new google.maps.InfoWindow({ content: contentString126 }); 
	//markers  
	var marker126 = new google.maps.Marker({ position: point126, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "126.MI ÚNICO CAMINO." }); 
	//information for  
	function goToLink126() { infowindow126.open(map,marker126);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker126, 'click', goToLink126); google.maps.event.addDomListener(window, 'load', initialize);
	
	//MARCADOR 127  //positions 
	var point127 = new google.maps.LatLng(13.744080, -89.676641); var contentString127 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">RECUPERACIÓN 2003.</h1>'+ '<div id="bodyContent">'+ '<p><b>RECUPERACIÓN 2003.</b> , — 23  de  Noviembre de  2003.  Dirección: 8ª Calle Poniente, entre 1ª Avenida  Sur y Avenida  “Atlacatl”, Barrio “Asunción”, Izalco. Días y horas  de reuniones: De Lunes a Domingo de 7:00 a 9:00 p.m.  Miembros asistentes: 8 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow127 = new google.maps.InfoWindow({ content: contentString127 });  
	//markers  
	var marker127 = new google.maps.Marker({ position: point127, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "127.RECUPERACIÓN 2003." }); 
	//information for  
	function goToLink127() { infowindow127.open(map,marker127);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker127, 'click', goToLink127); google.maps.event.addDomListener(window, 'load', initialize);
	
	//MARCADOR 128  //positions 
	var point128 = new google.maps.LatLng(13.748530, -89.677875); var contentString128 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">RENACER 08 DE OCTUBRE.</h1>'+ '<div id="bodyContent">'+ '<p><b>RENACER 08 DE OCTUBRE.</b> , — 08 de Octubre de 1982.  Dirección: Cantón El Zunza,  Izalco.  Días  y horas  de  reuniones: De  Lunes  a Domingo de 6:00 a 8:00 p.m.  Miembros asistentes: 18 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow128 = new google.maps.InfoWindow({ content: contentString128 });  
	//markers  
	var marker128 = new google.maps.Marker({ position: point128, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "128.RENACER 08 DE OCTUBRE." }); 
	//information for  
	function goToLink128() { infowindow128.open(map,marker128);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker128, 'click', goToLink128); google.maps.event.addDomListener(window, 'load', initialize);
	
	//MARCADOR 129  //positions 
	var point129 = new google.maps.LatLng(13.7422767,-89.6727679); var contentString129 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">RENOVACIÓN 07  DE JUNIO.</h1>'+ '<div id="bodyContent">'+ '<p><b>RENOVACIÓN 07  DE JUNIO.</b> , — 07 de  Junio  de  2007.  Dirección: 2 Cuadras al Norte  de  La Iglesia  Católica, Cantón El Zunza, Izalco. Días y horas  de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m. Miembros asistentes: 5 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow129 = new google.maps.InfoWindow({ content: contentString129 });  
	//markers  
	var marker129 = new google.maps.Marker({ position: point129, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "129.RENOVACIÓN 07  DE JUNIO." });
	//information for  
	function goToLink129() { infowindow129.open(map,marker129);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker129, 'click', goToLink129); google.maps.event.addDomListener(window, 'load', initialize);
	
	
	//MARCADOR 130  //positions 
	var point130 = new google.maps.LatLng(13.8431923,-89.744812); var contentString130 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">ÉSTE ES MI CAMINO.</h1>'+ '<div id="bodyContent">'+ '<p><b>ÉSTE ES MI CAMINO.</b> , — 06 de Agosto de 1974. Dirección: Carretera entre Juayúa y Los Naranjos, Cantón San José La Majada, Juayúa. Días y horas  de reuniones: De Lunes a Domingo de 6:30 a 8:30 p.m. Miembros asistentes: 20 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow130 = new google.maps.InfoWindow({ content: contentString130 }); 
	//markers  
	var marker130 = new google.maps.Marker({ position: point130, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "130.ÉSTE ES MI CAMINO." });
	//information for  
	function goToLink130() { infowindow130.open(map,marker130);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker130, 'click', goToLink130); google.maps.event.addDomListener(window, 'load', initialize);
	
	//MARCADOR 131  //positions 
	var point131 = new google.maps.LatLng(13.844484, -89.743396); var contentString131 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">EL PROGRESO.</h1>'+ '<div id="bodyContent">'+ '<p><b>EL PROGRESO.</b> , — 02  de  Junio  de  1963.  Dirección:  Colonia  IVU, Pasaje  Nº 1 Casa No 1, Juayúa. Días y horas  de reuniones: De Lunes a Domingo de 6:30 a 8:30 p.m.  Miembros asistentes: 5 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow131 = new google.maps.InfoWindow({ content: contentString131 });  
	//markers  
	var marker131 = new google.maps.Marker({ position: point131, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "131.EL PROGRESO." }); 
	//information for  
	function goToLink131() { infowindow131.open(map,marker131);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker131, 'click', goToLink131); google.maps.event.addDomListener(window, 'load', initialize);
	
	
	//MARCADOR 132  //positions 
	var point132 = new google.maps.LatLng(13.772247, -89.736491); var contentString132 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">02  DE OCTUBRE.</h1>'+ '<div id="bodyContent">'+ '<p><b>02  DE OCTUBRE.</b> , — 02  de  Octubre de  1996.  Dirección:  Cantón El Carrizal, Zona Abajo,  Nahuizalco. Días y horas  de  reuniones: De Lunes  a  Domingo de  6:00  a  8:00  p.m.  Miembros asistentes:  24 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow132 = new google.maps.InfoWindow({ content: contentString132 }); 
	//markers  
	var marker132 = new google.maps.Marker({ position: point132, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "132.02  DE OCTUBRE." });
	//information for  
	function goToLink132() { infowindow132.open(map,marker132);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker132, 'click', goToLink132); google.maps.event.addDomListener(window, 'load', initialize);
	
	//MARCADOR 133  //positions 
	var point133 = new google.maps.LatLng(13.779968, -89.738958); var contentString133 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">10  DE JUNIO.</h1>'+ '<div id="bodyContent">'+ '<p><b>10  DE JUNIO.</b> , — 10 de  Junio  de  1980.  Dirección:  Calle El Paraíso por  La Avenida  El Calvario,  Barrio Las Mercedes,  Nahuizalco. Días y horas  de  reuniones: De  Lunes  a  Domingo de  7:00  a  9:00  p.m. Miembros asistentes: 17 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow133 = new google.maps.InfoWindow({ content: contentString133 });  
	//markers  
	var marker133 = new google.maps.Marker({ position: point133, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "133.10  DE JUNIO." });
	//information for  
	function goToLink133() { infowindow133.open(map,marker133);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker133, 'click', goToLink133); google.maps.event.addDomListener(window, 'load', initialize);
	
	//MARCADOR 134  //positions 
	var point134 = new google.maps.LatLng(13.782719, -89.738915); var contentString134 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">11  DE  SEPTIEMBRE.</h1>'+ '<div id="bodyContent">'+ '<p><b>11  DE  SEPTIEMBRE.</b> , — 11  de  Septiembre de  2010.   Dirección: Cantón Sabána Grande, Zona  Centro frente  a  Cancha de  fútbol, Nahuizalco. Días y horas de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.  Miembros asistentes: 12 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow134 = new google.maps.InfoWindow({ content: contentString134 }); 
	//markers  
	var marker134 = new google.maps.Marker({ position: point134, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "134.11  DE  SEPTIEMBRE." }); 
	//information for  
	function goToLink134() { infowindow134.open(map,marker134);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker134, 'click', goToLink134); google.maps.event.addDomListener(window, 'load', initialize);
	
	//MARCADOR 135  //positions 
	var point135 = new google.maps.LatLng(13.774894, -89.737821); var contentString135 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">CAMBIO DE VIDA.</h1>'+ '<div id="bodyContent">'+ '<p><b>CAMBIO DE VIDA.</b> , — 03 de  Marzo de  1992.  Dirección:  Cantón El Carrizal,  Zona  Arriba,  Caserío Sabanita, Nahuizalco. Días  y horas de  reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m.  Miembros asistentes: 10 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow135 = new google.maps.InfoWindow({ content: contentString135 }); 
	//markers  
	var marker135 = new google.maps.Marker({ position: point135, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "135.CAMBIO DE VIDA." }); 
	//information for  
	function goToLink135() { infowindow135.open(map,marker135);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker135, 'click', goToLink135); google.maps.event.addDomListener(window, 'load', initialize);
	
	//MARCADOR 136  //positions 
	var point136 = new google.maps.LatLng(13.781333, -89.735664); var contentString136 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">CON PASO FIRME 05 DE ABRIL.</h1>'+ '<div id="bodyContent">'+ '<p><b>CON PASO FIRME 05 DE ABRIL.</b> , — 05 de Abril de 2011. Dirección: Villa San  Antonio,   sobre 3ª  Calle  Oriente Barrio  Las  Mercedes, Nahuizalco. Días y horas de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.  Miembros asistentes: 12 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow136 = new google.maps.InfoWindow({ content: contentString136 }); 
	//markers  
	var marker136 = new google.maps.Marker({ position: point136, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "136.CON PASO FIRME 05 DE ABRIL." }); 
	//information for  
	function goToLink136() { infowindow136.open(map,marker136);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker136, 'click', goToLink136); google.maps.event.addDomListener(window, 'load', initialize);
	
	//MARCADOR 137  //positions 
	var point137 = new google.maps.LatLng(13.781271, -89.739334); var contentString137 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">LIMPIEZA INTERIOR.</h1>'+ '<div id="bodyContent">'+ '<p><b>LIMPIEZA INTERIOR.</b> , —  07  de  Abril de  2012.  Dirección:  Cantón Sabána  Grande,  Zona   Centro,  Nahuizalco, entre  La  1ª   Iglesia Bautista y La canchita de fútbol. Días y horas de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.  Miembros asistentes: 8 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow137 = new google.maps.InfoWindow({ content: contentString137 }); 
	//markers  
	var marker137 = new google.maps.Marker({ position: point137, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "137.LIMPIEZA INTERIOR." }); 
	//information for  
	function goToLink137() { infowindow137.open(map,marker137);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker137, 'click', goToLink137); google.maps.event.addDomListener(window, 'load', initialize);
	
	//MARCADOR 138  //positions 
	var point138 = new google.maps.LatLng(13.773518, -89.736727); var contentString138 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">RENACER EN EL SIGLO XXI.</h1>'+ '<div id="bodyContent">'+ '<p><b>RENACER EN EL SIGLO XXI.</b> , — 27 de  Enero  de  2008.  Dirección: Cantón El Carrizal, Zona Sur, Nahuizalco. Días y horas  de reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m.  Miembros asistentes: 24 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow138 = new google.maps.InfoWindow({ content: contentString138 });   
	//markers  
	var marker138 = new google.maps.Marker({ position: point138, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "138.RENACER EN EL SIGLO XXI." }); 
	//information for  
	function goToLink138() { infowindow138.open(map,marker138);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker138, 'click', goToLink138); google.maps.event.addDomListener(window, 'load', initialize);
	
	//MARCADOR 139  //positions 
	var point139 = new google.maps.LatLng(13.775164, -89.739495); var contentString139 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">SALVEMOS UNA VIDA.</h1>'+ '<div id="bodyContent">'+ '<p><b>SALVEMOS UNA VIDA.</b> , — 01 de  Julio de  1993.  Dirección:  Cantón El Carrizal,  Nahuizalco. Días  y  horas   de   reuniones: De  Lunes  a Domingo de 6:00 a 8:00 p.m.  Miembros asistentes: 3 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow139 = new google.maps.InfoWindow({ content: contentString139 }); 
	//markers  
	var marker139 = new google.maps.Marker({ position: point139, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "139.SALVEMOS UNA VIDA." }); 
	//information for  
	function goToLink139() { infowindow139.open(map,marker139);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker139, 'click', goToLink139); google.maps.event.addDomListener(window, 'load', initialize);
	
	//MARCADOR 140  //positions 
	var point140 = new google.maps.LatLng(13.776905, -89.738829); var contentString140 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">SAN  JUAN  BAUTISTA.</h1>'+ '<div id="bodyContent">'+ '<p><b>SAN  JUAN  BAUTISTA.</b> , — 02  de  Noviembre de  1964.  Dirección: 3ª  Avenida   Sur,  Barrio  El Calvario,  Nahuizalco. Días  y  horas   de reuniones: De  Lunes  a  Domingo de  7:00  a  9:00  p.m.  Miembros asistentes: 12 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow140 = new google.maps.InfoWindow({ content: contentString140 });  
	//markers  
	var marker140 = new google.maps.Marker({ position: point140, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "140.SAN  JUAN  BAUTISTA." });
	//information for  
	function goToLink140() { infowindow140.open(map,marker140);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker140, 'click', goToLink140); google.maps.event.addDomListener(window, 'load', initialize);
	
	//MARCADOR 141  //positions 
	var point141 = new google.maps.LatLng(13.779885, -89.737327); var contentString141 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">SERENIDAD.</h1>'+ '<div id="bodyContent">'+ '<p><b>SERENIDAD.</b> , — 06 de  Agosto de  1976.  Dirección:  Cantón Pushtan Zona  Centro, Nahuizalco. Días  y horas  de  reuniones: De  Lunes  a Domingo de 6:00 a 8:00 p.m.  Miembros asistentes: 16 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow141 = new google.maps.InfoWindow({ content: contentString141 });  
	//markers  
	var marker141 = new google.maps.Marker({ position: point141, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "141.SERENIDAD." }); 
	//information for  
	function goToLink141() { infowindow141.open(map,marker141);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker141, 'click', goToLink141); google.maps.event.addDomListener(window, 'load', initialize);
	
	//MARCADOR 142  //positions
	var point142 = new google.maps.LatLng(13.777144, -89.741501); var contentString142 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UN MILAGRO EN EL CERRITO.</h1>'+ '<div id="bodyContent">'+ '<p><b>UN MILAGRO EN EL CERRITO.</b> , —  13 de Enero de 2007. Dirección: Carretera a  Ahuachapán, Km. 70  Colonia  El Cerrito,  Nahuizalco. Días y horas  de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m. Miembros asistentes: 6 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow142 = new google.maps.InfoWindow({ content: contentString142 });  
	//markers  
	var marker142 = new google.maps.Marker({ position: point142, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "142.UN MILAGRO EN EL CERRITO." }); 
	//information for  
	function goToLink142() { infowindow142.open(map,marker142);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker142, 'click', goToLink142); google.maps.event.addDomListener(window, 'load', initialize);
	
	//MARCADOR 143  //positions 
	var point143 = new google.maps.LatLng(13.781854, -89.740578); var contentString143 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UN  MILAGRO EN  LAS  MERCEDES.</h1>'+ '<div id="bodyContent">'+ '<p><b>UN  MILAGRO EN  LAS  MERCEDES.</b> , — 24  de   Julio   de   1981. Dirección:  5ª  Avenida  Norte, Barrio  La Trinidad,  Nahuizalco. Días y horas  de  reuniones: De  Lunes  a  Domingo de  7:00  a  9:00  p.m. Miembros asistentes: 13 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow143 = new google.maps.InfoWindow({ content: contentString143 }); 
	//markers  
	var marker143 = new google.maps.Marker({ position: point143, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "143.UN  MILAGRO EN  LAS  MERCEDES." });
	//information for  
	function goToLink143() { infowindow143.open(map,marker143);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker143, 'click', goToLink143); google.maps.event.addDomListener(window, 'load', initialize);
	
	//MARCADOR 144  //positions 
	var point144 = new google.maps.LatLng(13.773935, -89.739280); var contentString144 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UNA  LUZ ENTRE LOS JÓVENES.</h1>'+ '<div id="bodyContent">'+ '<p><b>UNA  LUZ ENTRE LOS JÓVENES.</b> , — 20 de  Septiembre de  2010. Dirección:  Cantón El Carrizal, Zona Centro, Nahuizalco. Días y horas de  reuniones: De Lunes a Domingo de  6:00 a 8:00 p.m.  Miembros asistentes: 5 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow144 = new google.maps.InfoWindow({ content: contentString144 }); 
	//markers  
	var marker144 = new google.maps.Marker({ position: point144, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "144.UNA  LUZ ENTRE LOS JÓVENES." }); 
	//information for  
	function goToLink144() { infowindow144.open(map,marker144);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker144, 'click', goToLink144); google.maps.event.addDomListener(window, 'load', initialize);

	
	//MARCADOR 145  //positions 
	var point145 = new google.maps.LatLng(13.704785, -89.715021); var contentString145 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UN MILAGRO DE DIOS.</h1>'+ '<div id="bodyContent">'+ '<p><b>UN MILAGRO DE DIOS.</b> , — 01 de Julio de 1992. Dirección: Avenida 23  de  Noviembre,  Barrio  Santiago,  Nahulingo. Días  y  horas   de reuniones: De  Lunes  a  Domingo de  6:30  a  8:30  p.m.  Miembros asistentes: 17 Hombres y 2 Mujeres.</p>'+ '</div>'+ '</div>'; var infowindow145 = new google.maps.InfoWindow({ content: contentString145 }); 
	//markers  
	var marker145 = new google.maps.Marker({ position: point145, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "145.UN MILAGRO DE DIOS." });
	//information for  
	function goToLink145() { infowindow145.open(map,marker145);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker145, 'click', goToLink145); google.maps.event.addDomListener(window, 'load', initialize);

	
	//MARCADOR 146  //positions 
	var point146 = new google.maps.LatLng(13.829232, -89.758239); var contentString146 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">RESURRECCIÓN</h1>'+ '<div id="bodyContent">'+ '<p><b>RESURRECCIÓN</b> , .— 06 de  Agosto de  1965.  Dirección:  1ª Avenida Sur,  50  metros al Sur de  La Alcaldía  Municipal,  Barrio  El Rosario Salcoatitán. Días y horas de reuniones: De Lunes a Domingo de 6:30 a 8:30 p.m.  Miembros asistentes: 5 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow146 = new google.maps.InfoWindow({ content: contentString146 }); 
	//markers  
	var marker146 = new google.maps.Marker({ position: point146, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "146.RESURRECCIÓN" }); 
	//information for  
	function goToLink146() { infowindow146.open(map,marker146);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker146, 'click', goToLink146); google.maps.event.addDomListener(window, 'load', initialize);
	
	
	//MARCADOR 147  //positions
	var point147 = new google.maps.LatLng(13.720018, -89.738882); var contentString147 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NUESTRO PODER SUPERIOR</h1>'+ '<div id="bodyContent">'+ '<p><b>NUESTRO PODER SUPERIOR</b> , .— 15 de  Junio  de  1978.  Dirección: Cantón San  Ramón,   Zona  Arriba,  San  Antonio   del  Monte.  Días y horas  de  reuniones: De  Lunes  a  Domingo de  6:00  a  8:00  p.m. Miembros asistentes: 12 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow147 = new google.maps.InfoWindow({ content: contentString147 }); 
	//markers  
	var marker147 = new google.maps.Marker({ position: point147, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "147.NUESTRO PODER SUPERIOR" }); 
	//information for  
	function goToLink147() { infowindow147.open(map,marker147);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker147, 'click', goToLink147); google.maps.event.addDomListener(window, 'load', initialize);
	
	//MARCADOR 148  //positions 
	var point148 = new google.maps.LatLng(13.717777, -89.738721); var contentString148 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UN MILAGRO 13 DE MARZO.</h1>'+ '<div id="bodyContent">'+ '<p><b>UN MILAGRO 13 DE MARZO.</b> , — 13 de Marzo de 2004.  Dirección: Cantón San  Ramón,   Zona  Abajo,   San  Antonio   del  Monte.  Días y horas  de  reuniones: De  Lunes  a  Domingo de  6:00  a  8:00  p.m. Miembros asistentes: 10 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow148 = new google.maps.InfoWindow({ content: contentString148 }); 
	//markers  
	var marker148 = new google.maps.Marker({ position: point148, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "148.UN MILAGRO 13 DE MARZO." }); 
	//information for  
	function goToLink148() { infowindow148.open(map,marker148);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker148, 'click', goToLink148); google.maps.event.addDomListener(window, 'load', initialize);
	
	//MARCADOR 149  //positions 
	var point149 = new google.maps.LatLng(13.719341, -89.738721); var contentString149 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UNA LUZ EN LAS TINIEBLAS</h1>'+ '<div id="bodyContent">'+ '<p><b>UNA LUZ EN LAS TINIEBLAS</b> , .— 20 de  Marzo de  2012.  Dirección: Cantón San  Ramón,   Zona  Arriba,  San  Antonio   del  Monte.  Días y horas  de  reuniones: De  Lunes  a  Domingo de  6:00  a  8:00  p.m. Miembros asistentes: 5 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow149 = new google.maps.InfoWindow({ content: contentString149 }); 
	//markers  
	var marker149 = new google.maps.Marker({ position: point149, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "149.UNA LUZ EN LAS TINIEBLAS" }); 
	//information for  
	function goToLink149() { infowindow149.open(map,marker149);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker149, 'click', goToLink149); google.maps.event.addDomListener(window, 'load', initialize);
	
	
	//MARCADOR 150  //positions 
	var point150 = new google.maps.LatLng(13.625342, -89.790191); var contentString150 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">29  DE MAYO.</h1>'+ '<div id="bodyContent">'+ '<p><b>29  DE MAYO.</b> , — 29  de  Mayo  de  2006.  Dirección:  Caserío Casco de  La Hacienda, Cantón Los Lagartos, San Julián.  Días y horas  de reuniones: De  Lunes  a  Domingo de  6:00  a  8:00  p.m.  Miembros asistentes: 9 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow150 = new google.maps.InfoWindow({ content: contentString150 });  
	//markers  
	var marker150 = new google.maps.Marker({ position: point150, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "150.29  DE MAYO." }); 
	//information for  
	function goToLink150() { infowindow150.open(map,marker150);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker150, 'click', goToLink150); google.maps.event.addDomListener(window, 'load', initialize);
	
	
	//MARCADOR 151  //positions 
	var point151 = new google.maps.LatLng(13.788487, -89.766347); var contentString151 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">LA FE DE HOY.</h1>'+ '<div id="bodyContent">'+ '<p><b>LA FE DE HOY.</b> , — 28 de  Octubre de  1976.  Dirección:  4ª Avenida Norte, Barrio El Rosario,  Santa  Catarina Masahuat. Días y horas  de reuniones: De  Lunes  a  Domingo de  7:00  a  9:00  p.m.  Miembros asistentes: 15 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow151 = new google.maps.InfoWindow({ content: contentString151 });  
	//markers  
	var marker151 = new google.maps.Marker({ position: point151, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "151.LA FE DE HOY." });
	//information for  
	function goToLink151() { infowindow151.open(map,marker151);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker151, 'click', goToLink151); google.maps.event.addDomListener(window, 'load', initialize);
	
	
	//MARCADOR 152  //positions 
	var point152 = new google.maps.LatLng(13.617287, -89.581822); var contentString152 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">DESPERTAR DEL HOMBRE.</h1>'+ '<div id="bodyContent">'+ '<p><b>DESPERTAR DEL HOMBRE.</b> , — 16  de  Marzo  de  2004.  Dirección: Cantón Atiluya, Carretera entre Ishuatán y San Julián,  Santa  Isabel Ishuatán. Días y horas  de reuniones: De Lunes a Domingo de 7:00 a 9:00 p.m.  Miembros asistentes: 5 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow152 = new google.maps.InfoWindow({ content: contentString152 }); 
	//markers  
	var marker152 = new google.maps.Marker({ position: point152, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "152.DESPERTAR DEL HOMBRE." }); 
	//information for  
	function goToLink152() { infowindow152.open(map,marker152);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker152, 'click', goToLink152); google.maps.event.addDomListener(window, 'load', initialize);
	
	//MARCADOR 153  //positions 
	var point153 = new google.maps.LatLng(13.616829, -89.583539); var contentString153 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">LUZ Y ESPERANZA.</h1>'+ '<div id="bodyContent">'+ '<p><b>LUZ Y ESPERANZA.</b> , — 01 de  Febrero de  2012.  Dirección:  Colonia La Sabána, Cantón Apancoyo, Santa  Isabel  Ishuatán. Días y horas de  reuniones: De Lunes a Domingo de  6:30 a 8:30 p.m.  Miembros asistentes: 6 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow153 = new google.maps.InfoWindow({ content: contentString153 }); 
	//markers  
	var marker153 = new google.maps.Marker({ position: point153, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "153.LUZ Y ESPERANZA." }); 
	//information for  
	function goToLink153() { infowindow153.open(map,marker153);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker153, 'click', goToLink153); google.maps.event.addDomListener(window, 'load', initialize);
	
	//MARCADOR 154  //positions 
	var point154 = new google.maps.LatLng(13.612793, -89.585776); var contentString154 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">SOLO DIOS CONMIGO.</h1>'+ '<div id="bodyContent">'+ '<p><b>SOLO DIOS CONMIGO.</b> , —  13  de  Diciembre de  2011.  Dirección: Carretera Litoral,  Caserío Linda  Vista,  Cantón Las Piedras, Santa Isabel Ishuatán. Días y horas  de reuniones: De Lunes a Domingo de 7:00 a 9:00 p.m.  Miembros asistentes: 15 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow154 = new google.maps.InfoWindow({ content: contentString154 });  
	//markers  
	var marker154 = new google.maps.Marker({ position: point154, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "154.SOLO DIOS CONMIGO." }); 
	//information for  
	function goToLink154() { infowindow154.open(map,marker154);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker154, 'click', goToLink154); google.maps.event.addDomListener(window, 'load', initialize);
	
	//MARCADOR 155  //positions 
	var point155 = new google.maps.LatLng(13.614503, -89.585025); var contentString155 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UN  NUEVO  AMANECER.</h1>'+ '<div id="bodyContent">'+ '<p><b>UN  NUEVO  AMANECER.</b> , — 22  de  Agosto de  1981.  Dirección: Avenida  Gerardo Barrios, Barrio El Calvario,  Santa  Isabel  Ishuatán. Días y horas  de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m. Miembros asistentes: 13 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow155 = new google.maps.InfoWindow({ content: contentString155 }); 
	//markers  
	var marker155 = new google.maps.Marker({ position: point155, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "155.UN  NUEVO  AMANECER." }); 
	//information for  
	function goToLink155() { infowindow155.open(map,marker155);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker155, 'click', goToLink155); google.maps.event.addDomListener(window, 'load', initialize);
	
	
	//MARCADOR 156  //positions 
	var point156 = new google.maps.LatLng(13.714183, -89.797289); var contentString156 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">MI ÚNICA ESPERANZA</h1>'+ '<div id="bodyContent">'+ '<p><b>MI ÚNICA ESPERANZA</b> , 01 de  Mayo de  1974.  Dirección:  Calle al Cantón El Zope,  50 metros al Sur del Desvío  de  Santo  Domingo de  Guzmán. Días y horas  de  reuniones: De  Lunes  a Domingo de 7:00 a 9:00 p.m.  Miembros asistentes: 8 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow156 = new google.maps.InfoWindow({ content: contentString156 });  
	//markers 
	var marker156 = new google.maps.Marker({ position: point156, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "156.MI ÚNICA ESPERANZA" });
	//information for  
	function goToLink156() { infowindow156.open(map,marker156);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker156, 'click', goToLink156); google.maps.event.addDomListener(window, 'load', initialize);
	
	
	//MARCADOR 157  //positions 
	var point157 = new google.maps.LatLng(13.712212, -89.724741); var contentString157 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">AMANECER 1º DE AGOSTO.</h1>'+ '<div id="bodyContent">'+ '<p><b>AMANECER 1º DE AGOSTO.</b> , — 01 de Agosto de 1988.  Dirección: Lote  Nº 51, Block H, Colonia  EL Mirador,  San Antonio  del  Monte. Días y horas  de reuniones: De Lunes a Domingo de 7:00 a 9:00 p.m. Miembros asistentes: 3 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow157 = new google.maps.InfoWindow({ content: contentString157 }); 
	//markers  
	var marker157 = new google.maps.Marker({ position: point157, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "157.AMANECER 1º DE AGOSTO." }); 
	//information for  
	function goToLink157() { infowindow157.open(map,marker157);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker157, 'click', goToLink157); google.maps.event.addDomListener(window, 'load', initialize);
	
	//MARCADOR 158  //positions 
	var point158 = new google.maps.LatLng(13.716031, -89.719570); var contentString158 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">ANGÉLICA.</h1>'+ '<div id="bodyContent">'+ '<p><b>ANGÉLICA.</b> , — 25 de  Mayo de  1976.  Dirección:  20ª Avenida  Norte Nº 1-5 por  La 1ª Calle Oriente, Colonia  Angélica, Sonsonate.  Días y horas  de  reuniones: De  Lunes  a  Domingo de  7:00  a  9:00  p.m. Miembros asistentes: 10 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow158 = new google.maps.InfoWindow({ content: contentString158 });  
	//markers  
	var marker158 = new google.maps.Marker({ position: point158, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "158.ANGÉLICA." });
	//information for  
	function goToLink158() { infowindow158.open(map,marker158);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker158, 'click', goToLink158); google.maps.event.addDomListener(window, 'load', initialize);
	
	//MARCADOR 159  //positions 
	var point159 = new google.maps.LatLng(13.725401, -89.725836); var contentString159 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">ATONALT.</h1>'+ '<div id="bodyContent">'+ '<p><b>ATONALT.</b> , — 05  de  Marzo  de  1982.  Dirección:  Final  3ª  Avenida Norte  Nº 6-3, Jicalapita, Barrio Mejicanos, Sonsonate. Días y horas de  reuniones: De Lunes a Domingo de  7:00 a 9:00 p.m.  Miembros asistentes: 4 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow159 = new google.maps.InfoWindow({ content: contentString159 }); 
	//markers  
	var marker159 = new google.maps.Marker({ position: point159, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "159.ATONALT." }); 
	//information for  
	function goToLink159() { infowindow159.open(map,marker159);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker159, 'click', goToLink159); google.maps.event.addDomListener(window, 'load', initialize);
	
	//MARCADOR 160  //positions 
	var point160 = new google.maps.LatLng(13.726280, -89.722458); var contentString160 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">CENTRAL COLONIA  14.</h1>'+ '<div id="bodyContent">'+ '<p><b>CENTRAL COLONIA  14.</b> , —   15  de   Agosto de   1986.   Dirección: Avenida Fabián Mucci Nº 9-2, esquina opuesta a La 15ª Calle Oriente, Colonia  14  de  Diciembre, Sonsonate. Días  y horas  de  reuniones: De Lunes a Domingo de  7:00 a 9:00 p.m.  Miembros asistentes: 12 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow160 = new google.maps.InfoWindow({ content: contentString160 }); 
	//markers  
	var marker160 = new google.maps.Marker({ position: point160, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "160.CENTRAL COLONIA  14." }); 
	//information for  
	function goToLink160() { infowindow160.open(map,marker160);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker160, 'click', goToLink160); google.maps.event.addDomListener(window, 'load', initialize);
	
	//MARCADOR 161  //positions 
	var point161 = new google.maps.LatLng(13.727523, -89.729387); var contentString161 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">CUENTO  CONTIGO.</h1>'+ '<div id="bodyContent">'+ '<p><b>CUENTO  CONTIGO.</b> , —  28  de   Octubre  de   2003.   Dirección:   1ª Avenida  Norte  Nº 51 Colonia  San Genaro, Sonsonate. Días y horas de  reuniones: De Lunes a Domingo de  7:00 a 9:00 p.m.  Miembros asistentes: 8 Hombres y 1 Mujer.</p>'+ '</div>'+ '</div>'; var infowindow161 = new google.maps.InfoWindow({ content: contentString161 });  
	//markers  
	var marker161 = new google.maps.Marker({ position: point161, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "161.CUENTO  CONTIGO." }); 
	//information for  
	function goToLink161() { infowindow161.open(map,marker161);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker161, 'click', goToLink161); google.maps.event.addDomListener(window, 'load', initialize);
	
	//MARCADOR 162  //positions 
	var point162 = new google.maps.LatLng(13.726875, -89.720372); var contentString162 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">EL ÁNGEL.</h1>'+ '<div id="bodyContent">'+ '<p><b>EL ÁNGEL.</b> , — 13 de  Febrero de  1963.  Dirección:  6ª Avenida  Norte Nº 2-3 Barrio El Ángel,  Sonsonate. Días y horas  de  reuniones: De Lunes  a  Domingo de  7:00  a  9:00  p.m.  Miembros asistentes:  12 Hombres y 1 Mujer.</p>'+ '</div>'+ '</div>'; var infowindow162 = new google.maps.InfoWindow({ content: contentString162 });  
	//markers  
	var marker162 = new google.maps.Marker({ position: point162, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "162.EL ÁNGEL." }); 
	//information for  
	function goToLink162() { infowindow162.open(map,marker162);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker162, 'click', goToLink162); google.maps.event.addDomListener(window, 'load', initialize);
	
	//MARCADOR 163  //positions 
	var point163 = new google.maps.LatLng(13.719391, -89.731850); var contentString163 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">FE EN LA ACCIÓN.</h1>'+ '<div id="bodyContent">'+ '<p><b>FE EN LA ACCIÓN.</b> , — 15 de  Febrero de  1972.  Dirección:  8ª Calle Poniente Nº 4-2, Colonia  San Antonio,  Sonsonate. Días y horas  de reuniones: De  Lunes  a  Domingo de  7:00  a  9:00  p.m.  Miembros asistentes: 8 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow163 = new google.maps.InfoWindow({ content: contentString163 });  
	//markers  
	var marker163 = new google.maps.Marker({ position: point163, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "163.FE EN LA ACCIÓN." });
	//information for  
	function goToLink163() { infowindow163.open(map,marker163);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker163, 'click', goToLink163); google.maps.event.addDomListener(window, 'load', initialize);
	
	//MARCADOR 164  //positions 
	var point164 = new google.maps.LatLng(13.704727, -89.731125); var contentString164 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">LA NUEVA VIDA LA ENCONTRÉ EN A.A.</h1>'+ '<div id="bodyContent">'+ '<p><b>LA NUEVA VIDA LA ENCONTRÉ EN A.A.</b> , — 02 de Mayo de 1981. Dirección:   Caserío  Medina  Luna,  Cantón  EL Presídio,   Carretera Litoral, Sonsonate. Días y horas  de reuniones: De Lunes a Domingo de 6:00 a 8:00 p.m.  Miembros asistentes: 7 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow164 = new google.maps.InfoWindow({ content: contentString164 });  
	//markers  
	var marker164 = new google.maps.Marker({ position: point164, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "164.LA NUEVA VIDA LA ENCONTRÉ EN A.A." }); 
	//information for  
	function goToLink164() { infowindow164.open(map,marker164);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker164, 'click', goToLink164); google.maps.event.addDomListener(window, 'load', initialize);
	
	//MARCADOR 165  //positions 
	var point165 = new google.maps.LatLng(13.726556, -89.721644); var contentString165 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">LAS 24  HORAS.</h1>'+ '<div id="bodyContent">'+ '<p><b>LAS 24  HORAS.</b> , —  16  de  Octubre de  1958.  Dirección:  Avenida Carlos  Sandoval Langenegger (5ª Avenida  Norte)  Nº 3-9, Barrio El Pilar, Sonsonate. Días y horas de reuniones: De Lunes a Domingo de 7:00 a 9:00 p.m.  Miembros asistentes: 8 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow165 = new google.maps.InfoWindow({ content: contentString165 }); 
	//markers  
	var marker165 = new google.maps.Marker({ position: point165, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "165.LAS 24  HORAS." });
	//information for  
	function goToLink165() { infowindow165.open(map,marker165);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker165, 'click', goToLink165); google.maps.event.addDomListener(window, 'load', initialize);
	
	//MARCADOR 166  //positions 
	var point166 = new google.maps.LatLng(13.709392, -89.731610); var contentString166 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NUEVA VIDA (INSTITUCIONAL).</h1>'+ '<div id="bodyContent">'+ '<p><b>NUEVA VIDA (INSTITUCIONAL).</b> , — 30 de Mayo de 1978. Dirección: 6ª Avenida Sur Nº 3—1, Barrio El Ángel, Sonsonate, Centro Penal de Sonsonate. Días y horas de reuniones: Todos Los días en Los recintos A, B y C, de 1:30 a 3:30 p.m.  Miembros asistentes: 38 Hombres</p>'+ '</div>'+ '</div>'; var infowindow166 = new google.maps.InfoWindow({ content: contentString166 });  
	//markers  
	var marker166 = new google.maps.Marker({ position: point166, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "166.NUEVA VIDA (INSTITUCIONAL)." }); 
	//information for  
	function goToLink166() { infowindow166.open(map,marker166);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker166, 'click', goToLink166); google.maps.event.addDomListener(window, 'load', initialize);
	
	//MARCADOR 167  //positions 
	var point167 = new google.maps.LatLng(13.706302, -89.731318); var contentString167 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">NUEVO RENACER EN TAWÍLL, 1º DE AGOSTO.</h1>'+ '<div id="bodyContent">'+ '<p><b>NUEVO RENACER EN TAWÍLL, 1º DE AGOSTO.</b> , — 01 de  Agosto de  1990.  Dirección:  Cooperativa San  Luis Tawill, Carretera  Litoral, Cantón Tonalá,  Sonsonate. Días y horas  de  reuniones: De Lunes  a Domingo de 6:00 a 8:00 p.m.  Miembros asistentes: 16 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow167 = new google.maps.InfoWindow({ content: contentString167 });  
	//markers  
	var marker167 = new google.maps.Marker({ position: point167, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "167.NUEVO RENACER EN TAWÍLL, 1º DE AGOSTO." });
	//information for  
	function goToLink167() { infowindow167.open(map,marker167);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker167, 'click', goToLink167); google.maps.event.addDomListener(window, 'load', initialize);
	
	//MARCADOR 168  //positions 
	var point168 = new google.maps.LatLng(13.716458, -89.720321); var contentString168 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">MOVIMIENTO ANTI—ALCOHÓLICO.</h1>'+ '<div id="bodyContent">'+ '<p><b>MOVIMIENTO ANTI—ALCOHÓLICO.</b> , — 12 de  Octubre de  2013. Dirección:  1ª  Calle  Oriente por  La 18ª  Avenida  Norte, comercial Génesis local  No  5 Colonia  Angélica, Sonsonate.  Días  y horas  de reuniones: De  Lunes  a  Domingo de  7:00  a  9:00  p.m.  Miembros asistentes: 15 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow168 = new google.maps.InfoWindow({ content: contentString168 });  
	//markers  
	var marker168 = new google.maps.Marker({ position: point168, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "168.MOVIMIENTO ANTI—ALCOHÓLICO." }); 
	//information for  
	function goToLink168() { infowindow168.open(map,marker168);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker168, 'click', goToLink168); google.maps.event.addDomListener(window, 'load', initialize);
	
	//MARCADOR 169  //positions 
	var point169 = new google.maps.LatLng(13.722457, -89.729161); var contentString169 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">REHABILITACIÓN 03 DE JULIO (INSTITUCIONAL).</h1>'+ '<div id="bodyContent">'+ '<p><b>REHABILITACIÓN 03 DE JULIO (INSTITUCIONAL).</b> , — 03 de Julio de  2014.  Dirección:  Hospital  Nacional  Dr. Jorge Mazzini Villacorta, Calle  Masferrer  Poniente Nº  3-1  Barrio San  Francisco,  Sonsonate. Días  y horas  de  reuniones: Jueves y Viernes  de  2:00  a 4:00  p.m. Miembros asistentes: 20 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow169 = new google.maps.InfoWindow({ content: contentString169 }); 
	//markers  
	var marker169 = new google.maps.Marker({ position: point169, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "169.REHABILITACIÓN 03 DE JULIO (INSTITUCIONAL)." });
	//information for  
	function goToLink169() { infowindow169.open(map,marker169);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker169, 'click', goToLink169); google.maps.event.addDomListener(window, 'load', initialize);
	
	//MARCADOR 170  //positions 
	var point170 = new google.maps.LatLng(13.723804, -89.731901); var contentString170 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">SENDERO DE VIDA</h1>'+ '<div id="bodyContent">'+ '<p><b>SENDERO DE VIDA</b> , .— 27  de  Julio  de  1977.  Dirección:  1ª  Calle Poniente Nº 5-1, Barrio San Francisco,  Sonsonate. Días y horas  de reuniones: De  Lunes  a  Domingo de  7:00  a  9:00  p.m.  Miembros asistentes: 8 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow170 = new google.maps.InfoWindow({ content: contentString170 }); 
	//markers  
	var marker170 = new google.maps.Marker({ position: point170, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "170.SENDERO DE VIDA" });
	//information for  
	function goToLink170() { infowindow170.open(map,marker170);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker170, 'click', goToLink170); google.maps.event.addDomListener(window, 'load', initialize);
	
	//MARCADOR 171  //positions 
	var point171 = new google.maps.LatLng(13.711226, -89.730910); var contentString171 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">SENSUNAPÁN.</h1>'+ '<div id="bodyContent">'+ '<p><b>SENSUNAPÁN.</b> , —  26  de   Septiembre de   1977.   Dirección:   Calle Acaxual Casa Nº 56, Colonia  Sensunapán I, Sonsonate. Días y horas de  reuniones: De Lunes a Domingo de  7:00 a 9:00 p.m.  Miembros asistentes: 8 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow171 = new google.maps.InfoWindow({ content: contentString171 });  
	//markers  
	var marker171 = new google.maps.Marker({ position: point171, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "171.SENSUNAPÁN." }); 
	//information for  
	function goToLink171() { infowindow171.open(map,marker171);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker171, 'click', goToLink171); google.maps.event.addDomListener(window, 'load', initialize);
	
	//MARCADOR 172  //positions 
	var point172 = new google.maps.LatLng(13.719231, -89.730369); var contentString172 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">UN PILAR DE SALVACIÓN.</h1>'+ '<div id="bodyContent">'+ '<p><b>UN PILAR DE SALVACIÓN.</b> , — 21 de  Mayo de  1974.  Dirección:  7ª Calle  Poniente Nº  4-9  Bis., esquina opuesta a  La Avenida  Carlos Sandoval Langenegger, Barrio El Pilar, Sonsonate. Días y horas  de reuniones: De  Lunes  a  Domingo de  7:00  a  9:00  p.m.  Miembros asistentes: 15 Hombres y 1 Mujer.</p>'+ '</div>'+ '</div>'; var infowindow172 = new google.maps.InfoWindow({ content: contentString172 });   
	//markers  
	var marker172 = new google.maps.Marker({ position: point172, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "172.UN PILAR DE SALVACIÓN." }); 
	//information for  
	function goToLink172() { infowindow172.open(map,marker172);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker172, 'click', goToLink172); google.maps.event.addDomListener(window, 'load', initialize);
	
	//MARCADOR 173  //positions 
	var point173 = new google.maps.LatLng(13.721456, -89.714613); var contentString173 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">ZENZONTLATH.</h1>'+ '<div id="bodyContent">'+ '<p><b>ZENZONTLATH.</b> , — 06 de  Septiembre de  1975.  Dirección:  2ª Calle Oriente Nº 1-13,  Colonia  Santa  Marta,  Sonsonate. Días y horas  de reuniones: De  Lunes  a  Domingo de  7:00  a  9:00  p.m.  Miembros asistentes: 18 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow173 = new google.maps.InfoWindow({ content: contentString173 }); 
	//markers  
	var marker173 = new google.maps.Marker({ position: point173, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "173.ZENZONTLATH." }); 
	//information for  
	function goToLink173() { infowindow173.open(map,marker173);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker173, 'click', goToLink173); google.maps.event.addDomListener(window, 'load', initialize);
	
	
	//MARCADOR 174  //positions 
	var point174 = new google.maps.LatLng(13.736362, -89.714828); var contentString174 = '<div id="content">'+ '<div id="siteNotice">'+ '</div>'+ '<h1 id="firstHeading"class="firstHeading">12  DE OCTUBRE.</h1>'+ '<div id="bodyContent">'+ '<p><b>12  DE OCTUBRE.</b> , — 12 de  Octubre de  1964.  Dirección:  Local Nº 2, 2ª planta, Calle Principal frente  a Oficina Parroquial de  La Iglesia Católica, Sonzacate. Días y horas de reuniones: De Lunes a Domingo de 7:00 a 9:00 p.m.  Miembros asistentes: 10 Hombres.</p>'+ '</div>'+ '</div>'; var infowindow174 = new google.maps.InfoWindow({ content: contentString174 }); 
	//markers  
	var marker174 = new google.maps.Marker({ position: point174, map: map, category: cook, icon: cook, animation: google.maps.Animation.DROP, title: "174.12  DE OCTUBRE." }); 
	//information for  
	function goToLink174() { infowindow174.open(map,marker174);  if (marker.getAnimation() != null) { marker.setAnimation(null); } else { marker.setAnimation (google.maps.Animation.BOUNCE); } } google.maps.event.addListener(marker174, 'click', goToLink174); google.maps.event.addDomListener(window, 'load', initialize);
   
	
}