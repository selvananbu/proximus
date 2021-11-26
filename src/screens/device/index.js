import { useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { addItemToList, editCurrentItem } from '../../actions';
import styles from './styles';
import { v4 as uuidv4 } from 'uuid';
import HeaderPlain from '../../components/header';
import QRCode from 'react-native-qrcode-svg';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import { ThemeContext } from '../../../App';
import { primaryDarkColor } from '../../assets/colors';


const DeviceView = ({
    navigation,
}) => {
    const [deviceName, setDeviceName] = useState('');
    const [platform, setPlatForm] = useState('');
    const [currentOwner, setCurrentOwner] = useState('');
    const [barcodeData, setBarCodeData] = useState('');
    const [isEditMode, setIsEditMode] = useState(false);

    const route = useRoute();
    const { setTheme, theme } = React.useContext(ThemeContext);
    let isDarkMode = theme === 'Dark';



    useEffect(() => {
        let params = route?.params;
        if (params) {
            console.log("Route", params);
            let device = params?.device;
            setIsEditMode(true);
            setCurrentOwner(device?.owner)
            setDeviceName(device?.deviceName)
            setPlatForm(device?.platform)

            let barCodeData = {
                deviceName:device?.deviceName,
                deviceOwner:device?.owner,
                platform:device?.platform
            }
            setBarCodeData(barCodeData)
        }

    }, [])
    const onBackPressed = () => {
        navigation.pop();
    }

    return (
        <SafeAreaView style={[styles.container,{backgroundColor:isDarkMode ? primaryDarkColor : "white"}]}>
            <HeaderPlain title={'Proximus'} navigation={navigation} />
            {/* <View style={styles.headerContainer}>
                <Text style={[styles.headerText,{color:isDarkMode?"#fff":"#000"}]}>
                    {'Device Dteails'}
                </Text>
            </View> */}
            <View style={styles.barcodeContainer}>
                <QRCode
                    value={JSON.stringify(barcodeData)}
                    size={heightPercentageToDP(25)}
                />
            </View>
            <View style={styles.formContainer}>
                <TouchableOpacity style={styles.textInputContainer}>
                    <Text style={[styles.textFields,{color:isDarkMode?"#fff":"#000"}]}>
                        Device Name: {deviceName}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.textInputContainer}>
                    <Text style={[styles.textFields,{color:isDarkMode?"#fff":"#000"}]}>
                    Platform: {platform}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.textInputContainer}>
                    <Text style={[styles.textFields,{color:isDarkMode?"#fff":"#000"}]}>
                        Owner: {currentOwner}
                    </Text>
                </TouchableOpacity>

            </View>
            <TouchableOpacity style={[styles.buttonContainer,{borderColor:isDarkMode?"#fff":"#000"}]} onPress={() => onBackPressed()}>
                <Text style={[styles.buttonText,{color:isDarkMode?"#fff":"#000"}]}>
                    Back
                </Text>
            </TouchableOpacity>

        </SafeAreaView>
    )
}

export default DeviceView;
