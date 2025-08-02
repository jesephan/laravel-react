import { User } from "../../types/user";

function UsersTable({ users }: { users: User[] }) {
    return (
        <table className="table-auto border border-gray-300 w-full text-sm">
            <thead>
                <tr>
                    <th className="border px-2 py-1 text-left">Name</th>
                    <th className="border px-2 py-1 text-left">Email</th>
                    <th className="border px-2 py-1 text-left">Roles</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user) => (
                    <UserTableRow user={user} key={user.id} />
                ))}
            </tbody>
        </table>
    );
}

export function UserTableRow({ user }: { user: User }) {
    return (
        <tr>
            <td className="border px-2 py-1">{user.full_name}</td>
            <td className="border px-2 py-1">{user.email}</td>
            <td className="border px-2 py-1">
                {user.roles.length > 0
                    ? user.roles.map((r) => r.name).join(", ")
                    : "None"}
            </td>
        </tr>
    );
}

export default UsersTable;
