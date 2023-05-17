// import { useState } from "react";

// export default function DataTable({ data }) {
//   const [searchQuery, setSearchQuery] = useState("");

//   const filteredData = data.filter((row) => {
  
//         const rowValues = Object.values(row).map((value) => value.toLowerCase());
//         const searchValue = searchQuery.toLowerCase();
//         return rowValues.some((value) => value.includes(searchValue));
      
      
//     return (
//       row.column1.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       row.column2.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       row.column3.toLowerCase().includes(searchQuery.toLowerCase())
//     );
//   });

//   return (
//     <div>
//       <input
//         type="text"
//         value={searchQuery}
//         onChange={(e) => setSearchQuery(e.target.value)}
//       />
//       <table>
//         <thead>
//           <tr>
//             <th>Column 1</th>
//             <th>Column 2</th>
//             <th>Column 3</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredData.map((row) => (
//             <tr key={row.id}>
//               <td>{row.column1}</td>
//               <td>{row.column2}</td>
//               <td>{row.column3}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

