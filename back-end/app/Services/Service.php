<?php

namespace App\Services;

use Illuminate\Database\Eloquent\Model;

abstract class Service
{
    abstract protected function validate(array $data, string $context = 'create'): array;

    abstract public function create(array $data): Model;

    abstract public function update(Model $record, array $data): bool;

    abstract public function delete(Model $record): bool;

    abstract public function show(int $id): Model|bool;
}
