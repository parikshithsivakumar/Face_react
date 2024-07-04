import React, { useState, useEffect } from "react";
import EventCalendar from "./calender"; // Import your existing EventCalendar component
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./events.css"; // Create a CSS file for styling

const EventToggle = () => {
  const [view, setView] = useState("all");
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [pastEvents, setPastEvents] = useState([]);

  const events = [
    {
      title: "Event 1",
      date: "2024-08-05",
      description: "Brief details about Event 1.",
      venue: "Venue 1",
      time: "10:00 AM",
      registrationLink: "https://example.com/register/event1",
      image: "https://via.placeholder.com/150", // Add the URL of the event image
    },
    {
      title: "Event 2",
      date: "2024-08-26",
      description: "Brief details about Event 2.",
      venue: "Venue 2",
      time: "02:00 PM",
      registrationLink: "https://example.com/register/event2",
      image: "https://via.placeholder.com/150", // Add the URL of the event image
    },
    {
      title: "Event 3",
      date: "2024-0-03",
      description: "Brief details about Event 3.A workshop on react happened where our alumini from 24/7ai company came as speakers of the workshop",
      venue: "Venue 3",
      time: "04:00 PM",
      registrationLink: "https://example.com/register/event3",
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
                    <button className="read-more-button">Read More</button>
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
