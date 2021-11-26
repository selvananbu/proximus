import { useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { addItemToList, editCurrentItem } from '../../actions';
import styles from './styles';
import { v4 as uuidv4 } from 'uuid';
import HeaderPlain from '../../components/header';
import { ThemeContext } from '../../../App';
import Toast from 'react-native-simple-toast';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { heightPercentageToDP } from 'react-native-responsive-screen';
import { primaryDarkColor } from '../../assets/colors';



const DeviceDetail = ({
    navigation,
}) => {
    const [deviceName, setDeviceName] = useState('');
    const [platform, setPlatForm] = useState('');
    const [currentOwner, setCurrentOwner] = useState('');
    const [isEditMode, setIsEditMode] = useState(false);

    const dispatch = useDispatch();
    const route = useRoute();
    const { setTheme, theme } = React.useContext(ThemeContext);
    let isDarkMode = theme === 'Dark';

   

    useEffect(() => {
        let params = route?.params;
        if(params){
            console.log("Route",params);
            let device = params?.editDevice;
            setIsEditMode(true);
            setCurrentOwner(device?.owner)
            setDeviceName(device?.deviceName)
            setPlatForm(device?.platform)
        }
       
    },[])

    const onDeviceAdd = () => {
        let body = {
            _id: uuidv4(),
            deviceName: deviceName,
            platform: platform,
            owner: currentOwner
        }
        Toast.show('Device added successfully...', Toast.LONG);
        dispatch(addItemToList({ json: body }));
        clearData();
        navigation.navigate('Home');
    }

    const onDeviceEdit = () => {
        let params = route?.params;
        let device = params?.editDevice;

        let body = {
            _id:device?._id,
            deviceName: deviceName,
            platform: platform,
            owner: currentOwner
        }
        Toast.show('Device updated successfully...', Toast.LONG);
        dispatch(editCurrentItem({ json: body }));
        clearData();
        navigation.navigate('Home'); 
    }

    const onCancelPressed = () => {
        navigation.navigate('Home')
    }

    const clearData = () => {
        setCurrentOwner('')
        setDeviceName('')
        setPlatForm('')
    }

    return (
       

        <SafeAreaView style={[styles.container,{backgroundColor:isDarkMode?primaryDarkColor:"white"}]}>
             <KeyboardAwareScrollView>
            
                <HeaderPlain title={'Proximus'}  navigation={navigation}/>
            <View style={styles.headerContainer}>
                <Text style={[styles.headerText,{color:isDarkMode?"#fff":"#000"}]}>
                   {isEditMode ? 'Update Device' : 'Add Device'}
                </Text>
            </View>
            <View style={styles.formContainer}>
                <View style={[styles.textInputContainer,{borderColor:isDarkMode?"#fff":"#000"}]}>
                    <TextInput
                        onChangeText={(text) => setDeviceName(text)}
                        value={deviceName}
                        placeholder='Device Name'
                        placeholderTextColor={isDarkMode?"#fff":"grey"}
                        style={{
                            color:isDarkMode?"#fff":"#000",
                            height:heightPercentageToDP(8)
                        }}
                    />
                </View>
                <View style={[styles.textInputContainer,{borderColor:isDarkMode?"#fff":"#000"}]}>
                    <TextInput
                        onChangeText={(text) => setPlatForm(text)}
                        value={platform}
                        placeholder='Platform'
                        placeholderTextColor={isDarkMode?"#fff":"grey"}
                        style={{
                            color:isDarkMode?"#fff":"#000",
                            height:heightPercentageToDP(8)
                        }}
                    />
                </View>
                <View style={[styles.textInputContainer,{borderColor:isDarkMode?"#fff":"#000"}]}>
                    <TextInput
                        onChangeText={(text) => setCurrentOwner(text)}
                        value={currentOwner}
                        placeholder='Owner Name'
                        placeholderTextColor={isDarkMode?"#fff":"grey"}
                        style={{
                            color:isDarkMode?"#fff":"#000",
                            height:heightPercentageToDP(8)
                        }}
                    />
                </View>

            </View>
            <View style={styles.controllerContainer}>
            {isEditMode
            ?
            <TouchableOpacity style={[styles.buttonContainer,{borderColor:isDarkMode?"#fff":"#000"}]} onPress={() => onDeviceEdit()}>
                    <Text style={[styles.buttonText,{color:isDarkMode?"#fff":"#000"}]}>
                        Update
                    </Text>
                </TouchableOpacity> 
            :
            <TouchableOpacity style={[styles.buttonContainer,{borderColor:isDarkMode?"#fff":"#000"}]} onPress={() => onDeviceAdd()}>
            <Text style={[styles.buttonText,{color:isDarkMode?"#fff":"#000"}]}>
              Add
            </Text>
        </TouchableOpacity> 
                }
                <TouchableOpacity style={[styles.buttonContainer,{borderColor:isDarkMode?"#fff":"#000"}]} onPress={() => onCancelPressed()}>
                    <Text style={[styles.buttonText,{color:isDarkMode?"#fff":"#000"}]}>
                        Cancel
                    </Text>
                </TouchableOpacity>
            </View>

        </KeyboardAwareScrollView>
        </SafeAreaView>
    )
}

export default DeviceDetail;
