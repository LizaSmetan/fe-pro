import { useCallback, useEffect, useState } from "react";

const HookTest = () => {

    // menu
    const [menuIsOpened, setMenuIsOpened] = useState(false)
    const openMenu = () => {}
    useEffect(() => {
        setMenuIsOpened(menuIsOpened, sidebarHidden)

        return () => {}
    }, [menuIsOpened])
    // menu
    
    // sidebar
    const [sidebarHidden, setSidebarHidden] = useState(false)
    const sidebarColor = '#fff'

    const keyupFunc = (e) => {
        console.log(menuIsOpened, sidebarHidden)
    }

    return (
        <>
        <div onClick={() => setMenuIsOpened(pre => !pre)}>{`${menuIsOpened}`}</div>
        <div onClick={() => setSidebarHidden(pre => !pre)}>{`${sidebarHidden}`}</div>
        <div onClick={() => keyupFunc()}>run</div>
        </>
        )
}
export default HookTest;