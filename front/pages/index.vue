<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">front</h1>
      <div>{{getList}}</div>
      <button @click="getAll">get</button>
      <button @click="post">post</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  async asyncData({ route, store, query, redirect }) {
    await store.dispatch("api/findAll");
  },
  methods: {
    async getAll() {
      console.log(await this.$store.dispatch("api/findAll"));
    },
    post() {
      const value = {
        text: "hello",
        name: "speed-text",
      };
      this.$store.dispatch("api/post", value).then((res) => console.log(res));
    },
  },
  computed: {
    ...mapGetters({
      getList: "api/getList",
    }),
  },
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
