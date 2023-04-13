import { useCallback, useEffect, useState } from 'react'
import Box from '../components/Box'
import Editor from '../components/Editor'
import axios from 'axios'
import Button from '../components/Button';

function MainPage() {
    const [edit, setEdit] = useState("");
    useEffect(()=>{
        (async() => {
            const {data:{rs}} = await axios.get("/tmp");
            setEdit(rs);
        })()
    });

    useEffect(()=>{
        if(edit.length > 0)
            axios.post("/tmp", {
                content:edit
            });
    },[edit]);

    const handleSubmit = useCallback(async()=>{
        if(edit.replace(/<[/\w\s"=-]*>/gi, "").length === 0){            
            alert("메모가 비어있습니다.")
            return;
        }
        try{
            const {data} = await axios.post("/",{
                content: edit
            });
            alert("제출완료")
        }
        catch(e){
            alert('저장실패')
        }
    },[edit])

    return (
        <Box p={"16px"}>
            <h1>클라우드 메모장</h1>
            <Editor value={edit} onChange={setEdit} />
            <Button mt={"10px"} onClick={handleSubmit}>제출</Button>
        </Box>
    )
}

export default MainPage
