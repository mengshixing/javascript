#### npm run build 报错 
+ 错误提示/node_modules/_extract-text-webpack-plugin@3.0.2@extract-text-webpack-plugin/dist/loader.js?

+ 可能是extract-text-webpack-plugin版本太高的缘故,cnpm install -–save -dev extract-text-webpack-plugin@2.1.2 

#### npm run dev 报错 
+ There are multiple modules with names that only differ in casing.有多个模块同名仅大小写不同
+ This can lead to unexpected behavior when compiling on a filesystem with other case-semantic.
+ 这可能导致在一些文件系统中产生不是预期的行为
+ Use equal casing.使用唯一的写法

+ 猜测是因为你的文件名和引用不一致，举个例，文件名是App.js，但是你引用的时候是写的app.js
