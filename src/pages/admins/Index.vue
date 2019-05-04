<template>
  <div>
    <div class="tabs is-centered">
      <ul>
        <li>
          <router-link to="/admin">All</router-link>
        </li>
        <li>
          <router-link to="/admin/new">New Product</router-link>
        </li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

