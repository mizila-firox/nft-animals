// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

import "../node_modules/@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract NFT is ERC721 {
    uint256 public nextTokenId;
    address public admin;

    struct Nft {
        uint256 id;
        string name;
        string imageUrl;
        uint256 date;
        address owner;
        uint256 price;
    }

    mapping(address => mapping(uint256 => Nft)) public nfts;
    mapping(uint256 => Nft) public nftsMarket;

    constructor() ERC721("Pixel Art", "PAR") {
        admin = msg.sender;

        _createMarket("fox", "http://localhost:3000/three.png");
        _createMarket("cat", "http://localhost:3000/four.png");
        _createMarket("whale", "http://localhost:3000/five.png");
        _createMarket("cat", "http://localhost:3000/six.jpeg");
        _createMarket("dog", "http://localhost:3000/seven.png");
    }

    function _createMarket(string memory _name, string memory _imageUrl)
        internal
    {
        require(msg.sender == admin, "you're not allowed. must be admin");

        _safeMint(address(this), nextTokenId);
        Nft memory n = Nft({
            id: nextTokenId,
            name: _name,
            imageUrl: _imageUrl,
            date: block.timestamp,
            owner: address(this),
            price: 0.01 ether
        });

        nftsMarket[nextTokenId] = n;
        nextTokenId++;
    }

    function getNfts(address addr, uint256 i)
        external
        view
        returns (Nft memory)
    {
        return nfts[addr][i];
    }

    function getNftsMarket(uint256 i) external view returns (Nft memory) {
        return nftsMarket[i];
    }

    function mint(
        address to,
        string memory name,
        string memory imageUrl
    ) external payable {
        require(msg.sender == admin, "must be admin");
        require(msg.value == 0.01 ether, "Value must be equal to 0.01 ether");
        _safeMint(to, nextTokenId);

        Nft memory n = Nft({
            id: nextTokenId,
            name: name,
            imageUrl: imageUrl,
            date: block.timestamp,
            owner: to,
            price: 0.01 ether
        });

        nfts[to][nextTokenId] = n;

        nextTokenId++;
    }

    function _baseURI() internal pure override returns (string memory) {
        return "";
    }
}
