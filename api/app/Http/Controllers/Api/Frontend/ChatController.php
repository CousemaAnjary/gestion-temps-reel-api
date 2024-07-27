<?php

namespace App\Http\Controllers\Api\Frontend;

use App\Events\ChatEvent;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ChatController extends Controller
{
    public function index()
    {
        return response()->json([
            'status' => 'success',  
            'message' => 'Chat list',
        ]);
    }   

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'message' => 'required|string',
            'pseudo' => 'required|string',
        ]);

        event(new ChatEvent($validatedData['message'], $validatedData['pseudo']));
        
        return response()->json([
            'status' => 'success',  
            'message' => 'Message sent',
        ]);
    }
}