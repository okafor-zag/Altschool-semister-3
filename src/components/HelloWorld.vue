<template>
  <div class="container">
    <h1>Count</h1>
    <span>{{ count }}</span>
    <button class="reset-btn" @click="reset">Reset</button>
    <input type="number" placeholder="Set Counter" v-model="value" />
    <button class="set-value" @click="setValue">Set Value</button>
    <button class="increase-btn" @click="increment">Increment</button>
    <button class="decrease-btn" @click="decrement">Decrement</button>
    
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data() {
    return {
      value: 0
    }
  },
  computed: {
    ...mapState({
      count: state => state.count,
      anotherCount: state => state.anotherCount
    })
  },
  methods: {
    ...mapActions([
      'setCountAction',
      'setAnotherCountAction'
    ]),
    increment() {
      this.setCountAction(this.count + 1)
    },
    decrement() {
      this.setCountAction(this.count - 1)
    },
    reset() {
      this.setCountAction(0)
    },
    setValue() {
      this.setCountAction(this.value)
    }
  }
}
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: #3a5b7c ;
  color: #fff;
  font-size: 20px;
}

.container h1 {
  font-size: 60px;
  text-shadow: 4px 3px 5px rgb(20, 2, 2);
}

span{
  font-size: 200px;
  padding: 3px;
  text-shadow: 4px 3px 5px rgb(20, 2, 2);
}

input{
  font-size: 30px;
  padding: 5px;
  margin: 15px;
  box-sizing: border-box;
  border-radius: 15px;
  box-shadow: 5px 6px 10px rgba(7, 7, 7, 0.2);
}
.set-value{
  font-size: 20px;
  padding: 15px;
  margin: 20px;
  width: 350px;
  box-shadow: 3px 6px 10px rgba(7, 7, 7, 0.2);
  box-sizing: border-box;
  border-radius: 10px;
  background-color: #ffffffcb;
  color: #000;
}

.increase-btn{
  font-size: 15px;
  padding: 15px;
  margin: 10px;
  width: 250px;
  box-shadow: 3px 6px 10px rgba(7, 7, 7, 0.2);
  box-sizing: border-box;
  border-radius: 10px;
  background-color: #ffffff5b;
  color: #000;
  position: absolute;
  left: 10px;
}

.decrease-btn{
  font-size: 15px;
  padding: 15px;
  margin: 10px;
  width: 250px;
  box-shadow: 3px 6px 10px rgba(7, 7, 7, 0.2);
  box-sizing: border-box;
  border-radius: 10px;
  background-color: #ffffff5b;
  color: #000;
  position: absolute;
  right: 10px;
}
.reset-btn{
  font-size: 25px;
  padding: 15px;
  margin: 20px;
  width: 180px;
  box-shadow: 3px 6px 10px rgba(7, 7, 7, 0.2);
  box-sizing: border-box;
  border-radius: 10px;
  background-color: #ffffff5b;
  color: #000;
}

@media screen and (max-width: 1024px){
  .increase-btn,
  .decrease-btn{
    width: 100px;
    font-size: 10px;
  padding: 10px;
  margin: 5px;
  }

  span{
    font-size: 150px;
    padding: 0;
    margin: 0;
  }

  input{
    font-size: 20px;
  padding: 5px;
  margin: 10px;
  box-sizing: border-box;
  border-radius: 15px;
  }
.set-value{
  font-size:15px;
  font-size: 15px;
  padding: 10px;
  margin: 10px;
  width: 250px;
}

  .reset-btn{
    font-size: 20px;
  padding: 10px;
  margin: 15px
  }
}
</style>
