import React from "react";
import FormatBoldIcon from "@material-ui/icons/FormatBold";
import FormatItalicIcon from "@material-ui/icons/FormatItalic";
import FormatUnderlinedIcon from "@material-ui/icons/FormatUnderlined";
import FormatColorFillIcon from "@material-ui/icons/FormatColorFill";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import details from './details.css';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function ToggleButtonsMultiple() {
  const classes = useStyles();
  const [formats, setFormats] = React.useState(() => ["bold", "italic"]);

  const handleFormat = (event, newFormats) => {
    setFormats(newFormats);
  };

  return (
    <div>
      <ToggleButtonGroup
        value={formats}
        onChange={handleFormat}
        aria-label="text formatting"
        justify="flex-center"
      >
        <ToggleButton value="bold" aria-label="bold">
          ALL
        </ToggleButton>
        <ToggleButton value="italic" aria-label="italic">
          APPAREL
        </ToggleButton>
        <ToggleButton value="underlined" aria-label="underlined">
          ELECTRONICS
        </ToggleButton>
        <ToggleButton value="color" aria-label="color">
          FOOTWEAR
        </ToggleButton>
        <ToggleButton value="personal" aria-label="personal">
          PERSONAL CARE
        </ToggleButton>
      </ToggleButtonGroup>
      <div class="mainDiv">
        <div class="row imgDiv">
          <CardMedia
          class="col-md-6 img"
            className={classes.media}
            image="https://images-na.ssl-images-amazon.com/images/I/71fVoqRC0wL._SL1500_.jpg"
            title="Contemplative Reptile"
          />
        
          <div class="col-md-6 img-content" style="margin: auto;">
            <h2>Radisson Blu Hotel</h2>
            <p>#38 of 1,289 hotels in New Delhi</p>
            <div class="text-justify row">
              National Highway 8, New Delhi 110017 India
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
