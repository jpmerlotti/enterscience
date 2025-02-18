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

    public function error(array $errors, string $message, int $code = 400): JsonResponse {
        return response()->json([
            'success' => false,
            'message' => $message,
            'errors' => $errors,
            'code' => $code
        ], $code);
    }

    public function paginated(array $data, string $message, int $code = 200): LengthAwarePaginator
    {
        return response()->json([
            'success' => true,
            'message' => $message,
            'data' => $data,
            'pagination' => $data['pagination'],
            'code' => $code
        ], $code)->paginated();
    }
}
