
import { useEffect, useReducer, useRef, useState } from 'react';
import './App.css';


let coins = []

async function FetchDta(page) {
  const response = await fetch(`https://www.entrepreneursportfolio.com/api/coins/v2?limit=25&page=${page}`)
  const json = await response.json()
  const data = Object.values(json.result)
  coins = data
  return data
}
const perPage = 10
let page = 1





const reducer = (state, action) => {
  switch(action.type) {
    case "start":
    return {...state, loading: true}
    
    case "loaded":
    return {
      ...state,
      loading: false,
      data: [...state.data, ...action.newData],
      more: action.newData.length === perPage,
      after: state.after + action.newData.length
    }
    default :
      throw new Error("Don't understand action")
  }
}


function Home() {
    // const [loading, setLoading] = useState(true)
  
    // const [coins, setCoins] = useState([])
    // FetchDta(1).then(response => setCoins(...response))
    // const [page, setPage] = useState(1)
    
  // function useOnScreen(options){
  //   const [ref, setRef] = useState(null)
  //   const [ visible, setVisible ] = useState(false)
  
  //   console.log(visible);
  //   useEffect(() => {
  //     const observer = new IntersectionObserver(([entry]) => {
  //       if(entry.isIntersecting){
  //         setVisible(entry.isIntersecting)
  //       }
  //       // console.log(entry);
  //     }, options)
  
  //     if(ref) {
  //       observer.observe(ref)
  //     }
  
  //     return () => {
  //       if(ref) observer.unobserve(ref)
        
  //     }
  
  //   }, [ref, options]);
  
  //   return [setRef, visible]
  // }
    // const ref = {current: null}
    // const visible = false;
  
    // const [ setRef, visible ] = useOnScreen({threshold: 1})
  
  
    // const [coins, setCoins] = useState([])
    useEffect(() =>{
  
      FetchDta(page)
  
    }, [])
  
  
  
    const [state, dispatch ] = useReducer(reducer,{
      loading: false,
      more: true,
      data: [],
      after: 0
    })
  
    const { loading, data, after, more} = state
  
    const load = () => {
      dispatch({type: "start"})
      setTimeout(() => {
        const newData =  coins.slice(after, after + perPage)
        dispatch({ type: 'loaded', newData})
      }, 600);
    };
    
    const observer = useRef(new IntersectionObserver((entry) => {
      const first = entry[0]
      if(first.isIntersecting) {
        console.log(entry[0]);
        console.log(coins);
        // load()
      }
  
    }, { threshold: 1}))
    const [element, setElement] = useState(null)
    
    useEffect(() => {
      const currentElement = element;
      const currentObserver = observer.current
  
      if(currentElement) {
        currentObserver.observe(currentElement)
        
      }
  
      return () => {
        if(currentElement) {
          currentObserver.unobserve(currentElement)
        }
      }
    }, [element])
  
  
  
  
  
    
    
    
    
    
    // console.log(element);
  
  
  
  
    // if(!data.length) return <div className="App"><div className="App-header">Loading...</div></div>
  
    return (
      <div className="App">
      <header className="App-header">
      Intersection Observer
    </header>
  
    <section 
    
    >
      {data.map(coin => (
        <>
        <p>{coin.name}</p>
        <img src={coin.image_url.medium} alt="" />
        </>
      ))}
      {loading && <h2>LOADING .....</h2>}
      {!loading && more && <div  ref={setElement} style={{backgroundColor: 'gold', paddingBottom: '10px'}}> <p>Loading list....</p> <button onClick={load}>Load more</button> </div> }
  
    </section>
  </div>
  
    )
  }
  export default Home;