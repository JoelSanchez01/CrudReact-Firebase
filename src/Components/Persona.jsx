import React, { Component } from 'react'
import firebase from 'firebase';
export default class Persona extends Component {
    componentWillUnmount(){
        console.log("Se esta desmontando");
    }
    render() {
        const {persona} = this.props;

        const deletePerson = () => {
            const personaRef = firebase.database().ref('Personas').child(persona.id);
            personaRef.remove();
        }

        const deadPerson = () => {
            const personaRef = firebase.database().ref('Personas').child(persona.id);
            personaRef.update({
                Estado: !persona.Estado,
            })
        }
        return (
            <div>
                <h3>Nombre: {persona.Nombre}</h3>
                <h3>Edad: {persona.Edad}</h3>
                <h3>Estado: {persona.Estado? "Vivo" : "Muerto" }</h3>
                <button onClick={deletePerson}>Delete</button>
                <button onClick={deadPerson}>Murio</button>
            </div>
        )
    }
}
