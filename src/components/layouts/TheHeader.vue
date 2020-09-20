<template>
  <div class="navbar navbar-default topnav">
	  <div class="container ">
		  <button type="button" class="navbar-toggle" @click="toggleNav">
		  	<span class="sr-only">Toggle navigation</span>
			<span class="icon-bar"></span>
			<span class="icon-bar"></span>
			<span class="icon-bar"></span>
		  </button>
		  
		  <router-link to="/csvcut"></router-link>
		  
		  <div class="navbar-header">
			  <router-link to="/" class="navbar-brand">
				  <span class="title">{{ logo.title }}</span>
				  <img v-bind:src="logo.src" v-bind:alt="logo.title"  height="20px"/>
			  </router-link>
		  </div>
	  <!-- 导航栏 -->
		  <div id="top-navbar-collapse" v-bind:class="['collapse','navbar-collapse',{ in:showCollapsedNav }]">
			  <ul class="nav navbar-nav">
				  <li v-for="(item,index) in navList" v-bind:class="{active: index===activeNavIndex}">
					  <a  pointer-events: none  @click="changeNavIndex(index)">
						  <router-link v-bind:to="item.link"  > {{ item.page }}</router-link>
					  </a>
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
		  this.activeNavIndex = index
	  },
	  toggleNav(){
		  console.log(this.showCollapsedNav);
		  this.showCollapsedNav = !this.showCollapsedNav;
	  }
  }
}
</script>


<style scoped>

.title{
	display: none;
}
.active > a {
	background: rgba(0,0,0,.03);
}
</style>
