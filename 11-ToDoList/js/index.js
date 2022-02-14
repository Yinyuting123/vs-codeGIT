$(function() {
    // loadData();
    // $("#title").on("keydown", function(event) {
    //     if (event.keyCode === 13) {
    //         if ($(this).val() === "") {
    //             alert("内容不能为空");
    //         } else {
    //             // 先读取本地数据
    //             var local = getData();
    //             // 更新数据
    //             local.push({ title: $(this).val(), done: false });
    //             // 更新之后的数组进行本地存储
    //             saveData(local);
    //             // 渲染页面
    //             loadData();
    //         }
    //     }
    // })

    // $("#todolist, #donelist").on("click", "input", function() {
    //     // 获取数据
    //     var data = getData();
    //     // 修改数据
    //     var index = $(this).siblings("a").attr("id");
    //     data[index].done = $(this).prop("checked");
    //     // 保存到本地存储
    //     saveData(data);
    //     // 重新渲染页面
    //     loadData();
    // })

    // $("#todolist, #donelist").on("click", "a", function() {
    //     // 先获取本地存储
    //     var data = getData();
    //     // 修改数据
    //     var index = $(this).attr("id");
    //     data.splice($(this).attr("id"), 1);
    //     // 保存到本地存储
    //     saveData(data);
    //     // 重新渲染页面
    //     loadData();
    // })

    // function getData() {
    //     var dataStr = localStorage.getItem("todolist");
    //     if (dataStr !== null) {
    //         return JSON.parse(dataStr);
    //     } else {
    //         return [];
    //     }
    // }

    // function saveData(todolist) {
    //     localStorage.setItem("todolist", JSON.stringify(todolist));
    // }

    // // 每次渲染之前，先清空ol的内容，然后渲染加载最新的数据
    // function loadData() {
    //     var data = getData();
    //     $("#todolist").empty();
    //     $("#donelist").empty();
    //     var doneCount = 0;
    //     var todoCount = 0;
    //     $.each(data, function(i, element) {
    //         if (element.done) {
    //             $("#donelist").prepend("<li><input type='checkbox' checked='checked'> <p>" + element.title + "</p> <a href = 'javascript:;' id = " + i + "></a> </li>");
    //             doneCount++;
    //         } else {
    //             $("#todolist").prepend("<li><input type='checkbox'> <p>" + element.title + "</p> <a href = 'javascript:;' id = " + i + "></a> </li>");
    //             todoCount++;
    //         }
    //     });
    //     $("#donecount").html(doneCount);
    //     $("#todocount").html(todoCount);
    // }

    // 自己练习
})