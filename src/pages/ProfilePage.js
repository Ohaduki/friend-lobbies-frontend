import {
  Avatar,
  Badge,
  Button,
  Col,
  Container,
  Grid,
  Row,
  Spacer,
  Text,
} from "@nextui-org/react";
import TopNavbar from "../components/navbar/TopNavbar";
import BGsvg from "../assets/BGsvg";
import "../styles/Main.css";

import MainCard from "../components/Reusable/MainCard";
import interest_selection from "../data/interest_selection.json";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import { useEffect, useContext } from "react";
import useDrag from "../hooks/useDrag";
import { useNavigate } from "react-router-dom";
import { Location } from "react-iconly";
import UserContext from "../context/UserContext";

function ProfilePage() {
  const {user, setUser} = useContext(UserContext);
  const navigate = useNavigate();

  const { dragStart, dragStop, dragMove, dragging } = useDrag();
  const handleDrag =
    ({ scrollContainer }) =>
    (ev) =>
      dragMove(ev, (posDiff) => {
        if (scrollContainer.current) {
          scrollContainer.current.scrollLeft += posDiff;
        }
      });

  function onWheel(apiObj, ev) {
    const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

    if (isThouchpad) {
      ev.stopPropagation();
      return;
    }

    if (ev.deltaY > 0) {
      apiObj.scrollNext();
    } else if (ev.deltaY < 0) {
      apiObj.scrollPrev();
    }
  }

  return (
    <>
      <header>
        <TopNavbar />
      </header>
      <main>
        <Text h2 css={{ textAlign: "center" }}>
          Profile Page
        </Text>
        <MainCard
          children={
            <>
              <Grid.Container>
                <Grid style={{ width: "100%" }}>
                  <Row>
                    <Col css={{ margin: "auto" }}>
                      <Avatar
                        src={user.picture}
                        css={{ size: "$20", margin: "auto" }}
                      />
                    </Col>
                  </Row>
                  <center>
                    <Text h3 css={{ marginTop: "2vh" }}>
                      {user.firstName} {user.lastName}
                    </Text>

                    {/* <Text>
                      <Location
                        set="bold"
                        style={{ height: 14, color: "red" }}
                      />
                      Tel Aviv, Israel{" "}
                    </Text> */}
                  </center>

                  <Grid.Container style={{ marginTop: "4vh" }}>
                    <Grid css={{ margin: "auto" }}>
                      <div
                        style={{
                          margin: 0,
                          marginRight: "4vw",
                          marginLeft: "2vw",
                        }}
                      >
                        <Text css={{ margin: 0, textAlign: "center" }} h4>
                          100+
                        </Text>
                        <Text css={{ textAlign: "center" }}>Friends</Text>
                      </div>
                    </Grid>
                    <Grid css={{ margin: "auto" }}>
                      <div style={{ margin: 0, marginRight: "4vw" }}>
                        <Text css={{ margin: 0, textAlign: "center" }} h4>
                          14
                        </Text>
                        <Text css={{ textAlign: "center" }}>Lobbies</Text>
                      </div>
                    </Grid>
                    <Grid css={{ margin: "auto" }}>
                      <div style={{ margin: 0, marginRight: "4vw" }}>
                        <Text css={{ margin: 0, textAlign: "center" }} h4>
                          23
                        </Text>
                        <Text css={{ textAlign: "center" }}>Achievements</Text>
                      </div>
                    </Grid>
                    <Grid css={{ margin: "auto" }}>
                      <div style={{ margin: 0, marginRight: "4vw" }}>
                        <Text css={{ margin: 0, textAlign: "center" }} h4>
                          12
                        </Text>
                        <Text css={{ textAlign: "center" }}>
                          Lobbies Joined
                        </Text>
                      </div>
                    </Grid>
                    <Grid css={{ margin: "auto" }}>
                      <div style={{ margin: 0, marginRight: "4vw" }}>
                        <Text css={{ margin: 0, textAlign: "center" }} h4>
                          5
                        </Text>
                        <Text css={{ textAlign: "center" }}>
                          Lobbies Created
                        </Text>
                      </div>
                    </Grid>
                  </Grid.Container>
                  <Spacer style={{ width: "100%" }} y={2} />
                  <Row></Row>
                  <Text
                    css={{ textAlign: "justify", margin: "auto", maxW: 600 }}
                  >
                    <h4 css={{ margin: 0 }}>Bio:</h4>
                    {user.bio ? user.bio : "No bio yet"}
                  </Text>
                </Grid>
                <Spacer y={4} />
                <Button
                  auto
                  color=""
                  css={{
                    color: "white",
                    backgroundColor: "$black",
                    fontWeight: "700",
                    margin: "auto",
                  }}
                >
                  Change Information
                </Button>
              </Grid.Container>
            </>
          }
        />
        <Spacer />
        <MainCard
          style={{ marginTop: "2vh" }}
          children={
            <>
              <Grid.Container>
                <Grid>
                  <Row>
                    <Text h4>Interests: </Text>
                  </Row>
                </Grid>
              </Grid.Container>

              <Grid>
                <ScrollMenu
                  onWheel={onWheel}
                  onMouseDown={() => dragStart}
                  onMouseUp={() => dragStop}
                  onMouseMove={handleDrag}
                  style={{ display: "flex" }}
                >
                  {interest_selection.map((interest, index) => (
                    <Badge
                      style={{ marginRight: 8 }}
                      isSquared
                      variant={"flat"}
                      css={{ backgroundColor: "$white" }}
                      key={index}
                    >
                      {interest.interest}
                    </Badge>
                  ))}
                </ScrollMenu>
              </Grid>
              <Button
                light
                flat
                auto
                color=""
                onPress={() => navigate("/interest-selection")}
              >
                Change Interests?
              </Button>
            </>
          }
        ></MainCard>
      </main>
    </>
  );
}

export default ProfilePage;
