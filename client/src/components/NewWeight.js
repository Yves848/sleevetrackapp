import React, { useEffect } from "react";

export default function NewHeight(props) {


  const [date, setDate] = React.useState("");
  const [poids, setPoids] = React.useState(115);

  useEffect(() => {
    const d = new Date(Date.now());
    setDate(`${d.getFullYear().toFixed()}-${d.getMonth()+1}-${d.getDate().toFixed().padStart(2,'0')}`);
  },[]);

  const handleDateChange = (event) => {
    setDate(event.target.value);
  }

  const handlePoidsChange = (event) => {
    setPoids(event.target.value);
  }

  return (
    <div className="flex flex-col w-full items-center gap-1 mt ">
      <form className="flex flex-row p-4 items-baseline w-4/6 justify-evenly border border-blue-500 rounded" >
        <label className="block"><span className="block text-sm font-medium text-slate-300">Date</span>
          <input className="bg-slate-600 border-spacing-2 font-semibold text-white border rounded p-2"
            id="date"
            name="date"
            placeholder="Date"
            type="date"
            value={date}
            onChange={handleDateChange}></input>
        </label>
        <label className="block"><span className="block text-sm font-medium text-slate-300">Poids</span>
          <input className="bg-slate-600 border-spacing-2 font-semibold text-white border rounded p-2"
            id="poids"
            name="poids"
            placeholder="Poids"
            type="number"
            step="0.1"
            value={poids}
            onChange={handlePoidsChange}></input>
        </label>
      </form>
      <div className="flex flex-col items-center my-2 w-4/6 h-10">
        <button className="w-full h-full bg-red-400 border rounded border-b-rose-300" onClick={(e) => props.onClick(date,poids)}>Ajouter</button>
      </div>
    </div>
  );
}
