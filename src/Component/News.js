import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
 import PropTypes from 'prop-types';


export class News extends Component {
  // articles = [
  // {
  //   "source": {
  //     "id": null,
  //     "name": "Biztoc.com"
  //   },
  //   "author": "aol.com",
  //   "title": "Prices for a set of Messi’s World Cup jerseys could exceed a record $10 million",
  //   "description": "Soccer superstar Lionel Messi is no stranger to breaking records, and he’s about to possibly add another to his list. A set of six jerseys that he wore during last year’s World Cup, which his home country of Argentina won, are being put up for auction by Soth…",
  //   "url": "https://biztoc.com/x/40872b7bdd09032d",
  //   "urlToImage": "https://c.biztoc.com/p/40872b7bdd09032d/s.webp",
  //   "publishedAt": "2023-11-20T18:50:09Z",
  //   "content": "Soccer superstar Lionel Messi is no stranger to breaking records, and hes about to possibly add another to his list.A set of six jerseys that he wore during last years World Cup, which his home count… [+282 chars]"
  // },
  // {
  //   "source": {
  //     "id": null,
  //     "name": "Biztoc.com"
  //   },
  //   "author": "reuters.com",
  //   "title": "Lukaku’s four-goal haul lifts Belgium to big win over Azerbaijan",
  //   "description": "Striker Romelo Lukaku scored four goals in 20 first-half minutes as brilliant Belgium cruised to an emphatic 5-0 victory over 10-man Azerbaijan in a Euro 2024 Group F qualifier in blustery Brussels on Sunday. Lukaku put on a magnificent display of clinical fi…",
  //   "url": "https://biztoc.com/x/84197c7567817fea",
  //   "urlToImage": "https://c.biztoc.com/p/84197c7567817fea/s.webp",
  //   "publishedAt": "2023-11-20T02:04:08Z",
  //   "content": "Striker Romelo Lukaku scored four goals in 20 first-half minutes as brilliant Belgium cruised to an emphatic 5-0 victory over 10-man Azerbaijan in a Euro 2024 Group F qualifier in blustery Brussels o… [+313 chars]"
  // }
  //  ]


  static defaultProps = {
    country: 'us',
    category: 'General',
  }

  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string, 
  }

 constructor(){
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
  }

   async componentDidMount() {
     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=368f76931381488c8309ba0904b97dbf&page=1&pagesize=12`;
    this.setState({loading: true}); 
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false });
  }

  
  handlepreviousclick = async ()=>{
    console.log("previous");

    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=368f76931381488c8309ba0904b97dbf&page=
             ${this.state.page - 1}&pagesize=12`;
             this.setState({loading: true});       
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({
        page: this.state.page - 1,
        articles: parsedData.articles,
        loading: false
      });
  };
  
  handlenextclick = async () => {
    console.log("next");
  
    if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / 20))){
  
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=368f76931381488c8309ba0904b97dbf&page=
      ${this.state.page + 1}&pagesize=12`;
      this.setState({loading: true});
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
        loading: false
      });
    }
  }
  
  

  
  
render() {
  const { mode } = this.props; // Destructure 'mode' from props

  const modeStyle = { color: mode === 'dark' ? 'white' : 'black' };

  return (
    <div className='container'>
      <h2 className='mt-3' style={modeStyle}>News - Top Headlines</h2>

      {this.state.loading && <Spinner/>}
      <div className='row'>

        {!this.state.loading && this.state.articles?.map((element) => (
         
         <div className='col-md-3 mt-3' key={element.url}>
            <NewsItem
              title={element.title?.slice(0, 45)||""}
              description={element.description?.slice(0, 45)||""}
              imgurl={element.urlToImage}
              newsurl={element.url}
            />
          </div>
        ))}


        
      <div className='col-md-12 d-flex mt-4 mb-3 justify-content-between'>
      <button disabled={this.state.page<=1} type="button" className="btn btn-danger" onClick={this.handlepreviousclick}>Previous</button>
      <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / 20)} type="button" className="btn btn-danger" onClick={this.handlenextclick}>Next</button>
      </div>
      </div>
    </div>
  );
}
}

export default News;
