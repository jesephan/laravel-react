<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreUserRequest;
use App\Models\Role;
use App\Models\User;
use App\Modules\Facades\SearchUsersService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    public function index(Request $request)
    {
        return Inertia::render('Users/Index', [
            'users' => SearchUsersService::search($request->all()),
            'roles' => Role::all(),
            'filters' => $request->all(),
        ]);
    }

    public function create()
    {
        return Inertia::render('Users/Create', [
            'roles' => Role::all(),
        ]);
    }

    public function store(StoreUserRequest $request)
    {
        $user = User::create([
            'full_name' => $request->get('full_name'),
            'email' => $request->get('email'),
        ]);

        $user->roles()->attach($request->get('roles'));

        return redirect()->route('users.index');
    }
}
