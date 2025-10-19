<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\SubscriptionController;
use App\Http\Controllers\TestController;

Route::get('/', function () {
    return Inertia::render('welcome');
});

Route::get('/subscribe', function () {
    return Inertia::render('Subscribe');
});
Route::post('/subscribe', [SubscriptionController::class, 'store']);

Route::get('/test/page1', function () {
    return Inertia::render('test/Page1');
})->name('test.page1.show');

Route::post('/test/page2', [TestController::class, 'storePage1']);
Route::get('/test/page2', function () {
    return Inertia::render('test/Page2');
})->name('test.page2.show');

Route::post('/test/page3', [TestController::class, 'storePage2']);
Route::get('/test/page3', function () {
    return Inertia::render('test/Page3');
})->name('test.page3.show');

Route::post('/test/results', [TestController::class, 'storePage3']);
Route::get('/test/results', function () {
    return Inertia::render('test/Results');
})->name('test.results.show');

require __DIR__.'/auth.php';