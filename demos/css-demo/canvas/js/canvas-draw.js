window.onload = function () {
    //获取canvas
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');

    //获取按钮
    var redBtn = document.getElementById('redBtn');
    var blueBtn = document.getElementById('blueBtn');
    var greenBtn = document.getElementById('greenBtn');
    //利用鼠标事件来控制绘画
    canvas.onmousedown = startDrawing;
    canvas.onmouseup = stopDrawing;
    canvas.onmouseout = stopDrawing;
    canvas.onmousemove = draw;

    //颜色选框
    var selectColor = document.getElementById('selectColor');
    selectColor.onchange = function () {
        changeColor(this.value);
    };
    // 粗细选框
    var selectLineWidth = document.getElementById('selectLineWidth');
    selectLineWidth.onchange = function () {
        changeLineWidth(this.value);
        console.log(this.value);
    }

    //changeColor 改变颜色函数
    function changeColor(color, item) {
        //线条颜色
        context.strokeStyle = color;
    }

    function changeLineWidth(size) {
        context.lineWidth = size;
    }
    //记录是否开始绘画，默认false
    var isDrawing = false;

    //startDrawing 函数
    function startDrawing(e) {
        isDrawing = true;
        // 创建路径
        context.beginPath();
        context.moveTo(e.pageX - canvas.offsetLeft, e.pageY - canvas.offsetTop);
    }

    //绘画函数
    function draw(e) {
        if (isDrawing == true) {
            var x = e.pageX - canvas.offsetLeft;
            var y = e.pageY - canvas.offsetTop;
            context.lineTo(x, y);
            context.stroke();
        }
    }

    //停止绘画
    function stopDrawing() {
        isDrawing = false;
    }
    // 清空画布
    function clearCanvas() {
        context.clearRect(0, 0, canvas.width, canvas.height);
    }
    var clear_canvas = document.getElementById('clearCanvas');
    clear_canvas.onclick = function(){
        clearCanvas();
    }

}