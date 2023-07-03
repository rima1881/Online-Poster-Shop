import styles from "./AdminNavbar.module.css"

export default function AdminNavbar(){
    return(
        <nav>
            <ul>
                <li><a href="/admin/users">Users</a></li>
                <li><a href="/admin/roles">Roles</a></li>
                <li><a href="/admin/products">Products</a></li>
                <li><a href="/admin/drawings">Drawings</a></li>
            </ul>
        </nav>
    )
}