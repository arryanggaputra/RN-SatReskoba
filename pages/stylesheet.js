import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
    container: {
        flex: 1,
        // marginTop: 20
    },
    markWrap: {
        flex: 1,
        paddingTop: 20,
        paddingVertical: 50,
        marginTop: 60,
    },
    mark: {
        width: null,
        height: null,
        flex: 1,
    },
    background: {
        width,
        height,
    },
    wrapper: {
        paddingVertical: 20,
        marginHorizontal:10,
        backgroundColor:'rgba(0, 0, 0, 0.5)',
        borderRadius:4,
    },
    inputWrap: {
        flexDirection: "row",
        marginVertical: 10,
        marginHorizontal: 20,
        height: 40,
        backgroundColor:'rgba(255,255,255,0.4)',
        borderWidth: 0,
        borderColor: "rgba(255,255,255,0.3)",
        borderRadius:3,
    },
    iconWrap: {
        paddingHorizontal: 7,
        alignItems: "center",
        justifyContent: "center",
    },
    icon: {
        height: 20,
        width: 20,
    },
    input: {
        flex: 1,
        paddingHorizontal: 10,
        fontSize:16,
    },
    button: {
        backgroundColor: "#009A3D",
        // paddingVertical: 10,
        alignItems: "center",
        justifyContent: "center",
        // marginTop: 10,
        // marginHorizontal: 5,
        // borderRadius:3,
    },
    buttonText: {
        color: "#FFF",
        fontSize: 18,
    },
    forgotPasswordText: {
        color: "#333",
        backgroundColor: "transparent",
        textAlign: "center",
        fontWeight:"bold",
        paddingVertical:10
    },
    signupWrap: {
        backgroundColor: "transparent",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    accountText: {
        color: "#D8D8D8"
    },
    signupLinkText: {
        color: "#FFF",
        marginLeft: 5,
    },
    title:{
        fontSize:20,
    },

    subtitle:{
        fontSize:14,
        color:'#009A3D',
        fontWeight:'bold'
    },
    containerTitle:{
        flex: 1,
        paddingTop: 20,
        paddingVertical: 50,
        paddingHorizontal:50,
        marginTop: 60,  
        backgroundColor:'transparent',  
    },
    withNavbar: {
        backgroundColor: '#fff',
    },
    keteranganTitle:{
        fontWeight:'bold',
        marginBottom:10,
    },
    keterangan: {
        paddingVertical:20,
        paddingHorizontal:20,
        backgroundColor:'#f9f9f9'
    },
    listItemSubtitle: {
        // fontFamily:'Roboto-Thin',
        fontSize:13,
        fontWeight:"100"
    },
    brown:{
        backgroundColor:'#eee'
    },
    timeline:{
        marginTop:25,
        marginHorizontal:20
    },
    timelineTitle: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    timelineDescription:{
        marginTop:10
    },
    timelineReadmore:{
        color: 'green',
        fontWeight:'bold',
    },
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
    },
    errorMessage:{
        fontSize: 14, 
        color: 'white', 
        backgroundColor:'red',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius:3,
        margin:5,
    },
    tabLabelStyle: {
        color: 'rgba(0,0,0,0.3)',
        fontSize: 14,
        fontWeight: 'bold',
        paddingVertical:10,
    },
    activeTabLabelStyle: {
        color: 'black'
    }, 
    mapCallout : {
        padding:10,
    },
    floatingArea :{
        width:50,
        backgroundColor:'transparent',
        height:50,
        position: 'absolute',
        right:20,
        bottom:20,
        zIndex:10
    }
});