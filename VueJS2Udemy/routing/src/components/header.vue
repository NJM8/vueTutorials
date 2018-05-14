<template>
  <ul class="nav nav-pills">
    <!-- the router link tag will output itself as an a tag, so you may think to use this for your link, but Vue adds the router-link-active class on this element for styling which makes it hard to use when styling the containing/parent element. You can specify what tag the router link should be when rendered then you can also specify what class to use for active class. Use exact to make sure that the active class is only added to the link when the path matches exactly what is in the to="" attribute, not just the root. -->
    <router-link to="/" tag="li" active-class="active" exact><a>Home</a></router-link>
    <router-link to="/user/10" tag="li" active-class="active"><a>User</a></router-link>
  </ul>
</template>
