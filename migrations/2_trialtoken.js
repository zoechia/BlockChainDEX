const trialtoken = artifacts.require("TrialToken");

module.exports = function (deployer) {
  deployer.deploy(trialtoken);
};
