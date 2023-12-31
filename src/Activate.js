

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


const Activate = ({ match }) => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const activateAccount = async () => {
      try {
        const { token } = useParams;
        const response = await axios.get(`http://localhost:3001/activate/${token}`);
        setMessage(response.data.message);
      } catch (error) {
        setMessage(error.response.data.error);
      }
    };

    activateAccount();
  }, [match.params]);

  return (
    <div>
      <h2>Account Activation</h2>
      <p>{message}</p>
    </div>
  );
};

export default Activate;

