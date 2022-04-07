<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\User;
use App\Models\Feed;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function createUser(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|max:255',
            'email' => 'required|email|max:255|unique:users',
            'password' => 'required|min:6|confirmed',
        ]);

        if($validator->fails()){
            return response()->json([
                'errors' => collect($validator->errors()->all())
            ], 422);
        }

        $data = $validator->validate();
        $data['password'] = Hash::make($data['password']);
        return User::create($data);
    }

    public function login(Request $request){
        $validator = Validator::make($request->all(), [
            'email' => 'required|email|max:255',
            'password' => 'required|min:6',
        ]);

        if($validator->fails()){
            return response()->json([
                'errors' => collect($validator->errors()->all())
            ], 422);
        }
        // return $validator->validate();
        if (!Auth::attempt($request->only('email', 'password')))
        {
            return response()->json(['message' => 'Invalid Creadentials.'], 401);
        }

        return Auth::user();
    }

    public function logout(){
        Auth::logout();
        return response()->json(['message' => 'Successfully logged out']);
    }

    public function createFeed(Request $request){
        $validator = Validator::make($request->all(), [
            'feed_text' => 'required|max:1000',
        ]);

        if($validator->fails()){
            return response()->json([
                'errors' => collect($validator->errors()->all())
            ], 422);
        }

        $data = $validator->validate();

        $data['user_id'] = Auth::user()->id;
        $feed = Feed::create($data);
        return Feed::with('user')->find($feed->id);

    }

    public function getFeed(){
        $feeds = Feed::with('user')->orderBy('id', 'desc')->get();
        return $feeds;
    }

    public function deleteFeed(Request $request){
        $validator = Validator::make($request->all(), [
            'feed_id' => 'required|integer',
        ]);

        if($validator->fails()){
            return response()->json([
                'errors' => collect($validator->errors()->all())
            ], 422);
        }

        $data = $validator->validate();

        $feed = Feed::find($data['feed_id']);
        if($feed->user_id != Auth::user()->id){
            return response()->json(['message' => 'You are not authorized to delete this feed'], 401);
        }
        $feed->delete();
        return response()->json(['message' => 'Feed deleted successfully']);
    }



}
