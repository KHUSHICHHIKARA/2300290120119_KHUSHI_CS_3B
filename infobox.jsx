import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
export default function InfoBox({info}){
    const INIT_URL="http://www.duskyswondersite.com/wp-content/uploads/2011/02/weather-cloud-fallstreak-by-tyla-healton.jpg";
    
    return(
        <div className="InfoBox">
      <div className="CardContainer">
      <Card sx={{ maxWidth: 345 }}>      
      <CardMedia
        sx={{ height: 140 }}
        image={INIT_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">{info.city}</Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          <p>Temperature={info.temp}&deg;C</p>
          <p>Humidity={info.humidity}</p>
          <p>Min Temp={info.tempMin}&deg;C</p>
          <p>Max Temp={info.tempMax}&deg;C</p>
          <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C</p>
        </Typography>
      </CardContent>  
    </Card>
        </div>
        </div>
    )
}
