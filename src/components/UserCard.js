import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardImage,
  CCardText,
  CCardTitle,
  CCol
} from '@coreui/react'
import ReactImg from 'src/assets/images/react.jpg'

const UserCard = (props) => {
  const { id, name, email, gender, status } = props

  const _href = `#/theme/user_detail/${props.id}`

  return (
    <CCol xs={3}>
      <CCard style={{ width: '18rem' }}>
        <CCardImage orientation="top" src={ReactImg} />
        <CCardBody>
          <CCardTitle>{`${props.name}(${props.id})`}</CCardTitle>
          <CCardText>{props.email}</CCardText>
          <CButton href={_href}>{props.status}</CButton>
        </CCardBody>
      </CCard>
    </CCol>
  )
}

export default UserCard;
