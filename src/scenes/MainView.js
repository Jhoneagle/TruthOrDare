import React, { Component } from 'react';
import { Container, Content, Text, Left, Header, Body, Button, Title, Right, Card, CardItem } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { deleteQuestion, initializeQuestions } from '../reducers/QuestionsReducer';
import { StyleSheet, View } from 'react-native';

class MainView extends Component {
  constructor (props) {
    super(props);
    this.state = {
      text: 'Press either truth or dare to begin...'
    };
  }
  
  componentDidMount() {
    this.props.initializeQuestions()
  }
  
  nextOne = (type) => {
    return () => {
      const array = this.props.questions.filter(b => b.type === type);
      
      if (array.length > 1) {
        const random = Math.floor(Math.random() * (array.length - 1));
        const reult = array[random];
        
        this.setState({
          text: reult.content
        })
      }
    }
  };
  
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
          <Card style={ styles.data }>
            <CardItem>
              <Body>
                <Text style={ styles.content }>
                  { this.state.text }
                </Text>
              </Body>
            </CardItem>
          </Card>
          <Button style={ styles.select_buttons } onPress={this.nextOne('truth')}>
            <Body>
              <Text style={ styles.selectButton_text }>
                TRUTH!
              </Text>
            </Body>
          </Button>
          <Button style={ styles.select_buttons } onPress={this.nextOne('dare')}>
            <Body>
              <Text style={ styles.selectButton_text }>
                DARE!
              </Text>
            </Body>
          </Button>
        </Content>
      </Container>
  );
  }
}

const styles = StyleSheet.create({
  navigationButton: {
    alignSelf: 'center',
    margin: 30,
  },
  select_buttons: {
    margin: 1,
    backgroundColor: 'black',
  },
  selectButton_text: {
    color: 'white',
  },
  data: {
    height: 150,
    margin: 1,
  },
  content: {
    alignSelf: 'center',
  },
});

const mapStateToProps = (state) => {
  return {
    questions: state.questions
  }
};

export default connect(mapStateToProps, { deleteQuestion, initializeQuestions })(MainView);