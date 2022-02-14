window.addEventListener('load', function() {
    // 1.左右按钮显示与隐藏
    var arrowl = document.querySelector('.arrow-l');
    var arrowr = document.querySelector('.arrow-r');

    var focus = document.querySelector('.focus');
    focus.addEventListener('mouseenter', function() {
        arrowl.style.display = 'block';
        arrowr.style.display = 'block';
        clearInterval(timer);
        timer = null; //清除定时器变量
    });

    focus.addEventListener('mouseleave', function() {
        arrowl.style.display = 'none';
        arrowr.style.display = 'none';
        timer = setInterval(function() {
            // 手动调用点击事件
            arrowr.click();
        }, 2000);
    });

    // 2，动态生成小圆圈有几张图片，就生成几个小圆圈
    var ul = focus.querySelector('ul');
    var circle = focus.querySelector('.circle');
    var focusWidth = focus.offsetWidth;
    for (var i = 0; i < ul.children.length; i++) {
        var li = document.createElement('li');
        // 记录当前小圆圈的索引号，自定义属性
        li.setAttribute('index', i);
        circle.appendChild(li);
        // 3.点击小圆圈变色，排他思想
        li.addEventListener('click', function() {
            for (var i = 0; i < circle.children.length; i++) {
                circle.children[i].className = '';
            }
            this.className = 'current';
            // 4.点击小圆圈滚动图片 (ul做移动调用animate函数)
            // ul的移动距离：小圆圈的索引号 * 图片宽度，注意是负值
            var index = this.getAttribute('index');
            num = index;
            circleNum = index;

            // 当点击某个li就要把这个li的索引号赋值给num

            animate(ul, -index * focusWidth);
        })
    }
    // ol中的第一个li添加类current
    circle.children[0].className = 'current';

    // 克隆第一张图片放到ul最后
    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first);


    // 5.点击左右按钮播放图片
    var num = 0;
    var circleNum = 0; //控制小圆圈的播放
    // flag 节流阀
    var flag = true;
    arrowl.addEventListener('click', function() {
        if (flag) {
            flag = false;

            if (num == 0) {
                num = ul.children.length - 1;
                ul.style.left = -num * focusWidth + 'px';
            }
            num--;
            animate(ul, -num * focusWidth, function() {
                flag = true;
            });

            // 点击左侧按钮，小圆圈一起变化(排他思想)
            circleNum--;
            if (circleNum < 0) {
                circleNum = circle.children.length - 1;
            }
            circleChange();
        }

    })

    arrowr.addEventListener('click', function() {
        if (flag) {
            flag = false;

            // 当图片滚动到克隆的最后一张图片时，让ul快速的、不做动画的跳到最左侧
            if (num == ul.children.length - 1) {
                ul.style.left = 0;
                num = 0;
            }
            num++;

            animate(ul, -num * focusWidth, function() {
                flag = true;
            });
            // 点击右侧按钮，小圆圈一起变化(排他思想)
            circleNum++;
            if (circleNum == circle.children.length) {
                circleNum = 0;
            }
            circleChange();
        }

    });

    function circleChange() {
        for (var i = 0; i < circle.children.length; i++) {
            circle.children[i].className = '';
        }
        circle.children[circleNum].className = 'current';
    }

    // 10.自动播放轮播图
    var timer = setInterval(function() {
        arrowr.click();
    }, 2000);
})