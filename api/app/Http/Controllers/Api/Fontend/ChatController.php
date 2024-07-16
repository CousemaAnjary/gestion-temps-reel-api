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
        event(new ChatMessageEvent($request->pseudo, $request->message));

        return response()->json([
            'status' => 'success',
            'message' => 'Chat Message sent'
        ]);
    }
}