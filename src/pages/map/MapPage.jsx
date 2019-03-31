import React, { Fragment } from 'react';
import styled from '@emotion/styled';
import Swiper from 'react-id-swiper';
import { Pagination } from 'swiper/dist/js/swiper.esm';

import WeatherPage from '../PageHOC.jsx';
import Map from './Map.jsx';
import WeatherCard from './WeatherCard.jsx';
import { Loader } from '../../components/Loaders.jsx';
import Error from '../../components/Error.jsx';

const CarouselWrapper = styled(Loader)` 
    min-height: 110px;
    padding: 20px 0;

    .swiper-pagination-bullet-active {
        background: #fff;
    }
`;

const swiperIdConfig = {
    modules: [Pagination],
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
    },
    loop: true,
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 30
};

const MapPage = props => {
    const { list, city, request, error, getWeather } = props;

    return (
        <Fragment>
            <Map
                onClick={getWeather}
                popupText={city.name}
                coord={city.coord}
            />
            <CarouselWrapper showLoader={request}> 
                {list.length && !request ? <Swiper {...swiperIdConfig}>
                    {
                        list.map((day) => (<div key={day.date} style={{width: 400, maxWidth: "100%"}}>
                            <WeatherCard day={day} city={city}/>
                        </div>))
                    }
                </Swiper> : null}
            </CarouselWrapper>

            <Error error={error} />
        </Fragment>
    );
};

export default WeatherPage(MapPage);