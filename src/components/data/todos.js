export async function get() {
    const response = await fetch('https://myfreedom-react-project-anton-default-rtdb.firebaseio.com/data.json');
    const data = await response.json();
    return data;
}

export async function getAll() {
    const response = await fetch('https://myfreedom-react-project-anton-default-rtdb.firebaseio.com/todos.json');
    const object = await response.json();
    const todos = Object.entries(object).map((item) => ({ uniqueId: item[0], ...item[1] }))
    return todos;
}

export async function getById({ uniqueId }) {
    const response = await fetch(`https://myfreedom-react-project-anton-default-rtdb.firebaseio.com/todos/${uniqueId}.json`);
    const object = await response.json();
    return object;
}

export async function add({ todo }) {
    await fetch('https://myfreedom-react-project-anton-default-rtdb.firebaseio.com/todos.json', {
        method: 'POST',
        body: JSON.stringify(todo),
    });
}


export async function getFromJsonPlaceholder() {
    const response = await fetch(`https://myfreedom-react-project-anton-default-rtdb.firebaseio.com/todos/1`);
    const object = await response.json();
    return object;
}

export async function update({ uniqueId, title }) {
    return fetch(`https://myfreedom-react-project-anton-default-rtdb.firebaseio.com/todos/${uniqueId}.json`, {
        method: 'PATCH',
        body: JSON.stringify({ title }),
    });
}

export async function remove({ uniqueId }) {
    const response = await fetch(`https://myfreedom-react-project-anton-default-rtdb.firebaseio.com/todos/${uniqueId}.json`, {
        method: 'DELETE'
    });
    const data = await response.json();
    return data;
}