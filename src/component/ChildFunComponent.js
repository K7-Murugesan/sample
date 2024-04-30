function ChildFunComponent( props ){

    // let newVal = "React"
    // let newVal = 1
    // let newVal = [1,2,3,4]
    let newVal = {id:1}
    let jsx = <ul>
        <li>a</li>
        <li>b</li>
        <li>c</li>
        <li> { newVal.id } </li>
    </ul>

    //Stateless Component - it dont have own state & life cycle methods
    //Hooks
    return (
        <header className="header">
            <label htmlFor="">  </label>
            <h1> Hello World </h1>
            <h1> {newVal.id} </h1>
            <li> {JSON.stringify(newVal)} </li>
        </header>
    )
}

export default ChildFunComponent;