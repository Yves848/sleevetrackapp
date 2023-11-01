import './Grid.css';

function toDAte(date) {
  const date1 = String(date).match(/\d{4}-\d{2}-\d{2}/);
  return date1;
}

export default function Grid({ data }) {
  const listItems = data.rows.sort((a, b) => {
    if (a.date < b.date) { return 1 }
    if (a.date > b.date) { return -1 }
    return 0
  })
    .map(((row,index) => {
      return (
        <p key={index} className='flex flex-row justify-between w-8/12'><span className="font-['Fira_Mono']">{toDAte(row.date)}</span><span className="font-['Fira_Mono']">{row.poids}</span></p>
      );
    }))

  return (
    <div className='flex flex-col items-center w-4/6 border overflow-y-auto'>
      <p className='flex flex-row justify-between w-8/12 sticky top-0 bg-slate-900 text-white'><span className="font-['Fira_Mono']">Date</span><span className="font-['Fira_Mono']">Poids</span></p>
      {listItems}
    </div>
  );

}