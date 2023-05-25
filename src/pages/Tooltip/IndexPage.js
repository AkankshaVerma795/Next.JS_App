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
import React from 'react';
import * as Tooltip from '@radix-ui/react-tooltip';
import { PlusIcon } from '@radix-ui/react-icons';
// import './style.css';

const TooltipDemo = () => {
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <button className="IconButton">
            <PlusIcon />
          </button>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content className="TooltipContent" sideOffset={5}>
            <div className="card">
            <h1>Sign in </h1>
            <p>new User</p>
            <h2>Success login</h2>


            </div>
            <Tooltip.Arrow className="TooltipArrow" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
};

export default TooltipDemo;
