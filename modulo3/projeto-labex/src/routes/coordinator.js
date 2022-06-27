export function goToHomePage (navigate) {
    navigate("/")
};

export function goToAdminPage (navigate) {
    navigate("/admin")
};

export function goToDetailsPage (navigate, id) {
    navigate(`/admin/trips/${id}`)
}