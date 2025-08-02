<?php

namespace App\Modules\Facades;

use App\Modules\Search\Services\SearchUsersService as TargetClass;
use Illuminate\Support\Facades\Facade;

class SearchUsersService extends Facade
{
    /**
     * Get the registered name of the component.
     *
     * @return string
     */
    protected static function getFacadeAccessor()
    {
        return TargetClass::class;
    }
}
