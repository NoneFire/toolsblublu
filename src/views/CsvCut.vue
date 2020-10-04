<template>
	<div>
		
		<div class="alert alert-warning alert-dismissible" role="alert" v-show="uploadmes">
		  <button type="button" class="close" data-dismiss="alert" aria-label="Close" @click="uploadFiles">
			  <span aria-hidden="true">&times;</span>
		</button>
		  <strong>error!</strong> 该功能暂未实现
		</div>
	
		<div class="texts">
			<p>文件处理流程：上传文件 --> oss存储 --> 函数计算切割打包 --> 下载 --> 删除所有文件</p>
			<br />
			<p>本站不会存储您上传的任何文件，请放心使用</p>
		</div>
			<br />
			<br />
			<br />
			
		<div align="center">
		  <button type="button" class="uploadfile" @click="uploadFiles">上传文件</button>
		</div>

	</div>
</template>

<script>
	export default{
		name:"CsvCut",
		data(){
			return{
				uploadmes : false,
			}
		},
		methods:{
			uploadFiles(){
				
				this.uploadmes = !this.uploadmes
			},
			
		},
	}
</script>

<style scoped>
	.texts{
		margin:auto;
		text-align: center;
		background-color: white;
		border-radius:0.625rem;
		max-width: 60rem;
	}
	.uploadfile{
		padding: 5rem 11rem;
		text-align: center;
	}
</style>

