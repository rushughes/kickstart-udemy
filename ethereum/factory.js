import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';
const { campaignFactoryAddress } = require('../config');

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x7cf827a25402e8Ee4F790355D155B42542B81194'
);

export default instance;
