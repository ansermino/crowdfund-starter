pragma solidity ^0.4.24;

contract Campaign {

    uint public campaignId;
    string public name;

    address public beneficiary;
    uint public goal;
    uint public deadline;

    mapping (address => uint) private funders;

    address[] totalFundersArr;

    event Contribution(uint _amount, uint _amountRemaining, uint _timestamp);

    constructor(string _name, address _beneficiary, uint _goal, uint _duration) public {
        name = _name;
        beneficiary = _beneficiary;
        goal = _goal;
        deadline  = now + _duration;
    }

    function currentFunding() public view returns (uint){
        return address(this).balance;
    }

    function totalFunders() public view returns (uint){
        return totalFundersArr.length;
    }

    function contribute(address _funderAddr) public payable {
        if(funders[_funderAddr] == 0) totalFundersArr.push(_funderAddr);
        funders[_funderAddr] += msg.value;
        emit Contribution(msg.value, goal - address(this).balance, now);
    }

    function payout() public {
        require(now > deadline && address(this).balance >= goal);
        beneficiary.transfer(address(this).balance);
    }

    function refund(address _funderAddr) public {
        require(now > deadline && address(this).balance < goal);
        uint amountToSend = funders[_funderAddr];
        funders[_funderAddr] = 0;
        _funderAddr.transfer(amountToSend);
    }

    function disable() public {
        require(address(this).balance != 0 && now > deadline);
        selfdestruct(beneficiary);
    }
}


