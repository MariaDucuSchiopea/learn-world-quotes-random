import {useState} from 'react'
import {useEffect} from 'react'
import './App.scss'
import COLORS_ARRAY from './colorsArray.js'
// if I want to use a local quotes array instead of online quotes array
//import QUOTES_LOCAL_ARRAY from './quotesLocalArray.js'

function App() {
const [quotesArray, setQuotesArray] = useState(null)
const [quote, setQuote] = useState("Quotes of the world - press the button to see them")
const [author, setAuthor] = useState("and here will be the author....")
const [randomIndex, setRandomIndex] = useState(0)
const [randomColorIndex, setRandomColorIndex] = useState(0)
const [randomColor, setRandomColor] = useState(['#282c34'])


let quotesURL = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"

const fetchQuotes = async(url) =>{
  const response = await fetch(url)
  const data = await response.json()
  setQuotesArray(data.quotes)
  console.log(data)
}


useEffect(()=>{
fetchQuotes(quotesURL)
},[quotesURL])

const randomize =() => {

setRandomColorIndex(Math.floor(Math.random() * COLORS_ARRAY.length))
setRandomColor(COLORS_ARRAY[randomColorIndex])
setRandomIndex(Math.floor(Math.random() * quotesArray.length))
setQuote(quotesArray[randomIndex].quote)
setAuthor(quotesArray[randomIndex].author)
// if I want to use a local quotes array instead of online quotes array
//setRandomIndex(Math.floor(Math.random() * QUOTES_LOCAL_ARRAY.length))
//setQuote(QUOTES_LOCAL_ARRAY[randomIndex].quote)
//setAuthor(QUOTES_LOCAL_ARRAY[randomIndex].author)
}

  return (
    <div className="App">
      <header className="App-header" style={{backgroundColor: randomColor}}>
        <div id="quote-box">
        <h3 id="text" style={{color: randomColor}}>{quote}</h3>
        <p id="author">
          - {author}
        </p>
        <div className="buttons">
        <a id="tweet-quote" target="_blank" rel="noreferrer" style={{backgroundColor: randomColor}} href={encodeURI(`http://twitter.com/intent/tweet?text=${quote}`)}><i className="fa fa-twitter"></i></a>
        <button onClick={()=>randomize()} id="new-quote" className= "button-34" style={{backgroundColor: randomColor}}>New quote...</button>
        
        </div>
        </div>
      </header>
    </div>
  );
}

export default App;
