<?php

namespace App\Http\Controllers\Api\Fontend;

use Illuminate\Http\Request;
use App\Events\ChatMessageEvent;
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
        $validatedData = $request->validate([
            'pseudo' => 'required|string',
            'message' => 'required|string',
        ]);

        event(new ChatMessageEvent($validatedData['pseudo'], $validatedData['message']));

        return response()->json([
            'status' => 'success',
            'message' => 'Chat Message sent',
        ], 201);
    }
}