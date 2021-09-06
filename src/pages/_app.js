import "../../styles/globals.css";
import Link from "next/link";
import styled from "styled-components";
import getBlockchain from "../ethereum";
import { useEffect, useState } from "react";
import { AuthProvider } from "../context/context";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const Header = styled.div`
  width: 100vw;
  height: 60px;
  background-color: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  display: flex;
  align-items: center;
  color: #a1a1a1;
`;

export const P = styled.p`
  /* word-wrap: break-word; */
  background-color: black;
  font-family: monospace;
  margin-left: 5px;
  padding: 2px;

  float: right;
`;

export const P2 = styled.p`
  color: ${(props) => (props.which === 0 ? "#d1d1d1" : "red")};
  /* color: ${(props) => (props.which === whichTab ? "red" : "#d1d1d1")}; */
  margin-left: 10px;

  :hover {
    color: red;
  }
`;

function MyApp({ Component, pageProps }) {
  const [address, setAddress] = useState("");
  const [provider, setProvider] = useState(undefined);
  const [whichTab, setWhichTab] = useState(0);
  // #a1a1a1

  useEffect(() => {
    const init = async () => {
      const { nft } = await getBlockchain();
      setAddress(nft.provider.provider.selectedAddress);
    };
    init();
  }, []);

  return (
    <AuthProvider>
      <Container>
        <Header>
          <Link href="/">
            <a onClick={() => setWhichTab(0)}>
              <P2 style={{ color: whichTab == 0 ? "red" : "#d1d1d1" }}>Home</P2>
            </a>
          </Link>
          <Link href="/market">
            <a onClick={() => setWhichTab(1)}>
              <P2 style={{ color: whichTab == 1 ? "red" : "#d1d1d1" }}>
                Market
              </P2>
            </a>
          </Link>

          <div style={{ width: "100vw", marginRight: "100px" }}>
            <P style={{ fontSize: 20 }}>account: {address ? address : "0x0"}</P>
          </div>
        </Header>
        <Component {...pageProps} />
      </Container>
    </AuthProvider>
  );
}

export default MyApp;
