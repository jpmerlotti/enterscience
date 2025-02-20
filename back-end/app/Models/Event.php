<?php

namespace App\Models;

use Database\Factories\EventFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Event extends Model
{
    use HasFactory;

    protected $fillable = [
        'name' => 'string',
        'artist' => 'string',
        'cache' => 'int',
        'start_date' => 'date',
        'address' => 'string'
    ];

    public static function newFactory()
    {
        return EventFactory::new();
    }
}
