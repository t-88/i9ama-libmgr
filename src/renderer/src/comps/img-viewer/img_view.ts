import { proxy } from "valtio";



interface ImgViewerStateObj  { 
    img_base64 : string,
    visible : boolean,
};

let imgViewerState : ImgViewerStateObj = proxy({
    img_base64 : "",
    visible : false,
});



const imgViewer = {
    setImgBase64 : (img_base64 : string) => {imgViewerState.img_base64 = img_base64;},
    show : (img_base64? : string) => {
        if(img_base64) imgViewer.setImgBase64(img_base64); 
        imgViewerState.visible = true;
    },
    hide : () => {
        imgViewerState.visible = false;
    },
}



export default imgViewerState;
export {
    imgViewer
}
