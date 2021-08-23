/*!
* YieldFarming
* Boilerplate for a Static website using EJS and SASS
* https://yieldfarming.info
* @author Jongseung Lim -- https://yieldfarming.info
* Copyright 2021. MIT Licensed.
*/


$(function() {
  consoleInit(main)
    });
  
  const MOUSSE_CHEF_ABI = [{"inputs":[{"internalType":"contract MousseToken","name":"_mousse","type":"address"},{"internalType":"address","name":"_devAddr","type":"address"},{"internalType":"address","name":"_feeAddress","type":"address"},{"internalType":"uint256","name":"_startTime","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":!1,"inputs":[{"indexed":!0,"internalType":"address","name":"user","type":"address"},{"indexed":!0,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":!1,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":!1,"inputs":[{"indexed":!0,"internalType":"address","name":"user","type":"address"},{"indexed":!0,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":!1,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":!1,"inputs":[{"indexed":!0,"internalType":"address","name":"caller","type":"address"},{"indexed":!1,"internalType":"uint256","name":"previousAmount","type":"uint256"},{"indexed":!1,"internalType":"uint256","name":"newAmount","type":"uint256"}],"name":"EmissionRateUpdated","type":"event"},{"anonymous":!1,"inputs":[{"indexed":!0,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":!0,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":!1,"inputs":[{"indexed":!0,"internalType":"address","name":"_referrer","type":"address"},{"indexed":!0,"internalType":"address","name":"_user","type":"address"}],"name":"Referral","type":"event"},{"anonymous":!1,"inputs":[{"indexed":!1,"internalType":"uint256","name":"_oldBp","type":"uint256"},{"indexed":!1,"internalType":"uint256","name":"_newBp","type":"uint256"}],"name":"ReferralBonusBpChanged","type":"event"},{"anonymous":!1,"inputs":[{"indexed":!0,"internalType":"address","name":"_user","type":"address"},{"indexed":!0,"internalType":"address","name":"_userTo","type":"address"},{"indexed":!1,"internalType":"uint256","name":"_reward","type":"uint256"}],"name":"ReferralPaid","type":"event"},{"anonymous":!1,"inputs":[{"indexed":!0,"internalType":"address","name":"user","type":"address"},{"indexed":!0,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":!1,"internalType":"uint256","name":"amountLockedUp","type":"uint256"}],"name":"RewardLockedUp","type":"event"},{"anonymous":!1,"inputs":[{"indexed":!0,"internalType":"address","name":"user","type":"address"},{"indexed":!0,"internalType":"address","name":"_feeAddress","type":"address"}],"name":"SetDevAddress","type":"event"},{"anonymous":!1,"inputs":[{"indexed":!0,"internalType":"address","name":"user","type":"address"},{"indexed":!0,"internalType":"address","name":"_devAddress","type":"address"}],"name":"SetFeeAddress","type":"event"},{"anonymous":!1,"inputs":[{"indexed":!0,"internalType":"address","name":"caller","type":"address"},{"indexed":!1,"internalType":"uint256","name":"_oldHarvestTime","type":"uint256"},{"indexed":!1,"internalType":"uint256","name":"_newHarvestTime","type":"uint256"}],"name":"UpdateHarvestTime","type":"event"},{"anonymous":!1,"inputs":[{"indexed":!0,"internalType":"address","name":"caller","type":"address"},{"indexed":!1,"internalType":"uint256","name":"_oldStartTimeHarvest","type":"uint256"},{"indexed":!1,"internalType":"uint256","name":"_newStartTimeHarvest","type":"uint256"}],"name":"UpdateStartTimeHarvest","type":"event"},{"anonymous":!1,"inputs":[{"indexed":!0,"internalType":"address","name":"user","type":"address"},{"indexed":!0,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":!1,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"INITIAL_EMISSION_RATE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"INITIAL_HARVEST_TIME","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAXIMUM_DEPOSIT_FEE_BP","outputs":[{"internalType":"uint16","name":"","type":"uint16"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAXIMUM_REFERRAL_BP","outputs":[{"internalType":"uint16","name":"","type":"uint16"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"contract IBEP20","name":"_lpToken","type":"address"},{"internalType":"uint16","name":"_depositFeeBP","type":"uint16"},{"internalType":"bool","name":"_withUpdate","type":"bool"}],"name":"add","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"address","name":"_referrer","type":"address"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"devAddr","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"feeAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_from","type":"uint256"},{"internalType":"uint256","name":"_to","type":"uint256"}],"name":"getMultiplier","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"contract IBEP20","name":"_lpToken","type":"address"}],"name":"getPoolIdForLpToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getReferral","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"harvestTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lastTimeHarvest","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"massUpdatePools","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"mousse","outputs":[{"internalType":"contract MousseToken","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"moussePerTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"pendingMousse","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract IBEP20","name":"","type":"address"}],"name":"poolExistence","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract IBEP20","name":"","type":"address"}],"name":"poolIdForLpAddress","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"poolInfo","outputs":[{"internalType":"contract IBEP20","name":"lpToken","type":"address"},{"internalType":"uint256","name":"allocPoint","type":"uint256"},{"internalType":"uint256","name":"lastRewardTime","type":"uint256"},{"internalType":"uint256","name":"accMoussePerShare","type":"uint256"},{"internalType":"uint16","name":"depositFeeBP","type":"uint16"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"refBonusBP","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"referredCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"referrers","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"uint16","name":"_depositFeeBP","type":"uint16"},{"internalType":"bool","name":"_withUpdate","type":"bool"}],"name":"set","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_devaddr","type":"address"}],"name":"setDevAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_feeAddress","type":"address"}],"name":"setFeeAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"startTimeHarvest","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalAllocPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalLockedUpRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_moussePerTime","type":"uint256"}],"name":"updateEmissionRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_harvestTime","type":"uint256"}],"name":"updateHarvestTime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"updatePool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newRefBonusBp","type":"uint256"}],"name":"updateReferralBonusBp","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_startTimeHarvest","type":"uint256"}],"name":"updateStartTimeHarvest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"},{"internalType":"uint256","name":"rewardLockedUp","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]
    
  async function main() {
      const App = await init_ethers();
  
      _print(`Initialized ${App.YOUR_ADDRESS}\n`);
      _print("Reading smart contracts...\n");
  
     const MOUSSE_CHEF_ADDR = "0x475B696d9414Fb7d43ceFce8CeC6b0c73D00da06";
     const rewardTokenTicker = "MOUSSE";
     const rewardBUSDTokenTicker = "BUSD";
     const MOUSSE_CHEF = new ethers.Contract(MOUSSE_CHEF_ADDR, MOUSSE_CHEF_ABI, App.provider);
     
     const startBlock = await MOUSSE_CHEF.startBlock();
     const currentBlock = await App.provider.getBlockNumber();
  
     let rewardsPerWeek = 0
     if(currentBlock < startBlock){
       _print(`Rewards start at block ${startBlock}\n`);
     }else{
      rewardsPerWeek = await MOUSSE_CHEF.moussePerTime() /1e18
          * 604800 / 3;
     }
    
      const tokens = {};
      const prices = await getBscPrices();
  
      await loadBscChefContract(App, tokens, prices, MOUSSE_CHEF, MOUSSE_CHEF_ADDR, MOUSSE_CHEF_ABI, rewardTokenTicker,
          "mousse", null, rewardsPerWeek, "pendingMousse", [1]);
  
      hideLoading();
    }
  
