import {useState} from 'react';
import { styled, alpha } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
export default function CardExpander(){

  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
    })
    (({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

  return(
  <Card sx={{ maxWidth: 400 }}>
  <CardHeader
    avatar={
      <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
        R
      </Avatar>
    }
    action={
      <IconButton aria-label="settings">
        <MoreVertIcon />
      </IconButton>
    }
    title="< Title >"  // title here
    subheader="September 14, 2016"
  />
  <CardMedia component="img" height="194" image="/java.png" alt="Paella dish"/>
  <CardContent>
    <Typography variant="body2" color="text.secondary">
      One line description here
    </Typography>
  </CardContent>
  <CardActions disableSpacing>
    <IconButton aria-label="add to favorites">
      <FavoriteIcon />
    </IconButton>
    <IconButton aria-label="share">
      <ShareIcon />
    </IconButton>
    <ExpandMore expand={expanded} onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
      <ExpandMoreIcon />
    </ExpandMore>
  </CardActions>
  <Collapse in={expanded} timeout="auto" unmountOnExit>
    <CardContent>
      <Typography paragraph>Method:</Typography>
      <Typography paragraph>
        Description with typography paragraphs should be here. You can use multiple paragraphs such as p using typography paragraph.
      </Typography>
    </CardContent>
  </Collapse>
</Card>
  )
}