const transportData = {
            "hero": {
                "title": "Transport Services",
                "subtitle": "Trichy SRM Medical College is located on the Chennai-Trichy Highway and a large number of town and mofussil buses stop at Trichy SRM Medical College. Apart from this, regular free buses run between the hospital and the city and neighboring villages at regularly specified timings for the convenience of patients."
            },
            "cityBusTimings": {
                "title": "CITY PATIENTS BUS TIMINGS",
                "timings": [
                    {
                        "time": "8:30 AM",
                        "location": "Venue: Chathiram Bus Stand Near Mayaa Hotel"
                    },
                    {
                        "time": "9:30 AM",
                        "location": "Venue: Chathiram Bus Stand Near Mayaa Hotel"
                    }
                ]
            },
            "ruralBusTimings": {
                "title": "PATIENT TRIP & 60+ PROJECT BUS SCHEDULE",
                "schedule": [
                    {
                    "day": "MONDAY",
                    "routes": [
                        {
                        "area": "PULLAMBADI",
                        "startingTime": "8:30 AM / 9:30 AM / 10:30 AM",
                        "arrivalTime": "12:40 PM / 2:40 PM"
                        },
                        {
                        "area": "THOTTIYAM / MUSIRI",
                        "startingTime": "8:30 AM / 9:30 AM / 10:30 AM",
                        "arrivalTime": "12:40 PM / 2:40 PM"
                        }
                    ]
                    },
                    {
                    "day": "TUESDAY",
                    "routes": [
                        {
                        "area": "ELANTHAIKUDAM",
                        "startingTime": "8:30 AM / 9:30 AM / 10:30 AM",
                        "arrivalTime": "12:40 PM / 2:40 PM"
                        },
                        {
                        "area": "SENGATTUPATTI",
                        "startingTime": "8:30 AM / 9:30 AM / 10:30 AM",
                        "arrivalTime": "12:40 PM / 2:40 PM"
                        }
                    ]
                    },
                    {
                    "day": "WEDNESDAY",
                    "routes": [
                        {
                        "area": "KAVATTANGKURUCHI",
                        "startingTime": "8:30 AM / 9:30 AM / 10:30 AM",
                        "arrivalTime": "12:40 PM / 2:40 PM"
                        },
                        {
                        "area": "UPPLIAPURAM",
                        "startingTime": "8:30 AM / 9:30 AM / 10:30 AM",
                        "arrivalTime": "12:40 PM / 2:40 PM"
                        }
                    ]
                    },
                    {
                    "day": "THURSDAY",
                    "routes": [
                        {
                        "area": "OOVANOOR",
                        "startingTime": "8:30 AM / 9:30 AM / 10:30 AM",
                        "arrivalTime": "12:40 PM / 2:40 PM"
                        },
                        {
                        "area": "PERUVALAPPUR / MUTHUVATHUR",
                        "startingTime": "8:30 AM / 9:30 AM / 10:30 AM",
                        "arrivalTime": "12:40 PM / 2:40 PM"
                        }
                    ]
                    },
                    {
                    "day": "FRIDAY",
                    "routes": [
                        {
                        "area": "ELANTHAIKUDAM",
                        "startingTime": "8:30 AM / 9:30 AM / 10:30 AM",
                        "arrivalTime": "12:40 PM / 2:40 PM"
                        }
                    ]
                    },
                    {
                    "day": "SATURDAY",
                    "routes": [
                        {
                        "area": "ELANTHAIKUDAM",
                        "startingTime": "8:30 AM / 9:30 AM / 10:30 AM",
                        "arrivalTime": "12:40 PM / 2:40 PM"
                        }
                    ]
                    }
                ]
            }

        };;

        // Render the transport page
        function renderTransportPage(data) {
            const app = document.getElementById('transport-app');
            
            let html = `
                <!-- City Bus Timings Section -->
                <section class="transport-section transport-city-section">
                    <div class="transport-container section-header">
                        <h2 style="margin-bottom:30px" >${data.cityBusTimings.title}</h2>
                        <div class="transport-city-timeline">
                            ${data.cityBusTimings.timings.map(timing => `
                                <div class="transport-timeline-item">
                                    <div class="transport-timeline-time">${timing.time}</div>
                                    <div class="transport-timeline-location">${timing.location}</div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </section>

                <!-- Rural Bus Timings Table -->
                <section class="transport-section  transport-table-section hospital-services">
                    <div class="transport-container section-header">
                        <h2 style="margin-bottom:30px">${data.ruralBusTimings.title}</h2>
                        <div class="transport-table-wrapper">
                            <table class="transport-table">
                                <thead>
                                    <tr>
                                        <th>DAY</th>
                                        <th>AREA</th>
                                        <th>STARTING TIME</th>
                                        <th>ARRIVAL TIME</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    ${data.ruralBusTimings.schedule.map((daySchedule, dayIndex) => {
                                        return daySchedule.routes.map((route, routeIndex) => `
                                            <tr ${routeIndex === 0 ? 'class="transport-day-group"' : ''}>
                                                <td>${routeIndex === 0 ? daySchedule.day : ''}</td>
                                                <td>${route.area}</td>
                                                <td>${route.startingTime}</td>
                                                <td>${route.arrivalTime}</td>
                                            </tr>
                                        `).join('');
                                    }).join('')}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            `;
            
            app.innerHTML = html;
        }

        // Initialize the page
        renderTransportPage(transportData);