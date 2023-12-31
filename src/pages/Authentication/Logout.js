import PropTypes from 'prop-types'
import React, { useEffect } from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"

 
const Logout = props => {
  useEffect(() => {
    localStorage.removeItem("authUser")
    props.history.push(`/login`);
   },[])

  return <></>
}

Logout.propTypes = {
  history: PropTypes.object,
  logoutUser: PropTypes.func
}

export default  Logout
