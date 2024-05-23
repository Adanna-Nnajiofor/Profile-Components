import React from "react";

function UserDetails({ user }) {
  return (
    <div className="card">
     <h2>{user.Name}</h2> <hr/>
      <p><strong>Description:</strong> {user.Bio}</p>
      <p><strong>Date of Birth:</strong> {user.DateOfBirth}</p>
    </div>
  );
}

export default UserDetails;
