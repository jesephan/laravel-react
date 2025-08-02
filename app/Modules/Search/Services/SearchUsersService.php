<?php

namespace App\Modules\Search\Services;

use App\Models\User;

class SearchUsersService extends BaseService implements SearchServiceInterface
{
    public function search(array $params, $paginated = false)
    {
        $query = $this->filtersToQueryBuilder(
            query: User::query(),
            filtersDir: 'App\Modules\Search\Filters\Users',
            filters: $params
        )->with('roles');

        return $this->getResults(query: $query, paginated: $paginated, params: $params);
    }
}
