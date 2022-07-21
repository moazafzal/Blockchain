var DappToken = artifacts.require("./DappToken.sol");

contract('DappToken' , function(){
    it('set the total supply uppon depploy',function(){
        return DappToken.deployed().then(function(instance){
            tokeninstance = instance;
            return tokeninstance.totalSupply();
        }).then(function(totalSupply){
            assert.equal(totalSupply.toNumber(),2000,'set the total number 1000');
        })
    });
});