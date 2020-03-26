import React from 'react'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';
import { View, Image, Text, TouchableOpacity, FlatList } from 'react-native'

//Assets import
import logoImg from '../../assets/logo.png'

//Styles import
import styles from './styles'

export default function Incidents() {

    const navigation = useNavigation()

    function navigateToDetail() {
        navigation.navigate('Details')
    }

    return (
        <View style={styles.container}>
            
            {/* Page Incidents's Header */}
            <View style={styles.header}>
                <Image source={logoImg}/>
                <Text style={styles.headerText}>
                    Total de <Text style={styles.headerTextBold}>0 casos</Text>.
                </Text>
            </View>

            <Text style={styles.title}>Bem-Vindo</Text>
            <Text style={styles.description}>Escolha um dos casos abaixo e salve o dia.</Text>

            {/* Page Incidents's Body */}
            <FlatList 
                data={[1,2,3,4,5]}
                style={styles.incidentList}
                keyExtractor={incident => String(incident)}
                showsVerticalScrollIndicator={ false }
                renderItem={() => (

                    <View style={styles.incident}>
                        <Text style={styles.incidentProperty}>ONG:</Text>
                        <Text style={styles.incidentValue}>APAD</Text>

                        <Text style={styles.incidentProperty}>Caso:</Text>
                        <Text style={styles.incidentValue}>Cadelinha Atropelada</Text>

                        <Text style={styles.incidentProperty}>Valor:</Text>
                        <Text style={styles.incidentValue}>R$ 120,00</Text>

                        <TouchableOpacity 
                            style={styles.detailsButton}
                            onPress={navigateToDetail}
                        >
                            <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
                            <Feather name="arrow-right" size={16} color="#e02041"/>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    )
}   