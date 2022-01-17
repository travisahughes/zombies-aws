import { MerkleTree } from 'merkletreejs';
import keccak256 from 'keccak256';
import { ethers } from 'ethers';
import freeClaims from './constants/free_claims';

export const getFreeClaimProof = (userAddress, tokenId) => {
  const WinnerTree = new MerkleTree(
    Object.entries(freeClaims).map((token) => hashToken(...token)),
    keccak256,
    { sortPairs: true }
  );

  const leaf = hashToken(tokenId, userAddress);
  const root = WinnerTree.getHexRoot();
  const proof = WinnerTree.getHexProof(leaf);
  return { proof: proof, valid: WinnerTree.verify(proof, leaf, root) };
};

const hashToken = (tokenId, account) => {
  return Buffer.from(
    ethers.utils
      .solidityKeccak256(['uint256', 'address'], [tokenId, account])
      .slice(2),
    'hex'
  );
};
