import { StyleSheet } from "react-native";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
    },
    headerContainer:{
        height:heightPercentageToDP(15),
        width:widthPercentageToDP(100),
        alignItems:"center",
        justifyContent:"center"
    },
    headerText:{
        fontWeight:"bold",
        fontFamily:"Cochin",
        fontSize:32
    },
    barcodeContainer:{
        height:heightPercentageToDP(35),
        width:widthPercentageToDP(100),
        alignItems:"center",
        justifyContent:"center"
    },
    formContainer:{
        height:heightPercentageToDP(25),
        alignItems:"flex-start",
        justifyContent:"space-evenly"
    },
    textInputContainer:{
        width:widthPercentageToDP(75),
        height:heightPercentageToDP(5),
        justifyContent:"center",
        paddingLeft:widthPercentageToDP(3)
    },
    buttonContainer:{
        borderWidth:1,
        borderRadius:4,
        width:widthPercentageToDP(15),
        height:heightPercentageToDP(5),
        alignItems:"center",
        justifyContent:"center"
    },
    buttonText:{
        fontFamily:"Cochin",
        fontSize:16
    },
    controllerContainer:{
        flexDirection:"row",
        width:widthPercentageToDP(100),
        alignItems:"center",
        justifyContent:"space-evenly"
    },
    textFields:{
        fontFamily:"Cochin",
        fontSize:18
    },
})

export default styles;