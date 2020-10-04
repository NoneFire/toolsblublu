<template>
 <body>
    <!-- 主体区域 -->
	<div class="message">
		<p align="center">如果您对本工具集网站有任何的建议，请在此处留下您的邮箱+留言，</p>
		<p align="center">作者看到后会回复。</p>
	</div>
	<br />
	<br />
    <section >
      <!-- 输入框 -->
      <div class="input">

		<div class="nickmes">
			<input autofocus="autofocus" autocomplete="off" placeholder="昵称" class="new-todo" v-model="name" />
		</div>
		
		<div class="nickmes">
			<input autofocus="autofocus" autocomplete="off" placeholder="邮箱" class="new-todo" v-model="name" />
		</div>
	
		<div >
			<input style="height: 22rem; ;" autofocus="autofocus" autocomplete="off" placeholder="欢迎留言" class="new-todo" v-model="comment"/>
		</div>
		
      </div>
	  
	  <br />
		  <el-button type="info" v-on:click="addData">提交留言</el-button>
	  <br />
	  <br />
      <!-- 列表区域 -->
	  <section  v-show="hideData">
	  <ul  class="comment_list">
		  <li  v-for="(item,index) in items"  >
			  <div class="comment">
				  <span class="index">#{{item.id}}</span> <label>{{item.name}} ## {{item.body}}</label>
			  </div>
			  <br />
		  </li>

	  </ul>
	</section>

      <!-- 统计和清空 -->
      <footer class="footer">
        <span class="todo-count"> <strong>{{items.length}}</strong> items left </span>
        <button class="clear-completed" @click="hideData=!hideData">
          收起
        </button>
      </footer>
    </section>
	
	
    <!-- 底部 -->
    <footer class="info">
      <p>
		<p>
			后端采用flask，
			服务器采用阿里云函数计算，
			前端采用vue，
			没做权限校验及输入校验，不要瞎搞！
			界面采用某个培训机构写的todolist应用。
		</p>
      </p>
    </footer>

  </body>
</template>

<script>
export default{
  name:"MesBoard",
  data() {
	  return{
		  items:'',
		  hideData:true,
		  name:"",
		  comment:"",
		  resp:"成功"
			}
		 },
  // 方法
  methods: {
		clearData(){
			this.items='';
		},
		addData(){
			console.log(this.name);
			console.log(this.comment);
			if( this.name===""|| this.comment==="") {
				alert("不允许空输入!")
			}else{
				let data = new URLSearchParams();
				data.append("name",this.name);
				data.append("comment",this.comment);
				this.$axios.post("http://api.blublu.site/messages",data=data)
				.then( res => {
					this.resp = res.data;
					console.log(res.data+"不要瞎搞，函数计算每月前100w次调用免费，不要瞎搞")
				}
				);
				
			this.name="";
			this.comment="";

			this.$axios.get("http://api.blublu.site/messages")
				.then(res => {
					this.items = res.data;
				})
			;
				
			alert(this.resp);
			}
		},
	  },
  // 钩子函数
  mounted() {
	console.log("这是钩子mounted函数");
	this.$axios.get("http://api.blublu.site/messages")
	.then(res => {
		this.items = res.data;
		// console.log(res.data);
	})
	;
  }
}

</script>

<style scoped>
	.message{
		background-color: white;
		border-radius:0.625rem
	}
	
	.input {
	    border-radius: 0.625rem;
		background-color: white;
	    display: grid;
	    border: 1px dashed rgba(68,68,68,.3);
		grid-template-columns: 1fr 1fr ;
		grid-template-rows: 100px 300px;
		grid-gap: 10px;
		grid-auto-flow: row dense;

	}
	input{
		border: dashed 0px  ;
	}
	.nickmes{
		width: 15.625rem;
		height: 0.9375rem;
		display: grid;
		float: left;
		border-width: 0px 0 0px 0;
	}


	
	body {
	  font: 14px "Helvetica Neue", Helvetica, Arial, sans-serif;
	  line-height: 1.4em;
	  background: #f5f5f5;
	  color: #4d4d4d;
	  min-width: 230px;
	  max-width: 550px;
	  margin: 0 auto;
	  -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
	  font-weight: 300;
	}
	ul,li{
		list-style:none;
		}
	.comment {
		background-color: white;
		padding-top:0.625rem;
		/* width: 100%; */
		border-radius:0.625rem;
		border: 1px solid rgba(68,68,68,.3);
	}
	

</style>
