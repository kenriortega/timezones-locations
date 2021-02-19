import { useState, useEffect } from "react"
const SCHEMES = {
    SYSTEM: 'system',
    DARK: 'dark',
    LIGHT: 'light'
}

let trans = () => {

    document.documentElement.classList.add("transition");
    window.setTimeout(() => {
        document.documentElement.classList.remove("transition");
    }, 1000);
};
export default function SchemeColorSwitcher() {
    const [scheme, setScheme] = useState()
    const handleChange = (e) => {
        setScheme(scheme => !scheme)
    }
    useEffect(() => {
        if (scheme) {
            trans();
            document.documentElement.setAttribute("data-theme", "dark");
        } else {
            trans();
            document.documentElement.setAttribute("data-theme", "light");
        }
    }, [scheme])
    return (
        <>
            <div className="toggle-container">
                <input onChange={handleChange} type="checkbox" id="switch" name="theme" />
                <label htmlFor="switch"></label>
            </div>
        </>
    )
}