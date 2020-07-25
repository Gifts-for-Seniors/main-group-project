import React from "react";
import { StyledButton } from "../ButtonStyles/Buttons";
import TextField from "@material-ui/core/TextField";
export default function searchBarrels() {
  return (
    <form>
      <div className="searchBarrels">
        <div className="addBarrelInput">
          <span>
            <TextField
              id="searchField"
              label="Search"
              name="search"
              type="text"
              variant="outlined"
            //   value={this.state.search}
            //   onChange={this.handleInput}
            />
            <StyledButton id="searchButton">Search</StyledButton>
          </span>
        </div>
      </div>
    </form>
  );
}
