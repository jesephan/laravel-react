import { InertiaLink } from "@inertiajs/inertia-react";
import { User } from "../../types/user";
import UsersTable from "../../Components/Users/UsersTable";
import { Role } from "../../types/role";
import Filters from "../../Components/Users/Filters";

interface Props {
    users: User[];
    roles: Role[];
    roleId?: string;
    filters: Record<string, string>;
}

function index({ users, roles, filters }: Props) {
    return (
        <div className="p-6 max-w-[50rem] mx-auto">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-lg font-bold">Users</h1>
                <InertiaLink
                    href="/users/create"
                    className="bg-blue-500 text-white text-sm px-3 py-1 rounded hover:bg-blue-600"
                >
                    + Create User
                </InertiaLink>
            </div>
            <div className="flex justify-end mb-2">
                <Filters roles={roles} filters={filters} />
            </div>

            {users.length === 0 ? (
                <p className="text-center text-gray-500">No users to display</p>
            ) : (
                <div className="overflow-x-auto">
                    <UsersTable users={users} />
                </div>
            )}
        </div>
    );
}

export default index;
