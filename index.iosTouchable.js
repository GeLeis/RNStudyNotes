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
  PixelRatio,
  Navigator,//正式的开发当中用这个
  ScrollView,
  TextInput,
  View
} from 'react-native';
var onePI = 1/PixelRatio.get();//最小的像素

class zhaoRNTest extends Component {
  render() {

    return (
      <View style={[styles.outView,styles.topStatus]}>
      <Search></Search>
      </View>
    );
  }
}

class Search extends Component {
  render(){
    return(
      <View>
          <View style={[styles.outView,styles.topStatus]}>
              <View style={[styles.outView,styles.topStatus]}>
                <TextInput returnKeyType="web-search" placeholder="请输入关键词" value={this.state.value} onChangeText={this.getValue.bind(this)}><TextInput>
              </View>
              <View style={styles.outView}>
                <Text style={styles.outView} onPress={this.hide.bind(this,this.state.value)}>搜索</Text>
              </View>
          </View>
          {
            this.state.show?
            <View style={styles.outView}>
              <Text onPress={this.hide.bind(this,this.state.value) style={styles.list_item} numberOfLines={1}}>{this.state.value}</Text>
              <Text onPress={this.hide.bind(this,this.state.value) style={styles.list_item} numberOfLines={1}}>{this.state.value}</Text>
              <Text onPress={this.hide.bind(this,this.state.value) style={styles.list_item} numberOfLines={1}}>{this.state.value}</Text>
              <Text onPress={this.hide.bind(this,this.state.value) style={styles.list_item} numberOfLines={1}}>{this.state.value}</Text>
            </View>:null
          }
      </View>

    );
  }
  constructor(props) {
    super(props);
    this.state={
      show:false,
      value:null,
    };
  }

  hide(value){
    this.setState({
      show:faluse,
      value:value,
    });
  }

  getValue(text){
    this.setState({
      show:true,
      value:text,
    });
  }
}

const styles = StyleSheet.create({
  outView: {
    flex:1,
  },
  topStatus:{
    flexDirection:'row',//..
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
