<?php

namespace App\Http\Controllers\Api\Frontend;

use App\Events\PostCreatedEvent;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function index()
    {
        $event = new PostCreatedEvent(['name'=>'Titre']);
        event($event);
    }
}