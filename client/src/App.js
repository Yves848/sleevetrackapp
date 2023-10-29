import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Grid from './components/Grid';

function App() {
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
    fetch("/evolution")
      .then((res) => res.json())
      .then((data) => {
        
        setData(data);
      }
      );
  }, []);

  return (
    <div className="App">
      <header className="App-header">
      <div>
        {data ?
        <Grid data={data}/>
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