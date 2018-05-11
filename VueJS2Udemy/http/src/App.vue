<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Http</h1>
                <div class="form-group">
                  <label for="name">Username:</label>
                  <input type="text" class="form-control" v-model="user.username">
                </div>
                <div class="form-group">
                  <label for="name">Email:</label>
                  <input type="email" class="form-control" v-model="user.email">
                </div>
                <button class="btn btn-primary" @click="submit">Submit</button>
            </div>
        </div>
        <hr>
        <div class="row">
          <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
            <button class="btn btn-primary" @click="fetchData">Get data</button>
            <ul>
              <li v-for="(user, index) in users" :key="index">
                userName: {{ user.username }}
                UserEmail: {{ user.email }}
              </li>
            </ul>
          </div>
        </div>
    </div>
</template>

<script>
    export default {
      data(){
        return {
          user: {
            username: '',
            email: '',
          },
          users: []
        }
      },
      methods: {
        submit(){
          this.$http.post('', this.user)
            .then(res => {
              console.log(res);
            }, error => {
              console.log(error);
            })
        },
        fetchData(){
          this.$http.get('')
            .then(res => {
              return res.json();
            })
            .then(data => {
              const resArray = [];
              for (const key in data){
                resArray.push(data[key]);
              }
              this.users = resArray;
            })
        }
      }
    }
</script>

<style>
</style>
