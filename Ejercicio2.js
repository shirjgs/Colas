// Se tiene una cola en la cual se han repartido tickets con el orden de atención. Sin embargo, llegada la hora de inicio hay muchos “colados”, es por esto que se le ordena al vigilante que retire a todos aquellos que no tienen ticket. Muestra la cola inicial, qué elementos fueron retirados de la cola y la cola final.
// Sugerencia: desencolar cada elemento, si tiene el ticket se vuelve a encolar, si no se retira.
// Cola: [ \n
// { user:‘User1’, ticket:true },\n
// { user:‘User2’, ticket:true },\n
// { user:‘User3’, ticket:false },\n
// { user:‘User4’, ticket:true },\n
// { user:‘User5’, ticket:false },\n
// { user:‘User6’, ticket:false },\n
// { user:‘User7’, ticket:true },\n
// { user:‘User8’, ticket:true },\n
// { user:‘User9’, ticket:true },\n
// { user:‘User10’, ticket:false },\n
// { user:‘User11’, ticket:true },\n
// ];\n

class Cola {
    constructor() {
      this.elementos = [];
    }
  
    encolar(elemento) {
      this.elementos.push(elemento);
    }
  
    desencolar() {
      return this.elementos.shift();
    }
  
    estaVacia() {
      return this.elementos.length === 0;
    }
  
    tamaño() {
      return this.elementos.length;
    }
  }
  
  function retirarUsuariosSinTicket(cola) {
    const usuariosRetirados = [];
    const nuevaCola = new Cola();
  
    while (!cola.estaVacia()) {
      const usuario = cola.desencolar();
  
      if (usuario.ticket) {
        nuevaCola.encolar(usuario);
      } else {
        usuariosRetirados.push(usuario);
      }
    }
  
    return { usuariosRetirados, nuevaCola };
  }
  
  // Crear la cola inicial con los usuarios y sus tickets
  const colaInicial = new Cola();
  colaInicial.encolar({ user: 'User1', ticket: true });
  colaInicial.encolar({ user: 'User2', ticket: true });
  colaInicial.encolar({ user: 'User3', ticket: false });
  // Agrega los demás usuarios aquí...
  
  // Mostrar la cola inicial
  console.log("Cola Inicial:");
  console.log(colaInicial.elementos);
  
  // Retirar a los usuarios sin ticket
  const { usuariosRetirados, nuevaCola } = retirarUsuariosSinTicket(colaInicial);
  
  // Mostrar los usuarios retirados
  console.log("\nUsuarios Retirados:");
  console.log(usuariosRetirados);
  
  // Mostrar la cola final
  console.log("\nCola Final:");
  console.log(nuevaCola.elementos);
  