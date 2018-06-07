// als je op een link klikt met een submenu word je niet naar een andere pagina gestuurd

let heeftSubMenu = document.querySelectorAll('.heeft-submenu > a');
console.log(heeftSubMenu);

for(let i=0; i<heeftSubMenu.length; i++) {
  heeftSubMenu[i].addEventListener('click', (e)=> e.preventDefault());
}
