import { useState } from "react";
const parse = require('html-react-parser');

const OpenButton = ({article, opened, setIsOpened}) => {
    if(!article.children?.length) {
        return null
    }
    return <button onClick={() => setIsOpened(pre => !pre)}>{opened ? '-' : '+'}</button>
}
const Article = ({article}) => {

    const [opened, setIsOpened] = useState(false)

    return (
        <li>
            {article.type === 'comment' && article?.text ? (
                <div className="comment">
                    <div style={{textAlign: 'right'}}><OpenButton article={article} opened={opened} setIsOpened={setIsOpened}/></div>
                    {parse(article?.text)}
                </div>
                ) : <h2>{article.title} <OpenButton article={article} opened={opened} setIsOpened={setIsOpened}/></h2>
            }
            { opened && article.children ? (
                <ul>
                    {article.children.map((child) => {
                        return <Article article={child} key={child.id}/>
                    })}
                </ul>
                ) : null
            }
        </li>
    )
}
export default Article;