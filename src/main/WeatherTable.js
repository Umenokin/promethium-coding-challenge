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
    const [listOfIds, setListOfIds] = useState([]);
    const [listOfCityNames, setListOfCityNames] = useState([]);
    const [listOfTemperatures, setListOfTemperatures] = useState([]);
    const [listOfMinTemperatures, setListOfMinTemperatures] = useState([]);
    const [listOfUpdatedAt, setListOfUpdatedAt] = useState([]);

    const handleReload = () => {
        setListOfCityNames([]);
        setListOfTemperatures([]);
        setListOfMinTemperatures([]);
        setListOfUpdatedAt([]);
        listOfIds.map((id) => 
            fetch(`https://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
            .then((response) => response.json())
            .then((data) => {
                var date = new Date();
                var hours = date.getHours();
                var minutes = date.getMinutes();
                var seconds = date.getSeconds();
                var milliseconds = date.getMilliseconds();
                var ampm = hours >= 12 ? 'pm' : 'am';
                hours = hours % 12;
                hours = hours ? hours : 12; // the hour '0' should be '12'
                minutes = minutes < 10 ? '0' + minutes : minutes;
                seconds = seconds < 10 ? '0' + seconds : seconds;
                milliseconds = milliseconds < 10 ? '0' + milliseconds : milliseconds;
                var currTime = hours + ':' + minutes + ':' + seconds + ':' + milliseconds + ' ' + ampm;
                setListOfCityNames(cityNames => cityNames.concat(data.name));
                setListOfTemperatures(temperatures => temperatures.concat(data.main.temp));
                setListOfMinTemperatures(minTemperatures => minTemperatures.concat(data.main.temp_min));
                setListOfUpdatedAt(updatedAt => updatedAt.concat(currTime));
            })
        )
    }
    const handleDelete = (index) => {
        setListOfIds(ids => ids.filter(id => ids.indexOf(id) !== index));
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
                var date = new Date();
                var hours = date.getHours();
                var minutes = date.getMinutes();
                var seconds = date.getSeconds();
                var milliseconds = date.getMilliseconds();
                var ampm = hours >= 12 ? 'pm' : 'am';
                hours = hours % 12;
                hours = hours ? hours : 12; // the hour '0' should be '12'
                minutes = minutes < 10 ? '0' + minutes : minutes;
                seconds = seconds < 10 ? '0' + seconds : seconds;
                milliseconds = milliseconds < 10 ? '0' + milliseconds : milliseconds;
                var currTime = hours + ':' + minutes + ':' + seconds + ':' + milliseconds + ' ' + ampm;
                setListOfIds(ids => ids.concat(id));
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
                <ReloadButton handleClick ={() => handleReload()}/>
            </Container>
        </Box>
    );
}

const useStyles = (theme) => createStyles({
    weatherTableContainer: {
        backgroundColor: theme.palette.background.main,
        backgroundSize: 'cover',
        width: '100%',
        height: '100vh',
        margin: '0px',
        padding: '0px',
        overflowX: 'hidden',
    },
    selectionChip: {
        margin: '.5rem',
        fontFamily: theme.palette.typography.fontFamily,
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.secondary.main,
        [theme.breakpoints.down('sm')]: {
            fontSize: '.5rem',
        },
    }
});

export default withStyles(useStyles)(WeatherTable);