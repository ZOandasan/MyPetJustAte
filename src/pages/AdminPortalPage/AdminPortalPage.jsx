import * as usersAPI from '../../utilities/users-api';

export default function AdminPortalPage({user}){
    async function makeAdmin(){
        // Admin = True
    }

    return (
        <>
            <h1>Admin Portal</h1>
            <form>
                <label>Password</label>
                <input type="password"></input>
                <button type="submit">Login</button>
            </form>
        </>
    )
}