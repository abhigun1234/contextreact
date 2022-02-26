import React, { Component } from 'react'
import { UserConsumer } from './UserContext'

export default class ProductDetails extends Component {
  render() {
    return (
      <div> <UserConsumer>

      {
              (username)=>{
                  return<div><h1>Component F</h1>Hello {username}</div>
              }
          }
      </UserConsumer></div>
    )
  }
}
