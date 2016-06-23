/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Navigator,//正式的开发当中用这个
  ScrollView,
  View
} from 'react-native';

class zhaoRNTest extends Component {
  render() {
    let defaultNmae='List';
    let defaultComponent=List;
    return (
      <Navigator
          initialRoute={{name:defaultNmae,Component:defaultComponent}}
          //配置场景
          configureScene={(route) => {
          //页面之间跳转时候的动画,node_modules/react-native/libraties/costomeComponents/navigatorSceneConfigs.js
          return Navigator.SceneConfigs.VerticalDownSwipeJump;//垂直向下跳
          }
        }
          renderScene={
            (route,navigator) =>{
              let Component = route.component;
              return <Component {...route.params} navigator={navigator}/>//创建组件,并将所有的属性赋值给component
            }
          }
      />
    );
  }
}

class  List extends Component {
  constructor(props) {//构造类的时候调用
    super(props);
    this.state = {
      id:1,
      user:null,
    };
  }

  _pressButton(){
    const {navigator} = this.props;
    const self=this;
    if(navigator) {
      navigator.push({
        name:'Detail',
        component:Detail,
        params:{
          id:this.state.id,
          getUser:function(user){//定义的一个回调方法
            self.setState({
              user:user
            })
          }
        }
      })
    }
  }

  render(){
    if (this.state.user) {
      return(
        <View>
          <Text style={styles.list_item}>用户信息:{JSON.stringify(this.state.user)}</Text>
        </View>
      );
    }else {
      return (
        <ScrollView style={styles.outView}>
            <Text style={[styles.list_item,styles.center]} onPress={this._pressButton.bind(this)}>AAAAAA</Text>
            <Text style={[styles.list_item,styles.center]} onPress={this._pressButton.bind(this)}>BBB</Text>
            <Text style={[styles.list_item,styles.center]} onPress={this._pressButton.bind(this)}>CCC</Text>
        </ScrollView>);
    }
  }

}

const USER_MODELS = {
  1:{name:'mot',age:23},
  2:{name:'清明大大',age:25}
};

class  Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id:null
    };
  }

  componentDidMount(){
    this.setState({
      id:this.props.id
    });
  }
  _pressButton(){

    const{navigator} = this.props;
    if (this.props.getUser) {
      let user=USER_MODELS[this.props.id];
      this.props.getUser(user);
    }

    if (navigator) {
      navigator.pop();
    }

  }

  render(){
    return (
      <ScrollView>
        <Text style={styles.list_item}>传递过来的用户id是：{this.state.id}</Text>
        <Text style = {[styles.list_item,styles.center]} onPress={this._pressButton.bind(this)}>点击返回</Text>
      </ScrollView>

    );
  }
}

const styles = StyleSheet.create({
  outView: {
    flex:1,
  },
  container: {
    // flex: 1,//这里表示最外层view铺满这个view
    borderWidth:1,
    height:84,
    borderColor:'red',
    flexDirection:'row',//容器默认是垂直的column,水平为row
    backgroundColor: '#FF0067',
    marginTop:200,
    marginLeft:5,
    marginRight:5,
    borderRadius:5,
    padding:2,
  },
  item: {//不要在容器里面设置center属性，否则item大小会发生变化
    flex: 1,//如果每个都是1，那么就表示分成三等分
    height:80,
  },
  subItem:{
    flex:1,
  },
  list_item:{
    height:44,
  },
  center:{
    justifyContent:'center',
    alignItems:'center',
  },
  font:{
    color:'#fff',
    fontSize:16,
    fontWeight:'bold',
  },

});

AppRegistry.registerComponent('zhaoRNTest', () => zhaoRNTest);
