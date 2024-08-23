import { Meteor } from "meteor/meteor";
import { LinksCollection } from "../collection";

Meteor.publish("links", function (limit) {
   console.log('limit: ', limit);
   
   if(limit) {
      return LinksCollection.find({}, {
         // sort: {createdAt: -1},
         limit: limit
      });   
   } else {
      return LinksCollection.find({});   
   }
});
