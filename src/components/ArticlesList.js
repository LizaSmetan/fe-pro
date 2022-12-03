import { Component } from "react";

import { getArticlesByQuery } from '../services/api'
import Article from "./Article";

export default class ArticleList extends Component{
    state = {
        articles: []
    }

    async componentDidMount(){
        const articles = await getArticlesByQuery('react')
        this.setState({articles})
    }

    render(){
        const { articles } = this.state;
        if(!articles.length){
            return <div>Loading...</div>
        }
        return (
            <ul>
                {
                    articles.map((article) => {
                        return (
                            <Article article={article} key={article.objectID}/>
                        )
                    })
                }
            </ul>
        )
    }
}