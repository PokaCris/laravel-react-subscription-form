<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\SubscriptionController;

Route::get('/subscribe', function () {
    return Inertia::render('Subscribe');
})->name('subscribe');

Route::post('/subscribe', [SubscriptionController::class, 'store'])->name('subscribe.store');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
