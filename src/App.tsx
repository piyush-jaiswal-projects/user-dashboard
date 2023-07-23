import React, {createContext, useState} from "react";
import { Navigation, Canvas, Form } from "./components/index";

type ContextData = {
  view: string
} | null

// to show multiple screens(View) from navigation bar
const ViewContext = createContext<ContextData>(null);

function App() {
  const [view, setView] = useState("Assessment")
  
  function handleViewChange (newView: string) {
    setView(newView)
  }

  return (
    <div className="flex justify-between m-0 p-0 h-[100vw]">
      <ViewContext.Provider value={{ view: view }}>
        <Form />
        <Navigation handler={handleViewChange} />
        <Canvas />
      </ViewContext.Provider>
    </div>
  )
}

export {App as default, ViewContext};
