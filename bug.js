```javascript
//Incorrect aggregation pipeline causing unexpected results
db.collection.aggregate([
  {$match: { /* filter criteria */ }},
  {$group: {_id: "$fieldName", total: {$sum: "$anotherField"}}}, //Error in field name or aggregation operation
  {$sort: {total: -1}},
  {$limit: 10}
])
```