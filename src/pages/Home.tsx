import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Typography, Grid, Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Med from "../assets/Icon/med.webp";
import "./Home.css";

const useStyles = makeStyles({
  root: {
    marginTop: "100px",
    textAlign: "center",
  },
  button: {
    margin: "10px",
  },
  count: {
    marginTop: "10px",
    padding: "5px",
    marginRight: -20,
    alignSelf: "flex-end",
    color: "white",
    fontWeight: "bold",
  },
  imgg: {
    color: "white",
  },
  item: {
    backgroundColor: "purple",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "10px",
    padding: `20px`,
    paddingBottom: `0px`,
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    width: "150px",
  },
});

const mockApiResponse = {
  data: {
    response: [
      {
        date: "2024-06-07",
        medications: {
          "Medicine 10": "",
          "Medicine 11": "",
          "Medicine 12": "",
          "Medicine 13": "",
          "%Medicine 14": "",
          "Medicine 15": "",
          "Medicine 16": "",
          "Medicine 17": "",
          "Medicine 18": "",
        },
      },
      {
        date: "2024-06-08",
        medications: {
          "Medicine 21": "",
          "Medicine 22": "",
          "Medicine 23": "",
          "Medicine 24": "",
          "Medicine 25": "",
        },
      },
      {
        date: "2024-06-09",
        medications: {
          "Medicine 31": "",
          "Medicine $32": "",
          "Medicine 33": "",
          "Medicine 34": "",
        },
      },
    ],
  },
};

const getMedicationCount = (date: string): number => {
  const data = mockApiResponse.data.response;
  const response = data.find((item) => item.date === date);
  return response ? Object.keys(response.medications).length : 0;
};

const Home: React.FC = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleNavigation = (date: string) => {
    navigate(`/medications/${date}`);
  };

  return (
    <Container className={classes.root}>
      <div className="image-container">
        <img
          className="imagelogo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFgxG7SNZxcVqddubFGHAPCDFCiQcaJxyAuQ&s"
          alt="Image Description"
        />
        <div className="overlay"></div>
        <div className="content">
          <h3 style={{ color: "#000000" }}>Medication</h3>
          <p style={{ color: "#000000" }}>We are here to protect you</p>
        </div>
      </div>
      <Grid
        container
        mt={5}
        spacing={6}
        justifyContent="center"
        gap={2}

        // alignItems={"center"}
      >
        <div
          className={classes.item}
          onClick={() => handleNavigation("yesterday")}
        >
          <Typography color={"white"} variant="h6" gutterBottom>
            Yesterday
          </Typography>
          <div className="png-container">
            <img
              className={classes.imgg}
              style={{ width: 50, height: 50 }}
              src={Med}
              alt="med"
            />
          </div>

          <Typography className={classes.count}>
            {getMedicationCount("2024-06-07")}
          </Typography>
        </div>
        <div className={classes.item} onClick={() => handleNavigation("today")}>
          <Typography color={"white"} variant="h6" gutterBottom>
            Today
          </Typography>
          <div className="png-container">
            <img
              className={classes.imgg}
              style={{ width: 50, height: 50 }}
              src={Med}
              alt="med"
            />
          </div>

          <Typography className={classes.count}>
            {getMedicationCount("2024-06-08")}
          </Typography>
        </div>
        <div
          className={classes.item}
          onClick={() => handleNavigation("tomorrow")}
        >
          <Typography color={"white"} variant="h6" gutterBottom>
            Tomorrow
          </Typography>
          <div className="png-container">
            <img
              className={classes.imgg}
              style={{ width: 50, height: 50 }}
              src={Med}
              alt="med"
            />
          </div>

          <Typography className={classes.count}>
            {getMedicationCount("2024-06-09")}
          </Typography>
        </div>
      </Grid>
    </Container>
  );
};

export default Home;
