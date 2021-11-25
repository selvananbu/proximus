import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, SafeAreaView, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeContext } from '../../../App';
import { initializeDeviceList } from '../../actions';
import ExportImport from '../../components/exportimport';
import Floatingbutton from '../../components/floatingButton';
import HeaderPlain from '../../components/header';
import ListView from '../../components/listview';
import SearchBar from '../../components/searchBar';
import styles from './styles';

const Home = ({
    navigation,
}) => {
    const dispatch = useDispatch();
    const { setTheme, theme } = React.useContext(ThemeContext);
    const [isLoadingData,setIsLoadingData] = useState(true);
   
    useEffect(() => {

        initializeList();
    }, [])

    const initializeList = async () => {
        try {
            const value = await AsyncStorage.getItem('com.devicelist.proximus')
            const settingTheme = await AsyncStorage.getItem('com.proximus.theme')
          
            setIsLoadingData(false);
            if (value !== null) {
                let list = JSON.parse(value);
                dispatch(initializeDeviceList({json:list}))
            }
            if(settingTheme !== null){
                setTheme(settingTheme);
            }
        } catch (e) {
            // error reading value
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <HeaderPlain title={'Proximus'}  navigation={navigation}/>
          
            <View style={styles.searchContainer}>
                <SearchBar />
            </View>
            <View style={styles.listContainer}>
            {isLoadingData
                ?
                <View style={styles.loaderContainer}>
                     <ActivityIndicator style={styles.loader}/>
                    <Text>
                        Loading Data..
                    </Text>
               
                </View>
                :
                <ListView navigation={navigation}/>
            }
            </View>
            <View style={styles.fabStyles}>
               
                <Floatingbutton navigation={navigation} />
             
            </View>
            <View style={styles.exportContainer}>
                <ExportImport navigation={navigation}/>
            </View>
           
        </SafeAreaView>
    )
}
export default Home;
