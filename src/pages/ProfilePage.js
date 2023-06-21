import { Button, Spacer, Text } from "@nextui-org/react";
import TopNavbar from "../components/navbar/TopNavbar";
import "../styles/Main.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import MainCard from "../components/Reusable/MainCard";
import ProfileHeader from "../components/ProfilePage/ProfileHeader";
import ProfileStats from "../components/ProfilePage/ProfileStats";
import Interests from "../components/ProfilePage/Interests";
import ProfilePageHeader from "../components/ProfilePage/ProfilePageHeader";
import BioArea from "../components/ProfilePage/BioArea";
import EditProfileButton from "../components/ProfilePage/EditProfileButton";

import axios from 'axios';
import jwt_decode from 'jwt-decode';
import getCookie from "../lib/getCookie";
import SERVERURL from "../lib/SERVERURL";

function ProfilePage() {


  // REPLACE WITH FETCHED USER

  const userObject = {
    name: "Aviad",
    surname: "The King",
    phoneNumber: "+972 33 123 45 532",
    profilePhoto:
      "https://ca.slack-edge.com/T046G9D7MGU-U04ALRSD91T-6a4689126259-72",
    location: "Tel Aviv, Israel",
    friends: 123,
    lobbiesJoined: 14,
    lobbiesCreated: 5,
    bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    interests: ["Book Club", "Coding", "Video Games"],
  };

  // const [updatedName, setUpdatedName] = useState(
  //   userObject.name + " " + userObject.surname
  // );
  const [updatedFirstName, setUpdatedFirstName] = useState('');
  const [updatedLastName, setUpdatedLastName] = useState('');
  const [updatedLocation, setUpdatedLocation] = useState('Israel');
  const [updatedBio, setUpdatedBio] = useState("Hello Friend Zone! I'm new here!");
  const [updatedPhoneNumber, setUpdatedPhoneNumber] = useState('');
  const [userPhoto, setUserPhoto] = useState('');
  const [userInterests, setUserInterests] = useState([]);

  const [isUpdating, setIsUpdating] = useState(false);

  const navigate = useNavigate();

  useEffect(()=>{
    const token = getCookie('token');
    if(token){
      const data = jwt_decode(token);
      const { firstName, lastName, picture, interests} = data
      setUpdatedFirstName(firstName);
      setUpdatedLastName(lastName);
      setUserPhoto(picture);
      setUserInterests(interests);
      fetchUserData();

    }
    }, [])

    async function fetchUserData(){
      try {
        const token = getCookie('token');
        const {_id} = jwt_decode(token)
        const res = await axios.get(`${SERVERURL}/users/single/${_id}`, {withCredentials: true})
        const data = res.data;
        setUpdatedPhoneNumber(data.phone);
      } catch (error) {
          console.log(error)
      }
    }

  function handleSubmission() {
    // send the updated object

    setIsUpdating(false);
  }

  // The updated object to send to the server
  const updatedUserObject = {
    name: updatedFirstName,
    surname: updatedLastName,
    location: updatedLocation,
    bio: updatedBio,
    phoneNumber: updatedPhoneNumber,
    profilePhoto: userPhoto,
    interests: userInterests
  };

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
              <div>
                <ProfileHeader
                  userObject={updatedUserObject}
                  isUpdating={isUpdating}
                  updatedFirstName={updatedFirstName}
                  setUpdatedFirstName={setUpdatedFirstName}
                  updatedLastName={updatedLastName}
                  setUpdatedLastName={setUpdatedLastName}
                  updatedPhoneNumber={updatedPhoneNumber}
                  setUpdatedPhoneNumber={setUpdatedPhoneNumber}
                  updatedLocation={updatedLocation}
                  setUpdatedLocation={setUpdatedLocation}
                />

                <center>
                  <ProfilePageHeader
                    userObject={updatedUserObject}
                    isUpdating={isUpdating}
                    updatedName={updatedFirstName}
                    setUpdatedName={setUpdatedFirstName}
                    updatedLastName={updatedLastName}
                    setUpdatedLastName={setUpdatedLastName}
                    updatedPhoneNumber={updatedPhoneNumber}
                    setUpdatedPhoneNumber={setUpdatedPhoneNumber}
                    updatedLocation={updatedLocation}
                    setUpdatedLocation={setUpdatedLocation}
                  />
                </center>

                {/* <ProfileStats userObject={userObject} /> */}
              </div>

              <BioArea
                isUpdating={isUpdating}
                updatedBio={updatedBio}
                userObject={userObject}
                setUpdatedBio={setUpdatedBio}
              />
              <EditProfileButton
                isUpdating={isUpdating}
                handleSubmission={handleSubmission}
                setIsUpdating={setIsUpdating}
              />
            </>
          }
        />
        <Spacer />
        <MainCard
          style={{ marginTop: "2vh" }}
          children={
            <>
              <Interests userObject={updatedUserObject} />
              <Button
                light
                flat
                auto
                style={{ maxWidth: 300, margin: "auto" }}
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
