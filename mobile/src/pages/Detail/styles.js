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

    incident: {
        backgroundColor: '#fff',
        padding: 24,
        borderRadius: 8,
        marginBottom: 16,
        marginTop: 48,
    },

    incidentProperty: {
        color: '#41414d',
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 24
    },

    incidentValue: {
        color: '#737380',
        fontSize: 15,
        marginTop: 8,
    },

    contactBox: {
        backgroundColor: '#fff',
        padding: 24,
        borderRadius: 8,
        marginTop: 24,
    },

    heroTitle: {
        color: '#13131a',
        fontWeight: 'bold',
        fontSize: 20,
        lineHeight: 30
    },

    heroDescription: {
        color:'#737380',
        fontSize: 15,
        marginTop: 16
    },

    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 16,
    },
    
    action: {
        height: 50,
        width: '48%',
        backgroundColor: '#e02041',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems  : 'center'
    },
    
    actionText: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold'
    },
})