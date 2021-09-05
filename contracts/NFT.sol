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
    }

    mapping(address => mapping(uint256 => Nft)) nfts;

    constructor() ERC721("My Nft", "NFT") {
        admin = msg.sender;
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
            owner: to
        });

        nfts[to][nextTokenId] = n;

        nextTokenId++;
    }

    function _baseURI() internal pure override returns (string memory) {
        return "";
    }
}
