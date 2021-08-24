import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react";

let limit = 20;

async function loadCoins(page) {
  const response = await fetch(
    `https://www.entrepreneursportfolio.com/api/coins/v2?limit=${limit}&page=${page}`
  );
  const json = await response.json();
  const data = Object.values(json.result);
  return data;
}

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "start":
      console.log(action);
      return { ...state, loading: true };
    case "loaded":
      return {
        ...state,
        loading: false,
        data: [...state.data, ...action.newData],
        more: action.newData.length === limit,
        after: state.after + 1,
      };
    default:
      throw new Error("Dont undertand action");
  }
};

const MyContext = createContext();

function MyProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    more: true,
    data: [],
    after: 0,
  });
  const { loading, data, after, more } = state;
  const [element, setElement] = useState(null);

  const load = async () => {
    console.log("clicked");
    dispatch({ type: "start" });
    const newData = await loadCoins(after + 1);
    dispatch({ type: "loaded", newData });
  };
  return (
    <MyContext.Provider
      value={{ loading, data, more, load, element, setElement }}
    >
      {children}
    </MyContext.Provider>
  );
}

function App() {
  const { loading, more } = useContext(MyContext);

  return (
    <div className="section-content">
      <h2 className='title'>Infinte Scroll Page</h2>
      <ul>
        <LoadData />
        {loading && <li>Loading ...</li>}
        {!loading && more && <LoadMore />}
      </ul>
    </div>
  );
}

function LoadData() {
  const { data } = useContext(MyContext);

  return (
    <>
      {data.map((coin) => (
        <li className="list-coins" key={coin.name}>
          <img src={coin.image_url.medium} alt="" />
          <h2>{coin.name}</h2>
          <p>{coin.profile.tagline}</p>
        </li>
      ))}
    </>
  );
}

function LoadMore() {
  const { load, element, setElement } = useContext(MyContext);
  const loader = useRef(load);
  const observer = useRef(
    new IntersectionObserver(
      (entries) => {
        const first = entries[0];
        if (first.isIntersecting) {
          loader.current();
        }
      },
      { threshold: 1 }
    )
  );

  useEffect(() => {
    loader.current = load;
  }, [load]);

  useEffect(() => {
    const currentElement = element;
    const currentObserver = observer.current;

    if (currentElement) {
      currentObserver.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        currentObserver.unobserve(currentElement);
      }
    };
  }, [element]);

  return (
    <li ref={setElement} className="list-button">
      <button onClick={load}>load more</button>
    </li>
  );
}

export default function InfiniteScroll() {
  return (
    <MyProvider>
      <App />
    </MyProvider>
  );
}
