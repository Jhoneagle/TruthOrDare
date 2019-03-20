import React, { Component } from 'react';
import { Container, Content, Text, Left, Header, Body, Button, Title,
  Right, Form, Item, Label, Input, Picker, Icon, CheckBox } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { createQuestion } from '../reducers/QuestionsReducer';
import { StyleSheet } from 'react-native';

class AddView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'truth',
      check: true,
      content: '',
    };
  }
  
  onValueChange(value: string) {
    this.setState({
      selected: value
    });
  }
  
  create = () => {
    return () => {
      const object = {
        content: this.state.content,
        type: this.state.selected
      };
  
      this.props.createQuestion(object, this.state.check);
      Actions.pop();
    }
  };
  
  render(){
    return(
      <Container>
        <Header noLeft>
          <Left>
            <Text> </Text>
          </Left>
          <Body>
          <Title>Add new question/task</Title>
          </Body>
          <Right>
            <Button transparent onPress= {() => {Actions.pop(); }}>
              <Text>cancel</Text>
            </Button>
          </Right>
        </Header>
        <Content padder>
          <Form>
            <Item floatingLabel>
              <Label>Question/task</Label>
              <Input onChangeText={(value) => {this.setState({ content: value}); }}
                     value={this.state.content} />
            </Item>
            <Item picker>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={ styles.picker }
                placeholder="Select type: "
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.selected}
                onValueChange={this.onValueChange.bind(this)}
              >
                <Picker.Item label="Truth" value="truth" />
                <Picker.Item label="Dare" value="dare" />
              </Picker>
            </Item>
            <Item last style={ styles.checker } onPress={() => {this.setState({check: !this.state.check }); }}>
              <Label> Save globally </Label>
              <CheckBox checked={ this.state.check } />
            </Item>
          </Form>
          <Button full success style={ styles.submit } onPress={this.create()}>
            <Text>Add</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  picker: {
    width: undefined,
    margin: 5,
  },
  checker: {
    alignSelf: 'center',
    margin: 7,
  },
  submit: {
    margin: 5,
  },
});

export default connect( null, { createQuestion })(AddView);