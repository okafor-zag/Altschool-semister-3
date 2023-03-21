<template>
    <div>
  <div class="card">
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
  color: #fff;
  padding: 30px;
  font-size: 20px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

.card .section {
  margin: 20px 50px;
  padding: 10px;
}
.counter-link {
  background-color: #333;
  color: #fff;
  font-size: 20px;
  padding: 10px;
  margin: 10px 0;
  border: none;
  border-radius: 5px;
  box-shadow: 4px 4px 0px 0px #000;
  cursor: pointer;
}

@media screen and (max-width: 1024px) {
  .card {
    font-size: 16px;
    padding: 10px;
  }
  .card .section{
    margin: 10px 20px;
    padding: 5px;
  }
}
</style>
