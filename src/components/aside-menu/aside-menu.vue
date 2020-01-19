<template>
  <div class="">
     <Menu active-name="1-2" :open-names="['1']">
        <div v-for="(item,index) in curMenuList" :key="index">
            <asideMenuItem :menuChild="item"></asideMenuItem>

        </div>
       <!-- <Submenu name="1">
            <template slot="title">
                <Icon type="ios-analytics" />
                Navigation One
            </template>
            <MenuGroup title="Item 1">
                <MenuItem name="1-1">Option 1</MenuItem>
                <MenuItem name="1-2">Option 2</MenuItem>
            </MenuGroup>
            <MenuGroup title="Item 2">
                <MenuItem name="1-3">Option 3</MenuItem>
                <MenuItem name="1-4">Option 4</MenuItem>
            </MenuGroup>
        </Submenu>
        <Submenu name="2">
            <template slot="title">
                <Icon type="ios-filing" />
                Navigation Two
            </template>
            <MenuItem name="2-1">Option 5</MenuItem>
            <MenuItem name="2-2">Option 6</MenuItem>
            <Submenu name="3">
                <template slot="title">Submenu</template>
                <MenuItem name="3-1">Option 7</MenuItem>
                <MenuItem name="3-2">Option 8</MenuItem>
            </Submenu>
        </Submenu>
        <Submenu name="4">
            <template slot="title">
                <Icon type="ios-cog" />
                Navigation Three
            </template>
            <MenuItem name="4-1">Option 9</MenuItem>
            <MenuItem name="4-2">Option 10</MenuItem>
            <MenuItem name="4-3">Option 11</MenuItem>
            <MenuItem name="4-4">Option 12</MenuItem>
        </Submenu> -->
    </Menu>
  </div>
</template>

<script>
import API from "@/api/api.js"
import axios from "axios"
import asideMenuItem from "@/components/aside-menu/aside-menu-item.vue"
export default {
  name:"",
  mixins:[],
  props:{

  },
  components:{
    asideMenuItem,

  },
  data(){
    return{
        theme1: 'light',
        curMenuList:[]


    }
  },
  watch:{

  },
  computed:{

  },
  methods:{  
    getMenu(){
        let params={

        }
        axios({
            url:API.getMenuList,
            method:"get",
            data:params,


        }).then(res=>{
            console.log(res);
            this.curMenuList=res.data.data.menuList;
            console.log(this.curMenuList)
        })
    }
    
  } ,
       
  mounted(){
     this.getMenu()
  

  },
  created(){

  },

}
</script>
