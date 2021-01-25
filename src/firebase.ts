import firebase from "firebase/app";
import "firebase/app";
import "firebase/firestore";    //データーベースを使うのに必要なモジュール
import "firebase/auth";         //認証機能を使うのに必要なモジュール

// アプリケーションをイニシャライズアップする
// 環境変数envを呼んできて各パラメーターに設定
const firebaseApp = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
});

// Reactのコンポーネントからデーターベースと認証モジュールを利用するためにエクスポート
export const db = firebaseApp.firestore();
export const auth = firebaseApp.auth();