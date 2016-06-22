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

5.JSX入门，并不是一门新的语言，只是语法糖，允许开发者在javascript中书写HTML语法，最后每个html标签都转换成js代码
html标签转换成js
`<h3>输入<\h3>`转换成
React.createElement("h3",null,"输入"),返回一个ReactElement对象
每一个标签都相当于返回一个对象

6.属性
`var msg=<h1 width="10px">xxxxx</h1>`转换成
`React.createElement("h1",{width:"10px"},"xxxxx")`

7.延展属性
使用ES6的语法
var props={}; 
propos.foo="1";
propos.bar="1";
`<h1 {...props} foo="2">xxxxxxx</h1>`转换成：
`React.createElement("h1",React._spread({},props,{foot:"2"}),"xxxxxx")`;
遍历所有的属性，后满赋值的属性会覆盖前面的属性值

8.自定义属性(h5定义，凡是以`data-`开头的自定义属性，可渲染到页面)
9.显示HTML，显示一段HTML字符串，而不是html节点，借助一个属性_html
`<div>{{_html:'<h1>xxxxxxxx</h1>'}}</div>`

10样式的使用。
style属性，js对象，外层{}按照jsx语法，内层{}是js对象

11.事件绑定
```
var app=<button onClick={testClick.bind(this,'hello')}/>
function testClick(msg){
   alert(msg)
}
```

可以传递一个参数，不需要参数时bind(this),表示当前点击的对象


12.ReactJS应用
核心思想：组件化，维护自己的状态和UI，自动重新渲染。

react是全局对象，顶层API与组件API，React.creatClass创建组件类的方法
React.render，将指定组件渲染到指定DOM节点。被ReactDOM.render替代
组件级API，返回组件的内部结构

13.ReactJS声明周期
* 创建阶段 1⃣️getDefaultsPropos:处理props的默认值，在react.createClass调用，this.props该组件的默认属性
* 实例化调用，React.render之后2⃣️getinitialState:初始化组件的state值，其返回值会肤质给组件的this.state属性3⃣️;componentWillMount在render之前调用此方法，业务逻辑的处理都应该放在这里，如对state的操作等；4⃣️render：根据state值，渲染并返回一个虚拟DOM5⃣️；componentDidMount该方法发生在render之后，在该方法中,reactJS会使用render方法返回的虚拟DOM对象来创建真实的DOM结构。组件内部可以通过this.getDOMNode()来获取当前组件的节点。`state:组件的属性，主要用来存储组件自身需要的数据，每次数据的更新都是通过修改state属性的值，reactJS内部会监听state属性的变化，一旦发生变化话，就会主动出发组件的render方法来更新虚拟的DOM结构。`，`虚拟DOM:将真实的DOM结构映射成一个JSON数据结构`
* 更新阶段：6⃣️ componentWillReceiveProps该方法发生在this.props被西拐或者父组件调用setprops方法之后，调用this.setState方法来完成对state的修改7⃣️shouldComponentUpdate用来拦截新的props或者state，根据逻辑来判断是否需要更新8⃣️componentWillUpdatea将要更新9⃣️：render更新需要更新的🔟componentDidUpdate
* 销毁阶段:componentWillunmount 通常做一些取消事件半丁，一出虚拟DOM中对应的组件数据结构，销毁一些无效的定时器工作


14.ReactJS组件通信
 子组件调用伏组件this.props
 父组件调用子组件，先给子组件取个reft属性，this.refs.子组件ref名字.getDOMNode().style.color="red"
 
15.cd 到项目目录下，react-native start可以启动js服务器

16.http://localhost:8081/index.ios.bundle?platform=ios&dev=true，当应用启动运行的时候，会自动拉取这个bundle文件，该文件里存放的是应用的全部逻辑代码，在目录中并不存在这个文件，事实上，这个地址只是一个请求地址，而非真正的静态资源文件，是通过包服务器packager通过动态分析index.ios.js中的依赖，并对其进行合并得到的，而且该服务器允许代码实时渲染。

17.真机测试过程中出现一下错误    
![](https://github.com/shorty-Man/RNStudyNotes/blob/master/QQ20160621-0.png)    
在代码中的错误位置则是在index.ios.js的31行左右

18
