# LOCKDOWN-frontend

2D browser-based video game, based off of my quarantine 2020 experience.


## Installation

To get this game up and running, you'll need to fork and clone this repo, along with the [LOCKDOWN-backend](https://github.com/allisoncortez/lockdown-backend).

You'll need to have PostgreSQL and Rails installed.
* Run your PostgreSQL server for the DB.
* Run the rails server from the LOCKDOWN-backend.
* Once the Rails server is running, you can open the index.html file,[from the frontend](https://github.com/allisoncortez/lockdown-frontend) , on your browser.

You'll need to cd into the project directory and run ``bundle install``. All the gem dependancies will then be installed.

## Database Creation
Navigate to the LOCKDOWN-backend folder and run the following:

* rails db:create
* rails db:migrate
* rails db:seed

## Running Tests

In the terminal, please run ``rails s``. It will open up a local server address where you can route to that address and look at the project. It will look something like this:

> http://127.0.0.1:9494/


## Dependencies 
* [Javascript](https://www.javascript.com/) - frontend functionality
* [Rails](https://guides.rubyonrails.org/) - backend API
* [PostgreSQL](https://www.postgresql.org/) - database

## Contributing

Bug reports and pull requests are welcome. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.


## Authors

[Allison Cortez](https://github.com/allisoncortez)

## License

The gem is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
