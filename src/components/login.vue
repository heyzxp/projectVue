<template>
  <div class="boss">
    <div class="from_box">
      <h2>用户登陆</h2>
      <el-form :label-position="labelPosition" label-width="80px" :model="formData">
        <el-form-item label="用户名">
          <el-input v-model="formData.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" v-model="formData.password"></el-input>
        </el-form-item>
        <el-button type="primary" @click="login()" class="butt">登陆</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      labelPosition: "top",
      formData: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    login() {
      this.axios
        .post("login", this.formData)
        .then(res => {
          const {
            data: { data, meta }
          } = res;
          if (meta.status === 200) {
            localStorage.setItem("token", data.token);
            console.log(data.token);
            this.$router.push({
              name: "home"
            });
            return;
            // return console.log("登陆成功");
          }
          // 错误提示框
          this.$message.warning(meta.msg);
        })
        .catch(error => {});
    }
  }
};
</script>

<style>
.boss {
  background: skyblue;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.from_box {
  border-radius: 6px;
  padding: 40px;
  height: 300px;
  width: 600px;
  background: white;
}
.butt {
  width: 100%;
}
</style>
