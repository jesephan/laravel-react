<?php

namespace App\Modules\Search\Services;

use Illuminate\Database\Eloquent\Builder;

abstract class BaseService
{
    public function filtersToQueryBuilder(Builder $query, string $filtersDir, array $filters): Builder
    {
        foreach ($filters as $key => $value) {
            $class = $filtersDir.'\\'.ucfirst($key);

            if (class_exists($class)) {
                $query = (new $class)->filter($query, $value);
            }
        }

        return $query;
    }

    public function getResults(Builder $query, bool $paginated = true, array $params = [])
    {
        $query = $query->orderBy(
            column: $params['sortBy'] ?? 'id',
            direction: $params['sortDirection'] ?? 'asc'
        );

        if ($paginated) {
            return $query->paginate(perPage: $params['perPage'] ?? 100, page: $params['page'] ?? 1);
        }

        return $query->get();
    }
}
