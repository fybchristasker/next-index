import * as React from "react";
import { TextField, Button, Box, Container } from "@mui/material";

export default function Index() {
  const [searchText, setSearchText] = React.useState("shit");
  return (
    <Container maxWidth="sm">
      <TextField
        className="pt-64"
        variant="outlined"
        fullWidth
        onChange={(e) => setSearchText(e.target.value)}
        InputProps={{
          endAdornment: (
            <Button
              color="primary"
              variant="contained"
              onClick={() =>
                window.open(`https://www.google.com/search?q=${searchText}`)
              }
            >
              搜索
            </Button>
          ),
        }}
      />
    </Container>
  );
}
