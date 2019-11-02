import React from "react";
import "./style/Sass/main.scss";

//importing components
import Header from "./components/Header";
import Footer from "./components/Footer";
import SidebarItem from "./components/SidebarItem";
import Game from "./components/Game";
import Bet from "./components/Bet";


//fake data
const sidebarItems = [
  {
    icon: "i",
    text: "text",
    factor: "1.5",
    arrow: ">"
  },
  {
    icon: "i",
    text: "text",
    factor: "1.5",
    arrow: ">"
  },
  {
    icon: "i",
    text: "text",
    factor: "1.5",
    arrow: ">"
  },
  {
    icon: "i",
    text: "text",
    factor: "1.5",
    arrow: ">"
  }
];

function App() {
  return (
    <div className="App btcl_main_wrapper">
      <Header></Header>
      <div className='btcl_main'>
      <div className="btcl_left_menu">
        {sidebarItems.map(item => {
          return (
            <SidebarItem
              icon={item.icon}
              text={item.text}
              factor={item.factor}
              arrow={item.arrow}
            />
          );
        })}
      </div>
      <div className="btcl_center_menu">
        <Game
          title="real madrid"
          type="ips"
          homeTeamName="team one name"
          awayTeamName="team one two"
          homeTeamScore="1"
          awayTeamScore="0"
          status='live'
          marketCap='market cap: 500$'
          HomeOdds={[{price:'50$',factor:'1.5'},{price:'50$',factor:'1.5'}]}
          AwayOdds={[{price:'50$',factor:'1.5'},{price:'50$',factor:'1.5'}]}
        >

          <Bet type='buy'/>
          <Bet type='sell'/>

        </Game>

      </div>
      <div className="btcl_right_menu"></div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
