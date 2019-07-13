import React, { Component } from 'react';
import Home from './HomeComponent';
import Projectsarea from './ProjectsareaComponent';
import Aboutus from './AboutComponent';
import Services from './ServicesComponent';
import Contactus from './ContactusComponent';
import { View, Platform, Image, StyleSheet, ScrollView, Text, Alert } from 'react-native';
import { createAppContainer, createStackNavigator, createDrawerNavigator, DrawerItems, SafeAreaView  } from 'react-navigation';
import { Icon, SocialIcon } from 'react-native-elements';
import { connect } from 'react-redux';
import { fetchProjects, fetchProjectsarea, fetchFounders, fetchStudio } from '../redux/ActionCreators';



const mapStateToProps = state =>  {
    return {
        projects: state.projects,    
        projectsarea: state.projectsarea,
        founders: state.founders,         
        studio: state.studio
    }
}

const mapDispatchToProps = dispatch => ({
    fetchProjects: () => dispatch(fetchProjects()),    
    fetchProjectsarea: () => dispatch(fetchProjectsarea()),
    fetchFounders: () => dispatch(fetchFounders()),
    fetchStudio: () => dispatch(fetchStudio())

} )

//----------------------------------------------------------------------------


const HomeNavigator = createStackNavigator(
    {
        Home: { 
            screen: Home,
            navigationOptions: ({ navigation }) => ({   
                headerLeft: <Icon 
                name='bars'                 
                containerStyle={{marginLeft:10}}                   
                type='font-awesome'
                size={26}                      
                color='white'
                onPress={() => navigation.toggleDrawer()}  
                />
            })                                               
        },
        Projectsarea: { 
            screen: Projectsarea,
        },
    }, 
    {
        initialRouteName: 'Home',          
        defaultNavigationOptions: {        
            headerStyle: {
                backgroundColor: '#00897B'
            },
            headerTintColor: '#fff',        
            headerTitleStyle: {
                color: '#fff'
            }
        }    
    } 
)


const AboutNavigator = createStackNavigator(
   { 
        Aboutus: { 
            screen: Aboutus,
            navigationOptions: ({ navigation }) => ({   
                headerLeft: <Icon 
                name='bars' 
                containerStyle={{marginLeft:10}}                                
                type='font-awesome'
                size={26}                      
                color='white'
                onPress={() => navigation.toggleDrawer()}  
                />
            })                                               
        }
    },
    {
        defaultNavigationOptions: {        
            headerStyle: {
                backgroundColor: '#00897B'
            },
            headerTintColor: '#fff',        
            headerTitleStyle: {
                color: '#fff'
            }
        }   
    }
)

const ServicesNavigator = createStackNavigator(
    { 
        Services: { 
             screen: Services,
             navigationOptions: ({ navigation }) => ({   
                 headerLeft: <Icon 
                 name='bars' 
                 containerStyle={{marginLeft:10}}                                
                 type='font-awesome'
                 size={26}                      
                 color='white'
                 onPress={() => navigation.toggleDrawer()}  
                 />
             })                                               
         }
     },
     {
         defaultNavigationOptions: {        
             headerStyle: {
                 backgroundColor: '#00897B'
             },
             headerTintColor: '#fff',        
             headerTitleStyle: {
                 color: '#fff'
             }
         }   
     }
 )


const ContactNavigator = createStackNavigator(
    { 
         Contactus: { 
             screen: Contactus,
             navigationOptions: ({ navigation }) => ({   
                 headerLeft: <Icon 
                 name='bars' 
                 containerStyle={{marginLeft:10}}                                
                 type='font-awesome'
                 size={26}                      
                 color='white'
                 onPress={() => navigation.toggleDrawer()}  
                 />
             })                                               
         }
     },
     {
         defaultNavigationOptions: {        
             headerStyle: {
                 backgroundColor: '#00897B'
             },
             headerTintColor: '#fff',        
             headerTitleStyle: {
                 color: '#fff'
             }
         }   
     }
 )

//----------------------------------------------------------------------------

const CustomDrawerContentComponent = (props) => ( 
    <ScrollView>

        <SafeAreaView style={styles.container}
            forceInset={{top: 'always',   
                horizontal: 'never'}}>

                <View style={styles.drawerHeader}> 

                    <View style={{flex: 2}}>
                        <Image source = {require('./images/logo.png')}
                            style={styles.drawerImage} />
                    </View>
            

                    <View style={{flex: 1}}>
                        <Text style={styles.drawerHeaderText}></Text>
                    </View>

                </View>

                <DrawerItems {...props} />  

                <View style={styles.drawerFooter}>

                    <View  >
                        <SocialIcon
                            onPress={() => Alert.alert(
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
                              )}
                            raised
                            type='facebook'
                        />
                    </View>

                    <View >
                        <SocialIcon
                            raised
                            type='instagram'
                            onPress={() => Alert.alert(
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
                              )}
                        />
                    </View>

                </View>

        </SafeAreaView>

    </ScrollView>
);  

const MainNavigator = createDrawerNavigator(  
    {         
        Home: {         
            screen: HomeNavigator,   
            navigationOptions: {  
                title: 'Inicio',
                drawerLabel: 'Inicio',
                drawerIcon: ({ tintColor }) => (  
                    <Icon
                        name='home'  
                        type='font-awesome'
                        size={24}
                        color={tintColor}     
                    />                   
                )
            }
        },  

        About: {
            screen: AboutNavigator,   
            navigationOptions: {  
                title: 'Nosotros',
                drawerLabel: 'Nosotros',
                drawerIcon: ({ tintColor }) => (  
                    <Icon
                        name='info-circle'
                        type='font-awesome'
                        size={24}
                        color={tintColor}     
                    />                   
                )
            }
        },

        Services: {
            screen: ServicesNavigator,   
            navigationOptions: {  
                title: 'Servicios',
                drawerLabel: 'Servicios',
                drawerIcon: ({ tintColor }) => (  
                    <Icon
                        name='gear'
                        type='font-awesome'
                        size={24}
                        color={tintColor}     
                    />                   
                )
            }
        },

        Contact: {
            screen: ContactNavigator,   
            navigationOptions: {  
                title: 'Contactenos',
                drawerLabel: 'Contactenos',
                drawerIcon: ({ tintColor }) => (  
                    <Icon
                        name='address-card'
                        type='font-awesome'
                        size={21}
                        color={tintColor}     
                    />                   
                )
            }
        },
    }, 

    {
        initialRouteName:'Home',  //So, that's why I will set up the initialRouteName here to point to the home component. So that when the app opens the home component is the first one that will be rendered
        drawerBackgroundColor: '#E0F2F1',        
        contentComponent: CustomDrawerContentComponent   
    } 
);

const MyApp = createAppContainer(MainNavigator); 



class Main extends Component {

    componentDidMount() {
        this.props.fetchProjects();   
        this.props.fetchProjectsarea();  
        this.props.fetchFounders();  
        this.props.fetchStudio();       
    }

    /*socialClick() {
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
    }*/

    render () {
        return(
            <View style={{flex:1, paddongTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight}}>    
                
                <MyApp />

            </View>
        );
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Main);



const styles = StyleSheet.create ({
    container: {
        flex: 1
    },

    drawerHeader: {
        backgroundColor: '#00897B',
        height: 120,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row'
    },

    drawerHeaderText: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold'
    },

    drawerImage: {
        marginLeft: 5,
        width: 160,
        height: 60
    },
    drawerFooter: {
    
        marginTop: 140,
        justifyContent: 'center',
        
        flex: 1,
        flexDirection: 'row'
    },
    
})