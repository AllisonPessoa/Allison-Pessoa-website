/*!
* Start Bootstrap - Small Business v5.0.4 (https://startbootstrap.com/template/small-business)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-small-business/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

async function addHead() {
  const resp = await fetch("views/head.html");
  const html = await resp.text();
  element = document.getElementById("head")
  element.insertAdjacentHTML("afterbegin", html);
}

async function addFooter() {
  const resp = await fetch("views/footer.html");
  const html = await resp.text();
  element = document.getElementById("footer")
  element.insertAdjacentHTML("afterbegin", html);

  var n = localStorage.getItem('on_load_counter');
  if (n === null) {
    n = 0;
  }
  n++;

  localStorage.setItem("on_load_counter", n);

  num = n.toString();
  document.getElementById('CounterVisitor').innerHTML = 'Visitors: ' + num;
}

async function addMenu() {
  const resp = await fetch("views/menu.html");
  const html = await resp.text();
  element = document.getElementById("menu")
  element.insertAdjacentHTML("afterbegin", html);

  var pathname = window.location.pathname;
  switch(pathname) {
     case "/index.html" :
         document.getElementById("menu_about").className = "nav-link active";
         break;
     case "/research.html" :
         document.getElementById("menu_research").className = "nav-link active";
         break;
     case "/tech-instrumentation.html" :
     case "/tech-softwares.html" :
         document.getElementById("menu_technical").className = "nav-link dropdown-toggle active";
         break;
     case "/pub-banners.html" :
     case "/pub-full.html" :
     case "/pub-oral.html" :
         document.getElementById("menu_pub").className = "nav-link dropdown-toggle active";
         break;
     case "/contact.html" :
         document.getElementById("menu_contact").className = "nav-link active";
         break;
  }
}

addHead()
addFooter()
addMenu()
