<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\SubscriptionController;
use App\Http\Controllers\TestController;
use Illuminate\Http\Request;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::get('/subscribe', function () {
    return Inertia::render('Subscribe');
})->name('subscribe');
Route::post('/subscribe', [SubscriptionController::class, 'store'])->name('subscribe.store');

Route::get('/test/page1', function () {
    return Inertia::render('test/Page1');
})->name('test.page1');

Route::post('/test/page2', [TestController::class, 'storePage1'])->name('test.page2');
Route::get('/test/page2', function () {
    return Inertia::render('test/Page2');
})->name('test.page2.show');

Route::post('/test/page3', [TestController::class, 'storePage2'])->name('test.page3');
Route::get('/test/page3', function () {
    return Inertia::render('test/Page3');
})->name('test.page3.show');

Route::post('/test/results', [TestController::class, 'storePage3'])->name('test.results');
Route::get('/test/results', function (Request $request) {
    return Inertia::render('test/Results', [
        'final_score' => $request->session()->get('final_score', 0),
        'page1_score' => $request->session()->get('page1_score', 0),
        'page2_score' => $request->session()->get('page2_score', 0),
        'page3_score' => $request->session()->get('page3_score', 0)
    ]);
})->name('test.results.show');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';