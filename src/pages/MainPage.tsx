import { useCallback, useEffect, useState } from 'react'
import Box from '../components/Box'
import Editor from '../components/Editor'
import axios from 'axios'
import Button from '../components/Button';
import Memo from '../interfaces/Memo';

function MainPage() {
    const [edit, setEdit] = useState("");

    const [memoList, setMemoList] = useState<Memo[]>([])

    useEffect(()=>{
        (async() => {
            const {data} = await axios.get("/tmp");
            setEdit(data.rs);
        })()
        loadMemo()
    });

    useEffect(()=>{
        if(edit.length > 0)
            axios.post("/tmp", {
                content:edit
            });
    },[edit]);

    const loadMemo = useCallback(async()=>{
        const {data} = await axios.get<Memo[]>("/");
        setMemoList(data);
    },[setMemoList])

    const handleSubmit = useCallback(async()=>{
        if(edit.replace(/<[/\w\s"=-]*>/gi, "").length === 0){            
            alert("메모가 비어있습니다.")
            return;
        }
        try{
            const {data} = await axios.post("/",{
                content: edit
            });
            await loadMemo();
            setEdit('')
            alert("제출완료");

        }
        catch(e){
            alert('저장실패')
        }
    },[edit])

    console.log({edit})
    console.log({setEdit})
    return (
        <Box p={"16px"}>
            <h1>클라우드 메모장</h1>
            <Editor onChange={setEdit} />
            <Button mt={"10px"} onClick={handleSubmit}>제출</Button>
            {
                memoList.map(value => <Box
                    border={"#ccc solid 1px"}
                    p="12px"
                    my="8px"
                    key={value.created_at}
                    dangerouslySetInnerHTML={{
                        __html : value.content
                    }}
                >
                </Box>)
            }
        </Box>
    )
}

export default MainPage
