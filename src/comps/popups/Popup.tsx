import { useSnapshot } from "valtio";
import GState from "../../libs/gstate";
import PageTransition from "../../pages/index/PageTransition";
import FilterBooksPopup from "./FilterBooksPopup";
import AddUserPopup from "./AddUserPopup";
import AddBookPopup from "./AddBookPopup";

export default function PopUp() {
    useSnapshot(GState);
  
    return <div id='popup' onClick={() => GState.popupVis = false} style={{ pointerEvents: !GState.popupVis ? "none" : "auto" }}>
      
      <PageTransition cond={!GState.popupVis}>
        <div id='popup-container'>
          {
            (() => {
  
              switch (GState.popupType) {
                case "filter-books": return <FilterBooksPopup />
                case "add-book": return <AddBookPopup />
                case "edit-book": return <AddBookPopup />
                case "add-user": return <AddUserPopup />
              }
              return <></>
            })()
          }
        </div>
      </PageTransition>
    </div>
  }