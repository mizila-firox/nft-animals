import "../../styles/globals.css";
import Link from "next/link";
import styled from "styled-components";

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
  color: red;
  margin-left: 10px;
`;

function MyApp({ Component, pageProps }) {
  return (
    <Container>
      <Header>
        <Link href="/">
          <a>
            <P2>Home</P2>
          </a>
        </Link>
        <Link href="/market">
          <a>
            <P2>Market</P2>
          </a>
        </Link>

        <div style={{ width: "100vw", marginRight: "100px" }}>
          <P style={{ fontSize: 20 }}> account: 0x0</P>
        </div>
      </Header>
      <Component {...pageProps} />
    </Container>
  );
}

export default MyApp;
