/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Artisan Choice",
    description:
      "Working in a team of two, designed and developped a mobile application which brought together several service providers and their customers using their location to bring users's fast service delivery and proximity.\nSTACK: Flutter, Firebase",
    url: "https://dev.to/azure/10-things-to-know-about-azure-static-web-apps-3n4i",
  },
  {
    title: "IT-ACADEMIA",
    description:
      "Designed and developped a moodle-like web app that improved the management, submission and correction of IT development projects in a technology school.\nSTACK: Django, MySQL",
    url: "https://github.com/Ionfinisher/django-it-academia",
  },
  {
    title: "JOBTOPIA",
    description:
      "Designed and developped a web platform that brings jobseekers and companies closer together with a real time notification system for the status of job applications.\nSTACK: HTML, CSS, SCSS, JS, PHP, MySQL",
    url: "https://github.com/Ionfinisher/jobtopia",
  },
  {
    title: "Boussole du chef",
    description:
      "Built a Wordpress website for cooks in search of new recipes.\nWARNING: The website might run slow plus there is no SSL encryption.\nSTACK: Wordpress",
    url: "http://fortestingpurpose.atwebpages.com/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
