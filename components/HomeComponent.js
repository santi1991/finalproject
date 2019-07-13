import React, { Component } from 'react';
import TouchableScale from 'react-native-touchable-scale';
import { FlatList, ScrollView, View } from 'react-native';
import { Card, ListItem } from 'react-native-elements';
import { baseUrl } from '../shared/baseUrl';
import { connect } from 'react-redux';

const mapStateToProps = state =>  {
    return {
        projects: state.projects
    }
}


class Home extends Component { 

    static navigationOptions = {
        title: 'UNO en 25 - Estudio'
    }

    render() {
        const { navigate } = this.props.navigation; 
        const renderProjectsItem = ({item, index} ) => {
            return(       
                <Card>         
                <ListItem
                    key={index}
                    Component={TouchableScale}
                    friction={90} //
                    tension={100} // These props are passed to the parent component (here TouchableScale)
                    activeScale={0.95} //
                    linearGradientProps={{
                        colors: ['#FF9800', '#26A69A'],
                        start: [1, 0],
                        end: [0.2, 0],
                    }}
                   
                    leftAvatar={{ rounded: false, source: { uri: baseUrl + item.image } }}
                    title={item.name}
                    titleStyle={{ color: 'white', fontWeight: 'bold' }}
                    subtitleStyle={{ color: 'white' }}
                    subtitle={item.category}
                    chevronColor="white"
                    chevron
                    
                    onPress={() => this.props.navigation.navigate('Projectsarea', { projId: item.id })}   //it refers to the name of the navigator that is set in the stackNavigator
                />        
                </Card>
            );
        }   

         

        return(
            <ScrollView>
                
                <View>
                    
                  
                
                    <FlatList 
                        data={this.props.projects.projects}
                        renderItem={renderProjectsItem}
                        keyExtractor={item => item.id.toString()}
                    />
                </View>        
            </ScrollView>
        ); 
        
    }
}

export default connect(mapStateToProps)(Home);