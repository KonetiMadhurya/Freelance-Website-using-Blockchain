//SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;

//INTERNAL IMPORT FOR NFT OPENZEPPELIN
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/IERC721Metadata.sol";

import "hardhat/console.sol";

contract nftMarket is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    Counters.Counter private _itemsSold;
    uint256 listingPrice = 0.0025 ether;

    address payable owner;

    struct MarketItem {
        uint256 itemId;
        address nftContract;
        uint256 tokenId;
        address payable seller;
        address payable owner;
        uint256 price;
    }

    mapping(uint256 => MarketItem) private idMarketItem;

    struct MarketItem {
        bool sold;
        uint256 tokenId;
        address payable seller;
        address payable owner;
        uint256 price;
    }

    event idMarketItemCreated(
        bool sold,
        uint256 indexed tokenId,
        address seller,
        address owner,
        uint256 price
    );

    modifier onlyOwner() {
        require(msgSender() == owner, "Ownable: caller is not the owner");
        _;
    }

    constructor() ERC721("NFT Tokenverse", "MPNFT") {
        owner == payable(msg.sender);
    }

    function updateListingPrice(uint256_listingPrice) public payable onlyOwner {
        require(
            _msgSender() == ownerOf(_tokenId),
            "You are not the owner of this token"
        );
        idMarketItem[_tokenId].price = _price;
    }

    function getListingPrice() public view returns (uint256) {
        return listingPrice;
    }

    //Let create "CREATE NFT TOKEN FUNCTION

    function createToken(string memory tokenURI, uint256 price)
        public
        payable
        returns (uint256)
    {
        _tokenIds.increment(); //when someone creates a new NFT, this value is incremented
        uint256 newTokenId = _tokenIds.current();

        _mint(msg.sender, newTokenId);
        _setTokenURI(newTokenId, tokenURI);
        createMarketItem(newTokenId, price);

        return newTokenId;
    }

    function createMarketItem(uint256 tokenId, uint256 price) private {
        require(price > 0, "Price must be at least 1 wei");
        require(
            msg.value == listingPrice,
            "Price must be equal to listing price"
        );
        idMarketItem[tokenId] = MarketItem(
            false,
            tokenId,
            payable(msg.sender),
            payable(address(this)),
            price
        );

        _transfer(msg.sender, address(this), tokenId);

        emit idMarketItemCreated(
            false,
            tokenId,
            msg.sender,
            address(this),
            price
        );
    }

    // FUNCTION FOR RESALE TOKEN

    function reSellToken(uint256 tokenId, unit256 price) public payable {
        require(
            idMarketItem[tokenId].owner == msg.sender,
            "You are not the owner of this token"
        );
        require(
            msg.value == listingPrice,
            "Price must be equal to listing price"
        );

        idMarketItem[tokenId].seller = payable(msg.sender);
        idMarketItem[tokenId].owner = payable(address(this));
        idMarketItem[tokenId].sold = false;
        idMarketItem[tokenId].price = price;

        _itemsSold.decrement();
        _transfer(msg.sender, address(this), tokenId);
    }
    
    //FUNCTION CREATEMARKETSALE

    function createMarketSale(uint256 tokenId) public payable {
        uint256 price = idMarketItem[tokenId].price;
        require(msg.value == price, "Please submit the asking price to complete the purchase");

       
        idMarketItem[tokenId].owner = payable(msg.sender);
        idMarketItem[tokenId].sold = true;
        idMarketItem[tokenId].owner = payable(address(0));

        _itemsSold.increment();
        _transfer(address(this), msg.sender, tokenId);

        payable(owner).transfer(listingPrice);
        payable(idMarketItem[tokenId].seller).transfer(msg.value);
    }

    //GETTING UNSOLD NFT DATA

    fnction fetchMarketItem() public view returns(MarketItem[] memory){
        uint256 itemCount = _tokenIds.current();
        uint256 unsoldItemCount = _tokenIds.current() - _itemsSold.current();
        uint256 currentIndex = 0;

        MarketItem[] memory items = new MarketItem[](unsoldItemCount);
        for(uint256 i = 0; i < itemCount; i++){
            if(idMarketItem[i + 1].owner == address(this)){
                uint256 currentId = i + 1;
                MarketItem storage currentItem = idMarketItem[currentId];
                items[currentIndex] = currentItem;
                currentIndex += 1;
            }
        }
        return items;
    }

    //PURCHASE ITEM

    function fetchMyNFT() public view returns(MarketItem[] memory){
        uint256 totalItemCount = _tokenIds.current();
        uint256 itemCount = 0;
        uint256 currentIndex = 0;

        for(uint256 i = 0; i < totalItemCount; i++){
            if(idMarketItem[i + 1].owner == msg.sender){
                itemCount += 1;
            }
        }

        MarketItem[] memory items = new MarketItem[](itemCount);
        for(uint256 i = 0; i < totalItemCount; i++){
            if(idMarketItem[i + 1].owner == msg.sender){
                uint256 currentId = i + 1;
                MarketItem storage currentItem = idMarketItem[currentId];
                items[currentIndex] = currentItem;
                currentIndex += 1;
            }
        }
        return items;
    }

    //SINGLE USER ITEMS

    function fetchItemsListed() public view returns(MarketItem[] memory){
        uint256 totalCount = _tokenIds.current();
        uint256 itemCount = 0;
        uint256 currentIndex = 0;

        for(uint256 i = 0; i < totalCount; i++){
            if(idMarketItem[i + 1].seller == msg.sender){  //if the address of the seller and the address of the message sender are the same
                itemCount += 1;
            }
        }

        MarketItem[] memory items = new MarketItem[](itemCount);
        for(uint256 i = 0; i < totalCount; i++){
            if(idMarketItem[i + 1].seller == msg.sender){
                uint256 currentId = i + 1;
                MarketItem storage currentItem = idMarketItem[currentId];
                items[currentIndex] = currentItem;
                currentIndex += 1;
            }
        }
        return items;
    }
}
