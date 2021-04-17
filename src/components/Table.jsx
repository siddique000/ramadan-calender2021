import React from 'react'
import { Table } from 'react-bootstrap'
import TableItems from './TableItems'


const RamadanTable = ({ header, data }) => {
   return (
      <>
         <div className='header'>{`${header} - 10 DAY`}</div>
         <Table striped bordered className='table'>
            <thead>
               <tr className='table-info'>
                  <th>Ramadan </th>
                  <th>Date | Day </th>
                  <th>Sehri</th>
                  <th>Fajar</th>
                  <th>Iftar</th>
               </tr>
            </thead>
            <tbody>
               {data.map(item => (
                  <TableItems item={item} />
               ))}
            </tbody>
         </Table>

      </>
   )
}

export default RamadanTable
