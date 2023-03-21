<template>
    <div class="container-btn">
      <h1 class="error">404 </h1>
      <p class="error1">Page Not Found</p>
      <p>The page you're looking for doesn't exist.</p>
      <RouterLink to="/"
      ><button class="btn">Back to Homepage</button></RouterLink
    >
    </div>
  </template>
  
  <script>
  export default {
    name: 'NotFound'
  }
  </script>
  
  <style>
  .container-btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #3a5b7c ;
    color: #fff;
    font-size: 20px;
  }
  .error {
    font-size: 62px;
    font-weight: 600;
    color: red;
  }

  .error1{
    font-size: 15px;
    font-weight: bold;
    color: seashell;
  }
  .btn{
    background-color: #333;
    border-radius: 5px;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    font-size: 10px;
    cursor: pointer;
  }
  </style>