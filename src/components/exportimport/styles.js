import { StyleSheet } from "react-native";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";

const styles = StyleSheet.create({
    container:{
       height:"100%",
       width:"100%",
       alignItems:"center",
       justifyContent:"space-evenly",
       flexDirection:"row"
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
    }
})

export default styles;