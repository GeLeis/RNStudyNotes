# RNStudyNotes

1.如果出现不能链接到服务器，根据提示重启8081端口，解决方法：ip地址+端口
2.使用Node.js做预编译，可以安装react-tools工具  
```
npm install -g react-tools
```
3.flexbox布局，是flexible box的缩写，弹性盒子布局，flex元素可以让你的布局根据浏览器的大小变化自动进行伸缩，主轴默认为水品轴

4.RN目前主要支持flexbox的如下6个属性
* alignItems:定义伸缩项目在交叉轴上的对齐方式，（flex-start,flex-end,center,stretch）,对子控件在交叉轴方向排列方式的约束
* alignSelf:用来定义单独的伸缩项目在交叉轴上的对齐方式auto|flex-start|flex-end|center|stretch
* flex，是flex-grow(放大),flex-shrink(缩小),flex-basis(基准)三个属性的缩写，默认值为0 1 auto
* flexDirection:主轴方向row|row-reverse|column|column-reverse
* flexWrap:伸缩容器在主轴空间不足的情况下，是否换行nowrap|wrap|wrap-reverse
* justContent：伸缩项目在主轴线的对齐方式,flex-start|flex-end|center|space-between|space-around，对自控件在主轴方向的排列约束

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
* 实例化调用，React.render之后2⃣️getinitialState:(ES6中使用constructor构造器)初始化组件的值，其返回值会肤质给组件的this.state属性3⃣️;componentWillMount在render之前调用此方法，业务逻辑的处理都应该放在这里，如对state的操作等；4⃣️render：根据state值，渲染并返回一个虚拟DOM5⃣️；componentDidMount该方法发生在render之后，在该方法中,reactJS会使用render方法返回的虚拟DOM对象来创建真实的DOM结构。组件内部可以通过this.getDOMNode()来获取当前组件的节点。`state:组件的属性，主要用来存储组件自身需要的数据，每次数据的更新都是通过修改state属性的值，reactJS内部会监听state属性的变化，一旦发生变化话，就会主动出发组件的render方法来更新虚拟的DOM结构。`，`虚拟DOM:将真实的DOM结构映射成一个JSON数据结构`
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

18.felxbox水平烂布局
> 外联样式 style={styles.container}   
> 内联样式 style={{flex:1,borderWidth:1...}}   
> 多个样式 style={[styles.container,styles.item]}

19.[flexbox使用样例](https://github.com/shorty-Man/RNStudyNotes/blob/master/index.ios.flexBox运用.js)，使用时去掉文件命中的flexbox运用

20.Navigator介绍使用，正式的开发当中使用Navigator，而NavigatorIos并不是RN官方团队所开发，只使用于IOS

21.使用数组时出现warning key警告，在使用数组的地方加上key={i}就好

22.参数传递：在push时把route.params里的每个key作为props的一个属性，{...route.params},在
```js
componentDidMount{
   this.setState({
      id:this.props.id//获取传递过来的参数
   })
}
```

23.在用小米手机调试安卓app时遇到安装失败的情况下，可以直接到项目的以下目录中寻找apk直接安装:项目名/android/app/build/outputs/apk

24.RN中没有像web开发给元素绑定click事件，RN提供了3个组件来赋予被点击的能力，去包裹其它组件即可，这3个组件被称为Touchable类组件。
* TouchableHighlight 高亮   
   属性：activeOpacity（设置透明度）,onHideUnderlay（隐藏阴影背景效果）,onShowUnderlay(显示阴影背景效果),underlayColor（点击背景阴影效果的背景颜色）;
* TouchableOpacity 透明度   
   属性：activeOpacity，点击时有透明度变化
* TouchableWithoutFeedback 无反馈 不会出现任何视觉变化
   不建议使用；属性：onLongPress(长安回调),onPressIn(按下),onPressout(弹开)


25.[使用拨打电话功能](http://bbs.reactnative.cn/topic/658/react-native下如何拨打电话/2)


26.Image组件的使用，属性：
* resizeMode:cover,contain(按照图片的大小自适应的缩放),stretch,
* source:图拍的引用地址,网络图片:source={{uri:'http://....png'}},本地图片source={require('./baidu.png')}
静态图片资源:如果添加图片的时候,packager正在运行，则需要重启packager一边引入新的添加的图片，因为packager打包的图片在程序启动时就已经完成。现在的RN版本已修复这个bug  
* 本地的图片资源直接放在项目目录下，
* 加载本地图片时，require里面的资源文件路径必须时静态的字符串，不能是表达式这种动态的结果
* 如果编写RN和原生的混合app，可以使用已经打包到app中的图片资源,比如xcode中的asset或者android中的drawable文件夹，同时使用时必须指明图片的大小<Image source={{uri:'app_icon'}} style={{width:40,height:40}}>,直接写图片名字即可
* 网络图片需要手动指定图片的尺寸

27.progressBar的使用：在android和ios平台上不同，android为progressBarAndroid ，ios平台上为progressViewIOS 

28.在安卓平台上独有的DrawerLayoutAndroid，抽屉效果的控件，ViewPagerAndroid分页效果的控件
