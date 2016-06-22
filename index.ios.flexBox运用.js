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
  View
} from 'react-native';

class zhaoRNTest extends Component {
  render() {
    return (
      <View style={styles.outView}>
        <View style={styles.container}>
              <View style={[styles.item,styles.center]}>
                 <Text style={styles.font}>酒店</Text>
              </View>

              <View style={[styles.item,styles.lineLeftRight]}>
                 <View style={[styles.subItem,styles.center,styles.lineBottom]}>
                    <Text style={styles.font}>海外酒店</Text>
                 </View>
                 <View style={[styles.subItem,styles.center]}>
                    <Text style={styles.font}>特惠酒店</Text>
                 </View>
              </View>

              <View style={styles.item}>
                  <View style={[styles.subItem,styles.center,styles.lineBottom]}>
                     <Text style={styles.font}>团购</Text>
                  </View>
                  <View style={[styles.subItem,styles.center]}>
                     <Text style={styles.font}>客栈，公寓</Text>
                  </View>
              </View>
        </View>
      </View>

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
  center:{
    justifyContent:'center',
    alignItems:'center',
  },
  font:{
    color:'#fff',
    fontSize:16,
    fontWeight:'bold',
  },
  lineLeftRight: {
    borderLeftWidth:3/PixelRatio.get(),//根据不同的设备，3x的情况下，3个像素一个点
    borderRightWidth:3/PixelRatio.get(),
    borderColor:'#fff',
  },
  lineBottom:{
    borderBottomWidth:3/PixelRatio.get(),
    borderColor:'#fff',
  },
});

AppRegistry.registerComponent('zhaoRNTest', () => zhaoRNTest);
