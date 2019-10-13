import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { View, Text, TouchableOpacity } from 'react-native';
import { container, text, colors } from '../styles/index';
import { Header } from '../components/index';

class FourthScreen extends Component {
  renderHeaderLeft() {
    return (
      <TouchableOpacity
        onPress={() => this.props.navigation.pop()}
      >
        <Icon
          size={23}
          name='ios-arrow-back'
          type='ionicon'
          color={colors.black}
        />
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header
          headerLeft={this.renderHeaderLeft()}
        />
        <View style={container.center}>
          <Text style={{ fontSize: text.titleText, padding: 5, color: colors.black }}> FourthScreen </Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Fifth')}>
            <Text>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default FourthScreen;
