"use client";
import axios from "axios"
import React, {useState } from "react";
import styles from "./page.module.scss";
import { PdfViewer } from "../components/PDFViewer/PdfViewer";
import { Loader } from "../components/Loader/Loader";
export default function Page() {
  const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL;
  console.log(API_BASE)
  const [jobDescription, setJobDescription] = useState('');
  const [languages, setLanguages]= useState("")
  const [tools,setTools]=useState('')
  const [pdfFile,setpdfFile]=useState('')
  const [loading,setLoading] = useState(false)
async function sendJobDescription(jobDescription:string){
    try{
        axios.post(`${API_BASE}/description`,{
            description:jobDescription
        })
        setLoading(true)
    }
    catch(error){
        console.error('Error sending job description:', error);
        alert('Failed to send job description. Please try again.');    
    }
}

async function getCustomCV() {
    try {
      const response = await axios.get(`${API_BASE}/customCV`, {
        responseType: "blob", // To handle the binary response
      });
  
      // Create a link to download the PDF
      const file = new Blob([response.data], { type: "application/pdf" });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(file);
      setpdfFile(link.href)
    } catch (error) {
      console.error("Error fetching custom CV:", error);
      alert("Failed to generate the custom resume.");
    }
    setLoading(false)
  }
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.loader}>
      <Loader loading = {loading}/>
      </div>
    <div className={`${styles.body} ${loading ? styles.overlay : ""}` }>
      <div className={styles.descriptionEntry}>
        <h3>Generate Custom Resume</h3>
        <div className={styles.fullDescriptionField}>
          <label>Job Description</label>
            <input placeholder="Enter Job Description or Drag .txt or pdf file here" type="text"
            value={jobDescription} onChange={(e)=>{setJobDescription(e.target.value)}}/>
        </div>
        <div className={styles.orBlock}>
            <div className={styles.divider}></div>
            <h2>OR</h2>
            <div className={styles.divider}></div>
            </div>
        <div className={styles.manualInputField}>
          <input type="text" value={languages} onChange={(e)=>{setLanguages(e.target.value)}} placeholder="Enter list of languages, comma seperated" />
          <input type="text" value={tools} onChange={(e)=>{setTools(e.target.value)}} placeholder="Enter list of TOOLS, comma seperated" />
        </div>
        <div>
          <button
            type="button"
            onClick={async () => {
              console.log(jobDescription);
              if (jobDescription && (languages || tools)){
                  alert("The tool will use the Job Description and not Manual Entry if both are provided")
                }
                if (pdfFile) {
                  setpdfFile("")
                }
                await sendJobDescription(jobDescription);
                await getCustomCV();                
            }}
          >
            Generate CV
          </button>
        </div>
      </div>
      {pdfFile != ""? (
        <div className={styles.pdfViewer}>{PdfViewer(pdfFile)}</div>
      ) : (
        ""
      )}
    </div>
    {/* <Accordion/> */}
    </div>
  );
}
