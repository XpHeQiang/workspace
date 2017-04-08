<template>
  <div id="app">
    <header>I am top</header>
    <section>
        <router-link to="/sy" class="side">首页</router-link>
        <router-link to="/sj" class="side">商家</router-link>
        <router-link to="/my" class="side">我的</router-link>
    </section>
    <div class="main">
      <router-view></router-view>
    </div>
    <section>I am nr</section>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
  section{
    display: flex;
    position: relative;
  }
  section .side{
    flex: 1;
    height:40px;
    line-height: 40px;
    text-align: center;
  }
</style>
