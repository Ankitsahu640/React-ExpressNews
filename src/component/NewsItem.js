import React, { Component } from 'react'

export default class App extends Component {
  render() {
    let {title, discription,imgUrl,newsUrl,author,date,source,mode} = this.props;
    let d= new Date(date);
    let time = d.toGMTString();
    return (
      <div>
        <div className={`card bg-${mode==="danger"?"light":"dark"}`}>
        <span class={`position-absolute translate-middle badge rounded-pill bg-${mode}`} style={{top:"5px",right:"-10%",zIndex:"1"}}>{source}</span>
          <img src={imgUrl} className="card-img-top" alt="..."/>
            <div className={`card-body text-${mode==="danger"?"dark":"light"}`}>
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{discription}</p>
              <p class="card-text"><small class="text-muted">By {author?author:"unknown"} on {time}</small></p>
              <a href={newsUrl} target="-blank" className={`btn sm btn-${mode==="danger"?"danger":"light"}`}>Read more</a>
            </div>
        </div>
      </div> 
    )
  }
}
