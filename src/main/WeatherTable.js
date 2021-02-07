import React, {useEffect, useState} from 'react';
import './WeatherTable.css'
import { 
    createStyles, 
    withStyles,
    Box,
    Container,
    Divider,
    Chip
} from '@material-ui/core';
import WeatherTableRow from '../components/WeatherTableRow';
import WeatherTableHeader from '../components/WeatherTableHeader';
import ReloadButton from './ReloadButton';
import SelectionPanel from './SelectionPanel';

const WeatherTable = (props) => {
    const classes = props.classes;
    const ids = [
        2172797,
        1705545,
        1796228,
        1006984,
        1796247
    ]
    const [listOfCityNames, setListOfCityNames] = useState([]);
    const [listOfTemperatures, setListOfTemperatures] = useState([]);
    const [listOfMinTemperatures, setListOfMinTemperatures] = useState([]);
    const [listOfUpdatedAt, setListOfUpdatedAt] = useState([]);

    const handleDelete = (index) => {
        setListOfCityNames(cityNames => cityNames.filter(city => cityNames.indexOf(city) !== index));
        setListOfTemperatures(temperatures => temperatures.filter(temperature => temperatures.indexOf(temperature) !== index));
        setListOfMinTemperatures(minTemperatures => minTemperatures.filter(minTemperature => minTemperatures.indexOf(minTemperature) !== index));
        setListOfUpdatedAt(updatedAt => updatedAt.filter(date => updatedAt.indexOf(date) !== index));
    }
    const fetchData = async () => {
        ids.map((id) => 
            fetch(`https://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
            .then((response) => response.json())
            .then((data) => {
                var today = new Date();
                var currTime = ( today.getHours() > 12 ? (today.getHours()-12) + ':' + today.getMinutes() + ':' + today.getSeconds() + 'PM' : today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds() + 'AM');
                setListOfCityNames(cityNames => cityNames.concat(data.name));
                setListOfTemperatures(temperatures => temperatures.concat(data.main.temp));
                setListOfMinTemperatures(minTemperatures => minTemperatures.concat(data.main.temp_min));
                setListOfUpdatedAt(updatedAt => updatedAt.concat(currTime));
            })
        )
    }
    useEffect(() => {
        fetchData();
    }, []);
    return (
        <Box className={classes.weatherTableContainer}>
            <Container>
                <SelectionPanel>
                {listOfCityNames.map((city, index) =>
                    <Chip
                    className={classes.selectionChip}
                    label={city}
                    onDelete={() => handleDelete(index)}
                    />
                )}
                </SelectionPanel>
                <WeatherTableHeader
                   cityName = "City Name"
                   temperature = "Temperature"
                   minTemperature = "Min Temperature"
                   updatedAt =  "Updated At"
                />
                {listOfCityNames.map((city, index) =>
                    <div>
                    <WeatherTableRow
                    cityName = {city}
                    temperature = {listOfTemperatures[index]}
                    minTemperature = {listOfMinTemperatures[index]}
                    updatedAt = {listOfUpdatedAt[index]}
                    />
                    <Divider/>
                </div>
                )}
                <ReloadButton/>
            </Container>
        </Box>
    );
}

const useStyles = (theme) => createStyles({
    weatherTableContainer: {
        backgroundColor: theme.palette.background.main,
        backgroundSize: 'cover',
        width: '100%',
        height: '100%',
        margin: '0px',
        padding: '0px',
        overflowX: 'hidden',
    },
    selectionChip: {
        margin: '.5rem',
        fontFamily: theme.palette.typography.fontFamily,
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.secondary.main,
    }
});

export default withStyles(useStyles)(WeatherTable);