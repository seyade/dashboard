let express = require('express');
let app = express();
let port = process.env.PORT || 3300;
let router = express.Router();
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
const Schema = mongoose.Schema;

// let connection = require('./src/apis/db');
let User = require('./src/apis/models/User');
let Account = require('./src/apis/models/Account');

let connexion = mongoose.connect('mongodb://localhost/accounts');
let db = mongoose.connection;

// DB
db.on('error', (err) => {
  console.log('DB connection err: ', err);
});

db.on('connected', (err) => {
  console.log('DB connection, good to go!');
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

router.use((req, res, next) => {
  console.log('Interacting with account api');
  next();
});

// Create user
let user = new User({
  title: 'Ms',
  firstName: 'Shigure',
  lastName: 'Kousaka',
  username: '@skousaka',
  avatar: '',
  email: 'shigure.kousaka@emailtest.com',
  dob: '01 January 1990',
  password: 'test1234',
  createdAt: Date.now()
});

let account = new Account({
  createdAt: Date.now(),
  accountNumber: 7651234,
  balance: 50.15,
  daysLeft: 29,
  nextMonthPayment: 18.97,
  paymentType: 'debit card',
  currentPlan: {
    name: 'Fast Furious',
    usage: {
      used: 10356,
      left: 89644,
      total: 100000,
      meta: {
        trafficData: [{
          date: 'Fri Dec 22 2017 14:42:14 GMT+0000 (GMT)',
          amount: 100.50,
          download: 15.85,
          upload: 10.30
        }],
      }
    }
  }
});

// router.post('/users', (req, res) => {

//   user.accounts.push(account._id);

//   user.save((err, savedUser) => {
//     if (err) { res.send(err); }

//     account.save((err) => {
//       User.populate(
//         savedUser,
//         { path: 'accounts ' },
//         (err, populatedUser) => {
//           if (err) { res.send(err); }

//           console.log('PopulatedUser-----------------------', populatedUser);

//          res.send(populatedUser);
//         });
//     });
//   });
// });


router.post('/users', (req, res) => {

  User.create(
    user,
    (err, user) => {
      if (err) { 
        res.json({message:err}); 
      }

      res.json(user);
    });
});

router.post('/user/:user_id/addAccount', (req, res) => {
  User.findById();
});


// GET
router.get('/', (req, res) => {
  res.json({ message: 'Welcome to accounts api' });
});

router.get('/accounts', (req, res) => {
  Account.find((err, accounts) => {
    if (err) { res.send(err); }
    res.json(accounts);
  });
});

router.get('/users', (req, res) => {
  // User.find((err, users) => {
  //   if (err) { res.send(err); }
  //   res.json(users);
  // });

  User.find({})
    .populate('accounts')
    .exec((err, users) => {
      if (err) { res.send(err); }
      res.json(users);
    });
});

app.use('/api', router);

app.listen(port, () => {
  console.log('Listen to port 3300 serving account api');
});
