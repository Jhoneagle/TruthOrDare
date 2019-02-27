import React, { Component } from 'react';
import { Container, Content, Text, Card, Header, Body, Button, Title, CardItem } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class MainView extends Component {
  render(){
    return(
      <Container>
        <Header>
          <Body>
            <Title>Truth or Dare</Title>
          </Body>
        </Header>
        <Content padder>
          <Card>
            <CardItem>
              <Body>
                <Text>
                  This is Page One, Press button to go to page two
                </Text>
              </Body>
            </CardItem>
          </Card>
          <Button dark bordered style={{ alignSelf: 'center', margin: 30}} onPress= {() => {Actions.addFormPage(); }}>
            <Text>Go to Page 2</Text>
          </Button>
        </Content>
      </Container>
  );
  }
}