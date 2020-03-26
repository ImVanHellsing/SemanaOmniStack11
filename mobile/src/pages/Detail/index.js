import React from 'react'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { View, Text, Image, TouchableOpacity } from 'react-native'

//Assets import
import logoImg from '../../assets/logo.png'

//Styles import
import styles from './styles'

export default function Detail() {

    const navigation = useNavigation()

    function navigateBack() {
        navigation.goBack()
    }

    return (
        <View style={styles.container}>

            {/* Page Detail's Header */}
            <View style={styles.header}>

                <Image source={logoImg}/>

                <TouchableOpacity
                    onPress={navigateBack}
                >
                    <Feather name="arrow-left" size={16} color="#e82041"/>
                </TouchableOpacity>
            </View>

            {/* Page Detail's Body */}

            {/* Incident Info */}
            <View style={styles.incident}>
                <Text style={[styles.incidentProperty, {marginTop: 0 }]}>ONG:</Text>
                <Text style={styles.incidentValue}>APAD</Text>

                <Text style={styles.incidentProperty}>Caso:</Text>
                <Text style={styles.incidentValue}>Cadelinha Atropelada</Text>

                <Text style={styles.incidentProperty}>Valor:</Text>
                <Text style={styles.incidentValue}>R$ 120,00</Text>
            </View>

            {/* Incident Contact */}
            <View style={styles.contactBox}>

                <Text style={styles.heroTitle}>Salve o dia!</Text>
                <Text style={styles.heroTitle}>Seja o herói deste caso</Text>

                <Text style={styles.heroDescription}>Entre em contato</Text>
                
                <View style={styles.actions}>

                    <TouchableOpacity style={styles.action}>
                        <Text style={styles.actionText}>WhatsApp</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.action}>
                        <Text style={styles.actionText}>E-mail</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </View>
    )
}   