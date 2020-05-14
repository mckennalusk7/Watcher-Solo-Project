import React from "react";

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const AboutPage = () => (
  <div>
    <div>
      <p>
        Watcher is an application that allows users to research, explore, and
        discuss their favorite TV Series (recent and classics) with other users.
        By registering to the app, you will be able to search and review
        specific genres to meet their interests. This access allows you to
        comment and discuss your favorite series and episodes. A social app for
        people to connect through discussing TV Series.
      </p>
    </div>
  </div>
);

export default AboutPage;
