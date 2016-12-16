var NecViewer=function(t){function e(){if("Microsoft Internet Explorer"===navigator.appName){var t=navigator.userAgent,e=RegExp("MSIE ([0-9]{1,}[\\.0-9]{0,})")
if(null!==e.exec(t))return parseFloat(RegExp.$1)}return-1}function n(t,e,n){return t[A]("M"+e[0]+" "+e[1]+"L"+n[0]+" "+n[1])}function r(t){return a.PI*t/180}function i(t){return t/a.PI*180}function o(t){return{"font-size":t}}function s(t){return{"font-weight":t}}var a=Math,c=document,h="compatMode",u="opera",f="documentElement",d="body",p="clientWidth",x="clientHeight",g="CSS1Compat",m="length",v="add",k="subtract",y="modulus",M="attr",w="click",b="redraw",$="hover",z="rect",V="push",C="circle",_="remove",I="translate",B="elements",S="set",W="forEach",L="scale",E="join",A="path",H=void 0,R="map",T="line"
return t.getClientWidth=function(){return c[h]!==g||window[u]?c[d][p]:c[f][p]},t.getClientHeight=function(){return c[h]!==g||window.opera?c[d][x]:c[f][x]},t.AntennaGeometry=function(t,c,h,u,f,d,p,x){var g=Raphael(t,c,h),j=u,O=a.round,N=a.min,F=a.max,P=Matrix,q=P.RotationX,Y=P.RotationY,X=12,Z=[1,0,0],G=[0,1,0],D=[0,0,1],U=[0,0,0],J=[-1,0,0],Q=[0,-1,0],K=[0,0,-1],te=q(r(15)).x(Y(r(-60)).x($M([G,D,Z]))),ee=[],ne=-1,re=$V(U),ie=$V(U),oe=1,se=this,ae=$M([Z,Q,D]),le=ae.x(te),ce=H,he=f?14:0,ue=0,fe=0,de=-1!==e(),pe=p||"#fff",xe="#f8f8f8",ge=1,me=2,ve=function(t){return O(1e3*t)+"mm"},ke=function(t){return O(1e7*t)/10+"mm2"},ye=function(t){return O(t/.00254/.00254)/100+"in2"},Me=function(t){return O(1e4*t)/10},we=function(t){return O(1e4*t)/10+"mm"},be=function(t){for(var e=16;t&&t%2===0;)t/=2,e/=2
return[t,e]},$e=function(t){var e=.0015875,n=0>t?-O(t/e):O(t/e)
return n%16!==0?(0>t?"-":"")+O(n/16-.5)+" "+be(a.abs(n%16))[E]("/"):(0>t?"-":"")+O(n/16-.5)},ze=function(t){return $e(t)+"in"},Ve=function(t,e){return t[R](function(t){return t.transform(H,H,e)})},Ce=[],_e=[],Ie=[],Be=[],Se=[],We=[],Le={},Ee=[],Ae=function(t){Ie=t[R](function(t){return t.lines(le,oe,re)}),Be=t[R](function(t){return t.surface(le,oe,re)})},He=function(t){Ae(t),Se=Ie[R](function(t){return t[R](function(){return[0,0,0]})}),We=Array(Be[m])
var e=P.I(3),n=$V(U),r=1,i=Le
Ce=t[R](function(t){return t.lines(e,r,n)}),_e=t[R](function(t){return t.surface(e,r,n)}),Le={},Ee=[],t[W](function(t){t.color in Le||(Ee.push(t.color),Le[t.color]=t.color in i?i[t.color]:1)})},Re=function(t,e,n){if(0!==t||0!==e){if(0===ue==!n)re=re[v]($V([t,-e,0]))
else{var r,i,o=0
if("z"==ce?(o=-e,t=0,e=0):"y"==ce?t=0:"x"==ce&&(e=0),0===t&&0===e&&0===o)return
r=a.sqrt(t*t+e*e+o*o)*a.PI/N(c,h),i=P.Rotation(r,$V([-e,t,o]).toUnitVector()),r=te.x(ie).x(oe),re=re[v](ae.x(r)[k](ae.x(i.x(r)))),te=i.x(te)}se[b]()}},Te=function(t){var e=le.x(ie)
re=re[v](e.x(oe)[k](e.x(oe*t))),oe*=t,se[b]()},je=g[S](),Oe=g[S](),Ne=g[S](),Fe=g[S](),Pe=g[S](),qe="#b00",Ye="#0b0",Xe="#00b",Ze="#ccc",Ge="#888",De="none",Ue="#000",Je="#8ff",Qe=function(){var t=function(t){return le.x(t.x(30))[v](re)},e=t($V(U));[[Z,"X",qe],[G,"Y",Ye],[D,"Z",Xe]][W](function(r){var i=t($V(r[0]))
Oe[V](n(g,e[B],i[B])[M]({stroke:r[2],"stroke-width":1})),i=e[v](i[k](e).x(1.25)),Oe[V](g.text(i.e(1),i.e(2),r[1])[M]({stroke:r[2],"stroke-width":1}))})},Ke=!0,tn=function(t){ne=t,Ke=!0,se[b](),xn()},en=function(t,e,n,r){t[w](e),t.mouseover(n),t.mouseout(r)},nn=function(t,e,n,r,i,a){a=a||Je
var l=g[S](),c=g[z](0,0,e,X+2,2),h=g.text(e/2,X/2+1,t)[M](o(X)),u=function(){n(),c[M]({fill:r&&r()?a:i})},f=function(){c[M]({fill:Ze}),h[M](s("bold"))},d=function(){c[M]({fill:r&&r()?a:i}),h[M](s("normal"))}
return en(c,u,f,d),en(h,u,f,d),l[V](c,h),l[z]=c,l.update=function(){c[M]({fill:r&&r()?a:i,stroke:De})},l.update(),l},rn=function(){Pe=nn("Help",30,function(){window.open("http://clients.teksavvy.com/~nickm/help.html")},0,xe),Pe[I](c-30,0)},on=function(){if(ee[m]){var t,e,n,r=d[m]
ee[W](function(e){r+=e[t][0][m]}),e=N((c-20)/(r+ee[m]+1),8),n=(c-e*l)/2-30,Ne[V](g.text(n+d[m]*e/2,he/2,d)[M](o(X))),n+=(1+d[m])*e,ee[W](function(t,r){Ne[V](nn(t[0],t[0][m]*e,function(){tn(r)},function(){return r===ne},xe)[I](n,1)),n+=(1+t[0][m])*e})}},sn=function(t,e){return a.atan2(t.cross(e)[y](),t.dot(e))},an=function(t,e){var n=[t[0][k](e[0])[y](),t[0][k](e[1])[y](),t[1][k](e[0])[y](),t[1][k](e[1])[y]()],r=n.minIndex(),o=0
return 0===r&&(o=sn(t[1][k](t[0]),e[1][k](e[0]))),1===r&&(o=sn(t[1][k](t[0]),e[0][k](e[1]))),2===r&&(o=sn(t[0][k](t[1]),e[1][k](e[0]))),3===r&&(o=sn(t[0][k](t[1]),e[0][k](e[1]))),i(o)},ln=0,cn=1e8,hn=[$V([cn,cn,cn]),$V([-cn,-cn,-cn])],un=function(t){return fe?ze:t?we:ve},fn=function(){return fe?ye:ke},dn=function(){return fe?$e:Me},pn=function(){var t=hn[1][k](hn[0]),e=N((c-40)/(t.e(1)||1),(h-80)/(t.e(2)||1)),n=hn[1][v](hn[0]).x(.5)
ie=le.inv().x(n[k](re).x(1/oe)),oe*=e,re=$V([c/2,h/2,0])[k](n[k](re).x(e))},xn=function(){var t=0,e=0,n=[],r=[],i=[],s=[],l=[],h=[],u=[],f="",d=0,p=0,x=function(t,e,n){return n=n||function(t,e){return t===e},t.some(function(t){return n(t,e)})?!1:(t[V](e),!0)},k=function(t,e){return t[1]==t[2]&&t[0].eql(e[0])}
Fe&&Fe[_](),Se[W](function(e,r){e[W](function(e,i){var o=Ce[r][i],s=j[r]
e[0]?(p+=1,n[V](o[T][0],o[T][1]),_e[r]||(t+=o.len,x(u,s.radius[B],function(t,e){return t[m]==e[m]&&t[0]==e[0]&&(1===e[m]||t[1]==e[1])})),x(l,[o.dir,"l"],k)&&h[V](o[T])):(e[1]&&(n[V](o[T][0]),p+=1),e[2]&&(n[V](o[T][1]),p+=1))})}),We[W](function(t,n){if(t){var r=_e[n]
e+=r.area,x(l,[r.dir,"p"],k)&&(p+=1,h[V]([r.org,r.org[v](r.dir)]))}}),n[W](function(t){x(r,t.e(1)),x(i,t.e(2)),x(s,t.e(3))}),[[r,"x"],[i,"y"],[s,"z"]][W](function(t){1===t[0][m]?(f+=" "+t[1]+": "+un(1)(t[0][0]),++d):2===t[0][m]&&(f+=" \u0394"+t[1]+": "+un(1)(a.abs(t[0][0]-t[0][1])),++d)}),2===h[m]&&(h=an(h[0],h[1]),f+=" \u2221"+O(10*(l[0][1]!=l[1][1]?90-h:h))/10+"\xb0",++d),1===u[m]&&(f+=" R:"+u[0][R](un(1))[E](","),++d),t>0&&(f+=" Total len: "+un(1)(t),++d),e>0&&(f+=" area: "+fn()(e),++d),Fe=g.text(c/2-20,he+7,f?"Selection info ("+p+"): "+f:"Select elements for info. Double click to clear. Total len: "+un(1)(ln))[M](o(X))},gn=function(){Se[W](function(t){t[W](function(t){t[0]=!1,t[1]=!1,t[2]=!1})}),We[W](function(t,e,n){n[e]=!1}),se[b](),xn()},mn=function(t,e,n){if(je[_](),n===H){var r=Be[t],i=r.org
je[V](g.g.popup(i.e(1),i.e(2),fn()(r.area),null,3))}else{var o=Ce[t][e],s=Ie[t][e].line,a=s[0][v](s[1]).x(.5)
0===n?je[V](g.g.popup(a.e(1),a.e(2),un(1)(o.len),null,3)):1===n?je[V](g.g.popup(s[0].e(1),s[0].e(2),o[T][0][B][R](dn())[E](","),null,3)):2===n&&je[V](g.g.popup(s[1].e(1),s[1].e(2),o[T][1][B][R](dn())[E](","),null,3))}},vn=function(){je[_]()},kn=function(t,e,n){n!==H?Se[t][e][n]=!Se[t][e][n]:We[t]=!We[t],se[b](),xn()},yn=function(t,e,n,r,i,o){var s=function(t,e){var n={},r={}
return(t==H?r:n).fill=t,(e==H?r:n).stroke=e,n}
return e=e||t,e==t&&(e[M]({fill:r,stroke:o}),e.fillin=n,e.fillout=r,e.strokein=i,e.strokeout=o),t[$](function(){e[M](s(e.fillin,e.strokein))},function(){e[M](s(e.fillout,e.strokeout))}),t},Mn=function(t,e,n,r,i,o){o=o||Je
var s=g[S](),a=function(){n(),t[M]({fill:r&&r()?o:i})},l=function(){t[M]({fill:o!=Ze?Ze:r&&r()?i:o})},c=function(){t[M]({fill:r&&r()?o:i})}
return en(t,a,l,c),en(e,a,l,c),s[V](t,e),s.update=function(){t[M]({fill:r&&r()?o:i})},s.update(),s},wn=function(){ue=ue?0:1,se[b]()},bn=g[S](),$n=function(){if(bn.remove(),!(Ee.length<2)){var t,e=function(t,e,r){return Mn(g[z](1,1+12*t,30,11)[M]({stroke:De}),n(g,[3,6+12*t],[29,6+12*t])[M]({stroke:r,"stroke-width":e}),function(){Le[r]=Le[r]?0:1,se[b]()},function(){return 1===Le[r]},xe,Ze)}
for(t=0;t!=Ee.length;++t)bn.push(e(t,5,Ee[t]))
bn[I](c-35,50)}},zn=function(){var t,e,i,o="#ccc",s={fill:pe,"stroke-dasharray":"-","stroke-width":1},a={fill:pe,"stroke-width":2,"fill-opacity":.75},l={fill:pe,"stroke-width":.5,"stroke-dasharray":"-"},u={fill:De,"stroke-width":2,"fill-opacity":.5},f=[],d=[],p=function(t,e){return Mn(g[z](1,1+12*t,30,11)[M]({stroke:De}),n(g,[3,6+12*t],[29,6+12*t])[M]({stroke:Ue,"stroke-width":e}),function(){ge=e,f.forEach(function(t){t.update()}),se[b]()},function(){return ge===e},xe)},x=function(t,e){return Mn(g[C](40,7+11*t,e+3)[M]({stroke:De}),g[C](40,7+11*t,e||.5)[M]({fill:Ue}),function(){me=e,d.forEach(function(t){t.update()}),se[b]()},function(){return me===e},xe)}
f.push(p(0,5),p(1,3),p(2,1)),d.push(x(0,4),x(1,3),x(2,2),x(3,0)),f.concat(d).forEach(function(t){t[I](30,h-42)}),i=nn("mm",20,function(){fe=0,e.update(),xn()},function(){return!fe},xe)[I](0,h-40),e=nn("in",20,function(){fe=1,i.update(),xn()},function(){return fe},xe)[I](0,h-20),Mn(g[C](16,15,14).attr({stroke:De}),g[A]("M22.646,19.307c0.96-1.583,1.523-3.435,1.524-5.421C24.169,8.093,19.478,3.401,13.688,3.399C7.897,3.401,3.204,8.093,3.204,13.885c0,5.789,4.693,10.481,10.484,10.481c1.987,0,3.839-0.563,5.422-1.523l7.128,7.127l3.535-3.537L22.646,19.307zM13.688,20.369c-3.582-0.008-6.478-2.904-6.484-6.484c0.006-3.582,2.903-6.478,6.484-6.486c3.579,0.008,6.478,2.904,6.484,6.486C20.165,17.465,17.267,20.361,13.688,20.369zM15.687,9.051h-4v2.833H8.854v4.001h2.833v2.833h4v-2.834h2.832v-3.999h-2.833V9.051z")[M]({fill:Ue,stroke:De}),function(){Te(1.1)},0,xe)[I](c-122,h-30),Mn(g[C](16,15,14).attr({stroke:De}),g[A]("M22.646,19.307c0.96-1.583,1.523-3.435,1.524-5.421C24.169,8.093,19.478,3.401,13.688,3.399C7.897,3.401,3.204,8.093,3.204,13.885c0,5.789,4.693,10.481,10.484,10.481c1.987,0,3.839-0.563,5.422-1.523l7.128,7.127l3.535-3.537L22.646,19.307zM13.688,20.369c-3.582-0.008-6.478-2.904-6.484-6.484c0.006-3.582,2.903-6.478,6.484-6.486c3.579,0.008,6.478,2.904,6.484,6.486C20.165,17.465,17.267,20.361,13.688,20.369zM8.854,11.884v4.001l9.665-0.001v-3.999L8.854,11.884z")[M]({fill:Ue,stroke:De}),function(){Te(1/1.1)},0,xe)[I](c-93,h-30),Mn(g[C](16,16,14).attr({stroke:Ue}),g[A]("M15.999,4.308c1.229,0.001,2.403,0.214,3.515,0.57L18.634,6.4h6.247l-1.562-2.706L21.758,0.99l-0.822,1.425c-1.54-0.563-3.2-0.878-4.936-0.878c-7.991,0-14.468,6.477-14.468,14.468c0,3.317,1.128,6.364,3.005,8.805l2.2-1.689c-1.518-1.973-2.431-4.435-2.436-7.115C4.312,9.545,9.539,4.318,15.999,4.308zM27.463,7.203l-2.2,1.69c1.518,1.972,2.431,4.433,2.435,7.114c-0.011,6.46-5.238,11.687-11.698,11.698c-1.145-0.002-2.24-0.188-3.284-0.499l0.828-1.432H7.297l1.561,2.704l1.562,2.707l0.871-1.511c1.477,0.514,3.058,0.801,4.709,0.802c7.992-0.002,14.468-6.479,14.47-14.47C30.468,12.689,29.339,9.643,27.463,7.203z")[M]({fill:Ue})[L](.75),wn,function(){return 1===ue},xe)[I](c-32,h-32),Mn(g[C](15.5,15.5,14).attr({stroke:Ue}),g[A]("M25.545,23.328,17.918,15.623,25.534,8.007,27.391,9.864,29.649,1.436,21.222,3.694,23.058,5.53,15.455,13.134,7.942,5.543,9.809,3.696,1.393,1.394,3.608,9.833,5.456,8.005,12.98,15.608,5.465,23.123,3.609,21.268,1.351,29.695,9.779,27.438,7.941,25.6,15.443,18.098,23.057,25.791,21.19,27.638,29.606,29.939,27.393,21.5z")[M]({fill:Ue,stroke:Ue})[L](5/8),function(){pn(),se[b]()},0,xe)[I](c-64,h-32),t=g[S](),t[V](g[A]("M0,3l15,-3l9,5l-15,3z")),t[V](g[A]("M0,3l9,5v16l-9,-5z")),t[V](g[A]("M9,8v16l15,-3v-16z")),t[M](a),yn(t,H,Ge,pe)[w](function(){te=q(r(15)).x(Y(r(-60)).x($M([G,D,Z]))),se[b]()}),t[I](c-206,h-28)[M]({stroke:"#000","stroke-linejoin":"round"}),t=g[S](),t[V](g[A]("M0,24l8,-8v-16m0,16h16")[M](s)),t[V](yn(g[A]("M0,8v16h16v-16z")[M](a),H,Ge,pe)[w](function(){te=$M([G,D,Z]),se[b]()})),t[V](yn(g[A]("M0,8h16l8,-8h-16z")[M](a),H,Ge,pe)[w](function(){te=$M([G,J,D]),se[b]()})),t[V](yn(g[A]("M16,8v16l8,-8v-16z")[M](a),H,Ge,pe)[w](function(){te=$M([J,D,G]),se[b]()})),t[I](c-178,h-28)[M]({stroke:"#000","stroke-linejoin":"round"}),t=g[S](),t[V](yn(g[A]("M0,8v16l8,-8v-16z")[M](l),H,o,pe)[w](function(){te=$M([Z,D,Q]),se[b]()})),t[V](yn(g[A]("M0,24h16l8,-8h-16z")[M](l),H,o,pe)[w](function(){te=$M([G,Z,K]),se[b]()})),t[V](yn(g[A]("M8,0h16v16h-16z")[M](l),H,o,pe)[w](function(){te=$M([Q,D,J]),se[b]()})),t[V](g[A]("M0,8v16h16v-16z")[M](u)),t[V](g[A]("M0,8h16l8,-8h-16z")[M](u)),t[V](g[A]("M16,8v16l8,-8v-16z")[M](u)),t[I](c-150,h-28)[M]({stroke:"#000","stroke-linejoin":"round"})},Vn=function(t,e){return $V([N(t.e(1),e.e(1)),N(t.e(2),e.e(2)),N(t.e(3),e.e(3))])},Cn=function(t,e){return $V([F(t.e(1),e.e(1)),F(t.e(2),e.e(2)),F(t.e(3),e.e(3))])},_n=0,In=function(t,e){var n,r
return t.drag(function(e,i){var o=e-n,s=-i+r
n=e,r=i,Re(o,s,t.mb)},function(i,o,s){ce=e,n=0,r=0,t.mb=s.which==H?4==s.button:2==s.which,_n=1},function(){_n=0,se[b]()}),t.dblclick(function(){gn(),se[b](),xn()}),t},Bn=function(t,e,n,r,i,o,s){return In(g[z](t,e,n,r,i)[M]({fill:s,stroke:De}),o)},Sn=function(t){return"[object Array]"===Object.prototype.toString.call(t)},Wn=function(t,e){return t[0]-e[0]},Ln=function(){var t=[],e=[]
return Ie[W](function(e,n){e[W](function(e,r){t[V]([a.min(e[T][0].e(3),e[T][1].e(3)),n,r])})}),t[m]-4*e[m]<100&&t.sort(Wn),Be[W](function(t,n){t&&e[V]([t.org.e(3),n])}),e[m]<100&&e.sort(Wn),[t,e]},En=function(t,e,n,r){return t[$](function(){mn(e,n,r)},vn),t[w](function(){kn(e,n,r)}),t}
g.g=g.g||g,f&&(ne=0),Bn(1,1,c-2,h-2,10,"3",pe),Bn(1,1,c-2,40,10,"x",xe),Bn(1,1,40,h-2,10,"z",xe),Bn(c-41,1,c-2,h-2,10,"y",xe),Bn(1,h-42,c-2,h-2,10,"x",xe),void 0!==x&&In(g.text(c/2-100,h-20,x).attr({"font-size":20}),"x"),zn(),rn(),on(),xn(),this[b]=function(){je[_](),Oe[_]()
var t,e,r,i,o,s=g[S](),a=g[S](),l=g[S](),c={},h={},d="#fcf"
ln=0,le=ae.x(te),Ke?(-1!==ne&&(j=Sn(f[ne][1])?u.concat(f[ne][1]):Ve(u,ee[ne][1])),He(j),$n(),Ke=!1):Ae(j),i=Ln(),o=i[0][m]-4*i[0][m]<100,hn=[$V([cn,cn,cn]),$V([-cn,-cn,-cn])],Oe[V](l),i[1][W](function(t){var n="M",r=t[1],i=Be[r],o=i[A][m]
e=j[r].color,Le[e]&&(e=We[r]?"#f0f":e,i[A][W](function(t,e){n+=t.e(1)+","+t.e(2)+(o-1>e?"L":"z")}),l[V](i=g[A](n).attr({stroke:De,fill:e,"fill-opacity":.25})),_n||En(i,r))}),!_n&&!de&&11>ge&&o&&(Oe[V](s),Oe[V](a),i[0][W](function(t){var r=t[1],i=t[2],o=Ie[r][i].line
e=j[r].color,Le[e]&&(s[V](En(n(g,o[0][B],o[1][B]),r,i,0)),a[V](En(g[C](o[0].e(1),o[0].e(2),8),r,i,1)),a[V](En(g[C](o[1].e(1),o[1].e(2),8),r,i,2)))}),s[M]({stroke:d,"stroke-width":11,"fill-opacity":0,"stroke-opacity":0}),a[M]({stroke:d,fill:d,"fill-opacity":0,"stroke-opacity":0})),Qe(),i[0][W](function(i){var o=i[1],s=i[2],a=Ie[o][s],l=a[T],u=a.len
if(e=j[o].color,Le[e])if(hn[0]=Vn(Vn(hn[0],l[0]),l[1]),hn[1]=Cn(Cn(hn[1],l[0]),l[1]),u>1e-7){if(_e[o]){if(_n)return}else ln+=u
t=n(g,l[0][B],l[1][B]),r=Se[o][s][0]?"#f0f":e,r in c||(c[r]=g[S](),Oe[V](c[r])),c[r][V](t),_n||(En(t,o,s,0),0!==me&&[1,2].forEach(function(t){r=Se[o][s][t]?"#f0f":e,r in h||(h[r]=g[S](),Oe[V](h[r])),h[r][V](En(g[C](l[t-1].e(1),l[t-1].e(2),me),o,s,t))}))}else t=g[C](l[0].e(1),l[0].e(2),5),t[$](function(){mn(o,s,1)},vn),r=Se[o][s][1]?"#f0f":e,r in h||(h[r]=g[S](),Oe[V](h[r])),h[r][V](t)})
for(t in c)c[t][M]({stroke:t,"stroke-width":ge})
for(t in h)h[t][M]({stroke:t,fill:t})},this[b](),this.fit=function(){pn()},this.fit(),this[b](),xn()},t}(NecViewer||{})