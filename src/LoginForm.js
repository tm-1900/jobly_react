import React from "react";


/**
 * Props:
 * - loggedInUser: login function received from parent 
 * 
 * App --> Routes --> LoginForm
 */

function LoginForm({ loggedInUser }) {

  handleSubmit(evt) {
    evt.preventDefault();
    // handle form input to send to parent
    // redirect to /companies using history
  }

  // renders JobCard based on companies
  // clicking on a CompanyCard will redirect to /companies/:handle
  return (
    <p>LoginForm</p>
  )
}

export default LoginForm;