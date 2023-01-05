import { useLangContext } from "../services/langContext"

const LangSwitcher = () => {
    const {setLang} = useLangContext()
    return <select onChange={(e) => {setLang(e.target.value)}}>
        <option value={'uk'}>Українська</option>
        <option value={'en'}>Enlish</option>
    </select>
}
export default LangSwitcher;