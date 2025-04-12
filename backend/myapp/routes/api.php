<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UsersController;

Route::post('/register',[UsersController::class,'register']);
Route::get('/dashboard',[UsersController::class,'dashboard']);
Route::post('/login',[UsersController::class,'login']);
Route::post('/logout',[UsersController::class,'logout']);