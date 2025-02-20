<?php

namespace App\Http\Controllers\V1;

use App\Services\System\ApiResponder;
use App\Services\User\UserService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class UserController
{
    public function __construct(
        protected UserService $service,
        protected ApiResponder $responder
    ){}

    public function store(Request $request): JsonResponse
    {
        $data = $this->service->create($request->all());

        return $this->responder->success($data->toArray(), 'User successfully created.');
    }
}
