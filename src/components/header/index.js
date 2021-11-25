import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { Component } from 'react';
import { View, TouchableOpacity,Image, Text } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { ThemeContext } from '../../../App';
// import { responsiveWidth } from '../utils/Themes/metrics';

const HeaderPlain = ({
    navigation,
    title,
    subtitle
}) => {
 
    const { setTheme, theme } = React.useContext(ThemeContext);
    let isDarkMode = theme === 'Dark';

    const onDarkLightModePressed = () => {
      let changedTheme = theme === 'Light' ? 'Dark' : 'Light';
      setTheme(changedTheme)
      AsyncStorage.setItem("com.proximus.theme",changedTheme);
    }

    let darkLightIcon = isDarkMode ? require("../../assets/image/lightIcon.png"):require("../../assets/image/darkIcon.png")
 
    return (
        <View
        style={{
          width: widthPercentageToDP(100),
          height:heightPercentageToDP(10),
          alignItems: 'center',
          justifyContent: 'flex-start',
          flexDirection: 'row',
          backgroundColor: isDarkMode ? '#808080': '#ffff',
        }}>
            <TouchableOpacity style={{height:"100%",alignItems:"flex-start",justifyContent:"center",width:widthPercentageToDP(85)}} onPress={() => this.props.navigation.goBack()} >
           
         <Text
          style={{
            color: isDarkMode ?  '#ffff' : '#000000',
            fontSize: 24,
            fontFamily: 'Cochin',
            fontWeight: 'bold',
            paddingLeft:widthPercentageToDP(5)
          }}>
          {title}
        </Text>
        <Text
          style={{
            color: isDarkMode ?  '#ffff' : '#000000',
            fontSize: 16,
            fontFamily: 'Cochin',
            fontWeight: 'bold',
            // paddingLeft:widthPercentageToDP(5)
          }}>
          {subtitle}
        </Text>
        </TouchableOpacity>
          <View style={{width:widthPercentageToDP(15),alignItems:"center",justifyContent:"space-evenly",flexDirection:"row"}}>
          
            <TouchableOpacity onPress={() => onDarkLightModePressed()}>
                <Image source={darkLightIcon} style={{width:widthPercentageToDP(6),height:heightPercentageToDP(5)}} resizeMode="contain"/>
            </TouchableOpacity>
          </View>
      </View>  
    );
}

export default HeaderPlain;
