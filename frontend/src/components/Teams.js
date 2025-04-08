import React from 'react';

function Teams() {
  return (
    <div className="card">
      <div className="card-header">
        <h2 className="card-title">Teams</h2>
      </div>
      <div className="card-body">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Team Name</th>
              <th>Members</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Team Alpha</td>
              <td>5</td>
            </tr>
            <tr>
              <td>Team Beta</td>
              <td>4</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Teams;
