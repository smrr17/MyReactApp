import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  List,
  ListItem,
  ListItemText,
  Container,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import Icon from "../assets/Icon/medicineIcon.png";

const useStyles = makeStyles({
  root: {
    marginTop: "100px",
  },
  list: {
    marginTop: "20px",
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

interface MedicationResponse {
  date: string;
  medications: { [key: string]: string };
}

const Medications: React.FC = () => {
  const classes = useStyles();
  const { date } = useParams<{ date: string }>();
  const navigate = useNavigate();
  const [medications, setMedications] = useState<string[]>([]);
  console.log(medications);

  useEffect(() => {
    if (!date) {
      navigate("/");
      return;
    }

    const fetchMedications = () => {
      const data = mockApiResponse.data.response;
      let selectedDate = "";

      if (date === "yesterday") {
        selectedDate = "2024-06-07";
      } else if (date === "today") {
        selectedDate = "2024-06-08";
      } else if (date === "tomorrow") {
        selectedDate = "2024-06-09";
      }

      const response = data.find((item) => item.date === selectedDate);

      if (response && response.medications) {
        const meds = Object.keys(response.medications).map((med) =>
          med.trim().replace(/[%$]/g, "")
        );
        setMedications(meds);
      }
    };

    fetchMedications();
  }, [date, navigate]);

  return (
    <Container className={classes.root}>
      <Typography variant="h4" gutterBottom>
        Medications for{" "}
        {date ? date.charAt(0).toUpperCase() + date.slice(1) : ""}
      </Typography>
      <List className={classes.list}>
        {medications.map((medication, index) => (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              border: "1px solid #ccc",
              padding: 10,
              margin: 5,
              borderRadius: 10,
              backgroundColor: "#00000020",
            }}
          >
            <img style={{ width: 20, height: 20 }} src={Icon} alt="icon" />
            <ListItem key={index}>
              <ListItemText
                primary={medication}
                secondary={
                  " the practices and procedures used for the prevention, treatment, or relief of symptoms of diseases or abnormal conditions."
                }
              />
            </ListItem>
          </div>
        ))}
      </List>
    </Container>
  );
};

export default Medications;
