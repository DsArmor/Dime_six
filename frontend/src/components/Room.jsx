import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const Room = (props) => {
    return (
        <Grid item padding="20px">
            <Card sx={{maxWidth: 345}}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.room.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" paddingBottom="2px">
                        {props.room.description}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" paddingBottom="2px">
                        {props.room.startAllocationDateTime.split('T')[0]}{" "}
                        {props.room.startAllocationDateTime.split('T')[1].split('Z')[0].split(':')[0]}:
                        {props.room.startAllocationDateTime.split('T')[1].split('Z')[0].split(':')[1]}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" paddingBottom="2px">
                        {props.room.endAllocationDateTime.split('T')[0]}{" "}
                        {props.room.endAllocationDateTime.split('T')[1].split('Z')[0].split(':')[0]}:
                        {props.room.endAllocationDateTime.split('T')[1].split('Z')[0].split(':')[1]}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Цена за ночь: {props.room.priceForDay}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" variant="outlined"
                            onClick={() => props.onShowItem(props.room)}>Подробнее</Button>
                </CardActions>
            </Card>
        </Grid>
    );
}

export default Room