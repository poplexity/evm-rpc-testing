const { ethers } = require("ethers");

const test = async() => {
    const provider = new ethers.providers.JsonRpcProvider("http://localhost:8545");
    const blockNumber = await provider.getBlockNumber();
    console.log(`Syncing status: ${await provider.send("eth_syncing", [])}`)
    console.log(`Block number is: ${blockNumber}`)
}

test();
