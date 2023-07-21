import React, {createContext, useState} from "react";
import { Navigation, Canvas } from "./components/index";

type ContextData = {
  view: string
} | null

const ViewContext = createContext<ContextData>(null);


function App() {
  const [view, setView] = useState("Assessment")
  
  function handleViewChange (newView: string) {
    setView(newView)
  }

  return (
    <div className="flex justify-between m-0 p-0 h-[100vw]">
      <ViewContext.Provider value={{ view: view }}>

        <Navigation handler={handleViewChange} />
        <Canvas />

      </ViewContext.Provider>
    </div>
  )
}

export {App as default, ViewContext};
