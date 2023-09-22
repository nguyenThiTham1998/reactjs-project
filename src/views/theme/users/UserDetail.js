import React, { useEffect, useState } from 'react'
import {useParams} from "react-router-dom"
import { 
  CRow,
  CCol,
  CCard,
  CCardImage,
  CCardBody,
  CCardTitle,
  CCardText
} from '@coreui/react'
import userApi from '../../../api/UserApi.js';
import ReactImg from 'src/assets/images/react.jpg'

function UserDetail(props) {
  const [UserAttrs, changeUserDeUserAttrs] = useState([]);

  const fetchUser = () => {
      userApi.getById(id).then(response => changeUserDeUserAttrs(response));
  }

  useEffect(() => {
    fetchUser();
  },[]);
  
  const { id } = useParams();

  return (
    <CRow>
      <CCol xs={5}>
        <CCard >
        <CCardImage
          component="svg"
          orientation="top"
          width="100%"
          height="600"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Placeholder"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
        >
          <title>Placeholder</title>
          <rect width="100%" height="100%" fill="#868e96"></rect>
        </CCardImage>
        </CCard>
      </CCol>
      <CCol xs={7}>
        <CCard style={{ width: '100%' }}>
          <CCardBody>
            <CCardTitle>{`${UserAttrs.name}(${UserAttrs.id})`}</CCardTitle>
            <CCardText>{UserAttrs.email}</CCardText>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
    

  );
}

export default UserDetail;
