import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import "../../css/typography.css";

export default function Upgrade({ isOpen }) {
  return (
    <UpgradeStyle isOpen={isOpen}>
      <div className="upgrade">
        <StaticImage
          src="../../assets/svgs/PRO.svg"
          alt="Upgrade to PRO"
          className="upgrade-img"
        />
        <h3 className="title">Upgrade to Premium</h3>
        <p className="desc">
          Upgrade to unlock premium data for your employers.
        </p>
        <Link className="btn-more" to="/">
          Learn more
        </Link>
      </div>
    </UpgradeStyle>
  );
}

const UpgradeStyle = styled.div`
  display: ${({isOpen}) => (isOpen ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  position: relative;
  margin-top: 0.5rem;
  .upgrade {
    gap: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 0.5rem;
    padding: 4rem 1rem 2rem 1rem;
    margin-top: 2rem;
    background-color: #f4f7f7;
    width: 75%;
    height: 80%;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    .upgrade-img {
      width: 45%;
      position: absolute;
      top: 0;
    }
    .title {
      font-weight: bold;
      font-family: "DM Serif Text";
      font-size: 1.3rem;
      text-align: center;
      margin-bottom: 0;
    }
    .desc {
      font-family: "NunitoSans";
      text-align: center;
    }
    a.btn-more {
      padding: 0.5rem 2rem;
      border-radius: 6px;
      background: ${({
        theme: {
          colors: { primary },
        },
      }) => primary};
      color: ${({
        theme: {
          colors: { white },
        },
      }) => white};
    }
  }
`;
