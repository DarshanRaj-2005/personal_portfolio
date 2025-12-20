function opsidenav() {
  const sidenav = document.getElementById("sidenavbar");
  sidenav.classList.remove("left-[-100%]");
  sidenav.classList.add("left-0");
}

function closidenav() {
  const sidenav = document.getElementById("sidenavbar");
  sidenav.classList.remove("left-0");
  sidenav.classList.add("left-[-100%]");
}
