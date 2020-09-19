<template>
  <!-- <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1> 哈喽</h1>
  </div> -->
  <div class="container">
	  
	  <!-- 引入TheHeader组件 -->
	  <div id="wrap">
		  <TheHeader></TheHeader>
	  </div>
	  
	  <br>
	  <br>
	  <br>
	  
	  <div class="jumbotron">
		  <div class="container">
			  <h1>哈喽哈喽</h1>
			  <p>
				  这是测试测试
			  </p>
			<p>
				<a class="btn btn-primary btn-lg" href="http://www.bootcss.com/" role="button" target="_blank">
					<!-- Learn more -->
					<span class="glyphicon glyphicon-hand-right" aria-hidden="true">
					</span>
				</a>
			</p>
		  </div>
		  
	  </div>
	  

  
  <div class="jumbotron">
	  <div class="container">
		  <h1>fontawesome</h1>
		  <p><i>aa这是斜体</i>这是解释说明</p>
		  <p>
			  <i class="fa fa-camera"></i>
			  <i class="fa fa-camera fa-2x"></i>
			  <i class="fa fa-camera fa-3x"></i>
			  <i class="fa fa-camera fa-4x"></i>
			  <i class="fa fa-camera fa-5x"></i>
		  </p>
	  </div>
  </div>
  
  </div>
</template>


<script>
import TheHeader from '@/components/layouts/TheHeader'

export default {
  name: 'App',
  components: {
	  TheHeader
  }
}
</script>

<style lang="scss">
	$container-large-desktop: 1200px;
	$btn-primary-bg: #00b5ad;
	$btn-primary-border: #00b5ad;
	$label-primary-bg: #00b5ad;
	$pagination-active-bg: #00b5ad;
	$pagination-active-border: #00b5ad;
	$pagination-color: #00b5ad;
	$input-border-focus: #00b5ad;
	$link-color: #12c4c5;
	$link-hover-color: #22ddde;
	$icon-font-path: "~bootstrap-sass/assets/fonts/bootstrap/";
	$fa-font-path: "~font-awesome/fonts/";

	@import "~bootstrap-sass/assets/stylesheets/_bootstrap";
	@import "~font-awesome/scss/font-awesome";
	@import "./styles/main";
	@import "./styles/extra";
</style>
