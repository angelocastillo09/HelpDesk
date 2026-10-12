<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Ticket extends Model
{
    // user_id is NOT here on purpose (mass-assignment protection)
    protected $fillable = ['title', 'description', 'priority', 'status', 'category'];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}