import { Divider, Typography } from "@mui/material";

import "./App.css";
import Cars from "./components/Cars";
import Competition from "./components/Competition";
import Fridge from "./components/Fridge";
import Swanson from "./components/Swanson";

function App() {
  return (
    <div className="App">
      <Divider>
        <Typography>
          TASK in <code>Cars.jsx</code>
        </Typography>
      </Divider>
      <Cars />
      <Divider>
        <Typography>
          TASK in <code>Swanson.jsx</code>
        </Typography>
      </Divider>
      <Swanson />
      <Divider>
        <Typography>
          TASK in <code>Competition.jsx</code>
        </Typography>
      </Divider>
      <Competition />
      <Divider>
        <Typography>
          TASK in <code>Fridge.jsx</code>
        </Typography>
      </Divider>
      <Fridge />
    </div>
  );
}

export default App;
