<?php

use App\Http\Controllers\V1\EventController;
use App\Http\Controllers\V1\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::prefix('/me')->group(function () {
    Route::middleware('auth:sanctum')->group(function () {
        Route::get('/', [UserController::class, 'show'])->name('user.show');
        Route::put('/update', [UserController::class, 'show'])->name('user.update');
        Route::delete('/delete', [UserController::class, 'show'])->name('user.delete');
    });
});

Route::get('/events', [EventController::class, 'index'])->name('events.index');
Route::prefix('/events')->group(function () {
    Route::get('/{id}', [EventController::class, 'show'])->name('events.show');
    Route::post('/store', [EventController::class, 'store'])->name('events.store');
    Route::put('/{id}/update', [EventController::class, 'update'])->name('events.update');
    Route::delete('/{id}/delete', [EventController::class, 'destroy'])->name('events.delete');
});

Route::prefix('/auth')->group(function () {
    Route::post('/login')->name('auth.login');
    Route::post('/logout')->name('auth.logout');
    Route::post('/register', [UserController::class, 'store'])->name('auth.register');
});
