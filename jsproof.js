// Array to store all NFTs
let nfts = [];

// Function to mint an NFT with various metadata attributes
const mintNFT = (name, artist, eyeColor, shirtType, bling, description, creationDate) => {
  const nft = {
    name,
    eyeColor,
    shirtType,
    bling,
    artist,
    description,
    creationDate,
  };
  nfts.push(nft);
};

// Function to print the details of all NFTs
const listNFTs = () => {
  nfts.forEach((nft, index) => {
    console.log(`NFT ${index + 1}:`);
    console.log(`Name of NFT: ${nft.name}`);
    console.log(`Artist Name: ${nft.artist}`);
    console.log(`Eye Color: ${nft.eyeColor}`);
    console.log(`Shirt Type: ${nft.shirtType}`);
    console.log(`Bling: ${nft.bling}`);
    console.log(`Description: ${nft.description}`);
    console.log(`Date Of Creation: ${nft.creationDate}`);
    console.log('---------------------------------------------------');
  });

  console.log(`Total NFT Supply: ${nfts.length}`);
};

// Minting some example NFTs with various metadata attributes
mintNFT("Dribblie", "Anmol", "Blue", "Chainmail", "Golden Crown", "A unique piece depicting the future of digital art.", "2024-06-01");
mintNFT("Flyfish Club", "Bobby", "Green", "Robe", "Silver Amulet", "Exclusive membership to a culinary experience.", "2024-06-02");
mintNFT("Lucky Block NFTs", "Anurag", "Brown", "Ninja Suit", "Throwing Stars", "A lucky charm with a hint of mystery.", "2024-06-03");
mintNFT("Azuki", "Minaz", "Brown", "Henley", "Golden Bracelet", "A blend of traditional and modern styles.", "2024-06-04");

listNFTs();
