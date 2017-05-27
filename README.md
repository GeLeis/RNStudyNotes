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
* justContent：伸缩项目在主轴线的对齐方式,flex-start|flex-end|center|space-between|space-around，对自控件在主轴方向的排列约束,约束开始位置，start表示控件排列居左对齐，center表示控件排列居中

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

29.反向传值通过在组件属性里赋值一个回调方法,参考,project01

30.防异步网络请求:   
* RN的网路的请求:XMLHttpRequest Fetch post get 

31.RN中的版本管理   
~会匹配最新的子版本（中间那个数字），比如~1.2.3会匹配所有的1.2.x版本，但不匹配到1.3.0及以上   
^会匹配最新的主版本（第一个数字），比如^1.2.3将会匹配所有的1.x.x版本，2.0.0就缓缓飘过了。

32.[React Native的常见问题](http://bbs.reactnative.cn/topic/130/新手提问前先来这里看看-react-native的常见问题) 

33.如果项目没有node_modules目录，那么可以cd到项目目录下，npm install react-native安装

34.npm info react-native查询当前RN版本库信息，对应的disk-tags(信息最上面靠近几条中),然后更给项目目录下的package.json文件中的RN版本为当前最新版本。

35.[RN图片轮轮播器](https://github.com/leecade/react-native-swiper),使用安装:   
```
安装模块  npm i react-native-swiper --save    i表示安装，save保存到node-modules文件夹下，并添加package.json依赖
查看模块  npm view react-native-swiper
删除模块  npm rm react-native-swiper --save
查看帮助命令   npm help 
如果想改变swiper的大小，需要修改属性的width height，不要修改style
```
36.webView的使用,javaScripteEnabled在android和ios平台都是默认开启的，通过injectedJavaScript逐日一段js代码，如果加上了该属性，就会在webView里面执行这段js代码，并且是在网页加载之前


37.[IDE工具 VS Code](https://code.visualstudio.com/Docs/?dv=osx)

38.ListView的使用，使用默认是数据源有三个维度；第一个维度是sectionId，标示属于那一段，可以手动指定或隐式的使用数组索引或对象的key值，第二个维度是rowId，表示某个数据段下的某一行，同样可以手动指定或者隐式的使用数组的索引或对象的key值；第三个维度是具体的数据对象，根据实际的需要耳钉。rowid默认从0开始，sectionId则是s1开始，代表第一组，

39.ListView的高级特性
```
1.分页   
数据一次性拿到，边滚动边加载／或者不是一次性拿到，而是分屏取数据。对于第一种情况，在ListView内部已经做了分页处理，listView内部通过curRenderRowsCount状态保存已渲染的行数;初始状态下，要加载的数据调试等于initialListSize(默认10条)，在滚动时检测当前滚动的位置和最底部的距离，如果小雨scrollrenderAheadistance(默认1000)，就更新curRenderedRowsCount，在原有值基础上加pageSize个（默认为1条）；对于第二种情况，ListView提供了相关属性；onEndReachedThreshold，在滚动即将达到底部时触发，onEndReached，在已经到达底部时触发

2.多列(grid效果)
ListView并没有强制要求一个rowData在展示时一定要占满一行，在多列的情况下，我们适时调整每个rowData占据的宽度即可,将flex设为row，将flexwrap设置为wrap，样式设置给listView的contentContainerStyle
```

40.RN开源组件之react-native-tab-navigator,好处:宽平台，纯js,支持android与ios

41.RN开源组件之react-native-side-menu,类似qq的侧边栏组件

42.[windows下虚拟机装macOS](http://jingyan.baidu.com/article/d621e8da27fe7c2865913fde.html)


43.定义枚举，并引用，参考[iShiWuPai里面的actionTypes](https://github.com/shorty-Man/react-native-iShiWuPai)

44.var,let,const的区别，var和let都是声明变量，不同的是var声明的变量可以在任意位置并且可以在声明位置之前使用，let声明的变量为代码块变量，如果都是在函数或文件顶层声明变量，那么两者没有区别。const用于声明常量

45.RN中定义的方法如果有n个参数，那么调用时可以传递的参数个数<=n就可以了

46.调试输出:console.log();   
android 5.0及以上不用设置ip和端口，开启usb调试，使用adb reverse命令，运行adb reverse tcp:8081 tcp:8081,就可以使用reload JS和其它选项    
摇晃设备，或者运行adb shell input keyevent 82 可以打开开发者菜单    
在ios模拟器上，通过点击模拟器上的shake gesture，打开remote js debugger，如果网页显示debugger session active，那么js调试远程连接成功.按option + command +j开大开发者菜单，在console里可以通过console.log()，输出想要查看的值，前提是在断点调试的情况下.

47.API学习   
* APPRegistry是运行所有的RN应用的入口，应用的跟组建应当通过APPRegistry.registerComponent方法注册自己，当注册完成之后才可以加载应用的bundle包并且触发APPRegistry.runApplication来真正运行应用。
* AsyncStorage是一个简单的，具有异步特性的键值对的存储系统，类似于ios的NSUserDefault，保存在沙盒中的Documents/RCTAsyncLocalStorage_V1/manifest.json，另外取AsyncStorage储存的数据只能在didMount及以后取。用法如下   
```js
import { AsyncStorage } from 'react-native';

let UserDefaults = {
    setObject: (key, value) => {
        const jsonValue = JSON.stringify(value);
        return AsyncStorage.setItem(key, jsonValue, (error) => {
            console.log(key + ' setOrRemoveObject error: ' + error);
        });
    },

    cachedObject: (key) => {
        return AsyncStorage.getItem(key)
            .then((data, error) => {
                if (data) return JSON.parse(data);
                
                console.log(key + ' cachedObject error: ' + error);
                return null;
            })
    },

    clearCachedObject: (key) => {
        return AsyncStorage.removeItem(key);
    },
}

export default UserDefaults;
```

48.自定义组件声明必须要的属性,
```js
static propTypes = {
   url:React.PropTypes.string.isRequired,
   title:React.PropTypes.string.isRequired,
};
```   
声明属性默认值
```js
static defaultProps = {
   url:'https://******',
   title:'默认',
};
```

49.js里==与===的差别,前者不判断类型，后者包括类型和值

50.解决navigator页面返回后，之前的页面不更新问题,在push是，传递一个回调方法过去，用于更新本页面

51.Navigator的renderScene里
```js
<Component navigator = {navigator} route = {route} {...route.passProps} />
```   
passProps为传递过去的参数
```js
this.props.navigator.push({
                name: 'FeedDetail',
                component: FeedDetail,
                passProps: {
                    feed: feedItem,
                }
            })
```
在push时，在这里的passProps传递参数或者回调，

在navigator的页面，可以通过this.props.feed获取值

52.AlertIOS的应用
```js
AlertIOS.alert('提示','提示内容',[
   {
      text:'取消',
      onPress:()=>{
         alert('点击了取消按钮');
      },
   },
   {
      text:'中间',
      onPress:()=>{
         alert('点击了中间按钮');
      },
   },
   {
      text:'确定',
      onPress:()=>{
         alert('点击了确定按钮');
      },
   },
]);
```
当按钮个数大于两个时，按钮会垂直往下排列，当一个按钮也不赋值的时候，会有个默认的ok按钮   
AlertIOS.prompt();弹出带输入框的提示框

53.nuclide代码自动补全提示的插件，atom-react-native-css    atom-react-native-autocomplete   nuclide自动保存代码的插件,autosave设置setting enable   

54.ActionSheetIOS的应用，
```js
ActionSheetIOS.showActionsheetWithOptions(
   {
      options:['电话','邮件','短信','取消'],
      cancleButtonIndex:3,//取消按钮是第几个
      destructiveButtonIndex:0,//红色警告按钮
      title:'标题',
      message:'内容',
   },
   fuction(index){//回调
      alert(index);
   }
);
```

```js
ActionSheetIOS.showShareActionSheetWithOptions(
   {
      message:'标题',
      url:'http://',
   },
   function(failure){
      //失败回调 
   },
   function(success){
      //成功回调
   },
);
```

55.网络状态的监听:   
需要import进NetInfo,在constructor里添加一个属性，connectionInfo:null;在componentDidMount里面添加监听
```js
componentDidMount(){
   //网络是否连接的监听
   NetInfo.isConnected.addEventListener(
      'isConnected',this._handleConnectivityChange
   );
   
   //网络状态变化的监听
   NetInfo.addEventListener(
      'statusChange',this._handleNetStatusChange
   );
   
   //检测网络是否连接
   NetInfo.isConnected.fetch().done(
      (isConnected)=>{this.setState({
         isConnected:isConnected,
      })}
   );
   
   //检测网络连接状态
   NetInfo.fecch().done(
      (connectionInfo)=>{this.setState({
         connectionInfo:connectioninfo,
      })}
   );
}
```

然后在卸载监听
```js
componentWillUnmount(){
   NetInfo.isConnected.removeEventListener(
      'isConnected',this._handlerConnectivityChange
   );
   
   NetInfo.removeEvenetListener(
      'statusChange',
      'statusChange',this._handleNetStatusChange
   );
}
```
监听的回调
```js
_handlerConnectivityChange=(isConnected)=>{
   
};

_handleNetStatusChange=(connectionInfo)=>{

};
```

56.网络请求   
fetch是一个网络API，有两种用法来使用   
* 使用hten 和catch指定回调函数
* 使用ES7的anync/await语法来发起一个异步调用

使用方法   
```js
//fetch默认的是get方法，
//使用方法1.
fetch('https://mywebsite.com/mydata.json');

//使用方法2.
let map = {method:'POST,'};
map.body=JSON.stringfy(
   'username':'3131313',
   'password':'111'
);
map.headers={
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  };
map.follow = 10;//设置请求允许的最大重定向次数，0为不允许重定向
map.timeout=8000;//单位ms，设置超时时长，0为没有超时时间，这个值在重定向后会被重置
map.size=0;//设置请求回应中的消息最大允许长度，0为没有限制

fetch(url,map).then(
(response)=>response.text;
).then(
   (responseText)=>{
   //如果需要输出，通过alert,console出不来，bug
      return JSON.parse(responseText); 
   }
).catch(
   (err)=>{
      console.log('错误'+err);
   }
);
```

57.cameralRoll的使用：该模块提供了对手机中保存的图片的／视频文件进行遍历访问与操作，提供两个静态方法   
方法1⃣️：getPhotos(params:object),params有四个成员变量   
* first：数值，希望获取多少张图片的信息
* groupTypes 字符串，默认为SavedPhotos[Album All Event Faces Library PhotoStream],仅支持ios平台，用来指定获取图片或视频的类型
* assetType 字符串 默认为photos 表示只获取图片[All Videos]
返回一个带有图片表示服JSON对象的promise
* after 字符串 用来记录上一次获取图片的结束标志，方便可以接着上次的位置继续获取,这个可以在data.page_info里面找到,end_cursor:结束位置，has_next_page:后面是否还有图片
返回的数据类型结构
```js
   //IOS
   data:{
      edges:[
      {
         node:{
            group_name:'camera Roll',
            image:{
               height:430,
               isStored:true,
               uri:"assets-library://asset/asset.jpg?id=*******",
               width:430,
               _photo_:{},
            },
            location:{},
            timestemp:146564345,
            type:'ALAssetTypePhoto',
            _photo_:{},
         },
         _photo_:{}
      },
      ...],
      page_info:{
         end_cursor:'assets-library://asset/asset.jpg?id=*******',
         has_nex_page:true,
         start_cursor:'assets-library://asset/asset.jpg?id=*******',
         _proto:{}
      },
      _proto_:{
         ***
      }
      
   }
   
   //Android
   data:{
      edges:[
      {
         node:{
            group_name:'Screenshots',//分组类型
            image:{
               height:430,
               uri:"assets-library://asset/asset.jpg?id=*******",
               width:430,
               _photo_:{},
            },
            timestemp:146564345,
            type:'image/png',
            _photo_:{},
         },
         _photo_:{}
      },
      ...],
      page_info:{
         end_cursor:'assets-library://asset/asset.jpg?id=*******',
         has_nex_page:true,
         _proto:{}
      },
      _proto_:{
         ***
      }
      
   }
```
得到的imge对象，可以作为整体传递给image组件，用来显示图片   

需要注意的是在IOS平台中，需要添加链接库，    
* 将/node_modules/react-nati e/libraires/Cameraroll下的RCTCameraRoll.xcodeproj拖动到当前xcode项目的Libraries目录，  
* 选中当前项目，build phases ->link binary With libraris
* 打开第一次插入的RCTCameraroll.xcodeproj，在打开它的子目录products，将子目录下的libRCTCameraRoll.a文件拖到该列表中,
* 重新编译项目

方法2⃣️：saveImageWithTag(tag)保存一个图片到相册
tag在安卓上，本参数是一个本地uri，是把本地的图片保存到相册中，例如file:///sdcard/img.png  
在ios设备上可能是：1.本地uri，2.资源库的标签，3.非以上两种类型，表示图片数据将会存储在内存中(并且在本进程持续的时候一直会占用内存),操作成功时返回一个promise,（一个新的uri）

58.遍历数组，并赋值给组件是，需要指定组件的key属性

59.数组的unshift方法可以想数组的开头添加一个或更多元素
```
   images.unshift{
      {
         uri:url,
      }
   };
```

60.开源组件之react-native-camera,调用摄像机

61.ref的两种属性，string属性，回调属性，这个回调在组件render之后，在DidMount之前
```js
<Camera
   ref={(cam) => {
      this.camera = cam;
    }}//相当于用this.camera对这个组件的引用
   style={styles.preview}
   aspect={Camera.constants.Aspect.fill}>
</Camera>
```

62.[定时器，时间获取，手机定位](http://www.reactnative.vip/forum.php?mod=viewthread&tid=180&highlight=47)

63.[项目ui框架搭建](https://github.com/shorty-Man/react-native-router-flux)

64.[react-native-image-picker照片选择器](https://github.com/marcshilling/react-native-image-picker)

65.RN项目，js文件挂在服务器上，如果js文件没有变动，启动app时不会重新从服务器loading文件，如果js有更新，那么才会对js进行loading

66.[react-native-swipeout类似tableViewCell左划出现删除等按钮](https://github.com/dancormier/react-native-swipeout)

67.[react-navigator](https://reactnavigation.org/docs/navigators/tab)
68. [多级picker库](https://github.com/beefe/react-native-picker)
69.[选取多张照片](https://github.com/ivpusic/react-native-image-crop-picker)
70. [RN项目中常用的一些库](http://blog.csdn.net/sinat_17775997/article/details/60954255)
71. [RN常用库2](https://shenbao.github.io/ishehui/html/RN%20%E5%9F%BA%E7%A1%80/React%20Native%20%E5%B8%B8%E7%94%A8%E7%AC%AC%E4%B8%89%E6%96%B9%E7%BB%84%E4%BB%B6%E6%B1%87%E6%80%BB.html)
72.[前端开发](http://react-china.org/t/webpack-react-react-router-redux-less-antd-es6-cnode/11746)
73.[地理位置编码与反编码](https://github.com/devfd/react-native-geocoder)
74.[前段学习react+ant](https://github.com/zuiidea/antd-admin)
75.[RN地图](https://github.com/airbnb/react-native-maps)
76.[图形绘制react-native-art](http://blog.csdn.net/angelseedex/article/details/53339107)
