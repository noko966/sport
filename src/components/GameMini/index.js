import React from "react";

export default function GameMini({
  title,
  type,
  winner,
  homeTeamName,
  awayTeamName,
  homeTeamPercent,
  awayTeamPercent,
  homeTeamFactor,
  awayTeamFactor,
  homeTeamUp,
  homeTeamDown,
  awayTeamUp,
  awayTeamDown,
  comment,
  status,
  marketCap
}) {
  return (
    <div className="btcl_game_mini">
      <div className="btcl_flac btcl_mb_m">
        <div className="btcl_6">
          <div className="btcl_title">{title}</div>
        </div>
        <div className="btcl_6">
          <div className="btcl_type">{type}</div>
        </div>
      </div>
      <div className="btcl_flac btcl_mb_l">
        <div className="btcl_winner">{winner}</div>
      </div>
      <div className="btcl_flac btcl_mb_l">
        <div className="btcl_6">
          <div className="btcl_team_name">{homeTeamName}</div>
        </div>
        <div className="btcl_6">
          <div className="btcl_team_name">{awayTeamName}</div>
        </div>
      </div>

      <div className="btcl_flac btcl_mb_l">
        <div className="btcl_6 btcl_details">
          <div className="btcl_percentage">{homeTeamPercent}</div>
          <div className="btcl_factor">{homeTeamFactor}</div>
          <div className={"btcl_change " + (homeTeamUp ? 'btcl_change_up' : '') + (homeTeamDown ? 'btcl_change_down' : '')}></div>
        </div>
        <div className="btcl_6 btcl_details">
          <div className="btcl_percentage">{awayTeamPercent}</div>
          <div className="btcl_factor">{awayTeamFactor}</div>
          <div className={"btcl_change " + (awayTeamUp ? 'btcl_change_up' : '') + (awayTeamDown ? 'btcl_change_down' : '')}></div>
        </div>
      </div>
      <div className="btcl_flje btcl_mb_m">
        <div className="btcl_comment">{comment}</div>
      </div>
      <div className='btcl_separator btcl_mb_s'></div>
      <div className="btcl_flac btcl_game_footer">
        <div className="btcl_6 btcl_status">{status}</div>
        <div className="btcl_6 btcl_market_cap btcl_flx">
          {marketCap}
        </div>
      </div>
    </div>
  );
}
