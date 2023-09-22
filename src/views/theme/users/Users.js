import React, { useEffect, useState } from 'react'
import { CRow } from '@coreui/react'
import userApi from '../../../api/UserApi.js';
import UserCard from '../../../components/UserCard.js'

function Users(props) {
  const [userList, changeUserList] = useState([]);

  const fetchUser = () => {
      userApi.getAll().then(response => changeUserList(response));
  }

  useEffect(() => {
    fetchUser();
  },[]);
  
  return (
    <CRow>
        {
          userList.map((user, index) => {
            return <UserCard  
              id={user.id}  
              name={user.name}  
              email={user.email}  
              gender={user.gender}  
              status={user.status}
            />
          })
        }
    </CRow>
  );
}

export default Users;
