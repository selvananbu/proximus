import { useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, TextInput, TouchableOpacity, View, Switch } from 'react-native';
import { useDispatch } from 'react-redux';
import { addItemToList, editCurrentItem } from '../../actions';
import styles from './styles';
import { v4 as uuidv4 } from 'uuid';
import HeaderPlain from '../../components/header';
import { ThemeContext } from '../../../App';
import Toast from 'react-native-simple-toast';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { primaryDarkColor } from '../../assets/colors';
import DatePicker from 'react-native-date-picker'
import moment from 'moment';
import { Picker } from '@react-native-picker/picker';
import { ANDROID, IOS, OTHER } from '../../assets/constants';
import ModalSelector from 'react-native-modal-selector'




const platformList = [
    {key:0,label:ANDROID},
    {key:1,label:IOS},
    {key:2,label:OTHER},
]


const DeviceDetail = ({
    navigation,
}) => {
    const [deviceName, setDeviceName] = useState('');
    const [platform, setPlatForm] = useState('');
    const [currentOwner, setCurrentOwner] = useState('');
    const [isActive, setIsActive] = useState(true);
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    const [isEditMode, setIsEditMode] = useState(false);

    const dispatch = useDispatch();
    const route = useRoute();
    const { setTheme, theme } = React.useContext(ThemeContext);
    let isDarkMode = theme === 'Dark';



    useEffect(() => {
        let params = route?.params;
        if (params) {
           
            let device = params?.editDevice;
            console.log("Route", device,new Date(device?.purchaseDate));
            setIsEditMode(true);
            setCurrentOwner(device?.owner)
            setDeviceName(device?.deviceName)
            setPlatForm(device?.platform)
            setDate(new Date(device?.purchaseDate))
            setIsActive(device?.active)
        }

    }, [])

    const onDeviceAdd = () => {
        let body = {
            _id: uuidv4(),
            deviceName: deviceName,
            platform: platform,
            owner: currentOwner,
            purchaseDate:date.toUTCString(),
            active:isActive
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
            _id: device?._id,
            deviceName: deviceName,
            platform: platform,
            owner: currentOwner,
            purchaseDate:date.toUTCString(),
            active:isActive

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
        setIsActive(false)
        setDate(new Date())
    }

    let index = 0;
    // const data = [
    //     { key: index++, section: true, label: 'Fruits' },
    //     { key: index++, label: 'Red Apples' },
    //     { key: index++, label: 'Cherries' },
    //     { key: index++, label: 'Cranberries' },
    //     { key: index++, label: 'Pink Grapefruit' },
    //     { key: index++, label: 'Raspberries' },
    //     { key: index++, section: true, label: 'Vegetables' },
    //     { key: index++, label: 'Beets' },
    //     { key: index++, label: 'Red Peppers' },
    //     { key: index++, label: 'Radishes' },
    //     { key: index++, label: 'Radicchio' },
    //     { key: index++, label: 'Red Onions' },
    //     { key: index++, label: 'Red Potatoes' },
    //     { key: index++, label: 'Rhubarb' },
    //     { key: index++, label: 'Tomatoes' }
    // ];


    return (


        <SafeAreaView style={[styles.container, { backgroundColor: isDarkMode ? primaryDarkColor : "white" }]}>
            <KeyboardAwareScrollView>

                <HeaderPlain title={'Proximus'} navigation={navigation} />
                <View style={styles.headerContainer}>
                    <Text style={[styles.headerText, { color: isDarkMode ? "#fff" : "#000" }]}>
                        {isEditMode ? 'Update Device' : 'Add Device'}
                    </Text>
                </View>
                <View style={styles.formContainer}>
                    <View style={[styles.textInputContainer, { borderColor: isDarkMode ? "#fff" : "#000" }]}>
                        <TextInput
                            onChangeText={(text) => setDeviceName(text)}
                            value={deviceName}
                            placeholder='Device Name'
                            placeholderTextColor={"grey"}
                            style={{
                                color: isDarkMode ? "#fff" : "#000",
                                height: heightPercentageToDP(8)
                            }}
                        />
                    </View>
                    <View style={[styles.textInputContainer, { borderColor: isDarkMode ? "#fff" : "#000" }]}>
                    <ModalSelector
                    data={platformList}
                    initValue="Select Device OS"
                    // supportedOrientations={['landscape']}
                    accessible={true}
                    scrollViewAccessibilityLabel={'Scrollable options'}
                    cancelButtonAccessibilityLabel={'Cancel Button'}
                    onChange={(option)=>{ setPlatForm(option.label)}}>

                    <TextInput
                      style={{
                        color: isDarkMode ? "#fff" : "#000",
                        height: heightPercentageToDP(8),
                        
                    }}
                    placeholderTextColor={"grey"}
                        editable={false}
                        placeholder="Select Device OS"
                        value={platform} />

                </ModalSelector>
                    </View>
                    <View style={[styles.textInputContainer, { borderColor: isDarkMode ? "#fff" : "#000" }]}>
                        <TextInput
                            onChangeText={(text) => setCurrentOwner(text)}
                            value={currentOwner}
                            placeholder='Current Owner'
                            placeholderTextColor={"grey"}
                            style={{
                                color: isDarkMode ? "#fff" : "#000",
                                height: heightPercentageToDP(8)
                            }}
                        />
                    </View>
                    <View style={styles.switchContainer}>
                        <View>
                            <Text style={[styles.textFields, { color: isDarkMode ? "#fff" : "#000", paddingBottom: heightPercentageToDP(1) }]}>
                                Purchase Date:
                            </Text>
                            <TouchableOpacity style={[styles.textInputContainer, { borderColor: isDarkMode ? "#fff" : "#000" }]} onPress={() => setOpen(true)}>
                                <Text style={[styles.textFields, { color: isDarkMode ? "#fff" : "#000" }]}>
                                    {moment(date).format("DD/MM/YYYY")}
                                </Text>
                            </TouchableOpacity>
                            <DatePicker
                                modal
                                open={open}
                                date={date}
                                onConfirm={(date) => {
                                    setOpen(false)
                                    setDate(date)
                                }}
                                onCancel={() => {
                                    setOpen(false)
                                }}
                            />
                        </View>
                    </View>
                    <View style={styles.switchContainer}>
                        <Text style={[styles.textFields, { color: isDarkMode ? "#fff" : "#000" }]}>
                            Device Active:
                        </Text>
                        <Switch style={styles.switch} value={isActive} onValueChange={() => setIsActive(!isActive)} />
                    </View>

                </View>
                <View style={styles.controllerContainer}>
                    {isEditMode
                        ?
                        <TouchableOpacity style={[styles.buttonContainer, { borderColor: isDarkMode ? "#fff" : "#000" }]} onPress={() => onDeviceEdit()}>
                            <Text style={[styles.buttonText, { color: isDarkMode ? "#fff" : "#000" }]}>
                                Update
                            </Text>
                        </TouchableOpacity>
                        :
                        <TouchableOpacity style={[styles.buttonContainer, { borderColor: isDarkMode ? "#fff" : "#000" }]} onPress={() => onDeviceAdd()}>
                            <Text style={[styles.buttonText, { color: isDarkMode ? "#fff" : "#000" }]}>
                                Add
                            </Text>
                        </TouchableOpacity>
                    }
                    <TouchableOpacity style={[styles.buttonContainer, { borderColor: isDarkMode ? "#fff" : "#000" }]} onPress={() => onCancelPressed()}>
                        <Text style={[styles.buttonText, { color: isDarkMode ? "#fff" : "#000" }]}>
                            Cancel
                        </Text>
                    </TouchableOpacity>
                </View>

            </KeyboardAwareScrollView>
        </SafeAreaView>
    )
}

export default DeviceDetail;
