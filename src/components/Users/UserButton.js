import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';

const UserButton = () => {
  const localSignin = localStorage.getItem("signin");
  const localEmail = localStorage.getItem("email");
  const [label, setlabel] = useState("Sign Up");

  useEffect(() => {
    if (localSignin) {
      setlabel("Account");
      return;
    }
    if (localEmail) {
      setlabel("Sign in");
    }
  }, [localEmail, localSignin])


  return (
    <Link to='/add-user'>
      <Typography ml="15px" mr="15px" variant="h6" component="div" sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }} >
        {label}
      </Typography>
    </Link>
  );
};

export default UserButton;

