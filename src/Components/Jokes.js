
export default function Jokes(props){
    return(
        <div className="jk">
            <h3><u>{props.title}</u></h3>
            {props.setup && <p>{props.setup}</p>}
            <p>{props.punchline}</p>
        </div>
    )
}