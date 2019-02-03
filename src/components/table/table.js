import React, { Component } from 'react';
import "./table.css";

class Table extends Component {

  render() {

    return(
      <div>
      

      <table className="table">
  <thead>
    <tr>
      <th scope="col">Region</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td scope="row">Region</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td scope="row">State</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td scope="row">Nation</td>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
</div>
    )
  };
};

export default Table;

