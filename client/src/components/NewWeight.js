import React, { useEffect } from "react";
import { Button } from "react-daisyui"

export default function NewHeight(props) {


  const [date, setDate] = React.useState("");
  const [poids, setPoids] = React.useState(115);

  useEffect(() => {
    const d = new Date(Date.now());
    setDate(`${d.getFullYear().toFixed()}-${d.getMonth() + 1}-${d.getDate().toFixed().padStart(2, '0')}`);
  }, []);

  const handleDateChange = (event) => {
    setDate(event.target.value);
  }

  const handlePoidsChange = (event) => {
    setPoids(event.target.value);
  }

  return (
    <div className="flex flex-col w-full items-center gap-1 mt ">
      <form className="flex flex-row p-4 items-baseline w-4/6 justify-evenly border rounded" >
        <label className="block"><span className="block text-sm font-medium">Date</span>
          <input className="b border-spacing-2 font-semibold  border rounded p-2"
            id="date"
            name="date"
            placeholder="Date"
            type="date"
            value={date}
            onChange={handleDateChange}></input>
        </label>
        <label className="block"><span className="block text-sm font-medium ">Poids</span>
          <input className="border-spacing-2 font-semibold  border rounded p-2"
            id="poids"
            name="poids"
            placeholder="Poids"
            type="number"
            step="0.1"
            value={poids}
            onChange={handlePoidsChange}></input>
        </label>
      </form>
      <div className="flex flex-col items-center my-4 w-4/6 h-10">
        <Button className="w-full h-full border rounded " color="primary" onClick={(e) => props.onClick(date, poids)}>Ajouter</Button>
      </div>
    </div>
  );
}
