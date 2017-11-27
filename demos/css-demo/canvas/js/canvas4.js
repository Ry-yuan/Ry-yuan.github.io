window.onload = function(){
    var canvas = document.getElementById('canvas4');
    var context = canvas.getContext('2d');

    //绘制一个矩形
    context.fillStyle = 'blue';
    context.fillRect(13,13,70,70);
    

    //关键:选择一个合成方式 globalCompositeOperation
    // context.globalCompositeOperation = "xor";
    // context.globalCompositeOperation = "copy";
    context.globalCompositeOperation = "lighter";


    //在矩形的上方绘制一个圆形
    context.beginPath();
    context.fillStyle = 'red';
    context.arc(75,75,40,0,2*Math.PI);
    context.fill();
}