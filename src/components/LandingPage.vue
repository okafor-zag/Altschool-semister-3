<template>
    <div>
  <div class="card">
    <h2 class=" welcome">Welcome to johnson's simple Counter App</h2>
    <p class="section">
      Welcome to our counter app! We're excited to help you keep track of
      anything and everything you need to count. Whether you're tracking
      inventory, people, or anything else, our app makes it easy to stay
      organized and informed.
    </p>
    <p class="section">
      We believe that keeping track of your counts shouldn't be a hassle, which
      is why we've designed our app to be simple, yet powerful. So go ahead,
      start counting and let us help you keep track of what matters most.
    </p>
    <RouterLink to="/counter"
      ><button class="counter-link">Counter App</button></RouterLink
    >
  </div>
</div>
</template>

<script></script>

<style>
.card {
  background-color: #3a5b7c;
  min-height: 100%;
  color: #fff;
  padding: 30px;
  font-size: 20px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

.welcome{
    font-size: 40px;
    text-align: center;
    margin: 30px 0;
    text-shadow: 5px 6px 9px #000;
    color: #2c3e50;;
}

.card .section {
  margin: 20px 60px;
  padding: 40px 0;
}
.counter-link {
  background-color: #333;
  color: #fff;
  font-size: 20px;
  padding: 20px;
  margin: 20px 0;
  border: none;
  border-radius: 5px;
  box-shadow: 4px 4px 0px 0px #000;
  cursor: pointer;
}

@media screen and (max-width: 1024px) {
  .card {
    font-size: 16px;
  }

  .welcome{
    font-size: 30px;
    margin: 20px 0;
  }


  .card .section{
    margin: 50px 0;
    padding: 5px 1px;
  }

  .counter-link{
    margin: 10px 0;
    padding: 10px;
  }
}
</style>
