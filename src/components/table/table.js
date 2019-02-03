import React from "react";
import "./table.css";

const square =  {
  width: 10,
  height: 10,
  backgroundColor: 'blue',
  marginTop: "7px"
}

const circle= {
  width: 10,
  height: 10,
  borderRadius: 10/2,
  backgroundColor: 'rgb(112, 25, 25)',
  marginTop: "7px"
}

const triangle = {
  width: 0,
  height: 0,
  borderStyle: 'solid',
  borderWidth: '0 5px 10px 5px',
  borderColor: 'transparent transparent rgb(0,191,255) transparent',
  marginTop: "7px"
}

const Table = props => (
  <div>
    <table className="table table-striped">
      <thead>
        <tr>
          <th className="">Region</th>
          <th className="">{props.startYear} jobs</th>
          <th className="">{props.endYear} jobs</th>
          <th className="">Change</th>
          <th className="">% Change</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="row"><span style={circle}></span>Region</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>{props.regionChange}</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td className="row" ><span style={square}></span>State</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>{props.stateChange}</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td className="row"><span style={triangle}></span>Nation</td>
          <td>Larry</td>
          <td>the Bird</td>
          <td>{props.nationChange}</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </table>
</div>
);

export default Table;

