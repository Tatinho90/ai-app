import ChatWindow from "../Components/Chat window"
import ProfilePics from "../Components/Profile-pics"
import celebrities from "../celebrities"

export default function WhoIsOnline(){

    const onlinePhotos = celebrities.map(elem => { 
        return <ProfilePics name={elem.firstName}/>
    } )
    return (
            <>
            <ChatWindow>
           {onlinePhotos}
        </ChatWindow >
            </ >        
       
    )
   
} 