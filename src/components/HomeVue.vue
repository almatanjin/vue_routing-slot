<template>
<h1>Slots in Vue js 3</h1>
<SlotVueVue>

    <template v-slot:header>
        <h1 >Alma</h1>
    </template>
    <button>Click</button>
    <template v-slot:footer>
        <input type="text"/>
    </template>
    <!-- <img src="https://thumbs.dreamstime.com/b/d-image-abstract-tunnel-diagonal-black-white-stripes-optical-illusion-168695979.jpg" /> -->
</SlotVueVue>
<button @click="(tab='PhpVue')">click for php</button>
<component :is="tab"/>

</template>

<script>

import PhpVue from './phpVue.vue';
import SlotVueVue from './SlotVue.vue';

export default {
    name:'HomeVue',
    components:{
    SlotVueVue,
    PhpVue
    
},
// beforeCreate(){
//     alert("before created")
// },
// created(){
//     alert("created")
// },

data(){
    return{

        tab:""
       

    }
}
}


</script>