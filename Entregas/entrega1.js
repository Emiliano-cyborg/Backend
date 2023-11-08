class TicketManager{
    #precioBaseDeGanancia = 1.15;
   /*  static eventos[]
 */
    constructor(){
        this.eventos = [];
    }
    
    addEvento = (nombre,lugar,precio) => {

        let cantEventos = this.eventos.length;


        if(!nombre || !lugar || !precio){
            return 'Todos los datos son requeridos';
            
        }


        const eventoLugar = this.eventos.find(evento => evento.lugar == lugar);

        if (eventoLugar) {
            return `El evento ya existe en: ${lugar}`;            
        }

        const evento = {
            nombre,
            lugar,
            precio: precio * this.#precioBaseDeGanancia,
            capacidad: 50,
            fecha: Date(),
            participantes: [],
            id: ++cantEventos
        }

        this.eventos.push(evento)
        return this.eventos;
    }


    getEventos = () => {
        return this.eventos;

    }
    getEventos = (idEvento) => {
        const evento = this.eventos.find( evento => evento.id == idEvento);

        if(evento){
            return evento;
        }else{
            return 'Not Found'
        }
    }
    addParticipante = (idEvento, idParticipante) => {
        const evento = this.getEventos(idEvento);
    
        if(evento === 'Not Found'){
            return 'El evento no existe';

        }
        const registro = evento.participantes.find(idPersona => idPersona == idParticipante);

        if(registro){
            return `El participante: ${idParticipante} ya se compro entrada`
        }
        evento.participantes.push(idParticipante);
        return evento;
    } 

}

const ticketManager = new TicketManager();

let evento = ticketManager.getEventos(1);

ticketManager.addEvento('Colonia Suiza', 'Colonia Suiza', 9100);
ticketManager.addEvento('Bariloche', 'PARAISO', 6500);
evento = ticketManager.addEvento('baradero Rock', 'San Pedor', 3300);

const unEvento = ticketManager.getEventos(11)

/* console.log(unEvento) */

let user = ticketManager.addParticipante(11,1)
console.log(user);
 user = ticketManager.addParticipante(11,1)
 console.log(user);
 user = ticketManager.addParticipante(1,1)
 console.log(user);
 user = ticketManager.addParticipante(2,1)
 console.log(user);

 

