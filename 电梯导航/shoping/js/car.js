$(function() {

    getSum();

    // 购物车全选
    $(".checkall").change(function() {
        $(".j-checkbox, .checkall").prop("checked", $(this).prop("checked"));
        if ($(this).prop("checked")) {
            $(".cart-item").addClass("check-cart-item");
        } else {
            $(".cart-item").removeClass("check-cart-item");
        }
        getSum();
    })
    $(".j-checkbox").change(function() {
        if ($(".j-checkbox:checked").length === $(".j-checkbox").length) {
            $(".checkall").prop("checked", true);

        } else {
            $(".checkall").prop("checked", false);
        }

        if ($(this).prop("checked")) {
            $(this).parents(".cart-item").addClass("check-cart-item");
        } else {
            $(this).parents(".cart-item").removeClass("check-cart-item");
        }
        getSum();
    })


    // 商品数量增减，小计变化
    $(".increment").click(function() {
        var num = $(this).siblings(".itxt").val();
        num++;
        $(this).siblings(".itxt").val(num);
        var price = $(this).parents(".p-num").siblings(".p-price").html().substr(1);
        var sumPrice = (price * num).toFixed(2);
        $(this).parents(".p-num").siblings(".p-sum").html("￥" + sumPrice);

        getSum();
    })
    $(".decrement").click(function() {
        var num = $(this).siblings(".itxt").val();
        if (num == 1) {
            return;
        }
        num--;
        $(this).siblings(".itxt").val(num);
        var price = $(this).parents(".p-num").siblings(".p-price").html().substr(1);
        var sumPrice = (price * num).toFixed(2);
        $(this).parents(".p-num").siblings(".p-sum").html("￥" + sumPrice);

        getSum();
    })

    //直接修改文本框数量，修改小计
    $(".itxt").change(function() {
            var num = $(this).val();
            var price = $(this).parents(".p-num").siblings(".p-price").html().substr(1);
            $(this).parents(".p-num").siblings(".p-sum").html("￥" + (num * price).toFixed(2));

            getSum();
        })
        // 删除当前商品
    $(".p-action a").click(function() {
        $(this).parents(".cart-item").remove();
        getSum();
    })

    // 删除选中的物品
    $(".remove-batch").click(function() {
        $(".j-checkbox:checked").parents(".cart-item").remove();
    })

    // 清理购物车
    $(".clear-all").click(function() {
        $(".cart-item").remove();
        getSum();
    })



    function getSum() {
        var count = 0; //计算总件数
        var money = 0; //计算总价
        var checkItems = $(".j-checkbox:checked").parents(".cart-item");
        checkItems.find(".itxt").each(function(i, element) {
            count += parseInt($(element).val());
        });
        $(".amount-sum em").text(count);

        checkItems.find(".p-sum").each(function(i, element) {
            money += parseFloat($(element).text().substr(1))
        });
        $(".price-sum em").text("￥" + money.toFixed(2));
    }

})