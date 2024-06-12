function darkMode() {
    const bgc = document.querySelector("body");
    const pi = document.getElementById("theme");
    const pe = document.getElementById("myP");
    const me = document.querySelector("p");
    me.style.color = "white";
    pe.style.color = "white";
    pi.style.color = "white";
    bgc.style.backgroundColor = "#8a8888";
}
function lightMode() {
  const bgcv = document.querySelector("body");
  const pie = document.getElementById("theme")
  const po = document.getElementById("myP");
  const mi = document.querySelector("p");
  mi.style.color = "black";
  po.style.color = "black";
  pie.style.color = "black";
  bgcv.style.backgroundColor = "#d6d6d4";
}  
function styleMode() {
  const bgco = document.querySelector("body");
  const pier = document.getElementById("theme")
  const poi = document.getElementById("myP");
  const mie = document.querySelector("p");
  mie.style.color = "white";
  poi.style.color = "white";
  pier.style.color = "white";
  bgco.style.backgroundColor = "blueviolet";
}
function helloBro() {
    const name = document.getElementById("myInput").value;
    const tex = document.getElementById("myP");
    tex.innerHTML = "Welcome" + " " + name;
}