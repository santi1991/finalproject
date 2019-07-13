import React, { Component } from 'react'; 
import { View, FlatList, ScrollView } from 'react-native'; 
import { Tile, Image, Card } from 'react-native-elements'; 
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import { Loading }from './LoadingComponent';

const mapStateToProps = state =>  {
    return {
        projects: state.projects,
        projectsarea: state.projectsarea

    }
}


function RenderProject(props) {

    const project = props.project

    return(
        
        <Card
            featuredTitle={project.name}
            image= {{ uri: baseUrl + project.image }}            
            imageProps={{borderRadius: 10 }}                      
        >
        </Card>
        
    );
} 


class Projectsarea extends Component {
    constructor(props) {
        super(props); 
        
    }            


    static navigationOptions = {
        title: 'Espacios a tu Medida' 
    };


    render() {

        const projId = this.props.navigation.getParam('projId', '');

        const renderProjectsItem = ({item, index} ) => {            
            return(                
                    <Tile 
                        key={index}
                        title={item.name}
                        caption={item.description}
                        featured                          
                        imageSrc={{ uri: baseUrl + item.image}}
                        
                    />                               
            );
        }
        

        return(
            <ScrollView > 

                <RenderProject project={this.props.projects.projects[+projId]} />

                <FlatList 
                        data={this.props.projectsarea.projectsarea.filter((proj) => proj.projId === projId)}
                        renderItem={renderProjectsItem}
                        keyExtractor={item => item.id.toString()}                    
                />

            </ScrollView>
                
        );
    }


}

export default connect(mapStateToProps)(Projectsarea);