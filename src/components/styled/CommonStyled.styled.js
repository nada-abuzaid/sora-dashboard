import { Link } from 'gatsby';
import styled from 'styled-components';
import ScribblesSvg from '../../assets/svgs/Scribbles.svg';
import RandomScribblesSvg from '../../assets/svgs/random-scribble.svg';

export const PanelTitle = styled.div`
  font-family: "DM Serif Text";
  font-size: 42px;
  color: ${({ theme: { colors } }) => colors.primaryDark};
  text-align: center;
  line-height: 58px;
  @media only screen and (max-width: ${({ theme: { screens } }) => screens.tablet_portrait}) {
    padding: 0px 30px;
  }
`;

export const RandomScribble = styled(RandomScribblesSvg)`
  position: absolute;
  right: calc(100% - 52px);
  bottom: calc(100% - 50px);
`;

export const Scribbles = styled(ScribblesSvg)`
  position: absolute;
  right: calc(100% - 52px);
  bottom: calc(100% - 50px);
  @media only screen and (max-width: ${({ theme: { screens } }) => screens.tablet_portrait}) {
    display: none;
  }
`;

export const LogosWrapper = styled.div`
  width: 100%;
  max-width: ${({ theme: { screens } }) => screens.desktop};
  display: flex;
  align-items: center;
  margin: auto;
  position: relative;
  justify-content: space-around;

  @media only screen and (max-width: ${({ theme: { screens } }) => screens.desktop}) {
    flex-wrap: wrap;
    padding: 0px 20px;
    width: calc(100% - 40px);
  }
`;

export const SingleLogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 60px;
  @media only screen and (max-width: ${({ theme: { screens } }) => screens.desktop}) {
    flex: 1 0 33%;
  }
  @media only screen and (max-width: 440px) {
    flex: 1 0 34%;
  }
`;

export const PanelSubTitle = styled.div`
  font-size: 20px;
  color: ${({ theme: { colors } }) => colors.lightGray2};
  line-height: 27px;
  margin-bottom: 33px;
  padding-right: 100px;
  font-family: NunitoSans;
  @media only screen and (max-width: ${({ theme: { screens } }) => screens.tablet_portrait}) {
    font-size: 18px;
  }
`;

export const LearnMore = styled(Link)`
  color: ${({ theme: { colors } }) => colors.white};
  padding: 10px 20px;
  text-decoration: none;
  background: ${({ theme: { colors } }) => colors.primary};
  margin-top: 20px;
  border-radius: 6px;
  font-family: NunitoSans;
`;

export const ErrorMessage = styled.div`
  color: ${({ theme: { colors } }) => colors.error};
  font-family: Mulish;
  font-size: 14px;
  margin-left: 10px;
  margin-top: 10px;
`;

export const SuccessMessage = styled.div`
  color: ${({ theme: { colors } }) => colors.darkGreen};
  font-family: Mulish;
  font-size: 12px;
  margin-left: 10px;
  margin-top: 10px;
`;
