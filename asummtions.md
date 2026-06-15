# Assumptions

- The `/posts` page is the default route (`/`) since it's the only page in the app.
- The userId filter only accepts positive integers; empty input shows all posts.
- No authentication is required.
- Posts are not paginated since the API returns 100 posts which is manageable.