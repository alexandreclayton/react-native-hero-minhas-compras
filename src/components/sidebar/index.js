import React from 'react'
import {
  Container,
  Content,
  Text,
  List,
  ListItem,
} from 'native-base'

const routes = ['Home', 'Chat', 'Profile']

const SideBar = () => (
  <Container>
    <Content>
      <List
        dataArray={routes}
        renderRow={data => (
          <ListItem
            button
            onPress={() => this.props.navigation.navigate(data)}
          >
            <Text>{data}</Text>
          </ListItem>
        )}
      />
    </Content>
  </Container>
)

export default SideBar
