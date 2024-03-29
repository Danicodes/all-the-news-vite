import { useState , useEffect } from 'preact/hooks'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Stories from '../components/Stories'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'

const NAVITEMS = ["arts", "books", "fashion", "food", "movies", "travel"];
const FETCH_URL = "https://api.nytimes.com/svc/topstories/v2/";
const NYT_API = "KgGi6DjX1FRV8AlFewvDqQ8IYFGzAcHM";
const section = "arts";

export function App() {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [section, setSection] = useState("arts");

  useEffect(() => {
    fetch(`${FETCH_URL}${section}.json?api-key=${NYT_API}`)
      .then((response) => response.json())
          // .then((myJson) => localStorage.setItem(section, JSON.stringify(myJson)))
      .then((data) => setStorageAndState(data.results));
    }, [section]);

  useEffect(() => {
    if (!localStorage.getItem(section)) {
      console.log("fetching from NYT");
      fetch(`${FETCH_URL}${section}.json?api-key=${NYT_API}`)
      .then((response) => response.json())
      .then((data) => setStories(data.results));
    } else {
      console.log("section is in storage, not fetching");
      setStories(JSON.parse(localStorage.getItem(section)));
    }
  }, [section]);

  function setStorageAndState(data) {
    localStorage.setItem(section, JSON.stringify(data));
    setStories(data);
  }

  return (
    <>
    <Header siteTitle="All the News That Fits We Print"></Header>
    <Nav navItems={NAVITEMS}></Nav>
    <Stories stories={stories}></Stories>
    </>
  )
}
