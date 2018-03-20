<script>
  document.addEventListener("DOMContentLoaded", function(event) {
      console.log("DOM fully loaded and parsed");
  });
</script>


当初始的 HTML 文档被完全加载和解析完成之后，DOMContentLoaded 事件被触发，    
而无需等待样式表、图像和子框架的完成加载。另一个不同的事件 load 应该仅用于检测一个完全加载的页面。    
在使用 DOMContentLoaded 更加合适的情况下使用 load 是一个令人难以置信的流行的错误，所以要谨慎。    
 

<script>
  document.addEventListener("DOMContentLoaded", function(event) {
      console.log("DOM fully loaded and parsed");
  });

  for(var i=0; i<1000000000; i++){
      // 这个同步脚本将延迟DOM的解析。
      // 所以DOMContentLoaded事件稍后将启动。
  } 
</script>
