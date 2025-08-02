<?php

declare(strict_types=1);

namespace App\Modules\Search\Filters\Users;

use App\Modules\Search\Filters\FilterInterface;
use Illuminate\Database\Eloquent\Builder;

final class RoleId implements FilterInterface
{
    public function filter(Builder $builder, $value): Builder
    {
        return $builder->when(! empty($value), function ($q) use ($value) {
            if (! is_array($value)) {
                $value = strval($value);
                $value = explode(',', $value);
            }

            $roleIds = collect($value)->map(function ($id) {
                return intval($id);
            })->toArray();

            return $q->whereHas('roles', function ($q) use ($roleIds) {
                $q->whereIn('id', $roleIds);
            });
        });
    }
}
