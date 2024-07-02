import UseMemoParent from "./components/LearnHooks/optimization/LearnUseMemo/UseMemoParent";
export const Context = createContext();
function App() {
  // const [name, setName] = useState("sudan");
  // const [age, setAge] = useState(23);
  return (
    <div>
      {/* <Project></Project> */}
      {/* <LearnUseRef1></LearnUseRef1> */}
      {/* <HidenShow></HidenShow> */}
      {/* <AddToLocalStorage /> */}
      {/* <GetLocalStorageData /> */}
      {/* <RemoveLocalStorageData /> */}
      {/* <AddToSessionStorage /> */}
      {/* <GetSessionStorageData /> */}
      {/* <RemoveSessionStorageData /> */}
      {/* <Context.Provider value={{ name, age, setName, setAge }}>
        <LearnUseContext1 />
      </Context.Provider> */}
      {/* <LearnUseReducer1 /> */}
      {/* <LearnUseRef1 /> */}
      {/* <Todo /> */}
      {/* <LearnUseReducer2 /> */}
      {/* <Parent /> */}
      {/* <CallbackParent /> */}
      <UseMemoParent />
    </div>
  );
}

export default App;
