<template>
   <ul>
    <li v-for="item in error" :key="item">{{item}}</li>
   </ul>

    <form >
        <label for="email">
            Email:

        </label>
        <input type="text" name="email" placeholder="email"  v-model="form.email"/>
        <br /><br />
        <label for="password">Password : </label>
            <input type="password" name="password" placeholder="password" v-model="form.password"/>

        <br /> <br />
            <select v-model="form.country">

                <option>India</option>
                <option>Bangladesh</option>
                <option>Japan</option>
            </select>
            <br /> <br />
            <label>PHP</label>
            <input type="checkbox" value="php" v-model="form.language" />
            <br /> <br />
            <label>C++</label>
            <input type="checkbox" value="c++" v-model="form.language" />
            <br /> <br />
            <label>Python</label>
            <input type="checkbox" value="python" v-model="form.language" />

            <br /> <br />
            <label>Female
            </label>
            <input type="radio" value="female" v-model="form.gender" />
            <label>Male
            </label>
            <input type="radio" value="male" v-model="form.gender" />
            

            <div>
                <button @click.prevent="login()">Submit</button>
            </div>
           
    </form>

</template>

<script>





export default{
      name:"formVue",
      data(){
        return{
            form :
            {
                email : "",
                password : "",
                country : " ",
                language : [],
                gender:"",
            },
            error:[],
        }
      },
      methods:{
        myfunction(){
            alert("You are a:"+ this.form.gender)
        },
        login(){
            this.error=[];
            for(const i in this.form){
                if(this.form[i]==="" || this.form[i].length===0){
                    this.error.push(i);
                    

                }

                

            }

            if(this.error.length===0)
            {
                alert("data submitted");
            }
            console.log(this.form)
        }
        
      }




}


</script>

<style>



</style>