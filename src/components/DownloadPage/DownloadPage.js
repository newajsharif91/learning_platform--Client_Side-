import React from 'react';
import html2canvas from "html2canvas";
import {jsPDF} from "jspdf";
import { FaDownload } from 'react-icons/fa';

const DownloadPage = ({roofElementId, downloadFileName}) => {
    const downloadFileDocument =()=>{
        const input = document.getElementById(roofElementId)
        html2canvas(input).then((canvas)=>{
            const imgData = canvas.toDataURL("image/png")
            const pdf = new jsPDF("p", "pt", "a2")
            pdf.addImage(imgData, "JPEG", 0, 0)
            pdf.save(`${downloadFileName}`)
        })
    }

    return (
        <div>
            <button onClick={downloadFileDocument}><FaDownload></FaDownload></button>
        </div>
    );
};

export default DownloadPage;