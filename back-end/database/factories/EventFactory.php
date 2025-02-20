<?php

namespace Database\Factories;

use App\Models\Event;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Event>
 */
class EventFactory extends Factory
{
    protected $model = Event::class;
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->text(150),
            'artist' => fake()->name(),
            'start_date' => fake()->dateTime(now()->addCentury(), 'America/Sao_Paulo'),
            'cache' => fake()->randomNumber(1, 100000000),
            'address' => fake()->address()
        ];
    }
}
