import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./style/Sass/main.scss";
//store
import { connect } from "react-redux";
import { simpleAction } from "./actions/simpleAction";

//importing components
import Header from "./components/Header";
import Footer from "./components/Footer";
import SidebarItem from "./components/SidebarItem";
import Game from "./components/Game";
import GameMini from "./components/GameMini";

import Bet from "./components/Bet";
import TabItem from "./components/TabItem";
import Offer from "./components/Offer";

//popups
import Login from "./components/Login";

//chat
import Chat from "./components/Chat";

//fake data
const sidebarItems = [
  {
    text: "text",
    factor: "1.5",
    arrow: ">"
  },
  {
    text: "text",
    factor: "1.5",
    arrow: ">"
  },
  {
    text: "text",
    factor: "1.5",
    arrow: ">"
  },
  {
    text: "text",
    factor: "1.5",
    arrow: ">"
  }
];

//offers
const offers = [
  {
    title: "Offer Title",
    type: "buy",
    teamName: "Liverpool",
    payout: "10$"
  },
  {
    title: "Offer Title",
    type: "buy",
    teamName: "WatchDogs",
    payout: "12$"
  },
  {
    title: "Offer Title",
    type: "sell",
    teamName: "SKT",
    payout: "50.5$"
  },
  {
    title: "Offer Title",
    type: "buy",
    teamName: "Real Madrid",
    payout: "10.99$"
  }
];

function App(props) {
  const appClassName = props.theme ? "theme-dark" : "theme-light";
  return (
    <Router>
      <div className={appClassName}>
        <div className="App btcl_main_wrapper">
          <Header />
          <div className="btcl_main">
            <div className="btcl_left_menu">
              {sidebarItems.map(item => {
                return (
                  <SidebarItem
                    className="btcl_sidebar_item_2"
                    icon={item.icon}
                    text={item.text}
                    factor={item.factor}
                    arrow={item.arrow}
                  />
                );
              })}
            </div>
            <div className="btcl_center_menu">
              <div className="btcl_mini_games_wrapper">
                <GameMini
                  title="title"
                  type="ips"
                  winner="winner team"
                  homeTeamName="home team name"
                  awayTeamName="away team name"
                  homeTeamPercent="50"
                  awayTeamPercent="40"
                  homeTeamFactor="10"
                  awayTeamFactor="50"
                  homeTeamUp={true}
                  awayTeamDown={true}
                  status="10/03/19"
                  marketCap="50"
                  comment="+50 asd"
                />
                <GameMini
                  title="title"
                  type="ips"
                  winner="winner team"
                  homeTeamName="home team name"
                  awayTeamName="away team name"
                  homeTeamPercent="50"
                  awayTeamPercent="40"
                  homeTeamFactor="10"
                  awayTeamFactor="50"
                  awayTeamDown={true}
                  status="10/03/19"
                  marketCap="50"
                  comment="+50 asd"
                />
              </div>

              <Game
                title="real madrid"
                type="ips"
                homeTeamName="team one name"
                awayTeamName="team one two"
                homeTeamScore="1"
                awayTeamScore="0"
                status="live"
                marketCap="market cap: 500$"
                HomeOdds={[
                  { price: "50$", factor: "1.5" },
                  { price: "50$", factor: "1.5" }
                ]}
                AwayOdds={[
                  { price: "50$", factor: "1.5" },
                  { price: "50$", factor: "1.5" }
                ]}
              >
                <Bet type="buy" />
                <Bet type="sell" />
              </Game>
            </div>
            <div className="btcl_right_menu">
              <div className="btcl_tabs_wrapper">
                <TabItem content="Offers" />
                <TabItem content="Positions" />
                <TabItem content="Shares" />
              </div>
              <div className="btcl_right_menu_items_wrapper">
                {offers.map(offer => {
                  return (
                    <Offer
                      title={offer.title}
                      type={offer.type}
                      teamName={offer.teamName}
                      payout={offer.payout}
                    />
                  );
                })}
              </div>
            </div>
          </div>
          {/* <Footer></Footer> */}

          {props.isLoginOpened && (
            <div className="btcl_popup_wrapper">
              <Login />
            </div>
          )}

          {/* <Chat/> */}
        </div>
      </div>
    </Router>
  );
}

const mapStateToProps = state => {
  return {
    isLoginOpened: state.signInReducer,
    theme: state.skinningReducer
  };
};

export default connect(mapStateToProps)(App);
