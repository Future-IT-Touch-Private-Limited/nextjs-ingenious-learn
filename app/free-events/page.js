"use client"

import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import {  webinarEvents } from '../components/CommonData/CardsDetailData'
import { useDispatch, useSelector } from 'react-redux';

import { fetechEvents } from "../features/eventData/eventSlicer"


import { StorageLink } from '../components/apiLink';
const FreeEvents = () => {
    const [activeTab, setActiveTab] = useState('events');
    const dispatch = useDispatch();
    // const trainingData = useSelector((state) => state.training.data.data);
    const events = useSelector((state) => state.eventdata.data);
    const status = useSelector((state) => state.training.status);

    

    useEffect(() => {
      if (status === 'idle') {
        // dispatch(fetechEvents());
      }

  
    }, [status, dispatch]);


    const handleTabChange = (tab) => {
      setActiveTab(tab);
    };
    const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 5;

  // Logic to calculate pagination
  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = webinarEvents.slice(indexOfFirstEvent, indexOfLastEvent);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


const formatDate = (dateStr) => {
  const date = new Date(dateStr);
  
  // Format day of the week and date
  const optionsDate = { day: '2-digit', month: 'long' };
  const formattedDate = date.toLocaleDateString('en-GB', optionsDate);

  // Format day of the week
  const optionsDay = { weekday: 'short' };
  const dayOfWeek = date.toLocaleDateString('en-GB', optionsDay);

  // Format time
  const optionsTime = { hour: '2-digit', minute: '2-digit', hour12: true };
  const startTime = date.toLocaleTimeString('en-GB', optionsTime);
  const endTime = new Date(date.getTime() + 60 * 60 * 1000).toLocaleTimeString('en-GB', optionsTime); // Assuming 1 hour duration
  
  // Add timezone (IST in this case)
  const timeZone = 'IST';

  return `${formattedDate} (${dayOfWeek}), ${startTime} – ${endTime} ${timeZone}`;
}

  return (
    <>
     <head>
        <title>Free Events - Ingenious Learn</title>
        <meta name="description" content="Discover upcoming free events hosted by Ingenious Learn, including webinars, workshops, and more." />
        <meta name="robots" content="index, follow" />
        
        <meta property="og:title" content="Free Events - Ingenious Learn" />
        <meta property="og:description" content="Check out the latest free events at Ingenious Learn and register to join our educational workshops and webinars." />
        <meta property="og:image" content="/images/free-events-banner.jpg" />
        <meta property="og:url" content="https://www.ingeniouslearn.com/free-events" />
        <meta property="og:type" content="website" />
      
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Free Events - Ingenious Learn" />
        <meta name="twitter:description" content="Join our free educational webinars and workshops hosted by Ingenious Learn." />
        <meta name="twitter:image" content="/images/free-events-banner.jpg" />
      </head>
     <div className="rows bg2 banner2">
      <img 
        src="/images/eventwebpagebanner.webp"
        alt="infosectrain training" 
        loading="lazy" 
      />
      <div className="bannertext container">
        <h1>Events on Ingenious Works Pvt Ltd</h1>
      </div>
      <div className="bread container">
        <Link className="bread-link bread-home" href="" title="Home">Home</Link> / 
        <Link href="" title="All Events">All Events</Link>
      </div>
    </div>

      {activeTab === 'events' && (
        <section className="container-fluid bg2">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12">
                <header className="page-header"></header>
                <div className="row">
                {events.map((event) => {
                  // Format date and time
                  const formattedDateTime = formatDate(event.date);
                  return (
                    <div className="col-sm-6 p-3" key={event.id} id={`post-${event.id}`}>
                      <div className="eventcard">
                        <Link href={event.link} rel="nofollow">
                          <img src={`${StorageLink}/${event.img}`} loading="lazy" alt={event.title} />
                        </Link>
                        <div className="eventcard_inner">
                          <h2 className="entry-title mt-2">
                            <Link rel="nofollow" href={event.link}>
                              {event.heading}
                            </Link>
                          </h2>
                          <span className="e_date_time">{formattedDateTime}</span>
                          <div className="row">
                            <div className="col-md-6 eventcard_button">
                             
                              <br />
                              <br />
                              <div
                                dangerouslySetInnerHTML={{ __html: event.description }}
                              />
                            </div>
                            <div className="col-md-6 btn-text"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {activeTab === 'webinars' && (
     <section className="container-fluid bg2">
     <div className="container">
       <div className="row pt-1 pb-4 mb-3">
         <div className="col-lg-12">
           <header className="page-header"></header>
           {currentEvents.map((event) => (
             <div className="eventbox_card p-3" key={event.id} id={`post-${event.id}`}>
               <div className="eventcard">
                 <div className="embed-responsive embed-responsive-16by9">
                   <iframe
                     className="embed-responsive-item"
                     width="100%"
                     src={event.videoSrc}
                     frameBorder="0"
                     allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                     allowFullScreen
                     title={event.heading}
                   ></iframe>
                 </div>
                 <div className="eventcard_inner">
                   <h2 className="entry-title">{event.heading}</h2>
                   <span className="e_date">{event.date}</span>,{' '}
                   <span className="e_time">{event.time}</span>
                 </div>
               </div>
             </div>
           ))}
           <nav className="navigation pagination" aria-label="Posts">
             <h2 className="screen-reader-text">Posts navigation</h2>
             <div className="nav-links">
               {Array.from({ length: Math.ceil(webinarEvents.length / eventsPerPage) }, (_, index) => (
                 <span
                   key={index}
                   className={`page-numbers ${currentPage === index + 1 ? 'current' : ''}`}
                   onClick={() => paginate(index + 1)}
                 >
                   <span className="meta-nav screen-reader-text"> </span>
                   {index + 1}
                 </span>
               ))}
               <Link className="next page-numbers" onClick={() => paginate(currentPage + 1)} href="#">
                 <span className="screen-reader-text">Next</span>
               </Link>
             </div>
           </nav>
         </div>
       </div>
     </div>
   </section>
      )}
    </>
  )
}

export default FreeEvents