import { Component } from "react";

export default class Article extends Component{

    '/items/${article.objectID}'

    render(){
        const { article } = this.props;
        return (
            <li>
                {article.title}
            </li>
        )
    }
}