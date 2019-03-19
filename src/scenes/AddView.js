import React, { Component } from 'react';
import { Container, Content, Text, Left, Header, Body, Button, Title, Right, Form, Item, Label, Input, Picker, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { createQuestion } from '../reducers/QuestionsReducer';
import { StyleSheet } from 'react-native';

class AddView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: undefined
    };
  }
  
  onValueChange(value: string) {
    this.setState({
      selected: value
    });
  }
  
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
              <Input />
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
            <item last>
              <CheckBox checked={true} />
            </item>
          </Form>
          <Button full success>
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
  },
});

export default connect( null, { createQuestion })(AddView);