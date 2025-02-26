import { useEffect, useState } from "react";
import * as React from "react";
import LoadingButton from '@mui/lab/LoadingButton';
import SendIcon from '@mui/icons-material/Send';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import RobotIcon from "./RobotIcon";
import Grid from '@mui/material/Grid2';
import Divider from '@mui/material/Divider';
import
{
  TextField,
  Box,
  FormControl,
  Paper,
} from "@mui/material";
import "./App.css";

const Endpoints = {
  LAMBDA: "https://olq5lzy0cl.execute-api.us-east-1.amazonaws.com/example-stage-05b1333/",
  SAGEMAKER: "https://jw16y0bdbl.execute-api.us-east-1.amazonaws.com/example-stage-ee6a3d4/",
};

const BtnState = {
  DISABLED: 0,
  ENABLED: 1,
  LOADING: 2,
};

const FnState = {
  READY: 0,
  RUNNING: 1,
  SUCCESS: 2,
  ERROR: 3,
};

function App ()
{
  const [btnState, setBtnState] = useState(BtnState.ENABLED);
  const [fnState, setFnState] = useState(FnState.DEFAULT);
  const [alertMsg, setAlertMsg] = useState("");
  const [alertType, setAlertType] = useState("info");

  useEffect(() => { }, []);

  const updateBtnState = (value) =>
  {
    if (value.length > 0)
    {
      setBtnState(BtnState.ENABLED);
    } else
    {
      setBtnState(BtnState.DISABLED);
    }
  };

  const runTrigger = async () =>
  {
    setBtnState(BtnState.LOADING);
    setFnState(FnState.RUNNING);
    const userQuery = document.getElementById("query").value;

    try
    {
      const response = await fetch(Endpoints.LAMBDA, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userQuery,
        }),
      });
      if (response.ok)
      {
        const data = await response.json(); // Read and parse the response body as JSON
        setFnState(FnState.SUCCESS);
        setBtnState(BtnState.ENABLED);
        console.log(data);
        setAlertMsg("Yay! that worked!");
        setAlertType("success");
      } else
      {
        const errorMessage = await response.text(); // Parse error message if available
        setFnState(FnState.ERROR);
        setBtnState(BtnState.ENABLED);
        console.log(response);
        setAlertMsg(errorMessage);
        setAlertType("error");
      }
    } catch (error)
    {
      setFnState(FnState.ERROR);
      setBtnState(BtnState.ENABLED);
      setAlertMsg(error.message);
      setAlertType("error");
    }



    // setBtnState(BtnState.DISABLED);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: '90%' }}>
      <Grid container sx={{ minWidth: '100%' }} rowSpacing={1} columnSpacing={2}>
        <Grid size={12}>
          <Stack direction="row" spacing={1}>
            <LoadingButton>PREV</LoadingButton>
            <div style={{ flexGrow: 1 }}>Example 1 of N</div>
            <LoadingButton>NEXT</LoadingButton>
          </Stack>
        </Grid>
        <Grid size={12}>
          <div><span style={{ fontWeight: 'bold' }}>User Query: </span> What is the capital of France?</div>
          <br />
        </Grid>
        <Grid size={6}>
          <Paper sx={{ padding: 2, minHeight: '185px' }}>
            <Stack direction="row" spacing={1}>
              <RobotIcon />
              <Typography variant="overline">ChatGPT</Typography>
            </Stack>
            <Divider />
            <Typography sx={{ paddingTop: 2, textAlign: 'left' }}>
              Paris is the capital of France—it's always Eiffel-ing into place!
            </Typography>
          </Paper>
        </Grid>
        <Grid size={6}>
          <TextField sx={{ flexGrow: 1, minWidth: '80%' }}
            id="query"
            label="Your Suggestion:"
            placeholder="Leave blank if you agree"
            defaultValue="Paris is the capital, where you will surely Eiffel-in love!"
            onChange={(event) =>
            {
              updateBtnState(event.target.value);
            }}
            focused={true}
            name="query"
            rows={8}
            multiline
          />
        </Grid>
        <Grid size={12}>
          <LoadingButton
            sx={{ minWidth: '100%' }}
            onClick={runTrigger}
            startIcon={<SendIcon />}
            variant="contained"
            loading={btnState === BtnState.LOADING}
            disabled={btnState === BtnState.DISABLED}
          >
            Submit Feedback
          </LoadingButton>
          {fnState > FnState.RUNNING &&
            <Alert severity={alertType}>
              {alertMsg}
            </Alert>
          }
        </Grid>
      </Grid>
    </FormControl>
  );
}

export default App;