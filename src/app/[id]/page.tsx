const  dynamicRoute = async (props:any) => {
    console.log(props)
    const url = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${props.params.id}`, { method: "GET" }
    )
    const response = await url.json();
    console.log("single", response);
    return (<main>{response.title}</main>)
}

export default dynamicRoute