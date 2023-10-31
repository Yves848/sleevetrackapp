import './Grid.css';

function toDAte(date) {
  // console.log(date);
  // const date1 = String(date).match('/\d{4}-\d{2}-\d{2}/gm');
  const date1 = String(date).match(/\d{4}-\d{2}-\d{2}/);
  // console.log(date1);
  return date1;
}

export default function Grid({ data }) {
  const listItems = data.rows.sort((a,b) => {
    console.log(a.date);

    if (a.date < b.date) {return 1}
    if (a.date > b.date) {return -1}
    return 0
  })
  .map((row => {
    return (
      <div className='row'>
        <p>{toDAte(row.date)}</p><p>{row.poids}</p>
      </div>
    );
  }))
  // console.log(listItems);
  return (
    <div className='grid'>{listItems}</div>);

}