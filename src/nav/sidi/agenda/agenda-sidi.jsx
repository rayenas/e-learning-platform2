import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import Navbar from '../../Navbar';

const Agendas = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Load events from local storage when the component mounts
    const storedEvents = JSON.parse(localStorage.getItem('events')) || [];
    setEvents(storedEvents);
  }, []);

  const handleDateClick = (arg) => {
    const title = prompt('Event name:');
    if (title) {
      const startStr = arg.dateStr;
      const endStr = new Date(arg.date).setDate(new Date(arg.date).getDate() + 1);
      const newEvent = {
        title,
        start: startStr,
        end: endStr,
        allDay: true,
      };

      // Update state and save to local storage
      setEvents((prevEvents) => {
        const updatedEvents = [...prevEvents, newEvent];
        localStorage.setItem('events', JSON.stringify(updatedEvents));
        return updatedEvents;
      });
    }
  };

  return (
    <div className="App">
      <Navbar />
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay',
        }}
        height="90vh"
        events={events}
        dateClick={handleDateClick}
      />
    </div>
  );
};

export default Agendas;