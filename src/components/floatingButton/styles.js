import { StyleSheet } from "react-native";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";

const styles = StyleSheet.create({
    container:{
        height:heightPercentageToDP(7),
        width:heightPercentageToDP(7),
        borderRadius:heightPercentageToDP(7)/2,
        alignItems:"center",
        justifyContent:"center"
    },
    addIcon:{
        width:widthPercentageToDP(7),
        height:heightPercentageToDP(7)
    }
})

export default styles;