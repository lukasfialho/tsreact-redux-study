import React, { useState } from "react";
import { Provider } from "react-redux";

import RepositoryList from "./components/RepositoryList";

import store from "./store";
import { Button } from "@material-ui/core";

const App = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  }

  const handleClickClose = () => {
    setOpen(false);
  }

  return (
    <Provider store={store}>
      <h2>Click on the button below to see the repositories:</h2>
      <RepositoryList loadSuccess={() => true} open={open} handleClose={handleClickClose} />
      <Button color="primary" onClick={handleClickOpen}>Repositories</Button>
    </Provider>
  );
};

export default App;
