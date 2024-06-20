import firebase from "../firebase";

// Client functions
export const addClient = (data) => {
    firebase.firestore().collection('clients').add(data);
  }
  
  export const getAllClients = (onClientsChanged) => {
    firebase.firestore().collection('clients').onSnapshot((snapshot) => {
      const newClients = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));
      onClientsChanged(newClients);
    });
  }
  
  export const getClientById = (item, id) => {
    firebase.firestore().collection('clients').doc(id).get().then((docRef) => { item(docRef.data()) });
  }
  
  export const deleteClient = (id) => {
    firebase.firestore().collection('clients').doc(id).delete();
  }
  
  export const updateClient = (id, data) => {
    firebase.firestore().collection('clients').doc(id).set(data);
  }

// Service functions
export const addService = (data) => {
    firebase.firestore().collection('services').add(data);
  }
  
  export const getAllServices = (onServicesChanged) => {
    firebase.firestore().collection('services').onSnapshot((snapshot) => {
      const newServices = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));
      onServicesChanged(newServices);
    });
  }
  
  export const getServiceById = (item, id) => {
    firebase.firestore().collection('services').doc(id).get().then((docRef) => { item(docRef.data()) });
  }
  
  export const deleteService = (id) => {
    firebase.firestore().collection('services').doc(id).delete();
  }
  
  export const updateService = (id, data) => {
    firebase.firestore().collection('services').doc(id).set(data);
  }


export const addWork = (data)=>{
    firebase.firestore()
    .collection('works')
    .add(data)
}

export const getAllWorks = (onWorksChanged, user)=>{
    firebase
    .firestore()
    .collection('works')
    .where("uid", "==", user?.uid)
    .onSnapshot((snapshot)=>{
        const newWork = snapshot.docs.map((doc)=>({
            id:doc.id,
            ...doc.data()
        }))
        onWorksChanged(newWork)

    })

}

export const getWorkById = (item, id)=>{
    firebase
    .firestore()
    .collection('works')
    .doc(id)
    .get()
    .then((docRef)=>{item(docRef.data())})

}

export const deleteWork = (id)=>{
    firebase
    .firestore()
    .collection('works')
    .doc(id)
    .delete()

}

export const updateWork = (id, data)=>{
    firebase
    .firestore()
    .collection('works')
    .doc(id)
    .set(data)
}