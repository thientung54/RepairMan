/* eslint-disable prettier/prettier */
import React from 'react';
import { translate } from '../../../../locale/index';
import { ScrollView, Text } from 'react-native';
import { styles } from '../style';

class TechnicianPolicy extends React.Component {
    constructor(props) {
        super(props);
    }
    static navigationOptions = () => ({
        title: translate('signUp.titlePolicy'),
        headerTitleStyle: {
            fontWeight: 'bold',
        },
        headerStyle: {
            borderBottomColor: 'transparent',
            borderBottomWidth: 0,
            shadowColor: 'transparent',
            elevation: 0,
        },
    });
    render() {
        return (
            <ScrollView scrollEnabled={false} keyboardShouldPersistTaps={'handled'}>
                <Text style={styles.policyContent}>
                    {translate('signUp.technicianPolicy')}
                </Text>
            </ScrollView>
        );
    }
}
export default TechnicianPolicy;
