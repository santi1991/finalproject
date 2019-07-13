import React, { Component } from 'react';
import { View, StyleSheet, Text, ScrollView, ActivityIndicator } from 'react-native';
import { Icon, Card, Image } from 'react-native-elements';
import {  createBottomTabNavigator} from 'react-navigation';


class ViviendaTab extends Component {

    static navigationOptions = {
        title: 'Servicio de Viviendas',
        tabBarIcon: ({ tintColor }) => (
            <Icon
                name='plus'
                type='font-awesome'
                size={24}
                iconStyle={{ color:tintColor }}
            />
        )
    };

    render() {
        return (
            <ScrollView>
                <Card
                    featuredTitle='VIVIENDAS'

                    image={require('./images/vivienda.jpg')}
                >
                    <Text style={{marginBottom: 10, textAlign: 'center'}}>
                        Diseño y desarrollo de viviendas que responden a estilos de vida modernos y dinámicos.
                    </Text>                    
                </Card>     
                <View style={styles.imageContainer}>
                <Image
                    source={require('./images/edificio.jpg')}
                    style={{ width: 400, height: 300 }}
                    PlaceholderContent={<ActivityIndicator />}
                />               
                </View>
            </ScrollView>
        );
    }
    
}

class MicroespaciosTab extends Component {

    static navigationOptions = {
        title: 'Servicio de Microespacios',
        tabBarIcon: ({ tintColor }) => (
            <Icon
                name='minus'
                type='font-awesome'
                size={24}
                iconStyle={{ color:tintColor }}
            />
        )
    };

    render() {
        return (
            <ScrollView>
                <Card
                    featuredTitle='MICROESPACIOS'
                    featuredTitleStyle={{color: 'black'}}
                    image={require('./images/microespacio.jpg')}
                >
                    <Text style={{marginBottom: 10, textAlign: 'center' }}>
                         Diseño y desarrollo de microespacios que brindan una nueva inspiración.
                    </Text>                    
                </Card>
                <View style={styles.imageContainer}>
                <Image
                    source={require('./images/oficina.jpg') }
                    style={{ width: 400, height: 300 }}
                    PlaceholderContent={<ActivityIndicator />}
                />
                </View>
            </ScrollView>
        );
    }
    
}

const Services = createBottomTabNavigator(
    {
        Vivienda: ViviendaTab,
        Microespacios: MicroespaciosTab
    },
    {
        tabBarOptions: {
            activeBackgroundColor: '#00897B',
            inactiveBackgroundColor: '#E0F2F1',
            activeTintColor: 'white',
            inactiveTintColor: 'gray'
        }
    }
)

const styles = StyleSheet.create({
    imageContainer: {
        alignItems:'center',
        marginTop:10

    }
})

export default Services;
