// 图片容器
var container = document.getElementById("md-container");
// 图片组
var pics = container.getElementsByTagName("img");
// 获取左右箭头
var arrowLeft = document.getElementById("arrowLeft");
var arrowRight = document.getElementById("arrowRight");
// 绑定点击函数
var index = 0;
var pointBox = document.getElementById("point-box");
var points = pointBox.getElementsByTagName("li");
// 左右箭头添加事件
arrowLeft.addEventListener("click",function(){
	index--;
	changeImage();
},false);
arrowRight.addEventListener("click",function(){
	index++;
	changeImage();
},false)

// 设定定时器
var Interval = setInterval("arrowRight.click()",3000);
container.onmouseover = function(){
	// 清除定时器
	clearInterval(Interval);
}
container.onmouseout = function(){
	Interval = setInterval("arrowRight.click()",3000);
}
// 切换图片函数
function changeImage(){
	if(index>pics.length-1){
		index=0;
	}
	if(index