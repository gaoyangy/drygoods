<template>
   <el-row class="sign">
     <el-col :xs="24" :sm="{span: 5,offset: 9}">
       <div class="title">
        欢迎登录
       </div>
       <el-row>
         <el-input
           v-model="account"
           placeholder="账号"
           type="text">
         </el-input>
         <el-input
           v-model="password"
           placeholder="密码"
           type="password"
           @keyup.enter.native="loginToDo">
         </el-input>
         <el-button type="primary" @click="loginToDo">登录</el-button>
       </el-row>
     </el-col>
   </el-row>
 </template>
 
 <script>
 export default {
   data () {
     return {
       account: '',
       password: ''
     };
   },
   methods: {
     loginToDo() {
       let reqbody = {
         name: this.account,
         password: this.password
       }
       this.$http.post('/auth/user', reqbody) // 将信息发送给后端
         .then((res) => {
           console.log(res);
           if(res.data.success){ // 如果成功
             sessionStorage.setItem('access-token',res.data.token); // 用sessionStorage把token存下来
             this.$message({ // 登录成功，显示提示语
               type: 'success',
               message: '登录成功！'
             });
             this.$router.push('/') // 进入todolist页面，登录成功
           }else{
             this.$message.error(res.data.info); // 登录失败，显示提示语
             sessionStorage.setItem('access-token',null); // 将token清空
           }
         }, (err) => {
             this.$message.error('请求错误！')
             sessionStorage.setItem('access-token',null); // 将token清空
         })
     }
   }
 };
 </script>
<style lang="sass">
@import '../../sass/sign/sign.sass'
</style>