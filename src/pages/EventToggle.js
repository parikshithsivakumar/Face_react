import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./events.css"; // Create a CSS file for styling

const EventToggle = () => {
  const [view, setView] = useState("all");
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [pastEvents, setPastEvents] = useState([]);

  const events = [
    {
      title: "Hogwarts Hackfest",
      date: "2023-11-20",
      description: "Immersing participants in the enchanting world of Harry Potter, the event infused coding challenges with the magic and wonder of J.K. Rowling's universe, creating a unique and captivating atmosphere.",
      venue: "Amrita School of Engineering in Bengaluru ",
      time: "November 21, 2023, to November 26, 2023",
      registrationLink: "https://example.com/register/event1",
      readmoreLink: "https://example.com/register/event2",
      image: "https://media.licdn.com/dms/image/D5622AQGslPUxu6lRrA/feedshare-shrink_1280/0/1718303482503?e=1723680000&v=beta&t=ngSjVS3wjuAcpkqMvhEJBfEBj1ebsLMYZtRlydQ0iSw", // Add the URL of the event image
    },
    {
      title: "Algomania",
      date: "2023-11-24",
      description: "Algomania is a Competitive Programming contest where participants compete in groups of three or four. The one-of-a-kind event had tough twists like the Blind Coding Round, in which participants solved puzzles without the use of a visual aid, and the quick-witted Relay Coding Round, which tested teamwork under time limits.",
      venue: "CS Labs",
      time: "9am - 12pm",
      registrationLink: "https://example.com/register/event2",
      readmoreLink: "https://example.com/register/event2",
      image: "https://media.licdn.com/dms/image/D5622AQGbgddMq83Fqw/feedshare-shrink_2048_1536/0/1720546428077?e=1723680000&v=beta&t=4Z8zTb5s9tBInZkRRYiBelNVM0Y_10YXZkXyiJgKPKM", // Add the URL of the event image
    },
    {
      title: "Hands On Workshop On React",
      date: "2024-02-03",
      description:"A big shoutout to our distinguished alumni, T N Varunram and Vishal Raman, for leading this engaging session. Their expertise on HTML/CSS basics and React’s core concepts, including architecture and state management, was invaluable. They provided deep insights into full-stack development, covering UI/UX, frontend, backend integration, and databases.",
      venue: "Venue 3",
      time: "04:00 PM",
      registrationLink: "https://example.com/register/event3",
      readmoreLink: "https://example.com/register/event3",
      image: "https://media.licdn.com/dms/image/D5622AQGAQWOmC0Ilug/feedshare-shrink_2048_1536/0/1718196472028?e=1723680000&v=beta&t=mxXBGrNVcaLW4QDq1exQiytEFHcHiZMa4yQBw1CIqBE", // Add the URL of the event image
    },
    {
      title: "Event 4",
      date: "2024-08-08",
      description: "Brief details about Event 4.",
      venue: "Venue 4",
      time: "04:00 PM",
      registrationLink: "https://example.com/register/event4",
      readmoreLink: "https://example.com/register/event2",
      image: "https://via.placeholder.com/150", // Add the URL of the event image
    },
    // Add more events here
  ];

  useEffect(() => {
    const currentDate = new Date().toISOString().split("T")[0];
    if (view === "upcoming") {
      setFilteredEvents(events.filter((event) => event.date >= currentDate));
    } else {
      const past = events.filter((event) => event.date < currentDate);
      setPastEvents(past.slice(-5)); // Get the recent 5 past events
      setFilteredEvents(past);
    }
  }, [view]);

  return (
    <div className="event-toggle-container">
      <div className="toggle-button-container">
        <button
          onClick={() => setView("all")}
          className={view === "all" ? "active" : ""}
        >
          Past Events
        </button>
        <button
          onClick={() => setView("upcoming")}
          className={view === "upcoming" ? "active" : ""}
        >
          Upcoming Events
        </button>
      </div>
      <div className="events-list">
        {view === "upcoming" ? (
          filteredEvents.map((event, index) => (
            <div className="event-card" key={index}>
              <div className="event-card-content">
                <div className="event-info">
                  <h3>{event.title}</h3>
                  <p>{event.description}</p>
                  <p>
                    <strong>Venue:</strong> {event.venue}
                  </p>
                  <p>
                    <strong>Time:</strong> {event.time}
                  </p>
                  <div className="event-buttons">
                    <a
                      href={event.registrationLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="register-button"
                    >
                      Register Here
                    </a>
                    <a
                      href={event.readmoreLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="read-more-button"
                    >
                      Read More
                    </a>
                    {/* <button className="read-more-button">Read More</button> */}
                  </div>
                </div>
                <div className="event-image">
                  <img src={event.image} alt={event.title} />
                </div>
              </div>
            </div>
          ))
        ) : (
          <Carousel showThumbs={false} autoPlay infiniteLoop>
            {pastEvents.map((event, index) => (
              <div className="carousel-item" key={index}>
                <img
                  src={event.image}
                  alt={event.title}
                  className="carousel-image"
                />
                <div className="carousel-caption">
                  <h3>{event.title}</h3>
                  <p>{event.description}</p>
                </div>
              </div>
            ))}
          </Carousel>
        )}
      </div>
    </div>
  );
};

export default EventToggle;
