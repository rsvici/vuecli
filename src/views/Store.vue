<template>
  <div>
    <a-input v-model="inputValue" />
    <a-show :content='inputValue'></a-show>
    <p>{{inputValue}}</p>
    <p>$store：{{appName}}</p>
  </div>
</template>
<script>
import AInput from '_c/AInput.vue';
import AShow from '_c/AShow.vue';
import {mapState} from 'vuex';
export default {
  name:'store',
  data(){
    return{
      inputValue:''
    }
  },
  computed:{
    // appName(){
    //   return this.$store.state.appName
    // },
    ...mapState(['appName'])
  },
  components:{
    AInput,
    AShow
  }
}
</script>