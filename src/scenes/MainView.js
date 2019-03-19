import React, { Component } from 'react';
import { Container, Content, Text, Left, Header, Body, Button, Title, Right } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { deleteQuestion, initializeQuestions } from '../reducers/QuestionsReducer';
import { StyleSheet } from 'react-native';

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
            <Button transparent style={ styles.navigationButton } onPress= {() => {Actions.addFormPage(); }}>
              <Text>+</Text>
            </Button>
          </Right>
        </Header>
        <Content padder>
          <Card>
            <CardItem>
              <Body>
              <Text>
                //Your text here
              </Text>
              </Body>
            </CardItem>
            <View style={ styles.select_buttons }>
              <CardItem button onPress={() => alert("This is Card Body one")}>
                <Body>
                <Text>
                  Click on any carditem one
                </Text>
                </Body>
              </CardItem>
              <CardItem button onPress={() => alert("This is Card Body two")}>
                <Body>
                <Text>
                  Click on any carditem two
                </Text>
                </Body>
              </CardItem>
            </View>
          </Card>
        </Content>
      </Container>
  );
  }
}

const styles = StyleSheet.create({
  navigationButton: {
    alignSelf: 'center',
    margin: 30
  },
  select_buttons: {
    flexDirection: "row",
  },
});

const mapStateToProps = (state) => {
  return {
    questions: state.questions
  }
};

export default connect(mapStateToProps, { deleteQuestion, initializeQuestions })(MainView);