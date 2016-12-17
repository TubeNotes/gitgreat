import React from 'react';

class DateListEntry extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      votes: 1,
      hasVoted: false
    } 
  }
  // Allows users to vote for a time 
  increaseVote () {

    if(!this.state.hasVoted){
      this.setState((prevVotes)=> {
        return {
          votes: prevVotes.votes + 1,
          hasVoted: !this.state.hasVoted
        };
      })
    }

  }

  render () {
    const dateStyle = {
      'color': '#fff',
      'padding': '1vh',
      'margin': '5px',
      'backgroundColor': '#5A83D3'
    }
    return (
    <div className="date-wrapper" onClick={ () => this.increaseVote() }>
      <div style={ dateStyle } className='date-list-entry'>
        {this.props.date}
      </div>
      <div className="votes">
        Number of UpVotes for this Time {this.state.votes}
      </div>
    </div>

    ) 
  }

}



export default DateListEntry;