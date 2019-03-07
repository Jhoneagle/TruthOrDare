import React, { Component } from 'react';
import { Container, Content, Text, Left, Header, Body, Button, Title, Right } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { deleteQuestion, initializeQuestions } from '../reducers/QuestionsReducer';

class MainView extends Component {
  componentDidMount() {
    this.props.initializeQuestions()
  }
  
  render(){
    return(
      <Container>
        <Header>
          <Left>
            <Text> </Text>
          </Left>
          <Body>
            <Title>Truth or Dare</Title>
          </Body>
          <Right>
            <Button transparent style={{ alignSelf: 'center', margin: 30}} onPress= {() => {Actions.addFormPage(); }}>
              <Text>+</Text>
            </Button>
          </Right>
        </Header>
        <Content padder>
          <Text>
            list
          </Text>
        </Content>
      </Container>
  );
  }
}

const mapStateToProps = (state) => {
  return {
    questions: state.questions
  }
};

export default connect(mapStateToProps, { deleteQuestion, initializeQuestions })(MainView);