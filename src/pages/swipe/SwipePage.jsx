import React, {PureComponent} from 'react';
import styled from '@emotion/styled';
import Swiper from 'react-id-swiper';
import { Pagination } from 'swiper/dist/js/swiper.esm';
import Switch from "react-switch";

import WeatherService from '../../services/WeatherService';
import PageHOC from '../PageHOC.jsx';
import  SwipeCards from '../../components/swipeCard/Cards';
import  CardSwitcher from '../../components/swipeCard/CardSwitcher';
import WeatherCard from '../map/WeatherCard.jsx';

import StyleConst from '../../style/constants';

const swiperIdConfig = {
  modules: [Pagination],
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  },
  spaceBetween: 30
};

const Page = styled('div')`
  display: block;
  
  & > div {
    padding: 0 20px;
  }
  
  @media (max-width: ${StyleConst.sm}) {
    display: block;
  
    & > div {
      padding: 0;
    }
  }

  .swiper-pagination-bullet-active {
    background: #fff;
  }
`;

const SwitchContainer = styled('div')`
  display: flex;
  justify-content: center;
  margin: 12px;
`;

const InfoContainer = styled('div')`
  flex: 1;
  height: calc(100vh - 120px);

  .swipe-container {
    margin: auto;
    position: relative;
    min-height: calc(100vh - 120px);
    max-height: calc(100vh - 120px);
    width: calc(100%);
    overflow: hidden;
  }

  .card {
    background-size: cover;
    position: absolute;
    height: 280px;
    width: 400px;
    max-width: 95%;
    margin: 0 auto;
    transition: box-shadow .3s;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    cursor: pointer;
  }
  
  .animate {
    transition: transform .3s;
    box-shadow: none;
  }
  
  .inactive {
    box-shadow: none;
  }
`;

const SwiperContainer = styled('div')`
  display: flex;
  align-items: center;
  height: calc(100vh - 120px);

  .swiper-container {
    max-width: 400px;
  }
`;

class SwipePage extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isTinderMode: false
    };
  }

  render() {
    const { city, list, error, getWeather } = this.props;
    const { isTinderMode } = this.state;

    return (
      <Page>
        <SwitchContainer>
          <Switch onChange={(checked) => this.setState({isTinderMode: checked})} checked={isTinderMode} />
        </SwitchContainer>

        {!isTinderMode ? <SwiperContainer>
          {list.length ? <Swiper {...swiperIdConfig}>
            {list.map((day) => (<div  key={day.date} style={{width: 400, maxWidth: "100%"}}>
              <WeatherCard day={day} key={day.date} city={city}/>
            </div>))}
          </Swiper> : null}
        </SwiperContainer> : <InfoContainer>
          <SwipeCards className="swipe-container">
            {list.map((day) => 
              <CardSwitcher
                key={day.date}
                onSwipeLeft={() => console.info('swipe left')} 
                onSwipeRight={() => console.info('swipe right')}
              >
                <WeatherCard day={day} key={day.date} city={city}/>
              </CardSwitcher>
            )}
          </SwipeCards>
        </InfoContainer>}
      </Page>
    )
  }
};

export default PageHOC(SwipePage);