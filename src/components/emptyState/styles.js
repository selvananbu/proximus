import { StyleSheet } from "react-native";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";

const styles = StyleSheet.create({
    emptyIcon:{
       height:heightPercentageToDP(45),
       width:widthPercentageToDP(60)
    },
    emptyContainer:{
        width:widthPercentageToDP(100),
        height:heightPercentageToDP(70),
        alignItems:"center",
        justifyContent:"center"
    },
    emptyText:{
        fontSize:16,
        fontFamily:"Cochin"
    }
})

export default styles;