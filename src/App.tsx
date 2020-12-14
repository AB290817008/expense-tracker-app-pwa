import React from 'react';
import './App.css';
import { Header } from './Components/Header';
import { Balance } from './Components/Balance';
import { IncomeExpenses } from './Components/IncomeExpenses';
import { TransactionList } from './Components/TransactionList';
import { AddTransaction } from './Components/AddTransaction';
import { GlobalProvider } from './Context/GlobalState';
import { initNotification } from './Services/firebaseService';
import firebase from 'firebase';

export default function App() {
	const [ notificationPerm, setNotificationPerm ] = React.useState('');

	const messaging = firebase.messaging();
	initNotification().then((perm) => {
		if (perm === 'granted') {
			setNotificationPerm('enabled');
			messaging
				.getToken()
				.then((currentToken) => {
					if (currentToken) {
						console.log('TOKEN');
						console.log(currentToken);
					} else {
						console.log('No Instance ID token available. Request permission to generate one.');
					}
				})
				.catch((err) => {
					console.log('An error occurred while retrieving token. ', err);
				});
		}
		if (perm === 'denied') {
			setNotificationPerm('disabled');
		}
	});
	return (
		<div>
			<GlobalProvider>
				<p style={{color: "white"}}> {notificationPerm ? 'Notifications: ' + notificationPerm : ''}</p>
				<Header />
				<p>Notifications: </p>
				<div className="container">
					<Balance />
					<IncomeExpenses />
					<TransactionList />
					<AddTransaction />
				</div>
			</GlobalProvider>
		</div>
	);
}
