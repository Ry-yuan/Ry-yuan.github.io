window.onload = function(){
    var canvas = document.getElementById('canvas2');
    var context = canvas.getContext('2d');

    //绘制曲线，圆圈
    // 定义变量
    var centerX = 150;
    var centerY = 200;
    var radius = 30;
    var startAngle = 0;
    var endAngle = 2*Math.PI;
    context.arc(centerX,centerY,radius,startAngle,endAngle);
    context.fillStyle= 'red';
    context.fill();
    context.strokeStyle= 'blue';
    context.lineWidth = 20;
    context.stroke();
    
    // 半圆
    context.beginPath();
    context.arc(100,100,30,0,Math.PI);
    context.strokeStyle= 'green';
    context.stroke();

    
    // 半圆
    context.beginPath();
    context.arc(200,100,30,0,Math.PI);
    context.strokeStyle= 'yellow';
    context.stroke();


    //使用fillRect 填充出一个方形
    //颜色
    context.fillStyle = 'pink';
    context.fillRect(200,200,100,100);
    
    //使用strokeRect 绘制方形边框
    context.strokeStyle = "black";
    context.lineWidth = 1;
    context.strokeRect(10,10,30,30);
}