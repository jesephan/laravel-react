import { InertiaLink } from "@inertiajs/inertia-react";
import { Role } from "../../types/role";
import CreateUserForm from "../../Components/Users/CreateUserForm";

interface Props {
    roles: Role[];
}

export default function Create({ roles }: Props) {
    return (
        <div className="p-6 max-w-[300px] mx-auto">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-xl font-bold">Create User</h1>
                <InertiaLink href="/users">Back</InertiaLink>
            </div>
            <CreateUserForm roles={roles} />
        </div>
    );
}
