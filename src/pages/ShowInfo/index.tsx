import React, { useState, useEffect } from "react";
import { getAllUsersInfo, UserInfo } from "../../api/user";

import './index.css';

export const ShowInfoPage = () => {
  const [allUsers, setAllUsers] = useState([] as UserInfo[]);

  useEffect(() => {
    getAllUsersInfo().then(result => {
      setAllUsers(result.data);
    });
  }, [setAllUsers]);

  return (
    <ul className="user-list">
      {allUsers.map(user => (
        <li className="user-item" key={user.id ? user.id : user.firstName + user.lastName}>
            <div className="user-basic">
                <div className="user-name">
                    {user.firstName} {user.lastName}
                    <small className="user-gender">
                        {user.gender}
                    </small>
                </div>
                <small className="user-grade">
                    {user.grade}
                </small>
            </div>
            <div className="user-address">
                <b>Address:</b> {`${user.province} ${user.city}`}
            </div>
            <div className="user-skill">
                <b>Skills:</b> {user.skill}
            </div>
        </li>
      ))}
    </ul>
  );
};
