import React from 'react';

function Workouts() {
  return (
    <div className="card">
      <div className="card-header">
        <h2 className="card-title">Workouts</h2>
      </div>
      <div className="card-body">
        <table className="table table-light">
          <thead>
            <tr>
              <th>Workout Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Running</td>
              <td>Cardio exercise</td>
            </tr>
            <tr>
              <td>Weightlifting</td>
              <td>Strength training</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Workouts;
