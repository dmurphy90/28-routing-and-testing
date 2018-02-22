import React from 'react';

class NoteItem extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <h2>{this.props.note.title}</h2>
        <h3>{this.props.note.publishedOn.toString()}</h3>
        <p>{this.props.note.content}</p>
        <button 
          className='delete_button'
          type='button'
          value={this.props.note.id}
          onClick={this.props.handleRemoveNotes}
        >Delete Note</button>
      </div>
    );
  }
}

export default NoteItem;