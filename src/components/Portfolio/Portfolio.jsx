import React, { useEffect, useState } from "react"
import "./portfolio.css"

import {
  portfolioList,
  featuredPortfolio,
  frontendPortfolio,
  fullstackPortfolio,
} from "../../data/data"

import { Heading } from "../Heading/Heading"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faExternalLinkSquareAlt } from "@fortawesome/free-solid-svg-icons/faExternalLinkSquareAlt";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons/faGithubSquare";
import PortfolioItem from "./PortfolioItem/PortfolioItem";


const Portfolio = () => {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;

      case "frontend":
        setData(frontendPortfolio);
        break;

      case "fullstack":
        setData(fullstackPortfolio);
        break;

      default:
        break;
    }
  }, [selected]);

  return (
    <section
      data-aos="fade-left"
      className="portfolio"
      name="portfolio"
      id="portfolio"
    >
      <Heading text="Portfolio" style={{ padding: "3rem" }} />
      <div className="list">
        {portfolioList &&
          portfolioList.map((list) => (
            <PortfolioItem
              title={list.title}
              key={list.id}
              active={selected === list.id}
              setSelected={setSelected}
              id={list.id}
              repoUrl={list.repositoryUrl}
              liveUrl={list.liveUrl}
              tagline={list.tagline}
            />
          ))}
      </div>
      <div className="row">
        {data &&
          data.map((item, index) => (
            <div className="column" key={index}>
              <img src={item.img} alt={item.title} />
              <div className="overlay">
                <div className="left">
                  <h3>{item.title}</h3>
                  {item.tagline && <p>{item.tagline}</p>}
                </div>
                <div className="right">
                  <a href={item.repositoryUrl}>
                    <FontAwesomeIcon
                      icon={faGithubSquare}
                      size="2x"
                      className="icon"
                      style={{ marginRight: "0.6em" }}
                      title="Github Repo"
                    />
                  </a>

                  <a
                    href={item.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faExternalLinkSquareAlt}
                      size="2x"
                      className="icon"
                      title="Live view"
                    />
                  </a>
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Portfolio;
