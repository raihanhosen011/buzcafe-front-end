import {ethers} from 'ethers';
import Buzcafe from './Buzcafe.json';

window.providerESN = new ethers.providers.JsonRpcProvider(
  "https://mainnet.eraswap.network"
);

window.buzcafeInst = new ethers.Contract('0x6e06dCE5c7dc7FAF471f77f103c7Df50d4e86188', Buzcafe.abi, window.provider);