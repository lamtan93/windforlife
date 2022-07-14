import React, { useState } from 'react';
import Proptypes from 'prop-types';
import {GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow} from 'react-google-maps';
import SpeedWindChart from './SpeedWindChart';
import anemometerUtil from '../utils/anemometerUtil';
import arrowIconWind from '../img/arrowIconWind.png';
import anemometerIcon from '../img/anemometerIcon.png';

const {
    getDataForDetailWindChart,
} = anemometerUtil || {};

const GoogleMapWindForLife = withScriptjs(withGoogleMap(({
    words,
    listAnemometers,
    handleChangeAnemometer,
    detailAnemometer,
}) => {
    const [
        selectedAnemometer,
        setSelectedAnemometer,
    ] = useState(null);

    const handleOnClickAnemometer = (anemometer) => {
        handleChangeAnemometer(anemometer?.id);
        setSelectedAnemometer(anemometer);
    }
    return (
        <GoogleMap
            defaultZoom={9}
            defaultCenter={{ lat: 21.286056, lng: -157.670215 }}
            onClick={() => setSelectedAnemometer(null)}
        >
            {listAnemometers?.map(anemometer => (
                <Marker 
                icon={anemometerIcon}
                key={anemometer?.id}
                position={{
                    lat: anemometer?.loc?.lat,
                    lng: anemometer?.loc?.long,
                }}
                onClick={() => handleOnClickAnemometer(anemometer)}
            />
            ))}

            {(selectedAnemometer && detailAnemometer) && (
                <InfoWindow
                    position={{
                        lat: selectedAnemometer?.loc?.lat,
                        lng: selectedAnemometer?.loc?.long 
                    }}
                    onCloseClick={() => setSelectedAnemometer(null)}
            >       
                <div className='windInfosGen'>
                <h4>{detailAnemometer?.name}</h4>
                    <div className='windInfos'>
                        <div className='windInfosStatistics'>
                            <p>{`${words?.AVERAGE?.DAILY_LABEL}: ${detailAnemometer?.statistics?.average?.daily?.force} knots`}</p>
                            <p>{`${words?.AVERAGE?.WEEKLY_LABEL}: ${detailAnemometer?.statistics?.average?.weekly?.force} knots`}</p>
                        </div>
                    </div>
                    <h4>{words?.WIND_DIRECTION_LABEL}</h4>
                    <div className='windDirection'>
                        {detailAnemometer?.readings?.map(r => (
                            <div className='windDirectionContainer' key={r?.timestamp}>
                                <img style={{transform: `rotate(${r?.dir}deg)`}} src={arrowIconWind} alt={"windDirection"} />
                                <span>{r?.dir}</span>
                            </div>
                        ))}
                    </div>
                    <SpeedWindChart 
                        dataAnemometer={getDataForDetailWindChart(detailAnemometer?.readings)}
                    /> 
                </div>
                </InfoWindow>
            )}
        </GoogleMap>
    )
}
))

GoogleMapWindForLife.propTypes = {
    listAnemometers: Proptypes.array,
    handleChangeAnemometer: Proptypes.func,
    detailAnemometer: Proptypes.shape({}),
}


GoogleMapWindForLife.defaultProps = {
    listAnemometers : null,
    handleChangeAnemometer : null,
    detailAnemometer : null,
    words: null,
}


export default GoogleMapWindForLife;