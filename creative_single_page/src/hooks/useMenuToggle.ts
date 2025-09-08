import { useState } from "react"

export const useMenuToggle = () => {
    const [isMenu, setIsMenu] = useState<boolean>(false)

    const openMenu = ():void => setIsMenu(true)
    const closeMenu = ():void => setIsMenu(false)
    const toggleMenu = ():void => setIsMenu(!isMenu)

    return {openMenu, closeMenu, isMenu, toggleMenu}
}