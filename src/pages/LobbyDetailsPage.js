import {
  Avatar,
  Badge,
  Button,
  Card,
  Col,
  Container,
  Grid,
  Row,
  Spacer,
  Text,
  Tooltip,
  Loading
} from "@nextui-org/react";
import TopNavbar from "../components/navbar/TopNavbar";
import { useEffect, useState } from "react";
import MemberData from "../components/LobbyDetailsPage/MemberData";
import WaitlistData from "../components/LobbyDetailsPage/WaitlistData";
import {
  AddUser,
  Calendar,
  ChevronRight,
  InfoSquare,
  Location,
  Search,
  Star,
} from "react-iconly";
import MainCard from "../components/Reusable/MainCard";
import lobbies from "../data/lobbies.json";
import { useLocation } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../styles/LobbyPage.css";
import LazyLoad from "react-lazy-load";
import CategoryCardsBig from "../components/Main/CategoryCardsBig";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import useDrag from "../hooks/useDrag";
import axios from "axios";
import SERVERURL from "../lib/SERVERURL";

function LobbyDetailsPage() {
  const [lobby, setLobby] = useState(null);
  const [users, setUsers] = useState([]);
  const [admin, setAdmin] = useState(null);
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

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  useEffect(() => {
    const fetchLobby = async () => {
      try{
        const query = new URLSearchParams(window.location.search);
        const lobbyId = query.get("lobbyId");
        const res = await axios.get(`${SERVERURL}/lobbies/lobby/${lobbyId}`, {withCredentials: true});
        const users = await axios.get(`${SERVERURL}/lobbies/users/${lobbyId}`, {withCredentials: true});
        const admin = await axios.get(`${SERVERURL}/users/single/${res.data.admins[0]}`, {withCredentials: true});
        setLobby(res.data);
        setUsers(users.data);
        setAdmin(admin.data);
      }catch(err){
        console.log(err)
      }
    }
    fetchLobby();
  }, [])
  // const query = useQuery();
  // const lobbyId = query.get("lobbyId");
  // // const foundLobby = lobbies.find((lobby) => lobby._id === lobbyId);
  // // const data = foundLobby.pictures.map((url) => ({ image: url }));

  // const sameCategoryLobbies = lobbies.filter(
  //   (lobbies) => lobbies.category === lobby.category && lobbies._id !== lobbyId
  // );

  // console.log(sameCategoryLobbies);

  return (
    <>
      <header>
        <TopNavbar />
      </header>
      {lobby ? <main>
        <MainCard
          children={
            <>
              <Row justify="center">
                <Text css={{ marginBottom: 0, textAlign: "center" }}>
                  {lobby.category}
                </Text>
              </Row>
              <Row justify="center">
                <Text h2 css={{ marginBottom: 0, textAlign: "center" }}>
                  {lobby.activity}
                </Text>
              </Row>

              <Card.Body>
                <Row justify="center">
                  {lobby.pictures.length > 0 && (
                    <Carousel
                      showArrows={false}
                      showStatus={false}
                      showIndicators={true}
                      infiniteLoop={true}
                      showThumbs={true}
                      autoPlay={false}
                      stopOnHover={true}
                      swipeable={true}
                      dynamicHeight={false}
                      emulateTouch={true}
                      autoFocusable={true}
                      width={400}
                    >
                      {lobby.pictures.map((url) => ({ image: url })) &&
                        lobby.pictures.map((url) => ({ image: url })).map((item, index) => (
                          <div key={index} className="galleryContainer">
                            <img
                              className="galleryImg"
                              src={item.image}
                              alt={`Slide ${index}`}
                            />
                          </div>
                        ))}
                    </Carousel>
                  )}
                  {lobby.pictures.length === 0 && (
                    <Carousel
                      showArrows={false}
                      showStatus={false}
                      showIndicators={true}
                      infiniteLoop={true}
                      showThumbs={true}
                      autoPlay={false}
                      stopOnHover={true}
                      swipeable={true}
                      dynamicHeight={false}
                      emulateTouch={true}
                      autoFocusable={true}
                      width={400}
                    >
                      <div className="galleryContainer">
                        <img
                          className="galleryImg"
                          src={lobby.defaultPicture}
                          alt={`Slide 1`}
                        />
                      </div>
                    </Carousel>
                  )}
                </Row>
                <Spacer />
                <Row justify="center">
                  <Avatar.Group
                    count={
                      lobby.users.length > 5
                        ? lobby.users.length - 5
                        : ""
                    }
                  >
                    {users.slice(0, 5).map((user) => (
                      <Tooltip content={"@" + user.username} color={"invert"}>
                        <Avatar
                          key={user.username}
                          size="lg"
                          pointer
                          src={
                            user.picture
                          }
                          bordered
                          color="gradient"
                          stacked
                        />
                      </Tooltip>
                    ))}
                  </Avatar.Group>
                </Row>
                <Row justify="center">
                  <Text css={{ textAlign: "center" }}>
                    {lobby.users.length} out of {lobby.capacity}{" "}
                    people joined
                  </Text>
                </Row>
                <Spacer />
                <Container css={{ maxW: 600 }}>
                  {/* <Row justify="center">
                    <Text h3>About Lobby</Text>
                  </Row> */}
                  <Row>
                    <Text>
                      <Calendar
                        style={{
                          height: 16,
                          width: 16,
                          position: "relative",
                          top: 2,
                          padding: 0,
                          marginRight: 4,
                        }}
                        set="bold"
                        primaryColor="#4c8bf5"
                      />
                      <strong>Date: </strong>
                      {lobby.date}
                    </Text>
                  </Row>
                  <Row>
                    <Text>
                      <Location
                        set="bold"
                        primaryColor="#FF3B30"
                        style={{
                          height: 16,
                          width: 16,
                          position: "relative",
                          top: 2,
                          padding: 0,
                          marginRight: 4,
                        }}
                      />
                      <strong>Location: </strong>
                      {lobby.location}
                    </Text>
                  </Row>
                  <Row>
                    <Text css={{ textAlign: "justify" }}>
                      <InfoSquare
                        set="bold"
                        primaryColor="#F4B400"
                        style={{
                          height: 16,
                          width: 16,
                          position: "relative",
                          top: 2,
                          padding: 0,
                          marginRight: 4,
                        }}
                      />
                      <strong>Description: </strong>
                      {lobby.description}
                    </Text>
                  </Row>
                </Container>
                <Spacer y={2} />
                <Grid.Container justify="center">
                  <Button
                    color=""
                    css={{
                      color: "white",
                      backgroundColor: "$black",
                      fontWeight: "700",
                    }}
                    iconRight={<ChevronRight set="bold" />}
                  >
                    Join Lobby
                  </Button>
                </Grid.Container>
              </Card.Body>
            </>
          }
        />
        <Spacer />

        <MainCard
          children={
            <>
              <Text h3 css={{ textAlign: "center", fontWeight: 600 }}>
                Admin
              </Text>

              <Grid.Container justify="center">
                <Badge
                  content={<AddUser set="bold" />}
                  variant={"flat"}
                  color={"default"}
                  horizontalOffset={"-5%"}
                  css={{
                    cursor: "pointer",
                  }}
                >
                  <Grid>
                    <Row>
                      <Col css={{ display: "flex" }}>
                        <Badge
                          variant={"flat"}
                          content={"5.0"}
                          placement={"top-left"}
                          color={"success"}
                        >
                          <Avatar
                            src={
                              admin.picture
                            }
                            size={"lg"}
                          />
                        </Badge>
                        <div style={{ margin: "4px 0 0 12px" }}>
                          <Text h4 css={{ marginBottom: 0 }}>
                            {admin.firstName + " " + admin.lastName}
                          </Text>
                          <Text h5 css={{ fontWeight: 400 }}>
                            {"@" + admin.username}
                          </Text>
                        </div>
                      </Col>
                    </Row>
                  </Grid>
                </Badge>
              </Grid.Container>

              <Spacer y={0.4} />
              {/* <Row justify="center">
                <Text css={{ marginBottom: 0, marginTop: 2 }} h4>
                  Rating:{" "}
                </Text>
                <Spacer x={0.3} />
                <Star set="bold" primaryColor="gold" />
                <Star set="bold" primaryColor="gold" />
                <Star set="bold" primaryColor="gold" />
                <Star set="bold" primaryColor="gold" />
                <Star set="bold" primaryColor="gold" />
              </Row>
              <Spacer y={0.2} />
              <Row justify="center">
                <small>Based on 32 reviews</small>
              </Row> */}
            </>
          }
        />
        <Spacer />
        <MainCard
          children={
            <>
              {/* <Row justify="center">
                <Text h3>Recommended Lobbies</Text>
              </Row> */}

              <>
                <ScrollMenu
                  className="horizontal-scroll-container"
                  onWheel={onWheel}
                  onMouseDown={() => dragStart}
                  onMouseUp={() => dragStop}
                  onMouseMove={handleDrag}
                >
                  {/* {sameCategoryLobbies.map((lobby, index) => {
                    return (
                      <LazyLoad
                        height={300}
                        offsetVertical={100}
                        debounce={false}
                        throttle={50}
                        key={index}
                      >
                        <CategoryCardsBig
                          props={lobby}
                          isDragging={dragging}
                          key={index}
                        />
                      </LazyLoad>
                    );
                  })} */}
                </ScrollMenu>
              </>
            </>
          }
        />
      </main> : <Loading size="xl" css={{
  position: "fixed",
  top: "50%",
  left: "50%",
}}/>}
      <footer>
          <Spacer y={2}/>
      </footer>
    </>
  );
}

export default LobbyDetailsPage;
