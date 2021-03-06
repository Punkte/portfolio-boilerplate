# Collaborators

* [Maxime OGER](https://github.com/maximeoger)
* [Christella LEVIEUX](https://github.com/christellal)
* [Yash PATEL](https://github.com/ya-sh)
* [Paartheepan RAVEENTHIRAN](https://github.com/punkte)

# Links

* [App](https://christella.netlify.app/)
* [Storybook](https://storybook-christella.now.sh/)
* [Figma](https://www.figma.com/file/3OwxUpBqBda8l5SHpjMtzr/Epic-Classroom?node-id=0%3A1)

# How to install

#### Requirements
* [Docker](https://docs.docker.com/)
* [Docker-compose](https://docs.docker.com/compose/)

#### Launch the project

Create a `.env` file and copy the content of the [.env.example](.env.example) file.  

Build images in docker-compose  
```bash
$ docker-compose build
```
Launch containers  
```bash
$ docker-compose up # -d
```

#### Launch Storybook
Go to the front directory  
Create a `.env` file and copy the content of the [.env.example](./front/.env.example) file.  

Install dependancies 
```bash
$ yarn 
```

Launch storybook
```bash
$ yarn storybook
```

