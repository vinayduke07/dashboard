import React from 'react';
import './MyAssets.css';

const MyAssets = () => {
  return (
    <div className="my-assets">
      <h2>My Assets</h2>
      <div className="actions">
        <button>Deposit</button>
        <button>Deposit Crypto</button>
        <button>Deposit Fiat</button>
        <button>Withdraw</button>
        <button>Crypto</button>
        <button>Transfer</button>
      </div>
      <div className="team-links">
        <button>Whole Structured</button>
        <button>All Team</button>
        <button>Level Wise</button>
      </div>
    </div>
  );
};

export default MyAssets;
