import React, { Component } from 'react'; 
import { View, ScrollView, Alert } from 'react-native';
import { Card, Text, Button, Icon, SocialIcon } from 'react-native-elements';
import * as Animatable from 'react-native-animatable'; 
import { MailComposer } from 'expo';


class Contactus extends Component {
    constructor(props) {
        super (props);
    }
 
    static navigationOptions = {
        title: 'Contactenos'
    }

    //So as you can see this will open the MailComposer window with all this information already filled in 
    //into the MailComposer window of the mailing application that you choose to use for this purpose

    sendMail() {
        MailComposer.composeAsync({
            recipients: ['servicio@unoen25.com'],
            subject: 'Enquiry',
            body: 'To whom it may concern: '
        });
    }

    socialClick() {
        Alert.alert(
            'Alert Title',
            'My Alert Msg',
            [              
              {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
              },
              {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
            {cancelable: false},
          );
    }

    render() {
        return(
            <ScrollView>
                <Animatable.View animation='fadeInDown' duration={800} delay={800}>
                    <Card
                        title='Información de Contacto'
                        titleStyle={{ fontWeight: "bold", fontSize: 20 }}
                    >
                        <Text style={{margin: 10, fontSize: 15}}>
                            Centro Empresarial CALLE 11{"\n\n"}
                            Medellin, Antioquia{"\n\n"}
                            Colombia{"\n\n"}
                            Tel:+852 1234{"\n\n"}
                            Cel:+852 8765 4321{"\n\n"}
                            Email:servicio@unoen25.com
                        </Text>

                        <Button 
                         title='Enviar Correo'
                         buttonStyle={{ backgroundColor: '#00897B'}}
                         icon={<Icon name='envelope-o' type='font-awesome' color='white' containerStyle={{marginRight:10}} /> }
                         onPress={this.sendMail}
                        />                        

                    </Card>
                </Animatable.View>
                <Card>
                    <SocialIcon
                        title='Siguenos en Instagram'
                        button
                        light
                        type='instagram'
                        iconSize={35}
                        onPress={() => this.socialClick()}
                    />
                    <SocialIcon
                        title='Encuentranos en Facebook'
                        button
                        type='facebook'
                        onPress={() => this.socialClick()}
                    />
                </Card>
            </ScrollView>
        );
    }
}

export default Contactus;