import { StyleSheet } from "react-native";
import { heightPercentageToDP } from "react-native-responsive-screen";
import { itemDarkColor, primaryDarkColor } from "../../assets/colors";

const styles = StyleSheet.create({
    containerDark:{
        height:"100%",
        alignItems:"center",
        justifyContent:"flex-start",
        backgroundColor:primaryDarkColor
    },
    containerLight:{
        height:"100%",
        alignItems:"center",
        justifyContent:"flex-start",
        backgroundColor:"white"
    }
})

export default styles;
