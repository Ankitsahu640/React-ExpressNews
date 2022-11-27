import React, { Component} from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import { Outlet } from 'react-router-dom';

export default class News extends Component {
     articles = []

    static defaultProps = {
        country : "in",
        pageSize : 10,
        category : "breaking-news",
        categoryName : "General",
        mode : "danger",
        search:""
    }            


    constructor(){
        super();
        this.state = {
            articles : this.articles,
            loading : false,
        }
    }      
    
    async componentWillReceiveProps(nextProps){
        if(nextProps.search!==""){
            let url=`https://gnews.io/api/v4/search?q="${nextProps.search}"&token=493c64a1276b6cf50012f9756cdd10a8&lang=en&country=${this.props.country}&max=${this.props.pageSize}`;
            this.setState({loading:true});
            try{
                let data = await fetch(url);
                let parsedData = await data.json();
                this.setState({
                    articles : parsedData.articles,
                    loading:false
                })
            }
            catch{
                console.log("Result not found");
            }
        }
        else{
            this.componentDidMount();
        }
    }

    async componentDidMount(){
        let url=`https://gnews.io/api/v4/top-headlines?token=493c64a1276b6cf50012f9756cdd10a8&topic=${this.props.category}&lang=en&country=${this.props.country}&max=${this.props.pageSize}`;
        this.setState({loading:true});
        try{
            let data = await fetch(url);
            let parsedData = await data.json();
            this.setState({
                articles : parsedData.articles,
                loading:false
            })
        }
        catch{
            console.log("api expire");
        } 
    }

    render() {
        return (
            <div className="container my-3" id="newsdiv" style={{maxWidth: "1150px"}}>
                <h1 style={{color:`${this.props.mode==="danger"?"black":"white"}`}}>{this.props.search==="" ? `ExpressNews - Top ${this.props.categoryName} Headline` : `Showing Result for Search`}</h1>
                <hr style={{color:`${this.props.mode==="danger"?"black":"white"}`}}></hr>
                {this.state.loading&&<Spinner/>}
                {(function(){
                    if (this.state.articles) {
                        return <div className="row my-3">
                                    {!this.state.loading&&this.state.articles.map((ele)=>{
                                        // if(ele.title.toLowerCase().includes(this.props.search)){
                                        return(
                                            <div className="col-md-4 my-3" key={ele.link}>
                                                <NewsItem title = {ele.title} discription={ele.description} imgUrl={ele.image} newsUrl={ele.url}  date={ele.publishedAt} source={ele.source.name} mode={this.props.mode}/>
                                            </div>
                                        )
                                    })}
                                </div>
                    } else {
                        return <div className='my-3'>
                                    <h3>NO Result Found</h3>
                                </div>
                    }
                }).call(this)}
                <Outlet/>
            </div>
        )
    }
}