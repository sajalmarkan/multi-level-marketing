const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("mlm contract",function(){
    let owner;
    let user1;
    let user2;
    let user3;
    let user4;
    let user5;
    let HardhatMultiLevelMarkeing;

    beforeEach(async function(){
        [owner, user1, user2, user3, user4, user5] = await ethers.getSigners();
 
        MultiLevelMarketing= await ethers.getContractFactory("multiLevelMarkeing");
        HardhatMultiLevelMarkeing = await MultiLevelMarketing.deploy();
    });
    it("should set owner correctly",async function(){
        const ContractOwner = await HardhatMultiLevelMarkeing.owner();
        expect(ContractOwner).to.equal(owner.address);
    });
    it("should allow user to participate", async function(){
    
        await HardhatMultiLevelMarkeing.connect(user1).marketing(owner.address,{value : ethers.parseEther("1")});
        expect(await HardhatMultiLevelMarkeing.user(user1.address)).to.equal(true);
    });
    it("should not allow user to register again",async function(){
        await HardhatMultiLevelMarkeing.connect(user1).marketing(owner.address,{value : ethers.parseEther("1")});
        await HardhatMultiLevelMarkeing.user(user1.address);
        await expect( HardhatMultiLevelMarkeing.connect(user1).marketing(user1.address,{value : ethers.parseEther("1")})).to.revertedWith('user is already available with us')
    });
    it("give ethers for registering",async function(){
        await expect( HardhatMultiLevelMarkeing.connect(user1).marketing(owner.address,{value : ethers.parseEther("0")})).to.revertedWith("give some money");
    });
    it("head not available", async function(){
        await expect( HardhatMultiLevelMarkeing.connect(user2).marketing(user1.address,{value : ethers.parseEther("1")})).to.revertedWith("head is not available with us");
    });
    it("should increase the total users", async function(){
        await HardhatMultiLevelMarkeing.connect(user1).marketing(owner.address,{value : ethers.parseEther("1")});
        expect(await HardhatMultiLevelMarkeing.totalusers()).to.equal(2);
    });
    it("should send ethers", async function(){
        const initialbalance= await ethers.provider.getBalance(owner.address);
        await HardhatMultiLevelMarkeing.connect(user1).marketing(owner.address,{value : ethers.parseEther("1")});
        const finalBalance= await ethers.provider.getBalance(owner.address);
        const expectedBalnce=initialbalance+(ethers.parseEther("0.05"));
        expect(finalBalance).to.equal(expectedBalnce);
    } );
});