import React from 'react'
import { FlatList, Text, View } from 'react-native'
import messageData from '../../../assets/messages'
import MessageItem from '../../components/MessageItem'

function index() {
  return (
    <View>
        <FlatList
        data={messageData}
        renderItem={({item})=> <MessageItem item={item}/> }
        
        
        />
    </View>
  )
}

export default index