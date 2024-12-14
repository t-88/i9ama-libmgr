import { useSnapshot } from "valtio";
import "./ImgViewer.css";
import imgViewerState, { imgViewer } from "./img_view";
import PageTransition from "../../pages/index/PageTransition";

export default function ImgViewer() {
    useSnapshot(imgViewerState);

    return <PageTransition
        cond={!imgViewerState.visible}
        className={`
                ${!imgViewerState.visible ? "pointer-events-none " : ""} 
                absolute z-30 top-0 left-0 w-full h-full
            `}
        onClick={() => imgViewer.hide()}
    >
        <div id="img-preview"
            className=" w-full h-full flex  w-full h-full items-center justify-center"
        >
            <img
                onClick={(e) => e.stopPropagation()}
                src={imgViewerState.img_base64} className="max-h-1/2 rounded shadow-xl p-1 border bg-white" alt="failed to load img"
            />

        </div>
    </PageTransition>

}