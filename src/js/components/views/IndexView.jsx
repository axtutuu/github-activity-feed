import $ from 'jquery';
import React from "react";

export default class IndexView extends React.Component {
  constructor() {
    super();
    this.url = 'https://api.github.com/users/pocke777/events';
    this.state = ({
      values: []
    });
  }

  componentDidMount() {
    $.ajax({
      url: this.url,
      type: 'GET',
      dataType: 'JSON',
      success: (res) => {
        res.forEach((v,i)=> {
          console.log(v);
        });
        this.setState({values: res});
      }
    });
  }

  render() {
    return(
      <ol>
        {this.state.values.map((v, i)=>{
           let commit = v.payload.commits[0]
           return(
             <li key={v.id}>
               {commit.message}
               <a href={commit.url}>detail</a>
             </li>
           );
         })}
      </ol>
    );
  }
}
