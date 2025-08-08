import '@testing-library/jest-dom/vitest';
import { beforeAll, afterAll, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';

// 🟢 Return data that matches what your app expects from OpenTDB
const openTdbResponse = {
  response_code: 0,
  results: [
    {
      category: "General Knowledge",
      type: "multiple",
      difficulty: "easy",
      question: "What is 2 + 2?",
      correct_answer: "4",
      incorrect_answers: ["1", "3", "5"],
    },
  ],
};

// v2 handlers
const handlers = [
  // Don’t include query in the route; MSW will match regardless of search params.
  http.get('https://opentdb.com/api.php', async () => {
    // If you want, you can read query params:
    // const url = new URL(request.url);
      // const amount = url.searchParams.get('amount'); // "5"
    await delay(500); // <-- add delay
    return HttpResponse.json(openTdbResponse, { status: 200 });
  }),
];

// Utility function to simulate delay
function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const server = setupServer(...handlers);

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));
afterEach(() => {
  server.resetHandlers();
  cleanup();
});
afterAll(() => server.close());
