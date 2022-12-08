import { Component } from "react";

import { getArticlesById } from '../services/api'
import Article from "./Article";

export default class ArticleList extends Component{
    state = {
        article: false
    }

    async componentDidMount(){
        const article = await getArticlesById('1')
        this.setState({article})
    }

    render(){
        const { article } = this.state;
        if(!article){
            return <div>Loading...</div>
        }
        return (
            <ul>
                <Article article={article} key={article.objectID}/>
            </ul>
        )
    }
}