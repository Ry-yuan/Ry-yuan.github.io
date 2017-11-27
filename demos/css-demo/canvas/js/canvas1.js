window.onload=function(){
    // alert('hello canvas');
    var canvas = document.getElementById('drawingCanvas');
    var context = canvas.getContext('2d');

    //1.画直线
    //开始位置
    context.moveTo(250,100);
    //结束位置
    context.lineTo(290,250);
    // context.lineTo(10,100);
    // context.lineTo(250,100);
    context.stroke();
    context.closePath();


    // 2.绘制三角形
    //画另一个时需要beginpath
    context.beginPath();
    //路径
    context.moveTo(10,0);
    context.lineTo(100,250);
    context.lineTo(100,100);
    context.lineTo(10,0);
    // 填充
    context.fillStyle = 'blue';
    context.fill();
    //三角形边--轮廓
    // 线的宽度
    context.lineWidth = 10;   
    // 颜色
    context.strokeStyle = 'red';
    //画轮廓
    context.stroke();
}