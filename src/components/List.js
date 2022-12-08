import { useEffect, useState } from "react";
import { getArticlesById } from "../services/api";
const parse = require('html-react-parser');

const ListItem = ({data}) => {
    const [opened, setIsOpened] = useState(false)
    return (
        <li>
            {data.title || parse(data.text || '')}
            {data.children[0] ? <button onClick={() => setIsOpened(true)}>+</button> : null}
            {
                opened ? <ul>{
                    data.children.map((item) => <ListItem data={item}/>)
                    }</ul> : null
            }
        </li>
    )
}
const List = () => {
    const [data, setData] = useState(false);

    useEffect(() => {
        getArticlesById('1').then((res) => setData(res))
    }, [])

    if(!data) return null;
    return <ul>
        <ListItem data={data}/>
    </ul>
}

export default List;