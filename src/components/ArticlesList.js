import { Component } from "react";

import { getArticlesById } from '../services/api'
import Article from "./Article";

export default class ArticleList extends Component{
    state = {
        article: false
    }

    componentDidMount(){
        setTimeout(() => {
            alert(`Доброго ранку, сьогодні ${new Date()}`)
        }, 1000)
    }
    componentDidUpdate(){
        console.log('Дякуємо, що лишаєтесь з нами')
    }
    componentWillUnmount(){
        localStorage.setItem('random', Math.floor(Math.random() * 11))
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