在ios系统中modal在html5元素(设置为触发源)中可能无法点开,
必须配置为a标签和button才能正常点开,其中a标签需要添加href="#"即可,例如：
<a href="#" data-toggle="modal" data-target="#myModal"><a/>

附a标签样式css默认

<style type = "text/css"> 
a {font-size:16px} 
  a:link {color: #333; text-decoration:none;} //未访问：蓝色、无下划线 
  a:active:{color: #333; } //激活：红色 
  a:visited {color:#333;text-decoration:none;} //已访问：紫色、无下划线 
  a:hover {color: #333; text-decoration:none;} //鼠标移近：红色、下划线 
</style>
