import React from 'react';
import './App.css';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Nav from "./Nav";
import DogList from "./DogList";

/*

App --> Jobly ---> List --->{Companies, Jobs} --> {CompanyDetail, JobDetail}
                  List --> Company --> CompanyJobsList --> {JobDetail}
        Jobly ---> Auth Form (one form) --->{Login Form, Register Form}
        Jobly --> Profile Form --> {userDetail & show form}

    --> Navbar (Company, Job, Profile, username, Logout) 

  Jobly:
    state: 
      - companies [{name, description, num_employees},....]
      - jobs [{name, salary, equity}, ...]
      - [user, setUser]= useState({name, firstname, lastname})
      - isLogin, isRegister


    function: CreateUser(), 
              getRequest() axios request to get list of companies/jobs based search query

  List: 
    props: list of companies or job list depending route "/jobs" or "/companies"
    -getRequest 

  
  CompanyJobsList:
    - props: 1 single company
            - list of jobs for that single company

  CompanyDetail:
    - show info about single company

  JobsDetails:
    - show info about single job

  Auth Form:
    - prop: True/False, 
      - createUser(), 
      - login() maybe?
    - if go to "/login" then render AuthForm (with username, password)
    - if go to "/register" then render AuthRom (with name, first, last..email)
    - take in form inputs, setUserDetail() ---> send info to the parent (Jobly)

    -handleSubmit()

  Profile Form:
    - props: user info
      -setUserDetail()
    - Save, take info and send back to parent to setUserDetail()

    


*/

