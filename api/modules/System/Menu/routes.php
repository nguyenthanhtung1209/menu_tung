<?php

Route::get('getall','MenuController@getAll');
Route::post('update','MenuController@update');
Route::post('delete','MenuController@delete');
Route::post('updateroot','MenuController@updateRoot');