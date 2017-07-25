
$('#btn').click(function(){
    ...
});
    
$('body').on('click','.btn',function(){
    ...
})

动态添加的HTML元素，使用click()这种写法，点击按钮有时会没有反应,使用On()方式可以。

原因:

element.click()这种写法不支持给动态元素或样式绑定事件。

支持给动态元素绑定事件的是.live()和.on()。live在jQquery1.7后就不推荐使用了。

使用.on()时注意，on前面的元素必须在页面加载的时候就存在DOM里面。