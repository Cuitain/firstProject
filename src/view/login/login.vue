<template>
  <div class="layout-wrap">
    <div class="login-panel" style="background:#F9FAFC" >
       <h1 class="for-center">欢迎进入富茂链客</h1>
          <Form ref="formInline"  :rules="formRules" style="margin:20px " >
            <FormItem prop="user" style="width:330px "  >
              <Input type="text" v-model="formData.user" placeholder="请输入用户名 " style=" height:40px  " >
                <Icon type="ios-person-outline" slot="prepend"></Icon>
              </Input>
            </FormItem>

            <FormItem prop="password" style="width:330px  ">
              <Input type="password" v-model="formData.password" placeholder="请输入密码" >
                <Icon type="ios-lock-outline" slot="prepend"></Icon>
              </Input>
            </FormItem>
            <FormItem prop="user" style="width:330px  "  >
              <Input class="captcha-text" type="text" v-model="formData.captcha" placeholder="看不清？点击图片刷新" >
              
                <!-- <Icon type="ios-person-outline" slot="prepend"></Icon> -->
              </Input>
              <img @click="getCaptcha" class="captcha-img" :src="captchaUrl" />
            </FormItem>

            <Button type="primary"  @click="doLogin " class="login-btn for-center">登录</Button>
         </Form>
                <div style=" line-height:30px">
                  <span style="margin:0px 26px 5px 150px">忘记密码 </span>
                  <span style="color: #3fc497 ">手机号登陆</span>
                </div>
          
           
    </div>

  </div>
</template>

<script>
import axios from "axios"
import API from "@/api/api.js"
console.log(API.captchaUrl)
export default {
  name:"login",
  mixins:[],
  props:{

  },
  component:{

  },
  data(){
    return{
      captchaUrl: "",
      formData:{
        user:"",
        password:"",
        captcha:""
               
      },
      formRules:{
       

      },
      

    }
    
  },
  watch:{

  },
  computed:{

  },
  methods:{
    //刷新验证码
    getCaptcha(){
      this.captchaUrl=API.captchaUrl+new Date();

    },
    doLogin(){
      let params={
        username:this.formData.user,
        password:this.formData.password,
        captcha:this.formData.captcha,
      }
      axios({
        url:API.doLogin,
        method:"post",
        data:params,


      }).then(res=>{
        console.log(res)
        if(res.data.code==200){
          this.$router.push({
            path:"/home"//跳转
          })
        }
      })
      console.log(params)

    }
    
  } ,
       
  mounted(){
    this.getCaptcha();
    console.log(this.captchaUrl);


  },
  created(){

  },

}
</script>

<style scoped >
  .layout-wrap{
    width:100%;
    height:100%;
    background:url('../../assets/imgs/login-bg.png') no-repeat;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-size: cover;
  } 
  .login-panel{
    width:375px;
    height:340px;
    background: #ffffff;
    border-radius: 8px;
    position: fixed;
    left:50%;
    top:50%;
    transform:translate(-50%,-50%)
  }
  h1{
    font-size:22px;
    color:#555;
    line-height:24px;
    margin-top:20px;
    height:40px;
  }
  
  .login-btn{
    display: block;
    width: 90%;
    height:30px;
    text-align: center;
    background: #3fc497;
    margin: 0 auto;
    /* background-color:rgba(36,41,44,0);
    border-color:rgba(36,41,44,0) */
  }
  .for-center{
    text-align:center;
  }
  .captcha-text{
    width: 183px;

  }
  .captcha-img{
    width: 140px;
    height:32px;
    vertical-align: bottom;
  }
</style>
