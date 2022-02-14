window.addEventListener('load', function() {
    var previewImg = document.querySelector('.preview_img');
    var mask = document.querySelector('.mask');
    var big = document.querySelector('.big');
    previewImg.addEventListener('mouseover', function() {
        mask.style.display = 'block';
        big.style.display = 'block';
    })
    previewImg.addEventListener('mouseout', function() {
        mask.style.display = 'none';
        big.style.display = 'none';
    })

    previewImg.addEventListener('mousemove', function(e) {

        // 鼠标在图片盒子的坐标位置
        var x = e.pageX - this.offsetLeft;
        var y = e.pageY - this.offsetTop;
        console.log(x);
        console.log(y);
        // 把坐标位置赋值给遮罩层
        // 盒子高度300的一半是150
        var maskX = x - mask.offsetWidth / 2;
        var maskY = y - mask.offsetHeight / 2;
        // 设置最大移动距离
        var maskMax = previewImg.offsetWidth - mask.offsetWidth;

        if (maskX <= 0) {
            maskX = 0;
        } else if (maskX >= maskMax) {
            maskX = maskMax;
        }
        if (maskY <= 0) {
            maskY = 0;
        } else if (maskY >= maskMax) {
            maskY = maskMax;
        }

        mask.style.left = maskX + 'px';
        mask.style.top = maskY + 'px';
        // （等比计算）大图片的移动距离 = 遮挡层移动距离 * 大图片最大移动距离 /遮挡层的最大移动距离
        // 获取大图对象
        var bigImg = document.querySelector('.big_img');
        var bigMax = big.offsetWidth - bigImg.offsetWidth;
        bigImg.style.left = maskX * bigMax / maskMax + 'px';
        bigImg.style.top = maskY * bigMax / maskMax + 'px';
    })
})