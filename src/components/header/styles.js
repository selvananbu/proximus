import { StyleSheet } from "react-native";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import { itemDarkColor, primaryDarkColor } from "../../assets/colors";

const styles = StyleSheet.create({
    headerContainer: {
        width: widthPercentageToDP(100),
        height: heightPercentageToDP(8),
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',

    },
    headerText: {
        fontSize: 24,
        fontFamily: 'Cochin',
        fontWeight: 'bold',
        paddingLeft: widthPercentageToDP(10)
    },
    imageContainer: {
        width: widthPercentageToDP(15),
        alignItems: "center",
        justifyContent: "space-evenly",
        flexDirection: "row",
        height: heightPercentageToDP(8)
    }
})

export default styles;
