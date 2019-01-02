<template>
  <div class="home">
    <img
      alt="Vue logo"
      src="../assets/logo.png"
    >
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <button @click="handleClick('back')">返回上一页</button>
    <button @click="handleClick('push')">去子页面</button>
    <button @click="handleClick('replace')">替换页面</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  },
  methods: {
    handleClick(type) {
      if (type === "back") this.$router.back();
      else if (type === "push")
        this.$router.push({
          name: "child",
          query:{
            name:'123'
          }
        });
      else if (type === "replace")
        this.$router.replace({
          name: "parent"
        });
    }
  }
};
</script>
