(this.webpackJsonpstarwars=this.webpackJsonpstarwars||[]).push([[0],{103:function(e,t,c){},104:function(e,t,c){},105:function(e,t,c){},106:function(e,t,c){},107:function(e,t,c){},108:function(e,t,c){},109:function(e,t,c){},110:function(e,t,c){},113:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c.n(s),a=c(31),i=c.n(a),r=(c(94),c(23)),j=c.n(r),l=c(50),o=c(46),d=c(29),h=c(6),b=c(126),p=c(125),u=(c(96),c(97),c.p+"static/media/nav.105f0d3f.png"),O=c(1),x=function(){return Object(O.jsxs)("div",{className:"nav",children:[Object(O.jsx)(d.b,{to:"/",children:Object(O.jsx)("div",{className:"nav_btn_container",children:Object(O.jsx)("img",{src:u,className:"nav_img"})})}),Object(O.jsxs)("div",{className:"nav_items",children:[Object(O.jsx)(d.b,{to:"/films",children:Object(O.jsx)("div",{className:"nav_item",children:"Films"})}),Object(O.jsx)(d.b,{to:"/people",children:Object(O.jsx)("div",{className:"nav_item",children:"People"})}),Object(O.jsx)(d.b,{to:"/species",children:Object(O.jsx)("div",{className:"nav_item",children:"Species"})}),Object(O.jsx)(d.b,{to:"planets",children:Object(O.jsx)("div",{className:"nav_item",children:"Planets"})}),Object(O.jsx)("div",{})]})]})},m=c(52),f=c(53),v=c(63),g=c(59),N=(c(103),c(104),c.p+"static/media/starwars2.5033ff4b.jpeg"),_=c.p+"static/media/Iamyourfather.62ace5ae.mp3",w=c.p+"static/media/starwars_logo.8fd0e4ee.png",y=function(e){Object(v.a)(c,e);var t=Object(g.a)(c);function c(){var e;return Object(m.a)(this,c),(e=t.call(this)).state={},e}return Object(f.a)(c,[{key:"render",value:function(){return Object(O.jsxs)("div",{className:"main",children:[Object(O.jsxs)("div",{className:"main_top",children:[Object(O.jsxs)("h1",{className:"title",children:[Object(O.jsx)("img",{src:w,className:"STARWARS"})," FOR NON STAR WARS FANS"]}),Object(O.jsxs)("p",{children:["You don't really know about STAR WARS, but your boss or coworkers or boyfriend? or girlfriend does? ",Object(O.jsx)("br",{}),"Maybe you just want to sound like a STAR WARS fan?"," ",Object(O.jsx)("strong",{children:"I GOT YOUR BACK!"})," Here is some information about STAR WARS for you. Now you can join their conversation with a superficial knowledge you earn from here!",Object(O.jsx)("br",{}),Object(O.jsxs)("audio",{controls:!0,src:_,children:["Your browser does not support the",Object(O.jsx)("code",{children:"audio"})," element."]})]})]}),Object(O.jsx)("div",{className:"main_bottom",children:Object(O.jsx)("div",{className:"image_container",children:Object(O.jsx)("img",{src:N,className:"main_image"})})})]})}}]),c}(n.a.Component),S=function(e){Object(v.a)(c,e);var t=Object(g.a)(c);function c(){var e;return Object(m.a)(this,c),(e=t.call(this)).state={},e}return Object(f.a)(c,[{key:"render",value:function(){return Object(O.jsxs)("div",{className:"home",children:[Object(O.jsx)(x,{}),Object(O.jsx)(y,{})]})}}]),c}(n.a.Component),k=(c(105),c(106),function(e){var t=e.children;return Object(O.jsx)("div",{className:"section_title_container",children:Object(O.jsx)("h2",{className:"section_title",children:t})})}),A=(c(107),function(e){return Object(O.jsx)("div",{className:"list",children:Object(O.jsx)("div",{className:"list_items",children:e.children})})}),R=function(e){var t=e.data;return Object(O.jsxs)("div",{className:"films",children:[Object(O.jsx)(k,{children:"FILMS "}),t.map((function(e,t){return Object(O.jsx)("div",{className:"films_container",children:Object(O.jsxs)(A,{children:[Object(O.jsx)("h2",{children:e.title}),Object(O.jsxs)("p",{children:["episode: ",e.episode_id]}),Object(O.jsxs)("p",{children:["opening_crawl: ",e.opening_crawl]}),Object(O.jsxs)("p",{children:["director: ",e.director]}),Object(O.jsxs)("p",{children:["release_data: ",e.release_data]}),Object(O.jsxs)("p",{children:["planets: ",e.planets]})]})})}))]})},T=(c(108),function(e){var t=e.data;return Object(O.jsxs)("div",{className:"people",children:[Object(O.jsx)(k,{children:"PEOPLE"}),t.map((function(e,t){return Object(O.jsx)("div",{className:"people_container",children:Object(O.jsxs)(A,{children:[Object(O.jsx)("h2",{children:e.name}),Object(O.jsxs)("p",{children:["genter: ",e.gender]}),Object(O.jsxs)("p",{children:["height: ",e.height]}),Object(O.jsxs)("p",{children:["mass: ",e.mass]}),Object(O.jsxs)("p",{children:["birth year: ",e.birth_year]}),Object(O.jsxs)("p",{children:["home world: ",e.homeworld]}),Object(O.jsxs)("p",{children:["films: ",e.films]})]})})}))]})}),F=(c(109),function(e){var t=e.data;return Object(O.jsxs)("div",{className:"planets",children:[Object(O.jsx)(k,{children:"PLANET"}),t.map((function(e,t){return Object(O.jsx)("div",{className:"planets_container",children:Object(O.jsxs)(A,{children:[Object(O.jsx)("h2",{children:e.name}),Object(O.jsxs)("p",{children:["rotation period: ",e.rotation_period]}),Object(O.jsxs)("p",{children:["climate: ",e.climate]}),Object(O.jsxs)("p",{children:["gravity: ",e.gravity]}),Object(O.jsxs)("p",{children:["terrain: ",e.terrain]}),Object(O.jsxs)("p",{children:["surface water: ",e.surface_water]}),Object(O.jsxs)("p",{children:["population: ",e.polulation]})]})})}))]})}),P=(c(110),function(e){var t=e.data;return Object(O.jsxs)("div",{className:"species",children:[Object(O.jsx)(k,{children:"SPECIES"}),t.map((function(e,t){return Object(O.jsx)("div",{className:"species_container",children:Object(O.jsxs)(A,{children:[Object(O.jsx)("h2",{children:e.name}),Object(O.jsxs)("p",{children:["classification: ",e.classification]}),Object(O.jsxs)("p",{children:["designation: ",e.designation]}),Object(O.jsxs)("p",{children:["average height: ",e.average_height]}),Object(O.jsxs)("p",{children:["skin colors: ",e.skin_colors]}),Object(O.jsxs)("p",{children:["hair colors: ",e.hair_colors]}),Object(O.jsxs)("p",{children:["eye colors: ",e.eye_colors]}),Object(O.jsxs)("p",{children:["language: ",e.language]})]})})}))]})});var C=function(){var e=Object(s.useState)([]),t=Object(o.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)([]),i=Object(o.a)(a,2),r=i[0],u=i[1],m=Object(s.useState)([]),f=Object(o.a)(m,2),v=f[0],g=f[1],N=Object(s.useState)([]),_=Object(o.a)(N,2),w=_[0],y=_[1],k=Object(s.useState)(!0),A=Object(o.a)(k,2),C=A[0],E=A[1];return Object(s.useEffect)((function(){function e(){return(e=Object(l.a)(j.a.mark((function e(){var t,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://swapi.dev/api/films/");case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,n(c.results),E(!1);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function t(){return(t=Object(l.a)(j.a.mark((function e(){var t,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://swapi.dev/api/people/");case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,u(c.results),E(!1);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function c(){return(c=Object(l.a)(j.a.mark((function e(){var t,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://swapi.dev/api/species/");case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,y(c.results),E(!1);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function s(){return(s=Object(l.a)(j.a.mark((function e(){var t,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://swapi.dev/api/planets/");case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,g(c.results),E(!1);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}(),function(){t.apply(this,arguments)}(),function(){c.apply(this,arguments)}(),function(){s.apply(this,arguments)}()}),[]),Object(O.jsx)("div",{className:"app",children:Object(O.jsxs)(d.a,{children:[Object(O.jsx)(x,{}),C?Object(O.jsx)(b.a,{active:!0,inverted:!0,children:Object(O.jsx)(p.a,{inverted:!0,children:"Loading"})}):Object(O.jsxs)(h.c,{children:[Object(O.jsx)(h.a,{exact:!0,path:"/",children:Object(O.jsx)(S,{})}),Object(O.jsx)(h.a,{exact:!0,path:"/films",children:Object(O.jsx)(R,{data:c})}),Object(O.jsx)(h.a,{exact:!0,path:"/people",children:Object(O.jsx)(T,{data:r})}),Object(O.jsx)(h.a,{exact:!0,path:"/species",children:Object(O.jsx)(P,{data:w})}),Object(O.jsx)(h.a,{exact:!0,path:"/planets",children:Object(O.jsx)(F,{data:v})})]})]})})},E=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,127)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),s(e),n(e),a(e),i(e)}))};i.a.render(Object(O.jsx)(n.a.StrictMode,{children:Object(O.jsx)(C,{})}),document.getElementById("root")),E()},94:function(e,t,c){},96:function(e,t,c){},97:function(e,t,c){}},[[113,1,2]]]);
//# sourceMappingURL=main.4986712e.chunk.js.map