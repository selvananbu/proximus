import { StyleSheet } from "react-native";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";

const styles = StyleSheet.create({
    container:{
        height:"100%",
        alignItems:"flex-start",
        justifyContent:"center"
    },
    textInputContainer:{
        width:widthPercentageToDP(90),
        height:heightPercentageToDP(5),
        // borderRadius:8,
        // borderWidth:1,
        justifyContent:"center",
        paddingLeft:widthPercentageToDP(3)
    },
})

export default styles;