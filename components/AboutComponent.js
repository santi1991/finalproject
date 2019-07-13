import React, { Component } from 'react'; 
import { View, ScrollView, StyleSheet } from 'react-native';
import { Card, Text, Avatar, Divider } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import * as Animatable from 'react-native-animatable';  


const mapStateToProps = state =>  {
    return {
        founders: state.founders,
        studio: state.studio,        
    }
}


function RenderFounders(props) {

    const data = props.data;

    return(            
            <View style={styles.container}>
                <View style={styles.avatarContainer} >
                    <Avatar
                            size="xlarge"
                            rounded
                            source= { {uri: baseUrl + data.image} } 
                            containerStyle={{ marginTop: 20}}                                                                                               
                    />
                </View>

                <View  style={{flex: 2}}>
                    <Card
                        title={data.name}
                        containerStyle={{marginBottom: 20}  }
                    >
                        
                        <Text style={styles.textSubtitle} >{data.designation} </Text>
                        <Text style={styles.textDescription}>{data.description} </Text>
                    </Card>
                    
                </View>
            </View>                            
    );
}

function RenderStudio(props) {

    const data = props.data;

    return(            
            <View style={styles.container}>
                <View style={styles.avatarContainer} >
                    <Avatar
                            size="xlarge"
                            rounded
                            source= { {uri: baseUrl + data.image} } 
                            containerStyle={{ marginTop: 20}}                                                                                               
                    />
                </View>

                <View  style={{flex: 2}}>
                    <Card
                        title={data.name}
                        containerStyle={{marginBottom: 20}  }
                    >
                        
                        <Text style={styles.textSubtitle} >{data.designation} </Text>
                        <Text style={styles.textDescription}>{data.description} </Text>
                    </Card>
                    
                </View>
            </View>                            
    );
}


class Aboutus extends Component {
    constructor(props) {
        super(props); 
        
    }            

    
    static navigationOptions = {
        title: 'About Us'
    }

    

    render() {

            return(
                <ScrollView>
                    
                    <Animatable.View animation='fadeInDown' duration={800} delay={800}>
                        
                        <RenderFounders data={this.props.founders.founders.filter((found) => found.score)[0]} />
                        <Divider style={{ height: 1, backgroundColor: 'green' }} />
                        <RenderStudio data={this.props.studio.studio.filter((stud) => stud.score)[0]} />
                    </Animatable.View>
                </ScrollView>
            );                
    }
    
};


export default connect(mapStateToProps)(Aboutus);



const styles = StyleSheet.create ({
    container: {
        flex: 1,
                                  
    },

    avatarContainer:{
        alignItems:'center'
    },

    textSubtitle: {
        fontSize: 14,
        fontWeight: 'bold',        
        textAlign: 'center'        
      },

    textDescription: {
       textAlign: 'justify'
    }
    

})


//delay={1000}
//So one second delay after the component is mounted, one second delay before you begin the animation.

//<RenderFounders project={this.props.projects.projects.filter((proj) => proj.score > 0)} />

//<RenderFounders data={this.props.founders.founders.filter((found) => found.score === 1)} />


//render() {

    /*const renderFounderItem = ({item, index} ) => {
        return(                
                <ListItem 
                    key={index}
                    title={item.name}
                    subtitle={item.designation}
                    hideChevron={true}                                                                                                          
                    
                    />        
        );
    } 

        return(
            <ScrollView>
                <Avatar
                    size="xlarge"
                    rounded
                    source= {require('./images/ana.jpg') }                         
                    
                />
                <Animatable.View animation='fadeInDown' duration={800} delay={800}>
                    
                    <Card
                            title='Fundadora'
                            titleStyle={{ fontWeight: "bold", fontSize: 20 }}
                    >
                        <FlatList 
                            data={this.props.founders.founders}
                            renderItem={renderFounderItem}
                            keyExtractor={item => item.id.toString()}
                        />
                    </Card>  
                </Animatable.View>

            </ScrollView>
        );                
}*/