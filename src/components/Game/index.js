import React from "react";
import Odd from "../Odd";

export default function Game({
  title,
  type,
  homeTeamName,
  awayTeamName,
  homeTeamScore,
  awayTeamScore,
  status,
  marketCap,
  HomeOdds,
  AwayOdds,
  children
}) {
  return (
    <div className="btcl_game">
      <div className="btcl_flac">
        <h2 className="btcl_6 btcl_title">{title}</h2>
        <span className="btcl_6 btcl_type">{type}</span>
      </div>
      <div className="btcl_flac btcl_mb_m">
        <div className="btcl_score_side">
          <div className="btcl_flac btcl_mb_xs">
            <div className="btcl_team">{homeTeamName}</div>
            <div className="btcl_team_score_separator"></div>
            <div className="btcl_team">{awayTeamName}</div>
          </div>

          <div className="btcl_flac btcl_mb_s">
            <div className="btcl_score">{homeTeamScore}</div>
            <div className="btcl_team_score_separator">:</div>
            <div className="btcl_score">{awayTeamScore}</div>
          </div>
        </div>

        <div className="btcl_flac">
          <div className=" btcl_odds_container ">
            <span className="btcl_odds_heading btcl_mb_xs">heading</span>
            <div className="btcl_odd_grp">
              {HomeOdds.length > 0 &&
                HomeOdds.map(odd => {
                  return (
                    <Odd
                      type={odd.type}
                      price={odd.price}
                      factor={odd.factor}
                    />
                  );
                })}
            </div>
          </div>

          <div className=" btcl_odds_container ">
            <span className="btcl_odds_heading btcl_mb_xs">heading</span>
            <div className="btcl_odd_grp">
              {AwayOdds.length > 0 &&
                AwayOdds.map(odd => {
                  return (
                    <Odd
                      type={odd.type}
                      price={odd.price}
                      factor={odd.factor}
                    />
                  );
                })}
            </div>
          </div>
        </div>
      </div>

      <div className="btcl_flac">
        <div className="btcl_score_side">
          <div className="btcl_separator btcl_mb_s"></div>
          <div className="btcl_flac">
            <div className="btcl_6 btcl_status">{status}</div>
            <div className="btcl_6 btcl_market_cap btcl_flx btcl_jfe">
              {marketCap}
            </div>
          </div>
        </div>
        <div className="btcl_comment_side">
          <div className="btcl_comment">+5645 asd</div>
        </div>
      </div>

      <div className="btcl_flcol">{children}</div>
    </div>
  );
}
