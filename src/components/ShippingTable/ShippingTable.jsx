// import { useContext } from "react";
// import { ShippingContext } from "../../context/ShippingContext";
// import './ShippingTable.css';
// const ShippingTable = () => {
//   const { boxes } = useContext(ShippingContext);
//   return (
//     <table>
//       <thead>
//         <tr>
//           <th>Name</th>
//           <th>Weight (kg)</th>
//           <th>Color</th>
//           <th>Destination</th>
//           <th>Cost (INR)</th>
//         </tr>
//       </thead>
//       <tbody>
//         {boxes.map((box, index) => (
//           <tr key={index}>
//             <td>{box.name}</td>
//             <td>{box.weight}</td>
//             <td><div style={{ backgroundColor: box.color, width: 20, height: 20 }}></div></td>
//             <td>{box.destination}</td>
//             <td>{box.cost.toFixed(2)}</td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };

// export default ShippingTable;

import { useContext } from "react";
import { ShippingContext } from "../../context/ShippingContext";
import "./ShippingTable.css";

const ShippingTable = () => {
  const { boxes } = useContext(ShippingContext);

  return (
    <div className="table-container">
      <h2>Shipping Boxes</h2>
      {boxes.length === 0 ? (
        <p className="no-data">No data available</p>
      ) : (
        <table className="shipping-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Weight (kg)</th>
              <th>Color</th>
              <th>Destination</th>
              <th>Cost (INR)</th>
            </tr>
          </thead>
          <tbody>
            {boxes.map((box, index) => (
              <tr key={index}>
                <td>{box.name}</td>
                <td>{box.weight}</td>
                <td>
                  <div
                    className="color-box"
                    style={{ backgroundColor: box.color }}
                  ></div>
                </td>
                <td>{box.destination}</td>
                <td>{box.cost.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ShippingTable;
