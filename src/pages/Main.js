import { Card, Container } from "@nextui-org/react";
import TopNavbar from "../components/navbar/TopNavbar";
import "../styles/Main.css";

import UserInfo from "../components/Main/UserInfo";
import DisplayCategory from "../components/Main/DisplayCategory";
import CategoryName from "../components/Main/CategoryName";
import CategoryCardsBig from "../components/Main/CategoryCardsBig";
import CategoryCardsSmall from "../components/Main/CategoryCardsSmall";

export default function Main() {
  return (
    <>
      <header>
        <TopNavbar />
      </header>
      <main>
        <Container sm style={{ padding: "0px 12px" }}>
          <Card css={{ $$cardColor: "white" }}>
            <Card.Body>
              <UserInfo
                imgSrc={
                  "https://ca.slack-edge.com/T046G9D7MGU-U04ALRSD91T-6a4689126259-512"
                }
                username={"Aviad the King"}
              />
              <DisplayCategory />
              <CategoryName name={"Sports ⚽"} amount={4} />
              <CategoryCardsBig />
              <CategoryName name={"Cooking 🧑‍🍳"} amount={12} />
              <CategoryCardsSmall />
              <CategoryName name={"Cooking 🧑‍🍳"} amount={12} />
              <CategoryCardsBig />
            </Card.Body>
          </Card>
        </Container>
      </main>
    </>
  );
}
