<template>
    <div class="cont">
        <div class="ht">
            一言
        </div>
        <div class="content">
            <!-- 『{{hitokoto.hitokoto}}』 -->
            {{hitokoto}}
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      hitokoto: ""
    };
  },
  mounted() {
    const hitokotoList = [
      "https://v1.hitokoto.cn/?c=d&encode=json",
      "https://api.lwl12.com/hitokoto/v1?encode=realjson"
    ];
    let select = Math.floor(Math.random() * 2);
    this.$axios
      .$get(hitokotoList[select])
      .then(res => {
        if (select == 0) {
          this.hitokoto = res.hitokoto;
        } else {
          this.hitokoto = res.text;
        }
      })
      .catch(e => {
        this.hitokoto = "过去也只是过去";
      });
  }
};
</script>

<style lang="less" scoped>
.cont {
  border-radius: 10px;
  background: #fff;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.02), 0 4px 10px rgba(0, 0, 0, 0.06);
}
.ht {
  padding: 0 30px;
  height: 56px;
  border-bottom: 1px solid #eee;
  background-image: linear-gradient(
    rgba(200, 200, 200, 0),
    rgba(200, 200, 200, 0.12)
  );
  box-shadow: 0 2px 5px -1px rgba(0, 0, 0, 0.05);
  color: rgba(0, 0, 0, 0.4);
  line-height: 56px;
}
.content {
  padding: 20px 10px;
  font-size: 14px;
  line-height: 18px;
}
</style>

