import React, { useState } from "react";
import { Field, Formik, useFormik } from "formik";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { HiLogout } from "react-icons/hi";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { Grid } from "@mui/material";

import {
  Avatar,
  Box,
  Button,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  Typography,
  Select,
} from "@mui/material";
import * as Yup from "yup";
// import Card from "./Card";
import CardTop from "./CardTop";
import { usePalette } from "../../theme/theme";
import { MdPallet } from "react-icons/md";
import { border, display } from "@mui/system";
import Program from "./Programs/Program";

function Dashboard() {
  const [week, setWeek] = useState("");
  const palette = usePalette();
  const cardContents = [
    {
      id: 1,
      toptext: "Mentors",
      bottomtext: "40",
      increment: "+32%",
      icon: <PersonOutlineIcon sx={{ fontSize: "60px" }} />,
    },
    {
      id: 2,
      toptext: "Mentors Managers",
      bottomtext: "38",
      increment: "+22%",
      icon: <PersonOutlineIcon sx={{ fontSize: "60px" }} />,
    },
    {
      id: 3,
      toptext: "Report",
      bottomtext: "30",
      increment: "+12%",
      icon: <PersonOutlineIcon sx={{ fontSize: "60px" }} />,
    },
    {
      id: 4,
      toptext: "Tasks",
      bottomtext: "30",
      increment: "+12%",
      icon: <PersonOutlineIcon sx={{ fontSize: "60px" }} />,
    },
  ];

  const handleChange = (event) => {
    setWeek(event.target.value);
  };

  return (
    <Stack direction={"column"} width={"100%"} spacing={3} sx={{ pt: 2 }}>
      <Stack direction={"row"} widht={"100%"} justifyContent={"space-between"}>
        <Typography
          variant="h4"
          sx={{
            fontSize: 24,
            fontWeight: 600,
            color: "#141414",
            fontFamily: "Mukta",
          }}
        >
          Dashboard
        </Typography>
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <InputLabel id="demo-select-small-label">This week</InputLabel>
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            value={week}
            label="week"
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={2}>Week two</MenuItem>
            <MenuItem value={3}>Week Three</MenuItem>
            <MenuItem value={4}>Week Four</MenuItem>
          </Select>
        </FormControl>
      </Stack>
      <Grid>
        <Grid container spacing="2" columns="4">
          <Grid item xs="1">
            <Box
              sx={{
                backgroundColor: palette.primary.main,
                // width: "194px",
                borderRadius: "7px",
                py: 2,
                px: 6,
                position: "relative",
              }}
            >
              <Stack>
                <Stack
                  direction={"row"}
                  spacing={2}
                  textAlign={"start"}
                  alignItems={"center"}
                >
                  <Typography
                    sx={{
                      fontFamily: "Mukta",
                      fontStyle: "normal",
                      fontWeight: 600,
                      fontSize: "64px",
                      color: "#F7FEFF",
                    }}
                  >
                    6
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Mukta",
                      fontStyle: "normal",
                      fontWeight: 600,
                      fontSize: "20px",
                      color: "#F7FEFF",
                      width: "84px",
                    }}
                  >
                    Active Program
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{
                      widht: "55px",
                      height: "24px",
                      backgroundColor: "#FFFFFF",
                      border: "1px solid #058B94",
                      alignItems: "center",
                      textAlign: "center",
                      position: "absolute",
                      right: "12px",
                      top: "12px",
                      color: "#035D63",
                    }}
                  >
                    {" "}
                    View
                  </Button>
                </Stack>
              </Stack>
            </Box>
          </Grid>
          <Grid
            item
            xs=""
            sx={{ ml: 2, display: "flex", alignItems: "center" }}
          >
            <Grid container columns="4" spacing="22">
              {cardContents.map((cardContent) => {
                return (
                  <Grid item xs="1">
                    <CardTop
                      key={cardContent.id}
                      toptext={cardContent.toptext}
                      bottomtext={cardContent.bottomtext}
                      increment={cardContent.increment}
                      icon={cardContent.icon}
                    />
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Stack backgroundColor="#F7FEFF" sx={{ p: 4 }}>
        <Stack direction="row" justifyContent="space-between">
          <Typography>Programs overview</Typography>
          <Button>
            {" "}
            <Box>6 Active</Box>
          </Button>
          
        </Stack>
        <Grid item xs="" sx={{ ml: 2, display: "flex", alignItems: "center" }}>
          <Grid container columns="4" spacing="22">
            <Grid
              item
              xs="1"
              sx={{
                fontFamily: "Mukta",
                fontStyle: "normal",
                fontWeight: 600,
                fontSize: "20px",
                color: "#F7FEFF",
                width: "84px",
              }}
            >
              <Program />
            </Grid>

            <Grid item xs="1">
              <Program />
            </Grid>

            <Grid item xs="1">
              <Program />
            </Grid>
          </Grid>
        </Grid>
        <Box>
          <Button
            sx={{
              widht: "55px",
              height: "24px",
              backgroundColor: "#058B94",
              alignItems: "right",
              position: "absolute",
              right: "30px",
            }}
          >
            {" "}
            View All
          </Button>
        </Box>
      </Stack>
      <Stack backgroundColor="#F7FEFF" sx={{ p: 4 }}>
        <Stack direction="row" justifyContent="space-between">
          <Typography>Reports overview</Typography>

          <Box>10 Reports Submitted</Box>
        </Stack>
        <Grid item xs="" sx={{ ml: 2, display: "flex", alignItems: "center" }}>
          <Grid container columns="4" spacing="22">
            <Grid item xs="1">
              <Program />
            </Grid>

            <Grid item xs="1">
              <Program />
            </Grid>

            <Grid item xs="1">
              <Program />
            </Grid>
          </Grid>
        </Grid>
        <Box>
          <Button
            sx={{
              widht: "55px",
              height: "24px",
              backgroundColor: "#058B94",
              alignItems: "right",
              position: "absolute",
              right: "30px",
            }}
          >
            {" "}
            View All
          </Button>
        </Box>
      </Stack>
    </Stack>
  );
}

export default Dashboard;
