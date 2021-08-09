import { render, screen } from '@testing-library/react';
import Result from '../Results/Results.jsx';
import '@testing-library/jest-dom/extend-expect';

it('must render result.......', () => {
    const data = {
        Headers: {
            'content-type': 'string application/json',
        },
        count: 2,
        results: [
            { name: 'fake thing 1', url: 'http://fakethings.com/1' },
            { name: 'fake thing 2', url: 'http://fakethings.com/2' },
        ],
    };
    render(<Result data={data} />);
    const items = screen.getByTestId('results');
    expect(items).toHaveTextContent('Results :"root":{3 items"Headers":{1 item"content-type":string"string application/json"}"count":int2"results":[2 items0:{2 items"name":string"fake thing 1""url":string"http://fakethings.com/1"}1:{2 items"name":string"fake thing 2""url":string"http://fakethings.com/2"}]}');
});