import {useState,useEffect} from "react"

export default function App(){
    return (
        <>
            <div className="body">
                <Header/>
                <Grid/>
            </div>
        </>
    )
}
function Header(){
    return(
        <header>
        <h1>Dummy Data</h1>
        </header>
    )
}
function Grid() {

    let[userData,setUserData]=useState([]);

    useEffect(()=>{

        async function getter(){
            let get=await fetch("https://dummyjson.com/users");
            let data=await get.json();
            setUserData(data.users);
            console.log(data);
        }
        getter();
    },[])

    return(
        <div className="grid">

            <h1>SNO</h1>
            <h1>PROFILE PIC</h1>
            <h1>F NAME</h1>
            <h1>L NAME</h1>
            <h1>GENDER</h1>
            <h1>E-MAIL</h1>
            <h1>USERNAME</h1>
            <h1>DOMAIN</h1>
            <h1>IP</h1>
            <h1>UNIVERSITY</h1>

            {userData.map((e)=>(
                <>
                <h3>{e.id}</h3>
                <img src={e.image} className="profileimg"/>
                <h3>{e.firstName}</h3>
                <h3>{e.lastName}</h3>
                <h3>{e.gender}</h3>
                <h3>{e.email}</h3>
                <h3>{e.username}</h3>
                <h3>{e.domain}</h3>
                <h3>{e.ip}</h3>
                <h3>{e.university}</h3>
                </>
            ))}


            
        </div>
    )
}
