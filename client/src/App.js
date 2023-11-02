import React from "react";
import Grid from './components/Grid';
import NewWeight from "./components/NewWeight";
import Header from "./components/Header";

function App() {
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
    fetch("evolution", { mode: "no-cors" })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      }
      );
  }, []);



  async function postData(date, poids) {
    const response = await fetch(`/insert?date=${date}&poids=${poids}`);
    const res = await response.json();
    console.log(res);
    fetch("evolution", { mode: "no-cors" })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      }
      );
  }

  return (
    <div className="flex flex-col w-full">
      <Header></Header>
      <NewWeight onClick={postData} />
      <div className="h-64 flex flex-col items-center">
        {data ?
          <Grid data={data} />
          :
          <div>"Loading..."</div>
        }
      </div>
    </div>
  );
}

export default App;