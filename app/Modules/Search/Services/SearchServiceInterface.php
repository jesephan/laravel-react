<?php

namespace App\Modules\Search\Services;

interface SearchServiceInterface
{
    public function search(array $params, $paginated = false);
}
