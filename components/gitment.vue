<template>
  <div ref="comments">
  </div>
</template>
<script>
import "gitment/style/default.css";
import Gitment from "gitment";
export default {
  data() {
    return {};
  },
  props: {
    pageId: String,
    pageTitle:String
  },
  mounted() {
    let vm = this;
    const gitment = new Gitment({
      title:vm.pageTitle,
      id: vm.pageId, // optional
      owner: "chenyeah",
      repo: "chenyeah",
      oauth: {
        client_id: "11fa4735df6563f2e9c2",
        client_secret: "090bc3eeb2c0201fc159778fa067e6df1eb8a17b"
      }
      // ...
      // For more available options, check out the documentation below
    });
    gitment.render(this.$refs.comments);
  }
};
</script>
