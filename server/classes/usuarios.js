class Usuarios {
    constructor() {
        this.personas = [];
    }

    agregarPersona(id, nombre, sala) {
        let persona = { id, nombre, sala }
        this.personas.push(persona);

        return this.personas;
    }
    getPersona(id) {
        let persona = this.personas.filter(personaBuscar => {
            return personaBuscar.id === id;
        })[0];

        return persona;
    }

    gerPesonas() {
        return this.personas;
    }

    getPersonaPorSala(sala) {
        let personasEnSala = this.personas.filter(persona => persona.sala === sala);
        return personasEnSala;
    }

    //Cuando una persona abandona el chat
    borrarPersona(id) {
        let personaBorrada = this.getPersona(id);
        this.personas = this.personas.filter(personaEliminar => {
            return personaEliminar.id !== id;
        });
        return personaBorrada;
    }
}

module.exports = {
    Usuarios
}