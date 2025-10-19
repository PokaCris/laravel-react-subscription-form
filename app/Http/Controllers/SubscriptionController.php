<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SubscriptionController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'subscribe' => 'boolean'
        ]);

        return redirect()->route('subscribe')->with('success', 'Thank you for subscribing!');
    }
}