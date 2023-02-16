import {name, withdraw} from './modules/user.js';
import {code} from './modules/user.js';
//console.log(name);
//code();
//withdraw();

//shortcut to import multiple things in one line 
import {withdraw as wd, deposit} from './modules/account.js';
//here we are renaming withdraw from account
//because same name function is already imported from user
//wd()
//deposit()


//fetching everythinng at a time
import * as usr from './modules/user2.js';
//console.log(usr.name);
//usr.code();
//usr.cook(); //this will give error, as it is not exported from User2

//we have not exported age in user.js , hence we get error
//if we try to import and use it here
//import {age} from './modules/user.js';
//console.log(age);


//importing default function
//while importing , we have to give name to the default function
import {default as x} from './modules/user.js'
import {default as y} from './modules/user2.js'
import {default as z} from './modules/account.js'
//x()
//y()
//z()

