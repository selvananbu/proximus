import { useTheme } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { ThemeContext } from '../../../App';
import DeviceItem from '../deviceItem';
import makeStyles from './styles';
import styles from './styles';

const ListView = ({
    navigation,
}) => {
    const deviceReducer = useSelector(state => state.deviceReducer);
    const { setTheme, theme } = React.useContext(ThemeContext);

    return (
        <SafeAreaView style={theme == 'Light' ? styles.containerLight : styles.containerDark}>
            <ScrollView>
                {
                    deviceReducer?.searchFilter !== ''
                        ?
                        deviceReducer?.filterList?.map((device, idx) => {
                            return (
                                <DeviceItem device={device} navigation={navigation} key={idx + "_"} />
                            )
                        })
                        :
                        deviceReducer?.deviceList?.map((device, idx) => {
                            return (
                                <DeviceItem device={device} navigation={navigation} key={idx + "_"} />
                            )
                        })}
            </ScrollView>
        </SafeAreaView>
    )
};

export default ListView;
