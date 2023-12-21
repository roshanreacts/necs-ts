import { http, HttpResponse } from 'msw';
import { App } from './Profile';

export default {
    title: 'Demos/Fetch',
    component: App,
};

export const DefaultBehavior = {};

const films = [
    {
        title: 'A New Hope',
        episode_id: 4,
        opening_crawl: `(Mocked) Rebel spaceships have won their first victory against the evil Galactic Empire.`,
    },
    {
        title: 'Empire Strikes Back',
        episode_id: 5,
        opening_crawl: `(Mocked) Imperial troops are pursuing the Rebel forces across the galaxy.`,
    },
    {
        title: 'Return of the Jedi',
        episode_id: 6,
        opening_crawl: `(Mocked) Luke Skywalker has returned to his home planet of Tatooine to rescue Han Solo.`,
    },
];

export const MockedSuccess = {
    parameters: {
        msw: {
            handlers: [
                http.get('https://swapi.dev/api/films/', () => {
                    return HttpResponse.json({
                        results: films,
                    });
                }),
            ],
        },
    },
};

export const MockedError = {
    parameters: {
        msw: {
            handlers: [
                http.get('https://swapi.dev/api/films/', () => {
                    return HttpResponse.json({
                        error: films,
                    }, { status: 500 });
                }),
            ],
        },
    },
};