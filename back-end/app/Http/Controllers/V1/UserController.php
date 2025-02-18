<?php

namespace App\Http\Controllers\V1;

use App\Services\System\ApiResponder;
use App\Services\User\UserService;

class UserController
{
    public function __construct(
        protected UserService $service,
        protected ApiResponder $responder
    ){}


}
