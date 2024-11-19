import { useEffect, useState } from "react";
import * as React from "react";
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import
{
  TextField,
  Box,
  FormControl,
  Button,
} from "@mui/material";
import "./App.css";

function App ()
{
  const [isSendDisabled, setSendDisabled] = useState(true);

  useEffect(() =>
  {
    updateName("");
  }, []);

  const updateName = (value) =>
  {
    if (value.length > 0)
    {
      setSendDisabled(false);
    } else
    {
      setSendDisabled(true);
    }
  };

  return (
    <div>
      <Box>
        <FormControl sx={{ m: 1 }}>
          <Stack sx={{ width: '100%' }} spacing={1}>
            <TextField
              id="run-name"
              label="Enter the name of a run"
              onChange={(event) =>
              {
                updateName(event.target.value);
              }}
              placeholder="awesome-run-123"
              focused={true}
              name="run-name"
            />
            <Alert severity="info">Use the field above to enter the name of a run to clone</Alert>
            <Button startIcon={<RocketLaunchIcon />} variant="contained" disabled={isSendDisabled}>Clone Run</Button>
          </Stack>
        </FormControl>
      </Box>
    </div>
  );
}

export default App;
