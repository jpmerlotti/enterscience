<?php

namespace App\Http\Controllers\V1;

use App\Http\Controllers\Controller;
use App\Services\Events\EventService;
use App\Services\System\ApiResponder;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Pagination\LengthAwarePaginator;

class EventController extends Controller
{
    public function __construct(
        protected EventService $service,
        protected ApiResponder $responder
    ){}

    public function index(Request $request): JsonResponse
    {
        try {
            $filters = $request->get('filters', []);
            $orderBy = $request->get('orderBy', 'id');
            $direction = $request->get('direction', 'asc') === 'asc';
            $perPage = (int) $request->get('perPage', 15);

            $data = $this->service->list($filters, $orderBy, $direction, $perPage);
        } catch (Exception $e) {
            return $this->responder->error([$e], 'Something goes wrong.', 400);
        }

        return $this->responder->paginated($data->toArray(), "List of events", 200);
    }


    public function store(Request $request): JsonResponse
    {
        try {
            $data = $this->service->create($request->all());
        } catch (Exception $e) {
            return $this->responder->error([$e], 'Something goes wrong.', 400);
        }

        return $this->responder->success($data->toArray(), 'Event successfully created.', 201);
    }
}
