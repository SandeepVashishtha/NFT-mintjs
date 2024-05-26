/*
Assessment Requirements:
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// array for storing Numbers of NFTs

let NFTs = [];

// Functions that will store data of the NFTs
// Function having 3 parameters ie name , Creator Name , And brief description about nft

function mintNFT(name, creator, description) {
    let NFT = {
        name: name,
        creator: creator,
        description: description,
    };

    NFTs.push(NFT);
}

// fun that loop thorugh the NFTs and print the data of NFTs

function listNFTs() {
    for(let i = 0; i < NFTs.length; i++) {
        console.log("Name: " + NFTs[i].name);
        console.log("Creator: " + NFTs[i].creator);
        console.log("Description " + NFTs[i].description);
        console.log('----------------------------------');
    }
}

// Function to get the total supply of NFTs
function getTotalSupply() {
    return NFTs.length;
}

mintNFT("Poglin: Nycra" , "GachaMonsters" , "Poglin is not just your ordinary PFP (Profile Picture) collection; it's an exceptional project with a commitment to delivering real value to its holders.");
mintNFT("Persona", "CC1AC5" , "Timefall Valley is a small city that has always remained isolated from the outside world.");
mintNFT("SmallBrosNFT","smallbrosnft-deployer", "8888 Small Bros that are here to remind you you’re never alone in this journey!");
mintNFT("PRSN #8286" , "PersonaDeployer" , "Persona is a state-of-the-art avatar collection at the heart of the Unagi gaming ecosystem.")
listNFTs();
console.log("Total Supply: " + getTotalSupply());
