<?php

namespace App\Services\User;

use App\Service\Service;
use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\ValidationException;

class UserService extends Service
{
    protected function validate(array $data, string $context = 'create'): array
    {
        $rules = match ($context) {
            'create' => [
                'email' => 'required|email|unique:users,email',
                'name' => 'required|string',
                'password' => 'required',
            ],
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

    public function create(array $data): User
    {
        $validated = $this->validate($data);

        return User::create([
            'name' => $validated['name'],
            'email' => $validated['email'],
            'password' => Hash::make($validated['password'])
        ]);
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

    public function show(int $id): User|bool
    {
        return User::findOrFail($id);
    }
}
