<template>
<h1>Non Props Vue</h1>
<div v-bind="$attrs">
    <li>Alma</li>
    <li>Tania</li>
    <li >{{data}}</li>
    <li v-bind="$attrs">{{$attrs}}</li>
</div>

</template>

<script>
export default{
    name:"parentVue",
    props:{
        data:String
    }

}


</script>