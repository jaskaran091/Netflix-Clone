import style from "./question.module.css";
import * as React from "react";
import { styled, ThemeProvider, createTheme } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const questions = [
  {
    question: "What is Netflix?",
    answer: `Netflix is a streaming service that offers a wide variety of
                award-winning TV shows, movies, anime, documentaries and more –
                on thousands of internet-connected devices. You can watch as
                much as you want, whenever you want, without a single ad – all
                for one low monthly price. There's always something new to
                discover, and new TV shows and movies are added every week!`,
  },
  {
    question: "How much does Netflix Costs?",
    answer: `Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
                streaming device, all for one fixed monthly fee. Plans range
                from ₹149 to ₹649 a month. No extra costs, no contracts.`,
  },
  {
    question: "Where can I watch?",
    answer: `Watch anywhere, anytime. Sign in with your Netflix account to
                watch instantly on the web at netflix.com from your personal
                computer or on any internet-connected device that offers the
                Netflix app, including smart TVs, smartphones, tablets,
                streaming media players and game consoles. You can also download
                your favourite shows with the iOS or Android app. Use downloads
                to watch while you're on the go and without an internet
                connection. Take Netflix with you anywhere.`,
  },
  {
    question: "How do I cancel?",
    answer: ` Netflix is flexible. There are no annoying contracts and no
                commitments. You can easily cancel your account online in two
                clicks. There are no cancellation fees – start or stop your
                account anytime.`,
  },
  {
    question: "What can I watch on Netflix?",
    answer: `Netflix has an extensive library of feature films,
                documentaries, TV shows, anime, award-winning Netflix originals,
                and more. Watch as much as you want, anytime you want.`,
  },
  {
    question: "Is Netflix good for Kids?",
    answer: `Netflix has an extensive library of feature films,
                documentaries, TV shows, anime, award-winning Netflix originals,
                and more. Watch as much as you want, anytime you want.`,
  },
];

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
  width: "100%", // Ensures accordion takes full width
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={props.expanded ? <CloseIcon /> : <AddIcon />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row",
  "& .MuiAccordionSummary-content": {
    marginRight: theme.spacing(1),
  },
  minHeight: "60px",
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
  minHeight: "40px",
}));

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState();

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <div
        className={style.accordian}
        style={{
          padding: "20px 0",
          maxWidth: "1300px",
          margin: "0 auto",
        }}
      >
        {questions.map((item, i) => (
          <div key={i}>
            <Accordion
              expanded={expanded === i}
              onChange={handleChange(i)}
              sx={{ marginBottom: "10px", borderRadius: "8px" }}
            >
              <AccordionSummary
                aria-controls="panel1d-content"
                id="panel1d-header"
                sx={{
                  padding: "10px",
                  backgroundColor: "rgba(45,45,45)",
                }}
              >
                <Typography variant="h4">{item.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="h5" textAlign="left">
                  {item.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        ))}
      </div>
    </ThemeProvider>
  );
}

function Question() {
  return (
    <div className={style.container}>
      <h1>Frequently Asked Questions</h1>
      <CustomizedAccordions />
      <div className={style.start}>
        <h3>
          Ready to watch? Enter your email to create or restart your membership.
        </h3>
        <div className={style.flex}>
          <input type="email" placeholder="Email Address" />
          <button>get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Question;
