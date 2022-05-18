import Header from "./components/Header";
import ProfilesPage from "./Pages/ProfilesPage";
import MatchesPage from "./Pages/MatchesPage";
import { useEffect, useState } from "react";

function App() {
  const [page, setPage] = useState("ProfilesPage")
  
  useEffect(() =>{
      renderPage();
  }, [])
  
      const renderPage = () => {
          switch (page) {
            case "ProfilesPage":
              return <ProfilesPage />
              case "MatchesPage":
                return <MatchesPage />
                default:
                    return <ProfilesPage />
          }
        }
        
  const changeToProfilesPage = () => {
      setPage("ProfilesPage")
  }
  
        const changeToMatchesPage = () => {
            setPage("MatchesPage")
        }
  return(
    <div>
              <Header
              page={page}
              changeToProfilesPage={changeToProfilesPage}
              changeToMatchesPage={changeToMatchesPage}
              />
                  {renderPage()}
    </div>
  );
}
export default App;


      