<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;

Route::get('/', function () {
    return view('welcome');
});

Route::post('/createUser',[UserController::class, 'createUser']);
Route::post('/login',[UserController::class, 'login']);
Route::get('/logout',[UserController::class, 'logout']);

Route::group(['prefix'=>'feed','middleware'=>'auth'],function (){
    Route::get('/getFeed',[UserController::class, 'getFeed']);
    Route::post('/createFeed',[UserController::class, 'createFeed']);
    Route::post('/deleteFeed',[UserController::class, 'deleteFeed']);
});

Route::get('/{all?}', function () {
    return view('welcome');
})->where(['all' => '.*']);
