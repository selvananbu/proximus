import React from 'react';
import { Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from 'react-navigation';
import { ThemeContext } from '../../../App';
import { primaryDarkColor } from '../../assets/colors';
import styles from './styles';

const EmptyState = ({
    navigation,
}) => {
    const { setTheme, theme } = React.useContext(ThemeContext);
    let isDarkMode = theme === 'Dark';

    let emptyIcon = require("../../assets/image/emptyState.png");
    
    return (
    <View style={styles.emptyContainer}>
           <Image source={emptyIcon} style={styles.emptyIcon} resizeMode="contain"/>
           <Text style={[styles.emptyText,{color:isDarkMode ? "#fff" :"#000"}]}>
              Oops! no devices found in the intventory you can
           </Text>
           <Text style={[styles.emptyText,{color:isDarkMode ? "#fff" :"#000"}]}>
              no problem you can add here.
           </Text>
    </View>
);
}

export default EmptyState;
