import React from "react";

class NewWeight extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="flex flex-col w-full items-center gap-1 mt border border-blue-500 rounded">
        <form className="flex flex-row gap-8 my-4 items-baseline w-3/6 justify-between">
          <label className="block"><span className="block text-sm font-medium text-slate-300">Date</span>
            <input className="bg-slate-600 border-spacing-2 font-semibold text-white border rounded p-2" id="date" name="date" placeholder="Date" type="date"></input>
          </label>
          <label className="block"><span className="block text-sm font-medium text-slate-300">Poids</span>
            <input className="bg-slate-600 border-spacing-2 font-semibold text-white border rounded p-2" id="poids" name="poids" placeholder="Poids" type="number"></input>
          </label>
        </form>
        <div className="flex flex-col items-center mb-2 w-3/6 h-10">
          <button className="w-full h-full bg-red-400 border rounded border-b-rose-300" onClick={() => this.props.onClick()}>Post</button>
        </div>
      </div>
    );
  }
}

export default NewWeight;