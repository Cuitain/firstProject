<template>
    <div class="layout">
        <Layout>
            <Sider :width="240" ref="side1" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed">
                <asideMenu></asideMenu>
            </Sider>
            <Layout>
                <Header :style="{padding: 0}" class="layout-header-bar">
                    <Icon @click.native="collapsedSider" :style="{margin: '0 20px'}" type="md-menu" size="24"></Icon>
                </Header>
                <Content :style="{margin: '20px', background: '#fff', minHeight: '260px'}">
                    <router-view></router-view>
                </Content>
            </Layout>
        </Layout>

    </div>

</template>

<script>
import asideMenu from "@/components/aside-menu/aside-menu.vue"
console.log(asideMenu)
export default {
  name:"",
  mixins:[],
  props:{

  },
  components:{
    asideMenu,
  },
  data(){
    return{
     isCollapsed: false

    }
  },
  watch:{

  },
  computed:{
  

  },
          
  methods:{
    collapsedSider () {
        this.$refs.side1.toggleCollapse();
    }
    
    
  } ,
       
  mounted(){
  

  },
  created(){

  },

}
</script>
<style scoped>
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    .layout-header-bar{
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
    .layout-logo-left{
        width: 90%;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        margin: 15px auto;
    }
    .menu-icon{
        transition: all .3s;
    }
    .rotate-icon{
        transform: rotate(-90deg);
    }
    .menu-item span{
        display: inline-block;
        overflow: hidden;
        width: 69px;
        text-overflow: ellipsis;
        white-space: nowrap;
        vertical-align: bottom;
        transition: width .2s ease .2s;
    }
    .menu-item i{
        transform: translateX(0px);
        transition: font-size .2s ease, transform .2s ease;
        vertical-align: middle;
        font-size: 16px;
    }
    .collapsed-menu span{
        width: 0px;
        transition: width .2s ease;
    }
    .collapsed-menu i{
        transform: translateX(5px);
        transition: font-size .2s ease .2s, transform .2s ease .2s;
        vertical-align: middle;
        font-size: 22px;
    }
    .ivu-layout-content{
        height:700px;
    }
</style>