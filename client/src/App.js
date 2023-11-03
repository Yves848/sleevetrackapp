import React from "react";
import Grid from './components/Grid';
import NewWeight from "./components/NewWeight";
import Header from "./components/Header";
import { useTheme, Theme, Button, Swap } from "react-daisyui" 

function App() {
  const [data, setData] = React.useState(null);
  const {
    theme,
    setTheme
  } = useTheme();

  React.useEffect(() => {
    loadData()
    applyTheme();
  }, []);

  const [isDark, setisDark]= React.useState(true);

  function loadData() {
    fetch("evolution", { mode: "no-cors" })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      }
      );
  }

  function applyTheme() {
    let th = ""
    setisDark((isDark) => setisDark(!isDark));
    (isDark ?
      th = "light" : th = "dark");
    setTheme(th);
    document.getElementsByTagName('html')[0].setAttribute('data-theme', th);
  }

  async function handleDelete(event, id) {
    console.log(`delete?id${id}`);
    const response = await fetch(`/delete?id=${id}`);
    const res = await response.json();
    console.log(res);
    loadData()
  }

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
          <Grid data={data} onDelete={handleDelete} />
          :
          <div>"Loading..."</div>
        }
        <Swap onElement="On" offElement="Off" rotate="true" active={isDark} onClick={applyTheme}></Swap>
      </div>
    </div>
  );
}

export default App;