import {createSlice , nanoid} from '@reduxjs/toolkit'

//can be object or array
//this is our state
const initialState={
    todos:[{id:1, text:"Hello World"},]//array of todos
}

//create slice is a method
//IN WHICH WE HAVE TO PASS AN OBJECT
export const todoSlice = createSlice({
    name:'todo',
    initialState,
    // Reducers are Functions that specify how the state changes in response to actions. Each reducer handles a specific action.
    reducers:{
        //addTodo(property) : reducer - function (state,action)
        //reducer is the method which contains state and action as arguments
        //state tells the initial or current state of the store
        //actions are objects that describe what happened in the application ,only way to send data to redux store

        //key and function pair
        addTodo: (state,action)=>{
            const todo={
                id:nanoid(),//for givind id automatically
                //payload contains extra information about the state
                text:action.payload.text
            }

            //pushing todo in initial state's todos array of todo objects
            state.todos.push(todo)
        },
        removeTodo:(state,action)=>{

            //overiding whole todos array with new array after deleting
            state.todos=state.todos.filter((todo)=>{
                todo.id!==action.payload.id
            })
        }
    }

}) 

export const {addTodo, removeTodo} =todoSlice.actions

export default todoSlice.reducer