import React from 'react';
import PropTypes from 'prop-types';
import './AirQuality.css';
import useLocation from '../../../hooks/useLocation';

const AQI_INFO = {
  1: { emoji: '🟢', description: 'очень хорошее' },
  2: { emoji: '🟡', description: 'хорошее' },
  3: { emoji: '🟠', description: 'умеренное' },
  4: { emoji: '🔴', description: 'плохое' },
  5: { emoji: '🟣', description: 'очень плохое' },
};

function getAqiInfo(aqiValue) {
  return AQI_INFO[aqiValue] || { emoji: '⚪', description: 'неизвестное' };
}

const AirQuality = ({ airData }) => {
  const { location } = useLocation();

  if (!airData || !airData.list || airData.list.length === 0) {
    return (
      <div className="air-quality-widget">
      <div className="location-info">
        <i className="fa-solid fa-location-arrow" />
        <span> {location.city}</span>
        <p>Сейчас {getCurrentTime()}</p>
      </div>
      <div className="air-quality-info">
        <div className='loading-container'>
          <div className="loading-container-icon">
            <i className="fa fa-spinner fa-spin" />
          </div>
          <p className='loading-text'>Данные о качестве воздуха загружаются...</p>
        </div>
      </div>
    </div>
    )
  }

  function getAirQualityEmoji(pollutant, value) {
    const thresholds = {
        CO: { green: 10000, orange: 15000 },
        NO2: { green: 40, orange: 100 },
        O3: { green: 120, orange: 180 },
        SO2: { green: 125, orange: 200 },
        PM10: { green: 50, orange: 100 },
        PM25: { green: 25, orange: 50 }
    };

    if (!thresholds[pollutant]) {
        throw new Error(`Неизвестный загрязнитель: ${pollutant}`);
    }

    const { green, orange } = thresholds[pollutant];

    if (value <= green) {
        return '🟢';
    } else if (value <= orange) {
        return '🟠';
    } else {
        return '🔴';
    }
  }

  function getCurrentTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
  }

  const { aqi } = airData.list[0].main;
  const { co, no2, o3, so2, pm10, pm2_5 } = airData.list[0].components;
  const aqiInfo = getAqiInfo(aqi);

  return (
    <div className="air-quality-widget">
      <div className="location-info">
        <i className="fa-solid fa-location-arrow" />
        <span> {location.city}</span>
        <p>Сейчас {getCurrentTime()}</p>
      </div>
      <div className="air-quality-info">
        <div className="temperature">
          <span className="temp-value">{aqi} AQI {aqiInfo.emoji} ({aqiInfo.description})</span>
        </div>
        <div className="divider">
          <div className="bottom-divider" />
          <div className="after-divider" />
        </div>
        <div className="additional-info">
          <div>
            <span className="indicator">{getAirQualityEmoji("CO", co)}</span>
            <span className="pollutant">Угарный газ (CO)</span>
            <span className="value">{co} µg/m³</span>
          </div>
          <div>
            <span className="indicator">{getAirQualityEmoji("NO2", no2)}</span>
            <span className="pollutant">Оксид Азота (NO2)</span>
            <span className="value">{no2} µg/m³</span>
          </div>
          <div>
            <span className="indicator">{getAirQualityEmoji("O3", o3)}</span>
            <span className="pollutant">Озон (O3)</span>
            <span className="value">{o3} µg/m³</span>
          </div>
          <div>
            <span className="indicator">{getAirQualityEmoji("SO2", so2)}</span>
            <span className="pollutant">Оксид серы (SO2)</span>
            <span className="value">{so2} µg/m³</span>
          </div>
          <div>
            <span className="indicator">{getAirQualityEmoji("PM10", pm10)}</span>
            <span className="pollutant">Частицы PM10</span>
            <span className="value">{pm10} µg/m³</span>
          </div>
          <div>
            <span className="indicator">{getAirQualityEmoji("PM25", pm2_5)}</span>
            <span className="pollutant">Частицы PM2.5</span>
            <span className="value">{pm2_5} µg/m³</span>
          </div>
        </div>
      </div>
    </div>
  );
};

AirQuality.propTypes = {
  airData: PropTypes.object,
};

export default AirQuality;