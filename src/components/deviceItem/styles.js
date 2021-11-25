import { StyleSheet } from "react-native";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";

const styles = StyleSheet.create({
    container: {
        width: widthPercentageToDP(100),
        borderBottomWidth: 1,
        paddingLeft: widthPercentageToDP(3),
        alignItems: "flex-start",
        height: heightPercentageToDP(8),
        justifyContent: "center",
        flexDirection: "row"
    },
    textContainer: {
        width: widthPercentageToDP(45),
        height: heightPercentageToDP(8),
        alignItems: "flex-start",
        justifyContent: "center"
    },
    actionContainer: {
        width: widthPercentageToDP(45),
        height: heightPercentageToDP(8),
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly"
    },
    controlContainer:{
        width:widthPercentageToDP(35),
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center"
    },
    deviceHeader: {
        fontSize: 18,
        fontFamily: "Cochin",
        fontWeight: "bold"
    },
    platform: {
        fontSize: 14,
        fontFamily: "Cochin",

    }, buttonContainer: {
        width: widthPercentageToDP(15),
        height: heightPercentageToDP(5),
        alignItems: "center",
        justifyContent: "center"
    },
    buttonText: {
        fontFamily: "Cochin",
        fontSize: 16
    },
    iconStyle: { 
        width: widthPercentageToDP(5), 
        height: heightPercentageToDP(6) 
    }

})

export default styles;