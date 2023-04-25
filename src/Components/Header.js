import smile from "../images/smile.jpg"

export default function Header(){
    return(
        <div className="head">
            <img src={smile} alt="smile"/>
            <h1>Welcome to World of Laughter !!</h1>
            <img src={smile} alt="smile2" />
        </div>
    )
}