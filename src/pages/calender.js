import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './calender.css';

const formatDate = (date) => {
  return date.toISOString().split('T')[0];
};

const EventCalendar = () => {
  const [events, setEvents] = useState([
    {
      title: 'Event 1',
      date: '2024-06-10',
      description: 'Brief details about Event 1.',
      venue: 'Venue 1',
      time: '10:00 AM',
      registrationLink: 'https://example.com/register/event1',
      image: 'https://via.placeholder.com/150' // Add the URL of the event image
    },
    {
      title: 'Event 2',
      date: '2024-06-17',
      description: 'Brief details about Event 2.',
      venue: 'Venue 2',
      time: '02:00 PM',
      registrationLink: 'https://example.com/register/event2',
      image: 'https://via.placeholder.com/150' // Add the URL of the event image
    },
    {
      title: 'Event 3',
      date: '2024-06-17',
      description: 'Brief details about Event 3.',
      venue: 'Venue 3',
      time: '04:00 PM',
      registrationLink: 'https://example.com/register/event3',
      image: 'https://via.placeholder.com/150' // Add the URL of the event image
    },
    // Add more events here
  ]);

  const [selectedDate, setSelectedDate] = useState(null);

  const onDateClick = (date) => {
    const formattedDate = formatDate(date);
    setSelectedDate(formattedDate);
  };

  const eventDetails = events.filter(event => event.date === selectedDate);

  return (
    <div className="calendar-container">
      <h1 style={{ color: "#5aefe7"  }}>Events Calender</h1>
      <Calendar
        onClickDay={onDateClick}
        tileClassName={({ date, view }) => {
          const formattedDate = formatDate(date);
          if (events.find(event => event.date === formattedDate)) {
            return 'react-calendar__tile--event-tile';
          }
          return null;
        }}
      />
      {eventDetails.length > 0 && (
        <div className="event-details-container">
          {eventDetails.map((event, index) => (
            <div className="event-card" key={index}>
              <div className="event-card-content">
                <div className="event-info">
                  <h3>{event.title}</h3>
                  <p>{event.description}</p>
                  <p><strong>Venue:</strong> {event.venue}</p>
                  <p><strong>Time:</strong> {event.time}</p>
                  <a href={event.registrationLink} target="_blank" rel="noopener noreferrer" className="register-button">
                    Register Here
                  </a>
                </div>
                <div className="event-image">
                  <img src={event.image} alt={event.title} />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default EventCalendar;
