// import { useState } from 'react';
// import SearchBox from './components/SearchBox';

// const IndexPage = () => {
//   const [data, setData] = useState([
//     { id: 1, name: 'John Doe', email: 'john.doe@example.com', phone: '555-1234' },
//     { id: 2, name: 'Jane Doe', email: 'jane.doe@example.com', phone: '555-5678' },
//     { id: 3, name: 'Bob Smith', email: 'bob.smith@example.com', phone: '555-9012' },
//   ]);

//   return (
//     <div>
//       <SearchBox data={data} setData={setData} />
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Phone</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((row) => (
//             <tr key={row.id}>
//               <td>{row.name}</td>
//               <td>{row.email}</td>
//               <td>{row.phone}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default IndexPage;
