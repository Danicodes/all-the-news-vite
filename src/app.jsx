import { useState , useEffect } from 'preact/hooks'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Stories from '../components/Stories'

const NAVITEMS = ["arts", "books", "fashion", "food", "movies", "travel"];
const FETCH_URL = "https://api.nytimes.com/svc/topstories/v2/";
const NYT_API = "KgGi6DjX1FRV8AlFewvDqQ8IYFGzAcHM";

export function App() {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [section, setSection] = useState("arts");

  useEffect(() => {
    if (!localStorage.getItem(section)) {
      console.log("fetching from NYT");
      setLoading(!loading)
      fetch(`${FETCH_URL}${section}.json?api-key=${NYT_API}`)
      .then((response) => response.json())
      .then((data) => setStories(data.results))
      .catch(err => console.error(err.message))
      setLoading(!loading)
    } else {
      console.log("section is in storage, not fetching");
      setStories(JSON.parse(localStorage.getItem(section)));
    }
  }, [section]);

  useEffect(() => {
    setStories(stories);
    localStorage.setItem(section, JSON.stringify(stories))
  }, [stories])

  // function setStorageAndState(data) {
  //   localStorage.setItem(section, JSON.stringify(data));
  //   setStories(data);
  // }

  if (loading) {
    return (
      <h2>
      Loading...
      </h2>
    )
  }
  return (
    <>
    <Header siteTitle="All the News That Fits We Print"></Header>
    <Nav navItems={NAVITEMS} setSection={setSection} section={section}></Nav>
    <Stories stories={stories}></Stories>
    </>
  )
}
