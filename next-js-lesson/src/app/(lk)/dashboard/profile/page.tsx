
const fetchData = () => fetch('https://jsonplaceholder.typicode.com/todos/1', {
    cache: "no-store"
})
    .then(response => response.json())

const ProfilePage = async () => {
    const data = await fetchData()

    return (
        <div>
            {data.id}
        </div>
    );
};

export default ProfilePage;