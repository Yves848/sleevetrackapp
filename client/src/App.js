import React from "react";
import Grid from './components/Grid';
import NewWeight from "./components/NewWeight";
import Header from "./components/Header";
import { useTheme, Theme, Button, Swap } from "react-daisyui"

function App() {
  let th = "light"
  const [data, setData] = React.useState(null);
  const [isDark, setisDark] = React.useState(true);
  const {
    theme,
    setTheme
  } = useTheme();

  React.useEffect(() => {
    loadData()
    applyTheme();
  });




  function loadData() {
    fetch("evolution", { mode: "no-cors" })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      }
      );
  }

  function handleThemeClick() {
    console.log('handleThemeClick')
    setisDark((isDark) => !isDark)
    applyTheme()
  }

  function applyTheme() {
    //console.log('applyTheme',isDark);
    (isDark ?
      th = "dark" : th = "light");
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
        <Swap onElement="On" offElement="Off" rotate="true"   onChange={handleThemeClick} ></Swap>
        <Swap onElement="On" offElement="Off" rotate="true" ></Swap>
      </div>
    </div>
  );
}

export default App;