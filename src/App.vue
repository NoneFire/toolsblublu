<template>
  <div id="wrap">
	  <TheHeader></TheHeader>
		<content class="container main-container">
			<router-view></router-view>
		</content>
	  <TheFooter></TheFooter>
  </div>

</template>


<script>
import TheHeader from '@/components/layouts/TheHeader'
import TheFooter from '@/components/layouts/TheFooter'
import CsvCut from '@/views/CsvCut'
import MesBoard from '@/views/MesBoard'
import HomePage from '@/views/HomePage'
import MacLearn from '@/views/MacLearn'

export default {
  name: 'App',
  components: {
	  TheHeader,
	  TheFooter,
	  CsvCut,
	  MesBoard,
	  HomePage,
	  MacLearn
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
	
	// @import "./styles/main";
	// @import "./styles/extra";
	

	body { 
			padding-top: 70px; 
			padding-bottom: 70px;
			background-color:rgb(246,246,246);
		}

</style>
