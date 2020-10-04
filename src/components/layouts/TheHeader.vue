<template>
  <nav class="navbar navbar-default navbar-fixed-top">
	  <div class="container">

<!-- 图片logo位置 -->
		  <div class="navbar-header">
			  <router-link to="/" class="navbar-header navbar-brand">
				  <span class="title">{{ logo.title }}</span>
				  <img v-bind:src="logo.src" v-bind:alt="logo.title"  height="20px"/>
			  </router-link>
		  </div>
		  
	  <!-- 导航栏内容 -->
		  <div id="top-navbar-collapse" v-bind:class="['collapse','navbar-collapse' ] ">
			  <ul class="nav navbar-nav">
				  <li v-for="(item,index) in navList" @click="changeNavIndex(index)" v-bind:class="{active: index===activeNavIndex}">

						  <router-link v-bind:to="item.link"  > {{ item.page }}</router-link>

				  </li>
			  </ul>
		  </div>
		  

	  </div>
  </nav>
</template>

<script>
export default {
  name: 'TheHeader',
  data(){
	  return {
		  logo:{
			  src: 'logo.png',
			  title:"tools"
		  },
		  navList:[
					{
					  page:"首页",
					  link:'/'
					},
					{
						page:"文件切割",
						link:'/csvcut',
					},
					{
						page:"机器学习",
						link:'/maclearn',
					},
					{
						page:"建议留言",
						link:'/mesboard',
					},
				],
		  activeNavIndex: 0,
		  showCollapsedNav: false
	  }
	  },
  beforeCreate(){
	  console.log('这是创建前');
  },
  methods:{
	  changeNavIndex(index){
		  // console.log("这是改变前",index);
		  this.activeNavIndex = index;
		  // console.log("这是改变后",index);
	  },
  }
}
</script>


<style scoped>

.title{
	display: none;
}
.navbar-fixed-top{
	background-color: white;
}

</style>
