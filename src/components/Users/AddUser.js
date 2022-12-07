import React, { useEffect, useState, useRef } from 'react';
import Cart from '../cart/Cart';
import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';

const AddUser = () => {
  const name = useRef();
  const email = useRef();
  const password = useRef();

  const localSignin = localStorage.getItem("signin");
  const localEmail = localStorage.getItem("email");
  const localPassword = localStorage.getItem("password");
  // const localName = localStorage.getItem("name");

  const [showHome, setShowHome] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(()=>{
    if(localSignin){
        setShowHome(true)
    }
    if(localEmail){
        setShow(true)
    }
   })

   const handleClick=()=>{
    if(name.current.value&&email.current.value && password.current.value)
   {
    //  localStorage.setItem("name",name.current.value)
     localStorage.setItem("email",email.current.value)
     localStorage.setItem("password",password.current.value)
     localStorage.setItem("signin",email.current.value)
     alert("Account created successfully!!")
     window.location.reload()
   }
}

  const handleSignIn = () => {
    if (email.current.value == localEmail && password.current.value == localPassword) {
      localStorage.setItem("signin", email.current.value);
      window.location.reload();
    } else {
      alert("Please enter valid Credential");
    }
  }

  const logoutHandler = () => {
      localStorage.removeItem("signin");
      window.location.reload()
  };

  const deleteaccountHandler = () => {
    localStorage.removeItem("signin");
    localStorage.removeItem("email");
    // localStorage.removeItem("name");
    localStorage.removeItem("password");
    localStorage.removeItem("CartItems");
    window.location.reload()
};


  // const addUserHandler = (event) => {
  //   event.preventDefault();
  //   const enteredName = nameInputRef.current.value;
  //   const enteredUserAge = ageInputRef.current.value;
  //   if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
  //     setError({
  //       title: 'Invalid input',
  //       message: 'Please enter a valid name and age (non-empty values).',
  //     });
  //     return;
  //   }
  //   if (+enteredUserAge < 1) {
  //     setError({
  //       title: 'Invalid age',
  //       message: 'Please enter a valid age (> 0).',
  //     });
  //     return;
  //   }
  //   props.onAddUser(enteredName, enteredUserAge);
  //   nameInputRef.current.value = '';
  //   ageInputRef.current.value = '';
  // };

  // const errorHandler = () => {
  //   setError(null);
  // };

  return (
    <div>

      {(showHome) ? <>
        <Grid container spacing={2}>
  <Grid item xs={6} md={8}>
    <Typography variant="h3" component="h2">
    Welcome !
    </Typography>
 
  </Grid>
  <Grid item xs={6} md={4}>
  <button onClick={logoutHandler}>Logout</button> 
 <span> <button onClick={deleteaccountHandler}> Delete Profile </button></span>
  </Grid>
  <Grid item xs={6} md={8}>
  <Typography variant="h4" component="h2">
  Your Cart is:
    </Typography>
  </Grid>
  <Grid item xs={6} md={4}>
 <Link to="/home"> 
 <Typography variant="h6" component="h2" ml={5}>
 Continue Shopping 
    </Typography>

 </Link>
  </Grid>
</Grid>
 
        <Cart / >
          
       </>   :
        (show ?
          <div className="container">
            <h1>Hello !</h1>
            <div className="input_space">
              <input placeholder="Email" type='text' ref={email} />
            </div>
            <div className="input_space">
              <input placeholder="Password" type='password' ref={password} />
            </div>
            <button onClick={handleSignIn}>Sign In</button>
          </div>
          :
          <div className="container">
            <div className="input_space">
              <input placeholder="Name" type='text' ref={name} />
            </div>
            <div className="input_space">
              <input placeholder="Email" type='text' ref={email} />
            </div>
            <div className="input_space">
              <input placeholder="Password" type='password' ref={password} />
            </div>
            <button onClick={handleClick}>Sign Up</button>
          </div>)
      }
    </div >


  );
};

export default AddUser;



// <React.Fragment>
// {error && (
//   <ErrorModal
//     title={error.title}
//     message={error.message}
//     onConfirm={errorHandler}
//   />
// )}
// <Card className={classes.input}>
//   <form onSubmit={addUserHandler}>
//     <label htmlFor="username">Username</label>
//     <input id="username" type="text" ref={nameInputRef} />
//     <label htmlFor="age">Age (Years)</label>
//     <input id="age" type="number" ref={ageInputRef} />
//     <button type="submit">Add User</button>
//   </form>
// </Card>
// </React.Fragment>