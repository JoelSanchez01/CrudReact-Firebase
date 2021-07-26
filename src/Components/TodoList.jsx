import React, { Component } from 'react';
import firebase from '../util/firebase';
import Persona from './Persona';
class TodoList extends Component {
    state = {
        PersonasList :[],
    }
    
    componentDidMount(){
        const personasRef = firebase.database().ref('Personas');
        personasRef.on('value', (snapshot) => {
            const personas = snapshot.val();
            const PersonasList2 = [];
            for (let id in personas) {
                PersonasList2.push({ id, ...personas[id] });
            }
            this.setState({
                PersonasList: PersonasList2,
            })
        })
        
    }

    componentWillUnmount(){
        console.log("Se esta desmontando");
    }
    
    render() {
        
        const { PersonasList } = this.state;
        
            
        return (
            <div>
                    <h1>Lista</h1>
                <ul>
                    {PersonasList.length!==0 ?(PersonasList.map((persona, index) => (
                        <li key={index}>
                            <Persona persona={persona}/>
                        </li>
                        ))): <h1>Esta Vacio</h1>
                        }
                </ul>
            </div>
        )
    }
}

export default TodoList;
