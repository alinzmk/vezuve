import React, { useEffect, useState } from 'react';
import axios from 'axios';

  

const ApiServices = () => {
  
  

  axios.get("https://jsonplaceholder.typicode.com/todos/1")
      .then(res => console.log(res))
    
};

export default ApiServices;