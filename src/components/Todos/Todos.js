import React, { useState, useEffect, useRef } from 'react';
import { add, get, getAll } from '../data/todos';
import { Link, useParams, useHistory } from "react-router-dom";

const Todos = () => {

    const [data, setData] = useState({});
    const [todos, setTodos] = useState([]);
    let { filter } = useParams();
    let history = useHistory();
    const myRef = useRef();

    const onFormSubmit = (evt) => {
        evt.preventDefault();
        const title = evt.target.title.value;
        const newObj = {
            title,
            completed: false,
            userId: 12,
            id: 203,
        };
        add({ todo: newObj }).then(() => {
            setTodos([...todos, newObj]);
            evt.target.title.value = "";
        })
    }

    const onFilterTextChange = () => {
        history.push(`/todos/filter/${myRef.current.value}`);
    }

    useEffect(() => {
        get().then(serverData => {
            setData(serverData);
        });
    }, [])

    useEffect(() => {
        getAll().then(serverData => {
            setTodos(serverData);
        });
    }, [])

    useEffect(() => {
        myRef.current.value = filter || '';
    }, [filter])

    return <>
        <div><h4>TODO:</h4> {data.title}</div>
        <div><h1>TODOS:</h1>
            <form onSubmit={onFormSubmit}>
                <input name='title' />
                <button type='submit'>Submit</button>
                <input name='text' ref={myRef} placeholder="Filter" onChange={onFilterTextChange} />
            </form>

            <div><h4>Filter: {filter}</h4></div>
            {todos.filter(todo => {
                return filter ? todo.title?.includes(filter) : true
            }).map((todo, id) =>
                <ul key={id}>
                    <h4>todo:{id}</h4>
                    <h4>UserId:{todo.userId}</h4>
                    {todo.title}
                    <Link to={`/todos/${todo.uniqueId}${filter ? '/' + filter : ''}`}>Edit</Link>
                </ul>
            )}</div>
    </>
};

export default Todos;
