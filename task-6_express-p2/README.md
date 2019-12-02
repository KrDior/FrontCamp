## Quick start

- Clone the repo: `git clone https://github.com/KrDior/FrontCamp`
- Change branche to `task-5`
- Change directory to `task-5_express-p6`
- Install with [npm](https://www.npmjs.com/): `npm install`
- In project directory run: `npm start`
- Express server will run on port `5000`

- By way `http://localhost:5000/api/news` you can test CRUD methods:
	1) Find all news: use method `GET` by way `/api/news`
	2) Find news by ID: use method `GET` by way `/api/news/${newsId}`
	3) Insert news: use method `POST` by way `/api/news` + `HEADER: TOKET <user access_token>`.
	4) Update news record: use method `PUT` by way `/api/news/${newsId}` + `HEADER: TOKET <user access_token>`.
	5) Delete news from DB: use method `DELETE` by way `/api/news` + `HEADER: TOKET <user access_token>`.

- By way `http://localhost:5000/api/users` you can test auth methods via JWT token:
	1) Add new user to DB: use method `POST` by way `/api/users` + user data (email, password).
	2) For sing up : use method `POST` by way `/api/news/login` + user data (email, password).
	3) For checking if user already authenticated : use method `GET` by way `/api/news/current` + `HEADER: TOKET <user access_token>`.
- By way `http://localhost:5000/api/facebook` you can test FB authenticate requests:
	use method `POST` by way `/api/facebook` + `HEADER: <FB user access_token>`.
- All logs you can find in file: `access-error.log`
- By way `http://localhost:5000/error` you can test winston js error logger
