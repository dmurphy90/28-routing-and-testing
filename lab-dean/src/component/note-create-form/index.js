
import React from 'react';

class NoteCreateFrom extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      title: '',
      content: '',
      completed: false,
      editing: false,
    };

    let memberFunctions = Object.getOwnPropertyNames(NoteCreateFrom.prototype);
    for(let functionName of memberFunctions){
      if(functionName.startsWith('handle')){
        this[functionName] = this[functionName].bind(this);
      }
    }
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.handleAddNotes(this.state);
    this.setState({
      title: '',
      content: '',
      completed: false,
      editing: false,
    });
  }

  handleChange(event){
    let {name,value} = event.target;
    this.setState({
      [name]: value,
    });
  }

  render(){
    return(
      <form className='note_input_form' onSubmit={this.handleSubmit}>
        <div className='input_area'>
          <input
            type='text'
            name='title'
            placeholder='Note Title'
            value={this.state.title}
            onChange={this.handleChange}  
          />
          <input
            type='text'
            name='content'
            placeholder='Note Content'
            value={this.state.content}
            onChange={this.handleChange}  
          />
        </div>
        <button className='submit_btn' type='submit'> make that note! </button>
      </form>
    );
  }
}

export default NoteCreateFrom;