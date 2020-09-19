<template>
  <div class="navbar navbar-default topnav">
	  <div class="container">
		  <div class="navbar-header">
			  <a href="./" class="navbar-brand">
				  <img v-bind:src="logo.src" v-bind:alt="logo.title"  height="20px"/>
			  </a>
		  </div>
	  <!-- 导航栏 -->
		  <div id="top-navbar-collapse" class="collapse navbar-collapse">
			  <ul class="nav navbar-nav">
				  <li v-for="item in navList">
					  <a href="#">{{ item }}</a>
				  </li>
			  </ul>
		  </div>
	  </div>
  </div>
</template>

<script>
export default {
  name: 'TheHeader',
  data(){
	  return {
		  logo:{
			  src: 'logo.png',
			  title:"工具集"
		  },
		  navList:["数据文件切割","机器学习应用","在线建议留言"]
	  }
	  },
  beforeCreate(){
	  console.log('这是创建前');
  }
}
</script>


<style scoped>
.title{
	display: none;
}
</style>
