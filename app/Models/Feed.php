<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Feed extends Model
{
    use HasFactory;

     protected $fillable = [
        'user_id',
        'feed_text'
    ];

    public function user()
    {
        return $this->belongsTo('App\Models\User');
    }
}
