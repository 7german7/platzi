class Menu {
  constructor() {
    this.menu = "[1]---Agregar Personas\n[2]---Eliminar Personas\n[3]---Listar Personas\n[4]---Buscar Persona\n[5]---Salir";
    this.opt = 0;
  }
  show() {
    console.log(this.menu);
  }
}

export default Menu;