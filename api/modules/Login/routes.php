<?php

 // Quan ly ma nguon
Route::get('index', 'LoginController@index');
Route::post('checklogin', 'LoginController@checklogin');
Route::get('getLogin', 'LoginController@getLogin');
Route::get('getform', 'LoginController@getform');
Route::post('refreshToken', 'LoginController@refreshToken');
