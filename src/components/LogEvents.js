import { ethers } from "ethers";

export async function logEvents(
  contractInstance,
  methodName,
  args
) {
    const filter = contractInstance.filters[methodName](...args);
    const logs = await contractInstance.queryFilter(filter);
    
    const dataAll = logs.map((ele) =>{ 
        return {
            args :ele.args,
            blockNumber : ele.blockNumber,
            transactionHash : ele.transactionHash}
        })
        console.log(dataAll);
    return dataAll;
}