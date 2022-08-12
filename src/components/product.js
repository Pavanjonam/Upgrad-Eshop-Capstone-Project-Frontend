import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import FormatBoldIcon from '@material-ui/icons/FormatBold';
import FormatItalicIcon from '@material-ui/icons/FormatItalic';
import FormatUnderlinedIcon from '@material-ui/icons/FormatUnderlined';
import FormatColorFillIcon from '@material-ui/icons/FormatColorFill';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';



const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});



export default function Product() {
  const classes = useStyles();

  return (
      <div>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
            <CardActions>
          <Typography gutterBottom variant="h6" component="h6" justify="flex-start">
            Shoes
          </Typography>
          <Typography gutterBottom variant="h6" component="h6" direction="grid" justify="flex-end">
            Shoes
          </Typography>
          </CardActions>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant="contained" color="primary">
          BUY
        </Button>
        <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <EditIcon />
          </IconButton>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <DeleteIcon />
          </IconButton>
      </CardActions>
    </Card>
     <Card className={classes.root}>
     <CardActionArea>
       <CardMedia
         className={classes.media}
         image="/static/images/cards/contemplative-reptile.jpg"
         title="Contemplative Reptile"
       />
       <CardContent>
           <CardActions>
         <Typography gutterBottom variant="h6" component="h6" justify="flex-start">
           Shoes
         </Typography>
         <Typography gutterBottom variant="h6" component="h6" direction="grid" justify="flex-end">
           Shoes
         </Typography>
         </CardActions>
         <Typography variant="body2" color="textSecondary" component="p">
           Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
           across all continents except Antarctica
         </Typography>
       </CardContent>
     </CardActionArea>
     <CardActions>
       <Button variant="contained" color="primary">
         BUY
       </Button>
       <IconButton
           edge="start"
           className={classes.menuButton}
           color="inherit"
           aria-label="open drawer"
         >
           <EditIcon />
         </IconButton>
         <IconButton
           edge="start"
           className={classes.menuButton}
           color="inherit"
           aria-label="open drawer"
         >
           <DeleteIcon />
         </IconButton>
     </CardActions>
   </Card>
   </div>
  );
}