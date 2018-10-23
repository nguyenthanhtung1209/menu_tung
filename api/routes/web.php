<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| This file is where you may define all of the routes that are handled
| by your application. Just tell Laravel the URIs it should respond
| to using a Closure or controller method. Build something great!
|
*/

Route::get('/', function () {
    return redirect('admin/store');
});

Route::get('admin', function () {
    return redirect('admin/login');
});

Route::get('error', function () {
	return view("System::User.index",array());
});



