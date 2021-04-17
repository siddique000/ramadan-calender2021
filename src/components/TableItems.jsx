import React from 'react'


const TableItems = ({ item }) => {
   const currentDate = () => {
      let today = new Date();
      let dd = String(today.getDate()).padStart(2, '0');
      let mm = String(today.getMonth() + 1).padStart(2, '0');
      var yyyy = today.getFullYear();

      return `${dd}/${mm}/${yyyy}`;
   }

   return (
      <tr className={currentDate() === item.date ? 'table-success':''}>
         <td>{item.id}</td>
         <td>{`${item.date} | ${item.day}`}</td>
         <td>{item.sahriTime}</td>
         <td>{item.fajarStart}</td>
         <td>{item.iftarTime}</td>
      </tr>
   )
}

export default TableItems



