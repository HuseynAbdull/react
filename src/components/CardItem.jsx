import React, { Component } from 'react'


class CardItem extends Component {
  render(props) {
    const{name,surname,img} =this.props;
    return (
      
        <div className="col-lg-4">
        <div class="card usercard">
        <img src={img} class="card-img-top" alt="..."/>
        <div class="card-body">
        <h5 class="card-title">{name} {surname}</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        
        </div>
        </div>
        </div>
      
    )
  }
}

export default CardItem