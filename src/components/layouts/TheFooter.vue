
<template>
  <footer class="footer">
    <div >
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

  </footer>
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
		line-height: 0rem;
	}
	.footer {
	  position: absolute;
	  width: 100%;
	  bottom: 0;
	  height: 4rem;
	  background-color: lightgray;
	  border-radius: 0.3rem;
	}
</style>
