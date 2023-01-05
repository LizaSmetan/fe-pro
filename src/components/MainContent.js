import { useLangContext } from "../services/langContext"

const MainContent = () => {
    const {lang} = useLangContext()
    if(lang === 'uk'){
        return <div>Привіт!</div>
    }
    return <div>Hello!</div>
}
export default MainContent;