import React, { memo } from 'react';
import moment from 'moment';
import styled from '@emotion/styled';

import { Celsius } from "../../components/Common.jsx";
import StyleConst from '../../style/constants';
import SnapHuntIcon from '../../../assets/snaphunt.png';

const BASE_COLORS = ["#1cc7d0", "#2dde98", "#ff6c5f"];

const Card = styled('div')`
  flex: 0 0 240px;
  width: 400px;
  max-width: 95%;
  margin: auto;
  padding: 0;
  border-radius: 6px;
  background-color: #fff;
  overflow: hidden;
  transition: all 0.5s ease;

  @media (max-height: ${StyleConst.xs}) and (orientation: landscape) {
      padding: 8px;
  }
`;

const Header = styled('div')`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 10px;
  padding: 12px 12px 0;
`;

const SnapHuntImage = styled('img')`
  width: auto;
  height: auto;
`;

const WeatherImage = styled('img')`
  display: block;
  width: 50px;
  height: 50px;
  margin: 24px auto;
  border-radius: 50%;
  background-color: #d3d3d3;
`;

const TitleContainer = styled('div')`
  flex: 1;
  text-align: right;
`;

const Title = styled('div')`
  font-size: 16px;
  font-weight: bold;
`;

const StatusContainer =  styled('div')`
  padding-left: 12px;
  flex: 1;
  align-self: center;
  text-transform: capitalize;
  color: #fff;
`;

const StatusTitle = styled('div')`
  font-size: 20px;
  font-weight: 300;
`;

const LocationSubtitle = styled('div')`
  font-size: 11px;
  opacity: .6;
`;

const HideXs = styled('div')`
  @media (max-height: ${StyleConst.xs}) and (orientation: landscape) {
    display: none;
  }
`;

const Temperature = styled(HideXs)`
  display: flex;
  font-size: 16px;
`;

const DayTemperature = styled(HideXs)`
  font-size: 40px;
  line-height: 1.18;
  color: #fff;
  margin: 10px;
`;

const DayContent = styled('div')`
  align-self: center;
  padding-left: 12px;
  padding-right: 12px;
  border-left: 1px solid rgba(0, 0, 0, .2);
  text-transform: uppercase;
  text-align: center;
  color: #fff;
`;

const MonthRendered = styled('div')`
  font-size: 11px;
  font-weight: bold;
  line-height: 1.18;
`;

const DayRendered = styled('div')`
  font-size: 30px;
  font-weight: bold;
  line-height: 1.17;
`;

const AdditionalContainer = styled(HideXs)`
  padding: 16px 12px;
  background-color: #2e3335;
  display: flex;
  color: #fff;
  padding-bottom: 36px;
`;

const Additional = styled(HideXs)`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 11px;
  line-height: 1.09;
  text-align: center;

  i {
    font-size: 20px;
    padding: 0 8px;
    opacity: .2;
  }
`;

const WeatherCard = memo(props => {
  const {day, city} = props;
  const colorTemperature = city.name.startsWith(`S`) ? BASE_COLORS[0] : city.name.startsWith(`I`) ? BASE_COLORS[1] : BASE_COLORS[2];

  return (
    <Card>
      <Header>
        <SnapHuntImage src={SnapHuntIcon} alt={`Snaphunt`}/>

        <TitleContainer>
          <Title>{moment.unix(day.date).format('dddd')}</Title>
        </TitleContainer>
      </Header>

      <div>
          <WeatherImage src={`https://openweathermap.org/img/w/${day.main.icon}.png`}
                        alt={day.main.icon} />
      </div>

      <Temperature style={{backgroundColor: colorTemperature}}>
        <DayTemperature><Celsius temp={day.temp.max} /></DayTemperature>

        <StatusContainer>
          <StatusTitle>{day.main.description}</StatusTitle>
          <LocationSubtitle>{city.name}</LocationSubtitle>
        </StatusContainer>
        
        <DayContent>
          <MonthRendered>{moment.unix(day.date).format('MMM')}</MonthRendered>
          <DayRendered>{moment.unix(day.date).format('DD')}</DayRendered>
        </DayContent>
      </Temperature>

      <AdditionalContainer>
        <Additional><i className='fas fa-wind'></i> {day.speed} mps</Additional>
        <Additional><i className='fas fa-tint'></i>  {day.humidity} %</Additional>
        <Additional><i className='fas fa-sun'></i>  {day.clouds} %</Additional>
      </AdditionalContainer>
    </Card>
  );
});

export default WeatherCard;