<?php

namespace App\Services\Events;

use App\Models\Event;
use App\Services\Service;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\ValidationException;

class EventService extends Service
{
    protected function validate(array $data, string $context = 'create'): array
    {
        $rules = match ($context) {
            'create' => [],
            'update' => [],
            'show' => [],
            default => []
        };

        $messages = [];

        $validator = Validator::make($data, $rules, $messages);

        if ($validator->fails()) {
            throw new ValidationException($validator);
        }

        return $validator->validate();
    }

    public function list(array $filters = [], string $orderBy = 'id', bool $direction = true): LengthAwarePaginator
    {
        $events = Event::where($filters)->orderBy($orderBy, $direction ? 'asc' : 'desc');

        return $events->paginate();
    }

    public function create(array $data): Event
    {
        $validated = $this->validate($data);

        return Event::create($validated);
    }

    public function update(Model $record, array $data): bool
    {
        $validated = $this->validate($data, 'update');

        return $record->updateOrFail($validated);
    }

    public function delete(Model $record): bool
    {
        return $record->deleteOrFail();
    }

    public function show(int $id): Event|bool
    {
        return Event::findOrFail($id);
    }
}
