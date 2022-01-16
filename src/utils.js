import { MerkleTree } from 'merkletreejs';
import keccak256 from 'keccak256';
import ethers from 'ethers';
import presaleWhitelist from './constants/presale_whitelist';

const validateMerkle = (leaves, userAddress) => {
  const tree = new MerkleTree(leaves, keccak256, { sortPairs: true });
  const leaf = keccak256(userAddress);
  const root = tree.getHexRoot();
  const proof = tree.getHexProof(leaf);
  return { proof: proof, valid: tree.verify(proof, leaf, root) };
};

const hashToken = (tokenId, account) => {
  return Buffer.from(
    ethers.utils
      .solidityKeccak256(['uint256', 'address'], [tokenId, account])
      .slice(2),
    'hex'
  );
};

export const getPresaleProof = (userAddress) => {
  const leaves = presaleWhitelist.map((address) => keccak256(address));
  return validateMerkle(leaves, userAddress);
};
