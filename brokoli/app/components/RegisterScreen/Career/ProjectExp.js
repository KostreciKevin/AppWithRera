import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';


import ViewContainer from '../ViewContainer'

export default class ProjectExp extends React.Component {

    
    render(){
        const { navigate } = this.props.navigation;
        return(

            <ViewContainer>

              <Text> Hello, Project Experience. </Text>

                </ViewContainer>

        )
    }
}

