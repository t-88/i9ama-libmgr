import { useSnapshot } from "valtio";
import GState from "../../libs/gstate";
import PageTransition from "../../pages/index/PageTransition";
import AddUserPopup from "./AddUserPopup";
import AddBookPopup from "./AddBookPopup";
import BookBookPopup from "./BookBookPopup";
import  "./Popup.css";
import { popupState } from "../../libs/popup";
import AddAdminPopup from "./AddAdminPopup";

export default function PopUp() {
    useSnapshot(popupState);
  
    return <div id='popup' onClick={() => popupState.popupVis = false} style={{ pointerEvents: !popupState.popupVis ? "none" : "auto" }}>
      
      <PageTransition cond={!popupState.popupVis}>
        <div id='popup-container'>
          {
            (() => {
  
              switch (popupState.popupType) {
                case "add-book": return <AddBookPopup />
                case "edit-book": return <AddBookPopup />
                case "add-user": return <AddUserPopup />
                case "edit-user": return <AddUserPopup />
                case "add-admin": return <AddAdminPopup />
                case "edit-admin": return <AddAdminPopup />
                case "book-book": return <BookBookPopup />
              }
              return <></>
            })()
          }
        </div>
      </PageTransition>
    </div>
  }