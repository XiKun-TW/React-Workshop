import React, { useState, useEffect, FunctionComponent } from "react";

import { UserInfo, getAllUser } from "../../api/user";

import "./index.css";

const UserListPage = () => {
  const [users, setUsers] = useState([] as UserInfo[]);

  useEffect(() => {
    getAllUser().then((response) => {
      setUsers(response.data);
    });
  }, []);

  return (
    <ul className="user-lists">
      {users.map((user) => (
        <li className="user-item" key={user.id}>
          <div className="user-name">
            {user.firstName + " " + user.lastName}
          </div>
          <div className="user-gender">{user.isMale ? "Male" : "Femal"}</div>
          <div className="user-grade">{user.grade}</div>
        </li>
      ))}
    </ul>
  );
};

export default UserListPage as FunctionComponent<{}>;
