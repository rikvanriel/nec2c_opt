var onViewerLoad=function(c,a){var b;if(self===top){b=document.getElementById(c);b.style["float"]="right";b.style.position="fixed";b.style.top="0px";b.style.left="210px";createMenu("nec_viewer","../",1);a(getClientWidth()-220)}else{b=document.getElementById("menu");b.parentNode.removeChild(b);a()}};