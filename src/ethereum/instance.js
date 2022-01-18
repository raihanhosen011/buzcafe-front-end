import {ethers} from 'ethers';
import Buzcafe from './Buzcafe.json';

window.providerESN = new ethers.providers.JsonRpcProvider(
  "https://mainnet.eraswap.network"
);

window.buzcafeInst = new ethers.Contract('0x337Ad7db40DFcbEb5eDeCBCb5072aCc21Ded8be7', Buzcafe.abi, window.providerESN);