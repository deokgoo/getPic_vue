import router from '../route'
import store from '../store'
import azure from './azure.js'

export default{
    fireConfig(){
        var config = {
            apiKey: "AIzaSyDG4hEgKUsoi_mdk9Lr0ci3gM3J5DZ67YY",
            authDomain: "getpic-29042.firebaseapp.com",
            databaseURL: "https://getpic-29042.firebaseio.com",
            projectId: "getpic-29042",
            storageBucket: "getpic-29042.appspot.com",
            messagingSenderId: "764351655214"
        }
        firebase.initializeApp(config);
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                store.commit('SET_token_CHANGE',firebase.auth().currentUser.uid)
                store.commit('SET_email_CHANGE',firebase.auth().currentUser.email)
                router.push('/analys')
            } else {
                store.commit('SET_token_CHANGE','')
                store.commit('SET_email_CHANGE','')
                router.push('/login')
            }
            
          });

    },
    fireLogin(email,password){
        firebase.auth().signInWithEmailAndPassword(email, password)
        .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            
        });
    },
    fireSignUp(email,password){
        firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
            // Handle Errors here.
            var errorMessage = error.message;
            store.commit('SET_creating_CHANGE',false)
            store.commit('SET_errorMsg_CHANGE',errorMessage)
            // ...
          });
    },
    fireSendImg(fileData){
        const ref = firebase.storage().ref().child('img');
        const file = fileData
        const name = (+new Date()) + '-' + file.name;
        const metadata = {
            contentType: file.type
        };
        const task = ref.child(name).put(file, metadata);
        task
        .then(snapshot => snapshot.ref.getDownloadURL())
        .then((url) => {
            store.commit('SET_IMGURL_CHANGE', url)
            store.commit('SET_defaultImg_CHANGE', false)
            azure.searchAnalys(url)
        })
        .catch();
    }
}