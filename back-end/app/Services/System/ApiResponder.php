<?php

namespace App\Services\System;

use Illuminate\Http\JsonResponse;
use Illuminate\Pagination\LengthAwarePaginator;

class ApiResponder
{
    public function success(array $data, string $message, int $code = 201): JsonResponse
    {
        return response()->json([
            'success' => true,
            'message' => $message,
            'data' => $data,
            'code' => $code
        ], $code);
    }

    public function error(array $errors, string $message, int $code = 400): JsonResponse
    {
        return response()->json([
            'success' => false,
            'message' => $message,
            'errors' => $errors,
            'code' => $code
        ], $code);
    }

    public function paginated(array $data, string $message, int $code = 200): JsonResponse
    {
        return response()->json([
            'message' => $message,
            'status' => $code,
            'data' => $data['data'] ?? [],
            'pagination' => [
                'current_page' => $data['current_page'] ?? null,
                'last_page' => $data['last_page'] ?? null,
                'per_page' => $data['per_page'] ?? null,
                'total' => $data['total'] ?? null,
            ],
        ], $code);

    }
}
