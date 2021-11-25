import React from 'react';
import { SafeAreaView, Text, View, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeContext } from '../../../App';
import { pushItemstoList } from '../../actions';
import { arrayToCSV, csvJSON } from './helper';
import styles from './styles';
import Toast from 'react-native-simple-toast';
import DocumentPicker from 'react-native-document-picker'


var RNFS = require('react-native-fs');



const ExportImport = ({
    navigation,
}) => {

    const deviceReducer = useSelector(state => state.deviceReducer);
    const dispatch = useDispatch();
    const { setTheme, theme } = React.useContext(ThemeContext);
    let isDarkMode = theme === 'Dark';

    const onExportPressed = () => {
        let list = deviceReducer?.deviceList;
        let csvData = arrayToCSV(list);

        var path = RNFS.DocumentDirectoryPath + '/test.csv';


        RNFS.writeFile(path, csvData, 'utf8')
            .then((success) => {
                Toast.show('Device list exported successfully...', Toast.LONG);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }

    const onImportPressed = async () => {
        try {
            const res = await DocumentPicker.pick({})
            onDocumentSelected(res)
        } catch (err) {
            if (DocumentPicker.isCancel(err)) {
                // User cancelled the picker, exit any dialogs or menus and move on
            } else {
                throw err
            }
        }

    }

    const onDocumentSelected = (res) => {
        var path = res?.uri;
        if (path) {
            RNFS.readFile(path, 'utf8')
                .then((data) => {
                    let list = csvJSON(data);
                    Toast.show('Imported successfully...', Toast.LONG);
                    dispatch(pushItemstoList({ json: list }));
                })
        }

    }

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: isDarkMode ? "grey" : "white" }]}>
            <View style={styles.controllerContainer}>
                {deviceReducer?.deviceList?.length > 0
                    ?
                    <TouchableOpacity style={[styles.buttonContainer, { borderColor: isDarkMode ? "#fff" : "#000" }]} onPress={() => onExportPressed()}>
                        <Text style={[styles.buttonText, { color: isDarkMode ? "#fff" : "#000" }]}>
                            Export
                        </Text>
                    </TouchableOpacity>
                    :
                    <View />
                }

                <TouchableOpacity style={[styles.buttonContainer, { borderColor: isDarkMode ? "#fff" : "#000" }]} onPress={() => onImportPressed()}>
                    <Text style={[styles.buttonText, { color: isDarkMode ? "#fff" : "#000" }]}>
                        Import
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
};

export default ExportImport;
