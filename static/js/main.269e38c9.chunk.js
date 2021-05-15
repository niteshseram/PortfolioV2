(this["webpackJsonpportfolio-v2"]=this["webpackJsonpportfolio-v2"]||[]).push([[0],[,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(1),s=n.n(o),i=n(4),r=n.n(i),c=(n(10),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function a(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var l=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,o=t.getFID,s=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),o(e),s(e),i(e),r(e)}))},u=function(){var e=document.querySelector(".nav-links"),t=document.querySelectorAll(".nav-links li"),n=document.querySelector(".hamburger"),o=!1;o?(e.classList.remove("open"),n.classList.remove("open"),o=!1):(e.classList.toggle("open"),n.classList.toggle("open"),o=!0),t.forEach((function(e){e.classList.toggle("fade")}))},d=(n(11),n(0)),f=function(e){e.link;var t=e.title;return Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"{link}",children:t})})},j=function(e){var t=e.links;return Object(d.jsx)("ul",{className:"nav-links",children:t.map((function(e){return Object(d.jsx)(f,{link:e.link,title:e.title},e.title)}))})},g=function(){return Object(d.jsxs)("header",{children:[Object(d.jsx)("div",{className:"brand",children:Object(d.jsx)("a",{href:"niteshseram.me",children:"Nitesh Seram"})}),Object(d.jsxs)("nav",{children:[Object(d.jsx)("div",{className:"hamburger",onClick:u}),Object(d.jsx)(j,{links:[{link:"#about",title:"ABOUT"},{link:"#skills",title:"SKILLS"},{link:"#project",title:"PROJECT"},{link:"#contact",title:"CONTACT"}]})]})]})},h=(n(13),n(14),n(2)),b=n(5);h.a.registerPlugin(b.a);var m=function(e,t){e.from(t,{duration:1,y:"-50",opacity:0,ease:"easeIn"})},p=function(e,t){e.from(t,{duration:1,x:"-100",opacity:0,ease:"easeIn"})},v={name:"Nitesh Seram",profileUrl:"../../PortfolioV2/assets/images/dp.png",profession:"Full Stack Web Developer",aboutMe:["Hello!, My name is Seram Nitesh Singh and I'm Computer Science Engineering graduate from Assam Don Bosco University, Assam, India.","I am deeply passionate about software development. My interest lies mainly in web development and continuously exploring various field. I love learning and exploring new technologies and also always looking for opportunities to grow my skill set and myself as well. ","Fast forward to today, my main focus these days is to learn technologies related to building a robust and production ready application."],skills:[["Java","../../PortfolioV2/assets/logos/java.png"],["Javascript","../../PortfolioV2/assets/logos/js.png"],["TypeScript","../../PortfolioV2/assets/logos/ts.png"],["Python","../../PortfolioV2/assets/logos/python.png"],["Spring","../../PortfolioV2/assets/logos/spring.png"],["React","../../PortfolioV2/assets/logos/react.png"],["Node","../../PortfolioV2/assets/logos/node.png"],["MySql","../../PortfolioV2/assets/logos/sql.png"],["MongoDB","../../PortfolioV2/assets/logos/mongo.png"],["CI/CD","../../PortfolioV2/assets/logos/ci.png"],["Docker","../../PortfolioV2/assets/logos/docker.png"],["Kubernetes","../../PortfolioV2/assets/logos/k8s.png"],["AWS","../../PortfolioV2/assets/logos/aws.png"]]},O=function(){var e=Object(o.useRef)(null),t=Object(o.useRef)(null),n=Object(o.useRef)(null),s=Object(o.useRef)(null);return Object(o.useEffect)((function(){var o,i,r,c=(o=t.current,h.a.timeline({scrollTrigger:{trigger:o,markers:!1,start:"top 50%",end:"bottom top",toggleActions:"restart complete none reset"}}));p(c,e.current),p(c,n.current),i=c,r=s.current,i.from(r,{duration:1,x:"100",opacity:0,ease:"easeIn"})})),Object(d.jsxs)("section",{id:"about",className:"section",ref:t,children:[Object(d.jsx)("div",{className:"section-heading",ref:e,children:Object(d.jsx)("h1",{"data-text":"A little about me",children:"ABOUT"})}),Object(d.jsxs)("div",{className:"section-content",children:[Object(d.jsxs)("div",{className:"about-text",ref:n,children:[Object(d.jsx)("p",{children:v.aboutMe[0]}),Object(d.jsx)("br",{}),Object(d.jsx)("p",{children:v.aboutMe[1]}),Object(d.jsx)("br",{}),Object(d.jsx)("p",{children:v.aboutMe[2]})]}),Object(d.jsx)("div",{className:"about-img",ref:s,children:Object(d.jsx)("img",{src:v.profileUrl,alt:"profile pic"})})]})]})},x=(n(15),function(){return Object(o.useEffect)((function(){var e=h.a.timeline();m(e,".image"),m(e,".hi"),m(e,".name"),m(e,".profession"),m(e,".resume")}),[]),Object(d.jsxs)("section",{id:"intro",children:[Object(d.jsx)("div",{className:"image",children:Object(d.jsx)("img",{src:v.profileUrl,alt:"profile pic"})}),Object(d.jsxs)("div",{className:"intro-text",children:[Object(d.jsx)("h1",{className:"hi",children:"Hi, I'm"}),Object(d.jsx)("h1",{className:"name",children:v.name}),Object(d.jsx)("h2",{className:"profession",children:v.profession}),Object(d.jsx)("div",{className:"resume",children:Object(d.jsx)("a",{className:"btn resume-btn",href:"resume",children:"Get Resume"})})]})]})}),k=(n(16),n(17),function(e){var t=e.url,n=e.name;return Object(d.jsx)("div",{className:"skill-label",children:Object(d.jsxs)("div",{className:"skill-content",children:[Object(d.jsx)("img",{src:t,alt:n}),Object(d.jsx)("p",{children:n})]})})}),w=function(){return Object(d.jsxs)("section",{id:"skills",className:"section",children:[Object(d.jsx)("div",{className:"section-heading",children:Object(d.jsx)("h1",{"data-text":"Tech I have explored",children:"Skills"})}),Object(d.jsx)("div",{className:"section-content skill-section",children:v.skills.map((function(e){return Object(d.jsx)(k,{url:e[1],name:e[0]})}))})]})},y=(n(18),function(){return Object(d.jsxs)("main",{children:[Object(d.jsx)(x,{}),Object(d.jsx)(O,{}),Object(d.jsx)(w,{})]})});var N=function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(g,{}),Object(d.jsx)(y,{})]})};r.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(N,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/PortfolioV2",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/PortfolioV2","/service-worker.js");c?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):a(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):a(t,e)}))}}(),l()}],[[19,1,2]]]);
//# sourceMappingURL=main.269e38c9.chunk.js.map