import Header from "./components/Header";
import ProfilesPage from "./Pages/ProfilesPage/ProfilesPage";
import MatchesPage from "./Pages/MatchesPage/MatchesPage";
import { useEffect, useState } from "react";
import { createGlobalStyle } from 'styled-components';
import logo from "./img/logo.png"
import styled from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  text-align: center;
  width: 100%;
  height: 100%;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAkFBMVEX/kmX/cmP/b2P/bGP/lWb/fGT/Y2L/iWX/h2X/ZWL/i2X/hGT/YWL/dGP/hWX/eWT/kGX/aWP/d2T/mGb/l2b/lmb/lGb/j2X/jmX/jWX/jGX/g2T/gmT/gWT/gGT/f2T/fmT/fWT/e2T/dWP/bmP/a2P/aGP/ZmL/emT/X2L/kWX/amP/YGL/eGT/c2P/cWPva3yKAAADKElEQVR4nO2a2VLbUBBEHZMEsyRmy0J2EDvE+f+/S0aAHFUR4quSq/r2nH7QB3T1HPVM3cnhvY5C70IvW71/1KTVTWgv9CH0MXQc+hTaDm0uNev0ttNO6HPoS+hr6Fvoe+hH6CT0qtVp6Co0D/0MHYSapmk/TfOm1eKPXrT6FZp2OgttdDoP3Yb2Qxf3unzQVuj1Urud7kLXD5o8Z9akxKztZ83aWY9ZixHN2pIxa8RkNeOZdaFpln+yYFb1yfIfQ2dmdV79ZdbeimM4m42TrKVX875XS7MW/TGcTv9v1v4KY7jbN+t6ncx6yqyyZJ0OBPwKZtUA+KHMmvfNatb4N/xnsmpmlmh10DRLDvDK1UE0WQLMuur/DXOUUsaQBs9u6JQsUcDDLJIlXx38mVVk1pNnhxSLNCea4hONJuBHTJYo4P2vDgC++urg37P8SyknmurHUBTwjCHJojrArKRj6MwsFuniRXogs7KdaGRKKW8dLKuDpllygFeuDqLJEmBWykWaMaTBsxs6JUsU8DCLZMlXB39mFZnFWwdONLx1EAe8/9UBwFdfHfx7ln8p5URT/RiKAp4xJFlUB5iVdAydmcUiXbxID2RWthONTCnlrYNlddA0Sw7wytVBNFkCzEq5SDOGNHh2Q6dkiQIeZpEs+ergz6wis3jrwImGtw7igPe/OgD46quDf8/yL6WcaKofQ1HAM4Yki+oAs5KOoTOzWKSLF+mBzMp2opEppbx1sKwOmmbJAV65OogmS4BZKRdpxpAGz27olCxRwMMskiVfHfyZVWQWbx040fDWQRzw/lcHAF99dfDvWf6llBNN9WMoCnjGkGRRHWBW0jF0ZhaLdPEiPZBZ2U40MqWUtw6W1UHTLDnAK1cH0WQJMCvlIs0Y0uDZDZ2SJQp4mEWy5KuDP7OKzOKtAyca3jqIA97/6gDgq68O/j3Lv5Ryoql+DEUBzxiSLKoDzEo6hs7MYpEuXqQHMivbiUamlPLWwbI6aJolB3jl6iCaLAFmpVykGUMaPLuhU7JEAQ+zSJZ8dfBnVpFZvHXgRMNbB3HA+18dAHz11cG/Z1mU0t9dfJs34b05NAAAAABJRU5ErkJggg==);
  background-size: 100vw;
}
h1{
  color: white;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-size: 300%;
  border: 0;
  margin: 0;
}h2, h3, h4, p {
  color: white;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}

p {
  margin: 0;
}
`
const Logo = styled.div`
img{
  width: 5%;
}
 
`


function App() {
  const [page, setPage] = useState("ProfilesPage")

  useEffect(() => {
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

  return (
    <div>
      <GlobalStyle/>
      <section>
        <Logo>
        <img src={logo}/>
        </Logo>
        <Header
          page={page} //ñ entendi essa parte
          changeToProfilesPage={changeToProfilesPage}
          changeToMatchesPage={changeToMatchesPage}
        />
      </section>
    
 {renderPage()}
    </div>
  );
}
export default App;


