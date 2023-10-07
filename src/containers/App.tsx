import { useEffect } from "react";
import CardList from "../components/CardList"
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import './App.css';
import { useAppDispatch, useAppSelector } from "../hooks";
import { selectSearchField } from "../features/search/searchSlice";
import { fetchRobots, selectRobots } from "../features/robots/robotsSlice";

interface Robot {
  id: number;
  name: string;
  email: string;
}

function App() {
  const searchField = useAppSelector(selectSearchField);
  const dispatch = useAppDispatch();

  const robotsStatus = useAppSelector(state => state.robots.status);
  const robots: Robot[] = useAppSelector(selectRobots);

  // Fetch Initial List of Robots on Load
  useEffect(() => {
    if (robotsStatus === 'idle') {
      dispatch(fetchRobots())
    }
  }, [])

  // Filter Robots based on Search Field
  const filteredRobots = robots.filter(robot => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  })

  return (
      <div className="text-center py-6">
        <h1 className="text-4xl text-center my-4 select-none">RoboFriends</h1>
        <SearchBox />

        { !robots.length ? (
            <h1 className="text-4xl text-center my-4">Loading...</h1>
          ) : (
            <Scroll>
              <CardList robots={filteredRobots}/>
            </Scroll>
          )
        }
      </div>
    )
}

export default App
