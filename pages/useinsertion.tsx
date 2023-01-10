import {
  useState,
  useEffect,
  useInsertionEffect,
  useLayoutEffect,
  Dispatch,
  SetStateAction,
} from "react";

type childType = {
    setText: Dispatch<SetStateAction<String[]>>
}

const Child = ({setText}: childType) => {

  useEffect(() => {
    console.log("useEffect child is called");
    setText((text) => [...text, "useEffect child is called"]);
  }, []);
  useLayoutEffect(() => {
    console.log("useLayoutEffect child is called");
    setText((text) => [...text, "useLayoutEffect child is called"]);
  }, []);
  useInsertionEffect(() => {
    console.log("useInsertionEffect child is called");
    setText((text) => [...text, "useInsertionEffect child is called"]);
  }, []);

  return <></>
};

function UseInsertion() {
  const [text, setText] = useState<Array<String>>([]);

  useEffect(() => {
    console.log("useEffect app is called");
    setText((text) => [...text, "useEffect app is called"]);
  }, []);
  useLayoutEffect(() => {
    console.log("useLayoutEffect app is called");
    setText((text) => [...text, "useLayoutEffect app is called"]);
  }, []);
  useInsertionEffect(() => {
    console.log("useInsertionEffect app is called");
    setText((text) => [...text, "useInsertionEffect app is called"]);
  }, []);
  return (
    <div className="App">
      <Child setText={setText}/>
      <div>
        {text.map((res, index) => (
          <p key={index}>{res}</p>
        ))}
      </div>
    </div>
  );
}

export default UseInsertion;
