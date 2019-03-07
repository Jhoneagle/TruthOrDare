import React, { Component } from 'react';
import { Container, Content, Text, Card, Header, Body, Button, Title, CardItem } from 'native-base';
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
          <Body>
            <Title>Truth or Dare</Title>
          </Body>
        </Header>
        <Content padder>
          <Card>
            <CardItem>
              <Body>
                <Text>
                  This is Page One, Press button to go to page two.
                  
                  There is only {this.props.questions.length} questions.
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

const mapStateToProps = (state) => {
  return {
    questions: state.questions
  }
};

export default connect(mapStateToProps, { deleteQuestion, initializeQuestions })(MainView);