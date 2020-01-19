<template>
  <div class="">
    <Submenu name="1">
      <template slot="title">
        <Icon type="ios-analytics" />
        {{menuChild.name}}
      </template>
      <!-- <div v-for="(item,index) in menuChild.children" :key="index" v-if="menuChild.children.length>0">
        <asideMenuItem :menuChild="item"></asideMenuItem>

      </div> -->

    </Submenu>

  </div>
</template>

<script>
// import asideMenuItem from "@/components/aside-menu/aside-menu-item.vue"

export default {
  name:"aaaPage",
  mixins:[],
  props:{
    menuChild:{
      type: Object,
      default: {},

    }
  },
  components:{
    // asideMenuItem,
  },
  data(){
    return{
     

    }
  },
  watch:{

  },
  computed:{

  },
  methods:{
    
    
  } ,
       
  mounted(){
  

  },
  created(){

  },

}
</script>
