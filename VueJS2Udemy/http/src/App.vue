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
                  <label for="email">Email:</label>
                  <input type="email" class="form-control" v-model="user.email">
                </div>
                <button class="btn btn-primary" @click="submit">Submit</button>
            </div>
        </div>
        <hr>
        <div class="row">
          <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
            <label for="node">Choose a database:</label>
            <input type="text" class="form-control" v-model="node">
            <br><br>
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
          node: 'data',
          users: [],
          resource: {}
        }
      },
      methods: {
        submit(){
          // this.$http.post('data.json', this.user)
          //   .then(res => {
          //     console.log(res);
          //   }, error => {
          //     console.log(error);
          //   })
          // this.resource.save({}, this.user);
          this.resource.saveAlt(this.user);
          this.resetData();
        },
        fetchData(){
          // this.$http.get('.json')
          //   .then(res => {
          //     return res.json();
          //   })
          //   .then(data => {
          //     const resArray = [];
          //     for (const key in data){
          //       resArray.push(data[key]);
          //     }
          //     this.users = resArray;
          //   })
            this.resource.getData({node: this.node})
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
        },
        resetData(){
          this.user.username = '';
          this.user.email = '';
        }
      },
      created(){
        const customActions = {
          saveAlt: { method: 'POST', url: 'alternative.json'},
          getData: { method: 'GET'}
        }
        // this.resource = this.$resource('data.json', {}, customActions);
        this.resource = this.$resource('{node}.json', {}, customActions);
      }
    }
</script>

<style>
</style>
