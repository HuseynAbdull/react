import React, { Component } from 'react'
import users from '../userall.json'
import CardItem from './CardItem'

class CardList extends Component {

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
          {
            users.results.map(user => {
                return(
                    <CardItem 
                    key={user.id}
                    name={user.name.first}
                    surname={user.name.last}
                    img={user.picture.medium}
                    />
                )
            })
        }
          </div>
        </div>
        
      </div>
    )
  }
}

export default CardList
