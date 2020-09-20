// module.exports = {
//   publicPath: process.env.NODE_ENV === 'production'
//     ? '/toolsblublu./dist/'
//     : '/'
// }
// 输入publicPath可以本地访问
module.exports = {
	publicPath: './',
	devServer:{
		port:8080,
		open:true //自动打开
	}
}