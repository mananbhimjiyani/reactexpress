export default Logout;

function Logout(){

    localStorage.clear();
    sessionStorage.clear();
    window.location.href = '/';
}
