import './App.css';
import DisplayEmployee from './components/DisplayEmployee';
import { useState } from 'react';
import DisplayQuote from './components/DisplayQuote';

function App() {
  const [employee, setEmployee] = useState();
  const [quote, setQuote] = useState();

  const getEmployee = () => {
    fetch('https://randomuser.me/api?nat=en', {method: "GET"})
      .then((res) => res.json())
      .then ((data) => {
        setEmployee(data.results[0])
        console.log(data.results[0])
      })
  }

  const getQuote = () => {
    fetch('https://simpsons-quotes-api.herokuapp.com/quotes', {method: "GET"})
    .then((res) => res.json())
    .then ((data) => {
      setQuote(data[0])
    console.log(data)
    })
}


  return (
    <div className="App">
      <div>
        {employee ? <DisplayEmployee employee={employee}/> : ''}
        <button type="button" onClick={getEmployee}>Get employee</button>
      </div>
      <p>Hey</p>
      <div>
        {quote ? <DisplayQuote quote={quote}/> : ''}
        <button type="button" onClick={getQuote}>Get simpson Quote</button>
      </div>
    </div>
  );
}

export default App;
