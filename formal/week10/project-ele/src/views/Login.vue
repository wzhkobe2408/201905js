<template>
  <div class="login-box">
    <div class="card">
      <el-card shadow="always">
        <div slot="header">
          欢迎登陆
        </div>
        <div>
          <el-form>
            <el-form-item label="姓名">
              <el-input v-model="user.uname"></el-input>
            </el-form-item>
          </el-form>
          <el-form>
            <el-form-item label="密码">
              <el-input v-model="user.pwd"></el-input>
            </el-form-item>
          </el-form>
          <el-form>
            <el-form-item>
              <el-button type="primary" @click="login">登陆</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import * as Auth from '../api/auth'
export default {
  name: 'Login',
  data () {
    return {
      user: {
        uname: '',
        pwd: ''
      }
    }
  },
  methods: {
    async login () {
      let res = await Auth.login(this.user)
      if (res.code === 0) {
        localStorage.setItem('ACCESS_TOKEN', res.data.token)
        this.$store.commit('updateToken', { token: res.data.token })
        this.$router.push('/')
      } else {
        this.$message.error(res.msg)
      }
    }
  }
}
</script>

<style scoped lang="less">
.login-box {
  position: fixed;
  width: 100%;
  height: 100%;
  background: #545c64;
  display: flex;
  justify-content: center;
  align-items: center;

  .card {
    width: 400px;
    height: 300px;
    /*border: 2px solid #409eff;*/
  }
}
</style>
