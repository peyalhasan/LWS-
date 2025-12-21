import { useEffect, useMemo } from "react";
import { createPortal } from "react-dom";

const usePortal = ({ children, id }) => {
    const elementDiv = useMemo(()=>
        document.createElement('div'), []
    ) ;
    
    useEffect(() => {
        const mountElement = document.getElementById(id);

        mountElement.appendChild(elementDiv);

        return () => mountElement.removeChild(elementDiv)
        
    }, [elementDiv, id])

    return createPortal(children, elementDiv)

}

export default usePortal;