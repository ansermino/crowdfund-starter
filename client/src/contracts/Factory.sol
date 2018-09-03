pragma solidity ^0.4.24;

import './Campaign.sol';

contract Factory{

    uint public currentId;

    event NewCampaign(address _campaignAddress);

    mapping(uint => address) private campaignInfo;

    function newCampaign(string _name, address _beneficiary, uint _goal, uint _duration) public returns (uint) {
        currentId++;
        Campaign c = new Campaign(_name, _beneficiary, _goal, _duration);
        campaignInfo[currentId] = c;
        emit NewCampaign(c);
        return currentId;
    }

    function getCampaignInfo(uint _id) public view returns (address) {
        return campaignInfo[_id];
    }
}
