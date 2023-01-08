import styled from "styled-components";
import { BiSearch } from "react-icons/bi";
import { useContext, useState } from "react";
import { WeatherContext } from "../context/WeatherContext";

function Weather() {
  const { name, temp, condition, conditionImage, time, image, setCity, rain, wind, humidity, cloudy } =
    useContext(WeatherContext);

  const [inputText, setInputText] = useState();

  function changeCity(e) {
    e.preventDefault();

    setCity(inputText)
    setInputText('');
  }

  return (
    <WeatherContainer image={image}>
      <WeatherContent>
        <Logo>
          <p>the.weather</p>
        </Logo>
        <WeatherInfo>
          <Degrees>
            <p>{temp}°</p>
          </Degrees>
          <CityInfo>
            <CityName>
              <p>{name}</p>
            </CityName>
            <Hour>
              <p>{time && `${time[1]} - ${time[0]}`}</p>
            </Hour>
          </CityInfo>
          <WeatherDetail>
            <WeatherLogo>
              <img src={conditionImage} />
            </WeatherLogo>
            <WeatherName>
              <p>{condition}</p>
            </WeatherName>
          </WeatherDetail>
        </WeatherInfo>
      </WeatherContent>
      <WeatherDetails>
        <ActionControl onSubmit={changeCity}>
          <input
            type={"text"}
            required
            placeholder="Another location"
            onChange={(e) => setInputText(e.target.value)}
            value={inputText}
          />
          <SearchButton>
            <BiSearch />
          </SearchButton>
        </ActionControl>
        <RecommendedCity>
          <p onClick={() => setCity('birmingham')}>Birmingham</p>
          <p onClick={() => setCity('manchester')}>Manchester</p>
          <p onClick={() => setCity('new york')}>New York</p>
          <p onClick={() => setCity('california')}>California</p>
        </RecommendedCity>
        <WeatherDetailsContent>
          <Title>
            <p>Weather Details</p>
          </Title>
          <Cloudy>
            <p>Cloudy</p>
            <p>{cloudy}%</p>
          </Cloudy>
          <Humidity>
            <p>Humidity</p>
            <p>{humidity}%</p>
          </Humidity>
          <Wind>
            <p>Wind</p>
            <p>{wind}km/h</p>
          </Wind>
          <Rain>
            <p>Rain</p>
            <p>{rain}mm</p>
          </Rain>
        </WeatherDetailsContent>
      </WeatherDetails>
    </WeatherContainer>
  );
}

const Title = styled.div`
  margin-bottom: 20px;
`;

const ActionControl = styled.form`
  input {
    background: none;
    border: none;
    border-bottom: 1px solid #999;
    padding: 7px 2px;
    font-size: 1.1rem;
    width: 70%;
    color: #fff;
  }
`;

const RecommendedCity = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-bottom: 1px solid #999;
  padding-bottom: 50px;
  color: #999;

  p {
    cursor: pointer;
    transition: 0.3s;
    width: fit-content;

    :hover {
      color: #fff;
    }
  }
`;

const WeatherDetailsContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  border-bottom: 1px solid #999;
  padding-bottom: 40px;

  div {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
`;

const Wind = styled.div`
  p:nth-child(1) {
    color: #999;
  }

  p:nth-child(2) {
    color: #fff;
  }
`;

const Rain = styled.div`
  p:nth-child(1) {
    color: #999;
  }

  p:nth-child(2) {
    color: #fff;
  }
`;

const Cloudy = styled.div`
  p:nth-child(1) {
    color: #999;
  }

  p:nth-child(2) {
    color: #fff;
  }
`;

const SearchButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  width: 100px;
  height: 95px;
  background: #999;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  transition: 0.3s;

  :hover {
    background: white;
  }

  * {
    width: 30px;
    height: 30px;
  }
`;

const Humidity = styled.div`
  p:nth-child(1) {
    color: #999;
  }

  p:nth-child(2) {
    color: #fff;
  }
`;

const WeatherDetails = styled.div`
  width: 35%;
  height: 100%;
  background: #00000099;
  padding: 60px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  position: relative;
`;

const WeatherContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background: ${(props) => `url(${props.image})`};
  background-size: cover;
  background-position: center;
`;

const WeatherInfo = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  margin-bottom: 30px;

  p {
    text-shadow: 0px 0px 10px black;
  }
`;

const Logo = styled.div`
  font-weight: 600;
  font-size: 0.8rem;
`;

const Degrees = styled.div`
  font-size: 9rem;
  font-weight: 400;
`;

const CityInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CityName = styled.div`
  font-size: 4rem;
  font-weight: 400;
  margin-bottom: -6px;
`;

const Hour = styled.div`
  letter-spacing: 2px;
`;

const WeatherDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  margin-top: 25px;
`;

const WeatherLogo = styled.div`
  height: 40px;
  width: 40px;
  img {
    width: 40px;
    height: 40px;
  }
`;

const WeatherName = styled.div``;

const WeatherContent = styled.div`
  width: 65%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 50px 70px;
`;

export default Weather;
