(function () {
    const dataUrl = './assets/data/events.json';

    const escapeHtml = value => String(value ?? '').replace(
        /[&<>"']/g,
        char => ({
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#039;'
        }[char])
    );

    const card = (event, compact = false) => {
        const image = escapeHtml(event.images[0]);
        const title = escapeHtml(event.title);
        const date = escapeHtml(event.dateLabel);
        const venue = escapeHtml(event.venue);
        const beneficiaries = event.beneficiaries
            ? ` | ${escapeHtml(event.beneficiaries)} beneficiaries`
            : '';

        if (compact) {
            return `
                <div class="swiper-slide">
                    <a class="event-link" href="event.html?id=${encodeURIComponent(event.id)}">
                        <div class="card">
                            <img src="${image}" alt="${title}" class="card-image" loading="lazy">
                            <div class="card-content">
                                <div class="card-date">&#128197; ${date}</div>
                                <h3 class="card-title">${title}</h3>
                                <p class="card-description">${venue}${beneficiaries}</p>
                            </div>
                        </div>
                    </a>
                </div>`;
        }

        return `
            <div class="swiper-slide">
                <a class="event-link" href="event.html?id=${encodeURIComponent(event.id)}">
                    <div class="event-card">
                        <div class="event-image">
                            <img src="${image}" alt="${title}" loading="lazy">
                        </div>
                        <div class="event-info">
                            <div class="event-date-badge">
                                <div class="day">${date}</div>
                            </div>
                            <h4>${title}</h4>
                            <div class="event-meta">
                                <span>Venue: ${venue}</span>
                            </div>
                            ${event.beneficiaries ? `
                                <div class="event-meta">
                                    <span>Beneficiaries: ${escapeHtml(event.beneficiaries)}</span>
                                </div>` : ''}
                        </div>
                    </div>
                </a>
            </div>`;
    };

    const render = (selector, events, compact) => {
        const wrapper = document.querySelector(`${selector} .swiper-wrapper`);

        if (wrapper) {
            wrapper.innerHTML = events
                .map(event => card(event, compact))
                .join('');
        }
    };

    const setDetail = event => {
        if (!event) {
            document.title = 'Event Not Found - Trichy SRM';
            return;
        }

        document.title = `${event.title} - Trichy SRM Medical College`;

        document.querySelectorAll('[data-event-title]').forEach(title => {
            title.textContent = event.title;
        });

        const date = document.querySelector('[data-event-date]');
        const venue = document.querySelector('[data-event-venue]');
        const description = document.querySelector('[data-event-description]');
        const beneficiaries = document.querySelector('[data-event-beneficiaries]');
        const gallery = document.querySelector('[data-event-gallery]');

        if (date) date.textContent = event.dateLabel;
        if (venue) venue.textContent = event.venue;
        if (description) description.textContent = event.description;

        if (beneficiaries) {
            beneficiaries.textContent = event.beneficiaries
                ? `${event.beneficiaries} beneficiaries`
                : 'Event highlights';
        }

        if (gallery) {
            gallery.innerHTML = event.images.map((image, index) => `
                <figure>
                    <img
                        src="${escapeHtml(image)}"
                        alt="${escapeHtml(event.title)}${event.images.length > 1 ? ` - image ${index + 1}` : ''}"
                    >
                </figure>`).join('');
        }
    };

    const eventSelectors = [
        '.events-slider',
        '.news-swiper',
        '.newsletter-swiper'
    ];

    eventSelectors.forEach(selector => {
        const wrapper = document.querySelector(`${selector} .swiper-wrapper`);

        if (wrapper) {
            wrapper.replaceChildren();
        }
    });

    fetch(dataUrl)
        .then(response => response.json())
        .then(({ events }) => {
            render(
                '.events-slider',
                events.filter(event => event.featured),
                false
            );

            render(
                '.news-swiper',
                events
                    .filter(event => event.status === 'upcoming' || event.status === 'latest')
                    .slice(0, 6),
                true
            );

            render(
                '.newsletter-swiper',
                events.filter(event => event.status === 'completed'),
                true
            );

            document.querySelectorAll('.swiper').forEach(element => {
                if (element.swiper) {
                    element.swiper.update();
                }
            });

            const id = new URLSearchParams(location.search).get('id');

            if (id) {
                setDetail(events.find(event => event.id === id));
            }

            document.dispatchEvent(new CustomEvent('events:loaded'));
        })
        .catch(error => console.error('Unable to load events:', error));
})();
