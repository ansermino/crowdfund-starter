pragma solidity ^0.4.24;

import './Factory.sol';

contract Dashboard {

    Factory public database;
    uint public campaignCount;

    constructor(address _factorAddr) public {
        database = Factory(_factorAddr);
    }

    modifier validateAddress(uint _id) {
        require(getCampaignAddress(_id) != address(0));
        _;
    }

    function getCampaignAddress(uint _id) public view returns (address) {
        return database.getCampaignInfo(_id);
    }

    function newCampaign(string _name, address _beneficiary, uint _goal, uint _duration) public {
        database.newCampaign(_name, _beneficiary, _goal, _duration);
        campaignCount++;
    }

    function viewTotalFunders(uint _id) validateAddress(_id) public view returns (uint) {
        Campaign c = Campaign(getCampaignAddress(_id));
        return c.totalFunders();
    }

    function viewCurrentFunding(uint _id) validateAddress(_id) public view returns (uint) {
        Campaign c = Campaign(getCampaignAddress(_id));
        return c.currentFunding();
    }

    function makeContribution(uint _id) validateAddress(_id) public payable {
        require(msg.value > 0);
        Campaign c = Campaign(getCampaignAddress(_id));
        c.contribute.value(msg.value)(msg.sender);
    }

    function getRefund(uint _id) validateAddress(_id) public {
        Campaign c = Campaign(getCampaignAddress(_id));
        c.refund(msg.sender);
    }

    function pushPayout(uint _id) validateAddress(_id) public {
        Campaign c = Campaign(getCampaignAddress(_id));
        c.payout();
    }

    function disableInstance(uint _id) validateAddress(_id) public {
        Campaign c = Campaign(getCampaignAddress(_id));
        c.disable();
    }
}
