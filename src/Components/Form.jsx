import React from 'react';
import firebase from '../util/firebase';


class Form extends React.Component {
    state ={
        Nombre: '',
        Edad: '',
        Estado: true,
        }
    
        componentDidMount(){
            const personasRef = firebase.database().ref('Personas');
            personasRef.on('value', (snapshot) => {
                const personas = snapshot.val()
                const PersonasList2 = Object.values((personas || {}));
                this.setState({
                    id: (PersonasList2.length || 0),
                })
            })
        }


    render(){
        const handleOnChange = (e) => {
            this.setState(
                {[e.target.name]: e.target.value},
                
            )
        }
        
        const createTodo = () => {
                const todoRef = firebase.database().ref("Personas");
                const todo = {
                    Nombre: this.state.Nombre,
                    Edad:this.state.Edad,
                    Estado: this.state.Estado,
                };
            todoRef.push(todo);
            }
        return (
            <div>
                <input type="text"  name='Nombre' onChange={handleOnChange} placeholder='Nombre'/>
                <input type="Number"  name='Edad'  onChange={handleOnChange} placeholder='Edad'/>
                <button type="button" onClick={createTodo} >Add Todo</button>
            </div>
        )
    }
}

export default Form;