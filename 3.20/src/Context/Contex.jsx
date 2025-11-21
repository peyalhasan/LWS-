import { createContext, useContext, useReducer } from "react";
import taskReducer from "../Reduser/TaskReducer";
import { initialTasks } from "../data/task";


export const HandleContext = createContext(null);
export const DispatchContext = createContext(null);

export default function ContextProvider({children}){
      const [tasks, dispatch] = useReducer(taskReducer, initialTasks);
    return(
        <HandleContext.Provider value={tasks}>
            <DispatchContext.Provider value={dispatch}>
                {children}
            </DispatchContext.Provider>
        </HandleContext.Provider>
    )
}

export function useTask(){
    return useContext(HandleContext)
}

export function useTaskDispatch(){
    return useContext(DispatchContext)
}