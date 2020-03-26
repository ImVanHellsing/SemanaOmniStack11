import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
    
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight + 20,
        paddingHorizontal: 24,
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    headerText: {
        color: '#737380',
        fontSize: 15,
    },
    
    headerTextBold: {
        fontWeight: 'bold'
    },

    title: {
        color: '#13131a',
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 16,
        marginTop:48,
    },

    description: {
        color: '#737380',
        fontSize: 16,
        lineHeight: 24
    },

    incidentList: {
        marginTop: 32,  
    },
    
    incident: {
        backgroundColor: '#fff',
        padding: 24,
        borderRadius: 8,
        marginBottom: 16,
    },
    
    incidentProperty: {
        color: '#41414d',
        fontSize: 14,
        fontWeight: 'bold'
    },

    incidentValue: {
        color: '#737380',
        fontSize: 15,
        marginTop: 8,
        marginBottom: 24
    },

    detailsButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    
    detailsButtonText: {
        color:'#e02041',
        fontSize: 15,
        fontWeight: 'bold'
    }
})