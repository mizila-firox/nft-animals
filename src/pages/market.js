import React, { useState, useEffect } from "react";
import styled from "styled-components";
import getBlockchain from "../ethereum";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const P = styled.p`
  /* word-wrap: break-word; */
  /* background-color: black; */
  color: black;
  font-size: 1.1em;
  font-family: monospace;
  margin-left: 5px;
  padding: 1px;
`;

export const ExteriorCard = styled.div`
  min-width: 320px;
  min-height: 170px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  margin: 10px;
  border: 1.2px solid rgba(0, 0, 0, 0.1);

  /* justify-content: center; */
  /* align-items: center; */
`;

export const Card = styled.div`
  grid-area: ca;
  min-width: 100px;
  min-height: 100px;
  max-width: 100px;
  max-height: 100px;
  background-color: ${(props) => props.color};
  border-radius: 10px;
  margin: auto;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardFooter = styled.div`
  grid-area: cf;
  min-width: 320px;
  min-height: 50px;
  background-color: rgba(255, 0, 0, 0.5);
  border-radius: 5px;
`;

export const CardItems = styled.div`
  grid-area: ci;
`;

export const CardHolder = styled.div`
  min-width: 320px;
  min-height: 100px;
  /* border-radius: 10px; */
  /* margin: 10px; */
  /* border: 1.2px solid rgba(0, 0, 0, 0.1); */

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    "ca"
    "ci"
    "cf";

  background-color: rgba(255, 255, 255);
  border-radius: 5px;
`;

const Market = () => {
  const [address, setAddress] = useState("");
  const [token, setToken] = useState();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const init = async () => {
      const { nft } = await getBlockchain();
      setToken(nft);
      setAddress(nft.provider.provider.selectedAddress);

      const contract_address = "0xD7aCDa867847F37AEA30ac3279863c0eE6514691";

      const balance = await nft.balanceOf(contract_address);

      console.log(`market balance: ${parseInt(balance)}`);

      for (let i = 0; i < balance; i++) {
        const tokenId = await nft.tokenOfOwnerByIndex(contract_address, i);
        // console.log(parseInt(tokenId));
        const item = await nft.getNftsMarket(parseInt(tokenId));

        const obj = {
          id: item.id,
          name: item.name,
          image: item.imageUrl,
          date: item.date,
          owner: item.owner,
          price: item.price,
        };

        setItems((items) => [...items, obj]);
      }
    };

    init();
  }, []);

  return (
    <Container>
      {items.map((item, key) => {
        return (
          <ExteriorCard key={parseInt(item.id)}>
            {/* {console.log(item)} */}
            <CardHolder>
              <Card color="blue">
                <img src={item.image} width="100px" alt="" />
              </Card>
              <CardItems>
                <P>Name {item.name}</P>
                <P>Owner {item.owner}</P>
                <P>Id {parseInt(item.id)}</P>
                <P>price {parseInt(item.price)}</P>
              </CardItems>
              <CardFooter>qwewq</CardFooter>
            </CardHolder>
          </ExteriorCard>
        );
      })}
    </Container>
  );
};

export default Market;
