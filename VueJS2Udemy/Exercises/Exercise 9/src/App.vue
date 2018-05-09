<template>
    <div class="container">
        <form>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <h1>Exercise 9: Forms</h1>
                    <hr>
                    <!-- Exercise 1 -->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <!-- Full Name (First Name + Last Name) -->
                    <!-- Mail -->
                    <!-- Password -->
                    <!-- Store Data? Yes/No -->
                    <div class="form-group">
                      <app-full-name v-model="fullName"></app-full-name>
                      <label for="lastName">Email:</label>
                      <input type="email" class="form-control" v-model="email">
                      <label for="password">Password:</label>
                      <input type="password" class="form-control" v-model="password">
                      <label for="switched">Store Data?</label>
                      <app-switch v-model="storeData"></app-switch>
                      <button
                        class="btn btn-primary"
                        @click.prevent="submitted">Submit</button>
                    </div>

                    <!-- Exercise 2 -->
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->

                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->
                </div>
            </div>
        </form>
        <hr>
        <div class="row" v-if="isSubmitted">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{ getFullName }}</p>
                        <p>Mail: {{ email }}</p>
                        <p>Password: {{ password }} </p>
                        <p>Store in Database?: {{ storeData ? 'Yes' : 'No' }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Switch from './Switch.vue'
import FullName from './FullName.vue'

export default {
  data() {
    return {
      fullName: {},
      email: "",
      password: "",
      storeData: true,
      isSubmitted: false
    }
  },
  methods: {
    submitted(){
      this.isSubmitted = true;
    }
  },
  computed: {
    getFullName(){
      return `${this.fullName.firstName} ${this.fullName.lastName}`
    }
  },
  components: {
    'app-switch': Switch,
    'app-full-name': FullName
  }
};
</script>

<style>

</style>
