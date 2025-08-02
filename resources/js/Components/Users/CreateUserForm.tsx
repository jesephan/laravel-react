import React, { useState } from "react";
import axios from "../../bootstrap";
import { Role } from "../../types/role";

function CreateUserForm({ roles }: { roles: Role[] }) {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [selectedRoles, setSelectedRoles] = useState<number[]>([]);
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState<{ [key: string]: string[] }>({});

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setErrors({});

        try {
            await axios.post("/users", {
                full_name: fullName,
                email,
                roles: selectedRoles,
            });

            window.location.href = "/users";
        } catch (error: any) {
            if (error.response && error.response.status === 422) {
                setErrors(error.response.data.errors);
            } else {
                console.error("Unexpected error:", error);
            }
        } finally {
            setLoading(false);
        }
    };

    const toggleRole = (id: number) => {
        setSelectedRoles((prev) =>
            prev.includes(id) ? prev.filter((r) => r !== id) : [...prev, id]
        );
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label className="block text-sm font-medium mb-1">
                    Full Name
                </label>
                <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="border border-gray-300 rounded w-full p-2 focus:ring focus:ring-blue-200"
                />
                {errors.full_name && (
                    <small className="text-sm">{errors.full_name}</small>
                )}
            </div>

            <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border border-gray-300 rounded w-full p-2 focus:ring focus:ring-blue-200"
                />
                {errors.email && (
                    <small className="text-sm">{errors.email}</small>
                )}
            </div>

            <div>
                <p className="block text-sm font-medium mb-2">Roles</p>
                <div className="grid grid-cols-2 gap-2">
                    {roles.map((role) => (
                        <label
                            key={role.id}
                            className="flex items-center space-x-2"
                        >
                            <input
                                type="checkbox"
                                checked={selectedRoles.includes(role.id)}
                                onChange={() => toggleRole(role.id)}
                                className="rounded border-gray-300"
                            />
                            <span>{role.name}</span>
                        </label>
                    ))}
                </div>
                {errors.roles && (
                    <small className="text-sm">{errors.roles}</small>
                )}
            </div>

            <button
                type="submit"
                disabled={loading}
                className={`w-full px-4 py-2 rounded text-white ${
                    loading ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
                }`}
            >
                {loading ? "Creating..." : "Create User"}
            </button>
        </form>
    );
}

export default CreateUserForm;
