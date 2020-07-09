# Front-end Capstone - Related Items Module ==> SDCapstone

> Project description
Related Items module created by Wilson for FEC then taken over by Koboh for SDC.

## Related Projects

  - Nav Bar - https://github.com/goat-yoga/rizwan-service-actual
  - Reviews - https://github.com/goat-yoga/russell-service
  - Product Display - https://github.com/goat-yoga/kimberly-service
  - Proxy - https://github.com/goat-yoga/wilson_proxy

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Welcome to the Alo Yoga mock related products module. To begin using, navigate to the repository's main directory, run the command 'npm install'. After installing all the dependencies, in a news terminals run the commands 'npm run seed', 'npm start' and 'npm react-dev'. These commands will seed the database, start the server and transpile the jsx into vanilla js.

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

#### CRUD OPERATIONS
CREATE
app.post('/related', (req, res) => {
  console.log('Posting items!', req.body);
  Item.create({
    'name': req.body.name,
    'price': req.body.price,
    'img': req.body.img,
    'cat': req.body.cat,
    'link': req.body.link,
  })
    .then((results) => {
      res.status(201).send(results);
    })
    .catch((err) => {
      res.status(401).send(err);
    });
});

READ
app.get('/related', (req, res) => {
  console.log('Getting items!');
  Item.find({})
    .exec((err, items) => {
      if (err) {
        console.error(err);
      } else {
        res.send(items);
      }
    });
});

UPDATE
app.put('/related/:id', (req, res) => {
  console.log('Updating items!');
  Item.updateOne({_id: req.params.id}, {$set: {'name': req.body.name}})
    .exec()
    .then((results) => {
      res.status(202).send(results);
    })
    .catch((err) => {
      res.status(402).send(err);
    });
});

DELETE
app.delete('/related/:id', (req, res) => {
  console.log('Deleting item!');
  Item.deleteOne({_id: req.params.id})
    .exec() //returns a promise
    .then((results) => {
      res.status(204).send(results);
    })
    .catch((err) => {
      console.log(err);
      res.status(404).send(err);
    });
});