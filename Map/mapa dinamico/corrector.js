
var polys = document.querySelectorAll('polygon,polyline');
[].forEach.call(polys,convertPolyToPath);

function convertPolyToPath(poly){
  var svgNS = poly.ownerSVGElement.namespaceURI;
  var path = document.createElementNS(svgNS,'path');
  var points = poly.getAttribute('points').split(/\s+|,/);
  var x0=points.shift(), y0=points.shift();
  var pathdata = 'M'+x0+','+y0+'L'+points.join(' ');
  if (poly.tagName=='polygon') pathdata+='z';
  path.setAttribute('d',pathdata);
  poly.parentNode.replaceChild(path,poly);
}