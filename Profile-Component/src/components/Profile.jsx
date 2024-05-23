import React from "react";
import UserDetails from "./UserDetails";

function Profile({ users }) {
    return (
      <div>
        <h1>User Profiles</h1>
        {users.map((user, index) => (
          <UserDetails key={index} user={user} />
        ))}
      </div>
    );
  }

export default Profile;
