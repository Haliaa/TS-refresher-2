import { SessionItem } from "../components/SessionItem.tsx";
import { SESSIONS } from "../dummy-sessions.ts";

export const SessionsPage = () => {
  return (
    <main id="sessions-page">
      <header>
        <h2>Available mentoring sessions</h2>
        <p>
          From an one-on-one introduction to React's basics all the way up to a
          deep dive into state mechanics - we got just the right session for
          you!
        </p>
      </header>
      <ul id="sessions-list">
        {SESSIONS.map((session) => (
          <li key={session.id}>
            <SessionItem {...session} />
          </li>
        ))}
      </ul>
    </main>
  );
};
