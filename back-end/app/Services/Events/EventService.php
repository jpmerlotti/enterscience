<?php

namespace App\Services\Events;

use App\Models\Event;
use App\Services\Service;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\ValidationException;

class EventService extends Service
{
    protected function validate(array $data, string $context = 'create'): array
    {
        $rules = match ($context) {
            'create' => [
                'name' => 'required|string',
                'artist' => 'required|string',
                'cache' => 'nullable|int',
                'address' => 'nullable|string',
                'start_date' => 'required|date',
            ],
            default => []
        };

        $validator = Validator::make($data, $rules);

        if ($validator->fails()) {
            throw new ValidationException($validator);
        }

        return $validator->validate();
    }

    public function list(array $filters = [], string $orderBy = 'id', bool $direction = true, int $perPage = 15): LengthAwarePaginator
    {
        $query = Event::query();

        foreach ($filters as $field => $value) {
            if (!empty($value)) {
                $query->where($field, 'like', "%$value%");
            }
        }

        return $query->orderBy($orderBy, $direction ? 'asc' : 'desc')
            ->paginate($perPage);
    }


    public function create(array $data): Event
    {
        $validated = $this->validate($this->prepareData($data));

        return Event::create($validated);
    }

    protected function prepareData(array $data): array
    {
        $data['cache'] = (int) ($data['cache'] ?? 0);

        return $data;
    }
}
