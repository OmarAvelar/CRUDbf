import React, {Component} from 'react';
import axios from 'axios';

class AddAuthor extends Component{
state={
  name: "",
  nationallity: '',
  books: []
}

handleFormSubmit= (event) => {
    event.preventDefault();
    const name = this.state.name;
    const nationallity = this.state.nationallity;

    axios.post('http://localhost:3000/api/authors', {name, nationallity})
      .then( 
        this.setState({
          name: '',
          nationallity: ''
        })
      )
      .catch(e=> console.log(e))
}

handleChange = (event) => {
  const {name, value } = event.target;
  this.setState({[name]: value});

}


render(){
  return(
    // <div>Ya calmate Mike</div>
    <div>
    <form onSubmit={this.handleFormSubmit}>
    <input name="name" value={this.state.name} type="text" placeholder="Nombre" onChange={this.handleChange} />
    <input name="nationallity" value={this.state.nationallity} type="text" placeholder="Nacionalidad" onChange={this.handleChange} />
    <input value="Submit" type="submit" />
    </form>
    </div>
  )
}

};


export default AddAuthor;