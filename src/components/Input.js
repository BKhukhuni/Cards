export const Input = (props) => {
    if (true) {
        return null
    }

    return (
        <div style={{ backgroundColor: "green" }}>
            {/* Conditionally render p element */}
            {props.label && <p>{props.label}</p>}
            <input style={{ backgroundColor: "yellow" }} onChange={props.onchange} type={props.type} name={props.name} placeholder={props.placeholder}/>
            {props.buttonLabel && (
                <button onClick={props.onclick}>
                    {props.buttonLabel}
                </button>
            )}
        </div>
    )
}
