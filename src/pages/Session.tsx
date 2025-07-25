import { useParams } from "react-router-dom";

import { SESSIONS } from "../dummy-sessions.ts";
import { Button } from "../components/UI/Button.tsx";
import { useState } from "react";
import { BookSession } from "../components/BookSession.tsx";

export const SessionPage = () => {
  const params = useParams<{ id: string }>();
  const [isBooking, setIsBooking] = useState(false);

  const sessionId = params.id;
  const loadedSession = SESSIONS.find((session) => session.id === sessionId);
  if (!loadedSession) {
    return (
      <main id="session-page">
        <p>No session found!</p>
      </main>
    );
  }

  return (
    <main id="session-page">
      {isBooking && (
        <BookSession
          session={loadedSession}
          closeModal={() => setIsBooking(false)}
        />
      )}
      <article>
        <header>
          <img src={loadedSession.image} alt={loadedSession.title} />
          <div>
            <h2>{loadedSession.title}</h2>
            <time dateTime={new Date(loadedSession.date).toISOString()}>
              {new Date(loadedSession.date).toLocaleDateString("en-US", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </time>
            <p>
              <Button onClick={() => setIsBooking(true)}>Book Session</Button>
            </p>
          </div>
        </header>
        <p id="content">{loadedSession.description}</p>
      </article>
    </main>
  );
};
