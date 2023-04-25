import Header from "./Components/Header.js"
import Jokes from "./Components/Jokes.js"
import Footer from"./Components/Footer.js"
import jokesData from"./jokesData.js"
import './App.css';

function App() {
  const jokeElement = jokesData.map((jj)=>{
    return <Jokes 
              title = {jj.title}
              setup = {jj.setup}
              punchline = {jj.punchline}
            />
  })
  return (
    <div className="App">
     <Header/>
     <div className="joking">
        {jokeElement}
     </div>

      <Footer />
    </div>
  );
}

export default App;

