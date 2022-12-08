<template>
<h1>Input</h1>
<input type="text" v-model="show"/>
<p>{{(show)}}</p>
<button @click="(count+=1)">+</button>
<button  @click="(count-=1)">-</button>
<p>{{count}}</p>
<!-- <ParentVue data="Sajib" id="123"/> -->


</template>

<script>
// import ParentVue from './parentVue.vue';

export default{
    name: "modifiersVue",
    data() {
        return {
            show: "",
            count: 0,

        }

    },
    watch:{
        count(val,prev){
            if(this.count<0){
                alert("Negative")
                this.count=0;
            }
            if(val>5 && prev<val){
                alert("wrong move bro")
                this.count=0;
            }
        }
    }
    // components: { ParentVue }
}



</script>