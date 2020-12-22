<template>
  <div class="home">
    <div class="content">
      <contexts></contexts>
    </div>
    <div class="pages">
      <Affix :offset-top="20">
        <pages></pages>
      </Affix>
    </div>
  </div>
</template>
Contexts

<script>
import Contexts from "../components/Contents.vue";
import Pages from "../components/Pages.vue";
export default {
  components: {
    Contexts,
    Pages,
  },
};
</script>


<style lang="scss">
.home {
  display: block;
  width: 75%;
  margin: 0px auto;
  padding-top: 100px;
}
.pages {
  text-align: center;
}
</style>
