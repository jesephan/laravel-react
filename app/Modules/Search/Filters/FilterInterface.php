<?php

namespace App\Modules\Search\Filters;

use Illuminate\Database\Eloquent\Builder;

interface FilterInterface
{
    public function filter(Builder $builder, $value): Builder;
}
