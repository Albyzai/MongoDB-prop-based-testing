
import * as  mongoose from 'mongoose'
import { Child } from '../Src/models/Child'
import { Lego } from '../Src/models/Lego'
import fc from 'fast-check'

const DB_COLLECTIONS = [Child, Lego]

// Connect to Mongo
mongoose
  .connect(
    'mongodb://127.0.0.1:27017',
    { useNewUrlParser: true, useUnifiedTopology: true }
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
    //   const x = fc.oneof(
    //     fc.double(),
    //     fc.constant(-0),
    //     fc.constant(0),
    //     fc.constant(Number.NaN),
    //     fc.constant(Number.POSITIVE_INFINITY),
    //     fc.constant(Number.NEGATIVE_INFINITY),
    //     fc.constant(Number.EPSILON),
    //     fc.constant(Number.MIN_VALUE),
    //     fc.constant(Number.MAX_VALUE),
    //     fc.constant(Number.MIN_SAFE_INTEGER),
    //     fc.constant(Number.MAX_SAFE_INTEGER)
    // )

    const y = fc.property(fc.array(fc.integer()), data => {
      console.log('data', data)
    })
      console.log('jsonObj', y)

      
      resetDB()
    })
  })

  const resetDB = () => {
    for(let collection of DB_COLLECTIONS) {
      collection.remove({}, (err) => {
        // console.log('collection removed: ', collection)
      })
    }
  }

newChild.save()
// console.log('newChild: ', newChild)

const children = Child.find().then(children => {
  // console.log('children... : ', children)
  return children
})
.catch(err => {
  return err
})
// console.log('children: ', children.then(data => { return data }))
