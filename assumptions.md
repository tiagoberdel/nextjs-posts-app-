# Assumptions

- The default route redirects you to "/posts"
- No authentication is required.
- Posts are not paginated since the API returns 100 posts which is manageable.
- Set a `loadingTimeout` of 3000ms using SWR config. If a request takes longer than this threshold, a visual notification is displayed to the user and automatically dismissed once the request succeeds or fails.
