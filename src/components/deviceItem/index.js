import React from 'react';
import { Alert, Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { deleteItemFromList } from '../../actions';
import Toast from 'react-native-toast-message';
import { getQuoteOftheDay } from './helper';
import styles from './styles';
import { ThemeContext } from '../../../App';

const DeviceItem = ({
    navigation,
    device
}) => {
    const dispatch = useDispatch();
    const { setTheme, theme } = React.useContext(ThemeContext);
    let isDarkMode = theme === 'Dark';

    const onDeleteConfirmed = async () => {
        let response = await getQuoteOftheDay();
        if (response?.status === 200) {
            dispatch(deleteItemFromList({ json: device }))
            console.log("Came herrrr");
            let data = response?.data[0];
            Toast.show({
                type: 'success',
                text1: data['q'],
                text2: `-${data['a']}`
            });
        }
        else {
            Toast.show({
                type: 'error',
                text1: 'No Quotes available',
                text2: 'Netwok error'
            });
        }
    }

    const onDeviceDeletePressed = () => {
        Alert.alert(
            "Device Delete",
            "Are you sure you want to delete the device ?",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "OK", onPress: () => onDeleteConfirmed() }
            ]
        );
    }
    const onEditItemPressed = () => {
        navigation.navigate("DeviceDetail", { editDevice: device })
    }
    const onDevicePressed = () => {
        navigation.navigate("DeviceView", { device: device })
    }
    const { deviceName, platform } = device;
    let editIcon = isDarkMode ? require("../../assets/image/editDark.png") : require("../../assets/image/editLight.png")
    let deleteIcon = isDarkMode ? require("../../assets/image/deleteDark.png") : require("../../assets/image/deleteLight.png")
    let rightIcon = isDarkMode ? require("../../assets/image/rightIconDark.png") : require("../../assets/image/rightIconLight.png")


    return (
        <TouchableOpacity style={[styles.container, { borderBottomColor: isDarkMode ? "#ffff" : "#000" }]} onPress={() => onDevicePressed()}>
            <View style={styles.textContainer}>
                <Text style={[styles.deviceHeader, { color: isDarkMode ? '#ffff' : '#000000' }]}>{deviceName}</Text>
                <Text style={[styles.platform, { color: isDarkMode ? '#ffff' : '#000000' }]}>{platform}</Text>
            </View>
            <View style={styles.actionContainer}>
                <View style={styles.controlContainer}>
                    <TouchableOpacity style={styles.buttonContainer} onPress={() => onEditItemPressed()}>
                        <Image source={editIcon} style={styles.iconStyle} resizeMode="contain" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonContainer} onPress={() => onDeviceDeletePressed()}>
                        <Image source={deleteIcon} style={styles.iconStyle} resizeMode="contain" />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.buttonContainer} onPress={() => onDevicePressed()}>
                    <Image source={rightIcon} style={styles.iconStyle} resizeMode="contain" />
                </TouchableOpacity>

            </View>
        </TouchableOpacity>
    );
}

export default DeviceItem;
