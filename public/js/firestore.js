/* COLLECTION REFERENCE */
// petsRef = new CollectionReference(firestoreRef, "pets");
const petsCollectionRef = firestoreRef.collection('pets');

// members: normally used for subcollections
console.log(`ID of the pets collection: ${petsCollectionRef.id}`);
console.log(`Path of the pets collection: ${petsCollectionRef.path}`);

// add(<object>): add document to the collection
function addPet(data){ 
    petsCollectionRef.add(data).then(newDocRef => { //returns Promise.<DocumentReference>
        console.log(`New doc id: ${newDocRef.id}`);
    });
};
// addPet({name: "kola"});

// doc(<path>): get document from the collection
var aDocRef = petsCollectionRef.doc('mit');
console.log(aDocRef.id);

// get(): executes the query (collection reference combining with 
// where(), orderBy(), limit(), limitToLast(), offset()...)
petsCollectionRef.get().then(querySnapshot => { //returns Promise.<QuerySnapshot>
    querySnapshot.forEach(documentSnapshot => {
      console.log(`Found document at ${documentSnapshot.ref.path}`);
    });
  });



