import React from 'react';
import { Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from 'react-navigation';
import { ThemeContext } from '../../../App';
import styles from './styles';

const Floatingbutton = ({
    navigation,
}) => {
    const { setTheme, theme } = React.useContext(ThemeContext);
    let isDarkMode = theme === 'Dark';
    const icon = isDarkMode ? require("../../assets/image/addIconDark.png") : require("../../assets/image/addIcon.png")
    
    const onAddPressed = () => {
        navigation.navigate('DeviceDetail');
       
    }
    return (
    <TouchableOpacity style={[styles.container,{backgroundColor:isDarkMode? "#ffff":"grey" }]} onPress={() => onAddPressed()}>
           <Image source={icon} style={styles.addIcon} resizeMode="contain"/>
    </TouchableOpacity>
);
}

export default Floatingbutton;
