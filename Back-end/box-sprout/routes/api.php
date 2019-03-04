<?php

// public routes
Route::post('/login', 'Api\AuthController@login')->name('login.api');
Route::post('/register', 'Api\AuthController@register')->name('register.api');

Route::get('products', 'ProductController@index');


// private routes
Route::middleware('auth:api')->group(function () {
    // Route::post('products', 'ProductController@store');
    // Route::get('products/{product}', 'ProductController@show');
    // Route::put('products/{product}', 'ProductController@update');
    // Route::delete('products/{product}', 'ProductController@destroy');
    // Route::put('products/{product}/image', 'ProductController@update_image');

    Route::get('/logout', 'Api\AuthController@logout')->name('logout');
    Route::get('/user', 'UserController@current');
});
