<template>
  <header id="header">
    <h1>Andor Salga</h1>
    <nav>
      <ul>
        <li><router-link to="/#intro">Intro</router-link></li>
        <li><router-link to="/#about">About Me</router-link></li>
        <li><router-link to="/#work">Client Work</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {};
  },
};
</script>

<style>
</style>
