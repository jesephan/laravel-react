import { Inertia } from "@inertiajs/inertia";
import { Role } from "../../types/role";

interface Props {
    roles: Role[];
    filters: Record<string, string>;
}

function Filters({ roles, filters }: Props) {
    const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const roleId = e.target.value;
        Inertia.get("/users", roleId ? { roleId: roleId } : {});
    };
    const roleId = filters.roleId;

    return (
        <div className="mb-6">
            <label className="block mb-2 font-semibold">Filter by Role:</label>
            <select
                value={roleId || ""}
                onChange={handleFilterChange}
                className="border p-2"
            >
                <option value="">All Roles</option>
                {roles.map((role) => (
                    <option key={role.id} value={role.id}>
                        {role.name}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default Filters;
