import React, { Component } from 'react';
import { Container, Content, Text, Card, Header, Body, Button, Title, CardItem } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { createQuestion } from '../reducers/questionsReducer';

class AddView extends Component {
  render(){
    return(
      <Container>
        <Header>
          <Body>
            <Title>Add new question/task</Title>
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
          <Button dark bordered onPress= {() => {Actions.pop(); }}>
            <Text>Go to Page 1</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default connect( null, { createObservation })(AddView);