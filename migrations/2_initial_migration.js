var Migrations = artifacts.require("./Structregistry.sol");
module.exports = function(deployer) {
  deployer.deploy(Migrations);
};