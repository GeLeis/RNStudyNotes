# RNStudyNotes

1.如果出现不能链接到服务器，根据提示重启8081端口，解决方法：ip地址+端口
2.使用Node.js做预编译，可以安装react-tools工具  
```
npm install -g react-tools
```
3.flexbox布局，是flexible box的缩写，弹性盒子布局，flex元素可以让你的布局根据浏览器的大小变化自动进行伸缩，主轴默认为水品轴

4.RN目前主要支持flexbox的如下6个属性
* alignItems:定义伸缩项目在交叉轴上的对齐方式，（flex-start,flex-end,center,stretch）
* alignSelf:用来定义单独的伸缩项目在交叉轴上的对齐方式auto|flex-start|flex-end|center|stretch
* flex，是flex-grow(放大),flex-shrink(缩小),flex-basis(基准)三个属性的缩写，默认值为0 1 auto
* flexDirection:主轴方向row|row-reverse|column|column-reverse
* flexWrap:伸缩容器在主轴空间不足的情况下，是否换行nowrap|wrap|wrap-reverse
* justContent：伸缩项目在主轴线的对齐方式,flex-start|flex-end|center|space-between|space-around
