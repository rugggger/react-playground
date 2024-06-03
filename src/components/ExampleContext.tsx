import React, { useState } from "react";


import { createContext, useContext } from "react";
export type GlobalContent = {
  copy: string;
  setCopy: (c: string) => void;
};
export const MyGlobalContext = createContext<GlobalContent>({
  copy: "Hello World", // set a default value
  setCopy: () => {},
});
export const useGlobalContext = () => useContext(MyGlobalContext);

function App() {
  const [copy, setCopy] = useState<string>("ha");
  return;
  <MyGlobalContext.Provider value={{ copy, setCopy }}>

  </MyGlobalContext.Provider>;
}
export default App;


const Home = () => {
const { copy } = useGlobalContext()
return <div>{copy}</div>
}
