/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';
import { ethers } from 'ethers';
import Greeter from '../artifacts/contracts/Greeter.sol/Greeter.json';

const greeterAddress = '0x5fbdb2315678afecb367f032d93f642f64180aa3';

let Mint = (props) => {
  const [greeting, setGreetingValue] = useState('');
  const mint = css`
    color: white;

    background-color: #000000;
    display: flex;
    justify-content: center;
    color: white;
    padding: 20px 200px;

    .mint-image {
      background-color: white;
      color: black;
      width: 250px;
      height: 400px;
      text-align: center;
    }

    .mint-info {
      width: 800px;
      margin: 0 20px;
      text-align: left;

      h2 {
        font-weight: 700;
        font-size: 20px;
      }
    }
  `;

  async function requestAccount() {
    await window.ethereum.request({ method: 'eth_requestAccounts' });
  }

  async function fetchGreeting() {
    if (typeof window.ethereum !== 'undefined') {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(
        greeterAddress,
        Greeter.abi,
        provider
      );
      try {
        const data = await contract.greet();
        console.log('data: ', data);
      } catch (err) {
        console.log('Error: ', err);
      }
    }
  }

  async function setGreeting() {
    if (!greeting) return;
    if (typeof window.ethereum !== 'undefined') {
      await requestAccount();
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(greeterAddress, Greeter.abi, signer);
      const transaction = await contract.setGreeting(greeting);
      setGreetingValue('');
      await transaction.wait();
      fetchGreeting();
    }
  }
  return (
    <div css={mint}>
      <div className="mint-image">[IMAGE]</div>
      <div className="mint-info">
        <h2>The NFT world is growing…spreading…</h2>
        <p>
          Degenerate Zombies is an art collection of 6,666 initial mint (and 10k
          total) unique zombie characters on the Ethereum blockchain (ERC-721).
          Art is inspired by horror and zombie lore, movies, shows, comics, our
          favorite NFT projects, and more.
        </p>

        <h2>MINT – COMING SOON</h2>
        <div>
          <ul>
            <li>
              6,666 Available at Launch (666 of these will be available for
              pre-sale)
            </li>
            <li>
              3,000 To be available in the future for Zombie holders – Holding a
              Genesis Zombie gets you the best chance to get one of these in the
              future!
            </li>
            <ul>
              <li>
                How this works: Zombies holders will have the opportunity in the
                future to “Go Out on the Hunt” (similar to staking) to find more
                Zombies to join the horde. They will either find future
                generation zombies (Gen 2 and beyond) or have a chance at the
                remaining 3,000 Genesis zombies. More details of this utility to
                be revealed later.
              </li>
            </ul>
            <li>
              334 Genesis Zombies to be held for giveaways, promotional
              purposes, the team and mods
            </li>
          </ul>

          {/* <button onClick={fetchGreeting}>Fetch Greeting</button>
                <button onClick={setGreeting}>Set Greeting</button>
                <input 
                  onChange={e => setGreetingValue(e.target.value)} 
                  placeholder="Set greeting" 
                  value={greeting}
                /> */}
        </div>
      </div>
    </div>
  );
};

export default Mint;
