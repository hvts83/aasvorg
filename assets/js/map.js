var w = 1000;
var h = 546;
var rsr = Raphael('map');
rsr.setViewBox(0,0,w,h,true);
rsr.setSize('100%', '100%');



var regions = [];

var clickSanmiguel = function(){
	window.location.href = "http://aaelsalvador.org/Map/SanMiguel.html";
};
var clicklaunion = function(){
	window.location.href = "http://aaelsalvador.org/Map/LaUnion.html";
};
var clicksansalvador = function(){
	window.location.href = "http://aaelsalvador.org/Map/SanSalvador.html";
};
var clicksonsonate = function(){
	window.location.href = "http://aaelsalvador.org/Map/Sonsonate.html";
};
var clicksantaana = function(){
	window.location.href = "http://aaelsalvador.org/Map/SantaAna.html";
};
var clickahuachapan = function(){
	window.location.href = "http://aaelsalvador.org/Map/Ahuachapan.html";
};
var clicklalibertad = function(){
	window.location.href = "http://aaelsalvador.org/Map/LaLibertad.html";
};
var clickcuscatlan = function(){
	window.location.href = "http://aaelsalvador.org/Map/Cuscatlan.html";
};
var clickcabanas = function(){
	window.location.href = "http://aaelsalvador.org/Map/Cabanas.html";
};
var clicksanvicente = function(){
	window.location.href = "http://aaelsalvador.org/Map/SanVicente.html";
};
var clickmorazan = function(){
	window.location.href = "http://aaelsalvador.org/Map/Morazan.html";
};
var clicklapaz = function(){
	window.location.href = "http://aaelsalvador.org/Map/LaPaz.html";
};
var clickchalatenango = function(){
	window.location.href = "http://aaelsalvador.org/Map/Chalatenango.html";
};
var clickSanmiguel = function(){
	window.location.href = "http://aaelsalvador.org/Map/SanMiguel.html";
};
var clickusulutan = function(){
	window.location.href = "http://aaelsalvador.org/Map/Usulutan.html";
};
// ahuachapan
var ahuachapan = rsr.path("  M139,137L127 137 112 126 100 131.5 92 131.5 82 144 71 153 58 160 49 169 41 181 31 181 31 187 31 192 21 199 21 204 21 212.542 21 219 27 226 21 226 14 226 24 232 39 232 42 239 53 239 56 246 68 246 76.5 246 85 237 91 241 97 246 108 246 114 246 115 238 117 230 123 226 124 212.542 124 206 126 198 129 192 128 186 121 186 126 178 134 180 139 176 144 172 144 167 149 157 149 152 149 144 149 139 z");
ahuachapan.attr({fill: '#808080','stroke-width': '1','stroke-opacity': '1'});
ahuachapan.transform("m0.900176, 0, 0, 0.900176, 85.6568, 56.7095").data({'id': 'ahuachapan', 'region': 'Ahuachap&aacute;n'});
ahuachapan.click(clickahuachapan);
regions.push(ahuachapan);

// santa ana
var santaana = rsr.path("M139,137L139 126 139 115 149 107 154 95 162 90 171 90 181 83 189 83 201 77 208 77 208 66 202 66 201 56 196 48 190 48 186 48 186 39 193 33 189 26 194 19 201 19 208 19 208 25 215 19 223 19 223 13 231 13 241 13 248 8 254 8 254 16 262 18 268 23 274 29 280 34 285 39 290 44 290 50 290 55 290 61 290 67 281 68 273 72.5 274 81 272 90 261 96 248 100 245 107 243 114 242 121 239 126 237 137 242 137 253 137 247 146 247 154 248 159 242 166 231 171 231 177 231 186 231 194 231 204 224 204 224 212.542 226 216 215 212.542 200 203 193 202 186 200 178 201 172 197 167 186 158 180 149 180 139 176 144 167 149 157 154 147 149 144 z");
santaana.attr({fill: '#808080','stroke-width': '1','stroke-opacity': '1'});
santaana.transform("m0.900176, 0, 0, 0.900176, 85.6568, 56.7095").data({'id': 'santaana', 'region': 'Santa Ana '});
santaana.click(clicksantaana);
regions.push(santaana);

// Sonsonate
var sonsonate = rsr.path("M71,252L68 246 81.5 240.706 85 237 95 237 97 246 108 246 114 246 115 238 117 230 123 226 123.46 219.811 124 212.542 126 198 129 192 128 186 134 180 149 180 158 180 167 186 167 195 172 197 178 201 186 200 193 202 200 203 208 207 215 212.542 226 216 231 223 231 227 220 227 220 232 214 239 205 241 207 252 206 258 198 258 195 258 199 265 197 271 192 277 185 285 176 294 165 294 149.5 294 135 294 123 294 112 294 109 280 107 270 81.5 257 z");
sonsonate.attr({fill: '#808080','stroke-width': '1','stroke-opacity': '1'});
sonsonate.transform("m0.900176, 0, 0, 0.900176, 85.6568, 56.7095").data({'id': 'sonsonate', 'region': 'Sonsonate'});
sonsonate.click(clicksonsonate);
regions.push(sonsonate);

// chalatenango
var chalatenango = rsr.path("  M345,23v4v7l5,6h10l7,7v7v8l8,6l6,6v10h15h7v6h9h6v9l7,7v6h10h11h4h11v14h-5l5,8h6l8,7l-6,5h-12	h-8l-4,5l-4,5h-9h-5c0,0,2,7-2,7s-8,0-8,0h-7h-4h-10h-6h-8h-4l-12-7l-2-9l-6-12l-13-4l-7-5h-8h-4l-8,6h-7l-8,1l-5-7l-8,4l-8-4h-9h-9	l-6,6l-5,5h-16l2-11l3-5l1-7l5-14l9.416-2.897L266.5,93l6.488-7.447L273,72.5l8-4.5l9-1V55V44l-5-5l-11-10l-6-6l-6-5h12h9l7,8h5h8 	l6,6l6,2l9,1l8-6l5-6H345z");
chalatenango.attr({fill: '#808080','stroke-width': '1','stroke-opacity': '1'});
chalatenango.transform("m0.900176, 0, 0, 0.900176, 85.6568, 56.7095").data({'id': 'chalatenango', 'region': 'Chalatenango'});
chalatenango.click(clickchalatenango);
regions.push(chalatenango);

// lalibertad
var lalibertad = rsr.path(" M177,300h7h7h7l6,6h10.5h5.5l11-3h6l7,3h6h8h10h12l10,9h7l10,6l8,6h7v-5v-8.5h5l-5-7.5h-9h-5	l-6-6l-2-6l-2-8l4-7l-2-9l1-6l-4-5l2-7l-3-6l-6-9v-6l-5-6l5-9v-8c0,0-5-4,0-7s5-8,5-8l2-13l3-9h4l-4-8h-10v-9l-5-9l-1-6l6-5l-4-6	l-4-2h-9h-9l-3,3l-3,3l-5,5l-6,9v8l5,9l-10,3l-11,5v15v18l-7,5l2,7l5,7l-4,4h-7l-5.5,6l-0.5,6l-9,2l2,11l-1,6l-7,7l-2,6l-8.097,9.54	l-6.403,6.96L176,294L177,300z");
lalibertad.attr({fill: '#808080','stroke-width': '1','stroke-opacity': '1'});
lalibertad.transform("m0.900176, 0, 0, 0.900176, 85.6568, 56.7095").data({'id': 'lalibertad', 'region': 'La Libertad'});
lalibertad.click(clicklalibertad);
regions.push(lalibertad);

// san salvador
var sansalvador = rsr.path("M327,294L327 285 327 279 322 272 331 272 336 272 345 262 345 255 345 250 345 246 356 240 362 240 362 232 356 222 351 212.542 342 212.542 342 207 337 198 327 198 322 186 327 186 332 			180 327 176 322 170 322 158 322 151 327 140 327 133 330 126 326 126 311 132 303 133 293.2 128.4 288 131 284 139 285 145 290 163 300 163 300 171 296.077 186 293.89 196.942 290 208 290 			220 285 225 284 231 290 237 290 246 296 246 299 252 297 259 301 264 301 274.5 298 286 300 294 302 300 308 306 322 306 323 298 z");
sansalvador.attr({fill: '#808080','stroke-width': '1','stroke-opacity': '1'});
sansalvador.transform("m0.900176, 0, 0, 0.900176, 85.6568, 56.7095").data({'id': 'sansalvador', 'region': 'San Salvador'});
sansalvador.click(clicksansalvador);
regions.push(sansalvador);

// cuscatlan
var cuscatlan = rsr.path("M338,126L345 131 358 135 364 147 366 156 373 163 382 163 390 168 380 175 376 180 378 186 376 191 380 196 386 196 390 200 396 200 396 212.542 402 212.542 408 216 415 221 415 230 415 			237 415 246 408 246 401 253 396 253 396 258 390 258 384 258 380 258 376.5 252 370 246 362 240 362 232 356 222 351 212.542 342 212.542 337 198 327 198 322 186 332 180 327 176 322 158 			323 148.8 327 140 327 133 330 126 z");
cuscatlan.attr({fill: '#808080','stroke-width': '1','stroke-opacity': '1'});
cuscatlan.transform("m0.900176, 0, 0, 0.900176, 85.6568, 56.7095").data({'id': 'cuscatlan', 'region': 'Cuscatl&aacute;n'});
cuscatlan.click(clickcuscatlan);
regions.push(cuscatlan);

// cabañas
var cabañas = rsr.path("M399,163L408 169 415 169 417 163 425 163 432 156 437 156 445 151 449 146 457 146 469 146 475 141 484 141 494 141 502 148 509 155 509 158 518 155 527 163 532 163 527 174 527 186 532 192 532 200 528 212.542 520 216 519 226.5 509 226.5 497 226.5 496 216 487 216 475 216 465.5 216 457 212.542 447 212.542 440 216 433 216 427 216 420 216 415 221 408 216 402 212.542 396 208 396 200 390 200 380 196 378 186 380 175 383.221 172.745 390 168 396 163 z");
cabañas.attr({fill: '#808080','stroke-width': '1','stroke-opacity': '1'});
cabañas.transform("m0.900176, 0, 0, 0.900176, 85.6568, 56.7095").data({'id': 'cabanias', 'region': 'Cabañas'});
cabañas.click(clickcabanas);
regions.push(cabañas);

// la paz
var lapaz = rsr.path("M323,332h10l7,7l16,7l12.5,6l9.5,8l18,4l10,6l9,5l6,2v-9l4.131-3.756L432,358v-3.5l-2-5.5	c0,0,3,6,7,0s4-14,4-14l-5-8l-7-4v-11v-6v-6v-6c0,0,0,0,0-6s-7-11-7-11l-14-5v-9l-7-10l-11,5h-6l-7.5-6l-6.5-6l-8-6h-6l-14-3l3,9v9	l-4.724,12.249L336,272h-5l-14,1l10,6v15l-4,4l-1,8v7.5v8.5v5L323,332z");
lapaz.attr({fill: '#808080','stroke-width': '1','stroke-opacity': '1'});
lapaz.transform("m0.900176, 0, 0, 0.900176, 85.6568, 56.7095").data({'id': 'lapaz', 'region': 'La Paz'});
lapaz.click(clicklapaz);
regions.push(lapaz);

// san vicente
var sanvicente = rsr.path("M415,237L415 246 408 246 404.5 249.5 401 253 408 258 408 263 408 272 415 277 422 277 429 282 429 294 429 300 429 312 429 323 436 327 441 335 441 343 441 349 437 349 430 349 432 358 421 368 421 377 427 384 433 384 432 374 441 372 446 369 455 365 455 357 455 349 455 343 455 334 467 327 467 317 471 310.5 471 294 475 287 485 283 485 277 492 275 500 275 506 268 512 258 519 258 527 251 532 246 527 246 525 232 521 237 519 232 510 222 509 226.5 496.571 222 487 216 480 212.542 471 212.542 457 212.542 455 208 447 212.542 440 216 433 216 427 216 420 216 417.5 218.5 419 226.5 415 230 z");
sanvicente.attr({fill: '#808080','stroke-width': '1','stroke-opacity': '1'});
sanvicente.transform("m0.900176, 0, 0, 0.900176, 85.6568, 56.7095").data({'id': 'sanvicente', 'region': 'San Vicente'});
sanvicente.click(clicksanvicente);
regions.push(sanvicente);

// usulutan
var usulutan = rsr.path(" M546,246v4h8h6h7v8v9v5v4h-5l5,9v9v9v3v9l-5,6l-1,6h6v6v7h-5l5,9h8l11,5h7v8l-7,6l-4,7l-1,9h7h5	v-6v-9l10-2h11v6l5,3v8l-6,5h6h10l16,18h-8h-12h-8l5,6h-14l-28-14l-8-4l-6,1l2,5l-2,7l-20-4v-6l5-1l-5-8l-14-12v7v7l5,3l-5,2l-6-1	l-8-5v-6l-6-6l-8-3l-18-7v4v3l-19.5-3v4c0,0-7.5,0-5.5,3s5.5,5,5.5,5h8.5h11h11h5h5l11,13l14,7v4l-24-11l-41.5-8l-19.5-5h-14l-1-10	l9-2l9.546-5.021L455,360v-11v-6l7.714-13.5L467,327l4-16.5V302l4-6v-9l10-4l7-8h8l6-7l6-10l10.54-3.097L527,246l5-4h6.5L546,246z");
usulutan.attr({fill: '#808080','stroke-width': '1','stroke-opacity': '1'});
usulutan.transform("m0.900176, 0, 0, 0.900176, 85.6568, 56.7095").data({'id': 'usulutan', 'region': 'Usulut&aacute;n'});
usulutan.click(clickusulutan);
regions.push(usulutan);

// morazan
var morazan = rsr.path(" M605,175L605 168 613 168 623 163 614 163 614 158 614 153 614 149 623 149 630 149 636 149 649 149 654 149 660 149 665 149 665 156 665 162 671 175 675 175 680 180 680 186 680 192 687 186 695 183.75 702 183.75 702 192 707 198 707 204 707 212.542 698 216 693 231 699 231 702 242 702 246 700 258 696 258 692 266 691 273 686 273 675 285 668 285 645 285 645 280 645 272 639 270 633 270 628 270 615 265 612 258 603.8 254.4 601 246 599 237 606 237 615 234 615 226.5 615 220 605 216 605 208 596 203 605 196 610 192 605 186 600 175 z");
morazan.attr({fill: '#808080','stroke-width': '1','stroke-opacity': '1'});
morazan.transform("m0.900176, 0, 0, 0.900176, 85.6568, 56.7095").data({'id': 'morazan', 'region': 'Moraz&aacute;n'});
morazan.click(clickmorazan);
regions.push(morazan);

// la union 
var launion = rsr.path(" M675,296L675 309 670 316 672.5 321.5 675 334 680 334 680 341 675 343 670 348 675 353 675 357 675 362 669 367 669 373 667 384 662 393 658 398 651.5 407 715 413 707 407 707 401 722 396 730 391 737 384 746 376 746 367 746 363 746 359 734 354.5 728 348 726 340 726 334 730 327 736 321 736 327.5 736 333 746 333 751 333 755 327.5 762 327 770 327 770 316 770 312 766 306 763 296 757 306 748 296 752 291 753 285 757 274 761 269 758 258 761 246 764 237 770 226.5 774 217 774 212.542 769 208 764 200 759 192 752 186 749 180 740 175 731 183.75 720 180 712.75 183.75 702 183.75 702 192 707 198 707 208 698 216 693 231 699 231 702 242 700.595 254.432 696 258 692 266 691.48 269.64 686 273 680.189 279.34 675 285 z");
launion.attr({fill: '#808080','stroke-width': '1','stroke-opacity': '1'});
launion.transform("m0.900176, 0, 0, 0.900176, 85.6568, 56.7095").data({'id': 'launion', 'region': 'La Uni&oacute;n'});
launion.click(clicklaunion);
regions.push(launion);

// san miguel
var sanmiguel = rsr.path("M562,186L571 186 571 192 577 186 583 186 588 186 588 180 595 180 600 175 600 180 605 186 605 196 605 203 596 203 605 208 605 216 605 220 615 220 615 226.5 615 237 606 237 599 237 601 246 605 258 615 258 615 265 621 270 628 270 633 270 639 270 639 274 645 280 645 285 652 285 660 285 668 285 675 285 675 296 675 306 670 316 675 327 675 334 675 343 670 343 670 353 675 353 675 362 669 367 669 373 667 384 662 393 658 398 654 406 645 407 640.807 402.283 636.559 397.503 629 389 619 389 619 384 619 376 614 373 611 367 606 367 593 372 593 378 588 384 581.573 378.841 582 375 593 362 593 354 586 354 579.4 351 575 349 564.83 345.094 567 333 567 327 561 327 562 321 567 315 567 303 567 294 567 285 562 276 567 272 567 258 567 250 554 250 546 246 538.5 242 532 242 525 232 519 232 519 221 520 216 524 208 529.449 208 532 200 532 192 538.5 192 545 192 550 192 553 183.75 z");
sanmiguel.attr({fill: '#808080','stroke-width': '1','stroke-opacity': '1'});
sanmiguel.transform("m0.900176, 0, 0, 0.900176, 85.6568, 56.7095").data({'id': 'sanmiguel', 'region': 'San Miguel'});
sanmiguel.click(clickSanmiguel);
regions.push(sanmiguel);



// Iterate through the regions & change Yorkshire's fill colour to gold
for (var i = 0; i < regions.length; i++) {

	    // Showing off
    regions[i].mouseover(function(e){
		this.node.setAttribute('fill','#10753B');
		document.getElementById('region-name').innerHTML = this.data('region');
	});

	regions[i].mouseout(function(e){
		this.node.setAttribute('fill','#808080');
	});
}