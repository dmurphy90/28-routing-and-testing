import React from 'react';

class NoteCreateForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      title: '',
      content: '',
      completed: false,
      editing: false,
    };

    let memberFunctions = Object.getOwnPropertyNames(NoteCreateForm.prototype);
    for(let functionName of memberFunctions) {
      if(functionName.startsWith('handle')) {
        this[functionName] = this[functionName].bind(this);
      }
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleAddNotes(this.state);
    this.setState({
      title: '',
      content: '',
      completed: false,
      editing: false,
    });
  }

  handleChange(e) {
    let {name, value} = e.target;
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
            placeholder='Title'
            value={this.state.title}
            onChange={this.handleChange}
          />

          <input
            type='text'
            name='content'
            placeholder='Enter Note Contents'
            value={this.state.content}
            onChange={this.handleChange}
          />
        </div>
        <button className='submit_button' type='submit'>Save Note</button>
      </form>
    );
  }
}