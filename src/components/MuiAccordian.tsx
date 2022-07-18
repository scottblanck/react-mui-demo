import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Stack,
  Box,
  Grid,
} from "@mui/material";
import { useState } from "react";

export const MuiAccordian = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (isExpanded: boolean, panel: string) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={(event, isExpanded) => handleChange(isExpanded, "panel1")}
      >
        <AccordionSummary
          id="panel1-header"
          aria-controls="panel1-content"
          expandIcon={expanded === "panel1" ? <RemoveIcon /> : <AddIcon />}
          //expandIcon={<ExpandMoreIcon />}
        >
          <Typography
            align="left"
            sx={{ width: "80%" }}
            style={{ color: "maroon", fontWeight: 600 }}
          >
            Alcorn State Braves
          </Typography>

          <Typography
            align="left"
            sx={{ width: "20%" }}
            style={{ color: "maroon", fontWeight: 600 }}
            noWrap
          >
            24
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container>
            <Grid item xs={9}>
              <Typography
                align="left"
                style={{ color: "maroon", fontWeight: 600 }}
              >
                At Jackson State Tigers
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography
                align="left"
                style={{ color: "maroon", fontWeight: 600 }}
              >
                10
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography>11/20/21</Typography>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel2"}
        onChange={(event, isExpanded) => handleChange(isExpanded, "panel2")}
      >
        <AccordionSummary
          id="panel2-header"
          aria-controls="panel2-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Simple Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur at repellat veritatis dolore qui? Consectetur, dolore
            officiis deserunt nesciunt facilis aut. Nobis qui ratione voluptatum
            neque repellat. Labore, maiores voluptates?
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={(event, isExpanded) => handleChange(isExpanded, "panel3")}
      >
        <AccordionSummary
          id="panel3-header"
          aria-controls="panel3-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Simple Accordion 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur at repellat veritatis dolore qui? Consectetur, dolore
            officiis deserunt nesciunt facilis aut. Nobis qui ratione voluptatum
            neque repellat. Labore, maiores voluptates?
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
