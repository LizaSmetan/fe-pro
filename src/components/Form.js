import { Component, useState } from "react";


export default class Form extends Component{
    state = {
        formData: {
            nickname: 'Example',
            email: 'example@gmail.com',
            city: "AA"
        }
    }
    // this.state.nickname === ''
    onChangeValue = (e) => {
        const inputName = e.currentTarget.name
        const inputValue = e.currentTarget.value
        this.setState({[inputName]: inputValue})
    }

    render(){
        return (
            <form onSubmit={(e) => {}}>
                <input name='nickname' onChange={onChangeValue} type='text'/>
                {
                    !this.state.nickname ? <div>Будь ласка, введіть свій nickname</div> : null
                }
                <input name='email' onChange={onChangeValue} type='text'/>
                {
                    !this.state.email ? <div>Будь ласка, введіть свій email</div> : null
                }
                <select name='city' onChange={onChangeValue}>
                    <option value="AA">Київ</option>
                    <option value="AX">Харків</option>
                </select>
                {
                    !this.state.city ? <div>Будь ласка, введіть свій city</div> : null
                }
            </form>
        )
    }
}

const elements = [
    {
        name: 'nickname',
        type: 'text'
    },
    {
        name: 'email',
        type: 'text'
    },
    {
        name: 'city',
        type: 'select',
        option: [{
            value: 'AA',
            label: 'Київ',
        },
        {
            value: 'AX',
            label: 'Харків',
        }]
    }
]
const FormRegister = ({elements}) => {
    const [formData, setFormData] = useState({
        nickname: 'Example',
        email: 'example@gmail.com',
        city: "AA"
    })
    const onChangeValue = (e) => {
        const inputName = e.currentTarget.name
        const inputValue = e.currentTarget.value;
        setFormData((pre) => ({
            ...pre,
            [inputName]: inputValue
        }))
    }
    return (
        <form onSubmit={(e) => {console.log(formData)}}>
            {
                elements.map((element) => {
                    return <div>
                        {element.type === 'select' 
                            ? <select name={element.name} onChange={onChangeValue}>

                            </select>
                            : <input name={element.name} onChange={onChangeValue} type='text'/>
                        }
                        {
                            !formData[element.name] ? <div>Будь ласка, введіть свій --- {element.name}</div> : null
                        }
                    </div>
                })
            }
            </form>
        )
}