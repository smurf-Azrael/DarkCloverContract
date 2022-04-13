async function main() {
  const team_address = "0x24be59F617ff5B93528F1471b80c1592eFfdF423";
  const marketing_address = "0x6B630A52F5Ec882A78B504065AED16a8C704c609";
  // const seedFT_address = "0x20bdC6eB34DD9EC8Ea4aB130880359e4338c8c8F"
  // const seedPotion_address = "0x98Cc9036e2e5fE7EEeD212298E57D62C806fd959"
  // const seedNFT_address = "0x204333f64F9dbBbfd997C57dFbABF7c111E6a89F"
  // const seedController_address = "0x6461DAce9C2eB8d440bc483FA2755d332333497f"
  // const seedPicker_address = "0xd5176f8FecB1114391818CdACe72b9A867b8CecF"


  const seedFT = await ethers.getContractFactory("CloverDarkSeedToken");
  // const seedNFT = await ethers.getContractFactory("CloverDarkSeedNFT");
  // const seedController = await ethers.getContractFactory("CloverDarkSeedController");
  // const seedPicker= await ethers.getContractFactory("CloverDarkSeedPicker");
  // const seedStake= await ethers.getContractFactory("CloverDarkSeedStake" ,{
  //   libraries: {
  //     IterableMapping: "0xdfE52d83395cdB4276E7118cdd90d4f915888Cb6",
  //   }
  // });
  // const seedPotion= await ethers.getContractFactory("CloverDarkSeedPotion");

  const seedFTContract = await seedFT.deploy(team_address, marketing_address);
  console.log("CloverDarkSeedToken deployed to:", seedFTContract.address);
  const seedFT_address = seedFTContract.address;

  // const seedPotionContract = await seedPotion.deploy(marketing_address);
  // console.log("CloverDarkSeedPotion deployed to:", seedPotionContract.address);
  // const seedPotion_address = seedPotionContract.address;

  // const seedNFTContract = await seedNFT.deploy(seedFT_address);
  // console.log("CloverDarkSeedNFT deployed to:", seedNFTContract.address);
  // const seedNFT_address = seedNFTContract.address;

  // const seedControllerContract = await seedController.deploy(team_address, seedFT_address, seedNFT_address, seedPotion_address) ;
  // console.log("CloverDarkSeedController deployed to:", seedControllerContract.address);
  // const seedController_address = seedControllerContract.address;

  // const seedPickerContract = await seedPicker.deploy(seedNFT_address, seedController_address) ;
  // console.log("CloverDarkSeedPicker deployed to:", seedPickerContract.address);
  // const seedPicker_address = seedPickerContract.address;

  // const seedStakeContract = await seedStake.deploy(marketing_address, seedFT_address, seedNFT_address, seedController_address, seedPicker_address);
  // console.log("CloverDarkSeedStake deployed to:", seedStakeContract.address);

}

main()
.then(() => process.exit(0))
.catch((error) => {
  console.error(error);
  process.exit(1);
});