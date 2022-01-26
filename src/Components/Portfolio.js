import React, { Component } from 'react';

class Portfolio extends Component {
  render() {

    if(this.props.data){
      var publications = this.props.data.publication.map(function(publication){
        return <div key={publication.title}><a href={publication.link}><h3>{publication.title}</h3></a>
            <p class="description1">{publication.description1}</p>
            <p>{publication.description2}</p>
        </div>
      });

      const p = this.props.data.publication.map(function(publication){
        return <div key={publication.title}><h3>{publication.title}</h3>
            <p className="info">{publication.title}<span>&bull;</span> <em className="date">{publication.date}</em></p>
            <p>{publication.description}</p>
        </div>
      })
    }

    return (
      <section id="portfolio">

      <div className="row work">
  
         <div className="three columns header-col">
            <h1><span>Publications</span></h1>
         </div>
  
         <div className="nine columns main-col">
          {publications}
        </div>
    </div>
    </section>
    );
  }
}

export default Portfolio;
