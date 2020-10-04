
<template>
  <nav class="navbar navbar-default navbar-fixed-bottom" >
    <div class="container">
          <div class="links">
            <a v-for="item in contacts"  :href="item.link" >
              {{ item.title }}
            </a>
          </div>

          <!-- <br> -->
		  
		<div class="copyright">
          <span v-html="copyrignt"></span>
        </div>


    </div>

  </nav>
</template>

<script>
	export default {
		name:'TheFooter',
		data(){
			return {
				// description:"111",
				copyrignt:"copyrignt©2020 杂谈小站出品",
				contacts:[
					{
						title:"主站",
						link:"https://www.blublu.site",
					},
					{
						title:"博客",
						link:"https://blog.blublu.site",
					},
					{
						title:"github",
						link:"https://www.github.com/nonefire",
					},
					// {
					// 	title:"微信",
					// 	link:"",
					// 	imgs:"",
					// }
					
				],
				
			}
		}
	}
</script>

<style scoped>
	.links {
		text-align: center;
		line-height: 2.5rem;
	}
	.copyright{
		text-align: center;
		line-height: 2rem;
		color: gray;
	}
	.navbar-fixed-bottom{
		background-color: rgb(255, 255, 255);
	}


</style>
