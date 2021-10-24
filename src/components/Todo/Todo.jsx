import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Redirect, withRouter } from 'react-router';
import './ClassTodo.css';
import constatns from '../utils/constans.json'

function Todo({ history, location, match, getById, update, remove }) {
    const { params: { todo: todoParam, filter: FilterParam } } = match;
    const [todo, setTodo] = useState({});
    const { mode: modes } = constatns;
    const [mode, setMode] = useState(modes.View);

    useEffect(() => {
        getById({ uniqueId: todoParam }).then(todo => {
            setTodo(todo);
        });
    }, [todoParam, getById]);

    const onFeedBacksClick = (evt) => {
        evt.preventDefault();
        history.push('/feedbacks');
    }

    const onTitleChange = (evt) => {
        setTodo({ ...todo, title: evt.currentTarget.value });
    }

    const onSaveButtonClick = async () => {
        await update({ uniqueId: todoParam, title: todo.title });
        setMode(modes.View);
    }

    const onEditButtonClick = () => {
        setMode(modes.Edit);
    }

    const onRemoveButtonClick = async () => {
        await remove({ uniqueId: todoParam });
        setMode(modes.Remove);
    }

    const todoUrl = `/todos/${FilterParam ? 'filter/' + FilterParam : ''}`;

    return (
        <div>
            <div className='activTodo'><h1>Todo:</h1>
                {FilterParam && <h4> Filter Param: {FilterParam} </h4>}
                <h4>Completed:&#8659; {todo.completed?.toString()}&shy;</h4>
                <h5>Id:&#8659; {todo.id}&shy;</h5>
                <h5>Title:&#8659; <br />&shy; {mode === modes.Edit ?
                    <input type="text" value={todo.title || ""} onChange={onTitleChange} />
                    : todo.title
                }</h5>
                <h5>userId:&#8659; {todo.userId}&shy;</h5>
                <button onClick={onSaveButtonClick}>Save</button>
                <button onClick={onEditButtonClick}>Edit</button>
                <button onClick={onRemoveButtonClick}>Remove</button>
            </div>
            <div>
                <Link to={todoUrl}>Back to TODOS</Link>
                <Link to='#' onClick={onFeedBacksClick}>Feedbacks</Link>
                {mode === 'Remove' && <Redirect to={todoUrl} />}
            </div>
        </div>
    );
}

export default withRouter(Todo);