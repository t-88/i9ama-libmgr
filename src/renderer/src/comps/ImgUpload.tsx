import { ForwardedRef, forwardRef, useImperativeHandle, useRef, useState } from "react";
import "./ImgUpload.css";
import { imgViewer } from "./img-viewer/img_view";

import imgIMG from "../assets/img.png";
import uploadIMG from "../assets/upload.png";
import closeIMG from "../assets/close.png";



const ImgUpload = forwardRef(function ({ title, titleClassName,maxImgs, onUploadImg,defulatVal }: { title: string, titleClassName?: string, maxImgs?: number, onUploadImg?: any, defulatVal? : any }, ref: ForwardedRef<any>) {

    useImperativeHandle(ref, () => {
        return {
            checkInput: () => {
                if (imgs.length != maxImgs) {

                    if (localRef.current?.classList.contains("popup-error")) {
                        localRef.current?.classList.remove("popup-error");
                        localRef.current?.classList.add("popup-error-same");
                    } else {
                        localRef.current?.classList.add("popup-error");
                        localRef.current?.classList.remove("popup-error-same");
                    }


                    return false;
                }

                localRef.current?.classList.remove("popup-error");
                localRef.current?.classList.remove("popup-error-same");

                return true;
            },
            getInput : () => {
                return imgs;
            },
            setInput :(imgs : any[]) => {
                setImgs([...imgs])
            }
        }
    });

    function removeImg(idx: number) {
        imgs.splice(idx, 1);
        setImgs([...imgs]);
    }

    async function _onUploadImg() {
        const imgBase64 = await onUploadImg();
        if(imgBase64) {
            setImgs([...imgs, imgBase64]);
        }

    }


    function onClickImg(imgBase64: string) {
        imgViewer.show(imgBase64);
    }

    const localRef = useRef<HTMLImageElement | null>(null);
    onUploadImg = onUploadImg ?? function () { };
    maxImgs = maxImgs ?? 1;
    const [imgs, setImgs] = useState<string[]>(defulatVal ? [defulatVal] : []);
    titleClassName = titleClassName ?? "";



    return <div ref={localRef} className="popup-input relative flex  gap-2 text-lg m-4 bg-white rounded shadow overflow-hidden">
        <p className={`title text-white font-bold flex items-center justify-center cursor-default  rounded-r ${titleClassName}`}  >{title}</p>
        <div className="flex item-center p-2 w-full justify-between">
            <div className="flex gap-4 items-center justify-center  self-center rounded">
                {imgs.map((img, idx) => {
                    return <div key={idx} className="uploaded-img self-end relative ">
                        <img onClick={() => onClickImg(img)} className="cursor-zoom-in" src={imgIMG} width={28} alt="imgIMG" />
                        <img onClick={() => removeImg(idx)} src={closeIMG} alt="closeIMG" className="close-icon absolute" width={10} />
                    </div>
                })}
            </div>

            <div className="flex items-center gap-2 justify-end self-end self-center rounded ">
                <p className="text-sm">{`${maxImgs} / ${imgs.length}`}</p>
                {
                    maxImgs > imgs.length ?
                        <img onClick={_onUploadImg} className="upload-image cursor-pointer" src={uploadIMG} width={28} alt="uploadIMG" />
                        :
                        <></>
                }
            </div>

        </div>
    </div>
})


export default ImgUpload;