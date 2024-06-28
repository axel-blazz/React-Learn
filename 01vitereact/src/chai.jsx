function Chai() {
    const username = "Chaiwala"

    return (
        <div>
            <h1>Chai {username}</h1>
            <p>Chai is a popular library for writing tests in JavaScript.</p>
        </div>
    );
}

// {username} is an evaluated expression, it means ki koi alag se evaluation nhi hoga, jo bhi value hai vo direct render hoga
// eg {if (true) {console.log('hello')}} // ye nhi chalega
// eg {console.log('hello')} // ye chalega


export default Chai;