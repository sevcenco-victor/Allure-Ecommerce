[1mdiff --git a/frontend/src/Components/Authenticate/CreateAccount.jsx b/frontend/src/Components/Authenticate/CreateAccount.jsx[m
[1mindex 38fff01..16bd099 100644[m
[1m--- a/frontend/src/Components/Authenticate/CreateAccount.jsx[m
[1m+++ b/frontend/src/Components/Authenticate/CreateAccount.jsx[m
[36m@@ -1,23 +1,60 @@[m
 import { Link, Navigate, useNavigate } from 'react-router-dom';[m
 import Button from '../UI/Button';[m
[32m+[m[32mimport { useState } from 'react';[m
 [m
 const CreateAccount = ({ formSubmit }) => {[m
[32m+[m[32m  const [name, setName] = useState('');[m
[32m+[m[32m  const [email, setEmail] = useState('');[m
[32m+[m[32m  const [password, setPassword] = useState('');[m
[32m+[m[32m  const [acceptsTerms, setAcceptsTerms] = useState(false);[m
[32m+[m
[32m+[m[32m  const handleFormSubmit = (e) => {[m
[32m+[m[32m    e.preventDefault();[m
[32m+[m[32m    //should be more detild[m
[32m+[m[32m    const acceptCondition = acceptsTerms && name != '' && password != '';[m
[32m+[m[32m    if (acceptCondition) {[m
[32m+[m[32m      formSubmit({ name, email, password });[m
[32m+[m[32m    } else {[m
[32m+[m[32m      console.log('Please accept terms');[m
[32m+[m[32m    }[m
[32m+[m[32m  };[m
   const navigate = useNavigate();[m
   return ([m
     <div className="authenticate-wrapper">[m
       <h2>Create Account</h2>[m
       <div className="form-wrapper">[m
         <h3>Create Your Account</h3>[m
[31m-        <form onSubmit={(e) => formSubmit(e)} className="authenticate-form">[m
[31m-          <input type="text" placeholder="Name" className="form-input" />[m
[31m-          <input type="email" placeholder="Email" className="form-input" />[m
[32m+[m[32m        <form[m
[32m+[m[32m          onSubmit={(e) => handleFormSubmit(e)}[m
[32m+[m[32m          className="authenticate-form"[m
[32m+[m[32m        >[m
[32m+[m[32m          <input[m
[32m+[m[32m            type="text"[m
[32m+[m[32m            placeholder="Name"[m
[32m+[m[32m            className="form-input"[m
[32m+[m[32m            value={name}[m
[32m+[m[32m            onChange={(e) => setName(e.target.value)}[m
[32m+[m[32m          />[m
[32m+[m[32m          <input[m
[32m+[m[32m            type="email"[m
[32m+[m[32m            placeholder="Email"[m
[32m+[m[32m            className="form-input"[m
[32m+[m[32m            value={email}[m
[32m+[m[32m            onChange={(e) => setEmail(e.target.value)}[m
[32m+[m[32m          />[m
           <input[m
             type="password"[m
             placeholder="Password"[m
             className="form-input"[m
[32m+[m[32m            value={password}[m
[32m+[m[32m            onChange={(e) => setPassword(e.target.value)}[m
           />[m
           <label className="form-trusts">[m
[31m-            <input type="checkbox" />[m
[32m+[m[32m            <input[m
[32m+[m[32m              type="checkbox"[m
[32m+[m[32m              value={acceptsTerms}[m
[32m+[m[32m              onChange={() => setAcceptsTerms(!acceptsTerms)}[m
[32m+[m[32m            />[m
             <p>[m
               I agree to all Term, and[m
               <Link to="../privacy-policy"> Privacy Policy </Link>and Fees.[m
[1mdiff --git a/frontend/src/Components/Authenticate/LogIn.jsx b/frontend/src/Components/Authenticate/LogIn.jsx[m
[1mindex 7ba3308..3910ef0 100644[m
[1m--- a/frontend/src/Components/Authenticate/LogIn.jsx[m
[1m+++ b/frontend/src/Components/Authenticate/LogIn.jsx[m
[36m@@ -1,20 +1,39 @@[m
[31m-import React from 'react';[m
[32m+[m[32mimport React, { useState } from 'react';[m
 import Button from '../UI/Button';[m
 import { useNavigate } from 'react-router-dom';[m
 [m
 const LogIn = ({ formSubmit }) => {[m
[32m+[m[32m  const [email, setEmail] = useState('');[m
[32m+[m[32m  const [password, setPassword] = useState('');[m
[32m+[m
   const navigate = useNavigate();[m
[32m+[m
[32m+[m[32m  const handleFormSubmit = (e) => {[m
[32m+[m[32m    e.preventDefault();[m
[32m+[m[32m    formSubmit({ email, password });[m
[32m+[m[32m  };[m
   return ([m
     <div className="authenticate-wrapper">[m
       <h2>Log In</h2>[m
       <div className="form-wrapper">[m
         <h3>Log In To Your Account</h3>[m
[31m-        <form onSubmit={(e) => formSubmit(e)} className="authenticate-form">[m
[31m-          <input type="email" placeholder="Email" className="form-input" />[m
[32m+[m[32m        <form[m
[32m+[m[32m          onSubmit={(e) => handleFormSubmit(e)}[m
[32m+[m[32m          className="authenticate-form"[m
[32m+[m[32m        >[m
[32m+[m[32m          <input[m
[32m+[m[32m            type="email"[m
[32m+[m[32m            placeholder="Email"[m
[32m+[m[32m            className="form-input"[m
[32m+[m[32m            value={email}[m
[32m+[m[32m            onChange={(e) => setEmail(e.target.value)}[m
[32m+[m[32m          />[m
           <input[m
             type="password"[m
             placeholder="Password"[m
             className="form-input"[m
[32m+[m[32m            value={password}[m
[32m+[m[32m            onChange={(e) => setPassword(e.target.value)}[m
           />[m
           <Button text="Log In" category="primary" type="submit" />[m
         </form>[m
[1mdiff --git a/frontend/src/Pages/Authenticate.jsx b/frontend/src/Pages/Authenticate.jsx[m
[1mindex 17aa4af..cd48960 100644[m
[1m--- a/frontend/src/Pages/Authenticate.jsx[m
[1m+++ b/frontend/src/Pages/Authenticate.jsx[m
[36m@@ -3,14 +3,15 @@[m [mimport './Authenticate.css';[m
 import LogIn from '../Components/Authenticate/LogIn';[m
 import CreateAccount from '../Components/Authenticate/CreateAccount';[m
 import { useNavigate } from 'react-router-dom';[m
[32m+[m[32mimport useData from 'rsuite/esm/InputPicker/hooks/useData';[m
 [m
 const Authenticate = ({ isLogin }) => {[m
   const [userData, setUserData] = useState({});[m
   const navigate = useNavigate();[m
 [m
[31m-  const handleFormSubmit = (e) => {[m
[31m-    e.preventDefault();[m
[31m-    navigate('/home');[m
[32m+[m[32m  const handleFormSubmit = (formData) => {[m
[32m+[m[32m    setUserData(formData);[m
[32m+[m[32m    console.log('Recieved Data', formData);[m
   };[m
   return ([m
     <div className="authenticate-container">[m
[1mdiff --git a/frontend/src/Pages/Shop.jsx b/frontend/src/Pages/Shop.jsx[m
[1mindex 0da5974..166086e 100644[m
[1m--- a/frontend/src/Pages/Shop.jsx[m
[1m+++ b/frontend/src/Pages/Shop.jsx[m
[36m@@ -8,18 +8,12 @@[m [mimport Button from '../Components/UI/Button';[m
 import Dropdown from '../Components/UI/Dropdown';[m
 import Filter from '../Components/Filter';[m
 import './Shop.css';[m
[31m-import {[m
[31m-  useFetcher,[m
[31m-  useLocation,[m
[31m-  useNavigate,[m
[31m-  useSearchParams,[m
[31m-} from 'react-router-dom';[m
[32m+[m[32mimport { useLocation, useNavigate, useSearchParams } from 'react-router-dom';[m
 import queryString from 'query-string';[m
 const Shop = () => {[m
   const [searchTerm, setSearchTerm] = useState('');[m
   const [filteredProducts, setFilteredProducts] = useState([...products]);[m
   const [originalProducts] = useState([...products]);[m
[31m-  const [appliedFilter, setAppliedFilter] = useState([...products]);[m
   const [filterIsVisible, setFilterIsVisible] = useState(false);[m
   const { pathname } = useLocation();[m
   const [currentCategory, setCurrentCategory] = useState('');[m
