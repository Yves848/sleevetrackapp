import './Grid.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';
function toDAte(date) {
  const date1 = String(date).match(/\d{4}-\d{2}-\d{2}/);
  return date1;
}

export default function Grid(props) {
  useEffect(()=>{
    console.log(props);
  },[])
  
  const handleclick = ((event, id) => {
    event.preventDefault();
    console.log('click',id);
  });

  const listItems = props.data.rows.sort((a, b) => {
    if (a.date < b.date) { return 1 }
    if (a.date > b.date) { return -1 }
    return 0
  })
    .map(((row, index) => {
      return (
        <div key={row.id}
          className='flex flex-row  w-8/12 hover:bg-blue-800'>
          <FontAwesomeIcon icon={faTrash} className='w-6 self-center cursor-pointer' onClick={event => props.onDelete(event,row.id)} ></FontAwesomeIcon>
          <FontAwesomeIcon icon={faEdit} className='w-6 self-center cursor-pointer' onClick={event => handleclick(event,row.id)} ></FontAwesomeIcon>
          <p className="w-6/12 font-['Fira_Mono']">{toDAte(row.date)}</p>
          <p className="w-4/12 font-['Fira_Mono']">{row.poids}</p></div>
      );
    }))

  return (
    <div className='flex flex-col items-center w-4/6 border overflow-y-auto '>
      <div className='flex flex-row w-8/12 sticky top-0 bg-slate-500'>
        <p className='w-6'></p>
        <p className='w-6'></p>
        <p className="w-6/12 font-['Fira_Mono']">Date</p>
        <p className="font-['Fira_Mono']">Poids</p></div>
      {listItems}
    </div>
  );

}