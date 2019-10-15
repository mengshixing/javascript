1  bootstrap-datetimepicker 如何获取值（日期）:   
   $("#startTime").find("input").val();  
   
2  单双引号嵌套的话\'表示单引号\"表示双引号 onerror="this.src=\'./image/head.jpg\'"

3  ios输入框显示与隐藏监听  
   $(document).on('focusin', function () {  
     //软键盘弹出的事件处理  
   });  

   $(document).on('focusout', function () {  
     //软键盘收起的事件处理  
   });  
4  image元素的 object-fit: contain;适应到其使用的高度和宽度确定的框,等比例填满宽/高,其他留白
   只考虑缩放的话max-width:100%;max-height:100%;也可以

5  vue-cli项目编译npm run dev 报错Error: Cannot find module 'array-includes'
    一般来说可能是项目目录名字改变了,吧node_modules删除重新npm install 即可
    
6  Object.entries() 可以把一个对象的键值以数组的形式遍历出来，结果和 for...in 一致，但不会遍历原型属性。
   const obj = { foo: 'bar', baz: 'abc' }; 
   console.log(Object.entries(obj));  // [['foo', 'bar'], ['baz', 'abc']]
   

