/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import {initialize, joinMeeting, startMeeting} from 'react-native-zoom-us';

const zoomUserType = 2; // 2 - pro user
const config = {
  zoom: {
    appKey: '', // TODO: appKey
    appSecret: '', // TODO appSecret
  },
};

export default class App extends Component {
  async componentDidMount() {
    try {
      const initializeResult = await initialize(
        config.zoom.appKey,
        config.zoom.appSecret,
      );
      console.warn({initializeResult});
    } catch (e) {
      console.error(e);
    }
  }

  async start() {
    const zakToken = decodeURIComponent();
    const displayName = 'Test mentor';

    // TODO recieve user's details from zoom API? WOUT: webinar user is different
    const userId = 'null'; // NOTE: no need for userId when using zakToken
    const userType = zoomUserType;
    const zoomToken = 'null'; // NOTE: no need for userId when using zakToken

    const zoomAccessToken = zakToken;

    try {
      const startMeetingResult = await startMeeting(
        displayName,
        this.meetingNo,
        userId,
        userType,
        zoomAccessToken,
        zoomToken,
      );
      console.warn({startMeetingResult});
    } catch (e) {
      console.warn({e});
    }
  }

  async join() {
    const displayName = 'Test student';

    const joinMeetingParams = {
      displayName,
      meetingNo: '',
      password: '',
    };

    try {
      const joinMeetingResult = await joinMeeting(joinMeetingParams);
      console.warn({joinMeetingResult});
    } catch (e) {
      console.error(e);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Button onPress={() => this.start()} title="Start example meeting" />
        <Text>-------</Text>
        <Button onPress={() => this.join()} title="Join example meeting" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
