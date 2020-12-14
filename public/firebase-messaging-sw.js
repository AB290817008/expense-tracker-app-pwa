importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-messaging.js');

var firebaseConfig = {
	apiKey: 'AIzaSyBhVeBf_gywZvtIlJJffZPJxMBhftmbi-0',
	authDomain: 'expense-tracker-app-e16ed.firebaseapp.com',
	projectId: 'expense-tracker-app-e16ed',
	storageBucket: 'expense-tracker-app-e16ed.appspot.com',
	messagingSenderId: '315853915146',
	appId: '1:315853915146:web:b81b3864501161fe590bf3'
};

firebase.initializeApp(firebaseConfig);
firebase.messaging();
