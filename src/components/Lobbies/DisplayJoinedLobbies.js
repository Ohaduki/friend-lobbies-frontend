import React, { useState, useEffect, useCallback } from "react";
import lobbiesData from "../../data/lobbies.json";
import { Grid, Text } from "@nextui-org/react";
import LazyLoad from "react-lazy-load";
import CategoryCardsBigger from "../Main/CategoryCardsBigger";
import { Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

const DisplayJoinedLobbies = () => {
  const [popularLobbies, setPopularLobbies] = useState([]);

  function getLobbiesFromLoggedUser(lobbies, userId) {
    // fetch lobbies by the same user
  }
  const navigate = useNavigate();

  return (
    <>
      {lobbiesData.length > 0 && (
        <>
          <Text h3 css={{ textAlign: "center", marginTop: "2vh" }}>
            Do not forget about lobbies you joined
            <br />
          </Text>
          <Text h2 css={{ textAlign: "center" }}>
            Stay connected!
          </Text>
        </>
      )}

      {lobbiesData.length > 0 && (
        <div className="flex-container">
          {lobbiesData.map((lobby, index) => {
            return (
              <div key={index} className="flex-item">
                <LazyLoad
                  height={290}
                  offsetVertical={100}
                  debounce={false}
                  throttle={50}
                >
                  <CategoryCardsBigger props={lobby} />
                </LazyLoad>
              </div>
            );
          })}
        </div>
      )}
      {lobbiesData.length === 0 && (
        <>
          <div
            style={{ margin: "auto", marginTop: "14vh", marginBottom: "14vh" }}
          >
            <Text h3>You haven't joined any lobbies yet</Text>
            <Text h2>Join to your first lobby now!</Text>
            <Button
              onPress={() => navigate(`/`)}
              css={{ margin: "auto", marginTop: "2vh" }}
            >
              Create a Lobby
            </Button>
          </div>
        </>
      )}
    </>
  );
};

export default DisplayJoinedLobbies;
