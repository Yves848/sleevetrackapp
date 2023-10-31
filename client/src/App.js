import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Grid from './components/Grid';
import NewWeight from "./components/NewWeight";

function App() {
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
    fetch("evolution",{mode: "no-cors"})
      .then((res) => res.json())
      .then((data) => {

        setData(data);
      }
      );
  }, []);

  async function postData() {

    // POST request using fetch with async/await
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ date: Date.now().toString(), poids: 113.8 })
    };
    const response = await fetch(`/insert?date="2023-10-30"&poids=113.8`);
    const data = await response.json();
    console.log(data);

  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={postData}></button>
        <div className="container">
          {data ?
            <Grid data={data} />
            :
            <p>"Loading..."</p>
          }
        </div>
        Over
      </header>


    </div>
  );
}

export default App;