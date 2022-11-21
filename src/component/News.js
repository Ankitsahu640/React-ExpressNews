import React, { Component} from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import { Outlet } from 'react-router-dom';

export default class News extends Component {
    articles = [
                    {
                        "source": {
                            "id": "bbc-sport",
                            "name": "BBC Sport"
                        },
                        "author": null,
                        "title": "England beat Pakistan to win T20 World Cup",
                        "description": "Watch highlights as Ben Stokes, Sam Curran and Adil Rashid star in helping England claim their second T20 World Cup title with a five-wicket victory over Pakistan in the final.",
                        "url": "http://www.bbc.co.uk/sport/av/cricket/63616028",
                        "urlToImage": "https://ichef.bbci.co.uk/news/1024/cpsprodpb/2FB4/production/_127621221_p0dfxhbg.jpg",
                        "publishedAt": "2022-11-13T15:07:23.2811199Z",
                        "content": "Watch highlights as Ben Stokes, Sam Curran and Adil Rashid star in helping England claim their second T20 World Cup title with a five-wicket victory over Pakistan in the final.\r\nMATCH REPORT: England… [+78 chars]"
                    },
                    {
                        "source": {
                            "id": "talksport",
                            "name": "TalkSport"
                        },
                        "author": "Phil Spencer",
                        "title": "England win T20 World Cup as they beat Pakistan by five wickets in final thanks to heroics from...",
                        "description": "",
                        "url": "https://talksport.com/sport/cricket/1244844/ben-stokes-england-t20-world-cup-pakistan/",
                        "urlToImage": "https://talksport.com/wp-content/uploads/sites/5/2022/11/ben-stokes-liam-livingstone-england-775095869.jpg?strip=all&quality=100&w=1920&h=1080&crop=1",
                        "publishedAt": "2022-11-13T12:09:07Z",
                        "content": "England have won the T20 World Cup for the second time after beating Pakistan by five wickets in the final in Melbourne.\r\nBen Stokes was the star of the show at the Melbourne Cricket Ground after hit… [+3003 chars]"
                    },
                    {
                        "source": {
                            "id": "bbc-sport",
                            "name": "BBC Sport"
                        },
                        "author": null,
                        "title": "England beat Pakistan to win T20 World Cup",
                        "description": "England beat Pakistan in a pulsating final in Melbourne to win the Men's T20 World Cup for a second time.",
                        "url": "http://www.bbc.co.uk/sport/cricket/63613694",
                        "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/16762/production/_127620029_gettyimages-1441111025.jpg",
                        "publishedAt": "2022-11-13T11:52:24.9221302Z",
                        "content": "<table>\r\n<tr><td>Men's T20 World Cup final, Melbourne</td></tr><tr><td>Pakistan 137-8 (20 overs): Masood 38 (28); Curran 3-12, Rashid 2-22</td></tr><tr><td>England 138-5 (19 overs): Stokes 52* (49); … [+1027 chars]"
                    },
                    {
                        "source": {
                            "id": "news-com-au",
                            "name": "News.com.au"
                        },
                        "author": "Nic Savage",
                        "title": "&#8216;Start the game&#8217;: World Cup final in trouble",
                        "description": "Welcome to news.com.au's live blog of the 2022 Men's T20 World Cup final between England and Pakistan at the MCG.",
                        "url": "https://www.news.com.au/sport/cricket/t20-world-cup-final-england-vs-pakistan-live-coverage/live-coverage/0205c6ca9783c7414b0945b2d2ea3ee6",
                        "urlToImage": "https://content.api.news/v3/images/bin/dc37af8a108961b359f866a08784c8d9",
                        "publishedAt": "2022-11-13T01:12:50Z",
                        "content": "Melbourne woke up to blue skies on Sunday morning, but the gorgeous weather isn't expected to hang around for long.\r\nThe Bureau of Meteorology is currently predicting a very high (near 100 per cent) … [+1170 chars]"
                    }
                ]

    static defaultProps = {
        country : "in",
        pageSize : 12,
        category : "general",
        categoryName : "General",
        mode : "danger",
        search:""
    }            


    constructor(){
        super();
        this.state = {
            // url : this.url,
            articles : this.articles,
            loading : false,
            page:1,
            totalResults:0
        }
    }      
    
//     async componentWillReceiveProps(nextProps){
//         let url="";
//         if(nextProps.search!==""){
//             url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=dbddeef57b58421aafd6a26534fd9d8d&page=${this.state.page}&pageSize=100`
//             console.log("search happen")
//         }
//         else{
//             url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=dbddeef57b58421aafd6a26534fd9d8d&page=${this.state.page}&pageSize=${this.props.pageSize}`
//             console.log("search not")
//         }
//         this.setState({loading:true});
//         let data = await fetch(url);
//         let parsedData = await data.json();
//         this.setState({
//             articles : parsedData.articles,
//             totalResults : parsedData.totalResults,
//             loading:false
//         })
//     }

//     async componentDidMount(){
//         let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=dbddeef57b58421aafd6a26534fd9d8d&page=${this.state.page}&pageSize=${this.props.pageSize}`;
//         this.setState({loading:true});
//         let data = await fetch(url);
//         let parsedData = await data.json();
//         this.setState({
//             articles : parsedData.articles,
//             totalResults : parsedData.totalResults,
//             loading:false
//         })
//     }

//     nextPage = async()=>{
//         let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=dbddeef57b58421aafd6a26534fd9d8d&page=${this.state.page+1}&pageSize=${this.props.pageSize}`
//         window.scrollTo({
//             top: 0, 
//             behavior: 'auto'
//         });
//         this.setState({loading:true});
//         let data = await fetch(url);
//         let parsedData = await data.json();
//         this.setState({
//             articles : parsedData.articles,
//             page : this.state.page + 1,
//             loading:false
//         })
//     }

//     previousPage = async()=>{
//         let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=dbddeef57b58421aafd6a26534fd9d8d&page=${this.state.page-1}&pageSize=${this.props.pageSize}`
//         window.scrollTo({
//             top: 0, 
//             behavior: 'auto'
//         });
//         this.setState({loading:true});
//         let data = await fetch(url);
//         let parsedData = await data.json();
//         this.setState({
//             articles : parsedData.articles,
//             page : this.state.page - 1,
//             loading:false
//         })
//     }

    render() {
        return (
            <div className="container my-3" id="newsdiv" style={{maxWidth: "1150px"}}>
                <h1 style={{color:`${this.props.mode==="danger"?"black":"white"}`}}>{this.props.search==="" ? `ExpressNews - Top ${this.props.categoryName} Headline` : `Showing Result for Search`}</h1>
                <hr style={{color:`${this.props.mode==="danger"?"black":"white"}`}}></hr>
                {this.state.loading&&<Spinner/>}
                <div className="row my-3">
                    {!this.state.loading&&this.state.articles.map((ele)=>{
                        if(ele.title.toLowerCase().includes(this.props.search)){
                        return(
                            <div className="col-md-4 my-3" key={ele.url}>
                                <NewsItem title = {ele.title} discription={ele.description} imgUrl={ele.urlToImage?ele.urlToImage:require(".//img/image-not-found-300x169.jpg")} newsUrl={ele.url} author={ele.author} date={ele.publishedAt} source={ele.source.name} mode={this.props.mode}/>
                            </div>
                        )
                        }
                        else{
                            return("")
                        }
                    })}
                </div>
                {!this.state.loading&&this.props.search===""&&<div className="container d-flex justify-content-between">
                    <button type="button" disabled={this.state.page===1} onClick={this.previousPage} class="btn btn-dark">&larr; Previous</button>
                    <button type="button" disabled={this.state.page === Math.ceil(this.state.totalResults/this.props.pageSize)} onClick={this.nextPage} class="btn btn-dark">Next &rarr;</button>
                </div>}
                <Outlet/>
            </div>
        )
    }
}

