init = async () => {
    var web3 = new Web3("http://localhost:7545");
    var response = await fetch('../build/contracts/Structregistry.json');
    var MyContract = await response.json()
    const id = await web3.eth.net.getId();
    const deployedNetwork = MyContract.networks[id];
    contract = new web3.eth.Contract(MyContract.abi, deployedNetwork.address);
    return contract
}