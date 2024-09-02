import React from "react";

export default function ResultTable() {
  return (
    <div>
      <table>
        <thead className="table-header">
          <tr className="table-row">
            <td>Name</td>
            <td>Attempts</td>
            <td>Score</td>
            <td>Result</td>
          </tr>
        </thead>
        <tbody>
          <tr className="table-body">
            <td>Results</td>
            <td>03</td>
            <td>30</td>
            <td>passed</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
