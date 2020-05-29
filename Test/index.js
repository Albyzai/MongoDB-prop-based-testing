const mongoose = require('mongoose');
const Child = require('../Src/models/Child')
const Lego = require('../Src/models/Lego')
const fc = require('fast-check')

const DB_COLLECTIONS = [Child, Lego]
// Connect to Mongo
mongoose
  .connect(
    'mongodb://127.0.0.1:27017',
    { useNewUrlParser: true }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log(err));


  const newChild = new Child({
    name: 'Jonas',
    age: 26,
    date: new Date()
  })

  describe('database transactions', () => {
    it('create', () => {
      const x = fc.oneof(fc.string(), fc.boolean(), fc.integer())
      console.log('jsonObj', x)

      
      resetDB()
    })
  })

  const resetDB = () => {
    for(collection of DB_COLLECTIONS) {
      collection.remove({}, (err) => {
        console.log('collection removed: ', collection)
      })
    }
  }

newChild.save()
console.log('newChild: ', newChild)

const children = Child.find().then(children => {
  console.log('children... : ', children)
  return children
})
.catch(err => {
  return err
})
console.log('children: ', children.then(data => { return data }))
