window.onload = function(){
    var canvas = document.getElementById('canvas3');
    var context = canvas.getContext('2d');

    //透明测试
    context.fillStyle = 'rgb(100,140,185)';
    context.lineWidth = 2;
    context.strokeStyle = 'red';
    context.arc(100,120,100,0,2*Math.PI);
    context.fill();
    context.stroke();


    //另一个图形在圆形上面
    context.beginPath();
    //透明使用颜色rgba() 设置透明值a
    context.fillStyle = 'rgba(100,140,185,0.5)';
    context.moveTo(214,50);
    context.lineTo(15,220);
    context.lineTo(315,250);
    context.closePath();
    context.fill();
    context.stroke();
}