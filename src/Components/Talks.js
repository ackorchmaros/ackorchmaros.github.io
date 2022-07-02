import React, { Component } from 'react';

class Talks extends Component {
  render() {

    let description3 = (data, link) => {
        if (link) {
            return <p><a href={link}>{data}</a></p>;
        } else {
            return <p>{data}</p>
        }
    }
    if(this.props.data){
      var talks = this.props.data.talks.map(function(talk){
        return <div key={talk.title}><a href={talk.title_link}><h3>{talk.title}</h3></a>
            <p class="description1">{talk.description1}</p>
            <p class="description1">{talk.description2}</p>
            {description3(talk.description3,talk.description_3_link)}
        </div>
      });
    }

    return (
      <section id="talks">

      <div className="row work">
  
         <div className="three columns header-col">
            <h1><span>Recent and upcoming activities</span></h1>
         </div>
  
         <div className="nine columns main-col">
          {talks}
        </div>
    </div>
    </section>
    );
  }
}

export default Talks;
