<?php

namespace App\Http\Controllers\Api\Frontend;

use App\Events\chatEvent;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ChatController extends Controller
{
    public function index()
    {
        return response()->json([
            'status' => 'success',
            'message' => 'Chat list'
        ]);
    }


    public function store(Request $request)
    {
        $validated = $request->validate([
            'message' => 'required|string',
            'pseudo' => 'required|string'
        ]);

        broadcast(new chatEvent($validated['message'], $validated['pseudo']));

        return response()->json([
            'status' => 'success',
            'message' => 'Message sent'
        ]);
    }
}